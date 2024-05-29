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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LetsTalk; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emailjs/browser */ \"(app-pages-browser)/./node_modules/@emailjs/browser/es/index.js\");\n/* harmony import */ var _components_shared_Section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/components/shared/Section */ \"(app-pages-browser)/./src/components/shared/Section.tsx\");\n/* harmony import */ var _components_shared_Title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/components/shared/Title */ \"(app-pages-browser)/./src/components/shared/Title.tsx\");\n/* harmony import */ var _components_shared_Icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/components/shared/Icons */ \"(app-pages-browser)/./src/components/shared/Icons.tsx\");\n/* harmony import */ var _components_shared_Input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/components/shared/Input */ \"(app-pages-browser)/./src/components/shared/Input.tsx\");\n/* harmony import */ var _config_social__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/config/social */ \"(app-pages-browser)/./src/config/social.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n// components\n\n\n\n\n// config\n\nfunction LetsTalk() {\n    _s();\n    const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const [disabledButton, setDisabledButton] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const [buttonText, setButtonText] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"Send\");\n    const formRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    const checkDisabled = ()=>{\n        if (!formRef || !formRef.current) return setDisabledButton(true);\n        const fullName = formRef.current[0];\n        const email = formRef.current[1];\n        const message = formRef.current[2];\n        if (!fullName.value || !email.value || !message.value) return setDisabledButton(true);\n        setDisabledButton(false);\n    };\n    const handleSubmit = async (e)=>{\n        if (!e) return;\n        e.preventDefault();\n        setLoading(true);\n        try {\n            await _emailjs_browser__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sendForm(\"service_49woq7j\", \"template_tcgpbkq\", e.currentTarget, {\n                publicKey: \"Pg-SlRkGVEmk-JPL_\"\n            });\n            setButtonText(\"Sent!\");\n            setLoading(false);\n            setTimeout(()=>setButtonText(\"Send\"), 2000);\n        } catch (e) {\n            setButtonText(\"Sorry! An error occured.\");\n            setLoading(false);\n            setTimeout(()=>setButtonText(\"Send\"), 2000);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n        className: \"fixed bottom-0 w-full h-screen -z-20\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Section__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            id: \"contact\",\n            background: \"black\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Title__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    title: \"Contact\",\n                    description: \"Lets Talk\",\n                    descClassName: \"text-white/10\"\n                }, void 0, false, {\n                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col items-center justify-between gap-10 sm:flex-row\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex-1 font-extrabold leading-[50px] sm:leading-[75px] uppercase text-center sm:text-left\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-lg sm:text-[max(max(12px,2.5vw))]\",\n                                    children: \"Lets build together\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-[40px] sm:text-[max(max(24px,4.5vw))]\",\n                                    children: \"something\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-[48px] text-primary sm:text-[max(max(24px,5.5vw))]\",\n                                    children: \"COOL\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            ref: formRef,\n                            onSubmit: (e)=>handleSubmit(e),\n                            className: \"flex flex-col gap-4 flex-1 min-w-[300px] max-w-[450px] font-bold bg-black/20 rounded-md px-10 py-5 border border-white/20\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Input__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                                    label: \"Full Name\",\n                                    name: \"fullName\",\n                                    placeholder: \"John Doe\",\n                                    required: true,\n                                    onChange: checkDisabled\n                                }, void 0, false, {\n                                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                                    lineNumber: 93,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Input__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                                    label: \"Email\",\n                                    name: \"email\",\n                                    placeholder: \"johndoe@email.com\",\n                                    onChange: checkDisabled\n                                }, void 0, false, {\n                                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                                    lineNumber: 100,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Input__WEBPACK_IMPORTED_MODULE_7__.TextArea, {\n                                    label: \"Message\",\n                                    name: \"message\",\n                                    placeholder: \"Hello, Mr. Furkan...\",\n                                    onChange: checkDisabled\n                                }, void 0, false, {\n                                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                                    lineNumber: 107,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    disabled: disabledButton || loading,\n                                    className: \"text-lg bg-primary/90 rounded-full py-3 w-full hover:bg-primary transition-colors disabled:bg-primary/20 disabled:text-white/50\",\n                                    children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-fit mx-auto animate-spin\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Icons__WEBPACK_IMPORTED_MODULE_6__.Loader, {}, void 0, false, {\n                                            fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                                            lineNumber: 121,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                                        lineNumber: 120,\n                                        columnNumber: 17\n                                    }, this) : buttonText\n                                }, void 0, false, {\n                                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                                    lineNumber: 114,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full flex justify-center gap-4 py-4 border-t border-t-solid border-t-white/20 mt-8 sm:absolute left-0 bottom-0 sm:mt-0\",\n                    children: _config_social__WEBPACK_IMPORTED_MODULE_8__.Social.map((social)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            href: social.link,\n                            target: \"_blank\",\n                            className: \"text-sm font-semibold hover:text-primary transition-colors\",\n                            children: social.name\n                        }, social.name, false, {\n                            fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                            lineNumber: 133,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                    lineNumber: 131,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n            lineNumber: 68,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, this);\n}\n_s(LetsTalk, \"oLjAZXBpWO+0Gh0TuOEF1rRFeyE=\");\n_c = LetsTalk;\nvar _c;\n$RefreshReg$(_c, \"LetsTalk\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0xldHNUYWxrLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBRTBCO0FBQ0c7QUFDVTtBQUV2QyxhQUFhO0FBQ3FDO0FBQ0o7QUFDSztBQUNTO0FBRTVELFNBQVM7QUFDZ0M7QUFFMUIsU0FBU1M7O0lBQ3RCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHWCxxREFBYyxDQUFDO0lBQzdDLE1BQU0sQ0FBQ2EsZ0JBQWdCQyxrQkFBa0IsR0FBR2QscURBQWMsQ0FBQztJQUMzRCxNQUFNLENBQUNlLFlBQVlDLGNBQWMsR0FBR2hCLHFEQUFjLENBQUM7SUFFbkQsTUFBTWlCLFVBQVVqQixtREFBWSxDQUFrQjtJQUU5QyxNQUFNbUIsZ0JBQWdCO1FBQ3BCLElBQUksQ0FBQ0YsV0FBVyxDQUFDQSxRQUFRRyxPQUFPLEVBQUUsT0FBT04sa0JBQWtCO1FBRTNELE1BQU1PLFdBQVdKLFFBQVFHLE9BQU8sQ0FBQyxFQUFFO1FBQ25DLE1BQU1FLFFBQVFMLFFBQVFHLE9BQU8sQ0FBQyxFQUFFO1FBQ2hDLE1BQU1HLFVBQVVOLFFBQVFHLE9BQU8sQ0FBQyxFQUFFO1FBRWxDLElBQUksQ0FBQ0MsU0FBU0csS0FBSyxJQUFJLENBQUNGLE1BQU1FLEtBQUssSUFBSSxDQUFDRCxRQUFRQyxLQUFLLEVBQ25ELE9BQU9WLGtCQUFrQjtRQUUzQkEsa0JBQWtCO0lBQ3BCO0lBRUEsTUFBTVcsZUFBZSxPQUNuQkM7UUFFQSxJQUFJLENBQUNBLEdBQUc7UUFFUkEsRUFBRUMsY0FBYztRQUNoQmhCLFdBQVc7UUFFWCxJQUFJO1lBQ0YsTUFBTVQsaUVBQWdCLENBQ3BCLG1CQUNBLG9CQUNBd0IsRUFBRUcsYUFBYSxFQUNmO2dCQUNFQyxXQUFXO1lBQ2I7WUFHRmQsY0FBYztZQUNkTCxXQUFXO1lBRVhvQixXQUFXLElBQU1mLGNBQWMsU0FBUztRQUMxQyxFQUFFLFVBQU07WUFDTkEsY0FBYztZQUNkTCxXQUFXO1lBRVhvQixXQUFXLElBQU1mLGNBQWMsU0FBUztRQUMxQztJQUNGO0lBRUEscUJBQ0UsOERBQUNnQjtRQUFPQyxXQUFVO2tCQUNoQiw0RUFBQzlCLGtFQUFPQTtZQUFDK0IsSUFBRztZQUFVQyxZQUFXOzs4QkFDL0IsOERBQUMvQixnRUFBS0E7b0JBQ0pnQyxPQUFNO29CQUNOQyxhQUFZO29CQUNaQyxlQUFjOzs7Ozs7OEJBR2hCLDhEQUFDQztvQkFBSU4sV0FBVTs7c0NBQ2IsOERBQUNNOzRCQUFJTixXQUFVOzs4Q0FDYiw4REFBQ087b0NBQUVQLFdBQVU7OENBQXlDOzs7Ozs7OENBR3RELDhEQUFDTztvQ0FBRVAsV0FBVTs4Q0FBNkM7Ozs7Ozs4Q0FHMUQsOERBQUNPO29DQUFFUCxXQUFVOzhDQUEwRDs7Ozs7Ozs7Ozs7O3NDQUt6RSw4REFBQ1E7NEJBQ0NDLEtBQUt6Qjs0QkFDTDBCLFVBQVUsQ0FBQ2pCLElBQU1ELGFBQWFDOzRCQUM5Qk8sV0FBVTs7OENBRVYsOERBQUMzQiwyREFBS0E7b0NBQ0pzQyxPQUFNO29DQUNOQyxNQUFLO29DQUNMQyxhQUFZO29DQUNaQyxRQUFRO29DQUNSQyxVQUFVN0I7Ozs7Ozs4Q0FFWiw4REFBQ2IsMkRBQUtBO29DQUNKc0MsT0FBTTtvQ0FDTkMsTUFBSztvQ0FDTEMsYUFBWTtvQ0FDWkUsVUFBVTdCOzs7Ozs7OENBR1osOERBQUNaLDhEQUFRQTtvQ0FDUHFDLE9BQU07b0NBQ05DLE1BQUs7b0NBQ0xDLGFBQVk7b0NBQ1pFLFVBQVU3Qjs7Ozs7OzhDQUdaLDhEQUFDOEI7b0NBQ0NDLE1BQUs7b0NBQ0xDLFVBQVV0QyxrQkFBa0JIO29DQUM1QnVCLFdBQVU7OENBRVR2Qix3QkFDQyw4REFBQzZCO3dDQUFJTixXQUFVO2tEQUNiLDRFQUFDNUIsNERBQU1BOzs7Ozs7Ozs7K0NBR1RVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBT1IsOERBQUN3QjtvQkFBSU4sV0FBVTs4QkFDWnpCLGtEQUFNQSxDQUFDNEMsR0FBRyxDQUFDLENBQUNDLHVCQUNYLDhEQUFDcEQsaURBQUlBOzRCQUVIcUQsTUFBTUQsT0FBT0UsSUFBSTs0QkFDakJDLFFBQU87NEJBQ1B2QixXQUFVO3NDQUVUb0IsT0FBT1IsSUFBSTsyQkFMUFEsT0FBT1IsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWTlCO0dBbEl3QnBDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0xldHNUYWxrLnRzeD80Yzc3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgZW1haWxqcyBmcm9tIFwiQGVtYWlsanMvYnJvd3NlclwiO1xuXG4vLyBjb21wb25lbnRzXG5pbXBvcnQgU2VjdGlvbiBmcm9tIFwifi9jb21wb25lbnRzL3NoYXJlZC9TZWN0aW9uXCI7XG5pbXBvcnQgVGl0bGUgZnJvbSBcIn4vY29tcG9uZW50cy9zaGFyZWQvVGl0bGVcIjtcbmltcG9ydCB7IExvYWRlciB9IGZyb20gXCJ+L2NvbXBvbmVudHMvc2hhcmVkL0ljb25zXCI7XG5pbXBvcnQgeyBJbnB1dCwgVGV4dEFyZWEgfSBmcm9tIFwifi9jb21wb25lbnRzL3NoYXJlZC9JbnB1dFwiO1xuXG4vLyBjb25maWdcbmltcG9ydCB7IFNvY2lhbCB9IGZyb20gXCJ+L2NvbmZpZy9zb2NpYWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGV0c1RhbGsoKSB7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Rpc2FibGVkQnV0dG9uLCBzZXREaXNhYmxlZEJ1dHRvbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtidXR0b25UZXh0LCBzZXRCdXR0b25UZXh0XSA9IFJlYWN0LnVzZVN0YXRlKFwiU2VuZFwiKTtcblxuICBjb25zdCBmb3JtUmVmID0gUmVhY3QudXNlUmVmPEhUTUxGb3JtRWxlbWVudD4obnVsbCk7XG5cbiAgY29uc3QgY2hlY2tEaXNhYmxlZCA9ICgpID0+IHtcbiAgICBpZiAoIWZvcm1SZWYgfHwgIWZvcm1SZWYuY3VycmVudCkgcmV0dXJuIHNldERpc2FibGVkQnV0dG9uKHRydWUpO1xuXG4gICAgY29uc3QgZnVsbE5hbWUgPSBmb3JtUmVmLmN1cnJlbnRbMF07XG4gICAgY29uc3QgZW1haWwgPSBmb3JtUmVmLmN1cnJlbnRbMV07XG4gICAgY29uc3QgbWVzc2FnZSA9IGZvcm1SZWYuY3VycmVudFsyXTtcblxuICAgIGlmICghZnVsbE5hbWUudmFsdWUgfHwgIWVtYWlsLnZhbHVlIHx8ICFtZXNzYWdlLnZhbHVlKVxuICAgICAgcmV0dXJuIHNldERpc2FibGVkQnV0dG9uKHRydWUpO1xuXG4gICAgc2V0RGlzYWJsZWRCdXR0b24oZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChcbiAgICBlOiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PiB8IHVuZGVmaW5lZFxuICApID0+IHtcbiAgICBpZiAoIWUpIHJldHVybjtcblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGVtYWlsanMuc2VuZEZvcm0oXG4gICAgICAgIFwic2VydmljZV80OXdvcTdqXCIsXG4gICAgICAgIFwidGVtcGxhdGVfdGNncGJrcVwiLFxuICAgICAgICBlLmN1cnJlbnRUYXJnZXQsXG4gICAgICAgIHtcbiAgICAgICAgICBwdWJsaWNLZXk6IFwiUGctU2xSa0dWRW1rLUpQTF9cIixcbiAgICAgICAgfVxuICAgICAgKTtcblxuICAgICAgc2V0QnV0dG9uVGV4dChcIlNlbnQhXCIpO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0QnV0dG9uVGV4dChcIlNlbmRcIiksIDIwMDApO1xuICAgIH0gY2F0Y2gge1xuICAgICAgc2V0QnV0dG9uVGV4dChcIlNvcnJ5ISBBbiBlcnJvciBvY2N1cmVkLlwiKTtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHNldEJ1dHRvblRleHQoXCJTZW5kXCIpLCAyMDAwKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImZpeGVkIGJvdHRvbS0wIHctZnVsbCBoLXNjcmVlbiAtei0yMFwiPlxuICAgICAgPFNlY3Rpb24gaWQ9XCJjb250YWN0XCIgYmFja2dyb3VuZD1cImJsYWNrXCI+XG4gICAgICAgIDxUaXRsZVxuICAgICAgICAgIHRpdGxlPVwiQ29udGFjdFwiXG4gICAgICAgICAgZGVzY3JpcHRpb249XCJMZXRzIFRhbGtcIlxuICAgICAgICAgIGRlc2NDbGFzc05hbWU9XCJ0ZXh0LXdoaXRlLzEwXCJcbiAgICAgICAgLz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBnYXAtMTAgc206ZmxleC1yb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmb250LWV4dHJhYm9sZCBsZWFkaW5nLVs1MHB4XSBzbTpsZWFkaW5nLVs3NXB4XSB1cHBlcmNhc2UgdGV4dC1jZW50ZXIgc206dGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIHNtOnRleHQtW21heChtYXgoMTJweCwyLjV2dykpXVwiPlxuICAgICAgICAgICAgICBMZXRzIGJ1aWxkIHRvZ2V0aGVyXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVs0MHB4XSBzbTp0ZXh0LVttYXgobWF4KDI0cHgsNC41dncpKV1cIj5cbiAgICAgICAgICAgICAgc29tZXRoaW5nXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVs0OHB4XSB0ZXh0LXByaW1hcnkgc206dGV4dC1bbWF4KG1heCgyNHB4LDUuNXZ3KSldXCI+XG4gICAgICAgICAgICAgIENPT0xcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICByZWY9e2Zvcm1SZWZ9XG4gICAgICAgICAgICBvblN1Ym1pdD17KGUpID0+IGhhbmRsZVN1Ym1pdChlKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTQgZmxleC0xIG1pbi13LVszMDBweF0gbWF4LXctWzQ1MHB4XSBmb250LWJvbGQgYmctYmxhY2svMjAgcm91bmRlZC1tZCBweC0xMCBweS01IGJvcmRlciBib3JkZXItd2hpdGUvMjBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICBsYWJlbD1cIkZ1bGwgTmFtZVwiXG4gICAgICAgICAgICAgIG5hbWU9XCJmdWxsTmFtZVwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSm9obiBEb2VcIlxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICBvbkNoYW5nZT17Y2hlY2tEaXNhYmxlZH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiam9obmRvZUBlbWFpbC5jb21cIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17Y2hlY2tEaXNhYmxlZH1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxUZXh0QXJlYVxuICAgICAgICAgICAgICBsYWJlbD1cIk1lc3NhZ2VcIlxuICAgICAgICAgICAgICBuYW1lPVwibWVzc2FnZVwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSGVsbG8sIE1yLiBGdXJrYW4uLi5cIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17Y2hlY2tEaXNhYmxlZH1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZEJ1dHRvbiB8fCBsb2FkaW5nfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWxnIGJnLXByaW1hcnkvOTAgcm91bmRlZC1mdWxsIHB5LTMgdy1mdWxsIGhvdmVyOmJnLXByaW1hcnkgdHJhbnNpdGlvbi1jb2xvcnMgZGlzYWJsZWQ6YmctcHJpbWFyeS8yMCBkaXNhYmxlZDp0ZXh0LXdoaXRlLzUwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2xvYWRpbmcgPyAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZpdCBteC1hdXRvIGFuaW1hdGUtc3BpblwiPlxuICAgICAgICAgICAgICAgICAgPExvYWRlciAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHRcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIHNvY2lhbCBsaW5rcyAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBnYXAtNCBweS00IGJvcmRlci10IGJvcmRlci10LXNvbGlkIGJvcmRlci10LXdoaXRlLzIwIG10LTggc206YWJzb2x1dGUgbGVmdC0wIGJvdHRvbS0wIHNtOm10LTBcIj5cbiAgICAgICAgICB7U29jaWFsLm1hcCgoc29jaWFsKSA9PiAoXG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICBrZXk9e3NvY2lhbC5uYW1lfVxuICAgICAgICAgICAgICBocmVmPXtzb2NpYWwubGlua31cbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LXNlbWlib2xkIGhvdmVyOnRleHQtcHJpbWFyeSB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtzb2NpYWwubmFtZX1cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1NlY3Rpb24+XG4gICAgPC9mb290ZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwiZW1haWxqcyIsIlNlY3Rpb24iLCJUaXRsZSIsIkxvYWRlciIsIklucHV0IiwiVGV4dEFyZWEiLCJTb2NpYWwiLCJMZXRzVGFsayIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlU3RhdGUiLCJkaXNhYmxlZEJ1dHRvbiIsInNldERpc2FibGVkQnV0dG9uIiwiYnV0dG9uVGV4dCIsInNldEJ1dHRvblRleHQiLCJmb3JtUmVmIiwidXNlUmVmIiwiY2hlY2tEaXNhYmxlZCIsImN1cnJlbnQiLCJmdWxsTmFtZSIsImVtYWlsIiwibWVzc2FnZSIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2VuZEZvcm0iLCJjdXJyZW50VGFyZ2V0IiwicHVibGljS2V5Iiwic2V0VGltZW91dCIsImZvb3RlciIsImNsYXNzTmFtZSIsImlkIiwiYmFja2dyb3VuZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJkZXNjQ2xhc3NOYW1lIiwiZGl2IiwicCIsImZvcm0iLCJyZWYiLCJvblN1Ym1pdCIsImxhYmVsIiwibmFtZSIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJvbkNoYW5nZSIsImJ1dHRvbiIsInR5cGUiLCJkaXNhYmxlZCIsIm1hcCIsInNvY2lhbCIsImhyZWYiLCJsaW5rIiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/LetsTalk.tsx\n"));

/***/ })

});