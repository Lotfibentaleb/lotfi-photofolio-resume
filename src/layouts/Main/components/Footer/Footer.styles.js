import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: theme.spacing(1),
        // paddingBottom: theme.spacing(4),
        // color: theme.palette.secondary.main,
    },
    logo: {
        height: theme.spacing(2.6),
        // [theme.breakpoints.up('sm')]: {
        //     height: theme.spacing(12)
        // },
        // [theme.breakpoints.up('md')]: {
        //     height: theme.spacing(16)
        // },
        // [theme.breakpoints.up('lg')]: {
        //     height: 'auto'
        // },
    }
}))

export default useStyles
