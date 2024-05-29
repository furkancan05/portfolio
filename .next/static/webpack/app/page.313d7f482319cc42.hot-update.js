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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LetsTalk; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emailjs/browser */ \"(app-pages-browser)/./node_modules/@emailjs/browser/es/index.js\");\n/* harmony import */ var _components_shared_Section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/components/shared/Section */ \"(app-pages-browser)/./src/components/shared/Section.tsx\");\n/* harmony import */ var _components_shared_Title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/components/shared/Title */ \"(app-pages-browser)/./src/components/shared/Title.tsx\");\n/* harmony import */ var _components_shared_Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/components/shared/Input */ \"(app-pages-browser)/./src/components/shared/Input.tsx\");\n/* harmony import */ var _config_social__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/config/social */ \"(app-pages-browser)/./src/config/social.ts\");\n/* harmony import */ var _shared_Icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/Icons */ \"(app-pages-browser)/./src/components/shared/Icons.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n// components\n\n\n\n// config\n\n\nfunction LetsTalk() {\n    _s();\n    const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const [buttonText, setButtonText] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"Send\");\n    const [inputs, setInputs] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({\n        fullName: \"\",\n        email: \"\",\n        message: \"\"\n    });\n    const handleSubmit = async (e)=>{\n        if (!e) return;\n        e.preventDefault();\n        setLoading(true);\n        try {\n            await _emailjs_browser__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sendForm(\"service_49woq7j\", \"template_tcgpbkq\", JSON.stringify(inputs), {\n                publicKey: \"Pg-SlRkGVEmk-JPL_\"\n            });\n            setButtonText(\"Sent!\");\n            setLoading(false);\n            setTimeout(()=>setButtonText(\"Send\"), 2000);\n        } catch (e) {\n            console.log(e);\n            setButtonText(\"Sorry! An error occured.\");\n            setLoading(false);\n            setTimeout(()=>setButtonText(\"Send\"), 2000);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n        className: \"fixed bottom-0 w-full h-screen -z-20\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Section__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            id: \"contact\",\n            background: \"black\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Title__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    title: \"Contact\",\n                    description: \"Lets Talk\",\n                    descClassName: \"text-white/10\"\n                }, void 0, false, {\n                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col items-center justify-between gap-10 sm:flex-row\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex-1 font-extrabold leading-[50px] sm:leading-[75px] uppercase text-center sm:text-left\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-lg sm:text-[max(max(12px,2.5vw))]\",\n                                    children: \"Lets build together\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-[40px] sm:text-[max(max(24px,4.5vw))]\",\n                                    children: \"something\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-[48px] text-primary sm:text-[max(max(24px,5.5vw))]\",\n                                    children: \"COOL\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: (e)=>handleSubmit(e),\n                            className: \"flex flex-col gap-4 flex-1 min-w-[300px] max-w-[450px] font-bold bg-black/20 rounded-md px-10 py-5 border border-white/20\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Input__WEBPACK_IMPORTED_MODULE_6__.Input, {\n                                    label: \"Full Name\",\n                                    name: \"fullName\",\n                                    placeholder: \"Enter your full name\",\n                                    value: inputs.fullName,\n                                    onChange: (e)=>setInputs({\n                                            ...inputs,\n                                            fullName: e.target.value\n                                        })\n                                }, void 0, false, {\n                                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Input__WEBPACK_IMPORTED_MODULE_6__.Input, {\n                                    label: \"Email\",\n                                    name: \"email\",\n                                    placeholder: \"Enter your email\",\n                                    value: inputs.email,\n                                    onChange: (e)=>setInputs({\n                                            ...inputs,\n                                            email: e.target.value\n                                        })\n                                }, void 0, false, {\n                                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Input__WEBPACK_IMPORTED_MODULE_6__.TextArea, {\n                                    label: \"Message\",\n                                    name: \"message\",\n                                    placeholder: \"Enter your message\",\n                                    value: inputs.message,\n                                    onChange: (e)=>setInputs({\n                                            ...inputs,\n                                            message: e.target.value\n                                        })\n                                }, void 0, false, {\n                                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                                    lineNumber: 100,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    disabled: !inputs.email || !inputs.fullName || !inputs.message || loading,\n                                    className: \"text-lg bg-primary/90 rounded-full py-3 w-full hover:bg-primary transition-colors disabled:bg-primary/20 disabled:text-white/50\",\n                                    children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-fit mx-auto animate-spin\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_Icons__WEBPACK_IMPORTED_MODULE_8__.Loader, {}, void 0, false, {\n                                            fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                                            lineNumber: 119,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                                        lineNumber: 118,\n                                        columnNumber: 17\n                                    }, this) : buttonText\n                                }, void 0, false, {\n                                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                                    lineNumber: 110,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full flex justify-center gap-4 py-4 border-t border-t-solid border-t-white/20 mt-8 sm:absolute left-0 bottom-0 sm:mt-0\",\n                    children: _config_social__WEBPACK_IMPORTED_MODULE_7__.Social.map((social)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            href: social.link,\n                            target: \"_blank\",\n                            className: \"text-sm font-semibold hover:text-primary transition-colors\",\n                            children: social.name\n                        }, social.name, false, {\n                            fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                            lineNumber: 131,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                    lineNumber: 129,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n            lineNumber: 59,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, this);\n}\n_s(LetsTalk, \"MkqnsrY4cr3xFQEBApBiQPliFpM=\");\n_c = LetsTalk;\nvar _c;\n$RefreshReg$(_c, \"LetsTalk\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0xldHNUYWxrLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBRTBCO0FBQ0c7QUFDVTtBQUV2QyxhQUFhO0FBQ3FDO0FBQ0o7QUFDYztBQUU1RCxTQUFTO0FBQ2dDO0FBQ0Q7QUFFekIsU0FBU1M7O0lBQ3RCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHWCxxREFBYyxDQUFDO0lBQzdDLE1BQU0sQ0FBQ2EsWUFBWUMsY0FBYyxHQUFHZCxxREFBYyxDQUFDO0lBRW5ELE1BQU0sQ0FBQ2UsUUFBUUMsVUFBVSxHQUFHaEIscURBQWMsQ0FBQztRQUN6Q2lCLFVBQVU7UUFDVkMsT0FBTztRQUNQQyxTQUFTO0lBQ1g7SUFFQSxNQUFNQyxlQUFlLE9BQ25CQztRQUVBLElBQUksQ0FBQ0EsR0FBRztRQUVSQSxFQUFFQyxjQUFjO1FBQ2hCWCxXQUFXO1FBRVgsSUFBSTtZQUNGLE1BQU1ULGlFQUFnQixDQUNwQixtQkFDQSxvQkFDQXNCLEtBQUtDLFNBQVMsQ0FBQ1YsU0FDZjtnQkFDRVcsV0FBVztZQUNiO1lBR0ZaLGNBQWM7WUFDZEgsV0FBVztZQUVYZ0IsV0FBVyxJQUFNYixjQUFjLFNBQVM7UUFDMUMsRUFBRSxPQUFPTyxHQUFHO1lBQ1ZPLFFBQVFDLEdBQUcsQ0FBQ1I7WUFDWlAsY0FBYztZQUNkSCxXQUFXO1lBRVhnQixXQUFXLElBQU1iLGNBQWMsU0FBUztRQUMxQztJQUNGO0lBRUEscUJBQ0UsOERBQUNnQjtRQUFPQyxXQUFVO2tCQUNoQiw0RUFBQzVCLGtFQUFPQTtZQUFDNkIsSUFBRztZQUFVQyxZQUFXOzs4QkFDL0IsOERBQUM3QixnRUFBS0E7b0JBQ0o4QixPQUFNO29CQUNOQyxhQUFZO29CQUNaQyxlQUFjOzs7Ozs7OEJBR2hCLDhEQUFDQztvQkFBSU4sV0FBVTs7c0NBQ2IsOERBQUNNOzRCQUFJTixXQUFVOzs4Q0FDYiw4REFBQ087b0NBQUVQLFdBQVU7OENBQXlDOzs7Ozs7OENBR3RELDhEQUFDTztvQ0FBRVAsV0FBVTs4Q0FBNkM7Ozs7Ozs4Q0FHMUQsOERBQUNPO29DQUFFUCxXQUFVOzhDQUEwRDs7Ozs7Ozs7Ozs7O3NDQUt6RSw4REFBQ1E7NEJBQ0NDLFVBQVUsQ0FBQ25CLElBQU1ELGFBQWFDOzRCQUM5QlUsV0FBVTs7OENBRVYsOERBQUMxQiwyREFBS0E7b0NBQ0pvQyxPQUFNO29DQUNOQyxNQUFLO29DQUNMQyxhQUFZO29DQUNaQyxPQUFPN0IsT0FBT0UsUUFBUTtvQ0FDdEI0QixVQUFVLENBQUN4QixJQUNUTCxVQUFVOzRDQUFFLEdBQUdELE1BQU07NENBQUVFLFVBQVVJLEVBQUV5QixNQUFNLENBQUNGLEtBQUs7d0NBQUM7Ozs7Ozs4Q0FHcEQsOERBQUN2QywyREFBS0E7b0NBQ0pvQyxPQUFNO29DQUNOQyxNQUFLO29DQUNMQyxhQUFZO29DQUNaQyxPQUFPN0IsT0FBT0csS0FBSztvQ0FDbkIyQixVQUFVLENBQUN4QixJQUFNTCxVQUFVOzRDQUFFLEdBQUdELE1BQU07NENBQUVHLE9BQU9HLEVBQUV5QixNQUFNLENBQUNGLEtBQUs7d0NBQUM7Ozs7Ozs4Q0FHaEUsOERBQUN0Qyw4REFBUUE7b0NBQ1BtQyxPQUFNO29DQUNOQyxNQUFLO29DQUNMQyxhQUFZO29DQUNaQyxPQUFPN0IsT0FBT0ksT0FBTztvQ0FDckIwQixVQUFVLENBQUN4QixJQUNUTCxVQUFVOzRDQUFFLEdBQUdELE1BQU07NENBQUVJLFNBQVNFLEVBQUV5QixNQUFNLENBQUNGLEtBQUs7d0NBQUM7Ozs7Ozs4Q0FJbkQsOERBQUNHO29DQUNDQyxNQUFLO29DQUNMQyxVQUNFLENBQUNsQyxPQUFPRyxLQUFLLElBQUksQ0FBQ0gsT0FBT0UsUUFBUSxJQUFJLENBQUNGLE9BQU9JLE9BQU8sSUFBSVQ7b0NBRTFEcUIsV0FBVTs4Q0FFVHJCLHdCQUNDLDhEQUFDMkI7d0NBQUlOLFdBQVU7a0RBQ2IsNEVBQUN2QixpREFBTUE7Ozs7Ozs7OzsrQ0FHVEs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFPUiw4REFBQ3dCO29CQUFJTixXQUFVOzhCQUNaeEIsa0RBQU1BLENBQUMyQyxHQUFHLENBQUMsQ0FBQ0MsdUJBQ1gsOERBQUNsRCxpREFBSUE7NEJBRUhtRCxNQUFNRCxPQUFPRSxJQUFJOzRCQUNqQlAsUUFBTzs0QkFDUGYsV0FBVTtzQ0FFVG9CLE9BQU9ULElBQUk7MkJBTFBTLE9BQU9ULElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVk5QjtHQWhJd0JqQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9MZXRzVGFsay50c3g/NGM3NyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IGVtYWlsanMgZnJvbSBcIkBlbWFpbGpzL2Jyb3dzZXJcIjtcblxuLy8gY29tcG9uZW50c1xuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIn4vY29tcG9uZW50cy9zaGFyZWQvU2VjdGlvblwiO1xuaW1wb3J0IFRpdGxlIGZyb20gXCJ+L2NvbXBvbmVudHMvc2hhcmVkL1RpdGxlXCI7XG5pbXBvcnQgeyBJbnB1dCwgVGV4dEFyZWEgfSBmcm9tIFwifi9jb21wb25lbnRzL3NoYXJlZC9JbnB1dFwiO1xuXG4vLyBjb25maWdcbmltcG9ydCB7IFNvY2lhbCB9IGZyb20gXCJ+L2NvbmZpZy9zb2NpYWxcIjtcbmltcG9ydCB7IExvYWRlciB9IGZyb20gXCIuL3NoYXJlZC9JY29uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMZXRzVGFsaygpIHtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbYnV0dG9uVGV4dCwgc2V0QnV0dG9uVGV4dF0gPSBSZWFjdC51c2VTdGF0ZShcIlNlbmRcIik7XG5cbiAgY29uc3QgW2lucHV0cywgc2V0SW5wdXRzXSA9IFJlYWN0LnVzZVN0YXRlKHtcbiAgICBmdWxsTmFtZTogXCJcIixcbiAgICBlbWFpbDogXCJcIixcbiAgICBtZXNzYWdlOiBcIlwiLFxuICB9KTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoXG4gICAgZTogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4gfCB1bmRlZmluZWRcbiAgKSA9PiB7XG4gICAgaWYgKCFlKSByZXR1cm47XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcblxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBlbWFpbGpzLnNlbmRGb3JtKFxuICAgICAgICBcInNlcnZpY2VfNDl3b3E3alwiLFxuICAgICAgICBcInRlbXBsYXRlX3RjZ3Bia3FcIixcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoaW5wdXRzKSxcbiAgICAgICAge1xuICAgICAgICAgIHB1YmxpY0tleTogXCJQZy1TbFJrR1ZFbWstSlBMX1wiLFxuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICBzZXRCdXR0b25UZXh0KFwiU2VudCFcIik7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRCdXR0b25UZXh0KFwiU2VuZFwiKSwgMjAwMCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICBzZXRCdXR0b25UZXh0KFwiU29ycnkhIEFuIGVycm9yIG9jY3VyZWQuXCIpO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0QnV0dG9uVGV4dChcIlNlbmRcIiksIDIwMDApO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiZml4ZWQgYm90dG9tLTAgdy1mdWxsIGgtc2NyZWVuIC16LTIwXCI+XG4gICAgICA8U2VjdGlvbiBpZD1cImNvbnRhY3RcIiBiYWNrZ3JvdW5kPVwiYmxhY2tcIj5cbiAgICAgICAgPFRpdGxlXG4gICAgICAgICAgdGl0bGU9XCJDb250YWN0XCJcbiAgICAgICAgICBkZXNjcmlwdGlvbj1cIkxldHMgVGFsa1wiXG4gICAgICAgICAgZGVzY0NsYXNzTmFtZT1cInRleHQtd2hpdGUvMTBcIlxuICAgICAgICAvPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC0xMCBzbTpmbGV4LXJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZvbnQtZXh0cmFib2xkIGxlYWRpbmctWzUwcHhdIHNtOmxlYWRpbmctWzc1cHhdIHVwcGVyY2FzZSB0ZXh0LWNlbnRlciBzbTp0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgc206dGV4dC1bbWF4KG1heCgxMnB4LDIuNXZ3KSldXCI+XG4gICAgICAgICAgICAgIExldHMgYnVpbGQgdG9nZXRoZXJcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzQwcHhdIHNtOnRleHQtW21heChtYXgoMjRweCw0LjV2dykpXVwiPlxuICAgICAgICAgICAgICBzb21ldGhpbmdcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzQ4cHhdIHRleHQtcHJpbWFyeSBzbTp0ZXh0LVttYXgobWF4KDI0cHgsNS41dncpKV1cIj5cbiAgICAgICAgICAgICAgQ09PTFxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgIG9uU3VibWl0PXsoZSkgPT4gaGFuZGxlU3VibWl0KGUpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtNCBmbGV4LTEgbWluLXctWzMwMHB4XSBtYXgtdy1bNDUwcHhdIGZvbnQtYm9sZCBiZy1ibGFjay8yMCByb3VuZGVkLW1kIHB4LTEwIHB5LTUgYm9yZGVyIGJvcmRlci13aGl0ZS8yMFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgIGxhYmVsPVwiRnVsbCBOYW1lXCJcbiAgICAgICAgICAgICAgbmFtZT1cImZ1bGxOYW1lXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGZ1bGwgbmFtZVwiXG4gICAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMuZnVsbE5hbWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICBzZXRJbnB1dHMoeyAuLi5pbnB1dHMsIGZ1bGxOYW1lOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgIGxhYmVsPVwiRW1haWxcIlxuICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgZW1haWxcIlxuICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRzLmVtYWlsfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldElucHV0cyh7IC4uLmlucHV0cywgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPFRleHRBcmVhXG4gICAgICAgICAgICAgIGxhYmVsPVwiTWVzc2FnZVwiXG4gICAgICAgICAgICAgIG5hbWU9XCJtZXNzYWdlXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIG1lc3NhZ2VcIlxuICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRzLm1lc3NhZ2V9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICBzZXRJbnB1dHMoeyAuLi5pbnB1dHMsIG1lc3NhZ2U6IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtcbiAgICAgICAgICAgICAgICAhaW5wdXRzLmVtYWlsIHx8ICFpbnB1dHMuZnVsbE5hbWUgfHwgIWlucHV0cy5tZXNzYWdlIHx8IGxvYWRpbmdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWxnIGJnLXByaW1hcnkvOTAgcm91bmRlZC1mdWxsIHB5LTMgdy1mdWxsIGhvdmVyOmJnLXByaW1hcnkgdHJhbnNpdGlvbi1jb2xvcnMgZGlzYWJsZWQ6YmctcHJpbWFyeS8yMCBkaXNhYmxlZDp0ZXh0LXdoaXRlLzUwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2xvYWRpbmcgPyAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZpdCBteC1hdXRvIGFuaW1hdGUtc3BpblwiPlxuICAgICAgICAgICAgICAgICAgPExvYWRlciAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHRcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIHNvY2lhbCBsaW5rcyAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBnYXAtNCBweS00IGJvcmRlci10IGJvcmRlci10LXNvbGlkIGJvcmRlci10LXdoaXRlLzIwIG10LTggc206YWJzb2x1dGUgbGVmdC0wIGJvdHRvbS0wIHNtOm10LTBcIj5cbiAgICAgICAgICB7U29jaWFsLm1hcCgoc29jaWFsKSA9PiAoXG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICBrZXk9e3NvY2lhbC5uYW1lfVxuICAgICAgICAgICAgICBocmVmPXtzb2NpYWwubGlua31cbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LXNlbWlib2xkIGhvdmVyOnRleHQtcHJpbWFyeSB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtzb2NpYWwubmFtZX1cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1NlY3Rpb24+XG4gICAgPC9mb290ZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwiZW1haWxqcyIsIlNlY3Rpb24iLCJUaXRsZSIsIklucHV0IiwiVGV4dEFyZWEiLCJTb2NpYWwiLCJMb2FkZXIiLCJMZXRzVGFsayIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlU3RhdGUiLCJidXR0b25UZXh0Iiwic2V0QnV0dG9uVGV4dCIsImlucHV0cyIsInNldElucHV0cyIsImZ1bGxOYW1lIiwiZW1haWwiLCJtZXNzYWdlIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2VuZEZvcm0iLCJKU09OIiwic3RyaW5naWZ5IiwicHVibGljS2V5Iiwic2V0VGltZW91dCIsImNvbnNvbGUiLCJsb2ciLCJmb290ZXIiLCJjbGFzc05hbWUiLCJpZCIsImJhY2tncm91bmQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZGVzY0NsYXNzTmFtZSIsImRpdiIsInAiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsIm5hbWUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJidXR0b24iLCJ0eXBlIiwiZGlzYWJsZWQiLCJtYXAiLCJzb2NpYWwiLCJocmVmIiwibGluayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/LetsTalk.tsx\n"));

/***/ })

});