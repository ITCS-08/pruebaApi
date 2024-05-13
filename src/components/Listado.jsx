import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
//import ReactHTMLTableToExcel from 'react-html-table-to-excel';


function Listado({ info }) {

    if (!Array.isArray(info) || info.length === 0) {
        return <p>No hay información para mostrar.</p>; // Manejo de datos vacíos
    }

    info.sort((a, b) => a.city.localeCompare(b.city));

    return (
        <>
            <div className="container  ">

                <Table className="table mt-4 " id="farmacias-table" striped bordered hover>
                    <thead className=" text-center">
                        <tr >
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Teléfono</th>
                            <th>Calle</th>
                            <th>Ciudad</th>
                            <th>Latitud</th>
                            <th>Longitud</th>
                        </tr>
                    </thead>
                    <tbody>
                        {info.map((farmacia, index) => (
                            <tr key={index}>
                                <td className=" text-center">{farmacia.id}</td>
                                <td>{farmacia.name}</td>
                                <td>{farmacia.phone}</td>
                                <td>{farmacia.street}</td>
                                <td>{farmacia.city}</td>
                                <td className=" text-center">{farmacia.latitude}</td>
                                <td className=" text-center">{farmacia.longitude}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>


            </div>
        </>
    );
}

export default Listado;