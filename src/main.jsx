import ReactDOM from 'react-dom/client'
import './index.css'
import { HashRouter } from 'react-router-dom'
import Rout from './rout.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <Rout />
  </HashRouter>
)
