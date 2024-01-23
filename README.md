This demo is for how can be Typescript file build with ESBuild and able to debug in VS code.

Steps to follow.
*  Initilise the project

```
 npm init -y
```

Then package.json will be created. 

* change type= "module" in package.json
  

* Install below depenedcies
  @types/node
  esbuild
  npm-run-all
  typescript

```
 npm install --save-dev @types/node, esbuild, npm-run-all, typescript

```
* Config tsconfig.json
  
* Create a manually file tsconfig.json and provide same details, as this project is building with ESBuild and their compile options as below.
* tsconfig.json
```
"compilerOptions": {
    /* Base Options: */
    "esModuleInterop": true,
    "skipLibCheck": true,
    "target": "es2022",
    "verbatimModuleSyntax": true,
    "allowJs": true,
    "resolveJsonModule": true,
    "moduleDetection": "force",
    /* Strictness */
    "strict": true,
    "noUncheckedIndexedAccess": true,
    /* If NOT transpiling with TypeScript: */
    "moduleResolution": "Bundler",
    "module": "ESNext",
    "noEmit": true,
    "allowImportingTsExtensions": true,
    /* If your code doesn't run in the DOM: */
    "lib": [
      "es2022"
    ]
  }
```
* Configuration of launch.json
  
* Configure the Debug the application in VSCode.
* Generate launch.json in .vscode
- launch.json
````
{
            "type": "node",
            "request": "launch",
            "name": "TS debug Program",
            "preLaunchTask": "npm: debug",
            "sourceMaps": true,
            "smartStep": true,
            "internalConsoleOptions": "openOnSessionStart",           
            "program": "${workspaceFolder}\\src\\index.ts",
            "outFiles": [
                "${workspaceFolder}/dist/*.js"
            ]
        }
````
* add preLaunchTask and it inern call the scripts of package.json
* sourceMaps : true
* it transpiles from ts to js in dist folder using the esbuild.
  
* scripts of package.json

* Configure the script build which scripts in package.json
* package.json
  ````
   "scripts": {

    "lint": "tsc",
    "build": "esbuild src/index.ts --bundle --platform=node --format=esm --sourcemap --outdir=dist",

    "dev": "run-p dev:*",
    "dev:tsc": "tsc --watch --preserveWatchOutput",
    "dev:node": "node --watch dist/index.js",
    "dev:esbuild": "pnpm run build --watch",

    "debug": "run-p debug:*",
    "debug:tsc": "tsc --preserveWatchOutput",    
    "debug:esbuild": "npm run build"

  },
  ````
* Build - ESBuild and generated js files in dist directory.
* dev - To run on npm in command prompt which is without debugging the app.
* debug - which for debug the application. 
````
npm run build

npm run dev

npm run debug
````

