# Philippine Administrative Divisions

This is a set of functions to provide the administrative divisions of the Philippines.

The Philippines is divided into regions; regions are divided into provinces; provinces are further divided into municipalities and cities; municipalities are further divided into barangays.

- Version 2 is an update to the provinces and regions to reflect transfer of barangays from Makati to
  Taguig. It also adds the region Negros Island Region (NIR) and transfer of Siquijor and the Negros
  Provinces to this new region. And a lot more. Also, we're now using Typescript for development.

## Installation

`npm install philippine-administrative-divisions`

## Functions

These are the functions available for this package:

### getRegions

Will provide the regions and their name.

```javascript
import { getRegions } from 'philippine-administrative-divisions';
getRegions();
```

### getProvinces

Will provide an array of all the provinces.

```javascript
import { getProvinces } from 'philippine-administrative-divisions';
getProvinces();
```

### getProvincesByRegionName

Will provide an array of all provinces in the region

```javascript
import { getProvincesByRegionName } from 'philippine-administrative-divisions';
getProvincesByRegionName('REGION VII');
```

This example will return an array containing: `Cebu and Bohol`

Note: Region name is not case sensitive.

### getMunicipalitiesByProvince

Will provide an array of all municipalities in a Province

```javascript
import { getMunicipalitiesByProvince } from 'philippine-administrative-divisions';
getMunicipalitiesByProvince('BOHOL');
```

Note: Province is not case sensitive.

### getBarangaysByProvinceAndMunicipality

Will provide all the barangays of the municipality in that province.

```javascript
import { getBarangaysByProvinceAndMunicipality } from 'philippine-administrative-divisions';
getBarangaysByProvinceAndMunicipality('BOHOL', 'ALBURQUERQUE');
```

Note: both province and municipality are NOT case sensitive.

### searchProvincesByStartString

Will provide provinces with the start string.

```javascript
import { searchProvincesByStartString } from 'philippine-administrative-divisions';
searchProvincesByStartString('boh');
```

Will provide an array `['BOHOL']`

### searchRegionsByStartString

Will provide regions with the start string.

```javascript
import { searchRegionsByStartString } from 'philippine-administrative-divisions';
searchRegionsByStartString('N');
```

Will provide an array `['NCR', 'NIR']`

## License

MIT
