const Contact = () => {
    return(
        <section id="contact" className="contact">
            <div className="contact-title">
                <h1>Contact Me</h1>
                <p>Pleace fill the form and describe your project needs and I'll contact you as soon as possible.</p>
            </div>
            <form>
                <div className="inputs">
                    <input type="text" autoComplete="off"  placeholder="Name" className="name" />
                    <input type="text" autoComplete="off"  placeholder="Phone Number" className="name" />
                    <input type="text" autoComplete="off"  placeholder="Email" className="name" />
                    <input type="text"  autoComplete="off" placeholder="Subject" className="name" />
                </div>
                <div className="text-area">
                    <textarea placeholder="Please describe your project shortly"></textarea>
                    <button>CONTACT ME</button>
                </div>
            </form>
        </section>
    )
}
export default Contact;