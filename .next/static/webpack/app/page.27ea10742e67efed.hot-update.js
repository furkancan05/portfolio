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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap */ \"(app-pages-browser)/./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap/ScrollTrigger */ \"(app-pages-browser)/./node_modules/gsap/ScrollTrigger.js\");\n/* harmony import */ var _components_Globe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/Globe */ \"(app-pages-browser)/./src/components/Globe.tsx\");\n/* harmony import */ var _utils_cn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/utils/cn */ \"(app-pages-browser)/./src/utils/cn.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n// utils\n\ngsap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5__.ScrollTrigger);\nfunction Landing() {\n    _s();\n    const triggerRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    const targetRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    const [visible, setVisible] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(true);\n    // parallax scroll to texts\n    react__WEBPACK_IMPORTED_MODULE_1___default().useLayoutEffect(()=>{\n        const context = gsap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].context(()=>{\n            const timeline = gsap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].timeline({\n                scrollTrigger: {\n                    // @ts-ignore\n                    target: triggerRef.current,\n                    start: \"top bottom\",\n                    end: \"bottom top\",\n                    scrub: true\n                }\n            });\n            timeline.to(targetRef.current, {\n                y: -300\n            }, 0);\n        });\n        return ()=>context.revert();\n    }, []);\n    // changes landing pages z index on scroll\n    // to set footer visible\n    const scrollTrigger = ()=>{\n        if (window.scrollY > 1000) {\n            setVisible(false);\n        } else {\n            setVisible(true);\n        }\n    };\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        window.addEventListener(\"scroll\", ()=>scrollTrigger());\n        return ()=>window.removeEventListener(\"scroll\", ()=>scrollTrigger());\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        ref: triggerRef,\n        id: \"home\",\n        className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_3__.cn)(\"static top-0 bg-black w-full text-white h-screen p-5 z-10 overflow-hidden\", {\n            sticky: visible\n        }),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: targetRef,\n                className: \"max-w-[1200px] h-full mx-auto flex flex-col items-center justify-center overflow-hidden gap-10 md:justify-between md:flex-row md:gap-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col items-center text-center md:text-left md:items-start z-50\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                            className: \"font-semibold text-white/60\",\n                            children: \"Frontend Developer\"\n                        }, void 0, false, {\n                            fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Landing.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-[48px] font-black font-['NF_Ultra'] tracking-[0.3rem]\",\n                            children: \"FURKAN CAN\"\n                        }, void 0, false, {\n                            fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Landing.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"font-semibold text-white/60\",\n                            children: [\n                                \"Hello I am Furkan Can. I`m working as Frontend Developer, \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Landing.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 71\n                                }, this),\n                                \"also Mobile Applications and Web3 Projects.\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Landing.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Landing.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Landing.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \" absolute bottom-10 left-1/2 -translate-x-1/2 text-white font-semibold text-sm mask-image z-50\",\n                children: \"Scroll to explore\"\n            }, void 0, false, {\n                fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Landing.tsx\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Globe__WEBPACK_IMPORTED_MODULE_2__.Globe, {}, void 0, false, {\n                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Landing.tsx\",\n                    lineNumber: 88,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Landing.tsx\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/Landing.tsx\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, this);\n}\n_s(Landing, \"J/N7apE2x6pDRsHqsvK9clwFuRk=\");\n_c = Landing;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Landing);\nvar _c;\n$RefreshReg$(_c, \"Landing\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0xhbmRpbmcudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDMEI7QUFDRjtBQUMyQjtBQUVSO0FBRTNDLFFBQVE7QUFDd0I7QUFFaENDLDRDQUFJQSxDQUFDSSxjQUFjLENBQUNILDZEQUFhQTtBQUVqQyxTQUFTSTs7SUFDUCxNQUFNQyxhQUFhUCxtREFBWSxDQUFpQjtJQUNoRCxNQUFNUyxZQUFZVCxtREFBWSxDQUFpQjtJQUUvQyxNQUFNLENBQUNVLFNBQVNDLFdBQVcsR0FBR1gscURBQWMsQ0FBQztJQUU3QywyQkFBMkI7SUFDM0JBLDREQUFxQixDQUFDO1FBQ3BCLE1BQU1jLFVBQVViLDRDQUFJQSxDQUFDYSxPQUFPLENBQUM7WUFDM0IsTUFBTUMsV0FBV2QsNENBQUlBLENBQUNjLFFBQVEsQ0FBQztnQkFDN0JDLGVBQWU7b0JBQ2IsYUFBYTtvQkFDYkMsUUFBUVYsV0FBV1csT0FBTztvQkFDMUJDLE9BQU87b0JBQ1BDLEtBQUs7b0JBQ0xDLE9BQU87Z0JBQ1Q7WUFDRjtZQUVBTixTQUFTTyxFQUFFLENBQUNiLFVBQVVTLE9BQU8sRUFBRTtnQkFBRUssR0FBRyxDQUFDO1lBQUksR0FBRztRQUM5QztRQUVBLE9BQU8sSUFBTVQsUUFBUVUsTUFBTTtJQUM3QixHQUFHLEVBQUU7SUFFTCwwQ0FBMEM7SUFDMUMsd0JBQXdCO0lBQ3hCLE1BQU1SLGdCQUFnQjtRQUNwQixJQUFJUyxPQUFPQyxPQUFPLEdBQUcsTUFBTTtZQUN6QmYsV0FBVztRQUNiLE9BQU87WUFDTEEsV0FBVztRQUNiO0lBQ0Y7SUFFQVgsc0RBQWUsQ0FBQztRQUNkeUIsT0FBT0csZ0JBQWdCLENBQUMsVUFBVSxJQUFNWjtRQUV4QyxPQUFPLElBQU1TLE9BQU9JLG1CQUFtQixDQUFDLFVBQVUsSUFBTWI7SUFDMUQsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNjO1FBQ0NDLEtBQUt4QjtRQUNMeUIsSUFBRztRQUNIQyxXQUFXN0IsNkNBQUVBLENBQ1gsNkVBQ0E7WUFDRThCLFFBQVF4QjtRQUNWOzswQkFHRiw4REFBQ3lCO2dCQUNDSixLQUFLdEI7Z0JBQ0x3QixXQUFVOzBCQUVWLDRFQUFDRTtvQkFBSUYsV0FBVTs7c0NBQ2IsOERBQUNHOzRCQUFNSCxXQUFVO3NDQUE4Qjs7Ozs7O3NDQUcvQyw4REFBQ0k7NEJBQUdKLFdBQVU7c0NBQTZEOzs7Ozs7c0NBRzNFLDhEQUFDSzs0QkFBRUwsV0FBVTs7Z0NBQThCOzhDQUNpQiw4REFBQ007Ozs7O2dDQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTXRFLDhEQUFDQztnQkFBS1AsV0FBVTswQkFBaUc7Ozs7OzswQkFJakgsOERBQUNFOzBCQUNDLDRFQUFDaEMsb0RBQUtBOzs7Ozs7Ozs7Ozs7Ozs7O0FBSWQ7R0EvRVNHO0tBQUFBO0FBaUZULCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0xhbmRpbmcudHN4P2EwOTQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZ3NhcCBmcm9tIFwiZ3NhcFwiO1xuaW1wb3J0IHsgU2Nyb2xsVHJpZ2dlciB9IGZyb20gXCJnc2FwL1Njcm9sbFRyaWdnZXJcIjtcblxuaW1wb3J0IHsgR2xvYmUgfSBmcm9tIFwifi9jb21wb25lbnRzL0dsb2JlXCI7XG5cbi8vIHV0aWxzXG5pbXBvcnQgeyBjbiB9IGZyb20gXCJ+L3V0aWxzL2NuXCI7XG5cbmdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XG5cbmZ1bmN0aW9uIExhbmRpbmcoKSB7XG4gIGNvbnN0IHRyaWdnZXJSZWYgPSBSZWFjdC51c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCB0YXJnZXRSZWYgPSBSZWFjdC51c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xuXG4gIC8vIHBhcmFsbGF4IHNjcm9sbCB0byB0ZXh0c1xuICBSZWFjdC51c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRleHQgPSBnc2FwLmNvbnRleHQoKCkgPT4ge1xuICAgICAgY29uc3QgdGltZWxpbmUgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICB0YXJnZXQ6IHRyaWdnZXJSZWYuY3VycmVudCxcbiAgICAgICAgICBzdGFydDogXCJ0b3AgYm90dG9tXCIsXG4gICAgICAgICAgZW5kOiBcImJvdHRvbSB0b3BcIixcbiAgICAgICAgICBzY3J1YjogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICB0aW1lbGluZS50byh0YXJnZXRSZWYuY3VycmVudCwgeyB5OiAtMzAwIH0sIDApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuICgpID0+IGNvbnRleHQucmV2ZXJ0KCk7XG4gIH0sIFtdKTtcblxuICAvLyBjaGFuZ2VzIGxhbmRpbmcgcGFnZXMgeiBpbmRleCBvbiBzY3JvbGxcbiAgLy8gdG8gc2V0IGZvb3RlciB2aXNpYmxlXG4gIGNvbnN0IHNjcm9sbFRyaWdnZXIgPSAoKSA9PiB7XG4gICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gMTAwMCkge1xuICAgICAgc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFZpc2libGUodHJ1ZSk7XG4gICAgfVxuICB9O1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4gc2Nyb2xsVHJpZ2dlcigpKTtcblxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiBzY3JvbGxUcmlnZ2VyKCkpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvblxuICAgICAgcmVmPXt0cmlnZ2VyUmVmfVxuICAgICAgaWQ9XCJob21lXCJcbiAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgIFwic3RhdGljIHRvcC0wIGJnLWJsYWNrIHctZnVsbCB0ZXh0LXdoaXRlIGgtc2NyZWVuIHAtNSB6LTEwIG92ZXJmbG93LWhpZGRlblwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RpY2t5OiB2aXNpYmxlLFxuICAgICAgICB9XG4gICAgICApfVxuICAgID5cbiAgICAgIDxkaXZcbiAgICAgICAgcmVmPXt0YXJnZXRSZWZ9XG4gICAgICAgIGNsYXNzTmFtZT1cIm1heC13LVsxMjAwcHhdIGgtZnVsbCBteC1hdXRvIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG92ZXJmbG93LWhpZGRlbiBnYXAtMTAgbWQ6anVzdGlmeS1iZXR3ZWVuIG1kOmZsZXgtcm93IG1kOmdhcC0wXCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlciBtZDp0ZXh0LWxlZnQgbWQ6aXRlbXMtc3RhcnQgei01MFwiPlxuICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtd2hpdGUvNjBcIj5cbiAgICAgICAgICAgIEZyb250ZW5kIERldmVsb3BlclxuICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtWzQ4cHhdIGZvbnQtYmxhY2sgZm9udC1bJ05GX1VsdHJhJ10gdHJhY2tpbmctWzAuM3JlbV1cIj5cbiAgICAgICAgICAgIEZVUktBTiBDQU5cbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZS82MFwiPlxuICAgICAgICAgICAgSGVsbG8gSSBhbSBGdXJrYW4gQ2FuLiBJYG0gd29ya2luZyBhcyBGcm9udGVuZCBEZXZlbG9wZXIsIDxiciAvPlxuICAgICAgICAgICAgYWxzbyBNb2JpbGUgQXBwbGljYXRpb25zIGFuZCBXZWIzIFByb2plY3RzLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiIGFic29sdXRlIGJvdHRvbS0xMCBsZWZ0LTEvMiAtdHJhbnNsYXRlLXgtMS8yIHRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCB0ZXh0LXNtIG1hc2staW1hZ2Ugei01MFwiPlxuICAgICAgICBTY3JvbGwgdG8gZXhwbG9yZVxuICAgICAgPC9zcGFuPlxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8R2xvYmUgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGFuZGluZztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImdzYXAiLCJTY3JvbGxUcmlnZ2VyIiwiR2xvYmUiLCJjbiIsInJlZ2lzdGVyUGx1Z2luIiwiTGFuZGluZyIsInRyaWdnZXJSZWYiLCJ1c2VSZWYiLCJ0YXJnZXRSZWYiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInVzZVN0YXRlIiwidXNlTGF5b3V0RWZmZWN0IiwiY29udGV4dCIsInRpbWVsaW5lIiwic2Nyb2xsVHJpZ2dlciIsInRhcmdldCIsImN1cnJlbnQiLCJzdGFydCIsImVuZCIsInNjcnViIiwidG8iLCJ5IiwicmV2ZXJ0Iiwid2luZG93Iiwic2Nyb2xsWSIsInVzZUVmZmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2VjdGlvbiIsInJlZiIsImlkIiwiY2xhc3NOYW1lIiwic3RpY2t5IiwiZGl2Iiwic21hbGwiLCJoMSIsInAiLCJiciIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Landing.tsx\n"));

/***/ })

});