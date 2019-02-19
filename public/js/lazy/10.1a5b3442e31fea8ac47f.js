(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  middleware: 'auth',
  data: function data() {
    return {
      totalUsers: 0,
      userList: [],
      userListLoading: false,
      pagination: {},
      pageItems: [5, 10, 25],
      searcher: {
        input: "",
        value: null
      },
      tableHeaders: [{
        text: 'ID',
        value: 'id'
      }, {
        text: '用户名',
        value: 'name',
        sortable: false
      }, {
        text: '邮箱',
        value: 'email',
        sortable: false
      }, {
        text: '创建时间',
        value: 'created_at'
      }, {
        text: '',
        value: '',
        sortable: false
      }],
      dialogForm: {
        name: '',
        email: '',
        password: ''
      },
      dialog: false,
      breadcrumbs: [{
        text: '首页',
        disabled: false,
        to: '/'
      }, {
        text: '用户',
        to: '/user'
      }]
    };
  },
  mounted: function mounted() {},
  watch: {
    pagination: {
      handler: function handler() {
        this.getUsersFromApi();
      },
      deep: true
    }
  },
  methods: {
    getUsersFromApi: function getUsersFromApi() {
      var _this = this;

      this.userListLoading = true;
      this.axios.get('user/list', {
        params: {
          page: this.pagination.page,
          //当前页
          row: this.pagination.rowsPerPage,
          //每页大小
          sortBy: this.pagination.sortBy,
          //分页字段
          desc: this.pagination.descending,
          //第几页
          search: this.searcher.value //查询条件

        }
      }).then(function (Response) {
        _this.userListLoading = false;
        _this.userList = Response.data.success.data;
        _this.totalUsers = Response.data.success.total;
      });
    },
    searchEvent: function searchEvent() {
      this.searcher.value = this.searcher.input == "" ? null : this.searcher.input;
      this.getUsersFromApi();
    },
    dialogFormSubmit: function dialogFormSubmit() {
      var _this2 = this;

      this.axios.post('user/add', this.dialogForm).then(function (Response) {
        _this2.dialog = false;

        _this2.dialogFormReset();

        _this2.getUsersFromApi();
      });
    },
    dialogFormReset: function dialogFormReset() {
      this.dialog = false;
      this.dialogForm = {
        name: '',
        email: '',
        password: ''
      };
    },
    userDelete: function userDelete(user) {
      var _this3 = this;

      if (confirm("警告：确定删除用户" + user.name + "吗？删除后无法恢复！！！！")) {
        this.axios.delete('user/delete', {
          data: {
            id: user.id
          }
        }).then(function (Response) {
          _this3.getUsersFromApi();
        });
        console.log(user);
      }
    },
    userEdite: function userEdite(user) {
      this.dialogForm = {
        name: user.name,
        email: user.email,
        password: ""
      };
      this.dialog = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user.vue?vue&type=template&id=a1495598&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user.vue?vue&type=template&id=a1495598& ***!
  \**************************************************************************************************************************************************************************************************/
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
    "div",
    [
      _c("v-breadcrumbs", { attrs: { items: _vm.breadcrumbs } }),
      _vm._v(" "),
      _c(
        "v-card",
        [
          _c(
            "v-card-title",
            { attrs: { "primary-title": "" } },
            [
              _c("v-text-field", {
                attrs: {
                  "append-icon": "search",
                  label: "用户名、邮箱",
                  "single-line": "",
                  "hide-details": ""
                },
                on: {
                  keyup: function($event) {
                    if (
                      !("button" in $event) &&
                      _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                    ) {
                      return null
                    }
                    return _vm.searchEvent($event)
                  }
                },
                model: {
                  value: _vm.searcher.input,
                  callback: function($$v) {
                    _vm.$set(_vm.searcher, "input", $$v)
                  },
                  expression: "searcher.input"
                }
              }),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-dialog",
                {
                  attrs: { persistent: "", "max-width": "600px" },
                  model: {
                    value: _vm.dialog,
                    callback: function($$v) {
                      _vm.dialog = $$v
                    },
                    expression: "dialog"
                  }
                },
                [
                  _c(
                    "v-btn",
                    {
                      attrs: {
                        slot: "activator",
                        fab: "",
                        dark: "",
                        color: "success"
                      },
                      slot: "activator"
                    },
                    [_c("v-icon", { attrs: { dark: "" } }, [_vm._v("add")])],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card",
                    [
                      _c("v-card-title", [
                        _c("span", { staticClass: "headline" }, [
                          _vm._v("新增用户")
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-card-text",
                        [
                          _c("v-text-field", {
                            attrs: {
                              label: "用户名*",
                              required: "",
                              autocomplete: "off"
                            },
                            model: {
                              value: _vm.dialogForm.name,
                              callback: function($$v) {
                                _vm.$set(_vm.dialogForm, "name", $$v)
                              },
                              expression: "dialogForm.name"
                            }
                          }),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: {
                              label: "邮箱*",
                              name: "email",
                              type: "email",
                              autocomplete: "off",
                              required: ""
                            },
                            model: {
                              value: _vm.dialogForm.email,
                              callback: function($$v) {
                                _vm.$set(_vm.dialogForm, "email", $$v)
                              },
                              expression: "dialogForm.email"
                            }
                          }),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: {
                              label: "密码*",
                              name: "password",
                              type: "password",
                              autocomplete: "new-password",
                              required: ""
                            },
                            model: {
                              value: _vm.dialogForm.password,
                              callback: function($$v) {
                                _vm.$set(_vm.dialogForm, "password", $$v)
                              },
                              expression: "dialogForm.password"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-card-actions",
                        [
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "blue darken-1", flat: "" },
                              on: { click: _vm.dialogFormReset }
                            },
                            [_vm._v("关闭")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "blue darken-1", flat: "" },
                              on: { click: _vm.dialogFormSubmit }
                            },
                            [_vm._v("保存")]
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
          _c("v-data-table", {
            staticClass: "elevation-1",
            attrs: {
              headers: _vm.tableHeaders,
              items: _vm.userList,
              loading: _vm.userListLoading,
              "total-items": _vm.totalUsers,
              pagination: _vm.pagination,
              "rows-per-page-items": _vm.pageItems,
              "item-key": "name",
              "no-data-text": "没有数据",
              "rows-per-page-text": "每页显示"
            },
            on: {
              "update:pagination": function($event) {
                _vm.pagination = $event
              }
            },
            scopedSlots: _vm._u([
              {
                key: "items",
                fn: function(props) {
                  return [
                    _c("td", [_vm._v(_vm._s(props.item.id))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(props.item.name))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(props.item.email))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(props.item.created_at))]),
                    _vm._v(" "),
                    _c(
                      "td",
                      [
                        _c(
                          "v-btn",
                          {
                            attrs: { color: "info", flat: "", icon: "" },
                            on: {
                              click: function($event) {
                                _vm.userEdite(props.item)
                              }
                            }
                          },
                          [
                            _c("v-icon", { attrs: { dark: "" } }, [
                              _vm._v("edit")
                            ])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-btn",
                          {
                            attrs: { color: "error", flat: "", icon: "" },
                            on: {
                              click: function($event) {
                                _vm.userDelete(props.item)
                              }
                            }
                          },
                          [
                            _c("v-icon", { attrs: { dark: "" } }, [
                              _vm._v("delete")
                            ])
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ]
                }
              }
            ])
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/user.vue":
/*!*************************************!*\
  !*** ./resources/js/pages/user.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_vue_vue_type_template_id_a1495598___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.vue?vue&type=template&id=a1495598& */ "./resources/js/pages/user.vue?vue&type=template&id=a1495598&");
/* harmony import */ var _user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.vue?vue&type=script&lang=js& */ "./resources/js/pages/user.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _user_vue_vue_type_template_id_a1495598___WEBPACK_IMPORTED_MODULE_0__["render"],
  _user_vue_vue_type_template_id_a1495598___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/user.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/user.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/pages/user.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./user.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/user.vue?vue&type=template&id=a1495598&":
/*!********************************************************************!*\
  !*** ./resources/js/pages/user.vue?vue&type=template&id=a1495598& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_template_id_a1495598___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./user.vue?vue&type=template&id=a1495598& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user.vue?vue&type=template&id=a1495598&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_template_id_a1495598___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_template_id_a1495598___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);