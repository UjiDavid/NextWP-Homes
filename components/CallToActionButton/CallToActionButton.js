import { ButtonLink } from "components/ButtonLink";

export const CallToActionButton = ({ align = "left", path, label }) => {
  const alignMap = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };
  return (
    <div className={alignMap[align]}>
      <ButtonLink path={path} label={label} />
    </div>
  );
};
