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

/***/ "(app-pages-browser)/./components/TODOList.jsx":
/*!*********************************!*\
  !*** ./components/TODOList.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n\nfunction Item(param) {\n    let { item, setTodos } = param;\n    console.log(item);\n    const completeTodo = ()=>{\n        setTodos((prevTodos)=>prevTodos.map((todo)=>todo.id === item.id ? {\n                    ...todo,\n                    is_completed: !todo.is_completed\n                } : todo));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        id: item === null || item === void 0 ? void 0 : item.id,\n        className: \"todo_item\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"todo_items_left\",\n                onClick: completeTodo,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        fill: item.is_completed ? \"#22C55E\" : \"#0d0d0d\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"circle\", {\n                            cx: \"11.998\",\n                            cy: \"11.998\",\n                            fillRule: \"nonzero\",\n                            r: \"9.998\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alisa\\\\Documents\\\\todoProject\\\\to-do-list\\\\components\\\\TODOList.jsx\",\n                            lineNumber: 16,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\alisa\\\\Documents\\\\todoProject\\\\to-do-list\\\\components\\\\TODOList.jsx\",\n                        lineNumber: 15,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        style: item.is_completed ? {\n                            textDecoration: \"line-through\"\n                        } : {},\n                        children: item === null || item === void 0 ? void 0 : item.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\alisa\\\\Documents\\\\todoProject\\\\to-do-list\\\\components\\\\TODOList.jsx\",\n                        lineNumber: 18,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\alisa\\\\Documents\\\\todoProject\\\\to-do-list\\\\components\\\\TODOList.jsx\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"todo_items_right\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"visually-hidden\",\n                                children: \"Edit\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\alisa\\\\Documents\\\\todoProject\\\\to-do-list\\\\components\\\\TODOList.jsx\",\n                                lineNumber: 24,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    d: \"\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\alisa\\\\Documents\\\\todoProject\\\\to-do-list\\\\components\\\\TODOList.jsx\",\n                                    lineNumber: 26,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\alisa\\\\Documents\\\\todoProject\\\\to-do-list\\\\components\\\\TODOList.jsx\",\n                                lineNumber: 25,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\alisa\\\\Documents\\\\todoProject\\\\to-do-list\\\\components\\\\TODOList.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"visually-hidden\",\n                                children: \"Delete\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\alisa\\\\Documents\\\\todoProject\\\\to-do-list\\\\components\\\\TODOList.jsx\",\n                                lineNumber: 30,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    d: \"\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\alisa\\\\Documents\\\\todoProject\\\\to-do-list\\\\components\\\\TODOList.jsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\alisa\\\\Documents\\\\todoProject\\\\to-do-list\\\\components\\\\TODOList.jsx\",\n                                lineNumber: 31,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\alisa\\\\Documents\\\\todoProject\\\\to-do-list\\\\components\\\\TODOList.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\alisa\\\\Documents\\\\todoProject\\\\to-do-list\\\\components\\\\TODOList.jsx\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\alisa\\\\Documents\\\\todoProject\\\\to-do-list\\\\components\\\\TODOList.jsx\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, this);\n}\n_c = Item;\nfunction TODOList(param) {\n    let { todos, setTodos } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ol\", {\n        className: \"todo_list\",\n        children: todos && todos.length > 0 ? todos === null || todos === void 0 ? void 0 : todos.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n                item: item,\n                setTodos: setTodos\n            }, index, false, {\n                fileName: \"C:\\\\Users\\\\alisa\\\\Documents\\\\todoProject\\\\to-do-list\\\\components\\\\TODOList.jsx\",\n                lineNumber: 45,\n                columnNumber: 21\n            }, this)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Seems lonely in here, what are you up to?\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\alisa\\\\Documents\\\\todoProject\\\\to-do-list\\\\components\\\\TODOList.jsx\",\n            lineNumber: 48,\n            columnNumber: 17\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\alisa\\\\Documents\\\\todoProject\\\\to-do-list\\\\components\\\\TODOList.jsx\",\n        lineNumber: 42,\n        columnNumber: 9\n    }, this);\n}\n_c1 = TODOList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TODOList);\nvar _c, _c1;\n$RefreshReg$(_c, \"Item\");\n$RefreshReg$(_c1, \"TODOList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvVE9ET0xpc3QuanN4IiwibWFwcGluZ3MiOiI7OztBQUFBLFNBQVNBLEtBQUssS0FBa0I7UUFBbEIsRUFBRUMsSUFBSSxFQUFFQyxRQUFRLEVBQUUsR0FBbEI7SUFDVkMsUUFBUUMsR0FBRyxDQUFDSDtJQUNaLE1BQU1JLGVBQWU7UUFDakJILFNBQVMsQ0FBQ0ksWUFDTkEsVUFBVUMsR0FBRyxDQUFDLENBQUNDLE9BQ1hBLEtBQUtDLEVBQUUsS0FBS1IsS0FBS1EsRUFBRSxHQUNiO29CQUFFLEdBQUdELElBQUk7b0JBQUVFLGNBQWMsQ0FBQ0YsS0FBS0UsWUFBWTtnQkFBQyxJQUM1Q0Y7SUFHbEI7SUFDQSxxQkFDSSw4REFBQ0c7UUFBR0YsRUFBRSxFQUFFUixpQkFBQUEsMkJBQUFBLEtBQU1RLEVBQUU7UUFBRUcsV0FBVTs7MEJBQ3hCLDhEQUFDQztnQkFBT0QsV0FBVTtnQkFBa0JFLFNBQVNUOztrQ0FDekMsOERBQUNVO3dCQUFJQyxNQUFNZixLQUFLUyxZQUFZLEdBQUcsWUFBWTtrQ0FDdkMsNEVBQUNPOzRCQUFPQyxJQUFHOzRCQUFTQyxJQUFHOzRCQUFTQyxVQUFTOzRCQUFVQyxHQUFFOzs7Ozs7Ozs7OztrQ0FFekQsOERBQUNDO3dCQUFFQyxPQUFPdEIsS0FBS1MsWUFBWSxHQUFHOzRCQUFFYyxnQkFBZ0I7d0JBQWUsSUFBSSxDQUFDO2tDQUMvRHZCLGlCQUFBQSwyQkFBQUEsS0FBTXdCLEtBQUs7Ozs7Ozs7Ozs7OzswQkFHcEIsOERBQUNDO2dCQUFJZCxXQUFVOztrQ0FDWCw4REFBQ0M7OzBDQUNHLDhEQUFDYztnQ0FBS2YsV0FBVTswQ0FBa0I7Ozs7OzswQ0FDbEMsOERBQUNHOzBDQUNHLDRFQUFDYTtvQ0FBS0MsR0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR2hCLDhEQUFDaEI7OzBDQUNHLDhEQUFDYztnQ0FBS2YsV0FBVTswQ0FBa0I7Ozs7OzswQ0FDbEMsOERBQUNHOzBDQUNHLDRFQUFDYTtvQ0FBS0MsR0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNaEM7S0FyQ1M3QjtBQXVDVCxTQUFTOEIsU0FBUyxLQUFtQjtRQUFuQixFQUFFQyxLQUFLLEVBQUU3QixRQUFRLEVBQUUsR0FBbkI7SUFDZCxxQkFDSSw4REFBQzhCO1FBQUdwQixXQUFVO2tCQUNUbUIsU0FBU0EsTUFBTUUsTUFBTSxHQUFHLElBQ3JCRixrQkFBQUEsNEJBQUFBLE1BQU94QixHQUFHLENBQUMsQ0FBQ04sTUFBTWlDLHNCQUNkLDhEQUFDbEM7Z0JBQWlCQyxNQUFNQTtnQkFBTUMsVUFBVUE7ZUFBN0JnQzs7OztzQ0FHZiw4REFBQ1o7c0JBQUU7Ozs7Ozs7Ozs7O0FBSW5CO01BWlNRO0FBY1QsK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UT0RPTGlzdC5qc3g/MWRhNSJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBJdGVtKHsgaXRlbSwgc2V0VG9kb3MgfSkge1xyXG4gICAgY29uc29sZS5sb2coaXRlbSk7XHJcbiAgICBjb25zdCBjb21wbGV0ZVRvZG8gPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0VG9kb3MoKHByZXZUb2RvcykgPT5cclxuICAgICAgICAgICAgcHJldlRvZG9zLm1hcCgodG9kbykgPT5cclxuICAgICAgICAgICAgICAgIHRvZG8uaWQgPT09IGl0ZW0uaWRcclxuICAgICAgICAgICAgICAgICAgICA/IHsgLi4udG9kbywgaXNfY29tcGxldGVkOiAhdG9kby5pc19jb21wbGV0ZWQgfVxyXG4gICAgICAgICAgICAgICAgICAgIDogdG9kb1xyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGxpIGlkPXtpdGVtPy5pZH0gY2xhc3NOYW1lPVwidG9kb19pdGVtXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidG9kb19pdGVtc19sZWZ0XCIgb25DbGljaz17Y29tcGxldGVUb2RvfT5cclxuICAgICAgICAgICAgICAgIDxzdmcgZmlsbD17aXRlbS5pc19jb21wbGV0ZWQgPyBcIiMyMkM1NUVcIiA6IFwiIzBkMGQwZFwifT5cclxuICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiMTEuOTk4XCIgY3k9XCIxMS45OThcIiBmaWxsUnVsZT1cIm5vbnplcm9cIiByPVwiOS45OThcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8cCBzdHlsZT17aXRlbS5pc19jb21wbGV0ZWQgPyB7IHRleHREZWNvcmF0aW9uOiBcImxpbmUtdGhyb3VnaFwiIH0gOiB7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW0/LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2RvX2l0ZW1zX3JpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInZpc3VhbGx5LWhpZGRlblwiPkVkaXQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidmlzdWFsbHktaGlkZGVuXCI+RGVsZXRlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBUT0RPTGlzdCh7IHRvZG9zLCBzZXRUb2RvcyB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxvbCBjbGFzc05hbWU9XCJ0b2RvX2xpc3RcIj5cclxuICAgICAgICAgICAge3RvZG9zICYmIHRvZG9zLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICAgICAgICB0b2Rvcz8ubWFwKChpdGVtLCBpbmRleCkgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgPEl0ZW0ga2V5PXtpbmRleH0gaXRlbT17aXRlbX0gc2V0VG9kb3M9e3NldFRvZG9zfSAvPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPHA+U2VlbXMgbG9uZWx5IGluIGhlcmUsIHdoYXQgYXJlIHlvdSB1cCB0bz88L3A+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9vbD5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRPRE9MaXN0O1xyXG5cclxuIl0sIm5hbWVzIjpbIkl0ZW0iLCJpdGVtIiwic2V0VG9kb3MiLCJjb25zb2xlIiwibG9nIiwiY29tcGxldGVUb2RvIiwicHJldlRvZG9zIiwibWFwIiwidG9kbyIsImlkIiwiaXNfY29tcGxldGVkIiwibGkiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwic3ZnIiwiZmlsbCIsImNpcmNsZSIsImN4IiwiY3kiLCJmaWxsUnVsZSIsInIiLCJwIiwic3R5bGUiLCJ0ZXh0RGVjb3JhdGlvbiIsInRpdGxlIiwiZGl2Iiwic3BhbiIsInBhdGgiLCJkIiwiVE9ET0xpc3QiLCJ0b2RvcyIsIm9sIiwibGVuZ3RoIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/TODOList.jsx\n"));

/***/ })

});