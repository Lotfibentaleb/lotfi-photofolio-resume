import {Box, Container, Grid, Typography} from '@material-ui/core'

import useStyles from './Roadmap.styles'

const ROADMAP_ITEMS = [
    [
        [
            '/images/roadmap/launch.png',
            'Launch',
            'Airdrop to PepePunks whitelist holders and stealth mint the remaining inventory.'
        ],
        [
            '/images/roadmap/secondary-market.png',
            'Listing on secondary markets',
            'Pixsol will immediately be available on Magic Eden after minting. Other marketplaces TBD.'
        ],
        [
            '/images/roadmap/vote.png',
            'Community Fond',
            'Pixsol DAO will be created and used to vote on how to use 50% of the creator fees.'
        ],
        [
            '/images/roadmap/dao.png',
            'Launchpad',
            'Lets help bring the next blue chip to Solana by using our DAO to decide what projects get to launch through our metasystem.'
        ]
    ],
    [
        [
            '/images/roadmap/airdrop.png',
            '$PIX',
            'An airdrop of our native token to supporters of the Pixsol metasystem.'
        ],
        [
            '/images/roadmap/marketplace.png',
            'Marketplace',
            'We will be launching our own in house NFT Marketplace and all projects that go through launchpad will be immediately listed.'
        ],
        [
            '/images/roadmap/metaverse.png',
            'Pixsolverse',
            'Our very own metaverse for all of our metasystems to unite.'
        ],
        ['', 'Coming Soon', 'Our very own metaverse for all of our metasystems to unite.']
    ],
    [['', 'Coming Soon', 'Our very own metaverse for all of our metasystems to unite.']]
]

const Roadmap = () => {
    const classes = useStyles()

    return (
        <Box className={classes.root}>
            <Container maxWidth="xl">
                <Box textAlign="center">
                    <Typography variant="h2">Roadmap</Typography>
                </Box>
                <Box marginTop={1}>
                    {ROADMAP_ITEMS.map((items, i) => (
                        <Grid
                            container
                            key={`roadmap-items-${i}`}
                            className={`${classes.items}  ${
                                i % 2 === 0 ? 'items-odd' : 'items-even'
                            }`}
                        >
                            {items.map(([image, title, content], j) => (
                                <Grid
                                    item
                                    xs={12}
                                    md={3}
                                    key={`roadmap-item-${i}-${j}`}
                                    className={`${classes.item} ${
                                        i === ROADMAP_ITEMS.length - 1 && j === items.length - 1
                                            ? 'end'
                                            : ''
                                    }`}
                                >
                                    <Box
                                        className={`${classes.imageBox} ${i === 0 ? 'filled' : ''}`}
                                    >
                                        {image && <img src={image} alt={title} />}
                                    </Box>
                                    <Box mt={2} textAlign="center">
                                        <Typography variant="subtitle1">{title}</Typography>
                                        <Typography variant="body1" color="textSecondary">
                                            {content}
                                        </Typography>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    ))}
                </Box>
            </Container>
        </Box>
    )
}

export default Roadmap
