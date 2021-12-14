/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./background.png */ \"./src/background.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! darknight.jpg */ \"./src/darknight.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! restaurant.png */ \"./src/restaurant.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"#content {\\n    display: flex;\\n    flex-flow: column;\\n    height: 100%;\\n    width: 100%;\\n    /* height: 100vh;\\n    width: 100vw; */\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n    background-repeat: repeat;\\n    justify-content: center;\\n    align-items: center;\\n    gap: 10px;\\n}\\n\\n.nav {\\n    width: 100%;\\n    height: 40px;\\n    background: rgb(22,32,135);\\n    background: linear-gradient(0deg, rgba(22,32,135,1) 5%, rgba(45,138,253,1) 100%);\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n    display: flex;\\n    justify-content: center;\\n    gap: 10px;\\n}\\n\\n.tab {\\n    width: 15%;\\n    height: 40px;\\n    background: rgb(22,32,135);\\n    background: linear-gradient(180deg, rgba(22,32,135,1) 5%, rgba(45,138,253,1) 100%);\\n    color: white;\\n    text-align: center;\\n    font-size: 2rem;\\n}\\n\\n.tab:hover {\\n    background: rgb(22,32,135);\\n    background: linear-gradient(0deg, rgba(22,32,135,1) 5%, rgba(45,138,253,1) 100%);\\n    border: 3px solid white;\\n}\\n\\n/* Home Page */\\n\\n.home {\\n    display: flex;\\n    height: 100%;\\n    width: 100%;\\n    flex-flow: column;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\n.homeTitle {\\n    color: white;\\n    font-size: 6rem;\\n    height: 100px;\\n    width: 100%;\\n    text-align: center;\\n}\\n\\n.homeDescription {\\n    color: white;\\n    font-size: 2rem;\\n    height: 200px;\\n    width: 80%;\\n    text-align: center;\\n    align-self: center;\\n    background-color: purple;\\n    border-radius: 50px;\\n    padding: 20px 20px 20px 20px;\\n}\\n\\n.homeImg {\\n    height: 500px;\\n    width: 800px;\\n}\\n\\n.homeImg {\\n    display: block;\\n    margin: auto;\\n    max-width: 100%;\\n    max-height: 100%;\\n    width: 800px;\\n    height: 500px;\\n    object-fit: scale-down;\\n}\\n\\n/* Menu Page */\\n\\n.menuPage{\\n    display: flex;\\n    gap: 10px;\\n    flex-flow: column;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\n.menuTitle {\\n    font-size: 5rem;\\n    background-color: white;\\n    color: white;\\n    height: 100px; \\n    width: 600px;\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n    text-align: center;\\n    border: 2px solid white;\\n    border-radius: 30px;\\n} \\n\\n.title {\\n    height: 200px;\\n    width: 800px;\\n    font-size: 3rem;\\n    background-color: blue;\\n}\\n\\n.imgDiv{\\n    background-color: yellow;\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n    border-radius: 30px;\\n    max-height: 100%;\\n    max-width: 100%;\\n}\\n\\n.itemName {\\n    font-size: 3.5rem;\\n    max-height: 30%;\\n    width: 100%;\\n    color:black;\\n    text-align: center;\\n    justify-content: center;\\n    line-height: 40px;\\n}\\n\\n\\n.menu {\\n    display: flex;\\n    flex-flow: row;\\n    gap: 3px;\\n    height: 300px;\\n    width: 800px;\\n    background-color: black;\\n    border: 5px solid blue;\\n    border-radius: 40px;\\n    justify-content: center;\\n    overflow: hidden;\\n    text-align: center;\\n}\\n\\n.menuTextWrapper {\\n    display: flex;\\n    gap: 15px;\\n    flex-flow: column;\\n    background-color: grey;\\n    justify-content: center;\\n    text-align: center;\\n    height: 100%;\\n    width: 70%;\\n}\\n\\n.description {\\n    align-self: center;\\n    height: 60%;\\n    width: 95%;\\n    font-size: 1.3rem;\\n    color:white;\\n}\\n\\n.price {\\n    align-self: center;\\n    text-align: center;\\n    font-size: 8rem;\\n    height: 150px;\\n    width: 150px;\\n    border-radius: 50px;\\n    border: 2px solid white;\\n    color: white;\\n}\\n\\n/* Contact Page */\\n\\n.contactPage{\\n    display: flex;\\n    flex-flow: column;\\n    justify-content: center;\\n    align-items: center;\\n    gap: 10px;\\n}\\n\\n.contactTitle{\\n    font-size: 5rem;\\n    color: white;\\n    height: 100px;\\n    width: 600px;\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n    text-align: center;\\n    border: 2px solid white;\\n    border-radius: 30px;\\n}\\n\\n.contactWrapper {\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n    display: flex;\\n    flex-flow: row;\\n    justify-content: center;\\n    align-items: center;\\n    align-self: center;\\n    height: 250px;\\n    width: 800px;\\n    border: 2px solid white;\\n    gap: 10px;\\n    border-radius: 30px;\\n}\\n\\n.contactName {\\n    font-size: 4rem;\\n    color: white;\\n}\\n\\n.contactDescription {\\n    font-size: 2.5rem;\\n    color: white;\\n    width: 100%;\\n}\\n\\n.contactImg{\\n   height: 100%;\\n   width: 100%;\\n}\\n\\n.contactImgDiv{\\n    border-radius: 30px;\\n    max-height: 90%;\\n    max-width: 100%;\\n    height: 250px;\\n    width: 250px;\\n    border-radius: 30px;\\n    border: 1px solid white;\\n    overflow: hidden;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _box_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./box.png */ \"./src/box.png\");\n/* harmony import */ var _gorlorb_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gorlorb.jpg */ \"./src/gorlorb.jpg\");\n/* harmony import */ var _wolf_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wolf.jpg */ \"./src/wolf.jpg\");\n/* harmony import */ var _fluffles_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fluffles.png */ \"./src/fluffles.png\");\n\n\n\n\n\nconst contactPage = document.createElement('div');\ncontactPage.classList.add('contactPage');\n\nconst contactTitle = document.createElement('div');\ncontactTitle.textContent = 'Contact Us';\ncontactTitle.classList.add('contactTitle');\n\ncontactPage.appendChild(contactTitle);\n\nlet peopleObjectArray = [];\n\nconsole.log(`we're on the menu`);\nclass Contact {\n    constructor(name, position, phoneNumber, email, img){\n        this.name = name;\n        this.position = position;\n        this.phoneNumber = phoneNumber;\n        this.email = email;\n        this.img = img;\n    }       \n}\n\nfunction createContactDiv(contact){\n    const contactWrapper = document.createElement('div');\n    const textWrapper = document.createElement('div');\n    const contactImgWrapper = document.createElement('div');\n\n    const contactName = document.createElement('div');\n    const contactDescription = document.createElement('div');\n    const contactImg = document.createElement('img');\n\n    contactWrapper.classList.add('contactWrapper');\n    contactName.classList.add('contactName');\n    contactDescription.classList.add('contactDescription');\n    contactImg.classList.add('contactImg');\n    contactImgWrapper.classList.add('contactImgDiv');\n\n    contactWrapper.appendChild(textWrapper);\n    textWrapper.appendChild(contactName);\n    textWrapper.appendChild(contactDescription);\n    contactWrapper.appendChild(contactImgWrapper);\n    contactImgWrapper.appendChild(contactImg);\n \n    contactName.textContent = contact.name;\n    contactDescription.innerText = \n    `${contact.position}\n    ${contact.phoneNumber}\n    ${contact.email}`;\n    contactImg.src = contact.img;\n\n    return contactWrapper;\n}\n\nlet box = new Contact('Adam Box', 'Manager', '235-255-3333', 'box@fakeemail.com', _box_png__WEBPACK_IMPORTED_MODULE_0__);\nlet gorlorb = new Contact('Gore Lorb', 'Customer Service', '420-666-6969', 'gorlorb@fakeemail.com', _gorlorb_jpg__WEBPACK_IMPORTED_MODULE_1__);\nlet wulfes = new Contact('Wulfes Hollow', 'Owner', '555-555-5555', 'wulfes@fakeemail.com', _wolf_jpg__WEBPACK_IMPORTED_MODULE_2__);\nlet fluffles = new Contact('Fluffles', 'The Dog', '123-456-7890', 'fluffles@fakeemail.com', _fluffles_png__WEBPACK_IMPORTED_MODULE_3__);\n\n\npeopleObjectArray.push(box);\npeopleObjectArray.push(gorlorb);\npeopleObjectArray.push(wulfes);\npeopleObjectArray.push(fluffles);\n\nfunction addContactsToPage(peopleObjectArray){\n    for (let i=0; i < peopleObjectArray.length; i++){\n        let newContact = createContactDiv(peopleObjectArray[i]);\n        contactPage.appendChild(newContact);\n    }\n    return contactPage;\n}\n\naddContactsToPage(peopleObjectArray);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactPage);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _titlePage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./titlePage.js */ \"./src/titlePage.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\n\nconst body = document.getElementById('content');\n\nfunction createNavBar(){\n    const navBar = document.createElement('div');\n    const menuTab = document.createElement('div');\n    const homeTab = document.createElement('div');\n    const contactTab = document.createElement('div');\n\n    navBar.classList.add('nav');\n    menuTab.classList.add('tab');\n    homeTab.classList.add('tab');\n    contactTab.classList.add('tab');\n\n    menuTab.textContent = 'Menu';\n    homeTab.textContent = 'Home';\n    contactTab.textContent = 'Contact';\n\n    navBar.appendChild(homeTab);\n    navBar.appendChild(menuTab);\n    navBar.appendChild(contactTab);\n\n    menuTab.addEventListener('click', () => {switchToPage(_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])});\n    homeTab.addEventListener('click', () => {switchToPage(_titlePage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])});\n    contactTab.addEventListener('click', () => {switchToPage(_contact_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])});\n\n    return navBar;\n}\n\nfunction removeCurrentPage(){\n    let currentPage = body.lastChild;\n    body.removeChild(currentPage);\n}\n\nfunction switchToPage(tab){\n    removeCurrentPage();\n    body.appendChild(tab);\n}\n\nbody.appendChild(createNavBar());\nbody.appendChild(_titlePage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _AdeptusTemptation_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdeptusTemptation.png */ \"./src/AdeptusTemptation.png\");\n/* harmony import */ var _BlackPerchStew_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlackPerchStew.png */ \"./src/BlackPerchStew.png\");\n/* harmony import */ var _ColdCutPlatter_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ColdCutPlatter.png */ \"./src/ColdCutPlatter.png\");\n/* harmony import */ var _CrystalShrimp_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CrystalShrimp.png */ \"./src/CrystalShrimp.png\");\n/* harmony import */ var _FivePickledTreasures_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FivePickledTreasures.png */ \"./src/FivePickledTreasures.png\");\n/* harmony import */ var _FragrantMashedPotatoes_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FragrantMashedPotatoes.png */ \"./src/FragrantMashedPotatoes.png\");\n/* harmony import */ var _ComeGetIt_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ComeGetIt.png */ \"./src/ComeGetIt.png\");\n\n\n\n\n\n\n\n\nconst menu = document.createElement('div');\nmenu.classList.add('menuPage');\n\nconst menuTitle = document.createElement('div');\nmenuTitle.textContent = 'Menu';\nmenuTitle.classList.add('menuTitle');\n\nmenu.appendChild(menuTitle);\n\nlet menuObjectArray = [];\n\nconsole.log(`we're on the menu`);\nclass MenuItem {\n    constructor(name, price, img, description){\n        this.name = name;\n        this.price = price;\n        this.img = img;\n        this.description = description;\n    }    \n   \n}\n\nfunction createMenuDiv(menuItem){\n    const menuWrapper = document.createElement('div');\n    const textWrapper = document.createElement('div');\n\n    const itemName = document.createElement('div');\n    const itemDescription = document.createElement('div');\n    const itemImg = document.createElement('img');\n    const itemPrice = document.createElement('div');\n\n    itemPrice.classList.add('price');\n    itemName.classList.add('itemName');\n    itemDescription.classList.add('description');\n    menuWrapper.classList.add('menu');\n    textWrapper.classList.add('menuTextWrapper');\n\n    menuWrapper.appendChild(textWrapper);\n    textWrapper.appendChild(itemName);\n    textWrapper.appendChild(itemDescription);\n\n    menuWrapper.appendChild(itemImg);\n    menuWrapper.appendChild(itemPrice);\n\n    itemName.textContent = menuItem.name;\n    itemPrice.textContent = menuItem.price;\n    itemDescription.textContent = menuItem.description;\n    itemImg.src = menuItem.img;\n\n    return menuWrapper;\n}\n\nlet ATDescription = `A complex, famous type of Liyue cuisine. This dish is a rare and exquisite mix of both land and sea, combining countless delicious delicacies in one flavor-filled pot. Each mouthful is a moment to remember — it's even irresistible enough to entice the adepti down from their celestial abode.`;\nlet BPSDescription = `A poached fish dish. The fish fillets are so tender and juicy that they almost seem to come alive in your mouth. The sense of loss is so unbearable when you swallowed a piece down that you just had to treat yourself to another piece.`;\nlet CCPDescription = `A plate of cold cut meat. An equal balance of bacon, ham and sausage keeps everyone happy.`;\nlet CSDescription = `One of Liyue's traditional snacks. The stuffing is taken from whole fresh shrimp, and the glistening quality of the flour can be guessed at from the translucence of the outer skin. Has a springy, tasty chew.`;\nlet FPTDescription = `Pickled vegetables. A round of fermentation makes food richer and also allows it to keep for longer. There were originally only four \"treasures,\" but for auspiciousness' sake, the four vegetables were mixed and plated up with one additional \"treasure\" added in, hence the name \"Five Pickled Treasures.\"`;\nlet FMPDescription = `Seasoned mashed potatoes. The potatoes were thoroughly mashed before a sauce was drizzled over them. The mouthfeel is soft and smooth and it has a rich, multi-layered flavor profile. A satisfying choice for a hungry stomach, whether as a side or as a main dish.`;\nlet CGIDescription = `Traditional cuisine made to celebrate Lantern Rite. There is no great refinement in the making of this food, and it appears in Liyue often during festival season. Whenever this dish is served up, the person at the head of the table will invite everyone to dig in, saying \"Come on, eat, eat,\" hence the name.`;\n\nlet AT = new MenuItem('Adeptus Temptation', '$2', _AdeptusTemptation_png__WEBPACK_IMPORTED_MODULE_0__, ATDescription);\nlet BPS = new MenuItem('Black Perch Stew', '$3', _BlackPerchStew_png__WEBPACK_IMPORTED_MODULE_1__, BPSDescription);\nlet CCP = new MenuItem('Cold Cut Platter', '$4', _ColdCutPlatter_png__WEBPACK_IMPORTED_MODULE_2__, CCPDescription);\nlet CS = new MenuItem('Crystal Shrimp', '$5', _CrystalShrimp_png__WEBPACK_IMPORTED_MODULE_3__, CSDescription);\nlet FPT = new MenuItem('Five Pickled Treasures', '$5', _FivePickledTreasures_png__WEBPACK_IMPORTED_MODULE_4__, FPTDescription);\nlet FMP = new MenuItem('Fragrant Mashed Potatoes', '$5', _FragrantMashedPotatoes_png__WEBPACK_IMPORTED_MODULE_5__, FMPDescription);\nlet CGI = new MenuItem('Come and Get It', '$5', _ComeGetIt_png__WEBPACK_IMPORTED_MODULE_6__, CGIDescription);\n// let  = new MenuItem('', '$5', Pic, Description);\n\nmenuObjectArray = [AT, BPS, CCP, CS, FPT, FMP, CGI];\n\nfunction addToMenu(menuObjectArray){\n    for (let i = 0; i < menuObjectArray.length; i++){\n        let newItem = createMenuDiv(menuObjectArray[i]);\n        menu.appendChild(newItem);\n    }\n}\n\naddToMenu(menuObjectArray);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/titlePage.js":
/*!**************************!*\
  !*** ./src/titlePage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _restaurant_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant.png */ \"./src/restaurant.png\");\n\n\nfunction createHomePage() {\n\n    const pageWrapper = document.createElement('div');\n    pageWrapper.classList.add('home');\n    const title = document.createElement('div');\n    title.classList.add('homeTitle');\n    const imgDiv = document.createElement('div');\n    imgDiv.classList.add('homeImgDiv');\n    \n    const img = document.createElement('img');\n    img.classList.add('homeImg');\n    img.src = _restaurant_png__WEBPACK_IMPORTED_MODULE_0__;\n\n    const description = document.createElement('div');\n    description.classList.add('homeDescription');\n\n    pageWrapper.appendChild(title);\n    pageWrapper.appendChild(imgDiv);\n    pageWrapper.appendChild(description);\n    imgDiv.appendChild(img);\n\n    title.textContent = 'Fantasy Restaurant';\n    description.textContent = 'Hello this is stuff about this restaurant. Hello this is stuff about this restaurant. Hello this is stuff about this restaurant. Hello this is stuff about this restaurant. Hello this is stuff about this restaurant.';\n \n    return pageWrapper;\n}\n\nconst home = createHomePage();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\n\n//# sourceURL=webpack://restaurant-page/./src/titlePage.js?");

