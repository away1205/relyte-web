function Template({ children }) {
  return (
    <div className="animate-page-in" id="transition-page">
      {/* <div className="fixed z-10 h-full w-full bg-black" id="transition-page" /> */}
      {children}
    </div>
  );
}

export default Template;
