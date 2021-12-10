import {Container} from "./App-style";
import Navbar from "./Component/Navbar/Navbar";
import About from "./Component/About/About";
import { useState } from "react";
import Me from "./Component/Me/Me";
import Tech from "./Component/Tech/Tech";
import Work from "./Component/Work/Work";
import Social from "./Component/Social/Social";
import Footer from "./Component/Footer/Footer";
const App = () => {
  const [night, setNight] = useState(true);
  const [navLink, setNavLink] = useState(0);

  return(
      <Container night={night} >
        <Navbar night={night} setNight={setNight} navLink={navLink} setNavLink={setNavLink} />
        <Me night={night} />
        <About />
        <Tech night={night} />
        <Work night={night} setNavLink={setNavLink} />
        <Social night={night} />
        <Footer night={night} />
      </Container>
    )
}

export default App;

