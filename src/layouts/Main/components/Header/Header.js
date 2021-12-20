import {
    useScrollTrigger,
    AppBar,
    Box,
    Toolbar,
    Link,
    IconButton,
    Container,
    Grid,
    Hidden,
    Button
} from '@material-ui/core'
import {HOME_URL} from 'config/constants'
import useStyles from './Header.styles'

import Logo from './Logo'

const MENU_ITEMS = [
    ['Home', `${HOME_URL}/#`],
    ['Mint', `${HOME_URL}/#mint`],
    ['Roadmap', `${HOME_URL}/#roadmap`],
    ['Utilities', `${HOME_URL}/#utilities`],
    ['$PIX', `${HOME_URL}/#tokenomics`],
    ['Faq', `${HOME_URL}/#faq`]
]

const Header = () => {
    const isScrolling = useScrollTrigger({
        disableHysteresis: true,
        threshold: 160
    })

    const isLightHeader = !isScrolling

    const classes = useStyles()

    const withSmallStyles = className => {
        const smallClass = isScrolling ? ' small' : ''
        return `${className}${smallClass}`
    }

    return (
        <AppBar elevation={0} className={`${classes.appBar} ${isLightHeader ? ' light' : ''}`}>
            <Container maxWidth="xl">
                <Toolbar className={withSmallStyles(classes.toolbar)}>
                    <Logo />

                    <Hidden xsDown>
                        <Box flexGrow={1} />

                        <Box className={withSmallStyles(classes.navBar)}>
                            <Hidden smDown>
                                <Box>
                                    <Grid container spacing={4}>
                                        {MENU_ITEMS.map(([title, link], i) => (
                                            <Grid item key={`menu-item-${i}`}>
                                                <Link
                                                    href={link}
                                                    variant="body1"
                                                    color="textPrimary"
                                                    style={{textTransform: 'uppercase'}}
                                                >
                                                    {title}
                                                </Link>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Box>
                            </Hidden>
                            <Box marginLeft={4} display="flex" alignItems="center">
                                <IconButton href="https://twitter.com/Pixsolio" style={{padding: '8px'}}>
                                    <img
                                        className="social-icon"
                                        src="/images/twitter.png"
                                        alt="PIXSOL Twitter"
                                    />
                                </IconButton>
                                <IconButton href="https://discord.gg/kha3Uz47DF" style={{padding: '8px'}}>
                                    <img
                                        className="social-icon"
                                        src="/images/discord.png"
                                        alt="PIXSOL Discord"
                                    />
                                </IconButton>
                                <Box ml={2}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        className={classes.connectButton}
                                    >
                                        Connect
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </Hidden>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
