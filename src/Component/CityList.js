import { useState } from "react";
import City from "./City";
import image1 from "./images/image1.jpg"
import image2 from "./images/image2.jpg"
import image3 from "./images/image3.jpg"
import image4 from "./images/image5.jpg"

const CityList = () => {
    const [citys, setCitys] = useState([
        {
            city: "NEW YORK",
            cityName: "New York Bridge Tour",
            info: "New york is a beautiful city that found in unite state of america and also it is the most expencive city that is because",
            imgsrc: image1
        },
        {
            city: "TOKYO",
            cityName: "Tokyo Sushi Tour",
            info: "New york is a beautiful city that found in unite state of america and also it is the most expencive city that is because",
            imgsrc: image2
        },
        {
            city: "PARIS",
            cityName: "Paris Light Tour",
            info: "New york is a beautiful city that found in unite state of america and also it is the most expencive city that is because",
            imgsrc: image3
        },
        {
            city: "LONDON",
            cityName: "London Royal Palace Tour",
            info: "New york is a beautiful city that found in unite state of america and also it is the most expencive city that is because",
            imgsrc: image4
        }
    ])
    const deleteHandeler = (id) => {
        setCitys(citys.filter((city, index) => index !== id ))
    }
    return (
        <div className="citylist">
            {
                citys.map((city, index) => 
                    <City key={index} id={index} city={city} onDelete={deleteHandeler}/>
                )
            }
        </div>
    )
}
export default CityList;