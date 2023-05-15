# Technical Assessment for Primum 

## Frontend Mentor - REST Countries API with color theme switcher
- Challenge is to pick and develop a project from [Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca) 


## Purpose 
The app displays countries and filters countries based on user's input/interaction. 

## Challenge instructions
Your challenge is to integrate with the [REST Countries API](https://restcountries.com) to pull country data and display it like in the designs.

You can use any JavaScript framework/library on the front-end such as [React](https://reactjs.org) or [Vue](https://vuejs.org). You also have complete control over which packages you use to do things like make HTTP requests or style your project.

Your users should be able to:
- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode *(optional)*


# Solito + NativeWind Example Monorepo 
Created with [Solito](https://solito.dev/)
```sh
npx create-solito-app@latest my-solito-app -t with-tailwind
```

## 🗂 Folder layout
- `apps` entry points for each app

  - `expo`
  - `next`

- `packages` shared packages across apps
  - `app` you'll be importing most files from `app/`
    - `features` (don't use a `screens` folder. organize by feature.)
    - `provider` (all the providers that wrap the app, and some no-ops for Web.)
    - `navigation` Next.js has a `pages/` folder. React Native doesn't. This folder contains navigation-related code for RN. You may use it for any navigation code, such as custom links.
    - `design` your app's design system. organize this as you please.
      - `typography` (components for all the different text styles)
      - `layout` (components for layouts)

You can add other folders inside of `packages/` if you know what you're doing and have a good reason to.

## Start the app

- Install dependencies: `yarn`

- Next.js local dev: `yarn web`
  - Runs `yarn next`


## Technologies used:

- [React](https://reactjs.org/docs/getting-started.html)

- [Next.js](https://nextjs.org/docs)

- [Css-Tailwind](https://tailwindcss.com/)

- [Typescript](https://www.typescriptlang.org/docs/handbook/react.html)

- [Vercel](https://vercel.com/)


## Set up
Clone this repo and run: 

```bash
yarn install
```

## Live Site
https://primum-assess-next.vercel.app/


## Questions?
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](daniel.ek.park@gmail.com)
[![Linkedin](https://img.shields.io/badge/Linkedin-Linkedin%20-blue)](https://www.linkedin.com/in/daniel-park-70878119a/)