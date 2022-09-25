'use strict'
const fs = require('fs')
const path = require('path')

function _loadData(file) {
  const rawData = fs.readFileSync(path.resolve(__dirname, `./${file}.json`))
  return JSON.parse(rawData)
}

function getRegions() {
  let regions = _loadData('regions')
  regions = regions.map(region => region.name)
  return regions
}

function getProvinces() {
  let provinces = _loadData('provinces')
  provinces = Object.keys(provinces).sort()
  return provinces
}

function getProvincesByRegionName(region) {
  const regions = _loadData('regions')
  const dregion = regions.find(dregion => dregion.name === region)
  if(dregion) {
    return dregion.provinces
  } else {
    return false
  }
}

function getMunicipalitiesByProvince(province) {
  const provinces = _loadData('provinces')
  if(provinces[province]) {
    let municipalities = Object.keys(provinces[province].municipalities)
    return municipalities
  } else {
    return false
  }
}


module.exports = {
  getRegions,
  getProvinces,
  getProvincesByRegionName,
  getMunicipalitiesByProvince
}