import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {paddingTop: theme.spacing(1)},
    positionChanger: {
        marginTop: -theme.spacing(42),
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
        border: `1px solid ${theme.palette.primary.main}`,
        '&::before': {
            position: 'absolute',
            display: 'block',
            content: '""',
            border: `1px solid ${theme.palette.primary.main}`,
            top: -theme.spacing(0.75),
            left: -theme.spacing(0.75),
            right: -theme.spacing(0.75),
            bottom: -theme.spacing(0.75)
        },
        '&::after': {
            position: 'absolute',
            display: 'block',
            content: '""',
            border: `1px solid ${theme.palette.primary.main}8a`,
            top: -theme.spacing(1.5),
            left: -theme.spacing(1.5),
            right: -theme.spacing(1.5),
            bottom: -theme.spacing(1.5)
        }
    },
    question: {
        backgroundColor: theme.palette.background.secondary,
        padding: theme.spacing(2)
    },
    answer: {
        backgroundColor: '#000000c0',
        padding: theme.spacing(2)
    }
}))

export default useStyles
