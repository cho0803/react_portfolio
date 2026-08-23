import PortfolioIntro from "pages/_components/Intro"
import { useLoad } from "hooks/ui/useLoad"
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