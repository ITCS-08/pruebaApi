import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Buscador = ({ info, setInfo }) => {
    const [busqueda, setBusqueda] = useState('');

    const handleBusqueda = (e) => {
      setBusqueda(e.target.value);
      const filteredFarmacias = info.filter((farmacias) => {
        return Object.values(farmacias).some((value) =>
          value.toString().toLowerCase().includes(e.target.value.toLowerCase())
        );
      });
      setInfo(filteredFarmacias);
    };
  
    return (
      <div className="mt-4">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar..."
          value={busqueda}
          onChange={handleBusqueda}
        />
      </div>
    );
};

export default Buscador;
