import { StyledWrapper } from "./tiles.styles";
import Tile from "../tile/tile";

const TilesItems = [
  {
    href: "https://karate-team.netlify.app/",
    title: "Karate Team Obornik",
    description: "Description",
    buttonHref: "/experiance",
    color: "red",
    image: "/images/profile.webp",
  },
  {
    href: "https://karate-team.netlify.app/",
    title: "Happy Notes",
    description: "Descshewrherw nernj ription",
    buttonHref: "/experiance",
    color: "green",
    image: "/images/profile.webp",
  },
  {
    href: "https://karate-team.netlify.app/",
    title: "Clothify",
    description: "Description",
    buttonHref: "/experiance",
    color: "pink",
    image: "/images/profile.webp",
  },
];

export default function Tiles() {
  return (
    <StyledWrapper id="projects">
      {TilesItems.map(
        ({ href, title, description, buttonHref, color, image }, i) => (
          <Tile
            key={title}
            href={href}
            title={title}
            description={description}
            buttonHref={buttonHref}
            color={color}
            image={image}
          />
        )
      )}
    </StyledWrapper>
  );
}
