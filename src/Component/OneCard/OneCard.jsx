import { Above, Bellow, Button, Container, Img,ContainerDis, ImgContainer, LeftIcon, H1, P, RightIcon, SmallContainier, A } from "./OneCard-style";
import blood0 from "../../image/blood0.png";
import blood1 from "../../image/blood1.png";
import blood2 from "../../image/blood2.png";
import blood3 from "../../image/blood3.png";
import food0 from "../../image/food0.png";
import food1 from "../../image/food1.png";
import food3 from "../../image/food3.png";
import food5 from "../../image/food5.png";
import hotel1 from "../../image/hotel1.png";
import hotel2 from "../../image/hotel2.png";
import portfolio1 from "../../image/portfolio1.png";
import portfolio2 from "../../image/portfolio2.png";
import portfolio3 from "../../image/portfolio3.png";
import portfolio4 from "../../image/portfolio4.png";
import portfolio5 from "../../image/portfolio5.png";



const OneCard = ({active,night, show, setActive}) => {
    let slideIndex = 1;
    const plusSlide = (n) => {
        showSlide(slideIndex += n);
    }
  
    const showSlide = (n) => {
        let i;
        let slides = document.getElementsByClassName("one"); 
        if(n > slides.length){
            slideIndex = 1
        }
        if(n < 1){
            slideIndex = slides.length
        }
        for(i = 0; i < slides.length; i++){
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
    }   
    const otherDatas = [{
            id: 0,
            title: "Restorant",
            img: [food5, food1,food3,food0],
            link: " https://github.com/Lemon-zeniye/Food-Restaurant"
        },
        {
            id: 1,
            title: "Hotel",
            img: [hotel2,hotel1],
            link: "https://github.com/Lemon-zeniye/Resourt-app"
        },
        {
            id: 2,
            title: "Online Examination",
            img: [blood1, blood2,blood3,blood0],
            link: "https://github.com/Lemon-zeniye"
        },
        {
            id: 3,
            title: "Portofolio",
            img: [portfolio1, portfolio2,portfolio3,portfolio5,portfolio4],
            link: "https://github.com/Lemon-zeniye"
        }];
    
    console.log(show);
    return(
        <Container>
            <ContainerDis active={active} onClick={() => setActive(false)}>
            </ContainerDis>
            {
                otherDatas.map(data => (
                   data.id === show ? <SmallContainier night={night}>
                   <Above>
                       <LeftIcon onClick={() => plusSlide(-1)}/>  
                       <ImgContainer >
                       {
                           data.img.map((image, index)=> (
                              <Img className="one" src={image} />
                           ))
                       }
                       </ImgContainer>
                       <RightIcon onClick={() => plusSlide(1)} />
                   </Above>
                   <Bellow>
                       <H1>{data.title}</H1>
                       <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique aspernatur at quo et natus praesentium eveniet voluptate delectus consectetur dolorem tenetur consequuntur enim neque velit debitis ut, voluptatem laudantium amet autem. Placeat, ut iste? Ratione eum ex a totam hic autem neque deleniti. Nam tempora dicta, eius quod numquam quis.</P>
                       <A target="_blank" href={data.link}><Button>View Project</Button></A>
                   </Bellow>
               </SmallContainier> : <></>
                ))
            }
        </Container>
    )
}
export default OneCard;

   // <SmallContainier night={night}>
            //     <Above>
            //         <LeftIcon onClick={() => plusSlide(-1)}/>  
            //         <ImgContainer >
            //             <Img className="one" src={img1} />
            //             <Img className="one" src={img2} />
            //             <Img className="one" src={img3} />
            //         </ImgContainer>
            //         <RightIcon onClick={() => plusSlide(1)} />
            //     </Above>
            //     <Bellow>
            //         <H1>Hotel Management</H1>
            //         <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique aspernatur at quo et natus praesentium eveniet voluptate delectus consectetur dolorem tenetur consequuntur enim neque velit debitis ut, voluptatem laudantium amet autem. Placeat, ut iste? Ratione eum ex a totam hic autem neque deleniti. Nam tempora dicta, eius quod numquam quis.</P>
            //         <Button>View Project</Button>
            //     </Bellow>
            // </SmallContainier>