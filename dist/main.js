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

/***/ "./dist/assets/js/animation.js":
/*!*************************************!*\
  !*** ./dist/assets/js/animation.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"select\": () => (/* binding */ select)\n/* harmony export */ });\ndocument.addEventListener('DOMContentLoaded', () => {\r\n  const labelName = document.querySelector('#contact__label__name');\r\n\r\n  const inputName = document.querySelector('#name-input');\r\n\r\n  inputName.addEventListener('focus', () => {\r\n    labelName.classList.add('label__reset');\r\n  });\r\n  inputName.addEventListener('focusout', () => {\r\n    if (inputName.value <= 0) {\r\n      labelName.classList.remove('label__reset');\r\n    }\r\n  });\r\n  inputName.addEventListener('input', e => {\r\n    if (inputName.value.length > 0) {\r\n      labelName.classList.add('label__reset');\r\n    } else {\r\n      labelName.classList.remove('label__reset');\r\n    }\r\n  });\r\n\r\n  // input email\r\n  const labelEmail = document.querySelector('#contact__label__email');\r\n\r\n  const inputEmail = document.querySelector('#email-input');\r\n\r\n  inputEmail.addEventListener('focus', () => {\r\n    labelEmail.classList.add('label__reset');\r\n  });\r\n  inputEmail.addEventListener('focusout', () => {\r\n    if (inputEmail.value <= 0) {\r\n      labelEmail.classList.remove('label__reset');\r\n    }\r\n  });\r\n  inputEmail.addEventListener('input', e => {\r\n    if (inputEmail.value.length > 0) {\r\n      labelEmail.classList.add('label__reset');\r\n    } else {\r\n      labelEmail.classList.remove('label__reset');\r\n    }\r\n  });\r\n});\r\n\r\nconst select = e => {\r\n  const links = document.querySelectorAll('.nav__link');\r\n  for (const link of links) {\r\n    if (link.getAttribute('id') !== e.target.id) {\r\n      link.classList.remove('selected');\r\n    } else {\r\n      link.classList.add('selected');\r\n    }\r\n  }\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://Restaurant-page/./dist/assets/js/animation.js?");

/***/ }),

/***/ "./dist/components/card-food.js":
/*!**************************************!*\
  !*** ./dist/components/card-food.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createCard\": () => (/* binding */ createCard)\n/* harmony export */ });\nconst createCard = (cardTitle, srcCardImg) => {\r\n  const card = document.createElement('div');\r\n  const title = document.createElement('h3');\r\n  const cardImg = document.createElement('img');\r\n\r\n  // set Card\r\n  card.classList.add('card__food');\r\n\r\n  // set Card Title\r\n  title.textContent = cardTitle;\r\n\r\n  // set Card Image\r\n  cardImg.classList.add('card__food__img');\r\n  cardImg.setAttribute('src', srcCardImg);\r\n\r\n  // Mount Card\r\n  card.appendChild(title);\r\n  card.appendChild(cardImg);\r\n\r\n  return card;\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://Restaurant-page/./dist/components/card-food.js?");

/***/ }),

/***/ "./dist/components/contact-link.js":
/*!*****************************************!*\
  !*** ./dist/components/contact-link.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_js_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/js/animation */ \"./dist/assets/js/animation.js\");\n\r\n\r\nconst a = document.createElement('a');\r\na.classList.add('nav__link');\r\na.setAttribute('id', 'contact-link');\r\na.setAttribute('href', '#');\r\n\r\na.textContent = 'Contact';\r\n\r\nconst contactLink = document.createElement('li');\r\ncontactLink.classList.add('li');\r\ncontactLink.appendChild(a);\r\n\r\n// animation\r\ncontactLink.addEventListener('click', _assets_js_animation__WEBPACK_IMPORTED_MODULE_0__.select);\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactLink);\r\n\n\n//# sourceURL=webpack://Restaurant-page/./dist/components/contact-link.js?");

/***/ }),

