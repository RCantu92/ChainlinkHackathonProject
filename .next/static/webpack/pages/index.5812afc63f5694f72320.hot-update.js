webpackHotUpdate_N_E("pages/index",{

/***/ "./ethers/ApeLend.js":
/*!***************************!*\
  !*** ./ethers/ApeLend.js ***!
  \***************************/
/*! exports provided: apeLendInstance, provider, signer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"apeLendInstance\", function() { return apeLendInstance; });\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _ethers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ethers.js */ \"./ethers/ethers.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"provider\", function() { return _ethers_js__WEBPACK_IMPORTED_MODULE_1__[\"provider\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"signer\", function() { return _ethers_js__WEBPACK_IMPORTED_MODULE_1__[\"signer\"]; });\n\n/* harmony import */ var _artifacts_contracts_BorrowLendProtocol_sol_BorrowLendProtocol_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../artifacts/contracts/BorrowLendProtocol.sol/BorrowLendProtocol.json */ \"./artifacts/contracts/BorrowLendProtocol.sol/BorrowLendProtocol.json\");\nvar _artifacts_contracts_BorrowLendProtocol_sol_BorrowLendProtocol_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../artifacts/contracts/BorrowLendProtocol.sol/BorrowLendProtocol.json */ \"./artifacts/contracts/BorrowLendProtocol.sol/BorrowLendProtocol.json\", 1);\n // Import instance of Ethers' provider\n\n // Import contract ABI\n\n // Hardcode apeLend contract address\n// (FIND WAY TO PULL FROM JSON ABI?)\n\nvar apeLendAddress = '0xe06f84adF394eD803813CC5f1e440AA00747562d';\nconsole.log(\"Step Three: Contract Instance\"); // Instance of ApeLend\n\nvar apeLendInstance = new ethers__WEBPACK_IMPORTED_MODULE_0__[\"ethers\"].Contract(apeLendAddress, _artifacts_contracts_BorrowLendProtocol_sol_BorrowLendProtocol_json__WEBPACK_IMPORTED_MODULE_2__.abi, _ethers_js__WEBPACK_IMPORTED_MODULE_1__[\"provider\"]);\nconsole.log(\"Step Four: ApeLend Instance - \".concat(apeLendInstance)); // Export instance of deployed ApeLend\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZXRoZXJzL0FwZUxlbmQuanM/ZTc0MSJdLCJuYW1lcyI6WyJhcGVMZW5kQWRkcmVzcyIsImNvbnNvbGUiLCJsb2ciLCJhcGVMZW5kSW5zdGFuY2UiLCJldGhlcnMiLCJDb250cmFjdCIsIkJvcnJvd0xlbmRQcm90b2NvbCIsImFiaSIsInByb3ZpZGVyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtDQUNBOztDQUVBOztDQUVBO0FBQ0E7O0FBQ0EsSUFBTUEsY0FBYyxHQUFHLDRDQUF2QjtBQUVBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSwrQkFBWixFLENBRUE7O0FBQ0EsSUFBTUMsZUFBZSxHQUFHLElBQUlDLDZDQUFNLENBQUNDLFFBQVgsQ0FDcEJMLGNBRG9CLEVBRXBCTSxnR0FBa0IsQ0FBQ0MsR0FGQyxFQUdwQkMsbURBSG9CLENBQXhCO0FBTUFQLE9BQU8sQ0FBQ0MsR0FBUix5Q0FBNkNDLGVBQTdDLEcsQ0FFQTs7QUFDQSIsImZpbGUiOiIuL2V0aGVycy9BcGVMZW5kLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSAnZXRoZXJzJztcbi8vIEltcG9ydCBpbnN0YW5jZSBvZiBFdGhlcnMnIHByb3ZpZGVyXG5pbXBvcnQgeyBwcm92aWRlciwgc2lnbmVyIH0gZnJvbSAnLi9ldGhlcnMuanMnO1xuLy8gSW1wb3J0IGNvbnRyYWN0IEFCSVxuaW1wb3J0IEJvcnJvd0xlbmRQcm90b2NvbCBmcm9tICcuLi9hcnRpZmFjdHMvY29udHJhY3RzL0JvcnJvd0xlbmRQcm90b2NvbC5zb2wvQm9ycm93TGVuZFByb3RvY29sLmpzb24nO1xuLy8gSGFyZGNvZGUgYXBlTGVuZCBjb250cmFjdCBhZGRyZXNzXG4vLyAoRklORCBXQVkgVE8gUFVMTCBGUk9NIEpTT04gQUJJPylcbmNvbnN0IGFwZUxlbmRBZGRyZXNzID0gJzB4ZTA2Zjg0YWRGMzk0ZUQ4MDM4MTNDQzVmMWU0NDBBQTAwNzQ3NTYyZCc7XG5cbmNvbnNvbGUubG9nKFwiU3RlcCBUaHJlZTogQ29udHJhY3QgSW5zdGFuY2VcIik7XG5cbi8vIEluc3RhbmNlIG9mIEFwZUxlbmRcbmNvbnN0IGFwZUxlbmRJbnN0YW5jZSA9IG5ldyBldGhlcnMuQ29udHJhY3QoXG4gICAgYXBlTGVuZEFkZHJlc3MsXG4gICAgQm9ycm93TGVuZFByb3RvY29sLmFiaSxcbiAgICBwcm92aWRlclxuKTtcblxuY29uc29sZS5sb2coYFN0ZXAgRm91cjogQXBlTGVuZCBJbnN0YW5jZSAtICR7YXBlTGVuZEluc3RhbmNlfWApO1xuXG4vLyBFeHBvcnQgaW5zdGFuY2Ugb2YgZGVwbG95ZWQgQXBlTGVuZFxuZXhwb3J0IHsgYXBlTGVuZEluc3RhbmNlLCBwcm92aWRlciwgc2lnbmVyIH07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./ethers/ApeLend.js\n");

/***/ })

})