import { useState } from "react"

const StarshipSearch = ({starshipService}) => {
    const [ship, setShip] = useState('');



    return (
        <section>
            <h1>Search</h1>
            <form>
                <label htmlFor="shipName">Enter name of ship: </label>
                <input 
                    type="text" 
                    name="shipName" 
                    id="shipName"
                />
                <button type="submit">Search</button>
            </form>
        </section>
    );
}


export default StarshipSearch;