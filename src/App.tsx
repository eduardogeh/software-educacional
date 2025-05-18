import { Routes, Route } from 'react-router-dom'
import TelaInicial from './components/inicial/TelaInicial.tsx'
import TelaEtapa from './components/etapa/TelaEtapa.tsx'
import TelaFinal from './components/TelaFinal'

function App() {
    return (
        <Routes>
            <Route path="/" element={<TelaInicial />} />
            <Route path="/etapa" element={<TelaEtapa />} />
            <Route path="/final" element={<TelaFinal />} />
        </Routes>
    )
}

export default App
