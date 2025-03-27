import { GrandPrix } from "@/types/types";

export function getRaceStatus(grandPrix: GrandPrix): boolean {
  const raceStartDateTime = new Date(`${grandPrix.date}T${grandPrix.time}`);

  raceStartDateTime.setTime(raceStartDateTime.getTime() + 3 * 60 * 60 * 1000);

  const currentTime = new Date();

  return currentTime >= raceStartDateTime;
}
