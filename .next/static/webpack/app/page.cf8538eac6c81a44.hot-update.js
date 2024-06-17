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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap */ \"(app-pages-browser)/./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap/ScrollTrigger */ \"(app-pages-browser)/./node_modules/gsap/ScrollTrigger.js\");\n/* harmony import */ var _components_Globe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/Globe */ \"(app-pages-browser)/./src/components/Globe.tsx\");\n/* harmony import */ var _utils_cn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/utils/cn */ \"(app-pages-browser)/./src/utils/cn.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n// utils\n\ngsap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5__.ScrollTrigger);\nfunction Landing() {\n    _s();\n    const triggerRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    const targetRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    const [visible, setVisible] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(true);\n    // parallax scroll to texts\n    react__WEBPACK_IMPORTED_MODULE_1___default().useLayoutEffect(()=>{\n        const context = gsap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].context(()=>{\n            const timeline = gsap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].timeline({\n                scrollTrigger: {\n                    // @ts-ignore\n                    target: triggerRef.current,\n                    start: \"top bottom\",\n                    end: \"bottom top\",\n                    scrub: true\n                }\n            });\n            timeline.to(targetRef.current, {\n                y: -300\n            }, 0);\n        });\n        return ()=>context.revert();\n    }, []);\n    // changes landing pages z index on scroll\n    // to set footer visible\n    const scrollTrigger = ()=>{\n        if (window.scrollY > 1000) {\n            setVisible(false);\n        } else {\n            setVisible(true);\n        }\n    };\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        window.addEventListener(\"scroll\", ()=>scrollTrigger());\n        return ()=>window.removeEventListener(\"scroll\", ()=>scrollTrigger());\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        ref: triggerRef,\n        id: \"home\",\n        className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_3__.cn)(\"fixed top-0 bg-black w-full text-white h-screen p-5 -z-20 overflow-hidden\", {\n            \"-z-10\": visible\n        }),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: targetRef,\n                className: \"max-w-[1200px] h-full mx-auto flex flex-col items-center justify-center overflow-hidden gap-10 md:justify-between md:flex-row md:gap-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col items-center text-center md:text-left md:items-start z-50\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                            className: \"font-semibold text-white/60\",\n                            children: \"Frontend Developer\"\n                        }, void 0, false, {\n                            fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Landing.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-[48px] font-black font-['NF_Ultra'] tracking-[0.3rem]\",\n                            children: \"FURKAN CAN\"\n                        }, void 0, false, {\n                            fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Landing.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"font-semibold text-white/60\",\n                            children: [\n                                \"Hello I am Furkan Can. I`m working as Frontend Developer, \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Landing.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 71\n                                }, this),\n                                \"also Mobile Applications and Web3 Projects.\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Landing.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Landing.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Landing.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_3__.cn)(\"visible absolute bottom-10 left-1/2 -translate-x-1/2 text-white font-semibold text-sm mask-image z-50\", {\n                    hidden: !visible\n                }),\n                children: \"Scroll to explore\"\n            }, void 0, false, {\n                fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Landing.tsx\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_3__.cn)(\"-z-10\", {\n                    \"-z-30\": !visible\n                }),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Globe__WEBPACK_IMPORTED_MODULE_2__.Globe, {}, void 0, false, {\n                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Landing.tsx\",\n                    lineNumber: 93,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Landing.tsx\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Landing.tsx\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, this);\n}\n_s(Landing, \"J/N7apE2x6pDRsHqsvK9clwFuRk=\");\n_c = Landing;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Landing);\nvar _c;\n$RefreshReg$(_c, \"Landing\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0xhbmRpbmcudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDMEI7QUFDRjtBQUMyQjtBQUVSO0FBRTNDLFFBQVE7QUFDd0I7QUFFaENDLDRDQUFJQSxDQUFDSSxjQUFjLENBQUNILDZEQUFhQTtBQUVqQyxTQUFTSTs7SUFDUCxNQUFNQyxhQUFhUCxtREFBWSxDQUFpQjtJQUNoRCxNQUFNUyxZQUFZVCxtREFBWSxDQUFpQjtJQUUvQyxNQUFNLENBQUNVLFNBQVNDLFdBQVcsR0FBR1gscURBQWMsQ0FBQztJQUU3QywyQkFBMkI7SUFDM0JBLDREQUFxQixDQUFDO1FBQ3BCLE1BQU1jLFVBQVViLDRDQUFJQSxDQUFDYSxPQUFPLENBQUM7WUFDM0IsTUFBTUMsV0FBV2QsNENBQUlBLENBQUNjLFFBQVEsQ0FBQztnQkFDN0JDLGVBQWU7b0JBQ2IsYUFBYTtvQkFDYkMsUUFBUVYsV0FBV1csT0FBTztvQkFDMUJDLE9BQU87b0JBQ1BDLEtBQUs7b0JBQ0xDLE9BQU87Z0JBQ1Q7WUFDRjtZQUVBTixTQUFTTyxFQUFFLENBQUNiLFVBQVVTLE9BQU8sRUFBRTtnQkFBRUssR0FBRyxDQUFDO1lBQUksR0FBRztRQUM5QztRQUVBLE9BQU8sSUFBTVQsUUFBUVUsTUFBTTtJQUM3QixHQUFHLEVBQUU7SUFFTCwwQ0FBMEM7SUFDMUMsd0JBQXdCO0lBQ3hCLE1BQU1SLGdCQUFnQjtRQUNwQixJQUFJUyxPQUFPQyxPQUFPLEdBQUcsTUFBTTtZQUN6QmYsV0FBVztRQUNiLE9BQU87WUFDTEEsV0FBVztRQUNiO0lBQ0Y7SUFFQVgsc0RBQWUsQ0FBQztRQUNkeUIsT0FBT0csZ0JBQWdCLENBQUMsVUFBVSxJQUFNWjtRQUV4QyxPQUFPLElBQU1TLE9BQU9JLG1CQUFtQixDQUFDLFVBQVUsSUFBTWI7SUFDMUQsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNjO1FBQ0NDLEtBQUt4QjtRQUNMeUIsSUFBRztRQUNIQyxXQUFXN0IsNkNBQUVBLENBQ1gsNkVBQ0E7WUFDRSxTQUFTTTtRQUNYOzswQkFHRiw4REFBQ3dCO2dCQUNDSCxLQUFLdEI7Z0JBQ0x3QixXQUFVOzBCQUVWLDRFQUFDQztvQkFBSUQsV0FBVTs7c0NBQ2IsOERBQUNFOzRCQUFNRixXQUFVO3NDQUE4Qjs7Ozs7O3NDQUcvQyw4REFBQ0c7NEJBQUdILFdBQVU7c0NBQTZEOzs7Ozs7c0NBRzNFLDhEQUFDSTs0QkFBRUosV0FBVTs7Z0NBQThCOzhDQUNpQiw4REFBQ0s7Ozs7O2dDQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTXRFLDhEQUFDQztnQkFDQ04sV0FBVzdCLDZDQUFFQSxDQUNYLHlHQUNBO29CQUFFb0MsUUFBUSxDQUFDOUI7Z0JBQVE7MEJBRXRCOzs7Ozs7MEJBSUQsOERBQUN3QjtnQkFBSUQsV0FBVzdCLDZDQUFFQSxDQUFDLFNBQVM7b0JBQUUsU0FBUyxDQUFDTTtnQkFBUTswQkFDOUMsNEVBQUNQLG9EQUFLQTs7Ozs7Ozs7Ozs7Ozs7OztBQUlkO0dBcEZTRztLQUFBQTtBQXNGVCwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9MYW5kaW5nLnRzeD9hMDk0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGdzYXAgZnJvbSBcImdzYXBcIjtcbmltcG9ydCB7IFNjcm9sbFRyaWdnZXIgfSBmcm9tIFwiZ3NhcC9TY3JvbGxUcmlnZ2VyXCI7XG5cbmltcG9ydCB7IEdsb2JlIH0gZnJvbSBcIn4vY29tcG9uZW50cy9HbG9iZVwiO1xuXG4vLyB1dGlsc1xuaW1wb3J0IHsgY24gfSBmcm9tIFwifi91dGlscy9jblwiO1xuXG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xuXG5mdW5jdGlvbiBMYW5kaW5nKCkge1xuICBjb25zdCB0cmlnZ2VyUmVmID0gUmVhY3QudXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcbiAgY29uc3QgdGFyZ2V0UmVmID0gUmVhY3QudXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcblxuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcblxuICAvLyBwYXJhbGxheCBzY3JvbGwgdG8gdGV4dHNcbiAgUmVhY3QudXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjb250ZXh0ID0gZ3NhcC5jb250ZXh0KCgpID0+IHtcbiAgICAgIGNvbnN0IHRpbWVsaW5lID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgdGFyZ2V0OiB0cmlnZ2VyUmVmLmN1cnJlbnQsXG4gICAgICAgICAgc3RhcnQ6IFwidG9wIGJvdHRvbVwiLFxuICAgICAgICAgIGVuZDogXCJib3R0b20gdG9wXCIsXG4gICAgICAgICAgc2NydWI6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgdGltZWxpbmUudG8odGFyZ2V0UmVmLmN1cnJlbnQsIHsgeTogLTMwMCB9LCAwKTtcbiAgICB9KTtcblxuICAgIHJldHVybiAoKSA9PiBjb250ZXh0LnJldmVydCgpO1xuICB9LCBbXSk7XG5cbiAgLy8gY2hhbmdlcyBsYW5kaW5nIHBhZ2VzIHogaW5kZXggb24gc2Nyb2xsXG4gIC8vIHRvIHNldCBmb290ZXIgdmlzaWJsZVxuICBjb25zdCBzY3JvbGxUcmlnZ2VyID0gKCkgPT4ge1xuICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IDEwMDApIHtcbiAgICAgIHNldFZpc2libGUoZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRWaXNpYmxlKHRydWUpO1xuICAgIH1cbiAgfTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHNjcm9sbFRyaWdnZXIoKSk7XG5cbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4gc2Nyb2xsVHJpZ2dlcigpKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb25cbiAgICAgIHJlZj17dHJpZ2dlclJlZn1cbiAgICAgIGlkPVwiaG9tZVwiXG4gICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICBcImZpeGVkIHRvcC0wIGJnLWJsYWNrIHctZnVsbCB0ZXh0LXdoaXRlIGgtc2NyZWVuIHAtNSAtei0yMCBvdmVyZmxvdy1oaWRkZW5cIixcbiAgICAgICAge1xuICAgICAgICAgIFwiLXotMTBcIjogdmlzaWJsZSxcbiAgICAgICAgfVxuICAgICAgKX1cbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgIHJlZj17dGFyZ2V0UmVmfVxuICAgICAgICBjbGFzc05hbWU9XCJtYXgtdy1bMTIwMHB4XSBoLWZ1bGwgbXgtYXV0byBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBvdmVyZmxvdy1oaWRkZW4gZ2FwLTEwIG1kOmp1c3RpZnktYmV0d2VlbiBtZDpmbGV4LXJvdyBtZDpnYXAtMFwiXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXIgbWQ6dGV4dC1sZWZ0IG1kOml0ZW1zLXN0YXJ0IHotNTBcIj5cbiAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlLzYwXCI+XG4gICAgICAgICAgICBGcm9udGVuZCBEZXZlbG9wZXJcbiAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LVs0OHB4XSBmb250LWJsYWNrIGZvbnQtWydORl9VbHRyYSddIHRyYWNraW5nLVswLjNyZW1dXCI+XG4gICAgICAgICAgICBGVVJLQU4gQ0FOXG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtd2hpdGUvNjBcIj5cbiAgICAgICAgICAgIEhlbGxvIEkgYW0gRnVya2FuIENhbi4gSWBtIHdvcmtpbmcgYXMgRnJvbnRlbmQgRGV2ZWxvcGVyLCA8YnIgLz5cbiAgICAgICAgICAgIGFsc28gTW9iaWxlIEFwcGxpY2F0aW9ucyBhbmQgV2ViMyBQcm9qZWN0cy5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzcGFuXG4gICAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgICAgXCJ2aXNpYmxlIGFic29sdXRlIGJvdHRvbS0xMCBsZWZ0LTEvMiAtdHJhbnNsYXRlLXgtMS8yIHRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCB0ZXh0LXNtIG1hc2staW1hZ2Ugei01MFwiLFxuICAgICAgICAgIHsgaGlkZGVuOiAhdmlzaWJsZSB9XG4gICAgICAgICl9XG4gICAgICA+XG4gICAgICAgIFNjcm9sbCB0byBleHBsb3JlXG4gICAgICA8L3NwYW4+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbihcIi16LTEwXCIsIHsgXCItei0zMFwiOiAhdmlzaWJsZSB9KX0+XG4gICAgICAgIDxHbG9iZSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMYW5kaW5nO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiZ3NhcCIsIlNjcm9sbFRyaWdnZXIiLCJHbG9iZSIsImNuIiwicmVnaXN0ZXJQbHVnaW4iLCJMYW5kaW5nIiwidHJpZ2dlclJlZiIsInVzZVJlZiIsInRhcmdldFJlZiIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidXNlU3RhdGUiLCJ1c2VMYXlvdXRFZmZlY3QiLCJjb250ZXh0IiwidGltZWxpbmUiLCJzY3JvbGxUcmlnZ2VyIiwidGFyZ2V0IiwiY3VycmVudCIsInN0YXJ0IiwiZW5kIiwic2NydWIiLCJ0byIsInkiLCJyZXZlcnQiLCJ3aW5kb3ciLCJzY3JvbGxZIiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZWN0aW9uIiwicmVmIiwiaWQiLCJjbGFzc05hbWUiLCJkaXYiLCJzbWFsbCIsImgxIiwicCIsImJyIiwic3BhbiIsImhpZGRlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Landing.tsx\n"));

/***/ })

});