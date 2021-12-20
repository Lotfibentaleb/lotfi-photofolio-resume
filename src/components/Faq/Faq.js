import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Container,
    Grid,
    Paper,
    Typography
} from '@material-ui/core'

import useStyles from './Faq.styles'

const FAQ_ITEMS = [
    [
        'What are the minting details for Pixsol?',
        'We will be doing a stealth launch and our mint price is 1 SOL. '
    ],
    ['How many Pixsols exist?', 'Only 128 pixsols will ever exist.'],
    ['Who can buy a Pixsol?', 'Anyone with phantom wallet and 1sol + gas fees!']
]
const Faq = () => {
    const classes = useStyles()

    return (
        <Box className={classes.root}>
            <Box className={classes.positionChanger}>
                <Box textAlign="center">
                    <Typography variant="h2">Frequently Asked Questions</Typography>
                </Box>
                <Box marginTop={1}>
                    <Container maxWidth="xl">
                        <Grid container spacing={2}>
                            {FAQ_ITEMS.map(([question, answer], i) => (
                                <Grid item xs={12} md={4} key={`faq-item-${i}`}>
                                    <Box className={classes.item} textAlign="center">
                                        <Box class={classes.itemInner}>
                                            <Box className={classes.question}>
                                                <Typography
                                                    variant="subtitle2"
                                                    style={{fontSize: 12}}
                                                >
                                                    {question}
                                                </Typography>
                                            </Box>
                                            <Box className={classes.answer}>
                                                <Typography variant="body1" color="textSecondary">
                                                    {answer}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Box>
            </Box>
        </Box>
    )
}

export default Faq
