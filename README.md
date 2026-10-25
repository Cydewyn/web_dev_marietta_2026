## Information on Project ##

# Group Project: Course Management System #

Group Members: Collin Gladen, Ian Hufford, Claire Line

This project provides the base for a course management system, including student registration, instructor registration, course setup, and a help page for users. It currently has minimal coding implementation, including using the React State modifier to enable dynamic page rendering and React Router to create a one-page website.

Libraries Used: React (Typescript), Vite, Base UI (React), Material UI (MUI), Material UI Icons (MUI Icon), React Router

Directory structure is mostly flat with some related pages placed in their own folders for management purposes. 

# Dependencies #

├── @babel/core@7.29.7
├── @base-ui/react@1.8.0
├── @emotion/react@11.14.0
├── @emotion/styled@11.14.1
├── @eslint/js@10.0.1
├── @mui/icons-material@9.4.0
├── @mui/material@9.4.0
├── @mui/x-date-pickers@9.15.0
├── @rolldown/plugin-babel@0.2.4
├── @types/babel__core@7.20.5
├── @types/node@24.13.4
├── @types/react-dom@19.3.0
├── @types/react@19.3.0
├── @vitejs/plugin-react@6.1.1
├── babel-plugin-react-compiler@1.0.0
├── dayjs@1.11.23
├── eslint-plugin-react-hooks@7.1.1
├── eslint-plugin-react-refresh@0.5.6
├── eslint@10.10.0
├── globals@17.12.0
├── lab@18.0.2
├── mui@0.0.1
├── react-dom@19.3.0
├── react-router-dom@7.18.3
├── react@19.3.0
├── typescript-eslint@8.70.0
├── typescript@6.0.3
└── vite@8.3.0

# Project Execution #
To run this project locally on your PC, you must download the entire repository and open in a IDE. Once you have the repository on your device, you can install the dependencies through the command line terminal. The required commands are as follows (using npm installation):

- npm i react

- npm i react-router

- Vite setup template can be found below (npm create vite@latest)

- npm i @base-ui/react

- npm i @mui/material

- npm install @mui/icons-material @mui/material @emotion/styled @emotion/react

- npm i dayjs

- npm i @mui/x-date-pickers

Once all dependencies are installed, the project can be run locally via npm. The command for local deployment is "npm run dev." 

# Extra Credit Opportunities #

Responsive Design

Bootstrap (MUI Material) Library to replace CSS

React 

## Information on Setup Template ##

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.
You can also try [the experimental native React Compiler support in plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md#rust-react-compiler) by using `compiler: true` in the plugin options instead of using the Babel plugin.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://npmx.dev/package/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://npmx.dev/package/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```
