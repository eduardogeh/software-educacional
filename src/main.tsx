import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

const container = document.getElementById('root')

if (!container) {
    throw new Error("Elemento com id 'root' não encontrado!")
}

ReactDOM.createRoot(container).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)

