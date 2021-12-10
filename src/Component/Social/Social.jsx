import { Container, H1, H3, PP,P, SocialContainer, SocialOne, SocialTwo, Twitt, Gith, Compose, Horizontal, Insta, Git, Emai, Instag, Twitte, Ema, A } from "./Social-style"

const Social = ({night}) => {
    return(
        <Container id="contact" night={night}>
            <H1>Get In Touch</H1>
            <P>I am usually active on the mediums listed below. Use your preference to contact me.</P>
            <SocialContainer>
                <SocialOne>
                    <A href="https://github.com/Lemon-zeniye" target="_blank"><Gith night={night}><Git />GitHub</Gith></A>
                    <Instag><Insta/>Instagram</Instag>
                    <Twitte><Twitt />Twitter</Twitte>
                    <A href="mailto:endalklemon.abate@gmail.com" target="_blank"><Ema><Emai />Compose</Ema></A>
                </SocialOne>
                <Horizontal night={night} />
                <SocialTwo>
                    <H3>Do you prefer an email?</H3>
                    <PP>Reach out at my address below</PP>
                    <A href="mailto:endalklemon.abate@gmail.com" target="_blank"><Compose><Emai />Compose</Compose></A>
                </SocialTwo>
            </SocialContainer>
        </Container>
    )
}
export default Social;