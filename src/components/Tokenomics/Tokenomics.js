import {Box, Container, Grid, Hidden, Paper, Typography} from '@material-ui/core'

import useStyles from './Tokenomics.styles'

const TOKENOMICS_ITEMS = [
    [
        [
            '#24FF00',
            '25%  Airdrop',
            '5.25 billion $PIX will be given freely to the Pixsol metasystem & the Solana ecosystem.'
        ],
        [
            '#5C63FF',
            '25%  Staking Rewards',
            '5.25 billion $PIX available as rewards for those who stake their $PIX.'
        ],
        [
            '#FF2E00',
            '20%  Marketing',
            '4.2 billion $PIX will be made available for promotions and marketing opportunities.'
        ]
    ],
    [
        [
            '#87F8FF',
            '15%  Liquidity',
            "3.15 billion $PIX available for LP's to make buying and selling easier. "
        ],
        [
            '#9A44DD',
            '10%  Team',
            '2.1 billion $PIX is allocated to the Pixsol team. We will unlock these $PIX at a rate of 0.5% per month.'
        ],
        [
            '#FFB800',
            '5%  Partnerships',
            '1.05 billion available for partnerships with other communities.'
        ]
    ]
]

const Item = ({item: [color, title, content], direction, textAlign, classes}) => (
    <Grid container spacing={2} direction={direction}>
        <Grid item>
            <Box className={classes.annotation} style={{backgroundColor: color}}></Box>
        </Grid>
        <Grid item xs>
            <Box textAlign={textAlign}>
                <Box>
                    <Typography variant="subtitle2">{title}</Typography>
                </Box>
                <Box>
                    <Typography variant="body1" color="textSecondary" style={{fontSize: 14}}>
                        {content}
                    </Typography>
                </Box>
            </Box>
        </Grid>
    </Grid>
)

const Tokenomics = () => {
    const classes = useStyles()

    return (
        <Box className={classes.root}>
            <Container maxWidth="xl">
                <Box textAlign="center">
                    <Typography variant="h2">$PIX Tokenomics</Typography>
                </Box>
                <Box textAlign="center" marginTop={1}>
                    <Container maxWidth="sm">
                        <Typography
                            variant="body1"
                            color="textSecondary"
                            style={{fontSize: '16px'}}
                        >
                            With a total of 21 Billion $PIX tokens, the following amounts havebeen
                            allocated for different purposes:
                        </Typography>
                    </Container>
                </Box>
                <Box marginTop={2}>
                    <Hidden smDown>
                        <Grid container spacing={2} justifyContent="center">
                            <Grid item xs={12} md={5}>
                                <Grid container spacing={3}>
                                    {TOKENOMICS_ITEMS[0].map((item, i) => (
                                        <Grid item xs={12}>
                                            <Item
                                                item={item}
                                                classes={classes}
                                                direction="row-reverse"
                                                textAlign="right"
                                            />
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>
                            <Grid item xs={12} md={2}>
                                <img
                                    src="/images/tokenomics.png"
                                    className="responsive"
                                    alt="Tokenomics"
                                />
                            </Grid>
                            <Grid item xs={12} md={5}>
                                <Grid container spacing={3}>
                                    {TOKENOMICS_ITEMS[1].map((item, i) => (
                                        <Grid item xs={12}>
                                            <Item item={item} classes={classes} />
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Hidden>
                    <Hidden mdUp>
                        <Container maxWidth="sm">
                            <Grid container spacing={3}>
                                {TOKENOMICS_ITEMS[0].map((item, i) => (
                                    <Grid item xs={12}>
                                        <Item item={item} classes={classes} />
                                    </Grid>
                                ))}
                                {TOKENOMICS_ITEMS[1].map((item, i) => (
                                    <Grid item xs={12}>
                                        <Item item={item} classes={classes} />
                                    </Grid>
                                ))}
                            </Grid>
                        </Container>
                    </Hidden>
                </Box>
            </Container>
        </Box>
    )
}

export default Tokenomics
