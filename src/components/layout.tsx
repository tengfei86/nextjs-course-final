import Header from "./header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full md:max-w-[500px] mx-auto py-10 px-4">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
