import { useEffect } from "react";
import { useState } from "react";

const Home = () => {

    const [counteys, setCounteys] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then(data => setCounteys(data))
    },[])
    return (
        <div>
            <h2>Country :{counteys.length}</h2>
        </div>
    );
};

export default Home;