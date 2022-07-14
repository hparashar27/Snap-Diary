"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/newSnap";
exports.ids = ["pages/api/newSnap"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/newSnap.js":
/*!******************************!*\
  !*** ./pages/api/newSnap.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function Handler(req, res) {\n    if (req.method === \"POST\") {\n        const data = req.body;\n        const { title , image , address , description  } = data;\n        const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(\"mongodb+srv://Hparashar27:7300788823@cluster0.xs2pd.mongodb.net/Snaps?retryWrites=true&w=majority\");\n        const db = client.db();\n        const SnapCollections = db.collection(\"Snaps\");\n        const result = await SnapCollections.insertOne(data);\n        console.log(result);\n        client.close();\n        res.status(201).json({\n            message: \" Snap is inserted  \"\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3U25hcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0M7QUFFckMsZUFBZUMsT0FBTyxDQUFFQyxHQUFHLEVBQUNDLEdBQUcsRUFBQztJQUNqQyxJQUFHRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxNQUFNLEVBQUM7UUFDckIsTUFBTUMsSUFBSSxHQUFHSCxHQUFHLENBQUNJLElBQUk7UUFHckIsTUFBTSxFQUFFQyxLQUFLLEdBQUdDLEtBQUssR0FBR0MsT0FBTyxHQUFHQyxXQUFXLEdBQUUsR0FBR0wsSUFBSTtRQUV6RCxNQUFNTSxNQUFNLEdBQUksTUFBTVgsd0RBQW1CLENBQUMsbUdBQW1HLENBQUM7UUFFOUksTUFBTWEsRUFBRSxHQUFHRixNQUFNLENBQUNFLEVBQUUsRUFBRTtRQUN0QixNQUFNQyxlQUFlLEdBQUdELEVBQUUsQ0FBQ0UsVUFBVSxDQUFDLE9BQU8sQ0FBQztRQUU5QyxNQUFNQyxNQUFNLEdBQUcsTUFBTUYsZUFBZSxDQUFDRyxTQUFTLENBQUNaLElBQUksQ0FBQztRQUNwRGEsT0FBTyxDQUFDQyxHQUFHLENBQUNILE1BQU0sQ0FBQyxDQUFDO1FBRXBCTCxNQUFNLENBQUNTLEtBQUssRUFBRSxDQUFDO1FBRWZqQixHQUFHLENBQUNrQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFDQyxPQUFPLEVBQUcscUJBQXFCO1NBQUMsQ0FBQztLQUN2RDtDQUNBO0FBRUQsaUVBQWV0QixPQUFPLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vcGFnZXMvYXBpL25ld1NuYXAuanM/ZWEyOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XHJcblxyXG4gYXN5bmMgZnVuY3Rpb24gSGFuZGxlciAocmVxLHJlcyl7XHJcbmlmKHJlcS5tZXRob2QgPT09ICdQT1NUJyl7XHJcbiAgICBjb25zdCBkYXRhID0gcmVxLmJvZHkgIFxyXG5cclxuXHJcbiAgICBjb25zdCB7IHRpdGxlICwgaW1hZ2UgLCBhZGRyZXNzICwgZGVzY3JpcHRpb24gfSA9IGRhdGEgO1xyXG5cclxuIGNvbnN0IGNsaWVudCAgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KCdtb25nb2RiK3NydjovL0hwYXJhc2hhcjI3OjczMDA3ODg4MjNAY2x1c3RlcjAueHMycGQubW9uZ29kYi5uZXQvU25hcHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5JylcclxuXHJcbiBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xyXG4gY29uc3QgU25hcENvbGxlY3Rpb25zID0gZGIuY29sbGVjdGlvbignU25hcHMnKVxyXG5cclxuIGNvbnN0IHJlc3VsdCA9IGF3YWl0IFNuYXBDb2xsZWN0aW9ucy5pbnNlcnRPbmUoZGF0YSlcclxuIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblxyXG4gY2xpZW50LmNsb3NlKCk7XHJcblxyXG4gcmVzLnN0YXR1cygyMDEpLmpzb24oe21lc3NhZ2UgOiAnIFNuYXAgaXMgaW5zZXJ0ZWQgICd9KVxyXG59XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhhbmRsZXIgOyJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsIkhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJkYXRhIiwiYm9keSIsInRpdGxlIiwiaW1hZ2UiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iLCJjbGllbnQiLCJjb25uZWN0IiwiZGIiLCJTbmFwQ29sbGVjdGlvbnMiLCJjb2xsZWN0aW9uIiwicmVzdWx0IiwiaW5zZXJ0T25lIiwiY29uc29sZSIsImxvZyIsImNsb3NlIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/newSnap.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/newSnap.js"));
module.exports = __webpack_exports__;

})();