export const NEWS_CONTENT = `
  query GetNews($slug: String!) {
    pagePageCollection(where: { slug: $slug }, limit: 1) {
      items {
          title
          slug
      }
    }
  }
`;

export const NEWS_SLUG = `
query {
    pagePageCollection{
    items {
      title
      slug
    }
  }
}
`;

export const NEWS_PAGE = `
query GetNewsIndex($id: String!)  {
  pageContent ({id: $id})  {
    title
    slug
    sys {
      id
    }
  }
 }
`;

export const FOOTER_CONTENT = `
    query {
        componentFooterCollection {
            items {
                title
                logo {
                title
                url
                width
                height
                }
                socialMediaLinksCollection {
                items {
                    title
                    url
                }
                }
                footerMenuCollection {
                items {
                    title
                    link
                }
                }
                qrCodeText
            }
        }
    }
`;