/***/ "./dist/components/footer.js":
/*!***********************************!*\
  !*** ./dist/components/footer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst footer = document.createElement('footer');\r\nfooter.classList.add('footer');\r\n//\r\nconst footerContainer = document.createElement('div');\r\n\r\nconst gitHubLink = document.createElement('a');\r\ngitHubLink.setAttribute('href', '#');\r\ngitHubLink.textContent = 'Darlisson L. Silva';\r\nconst gitHubIcon = document.createElement('i');\r\ngitHubIcon.classList.add('fab', 'fa-github');\r\ngitHubLink.appendChild(gitHubIcon);\r\n\r\nconst autorName = document.createElement('p');\r\nautorName.appendChild(gitHubLink);\r\n\r\nconst copyright = document.createElement('p');\r\ncopyright.textContent = `© Copyright 2021`;\r\n\r\nfooterContainer.appendChild(copyright);\r\nfooterContainer.appendChild(autorName);\r\nfooter.appendChild(footerContainer);\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footer);\r\n\n\n//# sourceURL=webpack://Restaurant-page/./dist/components/footer.js?");

/***/ }),

/***/ "./dist/components/header.js":
/*!***********************************!*\
  !*** ./dist/components/header.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logo */ \"./dist/components/logo.js\");\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav */ \"./dist/components/nav.js\");\n\r\n\r\n\r\nconst header = document.createElement('header');\r\nheader.classList.add('header');\r\n\r\nheader.appendChild(_logo__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\nheader.appendChild(_nav__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);\r\n\n\n//# sourceURL=webpack://Restaurant-page/./dist/components/header.js?");

/***/ }),

/***/ "./dist/components/home-link.js":
/*!**************************************!*\
  !*** ./dist/components/home-link.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_js_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/js/animation */ \"./dist/assets/js/animation.js\");\n\r\n\r\nconst a = document.createElement('a');\r\na.classList.add('nav__link');\r\na.setAttribute('id', 'home-link');\r\na.setAttribute('href', '#');\r\n\r\na.textContent = 'Home';\r\n\r\nconst homeLink = document.createElement('li');\r\nhomeLink.classList.add('li');\r\nhomeLink.appendChild(a);\r\n\r\nhomeLink.addEventListener('click', _assets_js_animation__WEBPACK_IMPORTED_MODULE_0__.select);\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeLink);\r\n\n\n//# sourceURL=webpack://Restaurant-page/./dist/components/home-link.js?");

/***/ }),

/***/ "./dist/components/input.js":
/*!**********************************!*\
  !*** ./dist/components/input.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createInput\": () => (/* binding */ createInput)\n/* harmony export */ });\nconst createInput = (type, inputId, classList, labelName) => {\r\n  const inputBox = document.createElement('div');\r\n  const input = document.createElement('input');\r\n  const label = document.createElement('label');\r\n  const icon = document.createElement('i');\r\n  const span = document.createElement('span');\r\n\r\n  //set input\r\n  input.setAttribute('type', type);\r\n  input.setAttribute('id', inputId);\r\n\r\n  //set Icon\r\n  for (const className of classList) {\r\n    icon.classList.add(className);\r\n  }\r\n\r\n  //set label\r\n  label.setAttribute('for', inputId);\r\n  label.setAttribute('id', `contact__label__${type}`);\r\n  span.textContent = labelName;\r\n\r\n  // Mount\r\n  label.appendChild(icon);\r\n  label.appendChild(span);\r\n  inputBox.appendChild(label);\r\n  inputBox.appendChild(input);\r\n\r\n  // set class input box\r\n  inputBox.classList.add('input__box');\r\n\r\n  return inputBox;\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://Restaurant-page/./dist/components/input.js?");

/***/ }),

/***/ "./dist/components/logo.js":
/*!*********************************!*\
  !*** ./dist/components/logo.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst logoDiv = document.createElement('div');\r\nlogoDiv.classList.add('logo-box');\r\n\r\nconst imgLogo = document.createElement('img');\r\n\r\nconst imgUrl = './assets/img/white-logo.png';\r\n\r\nimgLogo.setAttribute('src', imgUrl);\r\nimgLogo.setAttribute('alt', 'logo la saveur');\r\nimgLogo.classList.add('logo');\r\n\r\nlogoDiv.appendChild(imgLogo);\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (logoDiv);\r\n\n\n//# sourceURL=webpack://Restaurant-page/./dist/components/logo.js?");

/***/ }),

