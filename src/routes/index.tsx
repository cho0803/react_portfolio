import { Routes, Route, Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'hooks'

import Main from 'pages/Main'
import styles from './routes.module.scss'

const App = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  
  return (
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='projects' element={<Outlet />}>
        </Route>
        <Route path='*' element={<div>페이지를 찾을 수 없습니다.</div>} />
      </Routes>
  )
}
export default App
