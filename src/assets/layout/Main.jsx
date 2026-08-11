import Showcase from "./Showcase";
import VariantCtrls from "./VariantCtrls";
import Container from "../components/Container";

const Main = () => {
  return (
    <main className="relative w-full h-dvh">
      <Container>
        <Showcase></Showcase>
        <VariantCtrls></VariantCtrls>
      </Container>
    </main>
  );
};

export default Main;
