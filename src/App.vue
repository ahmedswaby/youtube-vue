<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import './normalize.css';
@font-face {
  font-family: 'icomoon';
  src:  url('./assets/fonts/icons/icomoon.eot?a38ew6');
  src:  url('./assets/fonts/icons/icomoon.eot?a38ew6#iefix') format('embedded-opentype'),
    url('./assets/fonts/icons/icomoon.ttf?a38ew6') format('truetype'),
    url('./assets/fonts/icons/icomoon.woff?a38ew6') format('woff'),
    url('./assets/fonts/icons/icomoon.svg?a38ew6#icomoon') format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

[class^="icon-"], [class*=" icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'icomoon' !important;
  speak: never;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-search:before {
  content: "\e986";
}
.icon-equalizer:before {
  content: "\e992";
}
.icon-youtube:before {
  content: "\ea9d";
}


#app {
  font-family: Avenir;
}
.img-fluid {
  max-width:100%;
  height: auto;
}
.border {
    border: 1px solid #c7c7c7;
    padding: 10px;
    box-shadow: 1px 1px 8px #c7c7c7;
}
a {
  font-weight: bold;
  color: #2c3e50;
}


</style>
