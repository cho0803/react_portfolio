  import { useParams, useLocation } from 'react-router-dom';

  import { IprojectContents } from "types/projects";
  import ProjectImage from "assets/images/Project.jpg"
  import useScroll from 'hooks/ui/useScroll';
  import styles from"./projectsContents.module.scss";

  interface IProps {
    projectContents: IprojectContents[]
    projectTitles: String[]
  }

  export default ({projectContents ,projectTitles}: IProps) =>{

    const { projectId } = useParams();
    const location = useLocation();
    useScroll();

    const contentFocus = (el: HTMLDivElement | null) => {
      const isFromLink = location.state?.fromLink === true;
      if ( isFromLink && el && el.id.toLowerCase() == projectId) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'auto', block: 'start' });
        }, 5); 
        window.history.replaceState({ ...window.history.state, usr: { fromLink: false } }, '');
      }
    }

    return (
      <section className={styles.sectionWrap}>
        <h2 className={styles.ir_su}>ProjectContents</h2>
        <div className={styles.img}>
        <img src={ProjectImage} alt="Project Image" />
          <div className={styles.titleWrap}>
            <div className={styles.projectTitle}>
              <p>
                {projectTitles.map((item, index) => (
                  <span key={index}>
                    <i>{item} </i>
                  </span>
                ))}
              </p>
            </div>
            <div className={styles.text}>
                <span>Vite + React + Typescript Project</span>
            </div>
          </div>
        </div>
        {projectContents.map((item) => (
          <div ref={(el) => contentFocus(el)} id={item.id} key={item.id} className={styles.contentWrap}>
            <div className={styles.content}>
              <div className={styles.left}>
                <div className={styles.num}>{item.num}</div>
                <h2 className={styles.subTitle}>{item.subTitle}</h2>
                <pre className={styles.description}>{item.description}</pre>
              </div>
              <div className={styles.right}>
                <div className={styles.leftImgWrap}>
                  <img src={item.imgSrc} alt={item.imgAlt} />
                </div>
                <span className={styles.title}>{item.title}</span>
              </div>
            </div>
          </div>
        ))}
      </section>
    );
  }