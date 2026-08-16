import variants from "../data/variants"

const CardHolder = ({ data, variant = 0 }) => {
  const CurrentVariant = variants[variant];
  return (
    <section>
      <CurrentVariant {...data} />
    </section>
  );
};

export default CardHolder;
