import Footer from "../components/footer";
import Header from "../components/header";

export default function HeaderLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
