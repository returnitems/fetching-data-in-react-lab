const StarshipCard = ({ship}) => {
    return (
        <div>
            <h2>{ship.name}</h2>
            <p>Class: <span>{ship.starship_class}</span></p>
            <p>Manufacturer: <span>{ship.manufacturer}</span></p>
            <p>Model: <span>{ship.model}</span></p>
        </div>
    );
};

export default StarshipCard;