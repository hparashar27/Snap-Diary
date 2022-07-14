"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/newSnap",{

/***/ "./components/Snaps/NewSnapForm.js":
/*!*****************************************!*\
  !*** ./components/Snaps/NewSnapForm.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ui_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/Card */ \"./components/ui/Card.js\");\n/* harmony import */ var _NewSnapForm_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NewSnapForm.module.css */ \"./components/Snaps/NewSnapForm.module.css\");\n/* harmony import */ var _NewSnapForm_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_NewSnapForm_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar _s = $RefreshSig$();\nfunction NewSnapForm(props) {\n    var submitHandler = function submitHandler(event) {\n        event.preventDefault();\n        var enteredTitle = titleInputRef.current.value;\n        var enteredImage = imageInputRef.current.value;\n        var enteredAddress = addressInputRef.current.value;\n        var enteredDescription = descriptionInputRef.current.value;\n        var SnapData = {\n            title: enteredTitle,\n            image: enteredImage,\n            address: enteredAddress,\n            description: enteredDescription\n        };\n        props.onAddSnap(SnapData);\n    };\n    _s();\n    var titleInputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var imageInputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var addressInputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var descriptionInputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: (_NewSnapForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().form),\n            onSubmit: submitHandler,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_NewSnapForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().control),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"title\",\n                            children: \"Title\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\hpara\\\\Desktop\\\\Main-next-projext\\\\components\\\\Snaps\\\\NewSnapForm.js\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            required: true,\n                            id: \"title\",\n                            ref: titleInputRef\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\hpara\\\\Desktop\\\\Main-next-projext\\\\components\\\\Snaps\\\\NewSnapForm.js\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\hpara\\\\Desktop\\\\Main-next-projext\\\\components\\\\Snaps\\\\NewSnapForm.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_NewSnapForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().control),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"image\",\n                            children: \"Snap\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\hpara\\\\Desktop\\\\Main-next-projext\\\\components\\\\Snaps\\\\NewSnapForm.js\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"urlgit\",\n                            required: true,\n                            id: \"image\",\n                            ref: imageInputRef\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\hpara\\\\Desktop\\\\Main-next-projext\\\\components\\\\Snaps\\\\NewSnapForm.js\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\hpara\\\\Desktop\\\\Main-next-projext\\\\components\\\\Snaps\\\\NewSnapForm.js\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_NewSnapForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().control),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"address\",\n                            children: \"Location\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\hpara\\\\Desktop\\\\Main-next-projext\\\\components\\\\Snaps\\\\NewSnapForm.js\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            required: true,\n                            id: \"address\",\n                            ref: addressInputRef\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\hpara\\\\Desktop\\\\Main-next-projext\\\\components\\\\Snaps\\\\NewSnapForm.js\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\hpara\\\\Desktop\\\\Main-next-projext\\\\components\\\\Snaps\\\\NewSnapForm.js\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_NewSnapForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().control),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"description\",\n                            children: \"Description\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\hpara\\\\Desktop\\\\Main-next-projext\\\\components\\\\Snaps\\\\NewSnapForm.js\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                            id: \"description\",\n                            required: true,\n                            rows: \"5\",\n                            ref: descriptionInputRef\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\hpara\\\\Desktop\\\\Main-next-projext\\\\components\\\\Snaps\\\\NewSnapForm.js\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\hpara\\\\Desktop\\\\Main-next-projext\\\\components\\\\Snaps\\\\NewSnapForm.js\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_NewSnapForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().actions),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"Add Snap\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hpara\\\\Desktop\\\\Main-next-projext\\\\components\\\\Snaps\\\\NewSnapForm.js\",\n                        lineNumber: 55,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\hpara\\\\Desktop\\\\Main-next-projext\\\\components\\\\Snaps\\\\NewSnapForm.js\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\hpara\\\\Desktop\\\\Main-next-projext\\\\components\\\\Snaps\\\\NewSnapForm.js\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\hpara\\\\Desktop\\\\Main-next-projext\\\\components\\\\Snaps\\\\NewSnapForm.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_s(NewSnapForm, \"rnfbxkM5ubxegaVnK79k9LUTStI=\");\n_c = NewSnapForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewSnapForm);\nvar _c;\n$RefreshReg$(_c, \"NewSnapForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NuYXBzL05ld1NuYXBGb3JtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBK0I7QUFFRDtBQUNpQjs7QUFFL0MsU0FBU0csV0FBVyxDQUFDQyxLQUFLLEVBQUU7UUFNakJDLGFBQWEsR0FBdEIsU0FBU0EsYUFBYSxDQUFDQyxLQUFLLEVBQUU7UUFDNUJBLEtBQUssQ0FBQ0MsY0FBYyxFQUFFLENBQUM7UUFFdkIsSUFBTUMsWUFBWSxHQUFHQyxhQUFhLENBQUNDLE9BQU8sQ0FBQ0MsS0FBSztRQUNoRCxJQUFNQyxZQUFZLEdBQUdDLGFBQWEsQ0FBQ0gsT0FBTyxDQUFDQyxLQUFLO1FBQ2hELElBQU1HLGNBQWMsR0FBR0MsZUFBZSxDQUFDTCxPQUFPLENBQUNDLEtBQUs7UUFDcEQsSUFBTUssa0JBQWtCLEdBQUdDLG1CQUFtQixDQUFDUCxPQUFPLENBQUNDLEtBQUs7UUFFNUQsSUFBTU8sUUFBUSxHQUFHO1lBQ2ZDLEtBQUssRUFBRVgsWUFBWTtZQUNuQlksS0FBSyxFQUFFUixZQUFZO1lBQ25CUyxPQUFPLEVBQUVQLGNBQWM7WUFDdkJRLFdBQVcsRUFBRU4sa0JBQWtCO1NBQ2hDO1FBRURaLEtBQUssQ0FBQ21CLFNBQVMsQ0FBQ0wsUUFBUSxDQUFDLENBQUM7S0FDM0I7O0lBckJELElBQU1ULGFBQWEsR0FBR1QsNkNBQU0sRUFBRTtJQUM5QixJQUFNYSxhQUFhLEdBQUdiLDZDQUFNLEVBQUU7SUFDOUIsSUFBTWUsZUFBZSxHQUFHZiw2Q0FBTSxFQUFFO0lBQ2hDLElBQU1pQixtQkFBbUIsR0FBR2pCLDZDQUFNLEVBQUU7SUFvQnBDLHFCQUNFLDhEQUFDQyxnREFBSTtrQkFDSCw0RUFBQ3VCLE1BQUk7WUFBQ0MsU0FBUyxFQUFFdkIscUVBQVk7WUFBRXdCLFFBQVEsRUFBRXJCLGFBQWE7OzhCQUNwRCw4REFBQ3NCLEtBQUc7b0JBQUNGLFNBQVMsRUFBRXZCLHdFQUFlOztzQ0FDN0IsOERBQUMyQixPQUFLOzRCQUFDQyxPQUFPLEVBQUMsT0FBTztzQ0FBQyxPQUFLOzs7OztnQ0FBUTtzQ0FDcEMsOERBQUNDLE9BQUs7NEJBQUNDLElBQUksRUFBQyxNQUFNOzRCQUFDQyxRQUFROzRCQUFDQyxFQUFFLEVBQUMsT0FBTzs0QkFBQ0MsR0FBRyxFQUFFMUIsYUFBYTs7Ozs7Z0NBQUk7Ozs7Ozt3QkFDekQ7OEJBQ04sOERBQUNrQixLQUFHO29CQUFDRixTQUFTLEVBQUV2Qix3RUFBZTs7c0NBQzdCLDhEQUFDMkIsT0FBSzs0QkFBQ0MsT0FBTyxFQUFDLE9BQU87c0NBQUMsTUFBSTs7Ozs7Z0NBQVE7c0NBQ25DLDhEQUFDQyxPQUFLOzRCQUFDQyxJQUFJLEVBQUMsUUFBUTs0QkFBQ0MsUUFBUTs0QkFBQ0MsRUFBRSxFQUFDLE9BQU87NEJBQUNDLEdBQUcsRUFBRXRCLGFBQWE7Ozs7O2dDQUFJOzs7Ozs7d0JBQzNEOzhCQUNOLDhEQUFDYyxLQUFHO29CQUFDRixTQUFTLEVBQUV2Qix3RUFBZTs7c0NBQzdCLDhEQUFDMkIsT0FBSzs0QkFBQ0MsT0FBTyxFQUFDLFNBQVM7c0NBQUMsVUFBUTs7Ozs7Z0NBQVE7c0NBQ3pDLDhEQUFDQyxPQUFLOzRCQUFDQyxJQUFJLEVBQUMsTUFBTTs0QkFBQ0MsUUFBUTs0QkFBQ0MsRUFBRSxFQUFDLFNBQVM7NEJBQUNDLEdBQUcsRUFBRXBCLGVBQWU7Ozs7O2dDQUFJOzs7Ozs7d0JBQzdEOzhCQUNOLDhEQUFDWSxLQUFHO29CQUFDRixTQUFTLEVBQUV2Qix3RUFBZTs7c0NBQzdCLDhEQUFDMkIsT0FBSzs0QkFBQ0MsT0FBTyxFQUFDLGFBQWE7c0NBQUMsYUFBVzs7Ozs7Z0NBQVE7c0NBQ2hELDhEQUFDTSxVQUFROzRCQUNQRixFQUFFLEVBQUMsYUFBYTs0QkFDaEJELFFBQVE7NEJBQ1JJLElBQUksRUFBQyxHQUFHOzRCQUNSRixHQUFHLEVBQUVsQixtQkFBbUI7Ozs7O2dDQUNkOzs7Ozs7d0JBQ1I7OEJBQ04sOERBQUNVLEtBQUc7b0JBQUNGLFNBQVMsRUFBRXZCLHdFQUFlOzhCQUM3Qiw0RUFBQ3FDLFFBQU07a0NBQUMsVUFBUTs7Ozs7NEJBQVM7Ozs7O3dCQUNyQjs7Ozs7O2dCQUNEOzs7OztZQUNGLENBQ1A7Q0FDSDtHQXREUXBDLFdBQVc7QUFBWEEsS0FBQUEsV0FBVztBQXdEcEIsK0RBQWVBLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NuYXBzL05ld1NuYXBGb3JtLmpzP2ZmZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi91aS9DYXJkJztcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vTmV3U25hcEZvcm0ubW9kdWxlLmNzcyc7XG5cbmZ1bmN0aW9uIE5ld1NuYXBGb3JtKHByb3BzKSB7XG4gIGNvbnN0IHRpdGxlSW5wdXRSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgaW1hZ2VJbnB1dFJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBhZGRyZXNzSW5wdXRSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgZGVzY3JpcHRpb25JbnB1dFJlZiA9IHVzZVJlZigpO1xuXG4gIGZ1bmN0aW9uIHN1Ym1pdEhhbmRsZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgZW50ZXJlZFRpdGxlID0gdGl0bGVJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuICAgIGNvbnN0IGVudGVyZWRJbWFnZSA9IGltYWdlSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcbiAgICBjb25zdCBlbnRlcmVkQWRkcmVzcyA9IGFkZHJlc3NJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuICAgIGNvbnN0IGVudGVyZWREZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcblxuICAgIGNvbnN0IFNuYXBEYXRhID0ge1xuICAgICAgdGl0bGU6IGVudGVyZWRUaXRsZSxcbiAgICAgIGltYWdlOiBlbnRlcmVkSW1hZ2UsXG4gICAgICBhZGRyZXNzOiBlbnRlcmVkQWRkcmVzcyxcbiAgICAgIGRlc2NyaXB0aW9uOiBlbnRlcmVkRGVzY3JpcHRpb24sXG4gICAgfTtcblxuICAgIHByb3BzLm9uQWRkU25hcChTbmFwRGF0YSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxDYXJkPlxuICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19IG9uU3VibWl0PXtzdWJtaXRIYW5kbGVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J3RpdGxlJz5UaXRsZTwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIHJlcXVpcmVkIGlkPSd0aXRsZScgcmVmPXt0aXRsZUlucHV0UmVmfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2ltYWdlJz5TbmFwPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT0ndXJsZ2l0JyByZXF1aXJlZCBpZD0naW1hZ2UnIHJlZj17aW1hZ2VJbnB1dFJlZn0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2x9PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdhZGRyZXNzJz5Mb2NhdGlvbjwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIHJlcXVpcmVkIGlkPSdhZGRyZXNzJyByZWY9e2FkZHJlc3NJbnB1dFJlZn0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2x9PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdkZXNjcmlwdGlvbic+RGVzY3JpcHRpb248L2xhYmVsPlxuICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgaWQ9J2Rlc2NyaXB0aW9uJ1xuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIHJvd3M9JzUnXG4gICAgICAgICAgICByZWY9e2Rlc2NyaXB0aW9uSW5wdXRSZWZ9XG4gICAgICAgICAgPjwvdGV4dGFyZWE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb25zfT5cbiAgICAgICAgICA8YnV0dG9uPkFkZCBTbmFwPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIDwvQ2FyZD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmV3U25hcEZvcm07XG4iXSwibmFtZXMiOlsidXNlUmVmIiwiQ2FyZCIsImNsYXNzZXMiLCJOZXdTbmFwRm9ybSIsInByb3BzIiwic3VibWl0SGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJlbnRlcmVkVGl0bGUiLCJ0aXRsZUlucHV0UmVmIiwiY3VycmVudCIsInZhbHVlIiwiZW50ZXJlZEltYWdlIiwiaW1hZ2VJbnB1dFJlZiIsImVudGVyZWRBZGRyZXNzIiwiYWRkcmVzc0lucHV0UmVmIiwiZW50ZXJlZERlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb25JbnB1dFJlZiIsIlNuYXBEYXRhIiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsIm9uQWRkU25hcCIsImZvcm0iLCJjbGFzc05hbWUiLCJvblN1Ym1pdCIsImRpdiIsImNvbnRyb2wiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJyZXF1aXJlZCIsImlkIiwicmVmIiwidGV4dGFyZWEiLCJyb3dzIiwiYWN0aW9ucyIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Snaps/NewSnapForm.js\n"));

/***/ })

});