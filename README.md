# Dani PDF (non-english languages)

The problem that pdf maker libraries have is that they only write pdf with ASCII charachters.

to use languages like PERSIAN, japanese or... that requires to use utf-8 characters, you must do these steps:
1) download font that supports your target language (I have used "vazir" font)
2) convert the "ttf" file to "js" file. using [this link](https://rawgit.com/MrRio/jsPDF/master/fontconverter/fontconverter.html)
3) use it inside jsPDF
4) create your PDF

[demo](https://dani-pdf-persian.vercel.app/)

---------



This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
