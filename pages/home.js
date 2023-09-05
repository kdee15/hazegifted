import { createClient } from "contentful";
import ComponentHeroBanner from "../components/blocks/componentHeroBanner/ComponentHeroBanner";
import ComponentProjectList from "../components/blocks/componentProjectList/ComponentProjectList";
import ComponentSkillsMatrix from "../components/blocks/componentSkillsMatrix/ComponentSkillsMatrix";
import ComponentBodyCopy from "../components/organisms/componentBodyCopy/ComponentBodyCopy";
import ComponentTextList from "../components/organisms/componentTextList/ComponentTextList";
const { C_SPACE_ID, C_DELIVERY_KEY } = require("../helpers/contentful-config");

export async function getStaticProps(context) {
  const client = createClient({
    space: C_SPACE_ID,
    accessToken: C_DELIVERY_KEY,
  });

  const resPage = await client
    .getEntries({
      content_type: "pageHomepage",
      include: 10,
    })

    .then((entries) => entries.items);

  return {
    props: {
      Page: resPage,
    },
    revalidate: 1,
  };
}

export default function Home({ Page }) {
  const heroBanner = Page[0].fields.components[0].fields;
  const aboutCopy = Page[0].fields.components[1].fields;
  const projectList = Page[0].fields.components[2].fields;
  const skillsMatrix = Page[0].fields.components[3].fields;
  const workExp = Page[0].fields.components[4].fields;
  const edExp = Page[0].fields.components[5].fields;

  return (
    <div className="anchor" id="top">
      <ComponentHeroBanner contentModule={heroBanner} />
      <ComponentBodyCopy contentModule={aboutCopy} />
      <ComponentProjectList contentModule={projectList} />
      <ComponentSkillsMatrix contentModule={skillsMatrix} />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <ComponentTextList contentModule={workExp} />
          </div>
          <div className="col-12 col-md-6">
            <ComponentTextList contentModule={edExp} />
          </div>
        </div>
      </div>
    </div>
  );
}
