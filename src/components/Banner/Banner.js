import {Box, Button, Container, Grid, Link, Typography} from '@material-ui/core'

import useStyles from './Banner.styles'

const Banner = () => {
    const classes = useStyles()

    return (
        <Box className={classes.banner}>
            <Container maxWidth="xl">
                <Grid container className={classes.bannerContent}>
                    <Grid item xs={12} sm={12} md={6} className={classes.bannerContentLeft}>
                        <Box>
                            <Box>
                                <Typography variant="h1">
                                    Solana's first community driven metasystem.
                                </Typography>
                            </Box>
                            <Box mt={3} className={classes.bannerText} textAlign="center">
                                <Typography variant="subtitle2">
                                    COLLECTION OF&nbsp;
                                    <span className="highlighted">128 ABSTRACT PIECES</span> THAT
                                    ARE&nbsp;
                                    <span>
                                        <span className="highlighted">EACH ONE-OF-A-KIND</span>
                                        ,&nbsp;
                                    </span>
                                    <span>
                                        <span className="highlighted">AI GENERATED</span>,&nbsp;
                                    </span>
                                    <span className="highlighted">POWERFUL</span> PIXSOLS OF ART.
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} className={classes.bannerContentRight}>
                        <img
                            className={`${classes.hero} responsive`}
                            src="/images/hero.png"
                            alt="Hero"
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Banner
