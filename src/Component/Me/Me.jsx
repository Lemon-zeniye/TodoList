import { MeContainer, Img, H1, Span} from "./Me-style"
import manager from "../../image/manager.png";

const Me = ({night}) => {
    return(
        <MeContainer id="home">
            <H1 night={night}>Hi, I Am <Span>Endalkachew Abate</Span> , A Web Developer Located In Addis Ababa, Ethiopia.</H1>
            <Img src={manager} />
        </MeContainer>
    )
}

export default Me;