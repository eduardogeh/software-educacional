import React, { useState, useEffect } from 'react';
import Dice from 'react-dice-roll';

type DadoProps = {
    tamanho?: number;
    onFimRolar: (valor: number) => void;
    chaveFase: number;
};

export default function Dado({ tamanho = 150, onFimRolar, chaveFase}: DadoProps) {
    const [rodando, setRodando] = useState(false);
    const [resultado, setResultado] = useState<number | null>(null);
    const [podeRolar, setPodeRolar] = useState(true);

    const cores = [
        "#E74C3C", "#8E44AD", "#3498DB", "#16A085", "#F39C12",
        "#D35400", "#2C3E50", "#27AE60", "#2980B9", "#9B59B6",
        "#1ABC9C", "#E67E22", "#34495E", "#7F8C8D", "#C0392B",
        "#27AE60", "#F1C40F", "#8E44AD", "#2980B9", "#2C3E50"
    ];

    function gerarSvgBase64(numero: number, corFundo: string) {
        const svg = `
      <svg width="${tamanho}" height="${tamanho}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${tamanho}" height="${tamanho}" fill="${corFundo}" rx="15" ry="15"/>
        <text x="50%" y="50%" font-size="${tamanho * 0.5}" fill="#fff" font-family="Arial, sans-serif" font-weight="bold" dominant-baseline="middle" text-anchor="middle">${numero}</text>
      </svg>
    `;
        return "data:image/svg+xml;base64," + btoa(svg);
    }

    const facesImagens = React.useMemo(() => {
        return Array.from({ length: 6 }, (_, i) => gerarSvgBase64(i + 1, cores[i]));
    }, [tamanho]);

    useEffect(() => {
        setResultado(null);
        setPodeRolar(true);
    }, [chaveFase]);

    function handleRoll(valor: number) {
        setPodeRolar(false);
        setRodando(false);
        setResultado(valor);
        onFimRolar(valor)
    }

    return (
        <div style={{ textAlign: 'center' }}>
    <Dice
    disabled={!podeRolar || rodando}
    faces={facesImagens}
    size={tamanho}
    onRoll={handleRoll}
    />
    <div
    style={{
        height: '40px',
            marginTop: 10,
            fontSize: 24,
            color: '#333',
            fontWeight: 'bold',
            minWidth: '200px',
            userSelect: 'none',
            textAlign: 'center',
            marginLeft: 'auto',
            marginRight: 'auto',
    }}
>
    {resultado !== null ? `🎲 Resultado do dado: ${resultado}` : '\u00A0'}
    </div>
    </div>
);
}
