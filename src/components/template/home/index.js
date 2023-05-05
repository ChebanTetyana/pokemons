import { Autocomplete, Box, Button, Paper, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Charmander from './charmander.png'
import api from '../../../services/api'
import Logo from './poke.png'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import FormatColorResetIcon from '@mui/icons-material/FormatColorReset';
import SearchIcon from '@mui/icons-material/Search';
import PetsIcon from '@mui/icons-material/Pets';
import './index.css'

function Home() {
    // Наш список буде попередньо заповнений заявкою
    const [list, setList] = useState([]);
    const [inputValue, setValueInput] = useState('')
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        navigate(`/pokemon/${inputValue}`,);
    }

    // Виклик нашої функції щоразу, коли компонент рендериться
    useEffect(() => {
        // Виконайте після виконання цього запиту, ми відстежуємо data
        api.get().then(({data}) => {
            const listData = data.results.map((item) => ({...item, label: item.name}))
            
            setList(listData)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
        <>
            <Box className='header'>
                <img 
                    src={Logo} 
                    alt="Pokemon-Logo"
                    width="14%"
                />

                <Box 
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        alignItems: 'center',
                        width: "55%",
                        p: 1,
                        mr: 1,
                        borderRadius: 1,
                    }}
                    component="form"
                    onSubmit={handleSubmit}
                    className="searchBox"
                >
                    <Typography variant="h5">
                        Search Pokemon:
                    </Typography>

                    <Autocomplete
                        id="combo-box-demo"
                        options={list}
                        sx={{ width: '40ch' }}
                        onChange={(e, newEvent) => setValueInput(newEvent.name)}
                        renderInput={(params) =>                     
                        <TextField
                            id="filled-basic"
                            label="Search for your favorite pokemon"
                            variant="standard"
                            {...params}
                            sx={{
                                width: '36ch' 
                            }}
                        />}
                    />

                    <Button
                        variant="contained"
                        type="submit"
                    >
                        <SearchIcon />
                    </Button>
                </Box>

            </Box>

            <div className='home'>
                <div className='body'>
                    <div className="div1">
                        <h2>Charmander</h2>
                        
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                flexDirection: 'column',
                            }}
                        >
                            <Button 
                                variant="contained" 
                                
                                className='buttons'
                                startIcon={<PetsIcon />}
                            >
                               Category: Lagarto
                            </Button>
                            <Button 
                                variant="contained" 
                             
                                className='buttons'
                                startIcon={<LocalFireDepartmentIcon />}
                                sx = {{
                                    mt: 1,
                                    p: 1,
                                }}
                            >  
                                Evolved couple: Charmeleon
                            </Button>
                            <Button 
                                variant="contained" 
                                 
                                className='buttons'
                                startIcon={<FormatColorResetIcon />}
                                sx = {{
                                    mt: 1,
                                    p: 1,
                                }}
                            >
                                
                                Frague: nature of Water
                            </Button>
                            
                            <Paper
                                sx = {{
                                    bgcolor: 'transparent',
                                    borderRadius: 5,
                                }}
                                className="paper"
                            >
                                <Typography 
                                    variant="h6"
                                    gutterBottom
                                    component="div"
                                    sx = {{
                                        m: 7,
                                    }}
                                    className='subTitle'
                                >
                                    Charmander and Fogo-Type Pokémon and two Pokémon captured for the game Pokémon Go. It evolved to Charmeleon at level 16 and to Charizard at level 36.
                                </Typography>
                            </Paper>
                        </Box>
                        
                    </div>
                    
                    <div className="div2">
                        <img 
                        src={Charmander} 
                        alt="Pokemon-Logo"
                        width="60%"
                        />
                    </div> 
                </div>
            </div>
        </>
    )
}

export default Home