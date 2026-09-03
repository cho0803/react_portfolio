import ProjectContents from "pages/_components/Contents/ProjectsContents/EffectsContents"

import { getContents, getTitles } from "utils/project"

export default () =>{
    return(
        <>
            <ProjectContents projectTitles={getTitles("effect")} projectContents={getContents("effect")}  />
        </>
    )
}