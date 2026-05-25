import PortfolioIntro from "pages/_components/Intro"
import { useLoad } from "hooks/useLoad"
import "./main.module.scss"

export default () => {

  const {isLoading} = useLoad()
  if(isLoading) return <PortfolioIntro/>

  return(
    <>
      Vite + React + TS
    </>
  )
}