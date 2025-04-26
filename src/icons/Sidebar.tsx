import React, { SVGProps } from "react";

export const SidebarIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      clipRule="evenodd"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d="m4 2.999c-.478 0-1 .379-1 1v16c0 .62.519 1 1 1h16c.621 0 1-.52 1-1v-16c0-.478-.379-1-1-1zm.5 16.5v-15h9.5v15zm15-15v15h-4v-15zm-11.342 3.679c-.137-.124-.299-.179-.458-.179-.358 0-.7.284-.7.705v6.59c0 .422.342.705.7.705.159 0 .321-.055.458-.178 1.089-.982 2.684-2.417 3.576-3.22.17-.153.266-.371.266-.601 0-.229-.096-.448-.265-.601-.893-.803-2.487-2.239-3.577-3.221zm.342 5.317v-2.99l1.66 1.495z"
        fillRule="nonzero"
      />
    </svg>
  );
};
