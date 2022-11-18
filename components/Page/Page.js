import { BlockRenderer } from "components/BlockRenderer";
import { MainMenu } from "components/MainMenu";
import { PageWrapper } from "context/page";
import Head from "next/head";

export const Page = (props) => {
  return (
    <PageWrapper
      value={{ title: props.title, featuredImage: props.featuredImage }}
    >
      <Head>
        <title>{props.seo.title}</title>
        <meta name="description" content={props.seo.metaDesc} />
      </Head>
      <MainMenu items={props.mainMenuItems} />
      <BlockRenderer blocks={props.blocks} />
    </PageWrapper>
  );
};
