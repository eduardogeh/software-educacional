import { useNavigate } from 'react-router-dom'

function TelaFinal() {
    const navigate = useNavigate()

    const voltarInicio = () => {
        navigate('/')
    }

    return (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
            <h1>Fim da Aventura 🎉</h1>
            <p>Parabéns por completar o desafio!</p>
            <button onClick={voltarInicio}>Voltar ao Início</button>
        </div>
    )
}

export default TelaFinal
