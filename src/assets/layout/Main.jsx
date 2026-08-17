import { useState } from "react";
import Showcase from "./Showcase";
import VariantCtrls from "./VariantCtrls";
import Container from "../components/Container";

const Main = () => {
  const [currentVariant, setCurrentVariant] = useState(0);
  const [currentProfile, setCurrentProfile] = useState(0);
  return (
    <main className="relative w-full h-dvh">
      <Container>
        <Showcase currentVariant={currentVariant} currentProfile={currentProfile} setCurrentProfile={setCurrentProfile}></Showcase>
        <VariantCtrls currentVariant={currentVariant} setCurrentVariant={setCurrentVariant}></VariantCtrls>
      </Container>
    </main>
  );
};

export default Main;
