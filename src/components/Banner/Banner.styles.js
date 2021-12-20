import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    banner: {
        position: 'relative',
        width: '100%',
        // minHeight: '870px',
        background:
            'url(/images/background.png), linear-gradient(180deg, #14000C 0%, #E9018C 100%)',
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(8),
        textAlign: 'center',
        [theme.breakpoints.up('md')]: {
            paddingTop: theme.spacing(14),
            textAlign: 'left'
        }
    },
    bannerContent: {
        flexDirection: 'column-reverse',
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row'
        }
    },
    bannerContentLeft: {
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.up('sm')]: {
            paddingLeft: theme.spacing(12),
            paddingRight: theme.spacing(12)
        },
        [theme.breakpoints.up('md')]: {
            paddingLeft: 0,
            paddingRight: theme.spacing(18),
            marginTop: 0
        }
    },
    bannerText: {
        background: theme.palette.background.default,
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
        '& .MuiTypography-subtitle2': {
            fontWeight: 'bold',
            '& .highlighted': {
                color: theme.palette.primary.main
            },
            '& span:not(.highlighted)': {
                display: 'inline-block'
            }
        }
    },
    bannerContentRight: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 48,
        marginBottom: 48,
        [theme.breakpoints.up('md')]: {
            marginTop: 0,
            marginBottom: 0,
            paddingLeft: theme.spacing(20)
        }
    },
    connectButton: {
        maxWidth: '75%',
        [theme.breakpoints.up('sm')]: {
            // width: 480
        }
    },
    hero: {
        height: theme.spacing(24),
        [theme.breakpoints.up('md')]: {
            height: 'auto'
        }
    },
    seen: {
        textTransform: 'uppercase',
        color: theme.palette.text.grey,
        letterSpacing: '0.615rem'
    }
}))

export default useStyles
