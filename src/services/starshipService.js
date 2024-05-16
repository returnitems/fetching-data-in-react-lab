const BASE_URL = 'https://swapi.dev/api/starships/'

const shipList = async () => {
    let totalShips = [];
    let url = BASE_URL;

    try {
        while (url) {
            //https://jonathansoma.com/lede/foundations-2019/classes/apis/multiple-pages-of-data-from-apis/
            //This page helped me learn about pagination which helped me get information from all of the pages of starships.
            const res = await fetch(url)
            const data = await res.json();
            // return data;
            totalShips = totalShips.concat(data.results); // Suggested by chatGPT to use this line of code to aggregate the results of all 4 pages of starships into totalShips array.
            // return totalShips;
            url = data.next;          
        }

    } catch (err) {
        console.log(err);
    }

    return totalShips;
};

const showShip = async (shipName) => {
    try {
        const queryString = `?search=${shipName}`
        const res = await fetch(BASE_URL + queryString)
        const data = await res.json();
        return data
    } catch (err) {
        console.log(err);
    }
};

export {shipList, showShip};