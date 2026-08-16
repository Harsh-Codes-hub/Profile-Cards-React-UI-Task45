import { getNextIndex } from "../utils/getNextIndex";
import { getPrevIndex } from "../utils/getPrevIndex";
import variants from "../data/variants";

const VariantCtrls = ({ currentVariant, setCurrentVariant }) => {
  return (
    <footer className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 w-full flex justify-around items-center gap-4">
      <button
        type="button"
        data-switch="left"
        className="text-(--color-white) text-2xl aspect-square h-10 bg-[image:var(--switch-bg)] rounded-full text-shadow-(--switch-text-shadow) shadow-(--switch-shadow) backdrop-blur-2xl"
        onClick={() => setCurrentVariant((prev) => getPrevIndex(prev, variants.length))}
      >
        <i className="ri-arrow-left-long-line"></i>
      </button>
      <h3 className="uppercase text-transparent text-shadow-(--current-variant-text-shadow) text-2xl text-stroke whitespace-nowrap flex gap-2">
        Current Variant - <span>{currentVariant + 1}</span>
      </h3>
      <button
        type="button"
        data-switch="right"
        className="text-(--color-white) text-2xl aspect-square h-10 bg-[image:var(--switch-bg)] rounded-full text-shadow-(--switch-text-shadow) shadow-(--switch-shadow) backdrop-blur-2xl"
        onClick={() => setCurrentVariant((prev) => getNextIndex(prev, variants.length))}
      >
        <i className="ri-arrow-right-long-line"></i>
      </button>
    </footer>
  );
};

export default VariantCtrls;
