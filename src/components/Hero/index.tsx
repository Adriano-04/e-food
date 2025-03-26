import { Banner, Logo, Titulo } from './style'
import HeroImg from '../../assets/images/fundo.png'
import logoImg from '../../assets/images/logo.svg'

const Hero = () => (
    <Banner style={{ background: `url(${HeroImg})`}}>
            <Logo src={logoImg} alt="" />
            <Titulo>
                Viva experiências gastronômicas <br /> 
                no conforto da sua casa
            </Titulo>
    </Banner>
)

export default Hero