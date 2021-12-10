import img from "../Component/image/me.jpg"
const AboutMe = () => {
    return(
        <section id="about-me" className="about-me">
            <h1>About Me</h1>
            <div className="about-container">
                <div className="img-me">
                    <img src={img} alt="" />
                </div>
                <div className="discription">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore porro soluta adipisci at aperiam exercitationem hic ea atque sequi illo quaerat, possimus sed rem quo dolorem pariatur natus amet nemo dolores nesciunt inventore ipsum iure reiciendis repellat? Beatae veniam nemo aliquid, temporibus sequi reiciendis atque debitis sunt. Sequi amet iure voluptatum, asperiores laborum, eaque ducimus, quo voluptates cumque perferendis ratione!</p>
                </div>
            </div>
        </section>
    )
}
export default AboutMe;