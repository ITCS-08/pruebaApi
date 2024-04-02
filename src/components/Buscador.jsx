import React, { useState } from 'react';

const Buscador = ({ data }) => {
    const [query, setQuery] = useState('');
    const [filteredData, setFilteredData] = useState(data);

    const handleSearch = e => {
        const searchTerm = e.target.value;
        setQuery(searchTerm);
        const filteredResults = data.filter(item =>
            item.nombre.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredData(filteredResults);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Buscar..."
                value={query}
                onChange={handleSearch}
            />
            <ul>
                {filteredData.map(item => (
                    <li key={item.id}>{item.nombre}</li>
                ))}
            </ul>
        </div>
    );
};

export default Buscador;
