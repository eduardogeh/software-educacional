import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './estilos.scss'

function TelaInicial() {
    const navigate = useNavigate()
    const [nome, setNome] = useState('')
    const [aventura, setAventura] = useState('pequena')

    const iniciarAventura = () => {
        if (nome.trim() === '') {
            alert('Digite seu nome, bravo aventureiro!')
            return
        }

        navigate('/etapa')
    }

    return (
        <div className="container">
            <div className="card">
                <h1 className="title">🏰 Quiz de Gerência de Projetos 🛡️</h1>
                <p className="subtitle">Escolha sua aventura:</p>

                <div className="input-group">
                    <label className="input-label">👑 Seu nome:</label>
                    <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        placeholder="Sir Fulano de Tal"
                        className="input"
                    />
                </div>

                <div className="input-group">
                    <label className="input-label">⚔️ Aventura:</label>
                    <select
                        value={aventura}
                        onChange={(e) => setAventura(e.target.value)}
                        className="input"
                    >
                        <option value="pequena">Pequena (Missão Local)</option>
                        <option value="media">Média (Viagem pelo Reino)</option>
                        <option value="grande">Grande (Saga Épica)</option>
                    </select>
                </div>

                <button
                    onClick={iniciarAventura}
                    className="button"
                >
                    🐉 Iniciar Aventura
                </button>
            </div>
        </div>
    )
}

export default TelaInicial