/***/ }),

/***/ "./src/AdeptusTemptation.png":
/*!***********************************!*\
  !*** ./src/AdeptusTemptation.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3f3a6ad73cef1ac4fcec.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/AdeptusTemptation.png?");

/***/ }),

/***/ "./src/BlackPerchStew.png":
/*!********************************!*\
  !*** ./src/BlackPerchStew.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"94e3f9ea8edfcf9d8951.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/BlackPerchStew.png?");

/***/ }),

/***/ "./src/ColdCutPlatter.png":
/*!********************************!*\
  !*** ./src/ColdCutPlatter.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1cba4364b12b7edad998.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/ColdCutPlatter.png?");

/***/ }),

/***/ "./src/ComeGetIt.png":
/*!***************************!*\
  !*** ./src/ComeGetIt.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8ccc86cc4ea8a7c1aa88.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/ComeGetIt.png?");

/***/ }),

/***/ "./src/CrystalShrimp.png":
/*!*******************************!*\
  !*** ./src/CrystalShrimp.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e19dac41b3e2b2c3d969.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/CrystalShrimp.png?");

/***/ }),

/***/ "./src/FivePickledTreasures.png":
/*!**************************************!*\
  !*** ./src/FivePickledTreasures.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"84f9b9fba9e5d4a25a83.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/FivePickledTreasures.png?");

/***/ }),

