
import React, { useState, useEffect } from 'react';
import Buscador from './Buscador'

const MiApi = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://mindicador.cl/api')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                return response.json();
            })
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);


    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h2>Resultados de la API:</h2>
            {/* <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.nombre}</li>
                ))}
                
            </ul>

            <ul>
                {data
                    .sort((a, b) => a.nombre.localeCompare(b.nombre)) // Orden alfabético ascendente
                    .map(item => (
                        <li key={item.id}>{item.nombre}</li>
                    ))}
            </ul> */}

            <ul>
                {data
                    .sort((a, b) => b.nombre.localeCompare(a.nombre)) // Orden alfabético descendente
                    .map(item => (
                        <li key={item.id}>{item.nombre}</li>
                    ))}
            </ul>

        </div>
    );
};

export default MiApi;
