import Link from "next/link";
import ComponentHeroBanner from "../components/blocks/componentHeroBanner/ComponentHeroBanner";
import classes from "./projects/Projects.module.scss";
const { PROJECT_LIST } = require("../helpers/data/projects");
const {
  C_GRAPHQL_URL,
  C_DELIVERY_KEY,
} = require("../helpers/contentful-config");

export async function getStaticProps() {
  const result = await fetch(C_GRAPHQL_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${C_DELIVERY_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: PROJECT_LIST,
    }),
  });

  if (!result.ok) {
    return {};
  }

  const { data } = await result.json();
  const projects = data.pageProjectsCollection.items;
  const heroBanner = data.componentHeroBanner;

  return {
    props: {
      projects,
      heroBanner,
    },
    revalidate: 1,
  };
}

export default function Home({ projects, heroBanner }) {
  console.log("projects", projects);
  return (
    <div className="anchor" id="top">
      <ComponentHeroBanner contentModule={heroBanner} />
      <div className="container">
        <div className="row">
          {projects.map((project, index) => (
            <Link href={`/projects/${project.slug}`} key={index}>
              <article className={`${classes.oProjectCard} col-12 col-md-6`}>
                <div className={classes.oCard}>
                  <figure
                    className={`${classes.mImage}`}
                    style={{
                      backgroundImage: `url(${project.previewImageDesktop.url})`,
                    }}
                  ></figure>
                  <div className={`${classes.mBody}`}>{project.title}</div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
