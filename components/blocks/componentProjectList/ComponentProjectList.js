import Link from "next/link";
import classes from "./ComponentProjectList.module.scss";

function ComponentProjectList({ contentModule }) {
  const { title, projectList } = contentModule;
  return (
    <section className={`${classes.oProjectBlock}`}>
      <div className={`${classes.oContainer} container`}>
        <div className={`${classes.oRow} row`}>
          <h2 className={`${classes.aBlockTitle} fntH2 col`}>{title}</h2>
        </div>
        <div className={`${classes.oRow} row`}>
          {projectList
            .filter(
              (filteredProject) => filteredProject.fields.isFeatured === true
            )
            .map((project, index) => (
              <Link href={`/projects/${project.fields.slug}`} key={index}>
                <article className={`${classes.oProjectCard} col-12 col-md-6`}>
                  <div className={classes.oCard}>
                    <figure
                      className={`${classes.mImage}`}
                      style={{
                        backgroundImage: `url(https:${project.fields.previewImageDesktop.fields.file.url})`,
                      }}
                    ></figure>
                    <div className={`${classes.mBody}`}>
                      {project.fields.title}
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          <div className={classes.mCtaBlock}>
            <Link href={`/projects/`}>
              <a className={`${classes.aBtn} aBtn`}>See the rest ...</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ComponentProjectList;
