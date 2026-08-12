const VariantCtrls = () => {
  return (
    <footer
      className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 w-full flex justify-around items-center gap-4"
    >
      <button type="button" data-switch="left"><i className="ri-arrow-left-long-line"></i></button>
      <h3>Current Variant - <span>1</span></h3>
      <button type="button" data-switch="right"><i className="ri-arrow-right-long-line"></i></button>
      
    </footer>
  );
};

export default VariantCtrls;
