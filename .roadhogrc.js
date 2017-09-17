import proxy from './proxy.config.js';

export default {
  "entry": "src/index.js",
  "disableCSSModules": false,
  "publicPath": "/",
  "theme": {
    "@primary-color": "#1DA57A",
    "@link-color": "#1DA57A",
    "@border-radius-base": "2px",
    "@font-size-base": "16px",
    "@line-height-base": "1.2"
  },
  "autoprefixer": null,
  "proxy": {
    ...proxy
  },
  "extraBabelPlugins": [
    "transform-runtime",
    ["import", {"libraryName": "antd", "style": true}]
  ],
  "env": {
    "development": {
      "extraBabelPlugins": [
        "dva-hmr"
      ]
    }
  },
  "xdllPlugin": {
    "exclude": [
      "babel-runtime"
    ],
    "include": [
      "dva/router",
      "dva/saga",
      "dva/fetch"
    ]
  }
}
