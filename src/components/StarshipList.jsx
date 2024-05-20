import { useEffect, useState } from "react";

const StarshipList = ({starshipService}) => {
    const [ships, setShips] = useState([]);
    
    useEffect(() =>{
        const fetchData = async () => {
            const list = await starshipService.shipList();
            setShips(list);
        };

        fetchData();
        
    }, []);
    
    console.log(ships);

    return (
        <>
        <h2>List of all Starships</h2>
        <p>Number of Starships: {ships.length}</p>
        <ul>
            {ships.map((ship, index) => (
                <li key={index}>
                    Name: {ship.name} <br />
                    Class: {ship.starship_class} <br />
                    Manufacturer: {ship.manufacturer} <br />
                    Model: {ship.model}
                </li>
            ))}
        </ul>
        </>
    )
};

export default StarshipList;