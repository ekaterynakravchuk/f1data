const teamsLogos: Record<string, { big: string; small: string }> = {
  ferrari: {
    big: "/images/teams/logos/ferrari.png",
    small: "/images/teams/smallLogos/small-ferrari.png",
  },
  redbull: {
    big: "/images/teams/logos/redbull.png",
    small: "/images/teams/smallLogos/small-redbull.png",
  },
  mercedes: {
    big: "/images/teams/logos/mercedes.png",
    small: "/images/teams/smallLogos/small-mercedes.png",
  },
  mclaren: {
    big: "/images/teams/logos/mclaren.png",
    small: "/images/teams/smallLogos/small-mclaren.png",
  },
  williams: {
    big: "/images/teams/logos/williams.png",
    small: "/images/teams/smallLogos/small-williams.png",
  },
  alpine: {
    big: "/images/teams/logos/alpine.png",
    small: "/images/teams/smallLogos/small-alpine.png",
  },
  astonmartin: {
    big: "/images/teams/logos/astonmartin.png",
    small: "/images/teams/smallLogos/small-astonmartin.png",
  },
  haas: {
    big: "/images/teams/logos/haas.png",
    small: "/images/teams/smallLogos/small-haas.png",
  },
  rbf1team: {
    big: "/images/teams/logos/rbf1team.png",
    small: "/images/teams/smallLogos/small-rbf1team.png",
  },
  sauber: {
    big: "/images/teams/logos/sauber.png",
    small: "/images/teams/smallLogos/small-sauber.png",
  },
};

export function getTeamBigLogos(name: string) {
  const normalizedTeamName = name.toLowerCase().replace(/\s+/g, "");
  const foundLogo = Object.entries(teamsLogos).find(([key]) =>
    normalizedTeamName.includes(key)
  );
  return foundLogo ? foundLogo[1].big : "";
}

export function getTeamSmallLogos(name: string) {
  const normalizedTeamName = name.toLowerCase().replace(/\s+/g, "");
  const foundLogo = Object.entries(teamsLogos).find(([key]) =>
    normalizedTeamName.includes(key)
  );
  return foundLogo ? foundLogo[1].small : "";
}
