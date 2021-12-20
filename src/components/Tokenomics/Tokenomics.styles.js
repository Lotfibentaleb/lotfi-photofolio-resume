import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(42),
        position: 'relative',
        '&::before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            width: '100%',
            top: theme.spacing(24),
            bottom: 0,
            left: 0,
            background:
                'url(/images/background.png), linear-gradient(180deg, #14000C 0%, #E9018C 120%)',
            zIndex: '-1'
        }
    },
    annotation: {
        width: theme.spacing(1.5),
        height: theme.spacing(1.5),
        marginTop: theme.spacing(0.5),
    }
}))

export default useStyles
