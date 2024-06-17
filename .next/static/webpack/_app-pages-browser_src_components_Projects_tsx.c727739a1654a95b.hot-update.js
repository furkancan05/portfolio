"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("_app-pages-browser_src_components_Projects_tsx",{

/***/ "(app-pages-browser)/./src/components/Projects.tsx":
/*!*************************************!*\
  !*** ./src/components/Projects.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Projects; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _components_shared_Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/components/shared/Title */ \"(app-pages-browser)/./src/components/shared/Title.tsx\");\n/* harmony import */ var _config_projects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/config/projects */ \"(app-pages-browser)/./src/config/projects.ts\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gsap */ \"(app-pages-browser)/./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! gsap/ScrollTrigger */ \"(app-pages-browser)/./node_modules/gsap/ScrollTrigger.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n// components\n\n// config\n\n// gsap\n\n\ngsap__WEBPACK_IMPORTED_MODULE_6__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_7__.ScrollTrigger);\nfunction Projects() {\n    _s();\n    const containerRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    const scrollRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    react__WEBPACK_IMPORTED_MODULE_1___default().useLayoutEffect(()=>{\n        let gsapContext = gsap__WEBPACK_IMPORTED_MODULE_6__.gsap.context(()=>{\n            let panels = gsap__WEBPACK_IMPORTED_MODULE_6__.gsap.utils.toArray(\".panel\");\n            gsap__WEBPACK_IMPORTED_MODULE_6__.gsap.to(panels, {\n                xPercent: -100 * (panels.length - 1),\n                ease: \"none\",\n                scrollTrigger: {\n                    trigger: containerRef.current,\n                    pin: true,\n                    scrub: 1,\n                    // snap: 1 / (panels.length - 1),\n                    // end: () => \"+=\" + scrollRef.current?.offsetWidth,\n                    end: ()=>\"+=\" + 10\n                }\n            });\n        }, containerRef);\n        return ()=>gsapContext.revert();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: containerRef,\n        id: \"projects\",\n        className: \"w-full h-screen bg-white mb-[100vh] relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full md:max-w-[1200px] absolute top-0 left-1/2 px-5 -translate-x-1/2 mix-blend-difference text-white z-50 sm:px-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Title__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    title: \"Projects\",\n                    description: \"My Portfolio\"\n                }, void 0, false, {\n                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Projects.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Projects.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: scrollRef,\n                className: \"w-full h-full flex overflow-hidden\",\n                children: _config_projects__WEBPACK_IMPORTED_MODULE_5__.PROJECTS.map((project)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative min-w-[100vw] w-[100vw] h-full panel flex items-center odd:bg-black group\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"max-w-[1250px] mx-auto flex flex-col md:flex-row items-center gap-10 p-5\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    href: project.url,\n                                    target: \"_blank\",\n                                    className: \"w-full md:w-[50%] md:max-w-[50%] aspect-video flex-1 rounded-lg overflow-hidden\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        src: project.imageLink,\n                                        alt: \"\",\n                                        width: 700,\n                                        height: 700,\n                                        loading: \"lazy\",\n                                        className: \"w-full h-full rounded-md scale-110 hover:scale-100 transition-transform duration-1000\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Projects.tsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Projects.tsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-1 flex-col gap-3 justify-center text-black group-odd:text-white\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-3xl font-bold\",\n                                            children: project.projectName\n                                        }, void 0, false, {\n                                            fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Projects.tsx\",\n                                            lineNumber: 79,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"font-semibold\",\n                                            children: project.description\n                                        }, void 0, false, {\n                                            fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Projects.tsx\",\n                                            lineNumber: 80,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex text-sm font-semibold gap-2 flex-wrap\",\n                                            children: project.techs.map((tech)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"rounded-full px-4 py-2 bg-black text-white group-odd:bg-white group-odd:text-black\",\n                                                    children: tech\n                                                }, tech, false, {\n                                                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Projects.tsx\",\n                                                    lineNumber: 85,\n                                                    columnNumber: 21\n                                                }, this))\n                                        }, void 0, false, {\n                                            fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Projects.tsx\",\n                                            lineNumber: 83,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"h-full\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Projects.tsx\",\n                                            lineNumber: 94,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex justify-between\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                                    href: project.url,\n                                                    target: \"_blank\",\n                                                    className: \"relative font-semibold after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-black group-odd:after:bg-white hover:after:w-full after:transition-all\",\n                                                    children: \"View\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Projects.tsx\",\n                                                    lineNumber: 98,\n                                                    columnNumber: 19\n                                                }, this),\n                                                project.sourceUrl ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                                    href: project.sourceUrl,\n                                                    target: \"_blank\",\n                                                    className: \"relative font-semibold after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-black group-odd:after:bg-white hover:after:w-full after:transition-all\",\n                                                    children: \"Source\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Projects.tsx\",\n                                                    lineNumber: 107,\n                                                    columnNumber: 21\n                                                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                                                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Projects.tsx\",\n                                                    lineNumber: 115,\n                                                    columnNumber: 21\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Projects.tsx\",\n                                            lineNumber: 97,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Projects.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Projects.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 13\n                        }, this)\n                    }, project.url, false, {\n                        fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Projects.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Projects.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Projects.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_s(Projects, \"h1pnzfyQ9jNJLE0yRihQCj7U2aM=\");\n_c = Projects;\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1Byb2plY3RzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDMEI7QUFDSztBQUNGO0FBRTdCLGFBQWE7QUFDaUM7QUFFOUMsU0FBUztBQUNvQztBQUU3QyxPQUFPO0FBQ3FCO0FBQ3VCO0FBRW5ESyxzQ0FBSUEsQ0FBQ0UsY0FBYyxDQUFDRCw2REFBYUE7QUFFbEIsU0FBU0U7O0lBQ3RCLE1BQU1DLGVBQWVULG1EQUFZLENBQWlCO0lBQ2xELE1BQU1XLFlBQVlYLG1EQUFZLENBQWlCO0lBRS9DQSw0REFBcUIsQ0FBQztRQUNwQixJQUFJYSxjQUFjUixzQ0FBSUEsQ0FBQ1MsT0FBTyxDQUFDO1lBQzdCLElBQUlDLFNBQVNWLHNDQUFJQSxDQUFDVyxLQUFLLENBQUNDLE9BQU8sQ0FBQztZQUVoQ1osc0NBQUlBLENBQUNhLEVBQUUsQ0FBQ0gsUUFBUTtnQkFDZEksVUFBVSxDQUFDLE1BQU9KLENBQUFBLE9BQU9LLE1BQU0sR0FBRztnQkFDbENDLE1BQU07Z0JBQ05DLGVBQWU7b0JBQ2JDLFNBQVNkLGFBQWFlLE9BQU87b0JBQzdCQyxLQUFLO29CQUNMQyxPQUFPO29CQUVQLGlDQUFpQztvQkFDakMsb0RBQW9EO29CQUNwREMsS0FBSyxJQUFNLE9BQU87Z0JBQ3BCO1lBQ0Y7UUFDRixHQUFHbEI7UUFFSCxPQUFPLElBQU1JLFlBQVllLE1BQU07SUFDakMsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNDO1FBQ0NDLEtBQUtyQjtRQUNMc0IsSUFBRztRQUNIQyxXQUFVOzswQkFFViw4REFBQ0g7Z0JBQUlHLFdBQVU7MEJBQ2IsNEVBQUM3QixnRUFBS0E7b0JBQUM4QixPQUFNO29CQUFXQyxhQUFZOzs7Ozs7Ozs7OzswQkFHdEMsOERBQUNMO2dCQUFJQyxLQUFLbkI7Z0JBQVdxQixXQUFVOzBCQUM1QjVCLHNEQUFRQSxDQUFDK0IsR0FBRyxDQUFDLENBQUNDLHdCQUNiLDhEQUFDUDt3QkFFQ0csV0FBVTtrQ0FFViw0RUFBQ0g7NEJBQUlHLFdBQVU7OzhDQUViLDhEQUFDOUIsaURBQUlBO29DQUNIbUMsTUFBTUQsUUFBUUUsR0FBRztvQ0FDakJDLFFBQU87b0NBQ1BQLFdBQVU7OENBRVYsNEVBQUMvQixrREFBS0E7d0NBQ0p1QyxLQUFLSixRQUFRSyxTQUFTO3dDQUN0QkMsS0FBSTt3Q0FDSkMsT0FBTzt3Q0FDUEMsUUFBUTt3Q0FDUkMsU0FBUTt3Q0FDUmIsV0FBVTs7Ozs7Ozs7Ozs7OENBS2QsOERBQUNIO29DQUFJRyxXQUFVOztzREFDYiw4REFBQ2M7NENBQUVkLFdBQVU7c0RBQXNCSSxRQUFRVyxXQUFXOzs7Ozs7c0RBQ3RELDhEQUFDQzs0Q0FBS2hCLFdBQVU7c0RBQWlCSSxRQUFRRixXQUFXOzs7Ozs7c0RBR3BELDhEQUFDTDs0Q0FBSUcsV0FBVTtzREFDWkksUUFBUWEsS0FBSyxDQUFDZCxHQUFHLENBQUMsQ0FBQ2UscUJBQ2xCLDhEQUFDckI7b0RBRUNHLFdBQVU7OERBRVRrQjttREFISUE7Ozs7Ozs7Ozs7c0RBUVgsOERBQUNyQjs0Q0FBSUcsV0FBVTs7Ozs7O3NEQUdmLDhEQUFDSDs0Q0FBSUcsV0FBVTs7OERBQ2IsOERBQUM5QixpREFBSUE7b0RBQ0htQyxNQUFNRCxRQUFRRSxHQUFHO29EQUNqQkMsUUFBTztvREFDUFAsV0FBVTs4REFDWDs7Ozs7O2dEQUlBSSxRQUFRZSxTQUFTLGlCQUNoQiw4REFBQ2pELGlEQUFJQTtvREFDSG1DLE1BQU1ELFFBQVFlLFNBQVM7b0RBQ3ZCWixRQUFPO29EQUNQUCxXQUFVOzhEQUNYOzs7Ozt5RUFJRCw4REFBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQTFESk8sUUFBUUUsR0FBRzs7Ozs7Ozs7Ozs7Ozs7OztBQW9FNUI7R0EzR3dCOUI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMudHN4PzkyNjUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuLy8gY29tcG9uZW50c1xuaW1wb3J0IFRpdGxlIGZyb20gXCJ+L2NvbXBvbmVudHMvc2hhcmVkL1RpdGxlXCI7XG5cbi8vIGNvbmZpZ1xuaW1wb3J0IHsgUFJPSkVDVFMgfSBmcm9tIFwifi9jb25maWcvcHJvamVjdHNcIjtcblxuLy8gZ3NhcFxuaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwXCI7XG5pbXBvcnQgeyBTY3JvbGxUcmlnZ2VyIH0gZnJvbSBcImdzYXAvU2Nyb2xsVHJpZ2dlclwiO1xuXG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0cygpIHtcbiAgY29uc3QgY29udGFpbmVyUmVmID0gUmVhY3QudXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcbiAgY29uc3Qgc2Nyb2xsUmVmID0gUmVhY3QudXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcblxuICBSZWFjdC51c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBnc2FwQ29udGV4dCA9IGdzYXAuY29udGV4dCgoKSA9PiB7XG4gICAgICBsZXQgcGFuZWxzID0gZ3NhcC51dGlscy50b0FycmF5KFwiLnBhbmVsXCIpO1xuXG4gICAgICBnc2FwLnRvKHBhbmVscywge1xuICAgICAgICB4UGVyY2VudDogLTEwMCAqIChwYW5lbHMubGVuZ3RoIC0gMSksXG4gICAgICAgIGVhc2U6IFwibm9uZVwiLFxuICAgICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgICAgdHJpZ2dlcjogY29udGFpbmVyUmVmLmN1cnJlbnQsXG4gICAgICAgICAgcGluOiB0cnVlLFxuICAgICAgICAgIHNjcnViOiAxLFxuXG4gICAgICAgICAgLy8gc25hcDogMSAvIChwYW5lbHMubGVuZ3RoIC0gMSksXG4gICAgICAgICAgLy8gZW5kOiAoKSA9PiBcIis9XCIgKyBzY3JvbGxSZWYuY3VycmVudD8ub2Zmc2V0V2lkdGgsXG4gICAgICAgICAgZW5kOiAoKSA9PiBcIis9XCIgKyAxMCxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH0sIGNvbnRhaW5lclJlZik7XG5cbiAgICByZXR1cm4gKCkgPT4gZ3NhcENvbnRleHQucmV2ZXJ0KCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHJlZj17Y29udGFpbmVyUmVmfVxuICAgICAgaWQ9XCJwcm9qZWN0c1wiXG4gICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1zY3JlZW4gYmctd2hpdGUgbWItWzEwMHZoXSByZWxhdGl2ZVwiXG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6bWF4LXctWzEyMDBweF0gYWJzb2x1dGUgdG9wLTAgbGVmdC0xLzIgcHgtNSAtdHJhbnNsYXRlLXgtMS8yIG1peC1ibGVuZC1kaWZmZXJlbmNlIHRleHQtd2hpdGUgei01MCBzbTpweC0wXCI+XG4gICAgICAgIDxUaXRsZSB0aXRsZT1cIlByb2plY3RzXCIgZGVzY3JpcHRpb249XCJNeSBQb3J0Zm9saW9cIiAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgcmVmPXtzY3JvbGxSZWZ9IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgZmxleCBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAge1BST0pFQ1RTLm1hcCgocHJvamVjdCkgPT4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGtleT17cHJvamVjdC51cmx9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBtaW4tdy1bMTAwdnddIHctWzEwMHZ3XSBoLWZ1bGwgcGFuZWwgZmxleCBpdGVtcy1jZW50ZXIgb2RkOmJnLWJsYWNrIGdyb3VwXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LVsxMjUwcHhdIG14LWF1dG8gZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBpdGVtcy1jZW50ZXIgZ2FwLTEwIHAtNVwiPlxuICAgICAgICAgICAgICB7LyogbGVmdCBzaWRlICovfVxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGhyZWY9e3Byb2plY3QudXJsfVxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIG1kOnctWzUwJV0gbWQ6bWF4LXctWzUwJV0gYXNwZWN0LXZpZGVvIGZsZXgtMSByb3VuZGVkLWxnIG92ZXJmbG93LWhpZGRlblwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgIHNyYz17cHJvamVjdC5pbWFnZUxpbmt9XG4gICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezcwMH1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD17NzAwfVxuICAgICAgICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCByb3VuZGVkLW1kIHNjYWxlLTExMCBob3ZlcjpzY2FsZS0xMDAgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tMTAwMFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICAgIHsvKiByaWdodCBzaWRlICovfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC0xIGZsZXgtY29sIGdhcC0zIGp1c3RpZnktY2VudGVyIHRleHQtYmxhY2sgZ3JvdXAtb2RkOnRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGRcIj57cHJvamVjdC5wcm9qZWN0TmFtZX08L3A+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiPntwcm9qZWN0LmRlc2NyaXB0aW9ufTwvc3Bhbj5cblxuICAgICAgICAgICAgICAgIHsvKiB0ZWNocyAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdGV4dC1zbSBmb250LXNlbWlib2xkIGdhcC0yIGZsZXgtd3JhcFwiPlxuICAgICAgICAgICAgICAgICAge3Byb2plY3QudGVjaHMubWFwKCh0ZWNoKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e3RlY2h9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIHB4LTQgcHktMiBiZy1ibGFjayB0ZXh0LXdoaXRlIGdyb3VwLW9kZDpiZy13aGl0ZSBncm91cC1vZGQ6dGV4dC1ibGFja1wiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7dGVjaH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsXCI+PC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7LyogbGlua3MgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17cHJvamVjdC51cmx9XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIGZvbnQtc2VtaWJvbGQgYWZ0ZXI6YWJzb2x1dGUgYWZ0ZXI6Ym90dG9tLTAgYWZ0ZXI6bGVmdC0wIGFmdGVyOnctMCBhZnRlcjpoLTAuNSBhZnRlcjpiZy1ibGFjayBncm91cC1vZGQ6YWZ0ZXI6Ymctd2hpdGUgaG92ZXI6YWZ0ZXI6dy1mdWxsIGFmdGVyOnRyYW5zaXRpb24tYWxsXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgVmlld1xuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICAgICAgICB7cHJvamVjdC5zb3VyY2VVcmwgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj17cHJvamVjdC5zb3VyY2VVcmx9XG4gICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmb250LXNlbWlib2xkIGFmdGVyOmFic29sdXRlIGFmdGVyOmJvdHRvbS0wIGFmdGVyOmxlZnQtMCBhZnRlcjp3LTAgYWZ0ZXI6aC0wLjUgYWZ0ZXI6YmctYmxhY2sgZ3JvdXAtb2RkOmFmdGVyOmJnLXdoaXRlIGhvdmVyOmFmdGVyOnctZnVsbCBhZnRlcjp0cmFuc2l0aW9uLWFsbFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBTb3VyY2VcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiAvPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkltYWdlIiwiTGluayIsIlRpdGxlIiwiUFJPSkVDVFMiLCJnc2FwIiwiU2Nyb2xsVHJpZ2dlciIsInJlZ2lzdGVyUGx1Z2luIiwiUHJvamVjdHMiLCJjb250YWluZXJSZWYiLCJ1c2VSZWYiLCJzY3JvbGxSZWYiLCJ1c2VMYXlvdXRFZmZlY3QiLCJnc2FwQ29udGV4dCIsImNvbnRleHQiLCJwYW5lbHMiLCJ1dGlscyIsInRvQXJyYXkiLCJ0byIsInhQZXJjZW50IiwibGVuZ3RoIiwiZWFzZSIsInNjcm9sbFRyaWdnZXIiLCJ0cmlnZ2VyIiwiY3VycmVudCIsInBpbiIsInNjcnViIiwiZW5kIiwicmV2ZXJ0IiwiZGl2IiwicmVmIiwiaWQiLCJjbGFzc05hbWUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwibWFwIiwicHJvamVjdCIsImhyZWYiLCJ1cmwiLCJ0YXJnZXQiLCJzcmMiLCJpbWFnZUxpbmsiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImxvYWRpbmciLCJwIiwicHJvamVjdE5hbWUiLCJzcGFuIiwidGVjaHMiLCJ0ZWNoIiwic291cmNlVXJsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Projects.tsx\n"));

/***/ })

});