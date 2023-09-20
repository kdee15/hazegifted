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
      content_type: "pageHome",
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
  console.log("Page", Page);

  return (
    <div className="anchor" id="top">
      <h1>haze gifted</h1>
    </div>
  );
}
