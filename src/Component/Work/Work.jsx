import { Button, Card, Container, Desc, DiscContainer, H1, Img, P, Card1, Title, WorkContainer } from "./Work-style";
import img1 from "../../image/food0.png";
import img2 from "../../image/hotel1.png";
import img3 from "../../image/blood0.png";
import img4 from "../../image/portfolio4.png";
import OneCard from "../OneCard/OneCard";
import { useState } from "react";

const Work = ({night, setNavLink}) => {
    const datas= [
        {
            id: "0",
            img: img1,
            title: "Restorant",
            desc: "Restorant is my practice project that i bulid to show i can  build a landing page.",
            cliked: false
        },
        {
            id: "1", 
            img: img2, 
            title: "Hotel",
            desc: "Hotel  is my practice project that i bulid to show i can  build a landing page.",
            cliked: false
        },
        {
            id: "2",
            img: img3,
            title: "Blood Management",
            desc: "Blood Management  is my practice project that i bulid to show i can  build a landing page.",
            cliked: false
        },
        {
            id: "3",
            img: img4,
            title: "Portofolio",
            desc: "Portofolio  is my practice project that i bulid to show i can  build a landing page.",
            cliked: false     
        }
    ];    
const [show, setShow] = useState(-1);
const [active, setActive] = useState(false);
const handleClick =  (index) => {
    setShow(index);
    setActive(true);
}

    return(
        <Container id="works" night={night}>
            <H1>Work</H1>
            <P>These are some of the projects I have worked and participated on up until now.</P>
            <WorkContainer>
                {
                    datas.map((data, index) => (
                            <Card active={active} key={index} ><Img src={data.img} alt="imgone" />
                                <Card1></Card1>
                                <DiscContainer id={index} >
                                    <Title>{data.title}</Title>
                                    <Desc>{data.desc}</Desc>
                                    <Button id={data.id} onClick={() => handleClick(index)}>Read More</Button>
                                </DiscContainer>
                            </Card>
                    ))
                } 
            </WorkContainer>
           {
             active && <OneCard night={night} show={show} setActive={setActive} active={active} ></OneCard>
           }
        </Container>
    )
}
export default Work;