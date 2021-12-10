import { Container, Img,H1, H2, P,  Profile, ProfileContainer, Desc, Git, Link, A, Face, Twitt, ImgContainer, Insta, Descx } from "./Footer-style";
import manager from "../../image/manager.png";

const Footer = ({night}) => {
    return(
        <Container night={night}>
            <Profile>
                <ImgContainer>
                    <Img src={manager} />
                </ImgContainer>
                <ProfileContainer>
                    <H1>Endalkachew Abate</H1>
                    <H2>Software Developer</H2>
                    <P>Currently Learning and Practicing software developter at <A>Udemy.com</A>.</P>
                </ProfileContainer>
            </Profile>
            <Desc>
                Site made with <A>React.js</A> and <A>styled Component</A> . Hosted on <A>Netlify</A>. Full source code avalilable on <A>Github</A>.
            </Desc>
            <Descx night={night}>
                <Git />
                <Link/> 
                <Face />
                <Twitt />
                <Insta />
            </Descx>
        </Container>
    )
}
export default Footer;