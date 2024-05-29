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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LetsTalk; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emailjs/browser */ \"(app-pages-browser)/./node_modules/@emailjs/browser/es/index.js\");\n/* harmony import */ var _components_shared_Section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/components/shared/Section */ \"(app-pages-browser)/./src/components/shared/Section.tsx\");\n/* harmony import */ var _components_shared_Title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/components/shared/Title */ \"(app-pages-browser)/./src/components/shared/Title.tsx\");\n/* harmony import */ var _components_shared_Icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/components/shared/Icons */ \"(app-pages-browser)/./src/components/shared/Icons.tsx\");\n/* harmony import */ var _components_shared_Input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/components/shared/Input */ \"(app-pages-browser)/./src/components/shared/Input.tsx\");\n/* harmony import */ var _config_social__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/config/social */ \"(app-pages-browser)/./src/config/social.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n// components\n\n\n\n\n// config\n\nfunction LetsTalk() {\n    _s();\n    const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const [disabledButton, setDisabledButton] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(true);\n    const [buttonText, setButtonText] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"Send\");\n    const formRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    const checkDisabled = ()=>{\n        if (!formRef || !formRef.current) return setDisabledButton(true);\n        const fullName = formRef.current[0];\n        const email = formRef.current[1];\n        const message = formRef.current[2];\n        // @ts-ignore // kalkacak\n        if (!fullName.value || !email.value || !message.value) {\n            setDisabledButton(true);\n        } else {\n            setDisabledButton(false);\n        }\n    };\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        console.log(disabledButton);\n    }, [\n        disabledButton\n    ]);\n    const handleSubmit = async (e)=>{\n        if (!e) return;\n        e.preventDefault();\n        setLoading(true);\n        try {\n            await _emailjs_browser__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sendForm(\"service_49woq7j\", \"template_tcgpbkq\", e.currentTarget, {\n                publicKey: \"Pg-SlRkGVEmk-JPL_\"\n            });\n            setButtonText(\"Sent!\");\n            setLoading(false);\n            setTimeout(()=>setButtonText(\"Send\"), 2000);\n        } catch (e) {\n            setButtonText(\"Sorry! An error occured.\");\n            setLoading(false);\n            setTimeout(()=>setButtonText(\"Send\"), 2000);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n        className: \"fixed bottom-0 w-full h-screen -z-20\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Section__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            id: \"contact\",\n            background: \"black\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Title__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    title: \"Contact\",\n                    description: \"Lets Talk\",\n                    descClassName: \"text-white/10\"\n                }, void 0, false, {\n                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col items-center justify-between gap-10 sm:flex-row\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex-1 font-extrabold leading-[50px] sm:leading-[75px] uppercase text-center sm:text-left\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-lg sm:text-[max(max(12px,2.5vw))]\",\n                                    children: \"Lets build together\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-[40px] sm:text-[max(max(24px,4.5vw))]\",\n                                    children: \"something\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-[48px] text-primary sm:text-[max(max(24px,5.5vw))]\",\n                                    children: \"COOL\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                            lineNumber: 82,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            ref: formRef,\n                            onSubmit: (e)=>handleSubmit(e),\n                            className: \"flex flex-col gap-4 flex-1 min-w-[300px] max-w-[450px] font-bold bg-black/20 rounded-md px-10 py-5 border border-white/20\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Input__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                                    label: \"Full Name\",\n                                    name: \"fullName\",\n                                    placeholder: \"John Doe\",\n                                    required: true,\n                                    onChange: checkDisabled\n                                }, void 0, false, {\n                                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                                    lineNumber: 99,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Input__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                                    label: \"Email\",\n                                    name: \"email\",\n                                    placeholder: \"johndoe@email.com\",\n                                    onChange: checkDisabled\n                                }, void 0, false, {\n                                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                                    lineNumber: 106,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Input__WEBPACK_IMPORTED_MODULE_7__.TextArea, {\n                                    label: \"Message\",\n                                    name: \"message\",\n                                    placeholder: \"Hello, Mr. Furkan...\",\n                                    onChange: checkDisabled\n                                }, void 0, false, {\n                                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                                    lineNumber: 113,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    disabled: disabledButton || loading,\n                                    className: \"text-lg bg-primary/90 rounded-full py-3 w-full hover:bg-primary transition-colors disabled:bg-primary/20 disabled:text-white/50\",\n                                    children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-fit mx-auto animate-spin\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Icons__WEBPACK_IMPORTED_MODULE_6__.Loader, {}, void 0, false, {\n                                            fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                                            lineNumber: 127,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                                        lineNumber: 126,\n                                        columnNumber: 17\n                                    }, this) : buttonText\n                                }, void 0, false, {\n                                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                                    lineNumber: 120,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                            lineNumber: 94,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                    lineNumber: 81,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full flex justify-center gap-4 py-4 border-t border-t-solid border-t-white/20 mt-8 sm:absolute left-0 bottom-0 sm:mt-0\",\n                    children: _config_social__WEBPACK_IMPORTED_MODULE_8__.Social.map((social)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            href: social.link,\n                            target: \"_blank\",\n                            className: \"text-sm font-semibold hover:text-primary transition-colors\",\n                            children: social.name\n                        }, social.name, false, {\n                            fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                            lineNumber: 139,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n                    lineNumber: 137,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n            lineNumber: 74,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/balancenetwork/Desktop/furkan/portfolio/src/components/LetsTalk.tsx\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, this);\n}\n_s(LetsTalk, \"MHSwu4ZcWmEkpWYsngU+pn8DTCw=\");\n_c = LetsTalk;\nvar _c;\n$RefreshReg$(_c, \"LetsTalk\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0xldHNUYWxrLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBRTBCO0FBQ0c7QUFDVTtBQUV2QyxhQUFhO0FBQ3FDO0FBQ0o7QUFDSztBQUNTO0FBRTVELFNBQVM7QUFDZ0M7QUFFMUIsU0FBU1M7O0lBQ3RCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHWCxxREFBYyxDQUFDO0lBQzdDLE1BQU0sQ0FBQ2EsZ0JBQWdCQyxrQkFBa0IsR0FBR2QscURBQWMsQ0FBQztJQUMzRCxNQUFNLENBQUNlLFlBQVlDLGNBQWMsR0FBR2hCLHFEQUFjLENBQUM7SUFFbkQsTUFBTWlCLFVBQVVqQixtREFBWSxDQUFrQjtJQUU5QyxNQUFNbUIsZ0JBQWdCO1FBQ3BCLElBQUksQ0FBQ0YsV0FBVyxDQUFDQSxRQUFRRyxPQUFPLEVBQUUsT0FBT04sa0JBQWtCO1FBRTNELE1BQU1PLFdBQVdKLFFBQVFHLE9BQU8sQ0FBQyxFQUFFO1FBQ25DLE1BQU1FLFFBQVFMLFFBQVFHLE9BQU8sQ0FBQyxFQUFFO1FBQ2hDLE1BQU1HLFVBQVVOLFFBQVFHLE9BQU8sQ0FBQyxFQUFFO1FBRWxDLHlCQUF5QjtRQUN6QixJQUFJLENBQUNDLFNBQVNHLEtBQUssSUFBSSxDQUFDRixNQUFNRSxLQUFLLElBQUksQ0FBQ0QsUUFBUUMsS0FBSyxFQUFFO1lBQ3JEVixrQkFBa0I7UUFDcEIsT0FBTztZQUNMQSxrQkFBa0I7UUFDcEI7SUFDRjtJQUVBZCxzREFBZSxDQUFDO1FBQ2QwQixRQUFRQyxHQUFHLENBQUNkO0lBQ2QsR0FBRztRQUFDQTtLQUFlO0lBRW5CLE1BQU1lLGVBQWUsT0FDbkJDO1FBRUEsSUFBSSxDQUFDQSxHQUFHO1FBRVJBLEVBQUVDLGNBQWM7UUFDaEJuQixXQUFXO1FBRVgsSUFBSTtZQUNGLE1BQU1ULGlFQUFnQixDQUNwQixtQkFDQSxvQkFDQTJCLEVBQUVHLGFBQWEsRUFDZjtnQkFDRUMsV0FBVztZQUNiO1lBR0ZqQixjQUFjO1lBQ2RMLFdBQVc7WUFFWHVCLFdBQVcsSUFBTWxCLGNBQWMsU0FBUztRQUMxQyxFQUFFLFVBQU07WUFDTkEsY0FBYztZQUNkTCxXQUFXO1lBRVh1QixXQUFXLElBQU1sQixjQUFjLFNBQVM7UUFDMUM7SUFDRjtJQUVBLHFCQUNFLDhEQUFDbUI7UUFBT0MsV0FBVTtrQkFDaEIsNEVBQUNqQyxrRUFBT0E7WUFBQ2tDLElBQUc7WUFBVUMsWUFBVzs7OEJBQy9CLDhEQUFDbEMsZ0VBQUtBO29CQUNKbUMsT0FBTTtvQkFDTkMsYUFBWTtvQkFDWkMsZUFBYzs7Ozs7OzhCQUdoQiw4REFBQ0M7b0JBQUlOLFdBQVU7O3NDQUNiLDhEQUFDTTs0QkFBSU4sV0FBVTs7OENBQ2IsOERBQUNPO29DQUFFUCxXQUFVOzhDQUF5Qzs7Ozs7OzhDQUd0RCw4REFBQ087b0NBQUVQLFdBQVU7OENBQTZDOzs7Ozs7OENBRzFELDhEQUFDTztvQ0FBRVAsV0FBVTs4Q0FBMEQ7Ozs7Ozs7Ozs7OztzQ0FLekUsOERBQUNROzRCQUNDQyxLQUFLNUI7NEJBQ0w2QixVQUFVLENBQUNqQixJQUFNRCxhQUFhQzs0QkFDOUJPLFdBQVU7OzhDQUVWLDhEQUFDOUIsMkRBQUtBO29DQUNKeUMsT0FBTTtvQ0FDTkMsTUFBSztvQ0FDTEMsYUFBWTtvQ0FDWkMsUUFBUTtvQ0FDUkMsVUFBVWhDOzs7Ozs7OENBRVosOERBQUNiLDJEQUFLQTtvQ0FDSnlDLE9BQU07b0NBQ05DLE1BQUs7b0NBQ0xDLGFBQVk7b0NBQ1pFLFVBQVVoQzs7Ozs7OzhDQUdaLDhEQUFDWiw4REFBUUE7b0NBQ1B3QyxPQUFNO29DQUNOQyxNQUFLO29DQUNMQyxhQUFZO29DQUNaRSxVQUFVaEM7Ozs7Ozs4Q0FHWiw4REFBQ2lDO29DQUNDQyxNQUFLO29DQUNMQyxVQUFVekMsa0JBQWtCSDtvQ0FDNUIwQixXQUFVOzhDQUVUMUIsd0JBQ0MsOERBQUNnQzt3Q0FBSU4sV0FBVTtrREFDYiw0RUFBQy9CLDREQUFNQTs7Ozs7Ozs7OytDQUdUVTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQU9SLDhEQUFDMkI7b0JBQUlOLFdBQVU7OEJBQ1o1QixrREFBTUEsQ0FBQytDLEdBQUcsQ0FBQyxDQUFDQyx1QkFDWCw4REFBQ3ZELGlEQUFJQTs0QkFFSHdELE1BQU1ELE9BQU9FLElBQUk7NEJBQ2pCQyxRQUFPOzRCQUNQdkIsV0FBVTtzQ0FFVG9CLE9BQU9SLElBQUk7MkJBTFBRLE9BQU9SLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVk5QjtHQXhJd0J2QztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9MZXRzVGFsay50c3g/NGM3NyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IGVtYWlsanMgZnJvbSBcIkBlbWFpbGpzL2Jyb3dzZXJcIjtcblxuLy8gY29tcG9uZW50c1xuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIn4vY29tcG9uZW50cy9zaGFyZWQvU2VjdGlvblwiO1xuaW1wb3J0IFRpdGxlIGZyb20gXCJ+L2NvbXBvbmVudHMvc2hhcmVkL1RpdGxlXCI7XG5pbXBvcnQgeyBMb2FkZXIgfSBmcm9tIFwifi9jb21wb25lbnRzL3NoYXJlZC9JY29uc1wiO1xuaW1wb3J0IHsgSW5wdXQsIFRleHRBcmVhIH0gZnJvbSBcIn4vY29tcG9uZW50cy9zaGFyZWQvSW5wdXRcIjtcblxuLy8gY29uZmlnXG5pbXBvcnQgeyBTb2NpYWwgfSBmcm9tIFwifi9jb25maWcvc29jaWFsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExldHNUYWxrKCkge1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtkaXNhYmxlZEJ1dHRvbiwgc2V0RGlzYWJsZWRCdXR0b25dID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtidXR0b25UZXh0LCBzZXRCdXR0b25UZXh0XSA9IFJlYWN0LnVzZVN0YXRlKFwiU2VuZFwiKTtcblxuICBjb25zdCBmb3JtUmVmID0gUmVhY3QudXNlUmVmPEhUTUxGb3JtRWxlbWVudD4obnVsbCk7XG5cbiAgY29uc3QgY2hlY2tEaXNhYmxlZCA9ICgpID0+IHtcbiAgICBpZiAoIWZvcm1SZWYgfHwgIWZvcm1SZWYuY3VycmVudCkgcmV0dXJuIHNldERpc2FibGVkQnV0dG9uKHRydWUpO1xuXG4gICAgY29uc3QgZnVsbE5hbWUgPSBmb3JtUmVmLmN1cnJlbnRbMF07XG4gICAgY29uc3QgZW1haWwgPSBmb3JtUmVmLmN1cnJlbnRbMV07XG4gICAgY29uc3QgbWVzc2FnZSA9IGZvcm1SZWYuY3VycmVudFsyXTtcblxuICAgIC8vIEB0cy1pZ25vcmUgLy8ga2Fsa2FjYWtcbiAgICBpZiAoIWZ1bGxOYW1lLnZhbHVlIHx8ICFlbWFpbC52YWx1ZSB8fCAhbWVzc2FnZS52YWx1ZSkge1xuICAgICAgc2V0RGlzYWJsZWRCdXR0b24odHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldERpc2FibGVkQnV0dG9uKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhkaXNhYmxlZEJ1dHRvbik7XG4gIH0sIFtkaXNhYmxlZEJ1dHRvbl0pO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChcbiAgICBlOiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PiB8IHVuZGVmaW5lZFxuICApID0+IHtcbiAgICBpZiAoIWUpIHJldHVybjtcblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGVtYWlsanMuc2VuZEZvcm0oXG4gICAgICAgIFwic2VydmljZV80OXdvcTdqXCIsXG4gICAgICAgIFwidGVtcGxhdGVfdGNncGJrcVwiLFxuICAgICAgICBlLmN1cnJlbnRUYXJnZXQsXG4gICAgICAgIHtcbiAgICAgICAgICBwdWJsaWNLZXk6IFwiUGctU2xSa0dWRW1rLUpQTF9cIixcbiAgICAgICAgfVxuICAgICAgKTtcblxuICAgICAgc2V0QnV0dG9uVGV4dChcIlNlbnQhXCIpO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0QnV0dG9uVGV4dChcIlNlbmRcIiksIDIwMDApO1xuICAgIH0gY2F0Y2gge1xuICAgICAgc2V0QnV0dG9uVGV4dChcIlNvcnJ5ISBBbiBlcnJvciBvY2N1cmVkLlwiKTtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHNldEJ1dHRvblRleHQoXCJTZW5kXCIpLCAyMDAwKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImZpeGVkIGJvdHRvbS0wIHctZnVsbCBoLXNjcmVlbiAtei0yMFwiPlxuICAgICAgPFNlY3Rpb24gaWQ9XCJjb250YWN0XCIgYmFja2dyb3VuZD1cImJsYWNrXCI+XG4gICAgICAgIDxUaXRsZVxuICAgICAgICAgIHRpdGxlPVwiQ29udGFjdFwiXG4gICAgICAgICAgZGVzY3JpcHRpb249XCJMZXRzIFRhbGtcIlxuICAgICAgICAgIGRlc2NDbGFzc05hbWU9XCJ0ZXh0LXdoaXRlLzEwXCJcbiAgICAgICAgLz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBnYXAtMTAgc206ZmxleC1yb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmb250LWV4dHJhYm9sZCBsZWFkaW5nLVs1MHB4XSBzbTpsZWFkaW5nLVs3NXB4XSB1cHBlcmNhc2UgdGV4dC1jZW50ZXIgc206dGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIHNtOnRleHQtW21heChtYXgoMTJweCwyLjV2dykpXVwiPlxuICAgICAgICAgICAgICBMZXRzIGJ1aWxkIHRvZ2V0aGVyXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVs0MHB4XSBzbTp0ZXh0LVttYXgobWF4KDI0cHgsNC41dncpKV1cIj5cbiAgICAgICAgICAgICAgc29tZXRoaW5nXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVs0OHB4XSB0ZXh0LXByaW1hcnkgc206dGV4dC1bbWF4KG1heCgyNHB4LDUuNXZ3KSldXCI+XG4gICAgICAgICAgICAgIENPT0xcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICByZWY9e2Zvcm1SZWZ9XG4gICAgICAgICAgICBvblN1Ym1pdD17KGUpID0+IGhhbmRsZVN1Ym1pdChlKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTQgZmxleC0xIG1pbi13LVszMDBweF0gbWF4LXctWzQ1MHB4XSBmb250LWJvbGQgYmctYmxhY2svMjAgcm91bmRlZC1tZCBweC0xMCBweS01IGJvcmRlciBib3JkZXItd2hpdGUvMjBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICBsYWJlbD1cIkZ1bGwgTmFtZVwiXG4gICAgICAgICAgICAgIG5hbWU9XCJmdWxsTmFtZVwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSm9obiBEb2VcIlxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICBvbkNoYW5nZT17Y2hlY2tEaXNhYmxlZH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiam9obmRvZUBlbWFpbC5jb21cIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17Y2hlY2tEaXNhYmxlZH1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxUZXh0QXJlYVxuICAgICAgICAgICAgICBsYWJlbD1cIk1lc3NhZ2VcIlxuICAgICAgICAgICAgICBuYW1lPVwibWVzc2FnZVwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSGVsbG8sIE1yLiBGdXJrYW4uLi5cIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17Y2hlY2tEaXNhYmxlZH1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZEJ1dHRvbiB8fCBsb2FkaW5nfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWxnIGJnLXByaW1hcnkvOTAgcm91bmRlZC1mdWxsIHB5LTMgdy1mdWxsIGhvdmVyOmJnLXByaW1hcnkgdHJhbnNpdGlvbi1jb2xvcnMgZGlzYWJsZWQ6YmctcHJpbWFyeS8yMCBkaXNhYmxlZDp0ZXh0LXdoaXRlLzUwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2xvYWRpbmcgPyAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZpdCBteC1hdXRvIGFuaW1hdGUtc3BpblwiPlxuICAgICAgICAgICAgICAgICAgPExvYWRlciAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHRcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIHNvY2lhbCBsaW5rcyAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBnYXAtNCBweS00IGJvcmRlci10IGJvcmRlci10LXNvbGlkIGJvcmRlci10LXdoaXRlLzIwIG10LTggc206YWJzb2x1dGUgbGVmdC0wIGJvdHRvbS0wIHNtOm10LTBcIj5cbiAgICAgICAgICB7U29jaWFsLm1hcCgoc29jaWFsKSA9PiAoXG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICBrZXk9e3NvY2lhbC5uYW1lfVxuICAgICAgICAgICAgICBocmVmPXtzb2NpYWwubGlua31cbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LXNlbWlib2xkIGhvdmVyOnRleHQtcHJpbWFyeSB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtzb2NpYWwubmFtZX1cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1NlY3Rpb24+XG4gICAgPC9mb290ZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwiZW1haWxqcyIsIlNlY3Rpb24iLCJUaXRsZSIsIkxvYWRlciIsIklucHV0IiwiVGV4dEFyZWEiLCJTb2NpYWwiLCJMZXRzVGFsayIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlU3RhdGUiLCJkaXNhYmxlZEJ1dHRvbiIsInNldERpc2FibGVkQnV0dG9uIiwiYnV0dG9uVGV4dCIsInNldEJ1dHRvblRleHQiLCJmb3JtUmVmIiwidXNlUmVmIiwiY2hlY2tEaXNhYmxlZCIsImN1cnJlbnQiLCJmdWxsTmFtZSIsImVtYWlsIiwibWVzc2FnZSIsInZhbHVlIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNlbmRGb3JtIiwiY3VycmVudFRhcmdldCIsInB1YmxpY0tleSIsInNldFRpbWVvdXQiLCJmb290ZXIiLCJjbGFzc05hbWUiLCJpZCIsImJhY2tncm91bmQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZGVzY0NsYXNzTmFtZSIsImRpdiIsInAiLCJmb3JtIiwicmVmIiwib25TdWJtaXQiLCJsYWJlbCIsIm5hbWUiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwib25DaGFuZ2UiLCJidXR0b24iLCJ0eXBlIiwiZGlzYWJsZWQiLCJtYXAiLCJzb2NpYWwiLCJocmVmIiwibGluayIsInRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/LetsTalk.tsx\n"));

/***/ })

});