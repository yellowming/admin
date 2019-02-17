(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Layout.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Layout.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      dark: true,
      drawers: ['Default (no property)', 'Permanent', 'Temporary'],
      primaryDrawer: {
        model: null,
        type: 'default (no property)',
        clipped: false,
        floating: true,
        mini: false
      },
      footer: {
        inset: true
      },
      admins: [['Management', 'people_outline'], ['Settings', 'settings']],
      cruds: [['Create', 'add'], ['Read', 'insert_drive_file'], ['Update', 'update'], ['Delete', 'delete']]
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Layout.vue?vue&type=template&id=e245f756&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Layout.vue?vue&type=template&id=e245f756& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-app",
    { attrs: { id: "sandbox", dark: _vm.dark } },
    [
      _c(
        "v-navigation-drawer",
        {
          attrs: {
            permanent: _vm.primaryDrawer.type === "permanent",
            clipped: _vm.primaryDrawer.clipped,
            floating: _vm.primaryDrawer.floating,
            "mini-variant": _vm.primaryDrawer.mini,
            overflow: "",
            app: ""
          },
          model: {
            value: _vm.primaryDrawer.model,
            callback: function($$v) {
              _vm.$set(_vm.primaryDrawer, "model", $$v)
            },
            expression: "primaryDrawer.model"
          }
        },
        [
          _c(
            "v-list",
            [
              _c(
                "v-list-tile",
                { attrs: { to: "/" } },
                [
                  _c("v-list-tile-action", [_c("v-icon", [_vm._v("home")])], 1),
                  _vm._v(" "),
                  _c("v-list-tile-title", [_vm._v("仪表盘")])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list-tile",
                { attrs: { to: "about" } },
                [
                  _c(
                    "v-list-tile-action",
                    [_c("v-icon", [_vm._v("assignment")])],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-list-tile-title", [_vm._v("文章")])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list-group",
                {
                  attrs: { "prepend-icon": "account_circle", "no-action": "" }
                },
                [
                  _c(
                    "v-list-tile",
                    { attrs: { slot: "activator" }, slot: "activator" },
                    [_c("v-list-tile-title", [_vm._v("用户")])],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-group",
                    { attrs: { "no-action": "", "sub-group": "" } },
                    [
                      _c(
                        "v-list-tile",
                        { attrs: { slot: "activator" }, slot: "activator" },
                        [_c("v-list-tile-title", [_vm._v("权限")])],
                        1
                      ),
                      _vm._v(" "),
                      _vm._l(_vm.admins, function(admin, i) {
                        return _c(
                          "v-list-tile",
                          { key: i },
                          [
                            _c("v-list-tile-title", {
                              domProps: { textContent: _vm._s(admin[0]) }
                            }),
                            _vm._v(" "),
                            _c(
                              "v-list-tile-action",
                              [
                                _c("v-icon", {
                                  domProps: { textContent: _vm._s(admin[1]) }
                                })
                              ],
                              1
                            )
                          ],
                          1
                        )
                      })
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-group",
                    { attrs: { "sub-group": "", "no-action": "" } },
                    [
                      _c(
                        "v-list-tile",
                        { attrs: { slot: "activator" }, slot: "activator" },
                        [_c("v-list-tile-title", [_vm._v("角色")])],
                        1
                      ),
                      _vm._v(" "),
                      _vm._l(_vm.cruds, function(crud, i) {
                        return _c(
                          "v-list-tile",
                          { key: i },
                          [
                            _c("v-list-tile-title", {
                              domProps: { textContent: _vm._s(crud[0]) }
                            }),
                            _vm._v(" "),
                            _c(
                              "v-list-tile-action",
                              [
                                _c("v-icon", {
                                  domProps: { textContent: _vm._s(crud[1]) }
                                })
                              ],
                              1
                            )
                          ],
                          1
                        )
                      })
                    ],
                    2
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-toolbar",
        {
          attrs: {
            "clipped-left": _vm.primaryDrawer.clipped,
            app: "",
            dense: ""
          }
        },
        [
          _c("v-toolbar-side-icon", {
            on: {
              click: function($event) {
                $event.stopPropagation()
                _vm.primaryDrawer.model = !_vm.primaryDrawer.model
              }
            }
          }),
          _vm._v(" "),
          _c(
            "v-toolbar-items",
            { staticClass: "hidden-sm-and-down" },
            [
              _c("v-btn", { attrs: { flat: "" } }, [_vm._v("Link One")]),
              _vm._v(" "),
              _c("v-btn", { attrs: { flat: "" } }, [_vm._v("Link Two")]),
              _vm._v(" "),
              _c("v-btn", { attrs: { flat: "", to: "/login" } }, [
                _vm._v("退出")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-toolbar-items",
            { staticClass: "hidden-sm-and-down" },
            [
              _c("v-btn", { attrs: { flat: "" } }, [_vm._v("Link One")]),
              _vm._v(" "),
              _c("v-btn", { attrs: { flat: "" } }, [_vm._v("Link Two")]),
              _vm._v(" "),
              _c(
                "v-btn",
                { attrs: { icon: "", to: "/login" } },
                [_c("v-icon", [_vm._v("refresh")])],
                1
              ),
              _vm._v(" "),
              _c(
                "v-menu",
                { attrs: { "open-on-hover": "", "offset-y": "" } },
                [
                  _c(
                    "v-btn",
                    { attrs: { target: "div", block: "" } },
                    [
                      _c(
                        "v-avatar",
                        {
                          attrs: { slot: "activator", size: "32px" },
                          slot: "activator"
                        },
                        [
                          _c("img", {
                            attrs: {
                              src:
                                "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460",
                              alt: "Avatar"
                            }
                          })
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list",
                    [
                      _c(
                        "v-list-tile",
                        [_c("v-list-tile-title", [_vm._v("werete")])],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list",
                    [
                      _c(
                        "v-list-tile",
                        [_c("v-list-tile-title", [_vm._v("werete")])],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list",
                    [
                      _c(
                        "v-list-tile",
                        [_c("v-list-tile-title", [_vm._v("werete")])],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list",
                    [
                      _c(
                        "v-list-tile",
                        [_c("v-list-tile-title", [_vm._v("werete")])],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-content",
        [_c("v-container", { attrs: { fluid: "" } }, [_c("router-view")], 1)],
        1
      ),
      _vm._v(" "),
      _c(
        "v-footer",
        { attrs: { inset: _vm.footer.inset, app: "", absolute: "" } },
        [
          _c("span", { staticClass: "px-3" }, [
            _vm._v("© " + _vm._s(new Date().getFullYear()))
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Layout.vue":
/*!********************************************!*\
  !*** ./resources/js/components/Layout.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layout_vue_vue_type_template_id_e245f756___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout.vue?vue&type=template&id=e245f756& */ "./resources/js/components/Layout.vue?vue&type=template&id=e245f756&");
/* harmony import */ var _Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout.vue?vue&type=script&lang=js& */ "./resources/js/components/Layout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Layout_vue_vue_type_template_id_e245f756___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Layout_vue_vue_type_template_id_e245f756___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Layout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Layout.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Layout.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Layout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Layout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Layout.vue?vue&type=template&id=e245f756&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Layout.vue?vue&type=template&id=e245f756& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_e245f756___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Layout.vue?vue&type=template&id=e245f756& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Layout.vue?vue&type=template&id=e245f756&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_e245f756___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_e245f756___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);