import { useState } from "react";
import CardHolder from "./CardHolder";
import profiles from "../data/profiles";
import { getCircularIndex } from "../utils/getCircularIndex";

const Showcase = ({ currentVariant, currentProfile, setCurrentProfile }) => {
  const previousIndex = getCircularIndex(currentProfile - 1, profiles.length);

  const nextIndex = getCircularIndex(currentProfile + 1, profiles.length);

  const previousProfile = profiles[previousIndex];
  const currentProfileData = profiles[currentProfile];
  const nextProfile = profiles[nextIndex];

  const [trackPosition, setTrackPosition] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [touchStart, setTouchStart] = useState(null);

  const handleMove = (direction) => {
    if (trackPosition !== 1) return;

    setIsTransitioning(true);

    if (direction === "up") {
      setTrackPosition(0);
    }

    if (direction === "down") {
      setTrackPosition(2);
    }
  };

  const handleWheel = (event) => {
    if (trackPosition !== 1) return;

    if (Math.abs(event.deltaY) < 10) return;

    if (event.deltaY > 0) {
      handleMove("down");
    } else {
      handleMove("up");
    }
  };

  const handleTouchStart = (event) => {
    setTouchStart(event.touches[0].clientY);
  };

  const handleTouchEnd = (event) => {
    if (touchStart === null) return;

    const touchEnd = event.changedTouches[0].clientY;
    const distance = touchStart - touchEnd;

    if (Math.abs(distance) < 50) {
      setTouchStart(null);
      return;
    }

    if (distance > 0) {
      handleMove("down");
    } else {
      handleMove("up");
    }

    setTouchStart(null);
  };

  const handleTransitionEnd = () => {
    if (trackPosition === 0) {
      setCurrentProfile((prev) => getCircularIndex(prev - 1, profiles.length));
    }

    if (trackPosition === 2) {
      setCurrentProfile((prev) => getCircularIndex(prev + 1, profiles.length));
    }

    setIsTransitioning(false);
    setTrackPosition(1);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
    });
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowUp") {
      handleMove("up");
    }

    if (event.key === "ArrowDown") {
      handleMove("down");
    }
  };

  return (
    <section
      tabIndex={0}
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onKeyDown={handleKeyDown}
      className="relative h-full w-full p-2 flex overflow-hidden items-center justify-center outline-0"
    >
      <div className="scroll-mask">
        <div
          className={`absolute h-[300%] w-full top-0 left-0 flex flex-col items-center
          ${
            isTransitioning
              ? "transition-transform duration-500 ease-in-out"
              : ""
          }
          `}
          style={{
            transform: `translateY(-${trackPosition * 33.333}%)`,
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          <div className="h-1/3 w-full shrink-0 flex items-center justify-center">
            <CardHolder data={previousProfile} variant={currentVariant} />
          </div>

          <div className="h-1/3 w-full shrink-0 flex items-center justify-center">
            <CardHolder data={currentProfileData} variant={currentVariant} />
          </div>

          <div className="h-1/3 w-full shrink-0 flex items-center justify-center">
            <CardHolder data={nextProfile} variant={currentVariant} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
