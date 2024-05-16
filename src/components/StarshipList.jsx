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
        <h1>List of all Starships</h1>
        <ol>
        </ol>
        </>
    )
}

export default StarshipList;