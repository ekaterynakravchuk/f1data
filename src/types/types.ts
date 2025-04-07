export type Driver = {
  driverId: string;
  permanentNumber: string;
  code: string;
  url: string;
  givenName: string;
  familyName: string;
  dateOfBirth: string;
  nationality: string;
};
export type AllDriver = {
  driverId: string;
  url: string;
  givenName: string;
  familyName: string;
  dateOfBirth: string;
  nationality: string;
};
export type AllConstructor = {
  constructorId: string;
  url: string;
  name: string;
  nationality: string;
};

export type Constructor = {
  constructorId: string;
  url: string;
  name: string;
  nationality: string;
};

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

export type GrandPrix = {
  season: string;
  round: string;
  url: string;
  raceName: string;
  Circuit: Circuit;
  date: string;
  time: string;
  Results: GrandPrixResult[];
  FirstPractice?: {
    date: string;
    time: string;
  };
  SecondPractice?: {
    date: string;
    time: string;
  };
  ThirdPractice?: {
    date: string;
    time: string;
  };
  Qualifying?: {
    date: string;
    time: string;
  };
  Sprint?: {
    date: string;
    time: string;
  };
  SprintQualifying?: {
    date: string;
    time: string;
  };
};

export type GrandPrixResult = {
  number: string;
  position: string;
  positionText: string;
  points: string;
  Driver: Driver;
  Constructor: Constructor;
  grid: string;
  laps: string;
  status: string;
  Time?: {
    millis: string;
    time: string;
  };
  FastestLap?: {
    rank: string;
    lap: string;
    Time: {
      time: string;
    };
    AverageSpeed?: {
      units: string;
      speed: string;
    };
  };
};

export type SingleGrandPrix = {
  season: string;
  round: string;
  url: string;
  raceName: string;
  Circuit: Circuit;
  date: string;
  time: string;
  Results: GrandPrixResult[];
};
export type Sprint = {
  season: string;
  round: string;
  url: string;
  raceName: string;
  Circuit: Circuit;
  date: string;
  time: string;
  SprintResults: GrandPrixResult[];
};

export interface QualifyingResult {
  number: string;
  position: string;
  Driver: Driver;
  Constructor: Constructor;
  Q1: string;
  Q2: string;
  Q3: string;
}
