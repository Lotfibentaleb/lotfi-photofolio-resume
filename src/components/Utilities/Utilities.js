import {Box, Container, Grid, Paper, Typography} from '@material-ui/core'

import useStyles from './Utilities.styles'

const UTILITY_ITEMS = [
    [
        'PIXSOL DAO',
        'As the backbone of our metasystem our voting system will allow every Pixsol owner to have a vote for projects that launch through our launchpad, list on our marketplace, and make decisions with our community fund. '
    ],
    [
        'Launchpad',
        'We will use our launchpad to bring projects and artists to Solana. Every project that applies will need majority approval from Pixsol holders.'
    ],
    [
        'Marketplace',
        'An in house NFT Marketplace that will accept Solana and our native token $PIX. Market fees will be controlled by the Pixsol DAO.'
    ]
]

const Utilities = () => {
    const classes = useStyles()

    return (
        <Box className={classes.root}>
            <Box className={classes.positionChanger}>
            <Container maxWidth="xl">
                <Box textAlign="center">
                    <Typography variant="h2">Utilities</Typography>
                </Box>
                <Box marginTop={0}>
                    <Grid container spacing={2}>
                        {UTILITY_ITEMS.map(([title, content], i) => (
                            <Grid item xs={12} md={4} key={`utility-item-${i}`}>
                                <Box className={classes.item} textAlign="center">
                                    <Box class={classes.itemInner}>
                                        <Typography variant="subtitle1">{title}</Typography>
                                        <Typography variant="body1" color="textSecondary">
                                            {content}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                </Container>
                </Box>
        </Box>
    )
}

export default Utilities
