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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LetsTalk; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emailjs/browser */ \"(app-pages-browser)/./node_modules/@emailjs/browser/es/index.js\");\n/* harmony import */ var _components_shared_Section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/components/shared/Section */ \"(app-pages-browser)/./src/components/shared/Section.tsx\");\n/* harmony import */ var _components_shared_Title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/components/shared/Title */ \"(app-pages-browser)/./src/components/shared/Title.tsx\");\n/* harmony import */ var _components_shared_Icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/components/shared/Icons */ \"(app-pages-browser)/./src/components/shared/Icons.tsx\");\n/* harmony import */ var _components_shared_Input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/components/shared/Input */ \"(app-pages-browser)/./src/components/shared/Input.tsx\");\n/* harmony import */ var _config_social__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/config/social */ \"(app-pages-browser)/./src/config/social.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n// components\n\n\n\n\n// config\n\nfunction LetsTalk() {\n    _s();\n    const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const [disabledButton, setDisabledButton] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(true);\n    const [buttonText, setButtonText] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"Send\");\n    const formRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    // enable send button if all areas are fill\n    const checkDisabled = ()=>{\n        if (!formRef || !formRef.current) return setDisabledButton(true);\n        const fullName = formRef.current[0];\n        const email = formRef.current[1];\n        const message = formRef.current[2];\n        // @ts-ignore // kalkacak\n        if (!!fullName.value && !!email.value && !!message.value) {\n            setDisabledButton(false);\n        } else {\n            setDisabledButton(true);\n        }\n    };\n    // send email function\n    const handleSubmit = async (e)=>{\n        if (!e) return;\n        e.preventDefault();\n        setLoading(true);\n        try {\n            await _emailjs_browser__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sendForm(\"service_49woq7j\", \"template_tcgpbkq\", e.currentTarget, {\n                publicKey: \"Pg-SlRkGVEmk-JPL_\"\n            });\n            setButtonText(\"Sent!\");\n            setLoading(false);\n            setTimeout(()=>setButtonText(\"Send\"), 2000);\n        } catch (e) {\n            setButtonText(\"Sorry! An error occured.\");\n            setLoading(false);\n            setTimeout(()=>setButtonText(\"Send\"), 2000);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n        className: \"fixed bottom-0 w-full h-screen -z-20\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Section__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            id: \"contact\",\n            background: \"black\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Title__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    title: \"Contact\",\n                    description: \"Lets Talk\",\n                    descClassName: \"text-white/10\"\n                }, void 0, false, {\n                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col items-center justify-between gap-10 sm:flex-row\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex-1 font-extrabold leading-[50px] sm:leading-[75px] uppercase text-center sm:text-left\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-lg sm:text-[max(max(12px,2.5vw))]\",\n                                    children: \"Lets build together\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-[40px] sm:text-[max(max(24px,4.5vw))]\",\n                                    children: \"something\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-[48px] text-primary sm:text-[max(max(24px,5.5vw))]\",\n                                    children: \"COOL\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                                    lineNumber: 87,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            ref: formRef,\n                            onSubmit: (e)=>handleSubmit(e),\n                            className: \"flex flex-col gap-4 flex-1 min-w-[300px] max-w-[450px] font-bold bg-black/20 rounded-md px-10 py-5 border border-white/20\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Input__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                                    label: \"Full Name\",\n                                    name: \"fullName\",\n                                    placeholder: \"John Doe\",\n                                    required: true,\n                                    onChange: checkDisabled\n                                }, void 0, false, {\n                                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Input__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                                    label: \"Email\",\n                                    name: \"email\",\n                                    placeholder: \"johndoe@email.com\",\n                                    onChange: checkDisabled\n                                }, void 0, false, {\n                                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                                    lineNumber: 104,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Input__WEBPACK_IMPORTED_MODULE_7__.TextArea, {\n                                    label: \"Message\",\n                                    name: \"message\",\n                                    placeholder: \"Hello, Mr. Furkan...\",\n                                    onChange: checkDisabled\n                                }, void 0, false, {\n                                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                                    lineNumber: 111,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    disabled: disabledButton || loading,\n                                    className: \"text-lg bg-primary/90 rounded-full py-3 w-full hover:bg-primary transition-colors disabled:bg-primary/20 disabled:text-white/50\",\n                                    children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-fit mx-auto animate-spin\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Icons__WEBPACK_IMPORTED_MODULE_6__.Loader, {}, void 0, false, {\n                                            fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                                            lineNumber: 125,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                                        lineNumber: 124,\n                                        columnNumber: 17\n                                    }, this) : buttonText\n                                }, void 0, false, {\n                                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                                    lineNumber: 118,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full flex justify-center gap-4 py-4 border-t border-t-solid border-t-white/20 mt-8 sm:absolute left-0 bottom-0 sm:mt-0\",\n                    children: _config_social__WEBPACK_IMPORTED_MODULE_8__.Social.map((social)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            href: social.link,\n                            target: \"_blank\",\n                            className: \"text-sm font-semibold hover:text-primary transition-colors\",\n                            children: social.name\n                        }, social.name, false, {\n                            fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                            lineNumber: 137,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                    lineNumber: 135,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n            lineNumber: 72,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n        lineNumber: 71,\n        columnNumber: 5\n    }, this);\n}\n_s(LetsTalk, \"RsoG3lyyum2UWf/g3bv/93Qvc4k=\");\n_c = LetsTalk;\nvar _c;\n$RefreshReg$(_c, \"LetsTalk\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0xldHNUYWxrLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBRTBCO0FBQ0c7QUFDVTtBQUV2QyxhQUFhO0FBQ3FDO0FBQ0o7QUFDSztBQUNTO0FBRTVELFNBQVM7QUFDZ0M7QUFFMUIsU0FBU1M7O0lBQ3RCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHWCxxREFBYyxDQUFDO0lBQzdDLE1BQU0sQ0FBQ2EsZ0JBQWdCQyxrQkFBa0IsR0FBR2QscURBQWMsQ0FBQztJQUMzRCxNQUFNLENBQUNlLFlBQVlDLGNBQWMsR0FBR2hCLHFEQUFjLENBQUM7SUFFbkQsTUFBTWlCLFVBQVVqQixtREFBWSxDQUFrQjtJQUU5QywyQ0FBMkM7SUFDM0MsTUFBTW1CLGdCQUFnQjtRQUNwQixJQUFJLENBQUNGLFdBQVcsQ0FBQ0EsUUFBUUcsT0FBTyxFQUFFLE9BQU9OLGtCQUFrQjtRQUUzRCxNQUFNTyxXQUFXSixRQUFRRyxPQUFPLENBQUMsRUFBRTtRQUNuQyxNQUFNRSxRQUFRTCxRQUFRRyxPQUFPLENBQUMsRUFBRTtRQUNoQyxNQUFNRyxVQUFVTixRQUFRRyxPQUFPLENBQUMsRUFBRTtRQUVsQyx5QkFBeUI7UUFDekIsSUFBSSxDQUFDLENBQUNDLFNBQVNHLEtBQUssSUFBSSxDQUFDLENBQUNGLE1BQU1FLEtBQUssSUFBSSxDQUFDLENBQUNELFFBQVFDLEtBQUssRUFBRTtZQUN4RFYsa0JBQWtCO1FBQ3BCLE9BQU87WUFDTEEsa0JBQWtCO1FBQ3BCO0lBQ0Y7SUFFQSxzQkFBc0I7SUFDdEIsTUFBTVcsZUFBZSxPQUNuQkM7UUFFQSxJQUFJLENBQUNBLEdBQUc7UUFFUkEsRUFBRUMsY0FBYztRQUNoQmhCLFdBQVc7UUFFWCxJQUFJO1lBQ0YsTUFBTVQsaUVBQWdCLENBQ3BCLG1CQUNBLG9CQUNBd0IsRUFBRUcsYUFBYSxFQUNmO2dCQUNFQyxXQUFXO1lBQ2I7WUFHRmQsY0FBYztZQUNkTCxXQUFXO1lBRVhvQixXQUFXLElBQU1mLGNBQWMsU0FBUztRQUMxQyxFQUFFLFVBQU07WUFDTkEsY0FBYztZQUNkTCxXQUFXO1lBRVhvQixXQUFXLElBQU1mLGNBQWMsU0FBUztRQUMxQztJQUNGO0lBRUEscUJBQ0UsOERBQUNnQjtRQUFPQyxXQUFVO2tCQUNoQiw0RUFBQzlCLGtFQUFPQTtZQUFDK0IsSUFBRztZQUFVQyxZQUFXOzs4QkFDL0IsOERBQUMvQixnRUFBS0E7b0JBQ0pnQyxPQUFNO29CQUNOQyxhQUFZO29CQUNaQyxlQUFjOzs7Ozs7OEJBR2hCLDhEQUFDQztvQkFBSU4sV0FBVTs7c0NBQ2IsOERBQUNNOzRCQUFJTixXQUFVOzs4Q0FDYiw4REFBQ087b0NBQUVQLFdBQVU7OENBQXlDOzs7Ozs7OENBR3RELDhEQUFDTztvQ0FBRVAsV0FBVTs4Q0FBNkM7Ozs7Ozs4Q0FHMUQsOERBQUNPO29DQUFFUCxXQUFVOzhDQUEwRDs7Ozs7Ozs7Ozs7O3NDQUt6RSw4REFBQ1E7NEJBQ0NDLEtBQUt6Qjs0QkFDTDBCLFVBQVUsQ0FBQ2pCLElBQU1ELGFBQWFDOzRCQUM5Qk8sV0FBVTs7OENBRVYsOERBQUMzQiwyREFBS0E7b0NBQ0pzQyxPQUFNO29DQUNOQyxNQUFLO29DQUNMQyxhQUFZO29DQUNaQyxRQUFRO29DQUNSQyxVQUFVN0I7Ozs7Ozs4Q0FFWiw4REFBQ2IsMkRBQUtBO29DQUNKc0MsT0FBTTtvQ0FDTkMsTUFBSztvQ0FDTEMsYUFBWTtvQ0FDWkUsVUFBVTdCOzs7Ozs7OENBR1osOERBQUNaLDhEQUFRQTtvQ0FDUHFDLE9BQU07b0NBQ05DLE1BQUs7b0NBQ0xDLGFBQVk7b0NBQ1pFLFVBQVU3Qjs7Ozs7OzhDQUdaLDhEQUFDOEI7b0NBQ0NDLE1BQUs7b0NBQ0xDLFVBQVV0QyxrQkFBa0JIO29DQUM1QnVCLFdBQVU7OENBRVR2Qix3QkFDQyw4REFBQzZCO3dDQUFJTixXQUFVO2tEQUNiLDRFQUFDNUIsNERBQU1BOzs7Ozs7Ozs7K0NBR1RVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBT1IsOERBQUN3QjtvQkFBSU4sV0FBVTs4QkFDWnpCLGtEQUFNQSxDQUFDNEMsR0FBRyxDQUFDLENBQUNDLHVCQUNYLDhEQUFDcEQsaURBQUlBOzRCQUVIcUQsTUFBTUQsT0FBT0UsSUFBSTs0QkFDakJDLFFBQU87NEJBQ1B2QixXQUFVO3NDQUVUb0IsT0FBT1IsSUFBSTsyQkFMUFEsT0FBT1IsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWTlCO0dBdEl3QnBDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0xldHNUYWxrLnRzeD80Yzc3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgZW1haWxqcyBmcm9tIFwiQGVtYWlsanMvYnJvd3NlclwiO1xuXG4vLyBjb21wb25lbnRzXG5pbXBvcnQgU2VjdGlvbiBmcm9tIFwifi9jb21wb25lbnRzL3NoYXJlZC9TZWN0aW9uXCI7XG5pbXBvcnQgVGl0bGUgZnJvbSBcIn4vY29tcG9uZW50cy9zaGFyZWQvVGl0bGVcIjtcbmltcG9ydCB7IExvYWRlciB9IGZyb20gXCJ+L2NvbXBvbmVudHMvc2hhcmVkL0ljb25zXCI7XG5pbXBvcnQgeyBJbnB1dCwgVGV4dEFyZWEgfSBmcm9tIFwifi9jb21wb25lbnRzL3NoYXJlZC9JbnB1dFwiO1xuXG4vLyBjb25maWdcbmltcG9ydCB7IFNvY2lhbCB9IGZyb20gXCJ+L2NvbmZpZy9zb2NpYWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGV0c1RhbGsoKSB7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Rpc2FibGVkQnV0dG9uLCBzZXREaXNhYmxlZEJ1dHRvbl0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2J1dHRvblRleHQsIHNldEJ1dHRvblRleHRdID0gUmVhY3QudXNlU3RhdGUoXCJTZW5kXCIpO1xuXG4gIGNvbnN0IGZvcm1SZWYgPSBSZWFjdC51c2VSZWY8SFRNTEZvcm1FbGVtZW50PihudWxsKTtcblxuICAvLyBlbmFibGUgc2VuZCBidXR0b24gaWYgYWxsIGFyZWFzIGFyZSBmaWxsXG4gIGNvbnN0IGNoZWNrRGlzYWJsZWQgPSAoKSA9PiB7XG4gICAgaWYgKCFmb3JtUmVmIHx8ICFmb3JtUmVmLmN1cnJlbnQpIHJldHVybiBzZXREaXNhYmxlZEJ1dHRvbih0cnVlKTtcblxuICAgIGNvbnN0IGZ1bGxOYW1lID0gZm9ybVJlZi5jdXJyZW50WzBdO1xuICAgIGNvbnN0IGVtYWlsID0gZm9ybVJlZi5jdXJyZW50WzFdO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBmb3JtUmVmLmN1cnJlbnRbMl07XG5cbiAgICAvLyBAdHMtaWdub3JlIC8vIGthbGthY2FrXG4gICAgaWYgKCEhZnVsbE5hbWUudmFsdWUgJiYgISFlbWFpbC52YWx1ZSAmJiAhIW1lc3NhZ2UudmFsdWUpIHtcbiAgICAgIHNldERpc2FibGVkQnV0dG9uKGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RGlzYWJsZWRCdXR0b24odHJ1ZSk7XG4gICAgfVxuICB9O1xuXG4gIC8vIHNlbmQgZW1haWwgZnVuY3Rpb25cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKFxuICAgIGU6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+IHwgdW5kZWZpbmVkXG4gICkgPT4ge1xuICAgIGlmICghZSkgcmV0dXJuO1xuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG5cbiAgICB0cnkge1xuICAgICAgYXdhaXQgZW1haWxqcy5zZW5kRm9ybShcbiAgICAgICAgXCJzZXJ2aWNlXzQ5d29xN2pcIixcbiAgICAgICAgXCJ0ZW1wbGF0ZV90Y2dwYmtxXCIsXG4gICAgICAgIGUuY3VycmVudFRhcmdldCxcbiAgICAgICAge1xuICAgICAgICAgIHB1YmxpY0tleTogXCJQZy1TbFJrR1ZFbWstSlBMX1wiLFxuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICBzZXRCdXR0b25UZXh0KFwiU2VudCFcIik7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRCdXR0b25UZXh0KFwiU2VuZFwiKSwgMjAwMCk7XG4gICAgfSBjYXRjaCB7XG4gICAgICBzZXRCdXR0b25UZXh0KFwiU29ycnkhIEFuIGVycm9yIG9jY3VyZWQuXCIpO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0QnV0dG9uVGV4dChcIlNlbmRcIiksIDIwMDApO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiZml4ZWQgYm90dG9tLTAgdy1mdWxsIGgtc2NyZWVuIC16LTIwXCI+XG4gICAgICA8U2VjdGlvbiBpZD1cImNvbnRhY3RcIiBiYWNrZ3JvdW5kPVwiYmxhY2tcIj5cbiAgICAgICAgPFRpdGxlXG4gICAgICAgICAgdGl0bGU9XCJDb250YWN0XCJcbiAgICAgICAgICBkZXNjcmlwdGlvbj1cIkxldHMgVGFsa1wiXG4gICAgICAgICAgZGVzY0NsYXNzTmFtZT1cInRleHQtd2hpdGUvMTBcIlxuICAgICAgICAvPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC0xMCBzbTpmbGV4LXJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZvbnQtZXh0cmFib2xkIGxlYWRpbmctWzUwcHhdIHNtOmxlYWRpbmctWzc1cHhdIHVwcGVyY2FzZSB0ZXh0LWNlbnRlciBzbTp0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgc206dGV4dC1bbWF4KG1heCgxMnB4LDIuNXZ3KSldXCI+XG4gICAgICAgICAgICAgIExldHMgYnVpbGQgdG9nZXRoZXJcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzQwcHhdIHNtOnRleHQtW21heChtYXgoMjRweCw0LjV2dykpXVwiPlxuICAgICAgICAgICAgICBzb21ldGhpbmdcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzQ4cHhdIHRleHQtcHJpbWFyeSBzbTp0ZXh0LVttYXgobWF4KDI0cHgsNS41dncpKV1cIj5cbiAgICAgICAgICAgICAgQ09PTFxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgIHJlZj17Zm9ybVJlZn1cbiAgICAgICAgICAgIG9uU3VibWl0PXsoZSkgPT4gaGFuZGxlU3VibWl0KGUpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtNCBmbGV4LTEgbWluLXctWzMwMHB4XSBtYXgtdy1bNDUwcHhdIGZvbnQtYm9sZCBiZy1ibGFjay8yMCByb3VuZGVkLW1kIHB4LTEwIHB5LTUgYm9yZGVyIGJvcmRlci13aGl0ZS8yMFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgIGxhYmVsPVwiRnVsbCBOYW1lXCJcbiAgICAgICAgICAgICAgbmFtZT1cImZ1bGxOYW1lXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJKb2huIERvZVwiXG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtjaGVja0Rpc2FibGVkfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCJcbiAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJqb2huZG9lQGVtYWlsLmNvbVwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtjaGVja0Rpc2FibGVkfVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPFRleHRBcmVhXG4gICAgICAgICAgICAgIGxhYmVsPVwiTWVzc2FnZVwiXG4gICAgICAgICAgICAgIG5hbWU9XCJtZXNzYWdlXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJIZWxsbywgTXIuIEZ1cmthbi4uLlwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtjaGVja0Rpc2FibGVkfVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkQnV0dG9uIHx8IGxvYWRpbmd9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbGcgYmctcHJpbWFyeS85MCByb3VuZGVkLWZ1bGwgcHktMyB3LWZ1bGwgaG92ZXI6YmctcHJpbWFyeSB0cmFuc2l0aW9uLWNvbG9ycyBkaXNhYmxlZDpiZy1wcmltYXJ5LzIwIGRpc2FibGVkOnRleHQtd2hpdGUvNTBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7bG9hZGluZyA/IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZml0IG14LWF1dG8gYW5pbWF0ZS1zcGluXCI+XG4gICAgICAgICAgICAgICAgICA8TG9hZGVyIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dFxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7Lyogc29jaWFsIGxpbmtzICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyIGdhcC00IHB5LTQgYm9yZGVyLXQgYm9yZGVyLXQtc29saWQgYm9yZGVyLXQtd2hpdGUvMjAgbXQtOCBzbTphYnNvbHV0ZSBsZWZ0LTAgYm90dG9tLTAgc206bXQtMFwiPlxuICAgICAgICAgIHtTb2NpYWwubWFwKChzb2NpYWwpID0+IChcbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIGtleT17c29jaWFsLm5hbWV9XG4gICAgICAgICAgICAgIGhyZWY9e3NvY2lhbC5saW5rfVxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgaG92ZXI6dGV4dC1wcmltYXJ5IHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3NvY2lhbC5uYW1lfVxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvU2VjdGlvbj5cbiAgICA8L2Zvb3Rlcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJlbWFpbGpzIiwiU2VjdGlvbiIsIlRpdGxlIiwiTG9hZGVyIiwiSW5wdXQiLCJUZXh0QXJlYSIsIlNvY2lhbCIsIkxldHNUYWxrIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VTdGF0ZSIsImRpc2FibGVkQnV0dG9uIiwic2V0RGlzYWJsZWRCdXR0b24iLCJidXR0b25UZXh0Iiwic2V0QnV0dG9uVGV4dCIsImZvcm1SZWYiLCJ1c2VSZWYiLCJjaGVja0Rpc2FibGVkIiwiY3VycmVudCIsImZ1bGxOYW1lIiwiZW1haWwiLCJtZXNzYWdlIiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzZW5kRm9ybSIsImN1cnJlbnRUYXJnZXQiLCJwdWJsaWNLZXkiLCJzZXRUaW1lb3V0IiwiZm9vdGVyIiwiY2xhc3NOYW1lIiwiaWQiLCJiYWNrZ3JvdW5kIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImRlc2NDbGFzc05hbWUiLCJkaXYiLCJwIiwiZm9ybSIsInJlZiIsIm9uU3VibWl0IiwibGFiZWwiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsIm9uQ2hhbmdlIiwiYnV0dG9uIiwidHlwZSIsImRpc2FibGVkIiwibWFwIiwic29jaWFsIiwiaHJlZiIsImxpbmsiLCJ0YXJnZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/LetsTalk.tsx\n"));

/***/ })

});