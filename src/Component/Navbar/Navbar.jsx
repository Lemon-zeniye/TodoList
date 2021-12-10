import {Moon, Sun, Langua, Men, Clos, A,B,C, Anc} from "./Navbar-style";
import { bool } from "prop-types";
import * as NStyle from "./Navbar-style";
import { useState, useEffect } from "react";
const Navbar = ({setNight, night, setNavLink, navLink}) => {
    const links = [
        {
            title: "Home",
            url: "#home"
        },
        {
            title: "About",
            url: "#about"
        }, {
            title: "Works",
            url: "#works"
        }, 
        {
            title: "Contact Me",
            url: "#contact"
        }
     ];
    const [nav, setNav] = useState(false);
    const [scroll, setScroll] = useState(false);
    const handleScroll = () => {
    const isTop = window.scrollY < 100;
    if(!isTop){
        setScroll(true)
    }else{
        setScroll(false)
    }}
    useEffect(()=> {
        window.addEventListener('scroll', handleScroll);
    }, []);
    
  
    return(
            <NStyle.Nav night={night} scroll={scroll} >
            <NStyle.H2 night={night}>
            <Men onClick={() => setNav(true)} />
            <Clos nav={nav} onClick={() => setNav(false)} />
                Endalkachew.</NStyle.H2>
            <NStyle.Ul night={night} nav={nav}>
                {
                    links.map((link, index) => (
                        <NStyle.Li id={index} onClick={() => setNavLink(index)}><A navLink={navLink} href={link.url} onClick={() => setNav(false)}>{ navLink === index ? <B>{link.title}</B> : <C>{link.title}</C>}</A></NStyle.Li>
                    ))
                }
          </NStyle.Ul >
        <NStyle.IconContainer>
            <NStyle.Button>
              <Anc href="https://www.linkedin.com/in/endalk-abate-116427220" target="_blank" >Let's Talk</Anc> 
          </NStyle.Button>
            <Langua />
            <NStyle.Night night={night} onClick={() => setNight(!night)}>
                 {
                    night ?  <Moon/>  : <Sun /> 
                }
            </NStyle.Night>
        </NStyle.IconContainer>
        </NStyle.Nav>        
    )
}
Navbar.propTypes = {
    nav: bool.isRequired, 
    night: bool.isRequired,
    scroll: bool.isRequired
}
export default Navbar;