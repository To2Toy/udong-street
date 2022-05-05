import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import "./index.css";
const Layout = () => {
  return (
    <div id="_wrapper">
      <div id="wrapper">
        <Header />
        <Content />
      </div>
      <Footer />
    </div>
  );
};
export default Layout;
