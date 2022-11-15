import { ButtonLink } from "components/ButtonLink";
import { CallToActionButton } from "components/CallToActionButton";
import { Column } from "components/Column";
import { Columns } from "components/Columns";
import { Cover } from "components/Cover";
import { Heading } from "components/Heading";
import { Paragraph } from "components/Paragraph";
import { PostTitle } from "components/PostTitle";
import { PropertySearch } from "components/PropertySearch";
import Image from "next/image";
import { theme } from "theme";

export const BlockRenderer = ({ blocks }) => {
  return blocks?.map((block) => {
    switch (block.name) {
      case "core/button": {
        return (
          <CallToActionButton
            key={block.id}
            align={block.attributes.align}
            path={block.attributes.url}
            label={block.attributes.text}
          />
        );
      }
      case "core/buttons": {
        return <BlockRenderer blocks={block.innerBlocks} />;
      }
      case "core/paragraph": {
        return (
          <Paragraph
            key={block.id}
            textAlign={block.attributes.align}
            content={block.attributes.content}
            textColor={
              theme[block.attributes.textColor] ||
              block.attributes.style?.color?.text
            }
          />
        );
      }
      case "core/heading": {
        return (
          <Heading
            key={block.id}
            level={block.attributes.level}
            content={block.attributes.content}
            textAlign={block.attributes.textAlign}
          />
        );
      }
      case "core/search": {
        return <PropertySearch key={block.id} />;
      }
      case "core/post-title": {
        return (
          <PostTitle
            key={block.id}
            level={block.attributes.level}
            textAlign={block.attributes.textAlign}
          />
        );
      }
      case "core/cover": {
        return (
          <Cover key={block.id} background={block.attributes.url}>
            <BlockRenderer blocks={block.innerBlocks} />
          </Cover>
        );
      }
      case "core/columns": {
        return (
          <Columns
            key={block.id}
            isStackedOnMobile={block.attributes.isStackedOnMobile}
          >
            <BlockRenderer blocks={block.innerBlocks} />
          </Columns>
        );
      }
      case "core/column": {
        return (
          <Column key={block.id} width={block.attributes.width}>
            <BlockRenderer blocks={block.innerBlocks} />
          </Column>
        );
      }
      case "core/block":
      case "core/group": {
        return <BlockRenderer key={block.id} blocks={block.innerBlocks} />;
      }
      case "core/image": {
        return (
          <Image
            key={block.id}
            src={block.attributes.url}
            height={block.attributes.originalHeight}
            width={block.attributes.originalWidth}
            alt={block.attributes.alt || ""}
          />
        );
      }
      default: {
        return null;
      }
    }
  });
};
