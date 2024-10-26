import './style.css'
const Countey = ({country, handleVisited}) => {
    const {name, flags, population, area, cca3} = country;

    console.log(handleVisited)
    return (
        <div className='design'>
            <p>name :{name?.common}</p>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>{area}</p>
            <p>Code: {cca3}</p>
            <button onClick={()=>handleVisited(country)}>Visited</button>
        </div>
    );
};

export default Countey;