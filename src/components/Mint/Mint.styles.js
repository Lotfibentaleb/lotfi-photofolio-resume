import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        // background: theme.palette.background.secondary,
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3)
    },
    progressContainer: {
        height: theme.spacing(2),
        position: 'relative'
    },
    progressBack: {
        position: 'absolute',
        width: '100%',
        height: '2px',
        top: '3px',
        background: '#511238'
    },
    progress: {
        position: 'absolute',
        height: '2px',
        top: '3px',
        background: theme.palette.background.secondary
    },
    percent: {
        position: 'absolute',
        top: theme.spacing(1.5),
        width: theme.spacing(4),
        paddingTop: 2,
        marginLeft: -theme.spacing(2),
        background: theme.palette.background.secondary,
    },
    mintButton: {
        position: 'relative',
        margin: theme.spacing(1),
        width: theme.spacing(46),
        maxWidth: `calc(100% - ${theme.spacing(2)}px)`,
        '&::before': {
            position: 'absolute',
            display: 'block',
            content: '""',
            border: `1px solid ${theme.palette.primary.main}`,
            top: -theme.spacing(0.5),
            left: -theme.spacing(0.5),
            right: -theme.spacing(0.5),
            bottom: -theme.spacing(0.5)
        },
        '&::after': {
            position: 'absolute',
            display: 'block',
            content: '""',
            border: `1px solid ${theme.palette.primary.main}6c`,
            top: -theme.spacing(1),
            left: -theme.spacing(1),
            right: -theme.spacing(1),
            bottom: -theme.spacing(1)
        }
    }
}))

export default useStyles
