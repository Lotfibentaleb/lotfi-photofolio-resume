// import { useState } from 'react'
import {Box} from '@material-ui/core'
import Banner from 'components/Banner'
import Mint from 'components/Mint'
import Roadmap from 'components/Roadmap'
import Utilities from 'components/Utilities'
import Tokenomics from 'components/Tokenomics'

import useStyles from './Home.styles'
import Faq from 'components/Faq'

const Home = () => {
    const classes = useStyles()

    return (
        <Box className={classes.root}>
            <Box>
                <Banner />
            </Box>
            <Box id="mint">
                <Mint />
            </Box>
            <Box id="roadmap">
                <Roadmap />
            </Box>
            <Box id="utilities">
                <Utilities />
            </Box>
            <Box id="tokenomics">
                <Tokenomics />
            </Box>
            <Box id="faq">
                <Faq />
            </Box>
        </Box>
    )
}

export default Home
