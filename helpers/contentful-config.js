const C_SPACE_ID = "xe3lbyffjrgo";
const C_DELIVERY_KEY = "Fx4lAfG4D2XlHoF36d3uLPW3KAC0vUmX0tK_K8xk4rE";
const C_GRAPHQL_URL = `https://graphql.contentful.com/content/v1/spaces/${process.env.C_SPACE_ID}/environments/master`;

module.exports = {
  C_DELIVERY_KEY,
  C_SPACE_ID,
  C_GRAPHQL_URL,
};
