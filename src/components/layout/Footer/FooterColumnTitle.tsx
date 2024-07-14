import { PropsWithChildren } from "react";

export type FooterColumnTitleProps = PropsWithChildren<{}>;

const FooterColumnTitle = ({ children }: FooterColumnTitleProps) => {
  return (
    <h3 className="font-bold text-lg mb-4 max-sm:text-center max-sm:w-full">
      {children}
    </h3>
  );
};

export default FooterColumnTitle;
