import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArticleIcon from '@mui/icons-material/Article';
import Pokemon from './pokemon.png'
import './index.css'

function Footer() {
    return(
        <Box className="footer"> 
            <img src={Pokemon} width="50%" className="imageFooter" alt="pokemon-img"/>
            <Box className="rigthSide">
                <Typography 
                    sx={{
                        fontSize: 32,
                        textAlign: 'center'
                    }}
                    className="footerTitle"
                > 
                    Developed by Tetyana Cheban      
                </Typography>

                <Typography 
                    sx={{
                        fontSize: 20,
                        textAlign: 'center'
                    }}
                    className="footerTitle"
                >
                    <a href="https://github.com/otavioaraujo08">
                        <GitHubIcon /> Github    
                    </a>
                </Typography>

                <Typography 
                    sx={{
                        fontSize: 20,
                        textAlign: 'center',
                    }}
                    className="footerTitle"
                >
                    <a href="https://www.linkedin.com/in/tatyana-cheban-23b37a266/">
                        <LinkedInIcon /> Linkedin
                    </a>
                </Typography>

                <Typography 
                    sx={{
                        fontSize: 20,
                        textAlign: 'center'
                    }}
                    className="footerTitle"
                >
                    <a href="https://pokeapi.co/">
                        <ArticleIcon /> Documentation
                    </a>
                </Typography>
            </Box>
        </Box>
    )
}

export default Footer