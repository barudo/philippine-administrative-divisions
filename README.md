# Philippine Administrative Divisions

This is a set of functions to provide the administrative divisions of the Philippines.

The Philippines is divided into regions; regions are divided into provinces; provinces are further divided into municipalities and cities; municipalities are further divided into barangays.

## Installation

`npm install philippine-administrative-divisions`

## Functions

These are the functions available for this package:

### getRegions

Will provide the regions and their name.

```javascript
const { getRegions } = require('philippine-administrative-divisions')
getRegions()
```

### getProvinces

Will provide an array of all the provinces.

```javascript
const { getProvinces } = require('philippine-administrative-divisions')
getProvinces()
```

### getProvincesByRegionName

Will provide an array of all provinces in the region

```javascript
const { getProvincesByRegionName } = require('philippine-administrative-divisions')
getProvincesByRegionName('REGION VII')
```

This example will return an array containing: `Cebu, Bohol, Siquijor and Negros Oriental`

Note: Region name is not case sensitive.

### getMunicipalitiesByProvince

Will provide an array of all municipalities in a Province

```javascript
const { getMunicipalitiesByProvince } = require('philippine-administrative-divisions')
getMunicipalitiesByProvince('BOHOL')
```

Note: Province is not case sensitive.

### getBarangaysByProvinceAndMunicipality

Will provide all the barangays of the municipality in that province.

```javascript
const { getBarangaysByProvinceAndMunicipality } = require('philippine-administrative-divisions')
getBarangaysByProvinceAndMunicipality('BOHOL', 'ALBURQUERQUE')
```

Note: both province and municipality are NOT case sensitive.

## License

MIT
