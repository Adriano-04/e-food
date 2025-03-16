import { Texto } from '../../style'
import { Button, CloseButton, Modal, Overlay } from './style'
import close from '../../assets/images/close.png'
import { formataPrecos } from '../../utils'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/Reducers/Carrinho'

type Props = {
    prato: Restaurante['cardapio'][0]
    fechar: () => void
}

const ModalPerfil = ({ fechar, prato}: Props) => {
    const dispatch = useDispatch()

    const addPrato = () => {
        dispatch(add(prato))
        fechar()
        dispatch(open())
    }

    return (
    <>
        {prato && (
            <Modal>
                <img src={prato.foto} alt={prato.nome} />
            <div>
                <h3>{prato.nome}</h3>
                <Texto>
                {prato.descricao} <br />
                <br />
                Serve: {prato.porcao}
                </Texto>
                <Button onClick={addPrato}>Adicionar ao carrinho - {formataPrecos(prato.preco)}</Button>
            </div>
                <CloseButton onClick={fechar}>
                    <img src={close} alt="fechar" />
                </CloseButton>
            </Modal>
        )}
        <Overlay onClick={fechar}></Overlay>
    </>
    )
}

export default ModalPerfil