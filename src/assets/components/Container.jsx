const Container = ({ children }) => {
  return <div className="w-[min(calc(100%-(var(--container-padding)*2)),var(--container-max))] mx-auto h-full relative">{children}</div>;
};

export default Container;
