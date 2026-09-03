import { Routes, Route, Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'hooks'

import Main from 'pages/Main'
import styles from './routes.module.scss'
import Main from 'pages/Main'
import Menu from 'pages/Menu'
import About from 'pages/About'
import Reacts from 'pages/Projects/Reacts'
import Animations from 'pages/Projects/Animations'
import Effects from 'pages/Projects/Effects'

const App = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  
  return (
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='projects' element={<Outlet />}>
          <Route path='' element={<Menu />} />
          <Route path='react/:projectId' element={<Reacts />} />
          <Route path='animation/:projectId' element={<Animations />} />
          <Route path='effect/:projectId' element={<Effects />} />
        </Route>
        <Route path='*' element={<div>페이지를 찾을 수 없습니다.</div>} />
      </Routes>
  )
}
export default App