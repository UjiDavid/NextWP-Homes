import { gql } from "@apollo/client";
import client from "client";
import { cleanAndTransformBlocks } from "./cleanAndTransformBlocks";
import { mapMainMenuItems } from "./mapMainMenuItems";

export const getPageStaticProps = async (context) => {
  const uri = context.params?.slug ? `/${context.params.slug.join("/")}/` : "/";
  const { data } = await client.query({
    query: gql`
      query PageQuery($uri: String!) {
        nodeByUri(uri: $uri) {
          ... on Page {
            id
            title
            blocksJSON
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
          ... on Property {
            id
            title
            blocksJSON
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
        menuItems(where: { parentDatabaseId: 0, location: HCMS_MENU_FOOTER }) {
          edges {
            node {
              id
              label
              path
              childItems {
                nodes {
                  id
                  path
                  label
                }
              }
            }
          }
        }
      }
    `,
    variables: {
      uri,
    },
  });
  const blocks = await cleanAndTransformBlocks(data.nodeByUri.blocksJSON);
  return {
    props: {
      title: data.nodeByUri.title,
      featuredImage: data.nodeByUri.featuredImage?.node?.sourceUrl || null,
      mainMenuItems: mapMainMenuItems(data.menuItems.edges),
      blocks,
    },
  };
};
