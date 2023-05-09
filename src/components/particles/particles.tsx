import { useCallback } from "react";
import styled from "styled-components";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";

const StyledParticles = styled(Particles)`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.tertiary};
  opacity: 100%;
`;

function ParticlesComponent() {
  const particlesInit = useCallback(async (engine: Engine) => {
    loadFull(engine);
  }, []);
  const particlesLoaded = useCallback(async () => {}, []);
  return (
    <StyledParticles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: false, zIndex: 0 },
        background: {
          color: {
            value: "#23232D",
          },
        },
        fpsLimit: 35,
        interactivity: {
          events: {
            resize: true,
          },
        },
        particles: {
          color: {
            value: "#006AFF",
          },
          links: {
            color: "#ffffff",
            distance: 170,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1.6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 1000,
            },
            value: 80,
          },
          opacity: {
            value: 1,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 2, max: 5 },
          },
        },
      }}
    />
  );
}

export default ParticlesComponent;
