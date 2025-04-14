const circuitsImages = [
  { circuitId: "Adelaide", image: "/images/circuits/adelaide_gp.jpg" },
  { circuitId: "Ain-Diab", image: "/images/circuits/morocco_circuit.jpg" },
  { circuitId: "Aintree", image: "/images/circuits/aintree_race.jpg" },
  {
    circuitId: "Albert_Park",
    image: "/images/circuits/Albert_Park_Grand_Prix_Circuit.jpg",
  },
  { circuitId: "Americas", image: "/images/circuits/cota.jpg" },
  { circuitId: "Anderstorp", image: "/images/circuits/swedish_gp.jpg" },
  { circuitId: "Avus", image: "/images/circuits/berlin_track.jpg" },
  {
    circuitId: "Bahrain",
    image: "/images/circuits/Bahrain_International_Circuit.jpg",
  },
  { circuitId: "Baku", image: "/images/circuits/azerbaijan_circuit.jpg" },
  { circuitId: "Boavista", image: "/images/circuits/porto_street.jpg" },
  { circuitId: "Brands Hatch", image: "/images/circuits/uk_circuit.jpg" },
  { circuitId: "Bremgarten", image: "/images/circuits/swiss_track.jpg" },
  { circuitId: "Buddh", image: "/images/circuits/india_circuit.jpg" },
  { circuitId: "Catalunya", image: "/images/circuits/barcelona.jpg" },
  { circuitId: "Charade", image: "/images/circuits/clermont_ferrand.jpg" },
  { circuitId: "Dallas", image: "/images/circuits/usa_street_circuit.jpg" },
  { circuitId: "Detroit", image: "/images/circuits/street_track.jpg" },
  { circuitId: "Dijon", image: "/images/circuits/french_circuit.jpg" },
  { circuitId: "Donington", image: "/images/circuits/donington_park.jpg" },
  { circuitId: "Essarts", image: "/images/circuits/rouen.jpg" },
  { circuitId: "Estoril", image: "/images/circuits/portugal_circuit.jpg" },
  { circuitId: "Fuji", image: "/images/circuits/japan_speedway.jpg" },
  { circuitId: "Galvez", image: "/images/circuits/argentina_track.jpg" },
  { circuitId: "George", image: "/images/circuits/south_african_circuit.jpg" },
  { circuitId: "Hockenheimring", image: "/images/circuits/german_gp.jpg" },
  { circuitId: "Hungaroring", image: "/images/circuits/budapest.jpg" },
  { circuitId: "Imola", image: "/images/circuits/san_marino_circuit.jpg" },
  { circuitId: "Indianapolis", image: "/images/circuits/indy.jpg" },
  { circuitId: "Interlagos", image: "/images/circuits/sao_paulo.jpg" },
  { circuitId: "Istanbul", image: "/images/circuits/turkey_circuit.jpg" },
  { circuitId: "Jacarepagua", image: "/images/circuits/rio_circuit.jpg" },
  { circuitId: "Jarama", image: "/images/circuits/madrid_track.jpg" },
  { circuitId: "Jeddah", image: "/images/circuits/JeddahCornicheCircuit.jpg" },
  { circuitId: "Jerez", image: "/images/circuits/spanish_circuit.jpg" },
  { circuitId: "Kyalami", image: "/images/circuits/south_african_gp.jpg" },
  {
    circuitId: "Las Vegas",
    image: "/images/circuits/nevada_street_circuit.jpg",
  },
  { circuitId: "Lemans", image: "/images/circuits/24h_track.jpg" },
  { circuitId: "Long Beach", image: "/images/circuits/california_street.jpg" },
  {
    circuitId: "Losail",
    image: "/images/circuits/LusailInternationalCircuit.jpg",
  },
  { circuitId: "Magny Cours", image: "/images/circuits/french_gp.jpg" },
  { circuitId: "Marina Bay", image: "/images/circuits/singapore_night.jpg" },
  { circuitId: "Miami", image: "/images/circuits/florida_street_circuit.jpg" },
  { circuitId: "Monaco", image: "/images/circuits/monte_carlo.jpg" },
  { circuitId: "Monsanto", image: "/images/circuits/lisbon_track.jpg" },
  { circuitId: "Montjuic", image: "/images/circuits/barcelona_street.jpg" },
  { circuitId: "Monza", image: "/images/circuits/italian_gp.jpg" },
  { circuitId: "Mosport", image: "/images/circuits/canadian_track.jpg" },
  { circuitId: "Mugello", image: "/images/circuits/tuscany_circuit.jpg" },
  { circuitId: "Nivelles", image: "/images/circuits/belgian_track.jpg" },
  { circuitId: "Nurburgring", image: "/images/circuits/german_circuit.jpg" },
  { circuitId: "Okayama", image: "/images/circuits/japanese_circuit.jpg" },
  { circuitId: "Pedralbes", image: "/images/circuits/barcelona_old.jpg" },
  { circuitId: "Pescara", image: "/images/circuits/italian_street.jpg" },
  { circuitId: "Phoenix", image: "/images/circuits/arizona_track.jpg" },
  { circuitId: "Portimao", image: "/images/circuits/algarve_circuit.jpg" },
  { circuitId: "Red Bull Ring", image: "/images/circuits/spielberg.jpg" },
  { circuitId: "Reims", image: "/images/circuits/french_historic.jpg" },
  { circuitId: "Ricard", image: "/images/circuits/paul_ricard.jpg" },
  { circuitId: "Riverside", image: "/images/circuits/california_track.jpg" },
  { circuitId: "Rodriguez", image: "/images/circuits/mexico_circuit.jpg" },
  { circuitId: "Sebring", image: "/images/circuits/florida_endurance.jpg" },
  { circuitId: "Sepang", image: "/images/circuits/malaysia_circuit.jpg" },
  { circuitId: "Shanghai", image: "/images/circuits/Shanghai_F1_Circui_01.jpg" },
  { circuitId: "Silverstone", image: "/images/circuits/british_gp.jpg" },
  { circuitId: "Sochi", image: "/images/circuits/russian_gp.jpg" },
  { circuitId: "Spa", image: "/images/circuits/belgian_gp.jpg" },
  { circuitId: "Suzuka", image: "/images/circuits/suzuka.webp" },
  { circuitId: "Tremblant", image: "/images/circuits/canadian_circuit.jpg" },
  { circuitId: "Valencia", image: "/images/circuits/spain_street.jpg" },
  { circuitId: "Vegas", image: "/images/circuits/las_vegas_strip.jpg" },
  { circuitId: "Villeneuve", image: "/images/circuits/canadian_track.jpg" },
  { circuitId: "Watkins Glen", image: "/images/circuits/usa_classic.jpg" },
  { circuitId: "Yas Marina", image: "/images/circuits/abu_dhabi.jpg" },
  { circuitId: "Yeongam", image: "/images/circuits/korean_circuit.jpg" },
  { circuitId: "Zandvoort", image: "/images/circuits/dutch_circuit.jpg" },
  { circuitId: "Zeltweg", image: "/images/circuits/austrian_track.jpg" },
  { circuitId: "Zolder", image: "/images/circuits/belgian_circuit.jpg" },
];


export const getCircuitImage = (circuitId: string) => {

  const circuit = circuitsImages.find(
    (circuit) => circuit.circuitId.toLowerCase() === circuitId
  );
  return circuit ? circuit.image : "/images/circuits/default.jpg";
};
