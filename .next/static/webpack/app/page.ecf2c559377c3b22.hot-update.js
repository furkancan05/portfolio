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

/***/ "(app-pages-browser)/./src/components/LetsTalk.tsx":
/*!*************************************!*\
  !*** ./src/components/LetsTalk.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LetsTalk; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emailjs/browser */ \"(app-pages-browser)/./node_modules/@emailjs/browser/es/index.js\");\n/* harmony import */ var _components_shared_Section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/components/shared/Section */ \"(app-pages-browser)/./src/components/shared/Section.tsx\");\n/* harmony import */ var _components_shared_Title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/components/shared/Title */ \"(app-pages-browser)/./src/components/shared/Title.tsx\");\n/* harmony import */ var _components_shared_Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/components/shared/Input */ \"(app-pages-browser)/./src/components/shared/Input.tsx\");\n/* harmony import */ var _config_social__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/config/social */ \"(app-pages-browser)/./src/config/social.ts\");\n/* harmony import */ var _shared_Icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/Icons */ \"(app-pages-browser)/./src/components/shared/Icons.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n// components\n\n\n\n// config\n\n\nfunction LetsTalk() {\n    _s();\n    const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const [buttonText, setButtonText] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"Send\");\n    // const [inputs, setInputs] = React.useState({\n    //   fullName: \"\",\n    //   email: \"\",\n    //   message: \"\",\n    // });\n    const handleSubmit = async (e)=>{\n        if (!e) return;\n        e.preventDefault();\n        setLoading(true);\n        try {\n            await _emailjs_browser__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sendForm(\"service_49woq7j\", \"template_tcgpbkq\", e.currentTarget, {\n                publicKey: \"Pg-SlRkGVEmk-JPL_\"\n            });\n            setButtonText(\"Sent!\");\n            setLoading(false);\n            setTimeout(()=>setButtonText(\"Send\"), 2000);\n        } catch (e) {\n            console.log(e);\n            setButtonText(\"Sorry! An error occured.\");\n            setLoading(false);\n            setTimeout(()=>setButtonText(\"Send\"), 2000);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n        className: \"fixed bottom-0 w-full h-screen -z-20\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Section__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            id: \"contact\",\n            background: \"black\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Title__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    title: \"Contact\",\n                    description: \"Lets Talk\",\n                    descClassName: \"text-white/10\"\n                }, void 0, false, {\n                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col items-center justify-between gap-10 sm:flex-row\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex-1 font-extrabold leading-[50px] sm:leading-[75px] uppercase text-center sm:text-left\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-lg sm:text-[max(max(12px,2.5vw))]\",\n                                    children: \"Lets build together\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-[40px] sm:text-[max(max(24px,4.5vw))]\",\n                                    children: \"something\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-[48px] text-primary sm:text-[max(max(24px,5.5vw))]\",\n                                    children: \"COOL\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: (e)=>handleSubmit(e),\n                            className: \"flex flex-col gap-4 flex-1 min-w-[300px] max-w-[450px] font-bold bg-black/20 rounded-md px-10 py-5 border border-white/20\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Input__WEBPACK_IMPORTED_MODULE_6__.Input, {\n                                    label: \"Full Name\",\n                                    name: \"fullName\",\n                                    placeholder: \"Enter your full name\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Input__WEBPACK_IMPORTED_MODULE_6__.Input, {\n                                    label: \"Email\",\n                                    name: \"email\",\n                                    placeholder: \"Enter your email\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Input__WEBPACK_IMPORTED_MODULE_6__.TextArea, {\n                                    label: \"Message\",\n                                    name: \"message\",\n                                    placeholder: \"Enter your message\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                                    lineNumber: 100,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    // disabled={\n                                    //   !inputs.email || !inputs.fullName || !inputs.message || loading\n                                    // }\n                                    className: \"text-lg bg-primary/90 rounded-full py-3 w-full hover:bg-primary transition-colors disabled:bg-primary/20 disabled:text-white/50\",\n                                    children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-fit mx-auto animate-spin\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_Icons__WEBPACK_IMPORTED_MODULE_8__.Loader, {}, void 0, false, {\n                                            fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                                            lineNumber: 119,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                                        lineNumber: 118,\n                                        columnNumber: 17\n                                    }, this) : buttonText\n                                }, void 0, false, {\n                                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                                    lineNumber: 110,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full flex justify-center gap-4 py-4 border-t border-t-solid border-t-white/20 mt-8 sm:absolute left-0 bottom-0 sm:mt-0\",\n                    children: _config_social__WEBPACK_IMPORTED_MODULE_7__.Social.map((social)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            href: social.link,\n                            target: \"_blank\",\n                            className: \"text-sm font-semibold hover:text-primary transition-colors\",\n                            children: social.name\n                        }, social.name, false, {\n                            fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                            lineNumber: 131,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                    lineNumber: 129,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n            lineNumber: 59,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, this);\n}\n_s(LetsTalk, \"u0bVfXhh5GnzmVdiP4CYZ3Q8v74=\");\n_c = LetsTalk;\nvar _c;\n$RefreshReg$(_c, \"LetsTalk\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0xldHNUYWxrLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBRTBCO0FBQ0c7QUFDVTtBQUV2QyxhQUFhO0FBQ3FDO0FBQ0o7QUFDYztBQUU1RCxTQUFTO0FBQ2dDO0FBQ0Q7QUFFekIsU0FBU1M7O0lBQ3RCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHWCxxREFBYyxDQUFDO0lBQzdDLE1BQU0sQ0FBQ2EsWUFBWUMsY0FBYyxHQUFHZCxxREFBYyxDQUFDO0lBRW5ELCtDQUErQztJQUMvQyxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixNQUFNO0lBRU4sTUFBTWUsZUFBZSxPQUNuQkM7UUFFQSxJQUFJLENBQUNBLEdBQUc7UUFFUkEsRUFBRUMsY0FBYztRQUNoQk4sV0FBVztRQUVYLElBQUk7WUFDRixNQUFNVCxpRUFBZ0IsQ0FDcEIsbUJBQ0Esb0JBQ0FjLEVBQUVHLGFBQWEsRUFDZjtnQkFDRUMsV0FBVztZQUNiO1lBR0ZOLGNBQWM7WUFDZEgsV0FBVztZQUVYVSxXQUFXLElBQU1QLGNBQWMsU0FBUztRQUMxQyxFQUFFLE9BQU9FLEdBQUc7WUFDVk0sUUFBUUMsR0FBRyxDQUFDUDtZQUNaRixjQUFjO1lBQ2RILFdBQVc7WUFFWFUsV0FBVyxJQUFNUCxjQUFjLFNBQVM7UUFDMUM7SUFDRjtJQUVBLHFCQUNFLDhEQUFDVTtRQUFPQyxXQUFVO2tCQUNoQiw0RUFBQ3RCLGtFQUFPQTtZQUFDdUIsSUFBRztZQUFVQyxZQUFXOzs4QkFDL0IsOERBQUN2QixnRUFBS0E7b0JBQ0p3QixPQUFNO29CQUNOQyxhQUFZO29CQUNaQyxlQUFjOzs7Ozs7OEJBR2hCLDhEQUFDQztvQkFBSU4sV0FBVTs7c0NBQ2IsOERBQUNNOzRCQUFJTixXQUFVOzs4Q0FDYiw4REFBQ087b0NBQUVQLFdBQVU7OENBQXlDOzs7Ozs7OENBR3RELDhEQUFDTztvQ0FBRVAsV0FBVTs4Q0FBNkM7Ozs7Ozs4Q0FHMUQsOERBQUNPO29DQUFFUCxXQUFVOzhDQUEwRDs7Ozs7Ozs7Ozs7O3NDQUt6RSw4REFBQ1E7NEJBQ0NDLFVBQVUsQ0FBQ2xCLElBQU1ELGFBQWFDOzRCQUM5QlMsV0FBVTs7OENBRVYsOERBQUNwQiwyREFBS0E7b0NBQ0o4QixPQUFNO29DQUNOQyxNQUFLO29DQUNMQyxhQUFZOzs7Ozs7OENBTWQsOERBQUNoQywyREFBS0E7b0NBQ0o4QixPQUFNO29DQUNOQyxNQUFLO29DQUNMQyxhQUFZOzs7Ozs7OENBS2QsOERBQUMvQiw4REFBUUE7b0NBQ1A2QixPQUFNO29DQUNOQyxNQUFLO29DQUNMQyxhQUFZOzs7Ozs7OENBT2QsOERBQUNDO29DQUNDQyxNQUFLO29DQUNMLGFBQWE7b0NBQ2Isb0VBQW9FO29DQUNwRSxJQUFJO29DQUNKZCxXQUFVOzhDQUVUZix3QkFDQyw4REFBQ3FCO3dDQUFJTixXQUFVO2tEQUNiLDRFQUFDakIsaURBQU1BOzs7Ozs7Ozs7K0NBR1RLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBT1IsOERBQUNrQjtvQkFBSU4sV0FBVTs4QkFDWmxCLGtEQUFNQSxDQUFDaUMsR0FBRyxDQUFDLENBQUNDLHVCQUNYLDhEQUFDeEMsaURBQUlBOzRCQUVIeUMsTUFBTUQsT0FBT0UsSUFBSTs0QkFDakJDLFFBQU87NEJBQ1BuQixXQUFVO3NDQUVUZ0IsT0FBT0wsSUFBSTsyQkFMUEssT0FBT0wsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWTlCO0dBaEl3QjNCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0xldHNUYWxrLnRzeD80Yzc3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgZW1haWxqcyBmcm9tIFwiQGVtYWlsanMvYnJvd3NlclwiO1xuXG4vLyBjb21wb25lbnRzXG5pbXBvcnQgU2VjdGlvbiBmcm9tIFwifi9jb21wb25lbnRzL3NoYXJlZC9TZWN0aW9uXCI7XG5pbXBvcnQgVGl0bGUgZnJvbSBcIn4vY29tcG9uZW50cy9zaGFyZWQvVGl0bGVcIjtcbmltcG9ydCB7IElucHV0LCBUZXh0QXJlYSB9IGZyb20gXCJ+L2NvbXBvbmVudHMvc2hhcmVkL0lucHV0XCI7XG5cbi8vIGNvbmZpZ1xuaW1wb3J0IHsgU29jaWFsIH0gZnJvbSBcIn4vY29uZmlnL3NvY2lhbFwiO1xuaW1wb3J0IHsgTG9hZGVyIH0gZnJvbSBcIi4vc2hhcmVkL0ljb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExldHNUYWxrKCkge1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtidXR0b25UZXh0LCBzZXRCdXR0b25UZXh0XSA9IFJlYWN0LnVzZVN0YXRlKFwiU2VuZFwiKTtcblxuICAvLyBjb25zdCBbaW5wdXRzLCBzZXRJbnB1dHNdID0gUmVhY3QudXNlU3RhdGUoe1xuICAvLyAgIGZ1bGxOYW1lOiBcIlwiLFxuICAvLyAgIGVtYWlsOiBcIlwiLFxuICAvLyAgIG1lc3NhZ2U6IFwiXCIsXG4gIC8vIH0pO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChcbiAgICBlOiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PiB8IHVuZGVmaW5lZFxuICApID0+IHtcbiAgICBpZiAoIWUpIHJldHVybjtcblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGVtYWlsanMuc2VuZEZvcm0oXG4gICAgICAgIFwic2VydmljZV80OXdvcTdqXCIsXG4gICAgICAgIFwidGVtcGxhdGVfdGNncGJrcVwiLFxuICAgICAgICBlLmN1cnJlbnRUYXJnZXQsXG4gICAgICAgIHtcbiAgICAgICAgICBwdWJsaWNLZXk6IFwiUGctU2xSa0dWRW1rLUpQTF9cIixcbiAgICAgICAgfVxuICAgICAgKTtcblxuICAgICAgc2V0QnV0dG9uVGV4dChcIlNlbnQhXCIpO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0QnV0dG9uVGV4dChcIlNlbmRcIiksIDIwMDApO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgc2V0QnV0dG9uVGV4dChcIlNvcnJ5ISBBbiBlcnJvciBvY2N1cmVkLlwiKTtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHNldEJ1dHRvblRleHQoXCJTZW5kXCIpLCAyMDAwKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImZpeGVkIGJvdHRvbS0wIHctZnVsbCBoLXNjcmVlbiAtei0yMFwiPlxuICAgICAgPFNlY3Rpb24gaWQ9XCJjb250YWN0XCIgYmFja2dyb3VuZD1cImJsYWNrXCI+XG4gICAgICAgIDxUaXRsZVxuICAgICAgICAgIHRpdGxlPVwiQ29udGFjdFwiXG4gICAgICAgICAgZGVzY3JpcHRpb249XCJMZXRzIFRhbGtcIlxuICAgICAgICAgIGRlc2NDbGFzc05hbWU9XCJ0ZXh0LXdoaXRlLzEwXCJcbiAgICAgICAgLz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBnYXAtMTAgc206ZmxleC1yb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmb250LWV4dHJhYm9sZCBsZWFkaW5nLVs1MHB4XSBzbTpsZWFkaW5nLVs3NXB4XSB1cHBlcmNhc2UgdGV4dC1jZW50ZXIgc206dGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIHNtOnRleHQtW21heChtYXgoMTJweCwyLjV2dykpXVwiPlxuICAgICAgICAgICAgICBMZXRzIGJ1aWxkIHRvZ2V0aGVyXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVs0MHB4XSBzbTp0ZXh0LVttYXgobWF4KDI0cHgsNC41dncpKV1cIj5cbiAgICAgICAgICAgICAgc29tZXRoaW5nXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVs0OHB4XSB0ZXh0LXByaW1hcnkgc206dGV4dC1bbWF4KG1heCgyNHB4LDUuNXZ3KSldXCI+XG4gICAgICAgICAgICAgIENPT0xcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICBvblN1Ym1pdD17KGUpID0+IGhhbmRsZVN1Ym1pdChlKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTQgZmxleC0xIG1pbi13LVszMDBweF0gbWF4LXctWzQ1MHB4XSBmb250LWJvbGQgYmctYmxhY2svMjAgcm91bmRlZC1tZCBweC0xMCBweS01IGJvcmRlciBib3JkZXItd2hpdGUvMjBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICBsYWJlbD1cIkZ1bGwgTmFtZVwiXG4gICAgICAgICAgICAgIG5hbWU9XCJmdWxsTmFtZVwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBmdWxsIG5hbWVcIlxuICAgICAgICAgICAgICAvLyB2YWx1ZT17aW5wdXRzLmZ1bGxOYW1lfVxuICAgICAgICAgICAgICAvLyBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgIC8vICAgc2V0SW5wdXRzKHsgLi4uaW5wdXRzLCBmdWxsTmFtZTogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCJcbiAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGVtYWlsXCJcbiAgICAgICAgICAgICAgLy8gdmFsdWU9e2lucHV0cy5lbWFpbH1cbiAgICAgICAgICAgICAgLy8gb25DaGFuZ2U9eyhlKSA9PiBzZXRJbnB1dHMoeyAuLi5pbnB1dHMsIGVtYWlsOiBlLnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxUZXh0QXJlYVxuICAgICAgICAgICAgICBsYWJlbD1cIk1lc3NhZ2VcIlxuICAgICAgICAgICAgICBuYW1lPVwibWVzc2FnZVwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBtZXNzYWdlXCJcbiAgICAgICAgICAgICAgLy8gdmFsdWU9e2lucHV0cy5tZXNzYWdlfVxuICAgICAgICAgICAgICAvLyBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgIC8vICAgc2V0SW5wdXRzKHsgLi4uaW5wdXRzLCBtZXNzYWdlOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAvLyBkaXNhYmxlZD17XG4gICAgICAgICAgICAgIC8vICAgIWlucHV0cy5lbWFpbCB8fCAhaW5wdXRzLmZ1bGxOYW1lIHx8ICFpbnB1dHMubWVzc2FnZSB8fCBsb2FkaW5nXG4gICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1sZyBiZy1wcmltYXJ5LzkwIHJvdW5kZWQtZnVsbCBweS0zIHctZnVsbCBob3ZlcjpiZy1wcmltYXJ5IHRyYW5zaXRpb24tY29sb3JzIGRpc2FibGVkOmJnLXByaW1hcnkvMjAgZGlzYWJsZWQ6dGV4dC13aGl0ZS81MFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1maXQgbXgtYXV0byBhbmltYXRlLXNwaW5cIj5cbiAgICAgICAgICAgICAgICAgIDxMb2FkZXIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBzb2NpYWwgbGlua3MgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXIgZ2FwLTQgcHktNCBib3JkZXItdCBib3JkZXItdC1zb2xpZCBib3JkZXItdC13aGl0ZS8yMCBtdC04IHNtOmFic29sdXRlIGxlZnQtMCBib3R0b20tMCBzbTptdC0wXCI+XG4gICAgICAgICAge1NvY2lhbC5tYXAoKHNvY2lhbCkgPT4gKFxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAga2V5PXtzb2NpYWwubmFtZX1cbiAgICAgICAgICAgICAgaHJlZj17c29jaWFsLmxpbmt9XG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1zZW1pYm9sZCBob3Zlcjp0ZXh0LXByaW1hcnkgdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7c29jaWFsLm5hbWV9XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9TZWN0aW9uPlxuICAgIDwvZm9vdGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsImVtYWlsanMiLCJTZWN0aW9uIiwiVGl0bGUiLCJJbnB1dCIsIlRleHRBcmVhIiwiU29jaWFsIiwiTG9hZGVyIiwiTGV0c1RhbGsiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVzZVN0YXRlIiwiYnV0dG9uVGV4dCIsInNldEJ1dHRvblRleHQiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzZW5kRm9ybSIsImN1cnJlbnRUYXJnZXQiLCJwdWJsaWNLZXkiLCJzZXRUaW1lb3V0IiwiY29uc29sZSIsImxvZyIsImZvb3RlciIsImNsYXNzTmFtZSIsImlkIiwiYmFja2dyb3VuZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJkZXNjQ2xhc3NOYW1lIiwiZGl2IiwicCIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwibmFtZSIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwidHlwZSIsIm1hcCIsInNvY2lhbCIsImhyZWYiLCJsaW5rIiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/LetsTalk.tsx\n"));

/***/ })

});