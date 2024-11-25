import {
  getRegions,
  getProvinces,
  getProvincesByRegionName,
  getMunicipalitiesByProvince,
  getBarangaysByProvinceAndMunicipality,
  searchProvincesByStartString,
  searchRegionsByStartString,
} from '../index';

test('Function getRegions returns 18 regions', () => {
  expect(getRegions().length).toBe(18);
});

test('Function getRegions returns an array containing REGION I', () => {
  expect(getRegions()).toContain('REGION I');
});

test('Function getProvinces returns an array containing BOHOL', () => {
  expect(getProvinces()).toContain('BOHOL');
});

test(`Function getProvincesByRegionName returns an array containing BOHOL
when param is 'REGION VII'`, () => {
  expect(getProvincesByRegionName('REGION VII')).toContain('BOHOL');
});

test(`Function getProvincesByRegionName returns false
when param does not exist`, () => {
  expect(getProvincesByRegionName('NONEXISTINGREGION')).toBe(false);
});

test(`Function getProvincesByRegionName returns an array even if param is lowercase`, () => {
  expect(getProvincesByRegionName('region vii')).toContain('BOHOL');
});

test('Function getMunicipalitiesByProvince returns an array when exists', () => {
  expect(getMunicipalitiesByProvince('BOHOL')).toContain('ALBURQUERQUE');
});

test('Function getMunicipalitiesByProvince returns an array even when param is lowercase', () => {
  expect(getMunicipalitiesByProvince('bohol')).toContain('ALBURQUERQUE');
});

test('Function getMunicipalitiesByProvince returns false when province does NOT exist', () => {
  expect(getMunicipalitiesByProvince('NONEXISTINGPROVINCE')).toBe(false);
});

test('Function getBarangaysByProvinceAndMunicipality will return an array when exists', () => {
  expect(
    getBarangaysByProvinceAndMunicipality('BOHOL', 'ALBURQUERQUE'),
  ).toContain('BAHI');
});

test(`Function searchProvincesByStartString will return an array when provinces starting
  with the start string exists`, () => {
  expect(searchProvincesByStartString('boh')).toContain('BOHOL');
});

test(`Function searchRegionsByStartString will return an array when regions starting
  with the start string exists`, () => {
  expect(searchRegionsByStartString('reg')).toContain('REGION I');
});
