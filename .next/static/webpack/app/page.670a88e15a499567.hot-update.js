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

/***/ "(app-pages-browser)/./src/components/Projects.tsx":
/*!*************************************!*\
  !*** ./src/components/Projects.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Projects; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _components_shared_Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/components/shared/Title */ \"(app-pages-browser)/./src/components/shared/Title.tsx\");\n/* harmony import */ var _config_projects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/config/projects */ \"(app-pages-browser)/./src/config/projects.ts\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gsap */ \"(app-pages-browser)/./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! gsap/ScrollTrigger */ \"(app-pages-browser)/./node_modules/gsap/ScrollTrigger.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n// components\n\n// config\n\n// gsap\n\n\ngsap__WEBPACK_IMPORTED_MODULE_6__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_7__.ScrollTrigger);\nfunction Projects() {\n    _s();\n    const containerRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    const scrollRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    react__WEBPACK_IMPORTED_MODULE_1___default().useLayoutEffect(()=>{\n        let gsapContext = gsap__WEBPACK_IMPORTED_MODULE_6__.gsap.context(()=>{\n            let panels = gsap__WEBPACK_IMPORTED_MODULE_6__.gsap.utils.toArray(\".panel\");\n            gsap__WEBPACK_IMPORTED_MODULE_6__.gsap.to(panels, {\n                xPercent: -100 * (panels.length - 1),\n                ease: \"none\",\n                scrollTrigger: {\n                    trigger: containerRef.current,\n                    pin: true,\n                    scrub: 1,\n                    snap: 1 / (panels.length - 1),\n                    end: ()=>{\n                        var _scrollRef_current;\n                        return \"+=\" + ((_scrollRef_current = scrollRef.current) === null || _scrollRef_current === void 0 ? void 0 : _scrollRef_current.offsetWidth);\n                    }\n                }\n            });\n        }, containerRef);\n        return ()=>gsapContext.revert();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: containerRef,\n        id: \"projects\",\n        className: \"w-full h-screen bg-white mb-[100vh] relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full md:max-w-[1200px] absolute top-0 left-1/2 px-5 -translate-x-1/2 mix-blend-difference text-white z-50 sm:px-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Title__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    title: \"Projects\",\n                    description: \"My Portfolio\"\n                }, void 0, false, {\n                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Projects.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Projects.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: scrollRef,\n                className: \"w-full h-full flex overflow-hidden\",\n                children: _config_projects__WEBPACK_IMPORTED_MODULE_5__.PROJECTS.map((project)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative min-w-[100vw] w-[100vw] h-full panel flex items-center odd:bg-black\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"max-w-[1250px] mx-auto flex items-center gap-10 group\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    href: project.url,\n                                    target: \"_blank\",\n                                    className: \"w-[50%] max-w-[50%] aspect-video flex-1 shadow-2xl rounded-lg overflow-hidden\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        src: project.imageLink,\n                                        alt: \"\",\n                                        width: 700,\n                                        height: 700,\n                                        loading: \"lazy\",\n                                        className: \"w-full h-full rounded-md scale-110 hover:scale-100 transition-transform duration-1000\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Projects.tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Projects.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-1 flex-col gap-3 justify-center bg-red-500\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-3xl font-bold text-white group-odd:text-red\",\n                                            children: project.projectName\n                                        }, void 0, false, {\n                                            fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Projects.tsx\",\n                                            lineNumber: 77,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-semibold text-white group-odd:text-red\",\n                                            children: project.description\n                                        }, void 0, false, {\n                                            fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Projects.tsx\",\n                                            lineNumber: 80,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex text-sm font-semibold gap-2 flex-wrap\",\n                                            children: project.techs.map((tech)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"rounded-full px-4 py-2 bg-black text-white group-odd:bg-white group-odd:text-black\",\n                                                    children: tech\n                                                }, tech, false, {\n                                                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Projects.tsx\",\n                                                    lineNumber: 87,\n                                                    columnNumber: 21\n                                                }, this))\n                                        }, void 0, false, {\n                                            fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Projects.tsx\",\n                                            lineNumber: 85,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"h-full\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Projects.tsx\",\n                                            lineNumber: 96,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex justify-between\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                                    href: project.url,\n                                                    target: \"_blank\",\n                                                    className: \"relative font-semibold after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-black group-odd:after:bg-white hover:after:w-full after:transition-all\",\n                                                    children: \"Wiew\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Projects.tsx\",\n                                                    lineNumber: 100,\n                                                    columnNumber: 19\n                                                }, this),\n                                                project.sourceUrl ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                                    href: project.sourceUrl,\n                                                    target: \"_blank\",\n                                                    className: \"relative font-semibold after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-black group-odd:after:bg-white hover:after:w-full after:transition-all\",\n                                                    children: \"Source\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Projects.tsx\",\n                                                    lineNumber: 109,\n                                                    columnNumber: 21\n                                                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                                                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Projects.tsx\",\n                                                    lineNumber: 117,\n                                                    columnNumber: 21\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Projects.tsx\",\n                                            lineNumber: 99,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Projects.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Projects.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 13\n                        }, this)\n                    }, project.url, false, {\n                        fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Projects.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Projects.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Projects.tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n}\n_s(Projects, \"h1pnzfyQ9jNJLE0yRihQCj7U2aM=\");\n_c = Projects;\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1Byb2plY3RzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDMEI7QUFDSztBQUNGO0FBRTdCLGFBQWE7QUFDaUM7QUFFOUMsU0FBUztBQUNvQztBQUU3QyxPQUFPO0FBQ3FCO0FBQ3VCO0FBRW5ESyxzQ0FBSUEsQ0FBQ0UsY0FBYyxDQUFDRCw2REFBYUE7QUFFbEIsU0FBU0U7O0lBQ3RCLE1BQU1DLGVBQWVULG1EQUFZLENBQWlCO0lBQ2xELE1BQU1XLFlBQVlYLG1EQUFZLENBQWlCO0lBRS9DQSw0REFBcUIsQ0FBQztRQUNwQixJQUFJYSxjQUFjUixzQ0FBSUEsQ0FBQ1MsT0FBTyxDQUFDO1lBQzdCLElBQUlDLFNBQVNWLHNDQUFJQSxDQUFDVyxLQUFLLENBQUNDLE9BQU8sQ0FBQztZQUVoQ1osc0NBQUlBLENBQUNhLEVBQUUsQ0FBQ0gsUUFBUTtnQkFDZEksVUFBVSxDQUFDLE1BQU9KLENBQUFBLE9BQU9LLE1BQU0sR0FBRztnQkFDbENDLE1BQU07Z0JBQ05DLGVBQWU7b0JBQ2JDLFNBQVNkLGFBQWFlLE9BQU87b0JBQzdCQyxLQUFLO29CQUNMQyxPQUFPO29CQUNQQyxNQUFNLElBQUtaLENBQUFBLE9BQU9LLE1BQU0sR0FBRztvQkFDM0JRLEtBQUs7NEJBQWFqQjsrQkFBUCxTQUFPQSxxQkFBQUEsVUFBVWEsT0FBTyxjQUFqQmIseUNBQUFBLG1CQUFtQmtCLFdBQVc7O2dCQUNsRDtZQUNGO1FBQ0YsR0FBR3BCO1FBRUgsT0FBTyxJQUFNSSxZQUFZaUIsTUFBTTtJQUNqQyxHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0M7UUFDQ0MsS0FBS3ZCO1FBQ0x3QixJQUFHO1FBQ0hDLFdBQVU7OzBCQUVWLDhEQUFDSDtnQkFBSUcsV0FBVTswQkFDYiw0RUFBQy9CLGdFQUFLQTtvQkFBQ2dDLE9BQU07b0JBQVdDLGFBQVk7Ozs7Ozs7Ozs7OzBCQUd0Qyw4REFBQ0w7Z0JBQUlDLEtBQUtyQjtnQkFBV3VCLFdBQVU7MEJBQzVCOUIsc0RBQVFBLENBQUNpQyxHQUFHLENBQUMsQ0FBQ0Msd0JBQ2IsOERBQUNQO3dCQUVDRyxXQUFVO2tDQUVWLDRFQUFDSDs0QkFBSUcsV0FBVTs7OENBRWIsOERBQUNoQyxpREFBSUE7b0NBQ0hxQyxNQUFNRCxRQUFRRSxHQUFHO29DQUNqQkMsUUFBTztvQ0FDUFAsV0FBVTs4Q0FFViw0RUFBQ2pDLGtEQUFLQTt3Q0FDSnlDLEtBQUtKLFFBQVFLLFNBQVM7d0NBQ3RCQyxLQUFJO3dDQUNKQyxPQUFPO3dDQUNQQyxRQUFRO3dDQUNSQyxTQUFRO3dDQUNSYixXQUFVOzs7Ozs7Ozs7Ozs4Q0FLZCw4REFBQ0g7b0NBQUlHLFdBQVU7O3NEQUNiLDhEQUFDYzs0Q0FBRWQsV0FBVTtzREFDVkksUUFBUVcsV0FBVzs7Ozs7O3NEQUV0Qiw4REFBQ0M7NENBQUtoQixXQUFVO3NEQUNiSSxRQUFRRixXQUFXOzs7Ozs7c0RBSXRCLDhEQUFDTDs0Q0FBSUcsV0FBVTtzREFDWkksUUFBUWEsS0FBSyxDQUFDZCxHQUFHLENBQUMsQ0FBQ2UscUJBQ2xCLDhEQUFDckI7b0RBRUNHLFdBQVU7OERBRVRrQjttREFISUE7Ozs7Ozs7Ozs7c0RBUVgsOERBQUNyQjs0Q0FBSUcsV0FBVTs7Ozs7O3NEQUdmLDhEQUFDSDs0Q0FBSUcsV0FBVTs7OERBQ2IsOERBQUNoQyxpREFBSUE7b0RBQ0hxQyxNQUFNRCxRQUFRRSxHQUFHO29EQUNqQkMsUUFBTztvREFDUFAsV0FBVTs4REFDWDs7Ozs7O2dEQUlBSSxRQUFRZSxTQUFTLGlCQUNoQiw4REFBQ25ELGlEQUFJQTtvREFDSHFDLE1BQU1ELFFBQVFlLFNBQVM7b0RBQ3ZCWixRQUFPO29EQUNQUCxXQUFVOzhEQUNYOzs7Ozt5RUFJRCw4REFBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQTlESk8sUUFBUUUsR0FBRzs7Ozs7Ozs7Ozs7Ozs7OztBQXdFNUI7R0E3R3dCaEM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMudHN4PzkyNjUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuLy8gY29tcG9uZW50c1xuaW1wb3J0IFRpdGxlIGZyb20gXCJ+L2NvbXBvbmVudHMvc2hhcmVkL1RpdGxlXCI7XG5cbi8vIGNvbmZpZ1xuaW1wb3J0IHsgUFJPSkVDVFMgfSBmcm9tIFwifi9jb25maWcvcHJvamVjdHNcIjtcblxuLy8gZ3NhcFxuaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwXCI7XG5pbXBvcnQgeyBTY3JvbGxUcmlnZ2VyIH0gZnJvbSBcImdzYXAvU2Nyb2xsVHJpZ2dlclwiO1xuXG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0cygpIHtcbiAgY29uc3QgY29udGFpbmVyUmVmID0gUmVhY3QudXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcbiAgY29uc3Qgc2Nyb2xsUmVmID0gUmVhY3QudXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcblxuICBSZWFjdC51c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBnc2FwQ29udGV4dCA9IGdzYXAuY29udGV4dCgoKSA9PiB7XG4gICAgICBsZXQgcGFuZWxzID0gZ3NhcC51dGlscy50b0FycmF5KFwiLnBhbmVsXCIpO1xuXG4gICAgICBnc2FwLnRvKHBhbmVscywge1xuICAgICAgICB4UGVyY2VudDogLTEwMCAqIChwYW5lbHMubGVuZ3RoIC0gMSksXG4gICAgICAgIGVhc2U6IFwibm9uZVwiLFxuICAgICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgICAgdHJpZ2dlcjogY29udGFpbmVyUmVmLmN1cnJlbnQsXG4gICAgICAgICAgcGluOiB0cnVlLFxuICAgICAgICAgIHNjcnViOiAxLFxuICAgICAgICAgIHNuYXA6IDEgLyAocGFuZWxzLmxlbmd0aCAtIDEpLFxuICAgICAgICAgIGVuZDogKCkgPT4gXCIrPVwiICsgc2Nyb2xsUmVmLmN1cnJlbnQ/Lm9mZnNldFdpZHRoLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSwgY29udGFpbmVyUmVmKTtcblxuICAgIHJldHVybiAoKSA9PiBnc2FwQ29udGV4dC5yZXZlcnQoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgcmVmPXtjb250YWluZXJSZWZ9XG4gICAgICBpZD1cInByb2plY3RzXCJcbiAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLXNjcmVlbiBiZy13aGl0ZSBtYi1bMTAwdmhdIHJlbGF0aXZlXCJcbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtZDptYXgtdy1bMTIwMHB4XSBhYnNvbHV0ZSB0b3AtMCBsZWZ0LTEvMiBweC01IC10cmFuc2xhdGUteC0xLzIgbWl4LWJsZW5kLWRpZmZlcmVuY2UgdGV4dC13aGl0ZSB6LTUwIHNtOnB4LTBcIj5cbiAgICAgICAgPFRpdGxlIHRpdGxlPVwiUHJvamVjdHNcIiBkZXNjcmlwdGlvbj1cIk15IFBvcnRmb2xpb1wiIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiByZWY9e3Njcm9sbFJlZn0gY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBmbGV4IG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICB7UFJPSkVDVFMubWFwKChwcm9qZWN0KSA9PiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAga2V5PXtwcm9qZWN0LnVybH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIG1pbi13LVsxMDB2d10gdy1bMTAwdnddIGgtZnVsbCBwYW5lbCBmbGV4IGl0ZW1zLWNlbnRlciBvZGQ6YmctYmxhY2tcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctWzEyNTBweF0gbXgtYXV0byBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMTAgZ3JvdXBcIj5cbiAgICAgICAgICAgICAgey8qIGxlZnQgc2lkZSAqL31cbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBocmVmPXtwcm9qZWN0LnVybH1cbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctWzUwJV0gbWF4LXctWzUwJV0gYXNwZWN0LXZpZGVvIGZsZXgtMSBzaGFkb3ctMnhsIHJvdW5kZWQtbGcgb3ZlcmZsb3ctaGlkZGVuXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgc3JjPXtwcm9qZWN0LmltYWdlTGlua31cbiAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICB3aWR0aD17NzAwfVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs3MDB9XG4gICAgICAgICAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIHJvdW5kZWQtbWQgc2NhbGUtMTEwIGhvdmVyOnNjYWxlLTEwMCB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0xMDAwXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgICAgey8qIHJpZ2h0IHNpZGUgKi99XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LTEgZmxleC1jb2wgZ2FwLTMganVzdGlmeS1jZW50ZXIgYmctcmVkLTUwMFwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIGdyb3VwLW9kZDp0ZXh0LXJlZFwiPlxuICAgICAgICAgICAgICAgICAge3Byb2plY3QucHJvamVjdE5hbWV9XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc2VtaWJvbGQgdGV4dC13aGl0ZSBncm91cC1vZGQ6dGV4dC1yZWRcIj5cbiAgICAgICAgICAgICAgICAgIHtwcm9qZWN0LmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgICAgICAgIHsvKiB0ZWNocyAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdGV4dC1zbSBmb250LXNlbWlib2xkIGdhcC0yIGZsZXgtd3JhcFwiPlxuICAgICAgICAgICAgICAgICAge3Byb2plY3QudGVjaHMubWFwKCh0ZWNoKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e3RlY2h9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIHB4LTQgcHktMiBiZy1ibGFjayB0ZXh0LXdoaXRlIGdyb3VwLW9kZDpiZy13aGl0ZSBncm91cC1vZGQ6dGV4dC1ibGFja1wiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7dGVjaH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsXCI+PC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7LyogbGlua3MgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17cHJvamVjdC51cmx9XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIGZvbnQtc2VtaWJvbGQgYWZ0ZXI6YWJzb2x1dGUgYWZ0ZXI6Ym90dG9tLTAgYWZ0ZXI6bGVmdC0wIGFmdGVyOnctMCBhZnRlcjpoLTAuNSBhZnRlcjpiZy1ibGFjayBncm91cC1vZGQ6YWZ0ZXI6Ymctd2hpdGUgaG92ZXI6YWZ0ZXI6dy1mdWxsIGFmdGVyOnRyYW5zaXRpb24tYWxsXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgV2lld1xuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICAgICAgICB7cHJvamVjdC5zb3VyY2VVcmwgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj17cHJvamVjdC5zb3VyY2VVcmx9XG4gICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmb250LXNlbWlib2xkIGFmdGVyOmFic29sdXRlIGFmdGVyOmJvdHRvbS0wIGFmdGVyOmxlZnQtMCBhZnRlcjp3LTAgYWZ0ZXI6aC0wLjUgYWZ0ZXI6YmctYmxhY2sgZ3JvdXAtb2RkOmFmdGVyOmJnLXdoaXRlIGhvdmVyOmFmdGVyOnctZnVsbCBhZnRlcjp0cmFuc2l0aW9uLWFsbFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBTb3VyY2VcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiAvPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkltYWdlIiwiTGluayIsIlRpdGxlIiwiUFJPSkVDVFMiLCJnc2FwIiwiU2Nyb2xsVHJpZ2dlciIsInJlZ2lzdGVyUGx1Z2luIiwiUHJvamVjdHMiLCJjb250YWluZXJSZWYiLCJ1c2VSZWYiLCJzY3JvbGxSZWYiLCJ1c2VMYXlvdXRFZmZlY3QiLCJnc2FwQ29udGV4dCIsImNvbnRleHQiLCJwYW5lbHMiLCJ1dGlscyIsInRvQXJyYXkiLCJ0byIsInhQZXJjZW50IiwibGVuZ3RoIiwiZWFzZSIsInNjcm9sbFRyaWdnZXIiLCJ0cmlnZ2VyIiwiY3VycmVudCIsInBpbiIsInNjcnViIiwic25hcCIsImVuZCIsIm9mZnNldFdpZHRoIiwicmV2ZXJ0IiwiZGl2IiwicmVmIiwiaWQiLCJjbGFzc05hbWUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwibWFwIiwicHJvamVjdCIsImhyZWYiLCJ1cmwiLCJ0YXJnZXQiLCJzcmMiLCJpbWFnZUxpbmsiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImxvYWRpbmciLCJwIiwicHJvamVjdE5hbWUiLCJzcGFuIiwidGVjaHMiLCJ0ZWNoIiwic291cmNlVXJsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Projects.tsx\n"));

/***/ })

});