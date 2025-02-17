import logoImg from '../../assets/images/logo.svg'
import face from '../../assets/images/facebook.svg'
import insta from '../../assets/images/instagram.svg'
import x from '../../assets/images/twitter.svg'
import { FooterContainer, Links, LogoFooter, P } from './style'

const Footer = () => (
    <FooterContainer>
        <LogoFooter src={logoImg} alt='logo efood'/>
        <Links>
            <a href="">
                <img src={face} alt="logo facebook" />
            </a>
            <a href="">
                <img src={insta} alt="logo instagram" />
            </a>
            <a href="">
                <img src={x} alt="logo x" />
            </a>
        </Links>
        <P>
            A efood é uma plataforma para divulgação de estabelecimentos,
            a responsabilidade pela entrega,qualidade <br />
             dos produtos é toda do estabelecimento contratado. 
        </P>
    </FooterContainer>
)

export default Footer