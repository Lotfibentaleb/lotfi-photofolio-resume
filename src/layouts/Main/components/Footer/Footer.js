import {Box, Container, IconButton, Link, Typography} from '@material-ui/core'
import {SportsEsports, Twitter} from '@material-ui/icons'
import useStyles from './Footer.styles'

const Footer = () => {
    const classes = useStyles()

    return (
        <Box className={classes.root} textAlign="center">
            <Container maxWidth="xl">
                <img className={`${classes.logo} responsive`} src="/images/logo.png" alt="PIXSOL" />
                {/* <Box padding={2}>
                    <Typography variant="subtitle2">
                        Copyright © PIXSOL 2021. All rights reserved
                    </Typography>
                </Box> */}
                {/* <Box>
                    <IconButton href="https://twitter.com/pixsol">
                                <img
                                    className="social-icon"
                                    src="/images/twitter.png"
                                    alt="PIXSOL Twitter"
                                />
                            </IconButton>
                            <IconButton href="https://t.me/pixsol">
                                <img
                                    className="social-icon"
                                    src="/images/telegram.png"
                                    alt="PIXSOL Telegram"
                                />
                            </IconButton>
                </Box> */}
            </Container>
        </Box>
    )
}

export default Footer
