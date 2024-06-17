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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap */ \"(app-pages-browser)/./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap/ScrollTrigger */ \"(app-pages-browser)/./node_modules/gsap/ScrollTrigger.js\");\n/* harmony import */ var _components_Globe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/Globe */ \"(app-pages-browser)/./src/components/Globe.tsx\");\n/* harmony import */ var _utils_cn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/utils/cn */ \"(app-pages-browser)/./src/utils/cn.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n// utils\n\ngsap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5__.ScrollTrigger);\nfunction Landing() {\n    _s();\n    const triggerRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    const targetRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    const [visible, setVisible] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(true);\n    // parallax scroll to texts\n    react__WEBPACK_IMPORTED_MODULE_1___default().useLayoutEffect(()=>{\n        const context = gsap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].context(()=>{\n            const timeline = gsap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].timeline({\n                scrollTrigger: {\n                    // @ts-ignore\n                    target: triggerRef.current,\n                    start: \"top bottom\",\n                    end: \"bottom top\",\n                    scrub: true\n                }\n            });\n            timeline.to(targetRef.current, {\n                y: -300\n            }, 0);\n        });\n        return ()=>context.revert();\n    }, []);\n    // changes landing pages z index on scroll\n    // to set footer visible\n    const scrollTrigger = ()=>{\n        if (window.scrollY > 1000) {\n            setVisible(false);\n        } else {\n            setVisible(true);\n        }\n    };\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        window.addEventListener(\"scroll\", ()=>scrollTrigger());\n        return ()=>window.removeEventListener(\"scroll\", ()=>scrollTrigger());\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        ref: triggerRef,\n        id: \"home\",\n        className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_3__.cn)(\"fixed top-0 bg-black w-full text-white h-screen p-5 -z-10 overflow-hidden\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: targetRef,\n                className: \"max-w-[1200px] h-full mx-auto flex flex-col items-center justify-center overflow-hidden gap-10 md:justify-between md:flex-row md:gap-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col items-center text-center md:text-left md:items-start z-50\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                            className: \"font-semibold text-white/60\",\n                            children: \"Frontend Developer\"\n                        }, void 0, false, {\n                            fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Landing.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-[48px] font-black font-['NF_Ultra'] tracking-[0.3rem]\",\n                            children: \"FURKAN CAN\"\n                        }, void 0, false, {\n                            fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Landing.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"font-semibold text-white/60\",\n                            children: [\n                                \"Hello I am Furkan Can. I`m working as Frontend Developer, \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Landing.tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 71\n                                }, this),\n                                \"also Mobile Applications and Web3 Projects.\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Landing.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Landing.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Landing.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \" absolute bottom-10 left-1/2 -translate-x-1/2 text-white font-semibold text-sm mask-image z-50\",\n                children: \"Scroll to explore\"\n            }, void 0, false, {\n                fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Landing.tsx\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Globe__WEBPACK_IMPORTED_MODULE_2__.Globe, {}, void 0, false, {\n                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Landing.tsx\",\n                    lineNumber: 85,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Landing.tsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Landing.tsx\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, this);\n}\n_s(Landing, \"J/N7apE2x6pDRsHqsvK9clwFuRk=\");\n_c = Landing;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Landing);\nvar _c;\n$RefreshReg$(_c, \"Landing\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0xhbmRpbmcudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDMEI7QUFDRjtBQUMyQjtBQUVSO0FBRTNDLFFBQVE7QUFDd0I7QUFFaENDLDRDQUFJQSxDQUFDSSxjQUFjLENBQUNILDZEQUFhQTtBQUVqQyxTQUFTSTs7SUFDUCxNQUFNQyxhQUFhUCxtREFBWSxDQUFpQjtJQUNoRCxNQUFNUyxZQUFZVCxtREFBWSxDQUFpQjtJQUUvQyxNQUFNLENBQUNVLFNBQVNDLFdBQVcsR0FBR1gscURBQWMsQ0FBQztJQUU3QywyQkFBMkI7SUFDM0JBLDREQUFxQixDQUFDO1FBQ3BCLE1BQU1jLFVBQVViLDRDQUFJQSxDQUFDYSxPQUFPLENBQUM7WUFDM0IsTUFBTUMsV0FBV2QsNENBQUlBLENBQUNjLFFBQVEsQ0FBQztnQkFDN0JDLGVBQWU7b0JBQ2IsYUFBYTtvQkFDYkMsUUFBUVYsV0FBV1csT0FBTztvQkFDMUJDLE9BQU87b0JBQ1BDLEtBQUs7b0JBQ0xDLE9BQU87Z0JBQ1Q7WUFDRjtZQUVBTixTQUFTTyxFQUFFLENBQUNiLFVBQVVTLE9BQU8sRUFBRTtnQkFBRUssR0FBRyxDQUFDO1lBQUksR0FBRztRQUM5QztRQUVBLE9BQU8sSUFBTVQsUUFBUVUsTUFBTTtJQUM3QixHQUFHLEVBQUU7SUFFTCwwQ0FBMEM7SUFDMUMsd0JBQXdCO0lBQ3hCLE1BQU1SLGdCQUFnQjtRQUNwQixJQUFJUyxPQUFPQyxPQUFPLEdBQUcsTUFBTTtZQUN6QmYsV0FBVztRQUNiLE9BQU87WUFDTEEsV0FBVztRQUNiO0lBQ0Y7SUFFQVgsc0RBQWUsQ0FBQztRQUNkeUIsT0FBT0csZ0JBQWdCLENBQUMsVUFBVSxJQUFNWjtRQUV4QyxPQUFPLElBQU1TLE9BQU9JLG1CQUFtQixDQUFDLFVBQVUsSUFBTWI7SUFDMUQsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNjO1FBQ0NDLEtBQUt4QjtRQUNMeUIsSUFBRztRQUNIQyxXQUFXN0IsNkNBQUVBLENBQ1g7OzBCQUdGLDhEQUFDOEI7Z0JBQ0NILEtBQUt0QjtnQkFDTHdCLFdBQVU7MEJBRVYsNEVBQUNDO29CQUFJRCxXQUFVOztzQ0FDYiw4REFBQ0U7NEJBQU1GLFdBQVU7c0NBQThCOzs7Ozs7c0NBRy9DLDhEQUFDRzs0QkFBR0gsV0FBVTtzQ0FBNkQ7Ozs7OztzQ0FHM0UsOERBQUNJOzRCQUFFSixXQUFVOztnQ0FBOEI7OENBQ2lCLDhEQUFDSzs7Ozs7Z0NBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFNdEUsOERBQUNDO2dCQUFLTixXQUFVOzBCQUFpRzs7Ozs7OzBCQUlqSCw4REFBQ0M7MEJBQ0MsNEVBQUMvQixvREFBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJZDtHQTVFU0c7S0FBQUE7QUE4RVQsK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGFuZGluZy50c3g/YTA5NCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBnc2FwIGZyb20gXCJnc2FwXCI7XG5pbXBvcnQgeyBTY3JvbGxUcmlnZ2VyIH0gZnJvbSBcImdzYXAvU2Nyb2xsVHJpZ2dlclwiO1xuXG5pbXBvcnQgeyBHbG9iZSB9IGZyb20gXCJ+L2NvbXBvbmVudHMvR2xvYmVcIjtcblxuLy8gdXRpbHNcbmltcG9ydCB7IGNuIH0gZnJvbSBcIn4vdXRpbHMvY25cIjtcblxuZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKTtcblxuZnVuY3Rpb24gTGFuZGluZygpIHtcbiAgY29uc3QgdHJpZ2dlclJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IHRhcmdldFJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG5cbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XG5cbiAgLy8gcGFyYWxsYXggc2Nyb2xsIHRvIHRleHRzXG4gIFJlYWN0LnVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY29udGV4dCA9IGdzYXAuY29udGV4dCgoKSA9PiB7XG4gICAgICBjb25zdCB0aW1lbGluZSA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgIHRhcmdldDogdHJpZ2dlclJlZi5jdXJyZW50LFxuICAgICAgICAgIHN0YXJ0OiBcInRvcCBib3R0b21cIixcbiAgICAgICAgICBlbmQ6IFwiYm90dG9tIHRvcFwiLFxuICAgICAgICAgIHNjcnViOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIHRpbWVsaW5lLnRvKHRhcmdldFJlZi5jdXJyZW50LCB7IHk6IC0zMDAgfSwgMCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKCkgPT4gY29udGV4dC5yZXZlcnQoKTtcbiAgfSwgW10pO1xuXG4gIC8vIGNoYW5nZXMgbGFuZGluZyBwYWdlcyB6IGluZGV4IG9uIHNjcm9sbFxuICAvLyB0byBzZXQgZm9vdGVyIHZpc2libGVcbiAgY29uc3Qgc2Nyb2xsVHJpZ2dlciA9ICgpID0+IHtcbiAgICBpZiAod2luZG93LnNjcm9sbFkgPiAxMDAwKSB7XG4gICAgICBzZXRWaXNpYmxlKGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VmlzaWJsZSh0cnVlKTtcbiAgICB9XG4gIH07XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiBzY3JvbGxUcmlnZ2VyKCkpO1xuXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHNjcm9sbFRyaWdnZXIoKSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uXG4gICAgICByZWY9e3RyaWdnZXJSZWZ9XG4gICAgICBpZD1cImhvbWVcIlxuICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgXCJmaXhlZCB0b3AtMCBiZy1ibGFjayB3LWZ1bGwgdGV4dC13aGl0ZSBoLXNjcmVlbiBwLTUgLXotMTAgb3ZlcmZsb3ctaGlkZGVuXCJcbiAgICAgICl9XG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICByZWY9e3RhcmdldFJlZn1cbiAgICAgICAgY2xhc3NOYW1lPVwibWF4LXctWzEyMDBweF0gaC1mdWxsIG14LWF1dG8gZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgb3ZlcmZsb3ctaGlkZGVuIGdhcC0xMCBtZDpqdXN0aWZ5LWJldHdlZW4gbWQ6ZmxleC1yb3cgbWQ6Z2FwLTBcIlxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHRleHQtY2VudGVyIG1kOnRleHQtbGVmdCBtZDppdGVtcy1zdGFydCB6LTUwXCI+XG4gICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZS82MFwiPlxuICAgICAgICAgICAgRnJvbnRlbmQgRGV2ZWxvcGVyXG4gICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1bNDhweF0gZm9udC1ibGFjayBmb250LVsnTkZfVWx0cmEnXSB0cmFja2luZy1bMC4zcmVtXVwiPlxuICAgICAgICAgICAgRlVSS0FOIENBTlxuICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlLzYwXCI+XG4gICAgICAgICAgICBIZWxsbyBJIGFtIEZ1cmthbiBDYW4uIElgbSB3b3JraW5nIGFzIEZyb250ZW5kIERldmVsb3BlciwgPGJyIC8+XG4gICAgICAgICAgICBhbHNvIE1vYmlsZSBBcHBsaWNhdGlvbnMgYW5kIFdlYjMgUHJvamVjdHMuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCIgYWJzb2x1dGUgYm90dG9tLTEwIGxlZnQtMS8yIC10cmFuc2xhdGUteC0xLzIgdGV4dC13aGl0ZSBmb250LXNlbWlib2xkIHRleHQtc20gbWFzay1pbWFnZSB6LTUwXCI+XG4gICAgICAgIFNjcm9sbCB0byBleHBsb3JlXG4gICAgICA8L3NwYW4+XG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxHbG9iZSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMYW5kaW5nO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiZ3NhcCIsIlNjcm9sbFRyaWdnZXIiLCJHbG9iZSIsImNuIiwicmVnaXN0ZXJQbHVnaW4iLCJMYW5kaW5nIiwidHJpZ2dlclJlZiIsInVzZVJlZiIsInRhcmdldFJlZiIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidXNlU3RhdGUiLCJ1c2VMYXlvdXRFZmZlY3QiLCJjb250ZXh0IiwidGltZWxpbmUiLCJzY3JvbGxUcmlnZ2VyIiwidGFyZ2V0IiwiY3VycmVudCIsInN0YXJ0IiwiZW5kIiwic2NydWIiLCJ0byIsInkiLCJyZXZlcnQiLCJ3aW5kb3ciLCJzY3JvbGxZIiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZWN0aW9uIiwicmVmIiwiaWQiLCJjbGFzc05hbWUiLCJkaXYiLCJzbWFsbCIsImgxIiwicCIsImJyIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Landing.tsx\n"));

/***/ })

});