### compile ts to js with

- tsc main.ts
- tsc main.ts main.js
- tsc main.ts -w >> watch mode

### create tsconfig file

- tsc --init
  - updated rootDir to point to src file where i will keep the ts files
  - updated the outDir to point where the js file will be compiled

### set watch mode to look for all files

use this now to run the tsc compiler

- tsc -w

### disallow compile when typescript error

- noEmitOnError: true

you can also just run it occasionally if you leave the setting to false and then in the terminal

- tsc --noEmitOnError -w
