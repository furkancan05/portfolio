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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LetsTalk; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emailjs/browser */ \"(app-pages-browser)/./node_modules/@emailjs/browser/es/index.js\");\n/* harmony import */ var _components_shared_Section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/components/shared/Section */ \"(app-pages-browser)/./src/components/shared/Section.tsx\");\n/* harmony import */ var _components_shared_Title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/components/shared/Title */ \"(app-pages-browser)/./src/components/shared/Title.tsx\");\n/* harmony import */ var _components_shared_Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/components/shared/Input */ \"(app-pages-browser)/./src/components/shared/Input.tsx\");\n/* harmony import */ var _config_social__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/config/social */ \"(app-pages-browser)/./src/config/social.ts\");\n/* harmony import */ var _shared_Icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/Icons */ \"(app-pages-browser)/./src/components/shared/Icons.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n// components\n\n\n\n// config\n\n\nfunction LetsTalk() {\n    _s();\n    const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const [success, setSuccess] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const [error, setError] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const [inputs, setInputs] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({\n        fullName: \"\",\n        email: \"\",\n        message: \"\"\n    });\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        setLoading(true);\n        const response = await _emailjs_browser__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sendForm(\"service_49woq7j\", \"template_tcgpbkq\", JSON.stringify(inputs), {\n            publicKey: \"Pg-SlRkGVEmk-JPL_\"\n        });\n        if (response.status !== 200) {\n            setError(true);\n            setLoading(false);\n        }\n        setSuccess(true);\n        setLoading(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n        className: \"fixed bottom-0 w-full h-screen -z-20\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Section__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            id: \"contact\",\n            background: \"black\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Title__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    title: \"Contact\",\n                    description: \"Lets Talk\",\n                    descClassName: \"text-white/10\"\n                }, void 0, false, {\n                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col items-center justify-between gap-10 sm:flex-row\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex-1 font-extrabold leading-[50px] sm:leading-[75px] uppercase text-center sm:text-left\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-lg sm:text-[max(max(12px,2.5vw))]\",\n                                    children: \"Lets build together\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-[40px] sm:text-[max(max(24px,4.5vw))]\",\n                                    children: \"something\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-[48px] text-primary sm:text-[max(max(24px,5.5vw))]\",\n                                    children: \"COOL\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            className: \"flex flex-col gap-4 flex-1 min-w-[300px] max-w-[450px] font-bold bg-black/20 rounded-md px-10 py-5 border border-white/20\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Input__WEBPACK_IMPORTED_MODULE_6__.Input, {\n                                    label: \"Full Name\",\n                                    name: \"fullName\",\n                                    placeholder: \"Enter your full name\",\n                                    value: inputs.fullName,\n                                    onChange: (e)=>setInputs({\n                                            ...inputs,\n                                            fullName: e.target.value\n                                        })\n                                }, void 0, false, {\n                                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Input__WEBPACK_IMPORTED_MODULE_6__.Input, {\n                                    label: \"Email\",\n                                    name: \"email\",\n                                    placeholder: \"Enter your email\",\n                                    value: inputs.email,\n                                    onChange: (e)=>setInputs({\n                                            ...inputs,\n                                            email: e.target.value\n                                        })\n                                }, void 0, false, {\n                                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Input__WEBPACK_IMPORTED_MODULE_6__.TextArea, {\n                                    label: \"Message\",\n                                    name: \"message\",\n                                    placeholder: \"Enter your message\",\n                                    value: inputs.message,\n                                    onChange: (e)=>setInputs({\n                                            ...inputs,\n                                            message: e.target.value\n                                        })\n                                }, void 0, false, {\n                                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    disabled: !inputs.email || !inputs.fullName || !inputs.message,\n                                    onClick: handleSubmit,\n                                    className: \"text-lg bg-primary/90 rounded-full py-3 w-full hover:bg-primary transition-colors disabled:bg-primary/20 disabled:text-white/50\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-fit mx-auto animate-spin\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_Icons__WEBPACK_IMPORTED_MODULE_8__.Loader, {}, void 0, false, {\n                                            fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                                            lineNumber: 106,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                                        lineNumber: 105,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                                    lineNumber: 99,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full flex justify-center gap-4 py-4 border-t border-t-solid border-t-white/20 mt-8 sm:absolute left-0 bottom-0 sm:mt-0\",\n                    children: _config_social__WEBPACK_IMPORTED_MODULE_7__.Social.map((social)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            href: social.link,\n                            target: \"_blank\",\n                            className: \"text-sm font-semibold hover:text-primary transition-colors\",\n                            children: social.name\n                        }, social.name, false, {\n                            fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                            lineNumber: 116,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                    lineNumber: 114,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n            lineNumber: 51,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this);\n}\n_s(LetsTalk, \"8f5TydTgK0mgLbUmKGVPeel0PsU=\");\n_c = LetsTalk;\nvar _c;\n$RefreshReg$(_c, \"LetsTalk\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0xldHNUYWxrLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBRTBCO0FBQ0c7QUFDVTtBQUV2QyxhQUFhO0FBQ3FDO0FBQ0o7QUFDYztBQUU1RCxTQUFTO0FBQ2dDO0FBQ0Q7QUFFekIsU0FBU1M7O0lBQ3RCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHWCxxREFBYyxDQUFDO0lBQzdDLE1BQU0sQ0FBQ2EsU0FBU0MsV0FBVyxHQUFHZCxxREFBYyxDQUFDO0lBQzdDLE1BQU0sQ0FBQ2UsT0FBT0MsU0FBUyxHQUFHaEIscURBQWMsQ0FBQztJQUV6QyxNQUFNLENBQUNpQixRQUFRQyxVQUFVLEdBQUdsQixxREFBYyxDQUFDO1FBQ3pDbUIsVUFBVTtRQUNWQyxPQUFPO1FBQ1BDLFNBQVM7SUFDWDtJQUVBLE1BQU1DLGVBQWUsT0FBT0M7UUFDMUJBLEVBQUVDLGNBQWM7UUFDaEJiLFdBQVc7UUFFWCxNQUFNYyxXQUFXLE1BQU12QixpRUFBZ0IsQ0FDckMsbUJBQ0Esb0JBQ0F5QixLQUFLQyxTQUFTLENBQUNYLFNBQ2Y7WUFDRVksV0FBVztRQUNiO1FBR0YsSUFBSUosU0FBU0ssTUFBTSxLQUFLLEtBQUs7WUFDM0JkLFNBQVM7WUFDVEwsV0FBVztRQUNiO1FBRUFHLFdBQVc7UUFDWEgsV0FBVztJQUNiO0lBRUEscUJBQ0UsOERBQUNvQjtRQUFPQyxXQUFVO2tCQUNoQiw0RUFBQzdCLGtFQUFPQTtZQUFDOEIsSUFBRztZQUFVQyxZQUFXOzs4QkFDL0IsOERBQUM5QixnRUFBS0E7b0JBQ0orQixPQUFNO29CQUNOQyxhQUFZO29CQUNaQyxlQUFjOzs7Ozs7OEJBR2hCLDhEQUFDQztvQkFBSU4sV0FBVTs7c0NBQ2IsOERBQUNNOzRCQUFJTixXQUFVOzs4Q0FDYiw4REFBQ087b0NBQUVQLFdBQVU7OENBQXlDOzs7Ozs7OENBR3RELDhEQUFDTztvQ0FBRVAsV0FBVTs4Q0FBNkM7Ozs7Ozs4Q0FHMUQsOERBQUNPO29DQUFFUCxXQUFVOzhDQUEwRDs7Ozs7Ozs7Ozs7O3NDQUt6RSw4REFBQ1E7NEJBQUtSLFdBQVU7OzhDQUNkLDhEQUFDM0IsMkRBQUtBO29DQUNKb0MsT0FBTTtvQ0FDTkMsTUFBSztvQ0FDTEMsYUFBWTtvQ0FDWkMsT0FBTzNCLE9BQU9FLFFBQVE7b0NBQ3RCMEIsVUFBVSxDQUFDdEIsSUFDVEwsVUFBVTs0Q0FBRSxHQUFHRCxNQUFNOzRDQUFFRSxVQUFVSSxFQUFFdUIsTUFBTSxDQUFDRixLQUFLO3dDQUFDOzs7Ozs7OENBR3BELDhEQUFDdkMsMkRBQUtBO29DQUNKb0MsT0FBTTtvQ0FDTkMsTUFBSztvQ0FDTEMsYUFBWTtvQ0FDWkMsT0FBTzNCLE9BQU9HLEtBQUs7b0NBQ25CeUIsVUFBVSxDQUFDdEIsSUFBTUwsVUFBVTs0Q0FBRSxHQUFHRCxNQUFNOzRDQUFFRyxPQUFPRyxFQUFFdUIsTUFBTSxDQUFDRixLQUFLO3dDQUFDOzs7Ozs7OENBR2hFLDhEQUFDdEMsOERBQVFBO29DQUNQbUMsT0FBTTtvQ0FDTkMsTUFBSztvQ0FDTEMsYUFBWTtvQ0FDWkMsT0FBTzNCLE9BQU9JLE9BQU87b0NBQ3JCd0IsVUFBVSxDQUFDdEIsSUFDVEwsVUFBVTs0Q0FBRSxHQUFHRCxNQUFNOzRDQUFFSSxTQUFTRSxFQUFFdUIsTUFBTSxDQUFDRixLQUFLO3dDQUFDOzs7Ozs7OENBSW5ELDhEQUFDRztvQ0FDQ0MsTUFBSztvQ0FDTEMsVUFBVSxDQUFDaEMsT0FBT0csS0FBSyxJQUFJLENBQUNILE9BQU9FLFFBQVEsSUFBSSxDQUFDRixPQUFPSSxPQUFPO29DQUM5RDZCLFNBQVM1QjtvQ0FDVFUsV0FBVTs4Q0FFViw0RUFBQ007d0NBQUlOLFdBQVU7a0RBQ2IsNEVBQUN4QixpREFBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFRZiw4REFBQzhCO29CQUFJTixXQUFVOzhCQUNaekIsa0RBQU1BLENBQUM0QyxHQUFHLENBQUMsQ0FBQ0MsdUJBQ1gsOERBQUNuRCxpREFBSUE7NEJBRUhvRCxNQUFNRCxPQUFPRSxJQUFJOzRCQUNqQlIsUUFBTzs0QkFDUGQsV0FBVTtzQ0FFVG9CLE9BQU9WLElBQUk7MkJBTFBVLE9BQU9WLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVk5QjtHQWpId0JqQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9MZXRzVGFsay50c3g/NGM3NyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IGVtYWlsanMgZnJvbSBcIkBlbWFpbGpzL2Jyb3dzZXJcIjtcblxuLy8gY29tcG9uZW50c1xuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIn4vY29tcG9uZW50cy9zaGFyZWQvU2VjdGlvblwiO1xuaW1wb3J0IFRpdGxlIGZyb20gXCJ+L2NvbXBvbmVudHMvc2hhcmVkL1RpdGxlXCI7XG5pbXBvcnQgeyBJbnB1dCwgVGV4dEFyZWEgfSBmcm9tIFwifi9jb21wb25lbnRzL3NoYXJlZC9JbnB1dFwiO1xuXG4vLyBjb25maWdcbmltcG9ydCB7IFNvY2lhbCB9IGZyb20gXCJ+L2NvbmZpZy9zb2NpYWxcIjtcbmltcG9ydCB7IExvYWRlciB9IGZyb20gXCIuL3NoYXJlZC9JY29uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMZXRzVGFsaygpIHtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc3VjY2Vzcywgc2V0U3VjY2Vzc10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IFtpbnB1dHMsIHNldElucHV0c10gPSBSZWFjdC51c2VTdGF0ZSh7XG4gICAgZnVsbE5hbWU6IFwiXCIsXG4gICAgZW1haWw6IFwiXCIsXG4gICAgbWVzc2FnZTogXCJcIixcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGU6IFJlYWN0LkZvcm1FdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZW1haWxqcy5zZW5kRm9ybShcbiAgICAgIFwic2VydmljZV80OXdvcTdqXCIsXG4gICAgICBcInRlbXBsYXRlX3RjZ3Bia3FcIixcbiAgICAgIEpTT04uc3RyaW5naWZ5KGlucHV0cyksXG4gICAgICB7XG4gICAgICAgIHB1YmxpY0tleTogXCJQZy1TbFJrR1ZFbWstSlBMX1wiLFxuICAgICAgfVxuICAgICk7XG5cbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHtcbiAgICAgIHNldEVycm9yKHRydWUpO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfVxuXG4gICAgc2V0U3VjY2Vzcyh0cnVlKTtcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiZml4ZWQgYm90dG9tLTAgdy1mdWxsIGgtc2NyZWVuIC16LTIwXCI+XG4gICAgICA8U2VjdGlvbiBpZD1cImNvbnRhY3RcIiBiYWNrZ3JvdW5kPVwiYmxhY2tcIj5cbiAgICAgICAgPFRpdGxlXG4gICAgICAgICAgdGl0bGU9XCJDb250YWN0XCJcbiAgICAgICAgICBkZXNjcmlwdGlvbj1cIkxldHMgVGFsa1wiXG4gICAgICAgICAgZGVzY0NsYXNzTmFtZT1cInRleHQtd2hpdGUvMTBcIlxuICAgICAgICAvPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC0xMCBzbTpmbGV4LXJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZvbnQtZXh0cmFib2xkIGxlYWRpbmctWzUwcHhdIHNtOmxlYWRpbmctWzc1cHhdIHVwcGVyY2FzZSB0ZXh0LWNlbnRlciBzbTp0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgc206dGV4dC1bbWF4KG1heCgxMnB4LDIuNXZ3KSldXCI+XG4gICAgICAgICAgICAgIExldHMgYnVpbGQgdG9nZXRoZXJcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzQwcHhdIHNtOnRleHQtW21heChtYXgoMjRweCw0LjV2dykpXVwiPlxuICAgICAgICAgICAgICBzb21ldGhpbmdcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzQ4cHhdIHRleHQtcHJpbWFyeSBzbTp0ZXh0LVttYXgobWF4KDI0cHgsNS41dncpKV1cIj5cbiAgICAgICAgICAgICAgQ09PTFxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtNCBmbGV4LTEgbWluLXctWzMwMHB4XSBtYXgtdy1bNDUwcHhdIGZvbnQtYm9sZCBiZy1ibGFjay8yMCByb3VuZGVkLW1kIHB4LTEwIHB5LTUgYm9yZGVyIGJvcmRlci13aGl0ZS8yMFwiPlxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgIGxhYmVsPVwiRnVsbCBOYW1lXCJcbiAgICAgICAgICAgICAgbmFtZT1cImZ1bGxOYW1lXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGZ1bGwgbmFtZVwiXG4gICAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMuZnVsbE5hbWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICBzZXRJbnB1dHMoeyAuLi5pbnB1dHMsIGZ1bGxOYW1lOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgIGxhYmVsPVwiRW1haWxcIlxuICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgZW1haWxcIlxuICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRzLmVtYWlsfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldElucHV0cyh7IC4uLmlucHV0cywgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPFRleHRBcmVhXG4gICAgICAgICAgICAgIGxhYmVsPVwiTWVzc2FnZVwiXG4gICAgICAgICAgICAgIG5hbWU9XCJtZXNzYWdlXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIG1lc3NhZ2VcIlxuICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRzLm1lc3NhZ2V9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICBzZXRJbnB1dHMoeyAuLi5pbnB1dHMsIG1lc3NhZ2U6IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgIGRpc2FibGVkPXshaW5wdXRzLmVtYWlsIHx8ICFpbnB1dHMuZnVsbE5hbWUgfHwgIWlucHV0cy5tZXNzYWdlfVxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbGcgYmctcHJpbWFyeS85MCByb3VuZGVkLWZ1bGwgcHktMyB3LWZ1bGwgaG92ZXI6YmctcHJpbWFyeSB0cmFuc2l0aW9uLWNvbG9ycyBkaXNhYmxlZDpiZy1wcmltYXJ5LzIwIGRpc2FibGVkOnRleHQtd2hpdGUvNTBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZml0IG14LWF1dG8gYW5pbWF0ZS1zcGluXCI+XG4gICAgICAgICAgICAgICAgPExvYWRlciAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgey8qIHtsb2FkaW5nID8gXCJTZW5kaW5nXCIgOiBlcnJvciA/IFwiVHJ5IGxhdGVyXCIgOiBcIlNlbnRcIn0gKi99XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBzb2NpYWwgbGlua3MgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXIgZ2FwLTQgcHktNCBib3JkZXItdCBib3JkZXItdC1zb2xpZCBib3JkZXItdC13aGl0ZS8yMCBtdC04IHNtOmFic29sdXRlIGxlZnQtMCBib3R0b20tMCBzbTptdC0wXCI+XG4gICAgICAgICAge1NvY2lhbC5tYXAoKHNvY2lhbCkgPT4gKFxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAga2V5PXtzb2NpYWwubmFtZX1cbiAgICAgICAgICAgICAgaHJlZj17c29jaWFsLmxpbmt9XG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1zZW1pYm9sZCBob3Zlcjp0ZXh0LXByaW1hcnkgdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7c29jaWFsLm5hbWV9XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9TZWN0aW9uPlxuICAgIDwvZm9vdGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsImVtYWlsanMiLCJTZWN0aW9uIiwiVGl0bGUiLCJJbnB1dCIsIlRleHRBcmVhIiwiU29jaWFsIiwiTG9hZGVyIiwiTGV0c1RhbGsiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVzZVN0YXRlIiwic3VjY2VzcyIsInNldFN1Y2Nlc3MiLCJlcnJvciIsInNldEVycm9yIiwiaW5wdXRzIiwic2V0SW5wdXRzIiwiZnVsbE5hbWUiLCJlbWFpbCIsIm1lc3NhZ2UiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJyZXNwb25zZSIsInNlbmRGb3JtIiwiSlNPTiIsInN0cmluZ2lmeSIsInB1YmxpY0tleSIsInN0YXR1cyIsImZvb3RlciIsImNsYXNzTmFtZSIsImlkIiwiYmFja2dyb3VuZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJkZXNjQ2xhc3NOYW1lIiwiZGl2IiwicCIsImZvcm0iLCJsYWJlbCIsIm5hbWUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJidXR0b24iLCJ0eXBlIiwiZGlzYWJsZWQiLCJvbkNsaWNrIiwibWFwIiwic29jaWFsIiwiaHJlZiIsImxpbmsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/LetsTalk.tsx\n"));

/***/ })

});