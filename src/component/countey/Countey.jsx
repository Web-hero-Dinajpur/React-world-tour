import './style.css'
const Countey = ({country}) => {
    const {name, flags} = country;
    return (
        <div className='design'>
            <p>name :{name?.common}</p>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Countey;