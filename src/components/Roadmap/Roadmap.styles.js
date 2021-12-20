import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        background:
            'url(/images/background.png), linear-gradient(180deg, rgba(233, 1, 140, 0.51) 0%, rgba(20, 0, 12, 0.51) 100%)',
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(24)
    },
    items: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        position: 'relative',
        '&.items-even': {
            flexDirection: 'row-reverse'
        },
        [theme.breakpoints.up('md')]: {
            '&.items-odd:not(:first-child)::before': {
                position: 'absolute',
                content: '""',
                left: 0,
                width: theme.spacing(2),
                top: 0,
                height: theme.spacing(4) + 1,
                borderBottom: `2px solid ${theme.palette.primary.main}`,
                borderLeft: `2px solid ${theme.palette.primary.main}`,
                borderBottomLeftRadius: theme.spacing(1),
                zIndex: '-1'
            },
            '&.items-odd:not(:last-child)::after': {
                position: 'absolute',
                content: '""',
                right: 0,
                width: theme.spacing(2),
                top: theme.spacing(4) - 1,
                height: `calc(100% - ${theme.spacing(4) - 1}px)`,
                borderTop: `2px solid ${theme.palette.primary.main}`,
                borderRight: `2px solid ${theme.palette.primary.main}`,
                borderTopRightRadius: theme.spacing(1),
                zIndex: '-1'
            },
            '&.items-even::before': {
                position: 'absolute',
                content: '""',
                right: 0,
                width: theme.spacing(2),
                top: 0,
                height: theme.spacing(4) + 1,
                borderBottom: `2px solid ${theme.palette.primary.main}`,
                borderRight: `2px solid ${theme.palette.primary.main}`,
                borderBottomRightRadius: theme.spacing(1),
                zIndex: '-1'
            },
            '&.items-even:not(:last-child)::after': {
                position: 'absolute',
                content: '""',
                left: 0,
                width: theme.spacing(2),
                top: theme.spacing(4) - 1,
                height: `calc(100% - ${theme.spacing(4) - 1}px)`,
                borderTop: `2px solid ${theme.palette.primary.main}`,
                borderLeft: `2px solid ${theme.palette.primary.main}`,
                borderTopLeftRadius: theme.spacing(1),
                zIndex: '-1'
            }
        }
    },
    item: {
        position: 'relative',
        paddingBottom: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            paddingLeft: theme.spacing(3),
            paddingRight: theme.spacing(3),
            // height: theme.spacing(20 + 8),
            '&::before': {
                position: 'absolute',
                content: '""',
                left: 0,
                width: `calc(50% - ${theme.spacing(4)}px)`,
                top: theme.spacing(4),
                height: 0,
                marginTop: -1,
                borderTop: `2px solid ${theme.palette.primary.main}`,
                zIndex: '-1'
            },
            '&:not(.end)::after': {
                position: 'absolute',
                content: '""',
                right: 0,
                width: `calc(50% - ${theme.spacing(4)}px)`,
                top: theme.spacing(4),
                height: 0,
                marginTop: -1,
                borderTop: `2px solid ${theme.palette.primary.main}`,
                zIndex: '-1'
            }
        },
        [theme.breakpoints.up('lg')]: {
            // height: theme.spacing(20 + 6)
        },
        [theme.breakpoints.up('xl')]: {
            // height: theme.spacing(20 + 4)
        }
    },
    imageBox: {
        margin: 'auto',
        width: theme.spacing(8),
        height: theme.spacing(8),
        border: `1px solid ${theme.palette.primary.main}`,
        padding: theme.spacing(2),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&.filled': {
            background: theme.palette.primary.main
        }
    }
}))

export default useStyles
