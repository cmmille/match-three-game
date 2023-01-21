# react-template

## Features
* Vite
* TypeScript
* Tailwind
* React Icons
* React Router
* eslint + CRA config

# Setup
```
git clone https://github.com/cmmille/react-template.git new-app
// change name in package.json too

cd ./new-app
npm i
code .
```


# Initial App Creation
## Creating the app with Vite
```
npm create vite@latest react-template -- --template react-ts
```

## Install dependencies
```
npm i -D eslint eslint-config-react-app tailwindcss postcss autoprefixer

npm i react-router-dom react-icons
```

## Configuring dependencies
### ESLint
```
eslint --init
```
Accept all defaults except: 
  * TypeScript: yes, 
  * install missing dependencies: no

Modify tailwind.config.cjs
```
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "react-app",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
    }
}

```

### Tailwind
```
npx tailwindcss init -p
```

tailwind.config.js:
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
src/index.css
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Miscellaneous
### Setup file structure
### Remove extra content
### Setup React Router
