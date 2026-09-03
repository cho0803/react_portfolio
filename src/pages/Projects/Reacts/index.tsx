import ProjectContents from "pages/_components/Contents/ProjectsContents"

import { getContents, getTitles } from "utils/project"

export default () =>{
    return(
        <>
            <ProjectContents projectTitles={getTitles("react")} projectContents={getContents("react")}  />
        </>
    )
}