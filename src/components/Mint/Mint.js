import {Box, Button, Container, Grid, Paper, Typography} from '@material-ui/core'

import useStyles from './Mint.styles'

const Progress = ({classes, percent, count}) => (
    <Box className={classes.progressContainer}>
        <Box className={classes.progressBack}></Box>
        <Box className={classes.progress} style={{width: `${percent}%`}}></Box>
        <Box className={classes.percent} textAlign="center" style={{left: `${percent}%`}}><Typography variant="body1" style={{fontSize: 10}}>{count}</Typography></Box>
    </Box>
)

const Mint = () => {
    const classes = useStyles()

    return (
        <Box className={classes.root}>
            <Container maxWidth="xl">
                <Box textAlign="center">
                    <Typography variant="h2" color="primary">
                        Minting
                    </Typography>
                    <Typography variant="subtitle2">128/128 Remaining</Typography>
                </Box>
                <Box marginTop={1} textAlign="center">
                    <Box>
                        <Progress classes={classes} percent={75} count={100} />
                    </Box>
                    <Box mt={1}>
                        <Button variant="contained" color="primary" className={classes.mintButton}>
                            Mint
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Mint
