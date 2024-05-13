import { useState, useEffect } from "react";
import Listado from "./Listado";
import Buscador from "./Buscador";



function ComponentFetch() {

    // 3. info guardará los valores traídos desde la API
    const [info, setInfo] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // 2. LLamamos al función que consume la API al momento de montar el

    useEffect(() => {
        consultarInformacion();
    }, []);

    // 1. Función que consulta la API
    const consultarInformacion = async () => {

        try {
            const url = 'https://api.boostr.cl/pharmacies/24h.json';
            const response = await fetch(url)
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json()
            if (data && data.data && data.data.length > 0) {
                setInfo(data.data);
                setIsLoading(false);
               // setInfo(data.data[0]); // Para mostrar solo el primer elemento 
                //  setInfo(`"${data.data.id}" - ${data.data.name}`); // con setInfo
                console.log("data", data);
            } else {
                throw new Error('Data format is incorrect');
            }
        } catch (error) {
            setError('Error fetching data', error.messaage);
            setIsLoading(false);

        }
    };

    return (
        <>
         <div>
            {isLoading ? (
                <p>Cargando...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (

                <>
                <Buscador info={info} setInfo={setInfo} />
                <Listado info={info} />
                
                </>             

            )}
        </div>
    </>
);
}
      
export default ComponentFetch;