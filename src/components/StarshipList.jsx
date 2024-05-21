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
                    Name: <span>{ship.name}</span> <br />
                    Class: <span>{ship.starship_class}</span> <br />
                    Manufacturer: <span>{ship.manufacturer}</span> <br />
                    Model: <span>{ship.model}</span>
                </li>
            ))}
        </ul>
        </>
    )
};

export default StarshipList;