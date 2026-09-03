import ProjectContents from "pages/_components/Contents/ProjectsContents/AnimationContents"

import { getContents, getTitles } from "utils/project"

export default () =>{
    return(
        <>
            <ProjectContents projectTitles={getTitles("animation")} projectContents={getContents("animation")}  />
        </>
    )
}