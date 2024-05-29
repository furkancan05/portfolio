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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LetsTalk; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emailjs/browser */ \"(app-pages-browser)/./node_modules/@emailjs/browser/es/index.js\");\n/* harmony import */ var _components_shared_Section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/components/shared/Section */ \"(app-pages-browser)/./src/components/shared/Section.tsx\");\n/* harmony import */ var _components_shared_Title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/components/shared/Title */ \"(app-pages-browser)/./src/components/shared/Title.tsx\");\n/* harmony import */ var _components_shared_Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/components/shared/Input */ \"(app-pages-browser)/./src/components/shared/Input.tsx\");\n/* harmony import */ var _config_social__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/config/social */ \"(app-pages-browser)/./src/config/social.ts\");\n/* harmony import */ var _shared_Icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/Icons */ \"(app-pages-browser)/./src/components/shared/Icons.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n// components\n\n\n\n// config\n\n\nfunction LetsTalk() {\n    _s();\n    const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const [buttonText, setButtonText] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"Send\");\n    const [inputs, setInputs] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({\n        fullName: \"\",\n        email: \"\",\n        message: \"\"\n    });\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        setLoading(true);\n        try {\n            await _emailjs_browser__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sendForm(\"service_49woq7j\", \"template_tcgpbkq\", JSON.stringify(inputs), {\n                publicKey: \"Pg-SlRkGVEmk-JPL_\"\n            });\n            setButtonText(\"Sent!\");\n            setLoading(false);\n            setTimeout(()=>setButtonText(\"Send\"), 2000);\n        } catch (e) {\n            console.log(e);\n            setButtonText(\"Sorry! An error occured.\");\n            setLoading(false);\n            setTimeout(()=>setButtonText(\"Send\"), 2000);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n        className: \"fixed bottom-0 w-full h-screen -z-20\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Section__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            id: \"contact\",\n            background: \"black\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Title__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    title: \"Contact\",\n                    description: \"Lets Talk\",\n                    descClassName: \"text-white/10\"\n                }, void 0, false, {\n                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col items-center justify-between gap-10 sm:flex-row\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex-1 font-extrabold leading-[50px] sm:leading-[75px] uppercase text-center sm:text-left\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-lg sm:text-[max(max(12px,2.5vw))]\",\n                                    children: \"Lets build together\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-[40px] sm:text-[max(max(24px,4.5vw))]\",\n                                    children: \"something\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-[48px] text-primary sm:text-[max(max(24px,5.5vw))]\",\n                                    children: \"COOL\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            className: \"flex flex-col gap-4 flex-1 min-w-[300px] max-w-[450px] font-bold bg-black/20 rounded-md px-10 py-5 border border-white/20\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Input__WEBPACK_IMPORTED_MODULE_6__.Input, {\n                                    label: \"Full Name\",\n                                    name: \"fullName\",\n                                    placeholder: \"Enter your full name\",\n                                    value: inputs.fullName,\n                                    onChange: (e)=>setInputs({\n                                            ...inputs,\n                                            fullName: e.target.value\n                                        })\n                                }, void 0, false, {\n                                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Input__WEBPACK_IMPORTED_MODULE_6__.Input, {\n                                    label: \"Email\",\n                                    name: \"email\",\n                                    placeholder: \"Enter your email\",\n                                    value: inputs.email,\n                                    onChange: (e)=>setInputs({\n                                            ...inputs,\n                                            email: e.target.value\n                                        })\n                                }, void 0, false, {\n                                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Input__WEBPACK_IMPORTED_MODULE_6__.TextArea, {\n                                    label: \"Message\",\n                                    name: \"message\",\n                                    placeholder: \"Enter your message\",\n                                    value: inputs.message,\n                                    onChange: (e)=>setInputs({\n                                            ...inputs,\n                                            message: e.target.value\n                                        })\n                                }, void 0, false, {\n                                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                                    lineNumber: 93,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    disabled: !inputs.email || !inputs.fullName || !inputs.message || loading,\n                                    onClick: handleSubmit,\n                                    className: \"text-lg bg-primary/90 rounded-full py-3 w-full hover:bg-primary transition-colors disabled:bg-primary/20 disabled:text-white/50\",\n                                    children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-fit mx-auto animate-spin\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_Icons__WEBPACK_IMPORTED_MODULE_8__.Loader, {}, void 0, false, {\n                                            fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                                            lineNumber: 113,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                                        lineNumber: 112,\n                                        columnNumber: 17\n                                    }, this) : buttonText\n                                }, void 0, false, {\n                                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                                    lineNumber: 103,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full flex justify-center gap-4 py-4 border-t border-t-solid border-t-white/20 mt-8 sm:absolute left-0 bottom-0 sm:mt-0\",\n                    children: _config_social__WEBPACK_IMPORTED_MODULE_7__.Social.map((social)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            href: social.link,\n                            target: \"_blank\",\n                            className: \"text-sm font-semibold hover:text-primary transition-colors\",\n                            children: social.name\n                        }, social.name, false, {\n                            fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                            lineNumber: 125,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                    lineNumber: 123,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n            lineNumber: 55,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, this);\n}\n_s(LetsTalk, \"MkqnsrY4cr3xFQEBApBiQPliFpM=\");\n_c = LetsTalk;\nvar _c;\n$RefreshReg$(_c, \"LetsTalk\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0xldHNUYWxrLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBRTBCO0FBQ0c7QUFDVTtBQUV2QyxhQUFhO0FBQ3FDO0FBQ0o7QUFDYztBQUU1RCxTQUFTO0FBQ2dDO0FBQ0Q7QUFFekIsU0FBU1M7O0lBQ3RCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHWCxxREFBYyxDQUFDO0lBQzdDLE1BQU0sQ0FBQ2EsWUFBWUMsY0FBYyxHQUFHZCxxREFBYyxDQUFDO0lBRW5ELE1BQU0sQ0FBQ2UsUUFBUUMsVUFBVSxHQUFHaEIscURBQWMsQ0FBQztRQUN6Q2lCLFVBQVU7UUFDVkMsT0FBTztRQUNQQyxTQUFTO0lBQ1g7SUFFQSxNQUFNQyxlQUFlLE9BQU9DO1FBQzFCQSxFQUFFQyxjQUFjO1FBQ2hCWCxXQUFXO1FBRVgsSUFBSTtZQUNGLE1BQU1ULGlFQUFnQixDQUNwQixtQkFDQSxvQkFDQXNCLEtBQUtDLFNBQVMsQ0FBQ1YsU0FDZjtnQkFDRVcsV0FBVztZQUNiO1lBR0ZaLGNBQWM7WUFDZEgsV0FBVztZQUVYZ0IsV0FBVyxJQUFNYixjQUFjLFNBQVM7UUFDMUMsRUFBRSxPQUFPTyxHQUFHO1lBQ1ZPLFFBQVFDLEdBQUcsQ0FBQ1I7WUFDWlAsY0FBYztZQUNkSCxXQUFXO1lBRVhnQixXQUFXLElBQU1iLGNBQWMsU0FBUztRQUMxQztJQUNGO0lBRUEscUJBQ0UsOERBQUNnQjtRQUFPQyxXQUFVO2tCQUNoQiw0RUFBQzVCLGtFQUFPQTtZQUFDNkIsSUFBRztZQUFVQyxZQUFXOzs4QkFDL0IsOERBQUM3QixnRUFBS0E7b0JBQ0o4QixPQUFNO29CQUNOQyxhQUFZO29CQUNaQyxlQUFjOzs7Ozs7OEJBR2hCLDhEQUFDQztvQkFBSU4sV0FBVTs7c0NBQ2IsOERBQUNNOzRCQUFJTixXQUFVOzs4Q0FDYiw4REFBQ087b0NBQUVQLFdBQVU7OENBQXlDOzs7Ozs7OENBR3RELDhEQUFDTztvQ0FBRVAsV0FBVTs4Q0FBNkM7Ozs7Ozs4Q0FHMUQsOERBQUNPO29DQUFFUCxXQUFVOzhDQUEwRDs7Ozs7Ozs7Ozs7O3NDQUt6RSw4REFBQ1E7NEJBQUtSLFdBQVU7OzhDQUNkLDhEQUFDMUIsMkRBQUtBO29DQUNKbUMsT0FBTTtvQ0FDTkMsTUFBSztvQ0FDTEMsYUFBWTtvQ0FDWkMsT0FBTzVCLE9BQU9FLFFBQVE7b0NBQ3RCMkIsVUFBVSxDQUFDdkIsSUFDVEwsVUFBVTs0Q0FBRSxHQUFHRCxNQUFNOzRDQUFFRSxVQUFVSSxFQUFFd0IsTUFBTSxDQUFDRixLQUFLO3dDQUFDOzs7Ozs7OENBR3BELDhEQUFDdEMsMkRBQUtBO29DQUNKbUMsT0FBTTtvQ0FDTkMsTUFBSztvQ0FDTEMsYUFBWTtvQ0FDWkMsT0FBTzVCLE9BQU9HLEtBQUs7b0NBQ25CMEIsVUFBVSxDQUFDdkIsSUFBTUwsVUFBVTs0Q0FBRSxHQUFHRCxNQUFNOzRDQUFFRyxPQUFPRyxFQUFFd0IsTUFBTSxDQUFDRixLQUFLO3dDQUFDOzs7Ozs7OENBR2hFLDhEQUFDckMsOERBQVFBO29DQUNQa0MsT0FBTTtvQ0FDTkMsTUFBSztvQ0FDTEMsYUFBWTtvQ0FDWkMsT0FBTzVCLE9BQU9JLE9BQU87b0NBQ3JCeUIsVUFBVSxDQUFDdkIsSUFDVEwsVUFBVTs0Q0FBRSxHQUFHRCxNQUFNOzRDQUFFSSxTQUFTRSxFQUFFd0IsTUFBTSxDQUFDRixLQUFLO3dDQUFDOzs7Ozs7OENBSW5ELDhEQUFDRztvQ0FDQ0MsTUFBSztvQ0FDTEMsVUFDRSxDQUFDakMsT0FBT0csS0FBSyxJQUFJLENBQUNILE9BQU9FLFFBQVEsSUFBSSxDQUFDRixPQUFPSSxPQUFPLElBQUlUO29DQUUxRHVDLFNBQVM3QjtvQ0FDVFcsV0FBVTs4Q0FFVHJCLHdCQUNDLDhEQUFDMkI7d0NBQUlOLFdBQVU7a0RBQ2IsNEVBQUN2QixpREFBTUE7Ozs7Ozs7OzsrQ0FHVEs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFPUiw4REFBQ3dCO29CQUFJTixXQUFVOzhCQUNaeEIsa0RBQU1BLENBQUMyQyxHQUFHLENBQUMsQ0FBQ0MsdUJBQ1gsOERBQUNsRCxpREFBSUE7NEJBRUhtRCxNQUFNRCxPQUFPRSxJQUFJOzRCQUNqQlIsUUFBTzs0QkFDUGQsV0FBVTtzQ0FFVG9CLE9BQU9WLElBQUk7MkJBTFBVLE9BQU9WLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVk5QjtHQTFId0JoQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9MZXRzVGFsay50c3g/NGM3NyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IGVtYWlsanMgZnJvbSBcIkBlbWFpbGpzL2Jyb3dzZXJcIjtcblxuLy8gY29tcG9uZW50c1xuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIn4vY29tcG9uZW50cy9zaGFyZWQvU2VjdGlvblwiO1xuaW1wb3J0IFRpdGxlIGZyb20gXCJ+L2NvbXBvbmVudHMvc2hhcmVkL1RpdGxlXCI7XG5pbXBvcnQgeyBJbnB1dCwgVGV4dEFyZWEgfSBmcm9tIFwifi9jb21wb25lbnRzL3NoYXJlZC9JbnB1dFwiO1xuXG4vLyBjb25maWdcbmltcG9ydCB7IFNvY2lhbCB9IGZyb20gXCJ+L2NvbmZpZy9zb2NpYWxcIjtcbmltcG9ydCB7IExvYWRlciB9IGZyb20gXCIuL3NoYXJlZC9JY29uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMZXRzVGFsaygpIHtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbYnV0dG9uVGV4dCwgc2V0QnV0dG9uVGV4dF0gPSBSZWFjdC51c2VTdGF0ZShcIlNlbmRcIik7XG5cbiAgY29uc3QgW2lucHV0cywgc2V0SW5wdXRzXSA9IFJlYWN0LnVzZVN0YXRlKHtcbiAgICBmdWxsTmFtZTogXCJcIixcbiAgICBlbWFpbDogXCJcIixcbiAgICBtZXNzYWdlOiBcIlwiLFxuICB9KTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZTogUmVhY3QuRm9ybUV2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGVtYWlsanMuc2VuZEZvcm0oXG4gICAgICAgIFwic2VydmljZV80OXdvcTdqXCIsXG4gICAgICAgIFwidGVtcGxhdGVfdGNncGJrcVwiLFxuICAgICAgICBKU09OLnN0cmluZ2lmeShpbnB1dHMpLFxuICAgICAgICB7XG4gICAgICAgICAgcHVibGljS2V5OiBcIlBnLVNsUmtHVkVtay1KUExfXCIsXG4gICAgICAgIH1cbiAgICAgICk7XG5cbiAgICAgIHNldEJ1dHRvblRleHQoXCJTZW50IVwiKTtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHNldEJ1dHRvblRleHQoXCJTZW5kXCIpLCAyMDAwKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgIHNldEJ1dHRvblRleHQoXCJTb3JyeSEgQW4gZXJyb3Igb2NjdXJlZC5cIik7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRCdXR0b25UZXh0KFwiU2VuZFwiKSwgMjAwMCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGZvb3RlciBjbGFzc05hbWU9XCJmaXhlZCBib3R0b20tMCB3LWZ1bGwgaC1zY3JlZW4gLXotMjBcIj5cbiAgICAgIDxTZWN0aW9uIGlkPVwiY29udGFjdFwiIGJhY2tncm91bmQ9XCJibGFja1wiPlxuICAgICAgICA8VGl0bGVcbiAgICAgICAgICB0aXRsZT1cIkNvbnRhY3RcIlxuICAgICAgICAgIGRlc2NyaXB0aW9uPVwiTGV0cyBUYWxrXCJcbiAgICAgICAgICBkZXNjQ2xhc3NOYW1lPVwidGV4dC13aGl0ZS8xMFwiXG4gICAgICAgIC8+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLTEwIHNtOmZsZXgtcm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgZm9udC1leHRyYWJvbGQgbGVhZGluZy1bNTBweF0gc206bGVhZGluZy1bNzVweF0gdXBwZXJjYXNlIHRleHQtY2VudGVyIHNtOnRleHQtbGVmdFwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBzbTp0ZXh0LVttYXgobWF4KDEycHgsMi41dncpKV1cIj5cbiAgICAgICAgICAgICAgTGV0cyBidWlsZCB0b2dldGhlclxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bNDBweF0gc206dGV4dC1bbWF4KG1heCgyNHB4LDQuNXZ3KSldXCI+XG4gICAgICAgICAgICAgIHNvbWV0aGluZ1xuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bNDhweF0gdGV4dC1wcmltYXJ5IHNtOnRleHQtW21heChtYXgoMjRweCw1LjV2dykpXVwiPlxuICAgICAgICAgICAgICBDT09MXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC00IGZsZXgtMSBtaW4tdy1bMzAwcHhdIG1heC13LVs0NTBweF0gZm9udC1ib2xkIGJnLWJsYWNrLzIwIHJvdW5kZWQtbWQgcHgtMTAgcHktNSBib3JkZXIgYm9yZGVyLXdoaXRlLzIwXCI+XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgbGFiZWw9XCJGdWxsIE5hbWVcIlxuICAgICAgICAgICAgICBuYW1lPVwiZnVsbE5hbWVcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgZnVsbCBuYW1lXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5mdWxsTmFtZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgIHNldElucHV0cyh7IC4uLmlucHV0cywgZnVsbE5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBlbWFpbFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMuZW1haWx9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SW5wdXRzKHsgLi4uaW5wdXRzLCBlbWFpbDogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8VGV4dEFyZWFcbiAgICAgICAgICAgICAgbGFiZWw9XCJNZXNzYWdlXCJcbiAgICAgICAgICAgICAgbmFtZT1cIm1lc3NhZ2VcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgbWVzc2FnZVwiXG4gICAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMubWVzc2FnZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgIHNldElucHV0cyh7IC4uLmlucHV0cywgbWVzc2FnZTogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e1xuICAgICAgICAgICAgICAgICFpbnB1dHMuZW1haWwgfHwgIWlucHV0cy5mdWxsTmFtZSB8fCAhaW5wdXRzLm1lc3NhZ2UgfHwgbG9hZGluZ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1sZyBiZy1wcmltYXJ5LzkwIHJvdW5kZWQtZnVsbCBweS0zIHctZnVsbCBob3ZlcjpiZy1wcmltYXJ5IHRyYW5zaXRpb24tY29sb3JzIGRpc2FibGVkOmJnLXByaW1hcnkvMjAgZGlzYWJsZWQ6dGV4dC13aGl0ZS81MFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1maXQgbXgtYXV0byBhbmltYXRlLXNwaW5cIj5cbiAgICAgICAgICAgICAgICAgIDxMb2FkZXIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBzb2NpYWwgbGlua3MgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXIgZ2FwLTQgcHktNCBib3JkZXItdCBib3JkZXItdC1zb2xpZCBib3JkZXItdC13aGl0ZS8yMCBtdC04IHNtOmFic29sdXRlIGxlZnQtMCBib3R0b20tMCBzbTptdC0wXCI+XG4gICAgICAgICAge1NvY2lhbC5tYXAoKHNvY2lhbCkgPT4gKFxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAga2V5PXtzb2NpYWwubmFtZX1cbiAgICAgICAgICAgICAgaHJlZj17c29jaWFsLmxpbmt9XG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1zZW1pYm9sZCBob3Zlcjp0ZXh0LXByaW1hcnkgdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7c29jaWFsLm5hbWV9XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9TZWN0aW9uPlxuICAgIDwvZm9vdGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsImVtYWlsanMiLCJTZWN0aW9uIiwiVGl0bGUiLCJJbnB1dCIsIlRleHRBcmVhIiwiU29jaWFsIiwiTG9hZGVyIiwiTGV0c1RhbGsiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVzZVN0YXRlIiwiYnV0dG9uVGV4dCIsInNldEJ1dHRvblRleHQiLCJpbnB1dHMiLCJzZXRJbnB1dHMiLCJmdWxsTmFtZSIsImVtYWlsIiwibWVzc2FnZSIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNlbmRGb3JtIiwiSlNPTiIsInN0cmluZ2lmeSIsInB1YmxpY0tleSIsInNldFRpbWVvdXQiLCJjb25zb2xlIiwibG9nIiwiZm9vdGVyIiwiY2xhc3NOYW1lIiwiaWQiLCJiYWNrZ3JvdW5kIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImRlc2NDbGFzc05hbWUiLCJkaXYiLCJwIiwiZm9ybSIsImxhYmVsIiwibmFtZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsImJ1dHRvbiIsInR5cGUiLCJkaXNhYmxlZCIsIm9uQ2xpY2siLCJtYXAiLCJzb2NpYWwiLCJocmVmIiwibGluayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/LetsTalk.tsx\n"));

/***/ })

});