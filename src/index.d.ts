export interface IRegion {
  name: string;
  provinces: string[];
}

// Interface for Barangay
export interface IBarangay {
  name: string; // Name of the barangay
}

// Interface for Municipality
export interface IMunicipality {
  barangays: IBarangay[]; // Array of barangays
}

// Interface for Province
export interface IProvince {
  municipalities: {
    [municipalityName: string]: IMunicipality; // Municipality name as key and municipality data as value
  };
}
// Interface for Provinces (Collection of all provinces)
export interface IProvinces {
  [provinceName: string]: IProvince; // Province name as key and province data as value
}
