import React from 'react';

export type logoNameT =
  | 'amazon'
  | 'dribble'
  | 'hubSpot'
  | 'netflix'
  | 'notion'
  | 'zoom';

interface IPropHeroItem {
  logoName: logoNameT;
}

export default function HeroItem({
  logoName,
}: IPropHeroItem): React.JSX.Element {
  return (
    <li className="hero__partners-item">
      <img
        src={`./src/css/images/partners/${logoName}-logo.svg`}
        alt={logoName}
        className="hero__partners-image"
        width="130"
        height="48"
        loading="lazy"
      />
    </li>
  );
}
