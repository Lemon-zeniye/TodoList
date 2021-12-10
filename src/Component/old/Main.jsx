import img from "../Component/image/man.png";
const Main = () => {
    
    return(
        <section id="home" className="main">
            <div className="profile">
                <h1>Hi, I'm Endalkachew</h1>
                <h1>I love to bulid amazing user interfaces</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, ipsam necessitatibus! At doloremque tempore architecto distinctio.</p>
                <div>
                    <button className="b-one">Contact Me</button>
                    <button className="b-two">See My Past Work</button>
                </div>
            </div>
            <div className="img">
                <img src={img} alt="" />
            </div>
        </section>
    )
}
export default Main;