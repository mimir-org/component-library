interface Elevation {
  opacity: number;
}

export interface ElevationSystem {
  levels: {
    0: Elevation;
    1: Elevation;
    2: Elevation;
    3: Elevation;
    4: Elevation;
    5: Elevation;
  };
}
