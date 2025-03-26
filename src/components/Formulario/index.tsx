import { useDispatch, useSelector } from "react-redux"
import * as yup from 'yup'
import { Button } from "../Modal/style"
import { Titulo, FormCheckout, FormLabel, Row } from "./style"
import { RootReducer } from "../../store"
import { formataPrecos } from "../../utils"
import { useFormik } from "formik"
import { usePurchaseMutation } from "../../services/api"
import { useEffect } from "react"
import MaskedInput from 'react-input-mask'
import { clear, setCheckoutId } from "../../store/Reducers/Carrinho"


type Props = {
    tipo: 'entrega' | 'pagamento'
    ProximaEtapa: () => void
    voltarEtapa: () => void
}

const Formulario = ({ tipo, voltarEtapa, ProximaEtapa }: Props) => {
    const { items } = useSelector((state: RootReducer) => state.carrinho)
    const [purchase, {isSuccess, data}] = usePurchaseMutation()
    const dispatch = useDispatch()

    const total = items.reduce((acc, item) => acc + item.preco, 0)

    const formPagamento = useFormik({
        initialValues: {
            cardName: '',
            cardNumber: '',
            code: '',
            expiresMonth: '',
            expiresYear: '',
        },
        validationSchema: yup.object({
            cardName: yup
                .string()
                .required('campo obrigatório'),
            cardNumber: yup
                .string()
                .required('campo obrigatório'),
            code: yup
                .string()
                .max(4, 'maximo 4 caracteres')
                .required('campo obrigatório'),
            expiresMonth: yup
                .string()
                .required('campo obrigatório'),
            expiresYear: yup
                .string()
                .required('campo obrigatório')
        }),
        onSubmit: (values) => {

            if (formEntrega.isValid && formPagamento.isValid) {
                const pedido: CheckOut = {
                    products: [{
                        id: 1,
                        price: 10.99
                    }],
                    delivery: {
                        receiver: formEntrega.values.receiver,
                        address: {
                            description: formEntrega.values.description,
                            city: formEntrega.values.city,
                            zipCode: formEntrega.values.zipCode,
                            number: Number(formEntrega.values.number),
                            complement: formEntrega.values.complement
                        }
                    },
                    payment: {
                        card: {
                            name: values.cardName,
                            number: values.cardNumber,
                            code: Number(values.code),
                            expires: {
                                month: Number(values.expiresMonth),
                                year: Number(values.expiresYear)
                            }
                        }
                    }
                }

                purchase(pedido)
            }
        }
    })

    const formEntrega = useFormik({
        initialValues: {
            receiver: '',
            city: '',
            number: '',
            complement: '',
            zipCode: '',
            description: ''
        },
        validationSchema: yup.object({
            receiver: yup
                .string()
                .required('campo obrigatório'),
            city: yup
                .string()
                .required('campo obrigatório'),
            number: yup
                .string()
                .min(5, 'maximo 5 caracteres')
                .required('campo obrigatório'),
            complement: yup
                .string()
                .max(40, 'maximo 40 caracteres'),
            zipCode: yup
                .string()
                .min(9 , 'maximo 9 digitos')
                .required('campo obrigatório'),
            description: yup
                .string()
                .required('campo obrigatório'),
        }),
        onSubmit() {
        },
    })
    
    const checkForms = (fieldName: string) => {
        if (tipo === 'entrega') {
            const isTouched = fieldName in formEntrega.touched
            const isValid = fieldName in formEntrega.errors
            const EntregaError = isTouched && isValid

            return EntregaError
        }
        
        if (tipo === 'pagamento') {
            const isTouched = fieldName in formPagamento.touched
            const isValid = fieldName in formPagamento.errors
            const pagamentoError = isTouched && isValid

            return pagamentoError
        }

        return false
    }
    
    const formNext = () => {
        if (formEntrega.isValid && formEntrega.dirty) {
            ProximaEtapa()
        }

        if (formPagamento.isValid && formPagamento.dirty) {
            ProximaEtapa()
        }

    }

    useEffect(() => {
        if (isSuccess) {
            dispatch(setCheckoutId(data.orderId))
            dispatch(clear())
        }
    }, [dispatch, isSuccess, data])

    return (
        <>
            <Titulo>{tipo === 'entrega' ? 'Entrega' : `Pagamento - Valor a pagar ${formataPrecos(total)}`}</Titulo>
            <FormCheckout onSubmit={tipo === 'entrega' ? formEntrega.handleSubmit : formPagamento.handleSubmit}>
                {tipo === 'entrega' && (
                    <>
                        <FormLabel htmlFor="recebedor">Quem irá receber</FormLabel>
                        <input 
                            width="100%"
                            type="text"
                            id="recebedor"
                            name="receiver"
                            value={formEntrega.values.receiver}
                            onChange={formEntrega.handleChange}
                            onBlur={formEntrega.handleBlur}
                            className={checkForms('receiver') ? 'error' : ''}
                        />
                        <FormLabel htmlFor="endereco">Endereço</FormLabel>
                        <input
                            width="100%"
                            type="text"
                            id="endereco"
                            name="description"
                            value={formEntrega.values.description}
                            onChange={formEntrega.handleChange}
                            onBlur={formEntrega.handleBlur}
                            className={checkForms('description') ? 'error' : ''}
                        />
                        <FormLabel htmlFor="cidade">Cidade</FormLabel>
                        <input
                            width="100%"
                            type="text"
                            id="cidade"
                            name="city"
                            value={formEntrega.values.city}
                            onChange={formEntrega.handleChange}
                            onBlur={formEntrega.handleBlur}
                            className={checkForms('city') ? 'error' : ''}
                        />
                        <Row>
                            <div>
                                <FormLabel htmlFor="cep">CEP</FormLabel>
                                <MaskedInput 
                                    width="220px"
                                    type="text"
                                    id="cep"
                                    name="zipCode"
                                    value={formEntrega.values.zipCode}
                                    onChange={formEntrega.handleChange}
                                    onBlur={formEntrega.handleBlur}
                                    className={checkForms('zipCode') ? 'error' : ''}
                                    mask='99999-999'
                                />
                            </div>
                            <div>
                                <FormLabel htmlFor="numero">Número</FormLabel>
                                <MaskedInput
                                    width="85px" 
                                    type="text" 
                                    id="numero"
                                    name="number"
                                    value={formEntrega.values.number}
                                    onChange={formEntrega.handleChange}
                                    onBlur={formEntrega.handleBlur}
                                    className={checkForms('number') ? 'error' : ''}
                                    mask='999999'
                                />
                            </div>
                        </Row>
                        <FormLabel htmlFor="complemento">Complemento (Opcional)</FormLabel>
                        <input 
                            width="100%" 
                            type="text" 
                            id="complemento"
                            name="complement"
                            value={formEntrega.values.complement}
                            onChange={formEntrega.handleChange}
                            onBlur={formEntrega.handleBlur}
                            className={checkForms('complement') ? 'error' : ''}
                        />
                    </>
                )}

                {tipo === 'pagamento' && (
                    <>
                        <FormLabel htmlFor="nome-cartao">Nome no cartão</FormLabel>
                        <input 
                            type="text" 
                            id="nome-cartao"
                            name="cardName"
                            value={formPagamento.values.cardName}
                            onChange={formPagamento.handleChange}
                            onBlur={formPagamento.handleBlur}
                            className={checkForms('cardName') ? 'error' : ''}
                        />
                        <Row>
                            <div>
                                <FormLabel htmlFor="numero-cartao">Número no cartão</FormLabel>
                                <MaskedInput 
                                type="text" 
                                id="numero-cartao"
                                name="cardNumber"
                                value={formPagamento.values.cardNumber}
                                onChange={formPagamento.handleChange}
                                onBlur={formPagamento.handleBlur}
                                className={checkForms('cardNumber') ? 'error' : ''}
                                mask='9999 9999 9999 9999'
                            />
                            </div>
                            <div>
                                <FormLabel htmlFor="cvv">CVV</FormLabel>
                                <MaskedInput 
                                type="text" 
                                id="cvv" 
                                name="code"
                                value={formPagamento.values.code}
                                onChange={formPagamento.handleChange}
                                onBlur={formPagamento.handleBlur}
                                className={checkForms('code') ? 'error' : ''}
                                mask='999'
                            />
                            </div>
                        </Row>
                        <Row>
                            <div>
                                <FormLabel htmlFor="mesVencimento">Mês do vencimento</FormLabel>
                                <MaskedInput 
                                    type="text" 
                                    id="mesVencimento"
                                    name="expiresMonth"
                                    value={formPagamento.values.expiresMonth}
                                    onChange={formPagamento.handleChange}
                                    onBlur={formPagamento.handleBlur}
                                    className={checkForms('expiresMonth') ? 'error' : ''}
                                    mask='99'
                                />
                            </div>
                            <div>
                                <FormLabel htmlFor="anoVencimento">Ano do vencimento</FormLabel>
                                <MaskedInput 
                                type="text" 
                                id="anoVencimento" 
                                name="expiresYear"
                                value={formPagamento.values.expiresYear}
                                onChange={formPagamento.handleChange}
                                onBlur={formPagamento.handleBlur}
                                className={checkForms('expiresYear') ? 'error' : ''}
                                mask='99'
                            />
                            </div> 
                        </Row>
                    </>
                )}
                <Button type="submit" onClick={formNext}>
                    {tipo === 'entrega' ? 'Continuar com o pagamento' : 'Finalizar compra'}
                </Button>
                <Button onClick={voltarEtapa}>
                    {tipo === 'entrega' ? 'Voltar para o carrinho' : 'Voltar a editar o endereço'}
                </Button>
            </FormCheckout>
        </>
    )
}

export default Formulario