/***/ "./dist/components/menu-link.js":
/*!**************************************!*\
  !*** ./dist/components/menu-link.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_js_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/js/animation */ \"./dist/assets/js/animation.js\");\n\r\n\r\nconst a = document.createElement('a');\r\na.classList.add('nav__link');\r\na.setAttribute('id', 'menu-link');\r\na.setAttribute('href', '#');\r\n\r\na.textContent = 'Menu';\r\n\r\nconst menuLink = document.createElement('li');\r\nmenuLink.classList.add('li');\r\nmenuLink.appendChild(a);\r\n\r\nmenuLink.addEventListener('click', _assets_js_animation__WEBPACK_IMPORTED_MODULE_0__.select);\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuLink);\r\n\n\n//# sourceURL=webpack://Restaurant-page/./dist/components/menu-link.js?");

/***/ }),

/***/ "./dist/components/nav.js":
/*!********************************!*\
  !*** ./dist/components/nav.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-link */ \"./dist/components/home-link.js\");\n/* harmony import */ var _menu_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-link */ \"./dist/components/menu-link.js\");\n/* harmony import */ var _contact_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-link */ \"./dist/components/contact-link.js\");\n\r\n\r\n\r\n\r\nconst nav = document.createElement('nav');\r\nnav.classList.add('nav');\r\nconst ul = document.createElement('ul');\r\nul.classList.add('ul');\r\n\r\nul.appendChild(_home_link__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\nul.appendChild(_menu_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\nul.appendChild(_contact_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\n\r\nnav.appendChild(ul);\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nav);\r\n\n\n//# sourceURL=webpack://Restaurant-page/./dist/components/nav.js?");

/***/ }),

/***/ "./dist/pages/contact-page.js":
/*!************************************!*\
  !*** ./dist/pages/contact-page.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/input */ \"./dist/components/input.js\");\n\r\n\r\nconst main = document.querySelector('#main-content');\r\n\r\nconst contactPage = document.createElement('div');\r\ncontactPage.setAttribute('id', 'contact-page');\r\nconst title = document.createElement('h1');\r\ntitle.textContent = 'Contact us';\r\ntitle.classList.add('page__title');\r\n\r\n// form title\r\nconst formTitle = document.createElement('h3');\r\nformTitle.textContent = 'Say hello!';\r\n\r\n// form\r\nconst contactForm = document.createElement('form');\r\ncontactForm.classList.add('contact__form__box');\r\nconst nameInput = (0,_components_input__WEBPACK_IMPORTED_MODULE_0__.createInput)(\r\n  'name',\r\n  'name-input',\r\n  ['far', 'fa-envelope'],\r\n  'Name'\r\n);\r\n\r\nconst emailInput = (0,_components_input__WEBPACK_IMPORTED_MODULE_0__.createInput)(\r\n  'email',\r\n  'email-input',\r\n  ['far', 'fa-user'],\r\n  'Email'\r\n);\r\n\r\nconst buttonForm = document.createElement('button');\r\nbuttonForm.textContent = 'Yes!';\r\nbuttonForm.classList.add('btn', 'btn__form');\r\n\r\n// Contact Card\r\nconst contactCard = document.createElement('div');\r\ncontactCard.classList.add('contact__card');\r\n\r\nconst contactCardList = document.createElement('ul');\r\nconst cardTelIcon = document.createElement('i');\r\ncardTelIcon.classList.add('fas', 'fa-phone-alt');\r\nconst cardTelInfo = document.createElement('li');\r\ncardTelInfo.appendChild(cardTelIcon);\r\ncardTelInfo.append('Tel: 527-283-687');\r\n\r\nconst cardEmailIcon = document.createElement('i');\r\ncardEmailIcon.classList.add('far', 'fa-envelope');\r\nconst cardEmailInfo = document.createElement('li');\r\ncardEmailInfo.appendChild(cardEmailIcon);\r\ncardEmailInfo.append('fakeemail1@email.com');\r\n\r\n// Mount Contact List\r\ncontactCardList.appendChild(cardTelInfo);\r\ncontactCardList.appendChild(cardEmailInfo);\r\n\r\n// Mount Contact Card\r\ncontactCard.appendChild(contactCardList);\r\n\r\n// Mount Form\r\ncontactForm.appendChild(formTitle);\r\ncontactForm.appendChild(nameInput);\r\ncontactForm.appendChild(emailInput);\r\ncontactForm.appendChild(buttonForm);\r\n\r\n// Mount Page\r\ncontactPage.appendChild(title);\r\ncontactPage.appendChild(contactForm);\r\ncontactPage.appendChild(contactCard);\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactPage);\r\n\n\n//# sourceURL=webpack://Restaurant-page/./dist/pages/contact-page.js?");

