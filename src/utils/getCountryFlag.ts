const countryData: Record<string, string> = {
  British: "GB",
  Thai: "TH",
  Danish: "DK",
  Polish: "PL",
  Swedish: "SE",
  Indonesian: "ID",
  Venezuelan: "VE",
  Dutch: "NL",
  French: "FR",
  German: "DE",
  Spanish: "ES",
  Italian: "IT",
  Finnish: "FI",
  Monegasque: "MC",
  Australian: "AU",
  Canadian: "CA",
  American: "US",
  Japanese: "JP",
  Brazilian: "BR",
  Chinese: "CN",
  Indian: "IN",
  Mexican: "MX",
  Russian: "RU",
  Portuguese: "PT",
  Belgian: "BE",
  Swiss: "CH",
  Austrian: "AT",
  SouthKorean: "KR",
  SouthAfrican: "ZA",
  Argentine: "AR",
  NewZealander: "NZ",
  Albanian: "AL",
  Andorran: "AD",
  Angolan: "AO",
  Armenian: "AM",
  Azerbaijani: "AZ",
  Bahamian: "BS",
  Bahraini: "BH",
  Bangladeshi: "BD",
  Barbadian: "BB",
  Belarusian: "BY",
  Beninese: "BJ",
  Bolivian: "BO",
  Bosnian: "BA",
  Botswanan: "BW",
  Bulgarian: "BG",
  Burundian: "BI",
  Cambodian: "KH",
  Cameroonian: "CM",
  CapeVerdian: "CV",
  Hungarian: "HU",
  Irish: "IE",
  Liechtensteiner: "LI",
  Uruguayan: "UY",
  Chilean: "CL",
  Colombian: "CO",
  Czech: "CZ",
  Malaysian: "MY",
  HongKong: "HK",
};

const normalizeNationality = (nationality: string) => {
  return nationality
    .replace(/\s+/g, "")
    .replace(/(?:^|\s)\S/g, (a) => a.toUpperCase());
};

export function getCountryFlag(nationality: string) {
  const normalizedNationality = normalizeNationality(nationality);
  const countryCode = countryData[normalizedNationality];
  if (!countryCode) return { code: "UN", flagUrl: "" };

  return {
    code: countryCode,
    flagUrl: `https://flagsapi.com/${countryCode}/shiny/64.png`,
  };
}
