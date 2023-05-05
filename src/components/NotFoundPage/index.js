import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import Ghosts from './ghosts.png'
import './index.css'

function notFoundPage() {
    return (
        <Box className="notFoundPage">
            <>
                <Typography variant='h2' className='title-main'>   
                    Looking for pokemons? Wrong page!
                </Typography>
                <Typography variant='h6' >
                    <Link to={"/"} className='link-back'>
                       Back to home!
                    </Link>
                </Typography>
            </>

            <img src={Ghosts} alt='Fantasmas' className='img-main'/>
        </Box>
    )
}

export default notFoundPage