/***/ }),

/***/ "./dist/pages/home-page.js":
/*!*********************************!*\
  !*** ./dist/pages/home-page.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst main = document.querySelector('#main-content');\r\n\r\nconst homePage = document.createElement('div');\r\nhomePage.setAttribute('id', 'home-page');\r\n\r\nconst h1 = document.createElement('h1');\r\nh1.textContent = 'For those looking for the taste of tranquility.';\r\nconst h3 = document.createElement('h3');\r\nh3.textContent = 'We would love to have You with us.';\r\n\r\nconst baseButton = document.createElement('a');\r\nbaseButton.textContent = 'Reserve';\r\nbaseButton.classList.add('btn');\r\n\r\n// reserve section\r\nconst reserveSection = document.createElement('div');\r\nreserveSection.classList.add('reserve-section');\r\n\r\nreserveSection.appendChild(h1);\r\nreserveSection.appendChild(h3);\r\nreserveSection.appendChild(baseButton);\r\n\r\n// hours section\r\nconst hoursSection = document.createElement('div');\r\nhoursSection.classList.add('hours-section');\r\n\r\nconst hourssSectionTitle = document.createElement('h2');\r\n\r\nconst titleIcon = document.createElement('i');\r\ntitleIcon.classList.add('far', 'fa-clock');\r\nhourssSectionTitle.textContent = 'Hours';\r\nconst hoursSectionContainer = document.createElement('div');\r\nhoursSectionContainer.classList.add('hours-title-box');\r\nhoursSectionContainer.appendChild(titleIcon);\r\nhoursSectionContainer.appendChild(hourssSectionTitle);\r\n\r\n// hours list\r\nconst hoursList = document.createElement('ul');\r\nconst hoursListItem = content => {\r\n  const li = document.createElement('li');\r\n  li.textContent = content;\r\n  return li;\r\n};\r\nconst sunday = hoursListItem('Sunday: 09:00-22:00');\r\nconst tuesday = hoursListItem('Tuesday: 09:00-22:00');\r\nconst wednesday = hoursListItem('Wednesday: 09:00-22:00');\r\nconst thursday = hoursListItem('Thursday: 09:00-22:00');\r\nconst friday = hoursListItem('Friday: 09:00-22:00');\r\nconst saturday = hoursListItem('Saturday: 09:00-22:00');\r\n\r\n// mount hours list\r\n\r\nhoursList.appendChild(sunday);\r\nhoursList.appendChild(tuesday);\r\nhoursList.appendChild(wednesday);\r\nhoursList.appendChild(thursday);\r\nhoursList.appendChild(friday);\r\nhoursList.appendChild(saturday);\r\n\r\n// mount hours section\r\nhoursSection.appendChild(hoursSectionContainer);\r\nhoursSection.appendChild(hoursList);\r\n\r\n// mount Home Page\r\nhomePage.appendChild(reserveSection);\r\nhomePage.appendChild(hoursSection);\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage);\r\n\n\n//# sourceURL=webpack://Restaurant-page/./dist/pages/home-page.js?");

/***/ }),

