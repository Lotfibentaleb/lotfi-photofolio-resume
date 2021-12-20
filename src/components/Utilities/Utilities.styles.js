import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        // paddingBottom: theme.spacing(28)
    },
    positionChanger: {
        marginTop: -theme.spacing(24),
        paddingTop: theme.spacing(8)
    },
    item: {
        padding: theme.spacing(1.5),
        height: '100%',
        position: 'relative'
    },
    itemInner: {
        position: 'relative',
        height: '100%',
        padding: theme.spacing(2),
        border: `1px solid ${theme.palette.primary.main}ae`,
        '&::before': {
            position: 'absolute',
            display: 'block',
            content: '""',
            border: `1px solid ${theme.palette.primary.main}6c`,
            top: -theme.spacing(0.75),
            left: -theme.spacing(0.75),
            right: -theme.spacing(0.75),
            bottom: -theme.spacing(0.75)
        },
        '&::after': {
            position: 'absolute',
            display: 'block',
            content: '""',
            border: `1px solid ${theme.palette.primary.main}`,
            top: -theme.spacing(1.5),
            left: -theme.spacing(1.5),
            right: -theme.spacing(1.5),
            bottom: -theme.spacing(1.5)
        }
    }
}))

export default useStyles
