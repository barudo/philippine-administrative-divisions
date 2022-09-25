'use strict'
const fs = require('fs')
const path = require('path')

function _loadData(file) {
  const rawData = fs.readFileSync(path.resolve(__dirname, `./${file}.json`))
  return JSON.parse(rawData)
}

function getRegions() {
  let regions = _loadData('regions')
  regions = regions.map((region) => region.name)
  return regions
}

function getProvinces() {
  let provinces = _loadData('provinces')
  provinces = Object.keys(provinces).sort()
  return provinces
}

function getProvincesByRegionName(region) {
  region = region.toUpperCase()
  const regions = _loadData('regions')
  const dregion = regions.find((dregion) => dregion.name === region)
  if (dregion) {
    return dregion.provinces
  } else {
    return false
  }
}

function getMunicipalitiesByProvince(province) {
  province = province.toUpperCase()
  const provinces = _loadData('provinces')
  if (provinces[province]) {
    let municipalities = Object.keys(provinces[province].municipalities)
    return municipalities
  } else {
    return false
  }
}

function getBarangaysByProvinceAndMunicipality(province, municipality) {
  province = province.toUpperCase()
  municipality = municipality.toUpperCase()
  const municipalities = getMunicipalitiesByProvince(province)
  if (!municipalities || !municipalities.indexOf(municipality) < 0) {
    return false
  }
  const provinces = _loadData('provinces')
  const barangays = provinces[province].municipalities[municipality].barangays
  return barangays
}

module.exports = {
  getBarangaysByProvinceAndMunicipality,
  getMunicipalitiesByProvince,
  getProvinces,
  getProvincesByRegionName,
  getRegions,
}
