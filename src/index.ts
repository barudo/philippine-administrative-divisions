'use strict';
import fs from 'fs';
import path from 'path';
import { IRegion, IProvinces } from './index.d';

function _loadData(file: string): IRegion[] | IProvinces {
  const rawData: Buffer = fs.readFileSync(
    path.resolve(__dirname, `./${file}.json`),
  );
  return JSON.parse(rawData.toString());
}

export function getRegions(): string[] {
  let regions = _loadData('regions') as IRegion[];
  const regionals: string[] = regions.map((region) => region.name);
  return regionals;
}

export function getProvinces(): string[] {
  let provinces = _loadData('provinces') as IProvinces;
  const provincesToReturn = Object.keys(provinces).sort();
  return provincesToReturn;
}

export function getProvincesByRegionName(region: string): string[] | boolean {
  region = region.toUpperCase();
  const regions = _loadData('regions') as IRegion[];
  const dregion = regions.find((dregion) => dregion.name === region);
  if (dregion) {
    return dregion.provinces;
  } else {
    return false;
  }
}

export function getMunicipalitiesByProvince(
  province: string,
): string[] | boolean {
  province = province.toUpperCase();
  const provinces = _loadData('provinces') as IProvinces;
  if (provinces[province]) {
    let municipalities = Object.keys(provinces[province].municipalities);
    return municipalities;
  } else {
    return false;
  }
}

export function getBarangaysByProvinceAndMunicipality(
  province: string,
  municipality: string,
) {
  province = province.toUpperCase();
  municipality = municipality.toUpperCase();
  const municipalities = getMunicipalitiesByProvince(province);
  if (
    typeof municipalities === 'boolean' ||
    municipalities.indexOf(municipality) < 0
  ) {
    return false;
  }
  const provinces = _loadData('provinces') as IProvinces;
  const barangays = provinces[province].municipalities[municipality].barangays;
  return barangays;
}

export function searchProvincesByStartString(startString: string): string[] {
  const provinces = getProvinces();
  return provinces.filter((provinceName) =>
    provinceName.toLowerCase().startsWith(startString.toLowerCase()),
  );
}

export function searchRegionsByStartString(startString: string): string[] {
  const regions = getRegions();
  return regions.filter((regionName) =>
    regionName.toLowerCase().startsWith(startString.toLowerCase()),
  );
}