/***/ "./dist/pages/menu-page.js":
/*!*********************************!*\
  !*** ./dist/pages/menu-page.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_card_food__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/card-food */ \"./dist/components/card-food.js\");\n\r\n\r\nconst main = document.querySelector('#main-content');\r\n\r\nconst menuPage = document.createElement('div');\r\nmenuPage.setAttribute('id', 'menu-page');\r\n\r\nconst pageTitle = document.createElement('h1');\r\npageTitle.classList.add('page__title');\r\npageTitle.textContent = 'Menu';\r\n\r\n// Card Food\r\nconst food1 = (0,_components_card_food__WEBPACK_IMPORTED_MODULE_0__.createCard)(\r\n  'Beaf steak with Sauce',\r\n  './assets/img/food/beaf-steak-with-sauce.jpg'\r\n);\r\nconst food2 = (0,_components_card_food__WEBPACK_IMPORTED_MODULE_0__.createCard)(\r\n  'Pancake with Sliced Strawberry',\r\n  './assets/img/food/pancake-with-sliced strawberry.jpg'\r\n);\r\nconst food3 = (0,_components_card_food__WEBPACK_IMPORTED_MODULE_0__.createCard)(\r\n  'Pasta with Tomato and Basil',\r\n  './assets/img/food/pasta-with-tomato-and-basil.jpg'\r\n);\r\nconst food4 = (0,_components_card_food__WEBPACK_IMPORTED_MODULE_0__.createCard)('Salmon Dish', './assets/img/food/salmon-dish.jpg');\r\nconst food5 = (0,_components_card_food__WEBPACK_IMPORTED_MODULE_0__.createCard)(\r\n  'Tacos with Lime',\r\n  './assets/img/food/tacos-with-lime.jpg'\r\n);\r\n\r\nconst foodList = document.createElement('div');\r\nfoodList.classList.add('food__list');\r\nfoodList.appendChild(food1);\r\nfoodList.appendChild(food2);\r\nfoodList.appendChild(food3);\r\nfoodList.appendChild(food4);\r\nfoodList.appendChild(food5);\r\n\r\nmenuPage.appendChild(pageTitle);\r\nmenuPage.appendChild(foodList);\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPage);\r\n\n\n//# sourceURL=webpack://Restaurant-page/./dist/pages/menu-page.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dist_components_header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dist/components/header.js */ \"./dist/components/header.js\");\n/* harmony import */ var _dist_components_footer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dist/components/footer.js */ \"./dist/components/footer.js\");\n/* harmony import */ var _dist_pages_home_page_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dist/pages/home-page.js */ \"./dist/pages/home-page.js\");\n/* harmony import */ var _dist_pages_menu_page_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dist/pages/menu-page.js */ \"./dist/pages/menu-page.js\");\n/* harmony import */ var _dist_pages_contact_page_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dist/pages/contact-page.js */ \"./dist/pages/contact-page.js\");\n// Components\r\n\r\n\r\n\r\n// Pages\r\n\r\n\r\n\r\n\r\n// Main Component\r\nconst content = document.querySelector('#content');\r\n\r\n// Page Content\r\nconst mainContent = document.createElement('main');\r\nmainContent.setAttribute('id', 'main-content');\r\nmainContent.classList.add('main');\r\nmainContent.appendChild(_dist_pages_home_page_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\n\r\n// Restaurant Page\r\ncontent.appendChild(_dist_components_header_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\ncontent.appendChild(mainContent);\r\ncontent.appendChild(_dist_components_footer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\n\r\n// Router\r\nconst getRouter = e => {\r\n  const child = mainContent.querySelector('div');\r\n  switch (e.target.id) {\r\n    case 'home-link':\r\n      mainContent.removeChild(child);\r\n      mainContent.appendChild(_dist_pages_home_page_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\n      break;\r\n    case 'menu-link':\r\n      mainContent.removeChild(child);\r\n      mainContent.appendChild(_dist_pages_menu_page_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\r\n      break;\r\n    case 'contact-link':\r\n      mainContent.removeChild(child);\r\n      mainContent.appendChild(_dist_pages_contact_page_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\r\n      break;\r\n    default:\r\n      break;\r\n  }\r\n};\r\n\r\n// Click Listeners\r\nconst links = document.querySelectorAll('.nav__link');\r\n\r\nlinks.forEach(link => {\r\n  link.addEventListener('click', getRouter);\r\n});\r\n\n\n//# sourceURL=webpack://Restaurant-page/./src/index.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;