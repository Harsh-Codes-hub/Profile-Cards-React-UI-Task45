import VariantOne from "../components/varinants/VariantOne";
import profiles from "../data/profiles.js"

const Showcase = () => {
  return (
    <section
      className="
      h-full w-full
      p-2
      flex
      flex-col
      items-center"
    >
      <VariantOne avatar={profiles[0].avatar} coverImage={profiles[0].coverImage}/>
    </section>
  );
};

export default Showcase;
