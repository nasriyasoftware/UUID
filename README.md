[![N|Solid](https://static.wixstatic.com/media/72ffe6_da8d2142d49c42b29c96ba80c8a91a6c~mv2.png)](https://nasriya.net)
# UUIDX.
[![Static Badge](https://img.shields.io/badge/license-Free_(Restricted)-blue)](https://github.com/nasriyasoftware/UUIDX?tab=License-1-ov-file) ![Repository Size](https://img.shields.io/github/repo-size/nasriyasoftware/UUIDX.svg) ![Last Commit](https://img.shields.io/github/last-commit/nasriyasoftware/UUIDX.svg) [![Status](https://img.shields.io/badge/Status-Stable-green.svg)](link-to-your-status-page)
##### Visit us at [www.nasriya.net](https://nasriya.net).

A lightweight package to generate UUIDs on the go.
Made with ❤️ in **Palestine** 🇵🇸
___

Generating UUID is never easier.

### Installation
```shell
npm i @nasriya/uuidx
```

### Importing
Import in **ES6** modules 
```ts
import uuidx from '@nasriya/uuidx';
```
Import in **CommonJS (CJS)**
```js
const uuidx = require('@nasriya/uuidx').default;
```
### Usage

To generate a UUIDs, call the method of the needed version whenever you need it:

```ts
const idv4 = uuidX.v4();
const idv5 = uuidX.v5('nasriya.net', uuidX.v4());

console.log(idv4);  // ⇨ 'e2e05f173-8646e-47fff-9d21f-735250ce1e28'
console.log(idv5);  // ⇨ 'b79020af-20af-5020afabee-8020afabee433-433465' 
```
Thank you!
___
## License
Please read the license from [here](https://github.com/nasriyasoftware/UUIDX?tab=License-1-ov-file).