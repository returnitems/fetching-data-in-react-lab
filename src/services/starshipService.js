const BASE_URL = 'https://swapi.dev/api/starships/'

const shipList = async () => {
    try {
        const res = await fetch(BASE_URL)
        const data = await res.json();
        console.log(data);
        return data;
    } catch (err) {
        console.log(err);
    }
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