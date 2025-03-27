export type Driver = {
  driverId: string;
  permanentNumber: string;
  code: string;
  url: string;
  givenName: string;
  familyName: string;
  dateOfBirth: string;
  nationality: string;
}
export type AllDriver = {
  driverId: string;
  url: string;
  givenName: string;
  familyName: string;
  dateOfBirth: string;
  nationality: string;
}
export type AllConstructor = {
  constructorId: string;
  url: string;
  name: string;
  nationality: string;
}

export type Constructor = {
  constructorId: string;
  url: string;
  name: string;
  nationality: string;
}

export type DriverStanding = {
  position: string;
  positionText: string;
  points: string;
  wins: string;
  Driver: Driver;
  Constructors: Constructor[];
};

export type ConstructorStanding = {
  position: string;
  positionText: string;
  points: string;
  wins: string;
  Constructor: Constructor;
};

export type Circuit = {
  circuitId: string;
  url: string;
  circuitName: string;
  Location: {
    lat: string;
    long: string;
    locality: string;
    country: string;
  };
};

export type CircuitsByContinent = {
  Europe?: Circuit[];
  Asia?: Circuit[];
  MiddleEast?: Circuit[];
  NorthAmerica?: Circuit[];
  SouthAmerica?: Circuit[];
  Africa?: Circuit[];
  Oceania?: Circuit[];
  Unknown?: Circuit[];
};