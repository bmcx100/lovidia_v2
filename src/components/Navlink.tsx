import Link from "next/link";
import React from "react";

type Props = {
  name: string;
  path: string;
  isActive?: boolean;
  onClick?: () => void;
};

const Navlink: React.FC<Props> = ({ name, path, isActive, onClick }) => {
  return (
    <div onClick={onClick}>
      <Link
        href={`/${path}`}
        className={`navLink md:text-lg ${isActive && "text-lg font-bold underline decoration-brandDark underline-offset-4 md:text-xl"}`}
      >
        {name}
      </Link>
    </div>
  );
};

export default Navlink;
