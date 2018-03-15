# Media Query JS
[![Build Status](https://semaphoreci.com/api/v1/iondrimba/media-query-js-4/branches/master/badge.svg)](https://semaphoreci.com/iondrimba/media-query-js-4)
[![Maintainability](https://api.codeclimate.com/v1/badges/fd960e86c8b6aaf6b6d7/maintainability)](https://codeclimate.com/github/getninjas/media-query-js/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/fd960e86c8b6aaf6b6d7/test_coverage)](https://codeclimate.com/github/getninjas/media-query-js/test_coverage)

Helper to check a media query on JS
* This script appends has methods to check the size of screen.

### Documentation

See live here [https://getninjas.github.io/media-query-js](https://getninjas.github.io/media-query-js)

### Install

`npm i media-query-js --save`

`yarn add media-query-js`

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
