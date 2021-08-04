import { useState } from "react";
const City = ({city, id, onDelete}) => {
    const [isTrue, setIsTrue] = useState(false);
    const toggler = () => {
    setIsTrue(!isTrue);
}
    return(
        <div className="city-div">
            <div>
                <button onClick={() => onDelete(id)} className="delete">X</button>
                <img src={city.imgsrc} alt="" />
                <h3>{city.city}</h3>
                <li>{city.cityName}</li>
               <button onClick={toggler}>info</button>
                <p>{isTrue && city.info}</p>
            </div>
        </div>
    )
}
export default City;