import img1 from "../Component/image/food1.png";
import img2 from "../Component/image/food3.png";
import img3 from "../Component/image/hotel1.png";
import img4 from "../Component/image/hotel2.png";

const BulidApp = () => {
    const imgs = [{img: img1, title: "Hotel Resort"}, {img: img2, title: "Hotel Resort"}, {img: img3, title: "Task Traker"}, {img: img4, title: "Portofolio"}];

    return(
        <section id="portfolio" className="bulid-app">
            <div className="title">
                <h1>App I've Bulit</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil dolor vel sit illum. Doloribus pariatur nulla nostrum sunt iste nemo! Reiciendis</p>
            </div>
            <div className="card-container">
                {
                    imgs.map((img, index)=> (
                        <div key={index} className="card">
                            <img src={img.img} alt="" />
                            <div className="hidden-card">
                                <h1>{img.title}</h1>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis beatae ducimus repellat reprehenderit corporis cum nobis dicta porro cupiditate nemo?</p>
                                <button>Click</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default BulidApp;