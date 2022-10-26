interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <header className="w-full border-b border-slate-6 mb-6 h-10">
        <h2 className="text-xl">Users</h2>
      </header>
      {children}
    </div>
  );
};

export default Layout;
