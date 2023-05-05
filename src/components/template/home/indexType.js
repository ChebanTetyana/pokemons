// import { Autocomplete, Box, Button, TextField, Typography } from '@mui/material';
// import { useEffect, useState } from 'react';
// import { useNavigate } from "react-router-dom";

// import api from '../../../services/api'

// import SearchIcon from '@mui/icons-material/Search';

// import './index.css'


// function HomeType() {
//     // Наш список буде попередньо заповнений заявкою
//     const [list, setList] = useState([]);
//     const [inputValue, setValueInput] = useState({
//         type: ''
//     })
//     const navigate = useNavigate();

//     function handleSubmit(event) {
//         event.preventDefault();
//         navigate(`/pokemon/${inputValue}`,);
//     }

//     // Виклик нашої функції щоразу, коли компонент рендериться
//     useEffect(() => {
//         // Виконайте після виконання цього запиту, ми відстежуємо data
//         api.get().then(({data}) => {
//             const listData = data.results.map((item) => ({...item, label: item.types}))
            
//             setList(listData)
//         })
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, []);

//     return(
//         <>
//             <Box className='header'>
                
//                 <Box 
//                     sx={{
//                         display: 'flex',
//                         justifyContent: 'space-between',
//                         flexDirection: 'row',
//                         alignItems: 'center',
//                         width: "55%",
//                         p: 1,
//                         mr: 1,
//                         borderRadius: 1,
//                     }}
//                     component="form"
//                     onSubmit={handleSubmit}
//                     className="searchBox"
//                 >
//                     <Typography variant="h5">
//                         Search Type of Pokemon:
//                     </Typography>

//                     <Autocomplete
//                         id="combo-box-demo"
//                         options={list}
//                         sx={{ width: '40ch' }}
//                         onChange={(e, newEvent) => setValueInput(newEvent.types)}
//                         renderInput={(params) =>                     
//                         <TextField
//                             id="filled-basic"
//                             label="Search for your favorite pokemon"
//                             variant="standard"
//                             {...params}
//                             sx={{
//                                 width: '36ch' 
//                             }}
//                         />}
//                     />

//                     <Button
//                         variant="contained"
//                         type="submit"
//                     >
//                         <SearchIcon />
//                     </Button>
//                 </Box>

//             </Box>

           
//         </>
//     )
// }

// export default  HomeType