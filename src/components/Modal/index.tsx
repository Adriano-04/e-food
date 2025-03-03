import { Restaurante } from '../../pages/Home'
import { Texto } from '../../style'
import { Button, CloseButton, Modal, Overlay } from './style'
import close from '../../assets/images/close.png'

type Props = {
    prato?: Restaurante['cardapio'][0]
    fechar: () => void
}

export const formataPrecos = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

const ModalPerfil = ({ fechar, prato}: Props) => {

    return (
    <>
        <Modal>
            <img src={prato?.foto} alt={prato?.nome} />
        <div>
            <h3>{prato?.nome}</h3>
            <Texto>
            {prato?.descricao} <br />
            <br />
            Serve: {prato?.porcao}
            </Texto>
            <Button>Adicionar ao carrinho - {formataPrecos(prato?.preco)}</Button>
        </div>
        <CloseButton onClick={fechar}>
            <img src={close} alt="fechar" />
        </CloseButton>
        </Modal>
        <Overlay onClick={fechar}></Overlay>
    </>
    )
}

export default ModalPerfil