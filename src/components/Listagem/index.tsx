import Prato from "../Prato";
import { Lista } from "./style";
import Sushi from '../../assets/images/imagem.png'
import Massa from '../../assets/images/image 1.png'

const Listagem = () => (
    <Lista>
        <li>
            <Prato nota="4.9" nome="Hioki Sushi" imagem={Sushi} descricao="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"/>
        </li>
        <li>
            <Prato nota="4.6" nome="La Dolce Vita Trattoria" imagem={Massa} descricao="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"/>
        </li>
        <li>
            <Prato nota="4.6" nome="La Dolce Vita Trattoria" imagem={Massa} descricao="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"/>
        </li>
        <li>
            <Prato nota="4.6" nome="La Dolce Vita Trattoria" imagem={Massa} descricao="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"/>
        </li>
        <li>
            <Prato nota="4.6" nome="La Dolce Vita Trattoria" imagem={Massa} descricao="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"/>
        </li>
        <li>
            <Prato nota="4.6" nome="La Dolce Vita Trattoria" imagem={Massa} descricao="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"/>
        </li>
    </Lista>
)

export default Listagem