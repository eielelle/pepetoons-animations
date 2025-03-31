import Header from "../components/header";

export default function HeaderLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
