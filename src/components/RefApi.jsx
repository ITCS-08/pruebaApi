import { useState, useRef } from 'react';


function RefApi() {

  const dropdownRef = useRef(null);

  const openDropdown = () => {
    if (dropdownRef.current) {
      dropdownRef.current.style.display = 'block';
    }
  };

  const closeDropdown = () => {
    if (dropdownRef.current) {
      dropdownRef.current.style.display = 'none';
    }
  };

  return (
    <>
      <button onClick={openDropdown}>Abrir Dropdown</button>
      <button onClick={closeDropdown}>Cerrar Dropdown</button>
      <div ref={dropdownRef} style={{ display: 'none' }}>
        Contenido del Dropdown
      </div>
    </>
  );
}
export default RefApi;