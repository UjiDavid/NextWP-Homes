import { BlockRenderer } from "components/BlockRenderer";
import { MainMenu } from "components/MainMenu";
import { PageWrapper } from "context/page";

export const Page = (props) => {
  return (
    <PageWrapper
      value={{ title: props.title, featuredImage: props.featuredImage }}
    >
      <MainMenu items={props.mainMenuItems} />
      <BlockRenderer blocks={props.blocks} />
    </PageWrapper>
  );
};
