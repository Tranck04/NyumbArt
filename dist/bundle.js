/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/auth.js":
/*!***************************!*\
  !*** ./assets/js/auth.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var https_www_gstatic_com_firebasejs_9_18_0_firebase_app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js */ \"https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js\");\n/* harmony import */ var https_www_gstatic_com_firebasejs_9_18_0_firebase_auth_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js */ \"https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js\");\n/* harmony import */ var https_www_gstatic_com_firebasejs_9_18_0_firebase_database_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js */ \"https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([https_www_gstatic_com_firebasejs_9_18_0_firebase_app_js__WEBPACK_IMPORTED_MODULE_0__, https_www_gstatic_com_firebasejs_9_18_0_firebase_auth_js__WEBPACK_IMPORTED_MODULE_1__, https_www_gstatic_com_firebasejs_9_18_0_firebase_database_js__WEBPACK_IMPORTED_MODULE_2__]);\n([https_www_gstatic_com_firebasejs_9_18_0_firebase_app_js__WEBPACK_IMPORTED_MODULE_0__, https_www_gstatic_com_firebasejs_9_18_0_firebase_auth_js__WEBPACK_IMPORTED_MODULE_1__, https_www_gstatic_com_firebasejs_9_18_0_firebase_database_js__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n  // Import the functions you need from the SDKs you need\r\n  \r\n  \r\n  \r\n  // TODO: Add SDKs for Firebase products that you want to use\r\n  // https://firebase.google.com/docs/web/setup#available-libraries\r\n\r\n  // Your web app's Firebase configuration\r\n  // For Firebase JS SDK v7.20.0 and later, measurementId is optional\r\n  const firebaseConfig = {\r\n    apiKey: \"AIzaSyDIokShQHeY-GkcFLSdhikHGNQGZddUbJQ\",\r\n    authDomain: \"sincere-sun-365819.firebaseapp.com\",\r\n    databaseURL: \"https://sincere-sun-365819-default-rtdb.europe-west1.firebasedatabase.app\",\r\n    projectId: \"sincere-sun-365819\",\r\n    storageBucket: \"sincere-sun-365819.appspot.com\",\r\n    messagingSenderId: \"106854662718\",\r\n    appId: \"1:106854662718:web:8551e81f7011c4e48e476f\",\r\n    measurementId: \"G-3TE4VE0KB3\"\r\n  };\r\n\r\n  // Initialize Firebase\r\n  const app = (0,https_www_gstatic_com_firebasejs_9_18_0_firebase_app_js__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\r\n  const auth = (0,https_www_gstatic_com_firebasejs_9_18_0_firebase_auth_js__WEBPACK_IMPORTED_MODULE_1__.getAuth)();\r\n  const database = (0,https_www_gstatic_com_firebasejs_9_18_0_firebase_database_js__WEBPACK_IMPORTED_MODULE_2__.getDatabase)(app);\r\n\r\n  btnSignup.addEventListener('click', (e) => {\r\n\r\n    var pseudo = document.getElementById(\"pseudo\").value;\r\n    var email = document.getElementById(\"email\").value;\r\n    var password = document.getElementById(\"txtPassword\").value;\r\n\r\n  (0,https_www_gstatic_com_firebasejs_9_18_0_firebase_auth_js__WEBPACK_IMPORTED_MODULE_1__.createUserWithEmailAndPassword)(auth, email, password)\r\n  .then((userCredential) => {\r\n    // Signed in \r\n    const user = userCredential.user;\r\n    \r\n    alert('User created successfully')\r\n    window.location.replace(\"login.html\");\r\n    \r\n    // ...\r\n  })\r\n  .catch((error) => {\r\n    const errorCode = error.code;\r\n    const errorMessage = error.message;\r\n\r\n    alert('errorMessage')\r\n    // ..\r\n  });\r\n  });\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hc3NldHMvanMvYXV0aC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQSxFQUE0RjtBQUM1RixFQUF1SDtBQUN2SCxFQUErRjtBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxzR0FBYTtBQUMzQixlQUFlLGlHQUFPO0FBQ3RCLG1CQUFtQix5R0FBVztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsd0hBQThCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEdBQUcsRSIsInNvdXJjZXMiOlsid2VicGFjazovL255dW1iYXJ0Ly4vYXNzZXRzL2pzL2F1dGguanM/MzNkMCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIC8vIEltcG9ydCB0aGUgZnVuY3Rpb25zIHlvdSBuZWVkIGZyb20gdGhlIFNES3MgeW91IG5lZWRcclxuICBpbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSBcImh0dHBzOi8vd3d3LmdzdGF0aWMuY29tL2ZpcmViYXNlanMvOS4xOC4wL2ZpcmViYXNlLWFwcC5qc1wiO1xyXG4gIGltcG9ydCB7IGdldEF1dGgsIGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCB9IGZyb20gXCJodHRwczovL3d3dy5nc3RhdGljLmNvbS9maXJlYmFzZWpzLzkuMTguMC9maXJlYmFzZS1hdXRoLmpzXCI7XHJcbiAgaW1wb3J0IHsgZ2V0RGF0YWJhc2UgfSBmcm9tIFwiaHR0cHM6Ly93d3cuZ3N0YXRpYy5jb20vZmlyZWJhc2Vqcy85LjE4LjAvZmlyZWJhc2UtZGF0YWJhc2UuanNcIjtcclxuICAvLyBUT0RPOiBBZGQgU0RLcyBmb3IgRmlyZWJhc2UgcHJvZHVjdHMgdGhhdCB5b3Ugd2FudCB0byB1c2VcclxuICAvLyBodHRwczovL2ZpcmViYXNlLmdvb2dsZS5jb20vZG9jcy93ZWIvc2V0dXAjYXZhaWxhYmxlLWxpYnJhcmllc1xyXG5cclxuICAvLyBZb3VyIHdlYiBhcHAncyBGaXJlYmFzZSBjb25maWd1cmF0aW9uXHJcbiAgLy8gRm9yIEZpcmViYXNlIEpTIFNESyB2Ny4yMC4wIGFuZCBsYXRlciwgbWVhc3VyZW1lbnRJZCBpcyBvcHRpb25hbFxyXG4gIGNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gICAgYXBpS2V5OiBcIkFJemFTeURJb2tTaFFIZVktR2tjRkxTZGhpa0hHTlFHWmRkVWJKUVwiLFxyXG4gICAgYXV0aERvbWFpbjogXCJzaW5jZXJlLXN1bi0zNjU4MTkuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgICBkYXRhYmFzZVVSTDogXCJodHRwczovL3NpbmNlcmUtc3VuLTM2NTgxOS1kZWZhdWx0LXJ0ZGIuZXVyb3BlLXdlc3QxLmZpcmViYXNlZGF0YWJhc2UuYXBwXCIsXHJcbiAgICBwcm9qZWN0SWQ6IFwic2luY2VyZS1zdW4tMzY1ODE5XCIsXHJcbiAgICBzdG9yYWdlQnVja2V0OiBcInNpbmNlcmUtc3VuLTM2NTgxOS5hcHBzcG90LmNvbVwiLFxyXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiMTA2ODU0NjYyNzE4XCIsXHJcbiAgICBhcHBJZDogXCIxOjEwNjg1NDY2MjcxODp3ZWI6ODU1MWU4MWY3MDExYzRlNDhlNDc2ZlwiLFxyXG4gICAgbWVhc3VyZW1lbnRJZDogXCJHLTNURTRWRTBLQjNcIlxyXG4gIH07XHJcblxyXG4gIC8vIEluaXRpYWxpemUgRmlyZWJhc2VcclxuICBjb25zdCBhcHAgPSBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcclxuICBjb25zdCBhdXRoID0gZ2V0QXV0aCgpO1xyXG4gIGNvbnN0IGRhdGFiYXNlID0gZ2V0RGF0YWJhc2UoYXBwKTtcclxuXHJcbiAgYnRuU2lnbnVwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuXHJcbiAgICB2YXIgcHNldWRvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwc2V1ZG9cIikudmFsdWU7XHJcbiAgICB2YXIgZW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVtYWlsXCIpLnZhbHVlO1xyXG4gICAgdmFyIHBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0eHRQYXNzd29yZFwiKS52YWx1ZTtcclxuXHJcbiAgY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGF1dGgsIGVtYWlsLCBwYXNzd29yZClcclxuICAudGhlbigodXNlckNyZWRlbnRpYWwpID0+IHtcclxuICAgIC8vIFNpZ25lZCBpbiBcclxuICAgIGNvbnN0IHVzZXIgPSB1c2VyQ3JlZGVudGlhbC51c2VyO1xyXG4gICAgXHJcbiAgICBhbGVydCgnVXNlciBjcmVhdGVkIHN1Y2Nlc3NmdWxseScpXHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShcImxvZ2luLmh0bWxcIik7XHJcbiAgICBcclxuICAgIC8vIC4uLlxyXG4gIH0pXHJcbiAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgY29uc3QgZXJyb3JDb2RlID0gZXJyb3IuY29kZTtcclxuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XHJcblxyXG4gICAgYWxlcnQoJ2Vycm9yTWVzc2FnZScpXHJcbiAgICAvLyAuLlxyXG4gIH0pO1xyXG4gIH0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./assets/js/auth.js\n");

/***/ }),

/***/ "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js":
false,

/***/ "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js":
false,

/***/ "https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js":
false

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
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && !queue.d) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = 1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && (queue.d = 0);
/******/ 		};
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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/js/auth.js");
/******/ 	
/******/ })()
;