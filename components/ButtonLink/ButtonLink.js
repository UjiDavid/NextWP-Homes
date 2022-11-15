import Link from "next/link";

export const ButtonLink = ({ path, label }) => {
  return (
    <Link href={path}>
      <a className="btn">{label}</a>
    </Link>
  );
};
