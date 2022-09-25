const {
  getRegions,
  getProvinces,
  getProvincesByRegionName,
  getMunicipalitiesByProvince,
  getBarangaysByProvinceAndMunicipality,
} = require('../index')

test('Function getRegions returns 17 regions', () => {
  expect(getRegions().length).toBe(17)
})

test('Function getRegions returns an array containing REGION I', () => {
  expect(getRegions()).toContain('REGION I')
})

test('Function getProvinces returns an array containing BOHOL', () => {
  expect(getProvinces()).toContain('BOHOL')
})

test(`Function getProvincesByRegionName returns an array containing BOHOL
when param is 'REGION VII'`, () => {
  expect(getProvincesByRegionName('REGION VII')).toContain('BOHOL')
})

test(`Function getProvincesByRegionName returns false
when param does not exist`, () => {
  expect(getProvincesByRegionName('NONEXISTINGREGION')).toBe(false)
})

test(`Function getProvincesByRegionName returns an array even if param is lowercase`, () => {
  expect(getProvincesByRegionName('region vii')).toContain('BOHOL')
})

test('Function getMunicipalitiesByProvince returns an array when exists', () => {
  expect(getMunicipalitiesByProvince('BOHOL')).toContain('ALBURQUERQUE')
})

test('Function getMunicipalitiesByProvince returns an array even when param is lowercase', () => {
  expect(getMunicipalitiesByProvince('bohol')).toContain('ALBURQUERQUE')
})

test('Function getMunicipalitiesByProvince returns false when province does NOT exist', () => {
  expect(getMunicipalitiesByProvince('NONEXISTINGPROVINCE')).toBe(false)
})

test('Function getBarangaysByProvinceAndMunicipality will return an array when exists', () => {
  expect(getBarangaysByProvinceAndMunicipality('BOHOL', 'ALBURQUERQUE')).toContain('BAHI')
})
