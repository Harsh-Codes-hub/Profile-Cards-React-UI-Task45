import CardHolder from "./CardHolder";
import profiles from "../data/profiles";
const data = profiles[1];

const Showcase = ({currentVariant}) => {
  return (
    <section
      className="
      h-full w-full
      p-2
      flex
      items-center
      justify-center"
    >
      <CardHolder data={data} variant={currentVariant} />
    </section>
  );
};

export default Showcase;
