# JS Helpers

JS helper methods

## Usage

```javascript
import * as helpers from '@brendanatme/js-helpers';

const Cap = helpers.capitalize('captain of caps'); // 'Captain Of Caps'

const doesContain = helpers.contains(['dank', 'memes'], 'dank'); // true

const decorated = helpers.decorate(myHoc1, myHoc2, myHoc3)(MyComponent); // DecoratedComponent

const mapped = helpers.mapArrayToObject([
  { name: "Ryu", rank: 1 },
  { name: "Zangief", rank: "Too powerful to rank" },
], 'name'); // { Ryu: { name, rank }, Zangief: { name, rank } }

const flattened = helpers.mergeArrays(...[['how'], ['do'], ['you', 'do']]); // ['how', 'do', 'you' 'do']

const singularize = helpers.singularize('MurderousParakeets'); // 'MurderousParakeet'

let i = 0;
const once = helpers.doOnce((n) => { i = i + n; });
[1, 2, 3].map((_i) => once(_i)); // i === 1
```
