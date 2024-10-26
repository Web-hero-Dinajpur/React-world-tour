import { useEffect } from "react";
import { useState } from "react";
import Countey from "./countey/Countey";

const Home = () => {

    const [visitedCountries, setVisitedcountries] = useState([]);

    const handleVisited = (countries)=>{
        console.log('add the visited countrires');
        const newVisitedCountries = [...visitedCountries, countries];
        setVisitedcountries(newVisitedCountries);
    }

    const [counteys, setCounteys] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCounteys(data))

      
    },[])
    return (
        <div>
            <h2>Country :{counteys.length}</h2>
            <div>
            <h3>visited countries:{visitedCountries.length}</h3>
            <ul>
                {
                    visitedCountries.map(country =><li key={country.cca3}>{country.name.common}</li>)
                }
            </ul>
            </div>
            {
                counteys.map(country => <Countey 
                    key={country.cca3} 
                    handleVisited={handleVisited}
                    country={country}>
                    </Countey>)
            }
        </div>
    );
};

export default Home;