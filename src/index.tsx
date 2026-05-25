import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { RecoilRoot } from 'recoil'
import { HashRouter ,BrowserRouter  } from 'react-router-dom'
import Routes from './routes'
import './styles/index.scss'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RecoilRoot>
      <HashRouter>
        <Routes />
      </HashRouter>
    </RecoilRoot>
  </StrictMode>,
)