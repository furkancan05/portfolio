"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/Landing.tsx":
/*!************************************!*\
  !*** ./src/components/Landing.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ \"(app-pages-browser)/./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap/ScrollTrigger */ \"(app-pages-browser)/./node_modules/gsap/ScrollTrigger.js\");\n/* harmony import */ var _components_Globe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/Globe */ \"(app-pages-browser)/./src/components/Globe.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\ngsap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__.ScrollTrigger);\nfunction Landing() {\n    _s();\n    const triggerRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    const targetRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    // parallax scroll to texts\n    react__WEBPACK_IMPORTED_MODULE_1___default().useLayoutEffect(()=>{\n        const context = gsap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].context(()=>{\n            const timeline = gsap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].timeline({\n                scrollTrigger: {\n                    // @ts-ignore\n                    target: triggerRef.current,\n                    start: \"top bottom\",\n                    end: \"bottom top\",\n                    scrub: true\n                }\n            });\n            timeline.to(targetRef.current, {\n                y: 0\n            }, 0);\n        });\n        return ()=>context.revert();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        ref: triggerRef,\n        id: \"home\",\n        className: \"fixed top-0 bg-black w-full text-white h-screen p-5 -z-20 overflow-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: targetRef,\n                className: \"max-w-[1200px] h-full mx-auto flex flex-col items-center justify-center overflow-hidden gap-10 md:justify-between md:flex-row md:gap-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col items-center text-center md:text-left md:items-start z-50\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                            className: \"font-semibold text-white/60\",\n                            children: \"Frontend Developer\"\n                        }, void 0, false, {\n                            fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Landing.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-[48px] font-black font-['NF_Ultra'] tracking-[0.3rem]\",\n                            children: \"FURKAN CAN\"\n                        }, void 0, false, {\n                            fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Landing.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"font-semibold text-white/60\",\n                            children: [\n                                \"Hello I am Furkan Can. I`m working as Frontend Developer, \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Landing.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 71\n                                }, this),\n                                \"also Mobile Applications and Web3 Projects.\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Landing.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Landing.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Landing.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"visible absolute bottom-10 left-1/2 -translate-x-1/2 text-white font-semibold text-sm mask-image z-50\",\n                children: \"Scroll to explore\"\n            }, void 0, false, {\n                fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Landing.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"-z-20\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Globe__WEBPACK_IMPORTED_MODULE_2__.Globe, {}, void 0, false, {\n                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Landing.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Landing.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Landing.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(Landing, \"E0vLTajTVdFsglUwmcOL28QkRV0=\");\n_c = Landing;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Landing);\nvar _c;\n$RefreshReg$(_c, \"Landing\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0xhbmRpbmcudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUMwQjtBQUNGO0FBQzJCO0FBRVI7QUFFM0NDLDRDQUFJQSxDQUFDRyxjQUFjLENBQUNGLDZEQUFhQTtBQUVqQyxTQUFTRzs7SUFDUCxNQUFNQyxhQUFhTixtREFBWSxDQUFpQjtJQUNoRCxNQUFNUSxZQUFZUixtREFBWSxDQUFpQjtJQUUvQywyQkFBMkI7SUFDM0JBLDREQUFxQixDQUFDO1FBQ3BCLE1BQU1VLFVBQVVULDRDQUFJQSxDQUFDUyxPQUFPLENBQUM7WUFDM0IsTUFBTUMsV0FBV1YsNENBQUlBLENBQUNVLFFBQVEsQ0FBQztnQkFDN0JDLGVBQWU7b0JBQ2IsYUFBYTtvQkFDYkMsUUFBUVAsV0FBV1EsT0FBTztvQkFDMUJDLE9BQU87b0JBQ1BDLEtBQUs7b0JBQ0xDLE9BQU87Z0JBQ1Q7WUFDRjtZQUVBTixTQUFTTyxFQUFFLENBQUNWLFVBQVVNLE9BQU8sRUFBRTtnQkFBRUssR0FBRztZQUFFLEdBQUc7UUFDM0M7UUFFQSxPQUFPLElBQU1ULFFBQVFVLE1BQU07SUFDN0IsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNDO1FBQ0NDLEtBQUtoQjtRQUNMaUIsSUFBRztRQUNIQyxXQUFVOzswQkFFViw4REFBQ0M7Z0JBQ0NILEtBQUtkO2dCQUNMZ0IsV0FBVTswQkFFViw0RUFBQ0M7b0JBQUlELFdBQVU7O3NDQUNiLDhEQUFDRTs0QkFBTUYsV0FBVTtzQ0FBOEI7Ozs7OztzQ0FHL0MsOERBQUNHOzRCQUFHSCxXQUFVO3NDQUE2RDs7Ozs7O3NDQUczRSw4REFBQ0k7NEJBQUVKLFdBQVU7O2dDQUE4Qjs4Q0FDaUIsOERBQUNLOzs7OztnQ0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU10RSw4REFBQ0M7Z0JBQUtOLFdBQVU7MEJBQXdHOzs7Ozs7MEJBSXhILDhEQUFDQztnQkFBSUQsV0FBVTswQkFDYiw0RUFBQ3JCLG9EQUFLQTs7Ozs7Ozs7Ozs7Ozs7OztBQUlkO0dBeERTRTtLQUFBQTtBQTBEVCwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9MYW5kaW5nLnRzeD9hMDk0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGdzYXAgZnJvbSBcImdzYXBcIjtcbmltcG9ydCB7IFNjcm9sbFRyaWdnZXIgfSBmcm9tIFwiZ3NhcC9TY3JvbGxUcmlnZ2VyXCI7XG5cbmltcG9ydCB7IEdsb2JlIH0gZnJvbSBcIn4vY29tcG9uZW50cy9HbG9iZVwiO1xuXG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xuXG5mdW5jdGlvbiBMYW5kaW5nKCkge1xuICBjb25zdCB0cmlnZ2VyUmVmID0gUmVhY3QudXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcbiAgY29uc3QgdGFyZ2V0UmVmID0gUmVhY3QudXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcblxuICAvLyBwYXJhbGxheCBzY3JvbGwgdG8gdGV4dHNcbiAgUmVhY3QudXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjb250ZXh0ID0gZ3NhcC5jb250ZXh0KCgpID0+IHtcbiAgICAgIGNvbnN0IHRpbWVsaW5lID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgdGFyZ2V0OiB0cmlnZ2VyUmVmLmN1cnJlbnQsXG4gICAgICAgICAgc3RhcnQ6IFwidG9wIGJvdHRvbVwiLFxuICAgICAgICAgIGVuZDogXCJib3R0b20gdG9wXCIsXG4gICAgICAgICAgc2NydWI6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgdGltZWxpbmUudG8odGFyZ2V0UmVmLmN1cnJlbnQsIHsgeTogMCB9LCAwKTtcbiAgICB9KTtcblxuICAgIHJldHVybiAoKSA9PiBjb250ZXh0LnJldmVydCgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvblxuICAgICAgcmVmPXt0cmlnZ2VyUmVmfVxuICAgICAgaWQ9XCJob21lXCJcbiAgICAgIGNsYXNzTmFtZT1cImZpeGVkIHRvcC0wIGJnLWJsYWNrIHctZnVsbCB0ZXh0LXdoaXRlIGgtc2NyZWVuIHAtNSAtei0yMCBvdmVyZmxvdy1oaWRkZW5cIlxuICAgID5cbiAgICAgIDxkaXZcbiAgICAgICAgcmVmPXt0YXJnZXRSZWZ9XG4gICAgICAgIGNsYXNzTmFtZT1cIm1heC13LVsxMjAwcHhdIGgtZnVsbCBteC1hdXRvIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG92ZXJmbG93LWhpZGRlbiBnYXAtMTAgbWQ6anVzdGlmeS1iZXR3ZWVuIG1kOmZsZXgtcm93IG1kOmdhcC0wXCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlciBtZDp0ZXh0LWxlZnQgbWQ6aXRlbXMtc3RhcnQgei01MFwiPlxuICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtd2hpdGUvNjBcIj5cbiAgICAgICAgICAgIEZyb250ZW5kIERldmVsb3BlclxuICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtWzQ4cHhdIGZvbnQtYmxhY2sgZm9udC1bJ05GX1VsdHJhJ10gdHJhY2tpbmctWzAuM3JlbV1cIj5cbiAgICAgICAgICAgIEZVUktBTiBDQU5cbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZS82MFwiPlxuICAgICAgICAgICAgSGVsbG8gSSBhbSBGdXJrYW4gQ2FuLiBJYG0gd29ya2luZyBhcyBGcm9udGVuZCBEZXZlbG9wZXIsIDxiciAvPlxuICAgICAgICAgICAgYWxzbyBNb2JpbGUgQXBwbGljYXRpb25zIGFuZCBXZWIzIFByb2plY3RzLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidmlzaWJsZSBhYnNvbHV0ZSBib3R0b20tMTAgbGVmdC0xLzIgLXRyYW5zbGF0ZS14LTEvMiB0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGQgdGV4dC1zbSBtYXNrLWltYWdlIHotNTBcIj5cbiAgICAgICAgU2Nyb2xsIHRvIGV4cGxvcmVcbiAgICAgIDwvc3Bhbj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCItei0yMFwiPlxuICAgICAgICA8R2xvYmUgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGFuZGluZztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImdzYXAiLCJTY3JvbGxUcmlnZ2VyIiwiR2xvYmUiLCJyZWdpc3RlclBsdWdpbiIsIkxhbmRpbmciLCJ0cmlnZ2VyUmVmIiwidXNlUmVmIiwidGFyZ2V0UmVmIiwidXNlTGF5b3V0RWZmZWN0IiwiY29udGV4dCIsInRpbWVsaW5lIiwic2Nyb2xsVHJpZ2dlciIsInRhcmdldCIsImN1cnJlbnQiLCJzdGFydCIsImVuZCIsInNjcnViIiwidG8iLCJ5IiwicmV2ZXJ0Iiwic2VjdGlvbiIsInJlZiIsImlkIiwiY2xhc3NOYW1lIiwiZGl2Iiwic21hbGwiLCJoMSIsInAiLCJiciIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Landing.tsx\n"));

/***/ })

});