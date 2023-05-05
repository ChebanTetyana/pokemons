import './index.css'
import api from '../../services/api'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

function ListPokemons(){
    const [list, setList] = useState([]);

    useEffect(() => {
        api.get().then(({data}) => {
            setList(data.results)
        })
    }, []);
    console.log(list);
    return(
        <>
            <div className='content'>
                <Typography variant="h2" gutterBottom className='title'> 
                   Choose your favorite 
                </Typography>
                
                <div className='container-grid'>
                    {list.map((item) => (
                        <Link to={"/pokemon/" + item.name} className="pokemonsName"
                        variant="contained"
                        key={item.name} 
                        size="large"
                        >
                            <p>
                                {item.name}    
                            </p>
                        </Link>
                    ))}
                </div>
                
            </div>
        </>
    )
}

export default ListPokemons