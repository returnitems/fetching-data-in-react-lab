import { useState } from "react"
import StarshipCard from "./StarshipCard";

const StarshipSearch = ({starshipService}) => {
    const [shipName, setShipName] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    const shipSearch = async (event) => {
        event.preventDefault();
        const data = await starshipService.showShip(shipName);
        setSearchResult(data.results);
        setShipName('');
    }

    return (
        <section>
            <h2>Search</h2>
            <form onSubmit={shipSearch}>
                <label htmlFor="shipName">Enter name of ship: </label>
                <input 
                    type="text" 
                    name="shipName" 
                    id="shipName"
                    value={shipName}
                    onChange={(event) => setShipName(event.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            {searchResult.map((ship, index) => (<StarshipCard key={index} ship={ship} />))}
        </section>
    );
};


export default StarshipSearch;