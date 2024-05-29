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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LetsTalk; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emailjs/browser */ \"(app-pages-browser)/./node_modules/@emailjs/browser/es/index.js\");\n/* harmony import */ var _components_shared_Section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/components/shared/Section */ \"(app-pages-browser)/./src/components/shared/Section.tsx\");\n/* harmony import */ var _components_shared_Title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/components/shared/Title */ \"(app-pages-browser)/./src/components/shared/Title.tsx\");\n/* harmony import */ var _components_shared_Icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/components/shared/Icons */ \"(app-pages-browser)/./src/components/shared/Icons.tsx\");\n/* harmony import */ var _components_shared_Input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/components/shared/Input */ \"(app-pages-browser)/./src/components/shared/Input.tsx\");\n/* harmony import */ var _config_social__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/config/social */ \"(app-pages-browser)/./src/config/social.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n// components\n\n\n\n\n// config\n\nfunction LetsTalk() {\n    _s();\n    const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const [disabledButton, setDisabledButton] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(true);\n    const [buttonText, setButtonText] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"Send\");\n    const formRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    const checkDisabled = ()=>{\n        if (!formRef || !formRef.current) return setDisabledButton(true);\n        const fullName = formRef.current[0];\n        const email = formRef.current[1];\n        const message = formRef.current[2];\n        // @ts-ignore // kalkacak\n        if (!fullName.value || !email.value || !message.value) return setDisabledButton(true);\n        setDisabledButton(false);\n    };\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        console.log(disabledButton);\n    }, [\n        disabledButton\n    ]);\n    const handleSubmit = async (e)=>{\n        if (!e) return;\n        e.preventDefault();\n        setLoading(true);\n        try {\n            await _emailjs_browser__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sendForm(\"service_49woq7j\", \"template_tcgpbkq\", e.currentTarget, {\n                publicKey: \"Pg-SlRkGVEmk-JPL_\"\n            });\n            setButtonText(\"Sent!\");\n            setLoading(false);\n            setTimeout(()=>setButtonText(\"Send\"), 2000);\n        } catch (e) {\n            setButtonText(\"Sorry! An error occured.\");\n            setLoading(false);\n            setTimeout(()=>setButtonText(\"Send\"), 2000);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n        className: \"fixed bottom-0 w-full h-screen -z-20\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Section__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            id: \"contact\",\n            background: \"black\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Title__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    title: \"Contact\",\n                    description: \"Lets Talk\",\n                    descClassName: \"text-white/10\"\n                }, void 0, false, {\n                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col items-center justify-between gap-10 sm:flex-row\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex-1 font-extrabold leading-[50px] sm:leading-[75px] uppercase text-center sm:text-left\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-lg sm:text-[max(max(12px,2.5vw))]\",\n                                    children: \"Lets build together\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-[40px] sm:text-[max(max(24px,4.5vw))]\",\n                                    children: \"something\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-[48px] text-primary sm:text-[max(max(24px,5.5vw))]\",\n                                    children: \"COOL\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            ref: formRef,\n                            onSubmit: (e)=>handleSubmit(e),\n                            className: \"flex flex-col gap-4 flex-1 min-w-[300px] max-w-[450px] font-bold bg-black/20 rounded-md px-10 py-5 border border-white/20\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Input__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                                    label: \"Full Name\",\n                                    name: \"fullName\",\n                                    placeholder: \"John Doe\",\n                                    required: true,\n                                    onChange: checkDisabled\n                                }, void 0, false, {\n                                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                                    lineNumber: 98,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Input__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                                    label: \"Email\",\n                                    name: \"email\",\n                                    placeholder: \"johndoe@email.com\",\n                                    onChange: checkDisabled\n                                }, void 0, false, {\n                                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                                    lineNumber: 105,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Input__WEBPACK_IMPORTED_MODULE_7__.TextArea, {\n                                    label: \"Message\",\n                                    name: \"message\",\n                                    placeholder: \"Hello, Mr. Furkan...\",\n                                    onChange: checkDisabled\n                                }, void 0, false, {\n                                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                                    lineNumber: 112,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    disabled: disabledButton || loading,\n                                    className: \"text-lg bg-primary/90 rounded-full py-3 w-full hover:bg-primary transition-colors disabled:bg-primary/20 disabled:text-white/50\",\n                                    children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-fit mx-auto animate-spin\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Icons__WEBPACK_IMPORTED_MODULE_6__.Loader, {}, void 0, false, {\n                                            fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                                            lineNumber: 126,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                                        lineNumber: 125,\n                                        columnNumber: 17\n                                    }, this) : buttonText\n                                }, void 0, false, {\n                                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                                    lineNumber: 119,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                    lineNumber: 80,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full flex justify-center gap-4 py-4 border-t border-t-solid border-t-white/20 mt-8 sm:absolute left-0 bottom-0 sm:mt-0\",\n                    children: _config_social__WEBPACK_IMPORTED_MODULE_8__.Social.map((social)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            href: social.link,\n                            target: \"_blank\",\n                            className: \"text-sm font-semibold hover:text-primary transition-colors\",\n                            children: social.name\n                        }, social.name, false, {\n                            fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                            lineNumber: 138,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                    lineNumber: 136,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n            lineNumber: 73,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n        lineNumber: 72,\n        columnNumber: 5\n    }, this);\n}\n_s(LetsTalk, \"MHSwu4ZcWmEkpWYsngU+pn8DTCw=\");\n_c = LetsTalk;\nvar _c;\n$RefreshReg$(_c, \"LetsTalk\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0xldHNUYWxrLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBRTBCO0FBQ0c7QUFDVTtBQUV2QyxhQUFhO0FBQ3FDO0FBQ0o7QUFDSztBQUNTO0FBRTVELFNBQVM7QUFDZ0M7QUFFMUIsU0FBU1M7O0lBQ3RCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHWCxxREFBYyxDQUFDO0lBQzdDLE1BQU0sQ0FBQ2EsZ0JBQWdCQyxrQkFBa0IsR0FBR2QscURBQWMsQ0FBQztJQUMzRCxNQUFNLENBQUNlLFlBQVlDLGNBQWMsR0FBR2hCLHFEQUFjLENBQUM7SUFFbkQsTUFBTWlCLFVBQVVqQixtREFBWSxDQUFrQjtJQUU5QyxNQUFNbUIsZ0JBQWdCO1FBQ3BCLElBQUksQ0FBQ0YsV0FBVyxDQUFDQSxRQUFRRyxPQUFPLEVBQUUsT0FBT04sa0JBQWtCO1FBRTNELE1BQU1PLFdBQVdKLFFBQVFHLE9BQU8sQ0FBQyxFQUFFO1FBQ25DLE1BQU1FLFFBQVFMLFFBQVFHLE9BQU8sQ0FBQyxFQUFFO1FBQ2hDLE1BQU1HLFVBQVVOLFFBQVFHLE9BQU8sQ0FBQyxFQUFFO1FBRWxDLHlCQUF5QjtRQUN6QixJQUFJLENBQUNDLFNBQVNHLEtBQUssSUFBSSxDQUFDRixNQUFNRSxLQUFLLElBQUksQ0FBQ0QsUUFBUUMsS0FBSyxFQUNuRCxPQUFPVixrQkFBa0I7UUFFM0JBLGtCQUFrQjtJQUNwQjtJQUVBZCxzREFBZSxDQUFDO1FBQ2QwQixRQUFRQyxHQUFHLENBQUNkO0lBQ2QsR0FBRztRQUFDQTtLQUFlO0lBRW5CLE1BQU1lLGVBQWUsT0FDbkJDO1FBRUEsSUFBSSxDQUFDQSxHQUFHO1FBRVJBLEVBQUVDLGNBQWM7UUFDaEJuQixXQUFXO1FBRVgsSUFBSTtZQUNGLE1BQU1ULGlFQUFnQixDQUNwQixtQkFDQSxvQkFDQTJCLEVBQUVHLGFBQWEsRUFDZjtnQkFDRUMsV0FBVztZQUNiO1lBR0ZqQixjQUFjO1lBQ2RMLFdBQVc7WUFFWHVCLFdBQVcsSUFBTWxCLGNBQWMsU0FBUztRQUMxQyxFQUFFLFVBQU07WUFDTkEsY0FBYztZQUNkTCxXQUFXO1lBRVh1QixXQUFXLElBQU1sQixjQUFjLFNBQVM7UUFDMUM7SUFDRjtJQUVBLHFCQUNFLDhEQUFDbUI7UUFBT0MsV0FBVTtrQkFDaEIsNEVBQUNqQyxrRUFBT0E7WUFBQ2tDLElBQUc7WUFBVUMsWUFBVzs7OEJBQy9CLDhEQUFDbEMsZ0VBQUtBO29CQUNKbUMsT0FBTTtvQkFDTkMsYUFBWTtvQkFDWkMsZUFBYzs7Ozs7OzhCQUdoQiw4REFBQ0M7b0JBQUlOLFdBQVU7O3NDQUNiLDhEQUFDTTs0QkFBSU4sV0FBVTs7OENBQ2IsOERBQUNPO29DQUFFUCxXQUFVOzhDQUF5Qzs7Ozs7OzhDQUd0RCw4REFBQ087b0NBQUVQLFdBQVU7OENBQTZDOzs7Ozs7OENBRzFELDhEQUFDTztvQ0FBRVAsV0FBVTs4Q0FBMEQ7Ozs7Ozs7Ozs7OztzQ0FLekUsOERBQUNROzRCQUNDQyxLQUFLNUI7NEJBQ0w2QixVQUFVLENBQUNqQixJQUFNRCxhQUFhQzs0QkFDOUJPLFdBQVU7OzhDQUVWLDhEQUFDOUIsMkRBQUtBO29DQUNKeUMsT0FBTTtvQ0FDTkMsTUFBSztvQ0FDTEMsYUFBWTtvQ0FDWkMsUUFBUTtvQ0FDUkMsVUFBVWhDOzs7Ozs7OENBRVosOERBQUNiLDJEQUFLQTtvQ0FDSnlDLE9BQU07b0NBQ05DLE1BQUs7b0NBQ0xDLGFBQVk7b0NBQ1pFLFVBQVVoQzs7Ozs7OzhDQUdaLDhEQUFDWiw4REFBUUE7b0NBQ1B3QyxPQUFNO29DQUNOQyxNQUFLO29DQUNMQyxhQUFZO29DQUNaRSxVQUFVaEM7Ozs7Ozs4Q0FHWiw4REFBQ2lDO29DQUNDQyxNQUFLO29DQUNMQyxVQUFVekMsa0JBQWtCSDtvQ0FDNUIwQixXQUFVOzhDQUVUMUIsd0JBQ0MsOERBQUNnQzt3Q0FBSU4sV0FBVTtrREFDYiw0RUFBQy9CLDREQUFNQTs7Ozs7Ozs7OytDQUdUVTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQU9SLDhEQUFDMkI7b0JBQUlOLFdBQVU7OEJBQ1o1QixrREFBTUEsQ0FBQytDLEdBQUcsQ0FBQyxDQUFDQyx1QkFDWCw4REFBQ3ZELGlEQUFJQTs0QkFFSHdELE1BQU1ELE9BQU9FLElBQUk7NEJBQ2pCQyxRQUFPOzRCQUNQdkIsV0FBVTtzQ0FFVG9CLE9BQU9SLElBQUk7MkJBTFBRLE9BQU9SLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVk5QjtHQXZJd0J2QztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9MZXRzVGFsay50c3g/NGM3NyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IGVtYWlsanMgZnJvbSBcIkBlbWFpbGpzL2Jyb3dzZXJcIjtcblxuLy8gY29tcG9uZW50c1xuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIn4vY29tcG9uZW50cy9zaGFyZWQvU2VjdGlvblwiO1xuaW1wb3J0IFRpdGxlIGZyb20gXCJ+L2NvbXBvbmVudHMvc2hhcmVkL1RpdGxlXCI7XG5pbXBvcnQgeyBMb2FkZXIgfSBmcm9tIFwifi9jb21wb25lbnRzL3NoYXJlZC9JY29uc1wiO1xuaW1wb3J0IHsgSW5wdXQsIFRleHRBcmVhIH0gZnJvbSBcIn4vY29tcG9uZW50cy9zaGFyZWQvSW5wdXRcIjtcblxuLy8gY29uZmlnXG5pbXBvcnQgeyBTb2NpYWwgfSBmcm9tIFwifi9jb25maWcvc29jaWFsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExldHNUYWxrKCkge1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtkaXNhYmxlZEJ1dHRvbiwgc2V0RGlzYWJsZWRCdXR0b25dID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtidXR0b25UZXh0LCBzZXRCdXR0b25UZXh0XSA9IFJlYWN0LnVzZVN0YXRlKFwiU2VuZFwiKTtcblxuICBjb25zdCBmb3JtUmVmID0gUmVhY3QudXNlUmVmPEhUTUxGb3JtRWxlbWVudD4obnVsbCk7XG5cbiAgY29uc3QgY2hlY2tEaXNhYmxlZCA9ICgpID0+IHtcbiAgICBpZiAoIWZvcm1SZWYgfHwgIWZvcm1SZWYuY3VycmVudCkgcmV0dXJuIHNldERpc2FibGVkQnV0dG9uKHRydWUpO1xuXG4gICAgY29uc3QgZnVsbE5hbWUgPSBmb3JtUmVmLmN1cnJlbnRbMF07XG4gICAgY29uc3QgZW1haWwgPSBmb3JtUmVmLmN1cnJlbnRbMV07XG4gICAgY29uc3QgbWVzc2FnZSA9IGZvcm1SZWYuY3VycmVudFsyXTtcblxuICAgIC8vIEB0cy1pZ25vcmUgLy8ga2Fsa2FjYWtcbiAgICBpZiAoIWZ1bGxOYW1lLnZhbHVlIHx8ICFlbWFpbC52YWx1ZSB8fCAhbWVzc2FnZS52YWx1ZSlcbiAgICAgIHJldHVybiBzZXREaXNhYmxlZEJ1dHRvbih0cnVlKTtcblxuICAgIHNldERpc2FibGVkQnV0dG9uKGZhbHNlKTtcbiAgfTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGRpc2FibGVkQnV0dG9uKTtcbiAgfSwgW2Rpc2FibGVkQnV0dG9uXSk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKFxuICAgIGU6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+IHwgdW5kZWZpbmVkXG4gICkgPT4ge1xuICAgIGlmICghZSkgcmV0dXJuO1xuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG5cbiAgICB0cnkge1xuICAgICAgYXdhaXQgZW1haWxqcy5zZW5kRm9ybShcbiAgICAgICAgXCJzZXJ2aWNlXzQ5d29xN2pcIixcbiAgICAgICAgXCJ0ZW1wbGF0ZV90Y2dwYmtxXCIsXG4gICAgICAgIGUuY3VycmVudFRhcmdldCxcbiAgICAgICAge1xuICAgICAgICAgIHB1YmxpY0tleTogXCJQZy1TbFJrR1ZFbWstSlBMX1wiLFxuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICBzZXRCdXR0b25UZXh0KFwiU2VudCFcIik7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRCdXR0b25UZXh0KFwiU2VuZFwiKSwgMjAwMCk7XG4gICAgfSBjYXRjaCB7XG4gICAgICBzZXRCdXR0b25UZXh0KFwiU29ycnkhIEFuIGVycm9yIG9jY3VyZWQuXCIpO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0QnV0dG9uVGV4dChcIlNlbmRcIiksIDIwMDApO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiZml4ZWQgYm90dG9tLTAgdy1mdWxsIGgtc2NyZWVuIC16LTIwXCI+XG4gICAgICA8U2VjdGlvbiBpZD1cImNvbnRhY3RcIiBiYWNrZ3JvdW5kPVwiYmxhY2tcIj5cbiAgICAgICAgPFRpdGxlXG4gICAgICAgICAgdGl0bGU9XCJDb250YWN0XCJcbiAgICAgICAgICBkZXNjcmlwdGlvbj1cIkxldHMgVGFsa1wiXG4gICAgICAgICAgZGVzY0NsYXNzTmFtZT1cInRleHQtd2hpdGUvMTBcIlxuICAgICAgICAvPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC0xMCBzbTpmbGV4LXJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZvbnQtZXh0cmFib2xkIGxlYWRpbmctWzUwcHhdIHNtOmxlYWRpbmctWzc1cHhdIHVwcGVyY2FzZSB0ZXh0LWNlbnRlciBzbTp0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgc206dGV4dC1bbWF4KG1heCgxMnB4LDIuNXZ3KSldXCI+XG4gICAgICAgICAgICAgIExldHMgYnVpbGQgdG9nZXRoZXJcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzQwcHhdIHNtOnRleHQtW21heChtYXgoMjRweCw0LjV2dykpXVwiPlxuICAgICAgICAgICAgICBzb21ldGhpbmdcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzQ4cHhdIHRleHQtcHJpbWFyeSBzbTp0ZXh0LVttYXgobWF4KDI0cHgsNS41dncpKV1cIj5cbiAgICAgICAgICAgICAgQ09PTFxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgIHJlZj17Zm9ybVJlZn1cbiAgICAgICAgICAgIG9uU3VibWl0PXsoZSkgPT4gaGFuZGxlU3VibWl0KGUpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtNCBmbGV4LTEgbWluLXctWzMwMHB4XSBtYXgtdy1bNDUwcHhdIGZvbnQtYm9sZCBiZy1ibGFjay8yMCByb3VuZGVkLW1kIHB4LTEwIHB5LTUgYm9yZGVyIGJvcmRlci13aGl0ZS8yMFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgIGxhYmVsPVwiRnVsbCBOYW1lXCJcbiAgICAgICAgICAgICAgbmFtZT1cImZ1bGxOYW1lXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJKb2huIERvZVwiXG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtjaGVja0Rpc2FibGVkfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCJcbiAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJqb2huZG9lQGVtYWlsLmNvbVwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtjaGVja0Rpc2FibGVkfVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPFRleHRBcmVhXG4gICAgICAgICAgICAgIGxhYmVsPVwiTWVzc2FnZVwiXG4gICAgICAgICAgICAgIG5hbWU9XCJtZXNzYWdlXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJIZWxsbywgTXIuIEZ1cmthbi4uLlwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtjaGVja0Rpc2FibGVkfVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkQnV0dG9uIHx8IGxvYWRpbmd9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbGcgYmctcHJpbWFyeS85MCByb3VuZGVkLWZ1bGwgcHktMyB3LWZ1bGwgaG92ZXI6YmctcHJpbWFyeSB0cmFuc2l0aW9uLWNvbG9ycyBkaXNhYmxlZDpiZy1wcmltYXJ5LzIwIGRpc2FibGVkOnRleHQtd2hpdGUvNTBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7bG9hZGluZyA/IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZml0IG14LWF1dG8gYW5pbWF0ZS1zcGluXCI+XG4gICAgICAgICAgICAgICAgICA8TG9hZGVyIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dFxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7Lyogc29jaWFsIGxpbmtzICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyIGdhcC00IHB5LTQgYm9yZGVyLXQgYm9yZGVyLXQtc29saWQgYm9yZGVyLXQtd2hpdGUvMjAgbXQtOCBzbTphYnNvbHV0ZSBsZWZ0LTAgYm90dG9tLTAgc206bXQtMFwiPlxuICAgICAgICAgIHtTb2NpYWwubWFwKChzb2NpYWwpID0+IChcbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIGtleT17c29jaWFsLm5hbWV9XG4gICAgICAgICAgICAgIGhyZWY9e3NvY2lhbC5saW5rfVxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgaG92ZXI6dGV4dC1wcmltYXJ5IHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3NvY2lhbC5uYW1lfVxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvU2VjdGlvbj5cbiAgICA8L2Zvb3Rlcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJlbWFpbGpzIiwiU2VjdGlvbiIsIlRpdGxlIiwiTG9hZGVyIiwiSW5wdXQiLCJUZXh0QXJlYSIsIlNvY2lhbCIsIkxldHNUYWxrIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VTdGF0ZSIsImRpc2FibGVkQnV0dG9uIiwic2V0RGlzYWJsZWRCdXR0b24iLCJidXR0b25UZXh0Iiwic2V0QnV0dG9uVGV4dCIsImZvcm1SZWYiLCJ1c2VSZWYiLCJjaGVja0Rpc2FibGVkIiwiY3VycmVudCIsImZ1bGxOYW1lIiwiZW1haWwiLCJtZXNzYWdlIiwidmFsdWUiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2VuZEZvcm0iLCJjdXJyZW50VGFyZ2V0IiwicHVibGljS2V5Iiwic2V0VGltZW91dCIsImZvb3RlciIsImNsYXNzTmFtZSIsImlkIiwiYmFja2dyb3VuZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJkZXNjQ2xhc3NOYW1lIiwiZGl2IiwicCIsImZvcm0iLCJyZWYiLCJvblN1Ym1pdCIsImxhYmVsIiwibmFtZSIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJvbkNoYW5nZSIsImJ1dHRvbiIsInR5cGUiLCJkaXNhYmxlZCIsIm1hcCIsInNvY2lhbCIsImhyZWYiLCJsaW5rIiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/LetsTalk.tsx\n"));

/***/ })

});