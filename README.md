# Dhalsim
[![Build Status](https://travis-ci.org/getninjas/dhalsim-js.svg?branch=master)](https://travis-ci.org/getninjas/dhalsim-js)
[![Maintainability](https://api.codeclimate.com/v1/badges/56d8af4515d3676174d1/maintainability)](https://codeclimate.com/github/getninjas/dhalsim-js/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/56d8af4515d3676174d1/test_coverage)](https://codeclimate.com/github/getninjas/dhalsim-js/test_coverage)

Helper to check a media query on JS
* This script appends has methods to check the size of screen.

### Documentation

See live here [https://getninjas.github.io/dhalsim-js/](https://getninjas.github.io/dhalsim-js/)

### Install

`npm i dhalsim-js --save`

`yarn add dhalsim-js`

### Demo

`npm run demo`

`yarn demo`

### Build

`npm run build`

`yarn build`


### Usage

You can use it via:
* GLOBAL variable
* CommonJs
* AMD
* ES6 Module

#### To init module
* init();

#### Methods
* isMobile();
* isTablet();
* isDesktop();
* isWide();
* beyondTablet();
* beyondMobile();

### Release process
We are using `npm version` to generate our releases. There are 3 kind of releases generally used: major, minor and patch. See the http://semver.org/ for more details.

The process is:

1. After merge PR on master:

  1.1 `git checkout master`;

  1.2 `git pull --tags origin master`;

2. run `npm version major|minor|patch -m "Message of your changes"` (important: you need to be an admin to push on master);

3. Now let's publish the package on npm. You need to run `npm adduser` and have the credentials to do this;

  3.1 If nothing fails on `npm version` and you have the credentials of npm GetNinjas account, run `npm publish`.

4. Done! Now, you can install the package on any project!
