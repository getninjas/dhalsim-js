# Dhalsim
[![Build Status](https://semaphoreci.com/api/v1/iondrimba/dhalsim-js-2/branches/master/badge.svg)](https://semaphoreci.com/iondrimba/dhalsim-js-2)
[![Maintainability](https://api.codeclimate.com/v1/badges/fd960e86c8b6aaf6b6d7/maintainability)](https://codeclimate.com/github/getninjas/dhalsim-js/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/fd960e86c8b6aaf6b6d7/test_coverage)](https://codeclimate.com/github/getninjas/dhalsim-js/test_coverage)

Helper to check a media query on JS
* This script appends has methods to check the size of screen.

### Documentation

See live here [https://getninjas.github.io/dhalsim-js](https://getninjas.github.io/dhalsim-js)

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

After install, you will have to add the stylesheet (dist/media-query.css) to your page via link tag or import it to your existing style manifest.

You can use it via:
* GLOBAL variable
* CommonJs
* AMD
* ES6 Module

#### Methods
* isMobile();
* isTablet();
* isDesktop();
* isWide();
* beyondTablet();
* beyondMobile();
