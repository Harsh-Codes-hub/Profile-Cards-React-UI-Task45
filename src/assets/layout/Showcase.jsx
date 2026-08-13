// import VariantOne from "../components/variants/VariantOne";
import VariantTwo from "../components/variants/VariantTwo";
import profiles from "../data/profiles.js"

const data = profiles[0];

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

      <VariantTwo
        key={data.avatar}
        {...data}
      />
    </section>
  );
};

export default Showcase;
