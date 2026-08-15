import CardHolder from "./CardHolder";
import profiles from "../data/profiles";
const data = profiles[9];

const Showcase = () => {
  return (
    <section
      className="
      h-full w-full
      p-2
      flex
      items-center
      justify-center"
    >
      <CardHolder data={data} variant={0}/>
    </section>
  );
};

export default Showcase;
