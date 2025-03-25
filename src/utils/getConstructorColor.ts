const teamColors: Record<string, string> = {
  redbull: "var(--redbull)",
  ferrari: "var(--ferrari)",
  mercedes: "var(--mercedes)",
  mclaren: "var(--mclaren)",
  alpine: "var(--alpine)",
  haas: "var(--haas)",
  williams: "var(--williams)",
  rbf1team: "var(--rbf1team)",
  sauber: "var(--sauber)",
  astonmartin: "var(--aston-martin)",
};

export function getTeamColor (name: string) {
  const normalizedTeamName = name.toLowerCase().replace(/\s+/g, "");
  const foundColor = Object.entries(teamColors).find(([key]) =>
    normalizedTeamName.toLowerCase().includes(key)
  );
  return foundColor ? foundColor[1] : "var(--default-color)";
};

