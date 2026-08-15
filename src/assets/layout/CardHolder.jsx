import VariantOne from "../components/variants/VariantOne";
import VariantTwo from "../components/variants/VariantTwo";
import VariantThree from "../components/variants/VariantThree";
import VariantFour from "../components/variants/VariantFour";
import VariantFive from "../components/variants/VariantFive";

const variants = [
  VariantOne,
  VariantTwo,
  VariantThree,
  VariantFour,
  VariantFive,
];

const CardHolder = ({ data, variant = 0 }) => {
  const CurrentVariant = variants[variant];
  return (
    <section>
      <CurrentVariant {...data} />
    </section>
  );
};

export default CardHolder;
