import { PropsWithChildren } from "react";
import Footer from "./Footer";
import Header from "./Header";

export type LayoutProps = PropsWithChildren<{}>;

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />

      {children}

      <Footer />
    </>
  );
};

export default Layout;
