import { useEffect } from "react";
import { useState } from "react";
import Countey from "./countey/Countey";

const Home = () => {

    const [counteys, setCounteys] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCounteys(data))
    },[])
    return (
        <div>
            <h2>Country :{counteys.length}</h2>
            {
                counteys.map(country => <Countey key={country.cca3} country={country}></Countey>)
            }
        </div>
    );
};

export default Home;