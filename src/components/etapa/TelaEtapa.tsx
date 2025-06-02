import { useState } from 'react';
import { motion } from 'framer-motion';
import Dado from '../dado/Dado';
import Modal from '../modal/Modal';
import perguntas from '../../assets/perguntas.json';
import './estilos.scss';

export default function TelaEtapa() {
    const totalEtapas = 10;
    const [etapaAtual, setEtapaAtual] = useState(0);
    const [mostrarPergunta, setMostrarPergunta] = useState(false);
    const [indicePergunta, setIndicePergunta] = useState(0);
    const [respostaErrada, setRespostaErrada] = useState(false);
    const valorLimite = 4;

    function avancarEtapa(valorDado: number) {
        if (valorDado <= valorLimite) {
            setIndicePergunta(Math.floor(Math.random() * perguntas.length));
            setMostrarPergunta(true);
        } else {
            irParaProximaEtapa();
        }
    }

    function irParaProximaEtapa() {
        if (etapaAtual < totalEtapas - 1) {
            setEtapaAtual(etapaAtual + 1);
        }
        setMostrarPergunta(false);
        setRespostaErrada(false);
    }

    function verificarResposta(indice: number) {
        if (indice === perguntas[indicePergunta].respostaCorreta) {
            irParaProximaEtapa();
        } else {
            setRespostaErrada(true);
        }
    }

    return (
        <div className="etapa-container">
            <h2>Etapas do Projeto</h2>

            <div className="cascata">
                <div className="linha" />
                {[...Array(totalEtapas)].map((_, index) => (
                    <motion.div
                        key={index}
                        className={`etapa ${etapaAtual >= index ? 'ativa' : ''}`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                    >
                        <span className="numero">{index + 1}</span>
                    </motion.div>
                ))}
            </div>

            <div style={{ marginTop: 30, textAlign: 'center' }}>
                <p>
                    Etapa <strong>{etapaAtual + 1}</strong> de {totalEtapas}
                </p>

                <Dado onFimRolar={avancarEtapa} chaveFase={etapaAtual} />
            </div>

            <Modal isOpen={mostrarPergunta} closeDisabled={true} onClose={() => setMostrarPergunta(false)}>
                <div className="pergunta-container">
                    <p><strong>{perguntas[indicePergunta].pergunta}</strong></p>
                    <ul>
                        {perguntas[indicePergunta].opcoes.map((opcao, i) => (
                            <li key={i}>
                                <button onClick={() => verificarResposta(i)}>{opcao}</button>
                            </li>
                        ))}
                    </ul>
                    {respostaErrada && (
                        <p className="dica">Dica: {perguntas[indicePergunta].dica}</p>
                    )}
                </div>
            </Modal>
        </div>
    );
}
