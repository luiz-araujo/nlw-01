<h1 align="center">
    <img alt="NextLevelWeek" title="#NextLevelWeek" src=".github/logo.svg" width="200px" />
</h1>

<p align="center">
  <img alt="Project programing languages count" src="https://img.shields.io/github/languages/count/luiz-araujo/nlw-01?color=34cb79">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/luiz-araujo/nlw-01?color=34cb79">
  <a href="https://www.linkedin.com/in/luiz-carlos-araujo-junior/">
    <img alt="Made by Luiz Araújo" src="https://img.shields.io/badge/made%20by-Luiz Araújo-%20?color=34cb79">
  </a>
  <img alt="GitHub license" src="https://img.shields.io/github/license/luiz-araujo/nlw-01?color=34cb79">
</p>

<p align="center">
<a href="https://insomnia.rest/run/?label=Ecoleta&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fluiz-araujo%2Fecoleta%2Fmaster%2F.github%2Finsomnia.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

<h3 align="center">
    <img alt="Logo" title="#logo" width="200px" src=".github/logo-ecoleta.png">
    <br><br>
</h3>

<p align="center">
  <a href="#nlw">Next Level Week</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#how-to-run">How to run</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#built-with">Built with</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#how-to-contribute">How to contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#license">License</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#get-in-touch">Get in touch!</a>
</p>

## Next Level Week

NLW is a practical week with lots of code, challenges, networking and a single objective: to take you to the next level.
Through our method you will learn new tools, learn about new technologies and discover hacks that will boost your career.
An online and completely free event that will help you take the next step in your evolution as a dev.

## Project

Ecoleta is an application to register and list the collection point for recyclable materials.

<h1 align="center">
    <img alt="Example" title="Example" src=".github/capa.svg" width="500px" />
</h1>

## Layout

To access the layout use [Figma](https://www.figma.com/file/1SxgOMojOB2zYT0Mdk28lB/).

## How to run

#### Requirements

To clone and run the application you will need:

- [Git](https://git-scm.com)
- [Node](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)

From your command line:

```bash
# Clone this repository
$ git clone https://github.com/luiz-araujo/nlw-01.git

# Go into the folder repository
$ cd nlw-01
```

### API

```bash
# Go into the API folder repository
$ cd server

# Install dependencies
$ yarn install
```

In order to connect to the database, you will need to enter the access informations into a ormconfig.json. You can find more about it [here](https://typeorm.io/#/using-ormconfig).

```bash
# Run Migrates
$ yarn knex:migrate

# Run Seeds
$ yarn knex:seed

# Start server
$ yarn dev:server

# running on port 3333
```

### Web

```bash
# in another tab of the terminal install the frontend dependencies and run it

# Go into the frontend repository
$ cd web

# Install dependencies
$ yarn install

# Run
$ yarn start

# running on port 3000
```

### Mobile

The Application was developed using Expo, a free and open source tool used in mobile development with React Native that allows easy access to the device's native APIs without having to install any dependencies or change native code. [Click here](https://expo.io/learn) to get start with Expo.

```bash

# Go into the mobile repository
$ cd mobile

# Install dependencies
$ yarn install

```

Before running the application on your device, you need to change the ip configuration.

[api.ts](https://github.com/luiz-araujo/nlw-01/blob/master/mobile/src/services/api.ts)

```javascript
  baseURL: "http://192.168.0.17:3333",
```

Replace 192.168.0.17 with your own machine's ip.

Then run the application.

```bash

# Run the app
$ yarn start

# Expo will open, just scan the QRCode on terminal or browser and wait for the app to load.

# If there is a problem with the fonts, run:
$ expo install expo-font @expo-google-fonts/ubuntu @expo-google-fonts/roboto

```

## Built With

- [NodeJS](https://nodejs.org/en/) - designed to build scalable network applications
- [ReactJS](https://reactjs.org/) - A JavaScript library for building user interfaces
- [React Native](https://reactnative.dev/) - A JavaScript library for developing native apps(iOS and Android)
- [Expo](https://expo.io/) - A module that give us access to a lot of cool stuff while developing React Native apps.
- [TypeScript](https://www.typescriptlang.org/) - TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.
- [Lottie](https://lottiefiles.com/) - The animation library from AirBnB an JSON-based animation file format.

## How to contribute

- Make a fork;
- Create a branch with your feature: `git checkout -b my-feature`;
- Commit changes: `git commit -m 'feat: My new feature'`;
- Make a push to your branch: `git push origin my-feature`.

After merging your receipt request to done, you can delete a branch from yours.

## License

This project is under the MIT license. See the [LICENSE](https://github.com/luiz-araujo/nlw-01/blob/master/LICENSE) for details.

## Get in touch!

<a href="https://www.linkedin.com/in/luiz-carlos-araujo-junior/" target="_blank" >
  <img alt="Linkedin - Luiz Araújo" src="https://img.shields.io/badge/Linkedin--%23F8952D?style=social&logo=linkedin">
</a>&nbsp;&nbsp;&nbsp;
<a href="mailto:luizcaj@yahoo.com.br" target="_blank" >
  <img alt="Email - Luiz Araújo" src="https://img.shields.io/badge/Email--%23F8952D?style=social&logo=yahoo!">
</a>

---

Made with ❤️ by Luiz Araújo.
