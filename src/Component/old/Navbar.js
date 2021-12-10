// import Name from "./Name";
import {useState} from "react";
const Navbar = () => {
  const lis = [{title: "Home", a: "#home"}, {title: "About Me", a: "#about-me"}, {title: "Portfolio", a: "#portfolio"}, {title: "Contact", a: "#contact"}];
  const liToggler = (e, li) => {
    if(e.target.innerText === li.title){
     const allLink =  document.querySelectorAll(".link-a");
     allLink.forEach(linkone => linkone.classList.remove("active"));
      e.target.classList.add("active");
    }
  }
  const [navToggle, setNavToggle] = useState(false);
  console.log(navToggle)
  return(
    <nav>
      <div className="logo">
        {/* <Name /> */}
        Endalkachew
      </div>
      <div onClick = {() => setNavToggle(!navToggle)} className="links-container">
        <div  className={`hampburger ${navToggle  && "nav-active"}`}>
          <div className="h-one"></div>
          <div className="h-two"></div>
          <div className="h-three"></div>
        </div>
        <ul className={`links ${navToggle && "nav-active"}`}>
          {
            lis.map((li, id) => (
              <li key={id} onClick={(e) => liToggler(e, li)} className="link"><a  className="link-a" href={li.a}>{li.title}</a></li>
            ))
          }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;