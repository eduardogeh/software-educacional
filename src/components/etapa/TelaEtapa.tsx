import { useState } from 'react'
import './estilos.scss'

function TelaEtapa() {
    const [etapaAtual, setEtapaAtual] = useState(0)

    const totalEtapas = 20
    const larguraContainer = 1000
    const larguraBarra = larguraContainer / totalEtapas

    const avancarEtapa = () => {
        if (etapaAtual < totalEtapas - 1) {
            setEtapaAtual(etapaAtual + 1)
        }
    }

    return (
        <div className="etapa-container">
            <h2>Etapas</h2>
            <div className="cascata">
                {[...Array(totalEtapas)].map((_, index) => (
                    <div
                        key={index}
                        className={`etapa ${etapaAtual === index ? 'ativa' : ''}`}
                        style={{
                            marginLeft: `${index * larguraBarra}px`,
                            width: `${larguraBarra}px`
                        }}
                    >
                        {etapaAtual === index && <div className="marcador" />}
                    </div>
                ))}
            </div>

            <button onClick={avancarEtapa} className="btn">Avançar</button>
        </div>
    )
}

export default TelaEtapa