/***/ "./src/FragrantMashedPotatoes.png":
/*!****************************************!*\
  !*** ./src/FragrantMashedPotatoes.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b786452580e5ca2b395a.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/FragrantMashedPotatoes.png?");

/***/ }),

/***/ "./src/background.png":
/*!****************************!*\
  !*** ./src/background.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0c879d4c39ec2ed853b8.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/background.png?");

/***/ }),

/***/ "./src/box.png":
/*!*********************!*\
  !*** ./src/box.png ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0e812f2022037e425789.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/box.png?");

/***/ }),

/***/ "./src/darknight.jpg":
/*!***************************!*\
  !*** ./src/darknight.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f3f218cd34fc08e087fa.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/darknight.jpg?");

/***/ }),

/***/ "./src/fluffles.png":
/*!**************************!*\
  !*** ./src/fluffles.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"70f08242105cd581150d.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/fluffles.png?");

/***/ }),

/***/ "./src/gorlorb.jpg":
/*!*************************!*\
  !*** ./src/gorlorb.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ca0a4fc4127ad20aceab.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/gorlorb.jpg?");

/***/ }),

/***/ "./src/restaurant.png":
/*!****************************!*\
  !*** ./src/restaurant.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b2ab57341f3e138f18c1.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/restaurant.png?");

/***/ }),

/***/ "./src/wolf.jpg":
/*!**********************!*\
  !*** ./src/wolf.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ea8ba93d1a33d6e3a877.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/wolf.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;