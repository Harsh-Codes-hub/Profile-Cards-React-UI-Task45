// import VariantOne from "../components/variants/VariantOne";
// import VariantTwo from "../components/variants/VariantTwo";
import VariantThree from "../components/variants/VariantThree";
// import VariantFour from "../components/variants/VariantFour";
// import VariantFive from "../components/variants/VariantFive";

import profiles from "../data/profiles.js"

const data = profiles[9];
console.log(data);
const Showcase = () => {
  return (
    <section
      className="
      h-full w-full
      p-2
      flex
      flex-col
      items-center
      justify-center"
    >
      {/* <VariantOne
        key={data.avatar}
        {...data}
      /> */}

      {/* <VariantTwo
        key={data.avatar}
        {...data}
      /> */}

      <VariantThree
        key={data.avatar}
        {...data}
      />

      {/* <VariantFour
        key={data.avatar}
        {...data}
      /> */}

      {/* <VariantFive
        key={data.avatar}
        {...data}
      /> */}
    </section>
  );
};

export default Showcase;
