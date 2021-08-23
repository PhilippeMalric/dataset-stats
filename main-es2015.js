(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+3ha":
/*!*****************************************************************************************!*\
  !*** ./src/app/Dataset_related/show_dataset_related/div/data-div/data-div.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: DataDivComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataDivComponent", function() { return DataDivComponent; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Rxjs/reducers */ "AzDA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _switch_div_switch_div_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../switch-div/switch-div.component */ "q5/P");
/* harmony import */ var _Load_related_load_csv_load_csv_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Load_related/load-csv/load-csv.component */ "L5jK");
/* harmony import */ var _Load_related_load_csv_dd_load_csv_dd_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Load_related/load-csv_dd/load-csv_dd.component */ "yle5");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _dd_testdd_testdd_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../dd/testdd/testdd.component */ "TYiS");
/* harmony import */ var _svg_svg1_svg1_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../svg/svg1/svg1.component */ "lTro");
/* harmony import */ var _chart_table_mytable_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../chart/table/mytable.component */ "QlY0");
/* harmony import */ var _stat_div_stat_div_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../stat-div/stat-div.component */ "lMmC");












function DataDivComponent_stat_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "stat-div");
} }
class DataDivComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.fileName$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(src_app_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_1__["selectFileName"]));
        this.data$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(src_app_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_1__["selectData"]));
    }
}
DataDivComponent.ɵfac = function DataDivComponent_Factory(t) { return new (t || DataDivComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"])); };
DataDivComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DataDivComponent, selectors: [["app-data-div"]], decls: 9, vars: 3, consts: [[1, "container"], [4, "ngIf"]], template: function DataDivComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "switchs-div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "load-csv");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "load-csv-dd");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, DataDivComponent_stat_div_4_Template, 1, 0, "stat-div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "testdd");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "svg1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "myTable");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 1, ctx.fileName$) != "");
    } }, directives: [_switch_div_switch_div_component__WEBPACK_IMPORTED_MODULE_3__["SwitchDivComponent"], _Load_related_load_csv_load_csv_component__WEBPACK_IMPORTED_MODULE_4__["LoadCSVComponent"], _Load_related_load_csv_dd_load_csv_dd_component__WEBPACK_IMPORTED_MODULE_5__["LoadCSV_ddComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _dd_testdd_testdd_component__WEBPACK_IMPORTED_MODULE_7__["TestddComponent"], _svg_svg1_svg1_component__WEBPACK_IMPORTED_MODULE_8__["Svg1Component"], _chart_table_mytable_component__WEBPACK_IMPORTED_MODULE_9__["MyTableComponent"], _stat_div_stat_div_component__WEBPACK_IMPORTED_MODULE_10__["StatDivComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXRhLWRpdi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "+xse":
/*!*****************************************************!*\
  !*** ./src/app/d3/directives/zoomable.directive.ts ***!
  \*****************************************************/
/*! exports provided: ZoomableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomableDirective", function() { return ZoomableDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _d3_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../d3.service */ "/8bv");


class ZoomableDirective {
    constructor(d3Service, _element) {
        this.d3Service = d3Service;
        this._element = _element;
    }
    ngOnInit() {
    }
}
ZoomableDirective.ɵfac = function ZoomableDirective_Factory(t) { return new (t || ZoomableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_d3_service__WEBPACK_IMPORTED_MODULE_1__["D3Service"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
ZoomableDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ZoomableDirective, selectors: [["", "zoomableOf", ""]], inputs: { zoomableOf: "zoomableOf" } });


/***/ }),

/***/ "/8bv":
/*!**********************************!*\
  !*** ./src/app/d3/d3.service.ts ***!
  \**********************************/
/*! exports provided: D3Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D3Service", function() { return D3Service; });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models */ "ZhC9");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "VphZ");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-selection */ "/TIM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class D3Service {
    /** This service will provide methods to enable user interaction with elements
      * while maintaining the d3 simulations physics
      */
    constructor() { }
    /** A method to bind a pan and zoom behaviour to an svg element */
    applyZoomableBehaviour(svgElement) {
        let svg, container, zoom;
        svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"](svgElement);
        zoom = d3__WEBPACK_IMPORTED_MODULE_1__["zoom"]();
        svg.call(zoom);
    }
    /** A method to bind a draggable behaviour to an svg element */
    /** A method to bind a draggable behaviour to an svg element */
    applyDraggableBehaviour(element) {
        const d3element = d3__WEBPACK_IMPORTED_MODULE_1__["select"](element);
        d3element.call(d3__WEBPACK_IMPORTED_MODULE_1__["drag"]());
    }
    /** The interactable graph we will simulate in this article
    * This method does not interact with the document, purely physical calculations with d3
    */
    getForceDirectedGraph(nodes, links, options) {
        const sg = new _models__WEBPACK_IMPORTED_MODULE_0__["ForceDirectedGraph"](nodes, links, options);
        return sg;
    }
    getNodes() {
    }
    createNodeLabels(nodes) {
        let node = Object(d3_selection__WEBPACK_IMPORTED_MODULE_2__["selectAll"])(".nodeG").data(nodes);
        console.log("node : ", node);
        let textes = node.append("text")
            .attr("dx", 12)
            .attr("dy", ".35em")
            .attr("y", "30px")
            .attr("text-anchor", "middle")
            .attr("alignment-baseline", "central")
            .text(function (d, i) { return d.label; });
        textes.each(function (d, i) {
            nodes[i].box.x = this.getBBox().x;
            nodes[i].box.width = this.getBBox().width;
            nodes[i].box.y = this.getBBox().y;
            nodes[i].box.height = this.getBBox().height;
        });
        node.insert("rect", ":first-child")
            .attr("opacity", 0.9)
            .attr("rx", 5)
            .attr("ry", 5)
            .attr("x", function (d) { return d.box.x; })
            .attr("width", function (d) { return d.box.width; })
            .attr("y", function (d) { return d.box.y; })
            .attr("height", function (d) { return d.box.height; })
            .attr("fill", "white")
            .attr("alignment-baseline", "central")
            .text(function (d, i) { return d.label; });
    }
}
D3Service.ɵfac = function D3Service_Factory(t) { return new (t || D3Service)(); };
D3Service.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: D3Service, factory: D3Service.ɵfac });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/malricphilippe/firebase-course/src/main.ts */"zUnb");


/***/ }),

/***/ "0zdU":
/*!******************************************************************************!*\
  !*** ./src/app/app_sections/main_pages/create-user/create-user.component.ts ***!
  \******************************************************************************/
/*! exports provided: CreateUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUserComponent", function() { return CreateUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");






class CreateUserComponent {
    constructor() {
    }
}
CreateUserComponent.ɵfac = function CreateUserComponent_Factory(t) { return new (t || CreateUserComponent)(); };
CreateUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateUserComponent, selectors: [["create-user"]], decls: 12, vars: 0, consts: [[1, "create-user"], ["appearance", "outline"], ["placeholder", "User email", "matInput", ""], ["type", "password", "placeholder", "User password", "matInput", ""], ["color", "primary", 1, "promo"], ["mat-raised-button", "", "color", "warn"]], template: function CreateUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Create New User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-slide-toggle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Is the user an administrator? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Create User ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.create-user[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.create-user[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.promo[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS11c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckIiLCJmaWxlIjoiY3JlYXRlLXVzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNyZWF0ZS11c2VyIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmNyZWF0ZS11c2VyIGZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ucHJvbW8ge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuIl19 */"] });


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "1Ba/":
/*!***********************************************************************************************!*\
  !*** ./src/app/Dataset_related/show_dataset_related/chart/test-chart/test-chart.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: TestChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestChartComponent", function() { return TestChartComponent; });
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ "m0r1");
/* harmony import */ var patternomaly__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! patternomaly */ "p/Sl");
/* harmony import */ var patternomaly__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(patternomaly__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data.service */ "EnSQ");




class TestChartComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.backgroundC = Object(patternomaly__WEBPACK_IMPORTED_MODULE_1__["generate"])([
            '#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#911eb4', '#46f0f0',
            '#f032e6', '#bcf60c', '#fabebe', '#008080', '#e6beff', '#9a6324', '#fffac8', '#800000',
            '#aaffc3', '#808000', '#ffd8b1', '#000075', '#808080', '#ffffff', '#000000'
        ]);
        this.borderColor = this.backgroundC;
    }
    ngOnInit() {
        this.ctx = 'myPieChart';
        this.dataService.categories$
            .subscribe((data) => {
            console.log("svg");
            console.log(data);
            if (data.length > 0 && data.length < 20) {
                let data_count = data.map(x => x.count);
                console.log(data_count);
                let data2 = {
                    labels: data.map(x => x.categorie),
                    datasets: [{
                            label: "",
                            data: data_count,
                            backgroundColor: this.backgroundC.slice(1, data.length),
                            borderColor: this.borderColor.slice(1, data.length),
                            borderWidth: 1
                        }]
                };
                if (this.myChart) {
                    this.myChart.destroy();
                }
                this.myChart = new chart_js__WEBPACK_IMPORTED_MODULE_0__["Chart"](this.ctx, {
                    type: 'doughnut',
                    data: data2,
                    options: {
                        indexAxis: "y",
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    },
                });
            }
        });
    }
}
TestChartComponent.ɵfac = function TestChartComponent_Factory(t) { return new (t || TestChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"])); };
TestChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TestChartComponent, selectors: [["app-test-chart"]], decls: 3, vars: 0, consts: [["id", "myPieChart", "width", "1200px", "height", "400"]], template: function TestChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Bar Chart2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "canvas", 0);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXN0LWNoYXJ0LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "29W6":
/*!******************************************************!*\
  !*** ./src/app/d3/directives/draggable.directive.ts ***!
  \******************************************************/
/*! exports provided: DraggableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DraggableDirective", function() { return DraggableDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _d3_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../d3.service */ "/8bv");


class DraggableDirective {
    constructor(d3Service, _element) {
        this.d3Service = d3Service;
        this._element = _element;
    }
    ngOnInit() {
    }
}
DraggableDirective.ɵfac = function DraggableDirective_Factory(t) { return new (t || DraggableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_d3_service__WEBPACK_IMPORTED_MODULE_1__["D3Service"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
DraggableDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DraggableDirective, selectors: [["", "draggableNode", ""]], inputs: { draggableNode: "draggableNode", draggableInGraph: "draggableInGraph" } });


/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "4d4w":
/*!*****************************************************************************************!*\
  !*** ./src/app/Dataset_related/show_dataset_related/div/var-test/var-test.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: VarTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VarTestComponent", function() { return VarTestComponent; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_Rxjs_actions_main_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Rxjs/actions/main.actions */ "Mg0f");
/* harmony import */ var src_app_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Rxjs/reducers */ "AzDA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data.service */ "EnSQ");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function VarTestComponent_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const e_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](e_r1);
} }
class VarTestComponent {
    constructor(store, dataService) {
        this.store = store;
        this.dataService = dataService;
        /*  _varName: String;
         get varName(): String {
           return this._varName;
       }
         @Input() set varName(value: String) {
           this._varName = value;
           this.clearData();
         } */
        this.dixPremiers = [];
    }
    ngOnInit() {
        this.fileName$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(src_app_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_2__["selectFileName"]));
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(src_app_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_2__["selectData"])).subscribe((data) => {
            //console.log("data")
            //console.log(data)
            if (data != "**premier**") {
                //this.dataService.modifieCategories(data)
                this.dixPremiers.unshift(data);
                if (this.dixPremiers.length > 10) {
                    this.dixPremiers = this.dixPremiers.slice(0, 10);
                }
            }
        });
    }
    clearData() {
        this.store.dispatch(Object(src_app_Rxjs_actions_main_actions__WEBPACK_IMPORTED_MODULE_1__["clearSVGon"])({ data: "" }));
    }
    stopStream() {
        this.store.dispatch(Object(src_app_Rxjs_actions_main_actions__WEBPACK_IMPORTED_MODULE_1__["stopInterval"])({ data: "" }));
    }
}
VarTestComponent.ɵfac = function VarTestComponent_Factory(t) { return new (t || VarTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"])); };
VarTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: VarTestComponent, selectors: [["var-test"]], decls: 3, vars: 1, consts: [["mat-raised-button", "", 3, "click"], [4, "ngFor", "ngForOf"]], template: function VarTestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function VarTestComponent_Template_button_click_0_listener() { return ctx.clearData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, VarTestComponent_p_2_Template, 2, 1, "p", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.dixPremiers);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2YXItdGVzdC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "4stN":
/*!****************************************************************!*\
  !*** ./src/app/app_sections/main_pages/home/home.component.ts ***!
  \****************************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_courses_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/courses.service */ "y9Uy");
/* harmony import */ var src_app_services_dataset_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/dataset.service */ "i7ll");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _dataSet_card_list_dataSet_card_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dataSet-card-list/dataSet-card-list.component */ "DPsk");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");









class HomeComponent {
    constructor(router, coursesService, dataSetsService) {
        this.router = router;
        this.coursesService = coursesService;
        this.dataSetsService = dataSetsService;
    }
    ngOnInit() {
        this.reloadCourses();
        this.reloadDataSets();
    }
    reloadCourses() {
        this.beginnersCourses$ = this.coursesService.loadCoursesByCategory("BEGINNER").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(console.log));
        this.advancedCourses$ = this.coursesService.loadCoursesByCategory("ADVANCED");
    }
    reloadDataSets() {
        this.datasets$ = this.dataSetsService.loadDataSets();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_courses_service__WEBPACK_IMPORTED_MODULE_3__["CoursesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_dataset_service__WEBPACK_IMPORTED_MODULE_4__["DatasetsService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["home"]], decls: 14, vars: 3, consts: [[1, "outterDiv"], [1, "innerDiv"], [1, "courses-panel"], [1, "header"], [1, "title"], ["mat-mini-fab", "", "color", "primary", "routerLink", "/create-dataset"], [1, "add-course-btn"], [3, "datasets", "datasetEdited", "datasetDeleted"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Datasets app");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "All Datasets");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Ds");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "datasets-card-list", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("datasetEdited", function HomeComponent_Template_datasets_card_list_datasetEdited_12_listener() { return ctx.reloadDataSets(); })("datasetDeleted", function HomeComponent_Template_datasets_card_list_datasetDeleted_12_listener() { return ctx.reloadDataSets(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("datasets", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 1, ctx.datasets$));
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _dataSet_card_list_dataSet_card_list_component__WEBPACK_IMPORTED_MODULE_7__["DataSetCardListComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: [".courses-panel[_ngcontent-%COMP%] {\n    max-width: 400px;\n    margin: 20px auto 0 auto;\n}\n\n\n.header[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n\n.title[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-right: 15px;\n}\n\n\n.outterDiv[_ngcontent-%COMP%]{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n\n.innerDiv[_ngcontent-%COMP%]{\n    width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHdCQUF3QjtBQUM1Qjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOzs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi5jb3Vyc2VzLXBhbmVsIHtcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgIG1hcmdpbjogMjBweCBhdXRvIDAgYXV0bztcbn1cblxuXG4uaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLm91dHRlckRpdntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5pbm5lckRpdntcbiAgICB3aWR0aDogMTAwcHg7XG59Il19 */"] });


/***/ }),

/***/ "5Xy+":
/*!**********************************************!*\
  !*** ./src/app/services/dataset.resolver.ts ***!
  \**********************************************/
/*! exports provided: DatasetResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatasetResolver", function() { return DatasetResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _dataset_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataset.service */ "i7ll");


class DatasetResolver {
    constructor(datasetService) {
        this.datasetService = datasetService;
    }
    resolve(route, state) {
        const datasetUrl = route.paramMap.get("datasetUrl");
        return this.datasetService.findDatasetByUrl(datasetUrl);
    }
}
DatasetResolver.ɵfac = function DatasetResolver_Factory(t) { return new (t || DatasetResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_dataset_service__WEBPACK_IMPORTED_MODULE_1__["DatasetsService"])); };
DatasetResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DatasetResolver, factory: DatasetResolver.ɵfac, providedIn: "root" });


/***/ }),

/***/ "6cgW":
/*!*****************************************************************************************!*\
  !*** ./src/app/Dataset_related/show_dataset_related/div/var-view/var-view.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: VarViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VarViewComponent", function() { return VarViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/data.service */ "EnSQ");


class VarViewComponent {
    constructor(dataService) {
        this.dataService = dataService;
    }
    ngOnInit() {
        this.dataService.findVariableByNom('DG03').subscribe(function (data) {
            console.log(data);
        });
    }
}
VarViewComponent.ɵfac = function VarViewComponent_Factory(t) { return new (t || VarViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
VarViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VarViewComponent, selectors: [["app-var-view"]], decls: 2, vars: 0, template: function VarViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "var-view works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2YXItdmlldy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "8NQ9":
/*!*****************************************************************************************************!*\
  !*** ./src/app/Dataset_related/show_dataset_related/div/data-view-test/data-view-test.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: DataViewTestComponent, DialogTest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataViewTestComponent", function() { return DataViewTestComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogTest", function() { return DialogTest; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Rxjs/reducers */ "AzDA");
/* harmony import */ var _chart_graph1_graph1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../chart/graph1/graph1.component */ "rCga");
/* harmony import */ var _chart_graph2_graph2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../chart/graph2/graph2.component */ "Q983");
/* harmony import */ var _chart_graph3_graph3_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../chart/graph3/graph3.component */ "OiRK");
/* harmony import */ var _chart_graph4_graph4_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../chart/graph4/graph4.component */ "rkIt");
/* harmony import */ var _chart_graph5_graph5_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../chart/graph5/graph5.component */ "tJmR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/data.service */ "EnSQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");














function DataViewTestComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DataViewTestComponent_button_0_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r5.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "HeatMap1");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function DataViewTestComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DataViewTestComponent_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r7.click2(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "HeatMap2");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function DataViewTestComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DataViewTestComponent_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r9.click3(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Tableau crois\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function DataViewTestComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DataViewTestComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r11.click5(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Statistique descriptive");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function DataViewTestComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DataViewTestComponent_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r13.click4(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Stat sur deux variables");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function DialogTest_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainer"](0);
} }
class DataViewTestComponent {
    constructor(dataService, dialog, store) {
        this.dataService = dataService;
        this.dialog = dialog;
        this.store = store;
        this.click = () => {
            const dialogRef = this.dialog.open(DialogTest, {
                width: '800px',
                data: { component: _chart_graph1_graph1_component__WEBPACK_IMPORTED_MODULE_3__["Graph1Component"] }
            });
            dialogRef.afterClosed().subscribe(result => {
                //this.dd_present = result
                console.log(`Dialog result: ${result}`);
            });
        };
        this.click2 = () => {
            const dialogRef = this.dialog.open(DialogTest, {
                width: '1500px',
                data: { component: _chart_graph2_graph2_component__WEBPACK_IMPORTED_MODULE_4__["Graph2Component"] }
            });
            dialogRef.afterClosed().subscribe(result => {
                //this.dd_present = result
                console.log(`Dialog result: ${result}`);
            });
        };
        this.click3 = () => {
            const dialogRef = this.dialog.open(DialogTest, {
                width: '1500px',
                data: { component: _chart_graph3_graph3_component__WEBPACK_IMPORTED_MODULE_5__["Graph3Component"] }
            });
            dialogRef.afterClosed().subscribe(result => {
                //this.dd_present = result
                console.log(`Dialog result: ${result}`);
            });
        };
        this.click4 = () => {
            const dialogRef = this.dialog.open(DialogTest, {
                width: '1500px',
                data: { component: _chart_graph4_graph4_component__WEBPACK_IMPORTED_MODULE_6__["Graph4Component"] }
            });
            dialogRef.afterClosed().subscribe(result => {
                //this.dd_present = result
                console.log(`Dialog result: ${result}`);
            });
        };
        this.click5 = () => {
            const dialogRef = this.dialog.open(DialogTest, {
                width: '1500px',
                data: { component: _chart_graph5_graph5_component__WEBPACK_IMPORTED_MODULE_7__["Graph5Component"] }
            });
            dialogRef.afterClosed().subscribe(result => {
                //this.dd_present = result
                console.log(`Dialog result: ${result}`);
            });
        };
        this.fileName$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(src_app_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_2__["selectFileName"]));
        this.data$ = this.dataService.dataset$;
        this.variablesdd$ = this.dataService.variablesdd$;
        this.categoriesdd$ = this.dataService.categoriesdd$;
    }
    ngOnInit() {
    }
}
DataViewTestComponent.ɵfac = function DataViewTestComponent_Factory(t) { return new (t || DataViewTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_9__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
DataViewTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: DataViewTestComponent, selectors: [["data-view-test"]], decls: 10, vars: 15, consts: [["mat-button", "", 3, "click", 4, "ngIf"], ["mat-button", "", 3, "click"]], template: function DataViewTestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, DataViewTestComponent_button_0_Template, 2, 0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, DataViewTestComponent_button_2_Template, 2, 0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, DataViewTestComponent_button_4_Template, 2, 0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, DataViewTestComponent_button_6_Template, 2, 0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, DataViewTestComponent_button_8_Template, 2, 0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 5, ctx.fileName$) != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 7, ctx.fileName$) != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 9, ctx.fileName$) != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](7, 11, ctx.fileName$) != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](9, 13, ctx.fileName$) != "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXRhLXZpZXctdGVzdC5jb21wb25lbnQuY3NzIn0= */"] });
class DialogTest {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    onNoClick() {
        this.dialogRef.close();
    }
}
DialogTest.ɵfac = function DialogTest_Factory(t) { return new (t || DialogTest)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])); };
DialogTest.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: DialogTest, selectors: [["dialog-test-content"]], decls: 7, vars: 2, consts: [["mat-dialog-title", ""], [1, "mat-typography"], [4, "ngComponentOutlet"], ["align", "end"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"]], template: function DialogTest_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Graph");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "mat-dialog-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, DialogTest_ng_container_3_Template, 1, 0, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "mat-dialog-actions", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "Ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngComponentOutlet", ctx.data.component);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("mat-dialog-close", true);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgComponentOutlet"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"]], encapsulation: 2 });


/***/ }),

/***/ "8One":
/*!*********************************************************************************!*\
  !*** ./src/app/Dataset_related/show_dataset_related/svg/svg2/svg2.component.ts ***!
  \*********************************************************************************/
/*! exports provided: Svg2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Svg2Component", function() { return Svg2Component; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "VphZ");
/* harmony import */ var patternomaly__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! patternomaly */ "p/Sl");
/* harmony import */ var patternomaly__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(patternomaly__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Rxjs/reducers */ "AzDA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/data.service */ "EnSQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");










function Svg2Component_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "figure", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class Svg2Component {
    constructor(dataService, ref, store) {
        this.dataService = dataService;
        this.ref = ref;
        this.store = store;
        this.margin = 50;
        this.width = 750 - (this.margin * 2);
        this.height = 400 - (this.margin * 2);
        this.h2 = 450;
        this.backgroundC = Object(patternomaly__WEBPACK_IMPORTED_MODULE_2__["generate"])([
            '#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#911eb4', '#46f0f0',
            '#f032e6', '#bcf60c', '#fabebe', '#008080', '#e6beff', '#9a6324', '#fffac8', '#800000',
            '#aaffc3', '#808000', '#ffd8b1', '#000075', '#808080', '#ffffff', '#000000'
        ]);
        this.jsChart = false;
        this.next = () => {
            this.sliceInd = (this.sliceInd + 1) % Math.floor(this.allData.length / 10);
            console.log(this.sliceInd);
            let sliceEnd = ((this.sliceInd + 1) * 10 > this.allData.length) ? this.allData.length : (this.sliceInd + 1) * 10;
            this.createSvg(this.allData.slice(this.sliceInd * 10, sliceEnd));
        };
        this.prev = () => {
            if (this.sliceInd == 0) {
                this.sliceInd = Math.floor(this.allData.length / 10);
            }
            else {
                this.sliceInd = (this.sliceInd - 1) % Math.floor(this.allData.length / 10);
            }
            let sliceEnd = ((this.sliceInd + 1) * 10 > this.allData.length) ? this.allData.length : (this.sliceInd + 1) * 10;
            this.createSvg(this.allData.slice(this.sliceInd * 10, sliceEnd));
        };
        this.createPieChart = (data) => {
            this.dataService.categoriesdd$.
                pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["withLatestFrom"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(src_app_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_4__["selectVarName"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)))).subscribe(([dd, varName]) => {
                console.log(dd);
                let myCompare = function (dataA, dataB) {
                    let codeA = dd.filter(data3 => data3.title == varName && data3.answer_fr.slice(0, 120) == dataA[0]);
                    let codeB = dd.filter(data3 => data3.title == varName && data3.answer_fr.slice(0, 120) == dataB[0]);
                    // console.log("codeA")
                    // console.log(codeA)
                    // console.log(dataA[0])
                    // console.log("codeB")
                    // console.log(codeB)
                    if (codeA.length == 0 || codeB.length == 0) {
                        console.log("probleme");
                        console.log(dataA[0]);
                        console.log(dataB[0]);
                    }
                    if (!codeA || codeB || !('code' in codeA[0]) || !("code" in codeB[0])) {
                        // console.log(dataA[0])
                        // console.log(dataB[0])
                        // console.log(dd.filter(data3=>data3.title == varName).map(x=>x.answer_fr.slice(0, 120)))
                        return 0;
                    }
                    return Number(codeA[0].code) - Number(codeB[0].code);
                };
                this.reset = true;
                let allNum = data.filter((x) => x.categorie != 'NA' &&
                    x.categorie != '' && x.categorie != 'Other').filter((x) => {
                    return !isNaN(Number(x.categorie));
                }).length != 0;
                if (allNum) {
                    this.rows = data.filter((x) => x.categorie != 'NA' && x.categorie != '').map((x) => {
                        return [x.categorie, x.count];
                    });
                }
                else {
                    this.rows = data.filter((x) => x.categorie != 'NA' && x.categorie != '').map((x) => {
                        if (dd.filter(data3 => data3.title == varName &&
                            data3.answer_fr.slice(0, 120) == x.categorie).length > 0) {
                            return [dd.filter(data3 => data3.title == varName && data3.answer_fr.slice(0, 120) == x.categorie)[0].answer_fr, x.count];
                        }
                        console.log("prob1");
                        return ["erreur", x.count];
                    });
                }
                if (dd.filter(data => data.title == varName).length > 0) {
                    this.rows.sort(myCompare);
                }
                else {
                    this.rows.sort((a, b) => Number(a[0]) - Number(b[0]));
                }
                console.log(this.rows);
                this.calendar = {
                    chartType: 'PieChart',
                    dataTable: this.rows,
                    firstRowIsData: true,
                    options: {
                        is3D: true,
                        height: 800,
                        width: 900,
                        'title': varName
                    },
                };
            });
        };
    }
    ngOnInit() {
        this.ctx = 'myChart';
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(src_app_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_4__["selectFocusVar"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["withLatestFrom"])(this.dataService.dataset$))
            .subscribe((data) => {
            console.log("--------------------------------svg");
            console.log(data);
            //this.createSvg(data)
            //this.ref.markForCheck()
        });
        this.store.subscribe((state) => {
            let clear = state.main.clearState;
            if (clear) {
                this.svg.selectAll("*").remove();
                //this.createSvg()
            }
        });
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.dataService.nAtable$.subscribe((data) => {
                this.allData = data;
                this.sliceInd = 0;
                let sliceEnd = ((this.sliceInd + 1) * 10 > this.allData.length) ? this.allData.length : (this.sliceInd + 1) * 10;
                this.div = d3__WEBPACK_IMPORTED_MODULE_1__["select"]("figure#variables");
                this.createSvg(this.allData.slice(0, sliceEnd));
            });
        }, 4000);
    }
    ngOnDestroy() {
        this.sub1.unsubscribe();
    }
    createSvg(data) {
        console.log("-------------dataPASsion");
        console.log(data);
        this.div.selectAll(".svg").remove();
        this.svg = this.div
            .append("svg").attr("class", "svg")
            .attr("width", this.width + (this.margin * 2))
            .attr("height", this.h2 + (this.margin * 2))
            .append("g")
            .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
        let group = this.svg.selectAll(".item")
            .data(data)
            .enter()
            .append("g")
            .attr("class", "cir")
            .attr("transform", (d, i) => { return "translate(" + 10 + "," + (i * 50) + ")"; });
        group.append('circle')
            .attr('cx', 10)
            .attr('cy', 0)
            .attr('r', d => ((1 - d.pcNA) * 25) + 5)
            .attr('stroke', 'black')
            .attr('fill', '#9ca3b2');
        group.append('text')
            .attr('x', 70)
            .attr('y', 0)
            .attr('stroke', 'black')
            .style("font-size", 18)
            .text(d => d.name);
        //console.log("svg" )
        //console.log(this.svg )
    }
    drawBars(data) {
        this.svg.selectAll("*").remove();
        let mymax = d3__WEBPACK_IMPORTED_MODULE_1__["max"](data.map(x => x.count));
        //console.log(data)
        // Create the X-axis band scale
        this.x = d3__WEBPACK_IMPORTED_MODULE_1__["scaleBand"]()
            .range([0, this.width])
            .domain(data.map(d => d.categorie))
            .padding(0.2);
        //console.log(data.map(d => d.categorie))
        // Draw the X-axis on the DOM
        this.svg.append("g")
            .attr("transform", "translate(0," + this.height + ")")
            .call(d3__WEBPACK_IMPORTED_MODULE_1__["axisBottom"](this.x))
            .selectAll("text")
            .attr("transform", "translate(-10,0)rotate(-25)")
            .style("text-anchor", "end");
        // Create the Y-axis band scale
        const y = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]()
            .domain([0, mymax])
            .range([this.height, 0]);
        // Draw the Y-axis on the DOM
        this.svg.append("g")
            .call(d3__WEBPACK_IMPORTED_MODULE_1__["axisLeft"](y));
        // Create and fill the bars
        this.svg.selectAll("bars")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", d => this.x(d.categorie))
            .attr("y", d => y(d.count))
            .attr("width", this.x.bandwidth())
            .attr("height", (d) => this.height - y(d.count))
            .attr("fill", "#d04a35");
    }
}
Svg2Component.ɵfac = function Svg2Component_Factory(t) { return new (t || Svg2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"])); };
Svg2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: Svg2Component, selectors: [["svg2"]], inputs: { varName: "varName", data2: "data2" }, decls: 5, vars: 1, consts: [[4, "ngIf"], ["mat-raised-button", "", "color", "primary", 1, "upload-btn", 3, "click"], ["id", "variables"]], template: function Svg2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, Svg2Component_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function Svg2Component_Template_button_click_1_listener() { return ctx.prev(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function Svg2Component_Template_button_click_3_listener() { return ctx.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdmcyLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "99eu":
/*!*********************************************************************************************!*\
  !*** ./src/app/Dataset_related/show_dataset_related/div/stream-div/stream-div.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: StreamDivComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StreamDivComponent", function() { return StreamDivComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_Rxjs_actions_main_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Rxjs/actions/main.actions */ "Mg0f");
/* harmony import */ var src_app_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Rxjs/reducers */ "AzDA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/data.service */ "EnSQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
















function StreamDivComponent_mat_card_2_mat_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", option_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", option_r3, " ");
} }
function StreamDivComponent_mat_card_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " S\u00E9lection de la variable ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "mat-form-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Var Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "mat-autocomplete", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, StreamDivComponent_mat_card_2_mat_option_15_Template, 2, 2, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](16, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function StreamDivComponent_mat_card_2_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r4.createStream(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Stream");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function StreamDivComponent_mat_card_2_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r6.stopStream(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Stop");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](14);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 4, ctx_r0.fileName$), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx_r0.myControl)("matAutocomplete", _r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](16, 6, ctx_r0.filteredOptions));
} }
class StreamDivComponent {
    constructor(dataService, store) {
        this.dataService = dataService;
        this.store = store;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]();
        this.options = ['One', 'Two', 'Three'];
        this.stopStream = () => {
            this.store.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(src_app_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_4__["selectInterval"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((interval) => {
                if (interval != 0) {
                    clearInterval(interval);
                }
            })).subscribe();
        };
        this.createStream = () => {
            this.currentIndex = 0;
            console.log("stream1");
            this.store.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(src_app_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_4__["selectForStream"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["withLatestFrom"])(this.dataService.dataset$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(console.log)).subscribe(([{ interval, varNames }, dataset]) => {
                if (interval != 0) {
                    clearInterval(interval);
                }
                //console.log("stream")
                //console.log(this.myControl.value,varNames)
                this.stream(varNames, dataset);
            });
        };
        this.shuffle = (array) => {
            var currentIndex = array.length, temporaryValue, randomIndex;
            // While there remain elements to shuffle...
            while (0 !== currentIndex) {
                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;
                // And swap it with the current element.
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }
            return array;
        };
        this.stream = (varNames, dataset) => {
            console.log("stream2");
            //console.log(varNames.includes(this.myControl.value))
            if (varNames.includes(this.myControl.value)) {
                let n = varNames.indexOf(this.myControl.value);
                let col = dataset.map(x => x[n]);
                let sArray = this.shuffle(col);
                this.currentIndex = 0;
                //console.log( sArray )
                this.interval = this.createInterval(sArray);
                this.store.dispatch(Object(src_app_Rxjs_actions_main_actions__WEBPACK_IMPORTED_MODULE_3__["updateInterval"])({ data: this.interval }));
            }
        };
        this.createInterval = (sArray) => {
            console.log(this.currentIndex);
            console.log(sArray.length);
            let newInterval = setInterval(() => {
                //console.log(this.currentIndex)
                if (this.currentIndex < sArray.length) {
                    //console.log(sArray[this.currentIndex])
                    this.store.dispatch(Object(src_app_Rxjs_actions_main_actions__WEBPACK_IMPORTED_MODULE_3__["addData"])({ data: sArray[this.currentIndex] }));
                    //this.dataService.mainVar$.next(sArray[this.currentIndex])
                    this.currentIndex++;
                }
                else {
                    clearInterval(this.interval);
                }
            }, 100);
            console.log(newInterval);
            return newInterval;
        };
    }
    ngOnInit() {
        this.fileName$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(src_app_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_4__["selectFileName"]));
        this.dataService.dataset$.subscribe((data) => {
            if (data && data.length > 0) {
                this.options = data[0];
                this.filteredOptions = this.myControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(value => this._filter(value)));
            }
        });
        this.filteredOptions = this.myControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(value => this._filter(value)));
    }
    _filter(value) {
        const filterValue = value.toLowerCase();
        return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
    }
}
StreamDivComponent.ɵfac = function StreamDivComponent_Factory(t) { return new (t || StreamDivComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
StreamDivComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: StreamDivComponent, selectors: [["stream-div"]], decls: 4, vars: 3, consts: [[4, "ngIf"], [1, "form"], [1, "example-full-width"], ["type", "text", "placeholder", "Pick one", "aria-label", "Number", "matInput", "", 3, "formControl", "matAutocomplete"], ["autoActiveFirstOption", ""], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", 1, "ml-2", "mr-2", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "click"], [3, "value"]], template: function StreamDivComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Stream");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, StreamDivComponent_mat_card_2_Template, 22, 8, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, ctx.fileName$) != "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHJlYW0tZGl2LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js/dist/zone-error */ "+Vou");
/* harmony import */ var zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0__);
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    useEmulators: true,
    firebase: {
        apiKey: "AIzaSyCq1t1X34DzlVKBeQKjZvKY6Uh0Le1nhi4",
        authDomain: "emulator-123.firebaseapp.com",
        projectId: "emulator-123",
        storageBucket: "emulator-123.appspot.com",
        messagingSenderId: "451254566218",
        appId: "1:451254566218:web:2eaddf355689fed92715b3",
        measurementId: "G-2JE0ZHCKY2"
    },
    api: {}
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
 // Included with Angular CLI.


/***/ }),

/***/ "AzDA":
/*!****************************************!*\
  !*** ./src/app/Rxjs/reducers/index.ts ***!
  \****************************************/
/*! exports provided: selectupdatedd, selectall, selectddCatCode, selectddCatLabel, selectddCatVarName, selectddVarDesc, selectddVarName, selectCrossVarM, selectCrossVar, selectCrossVar1, selectCrossVar2, selectVarName, selectDataset, selectData, selectCategories, selectFileName_map, selectFocusVar, selectFileName_dd, selectInterval, selectno_na, selectFileState, selectFileName, selectVarNames, selectForStream, reducers, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectupdatedd", function() { return selectupdatedd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectall", function() { return selectall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectddCatCode", function() { return selectddCatCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectddCatLabel", function() { return selectddCatLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectddCatVarName", function() { return selectddCatVarName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectddVarDesc", function() { return selectddVarDesc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectddVarName", function() { return selectddVarName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCrossVarM", function() { return selectCrossVarM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCrossVar", function() { return selectCrossVar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCrossVar1", function() { return selectCrossVar1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCrossVar2", function() { return selectCrossVar2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectVarName", function() { return selectVarName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectDataset", function() { return selectDataset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectData", function() { return selectData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCategories", function() { return selectCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFileName_map", function() { return selectFileName_map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFocusVar", function() { return selectFocusVar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFileName_dd", function() { return selectFileName_dd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectInterval", function() { return selectInterval; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectno_na", function() { return selectno_na; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFileState", function() { return selectFileState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFileName", function() { return selectFileName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectVarNames", function() { return selectVarNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectForStream", function() { return selectForStream; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _main_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.reducer */ "edCO");



const selectupdatedd = (state) => state.updatedd;
const selectall = (state) => state.main;
const selectddCatCode = (state) => state.main.ddCatCode;
const selectddCatLabel = (state) => state.main.ddCatLabel;
const selectddCatVarName = (state) => state.main.ddCatVarName;
const selectddVarDesc = (state) => state.main.ddVarDesc;
const selectddVarName = (state) => state.main.ddVarName;
const selectCrossVarM = (state) => state.main.crossVarM;
const selectCrossVar = (state) => state.main.crossVar;
const selectCrossVar1 = (state) => state.crossVar["0"];
const selectCrossVar2 = (state) => state.crossVar["1"];
const selectVarName = (state) => state.main.varName;
const selectDataset = (state) => state.main.dataset;
const selectData = (state) => state.main.data;
const selectCategories = (state) => state.main.categories;
const selectFileName_map = (state) => state.main.fileName_map;
const selectFocusVar = (state) => state.main.focusVar;
const selectFileName_dd = (state) => state.main.fileName_dd;
const selectInterval = (state) => state.main.interval;
const selectno_na = (state) => state.main.no_na;
const selectFileState = (state) => state.main.fileState;
const selectFileName = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectFileState, (state) => state.fileName);
const selectVarNames = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectFileState, (state) => state.metaInfo.varName);
const selectForStream = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectInterval, selectVarNames, (interval, varNames) => ({ interval, varNames }));
const reducers = {
    [_main_reducer__WEBPACK_IMPORTED_MODULE_2__["mainFeatureKey"]]: _main_reducer__WEBPACK_IMPORTED_MODULE_2__["reducer"],
};
const metaReducers = !src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production ? [] : [];


/***/ }),

/***/ "BRsh":
/*!************************************************************************************!*\
  !*** ./src/app/app_sections/main_pages/create-dataset/create-dataset.component.ts ***!
  \************************************************************************************/
/*! exports provided: CreateDatasetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateDatasetComponent", function() { return CreateDatasetComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "Jgta");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Rxjs/reducers */ "AzDA");
/* harmony import */ var src_app_Rxjs_actions_main_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Rxjs/actions/main.actions */ "Mg0f");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_dataset_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/dataset.service */ "i7ll");
/* harmony import */ var _Dataset_related_Load_related_load_csv_load_csv_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../Dataset_related/Load_related/load-csv/load-csv.component */ "L5jK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");


var Timestamp = firebase_app__WEBPACK_IMPORTED_MODULE_1__["default"].firestore.Timestamp;













class CreateDatasetComponent {
    constructor(fb, afs, router, store, datasetsService) {
        this.fb = fb;
        this.afs = afs;
        this.router = router;
        this.store = store;
        this.datasetsService = datasetsService;
        this.form = this.fb.group({
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            category: ["BEGINNER"],
            url: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            longDescription: [''],
            promo: [false],
            promoStartAt: [null]
        });
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(src_app_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_3__["selectFileState"])).subscribe((data) => {
            console.log(data);
            this.form.patchValue({ description: data.fileName });
        });
    }
    ngOnInit() {
        this.datasetId = this.afs.createId();
    }
    onCreateDataset() {
        const val = this.form.value;
        const newDataset = {
            description: val.description,
            url: val.url,
            id: this.datasetId
        };
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1;
        let yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        console.log(yyyy + "-" + mm + "-" + dd);
        newDataset.startAt = Timestamp.fromDate(new Date());
        this.store.dispatch(Object(src_app_Rxjs_actions_main_actions__WEBPACK_IMPORTED_MODULE_4__["createDs"])({ data: newDataset }));
    }
}
CreateDatasetComponent.ɵfac = function CreateDatasetComponent_Factory(t) { return new (t || CreateDatasetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_dataset_service__WEBPACK_IMPORTED_MODULE_8__["DatasetsService"])); };
CreateDatasetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: CreateDatasetComponent, selectors: [["create-dataset"]], decls: 11, vars: 2, consts: [[1, "create-dataset"], [3, "formGroup"], ["appearance", "outline"], ["placeholder", "DataSet title", "matInput", "", "formControlName", "description"], ["placeholder", "Dataset url", "matInput", "", "formControlName", "url"], ["mat-raised-button", "", "color", "warn", 3, "disabled", "click"]], template: function CreateDatasetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Create New Dataset");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "load-csv");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CreateDatasetComponent_Template_button_click_9_listener() { return ctx.onCreateDataset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, " Create DataSet ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.form.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _Dataset_related_Load_related_load_csv_load_csv_component__WEBPACK_IMPORTED_MODULE_9__["LoadCSVComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"]], styles: ["[_nghost-%COMP%] {\n    display: flex;\n    justify-content: center;\n}\n\n.create-dataset[_ngcontent-%COMP%]\n {\n    margin-top: 20px;\n    width: 1000px;\n}\n\n.dataset\n-thumbnail[_ngcontent-%COMP%] {\n  max-width: 200px;\n  margin-bottom: 10px;\n  border-radius: 4px;\n}\n\n.create-dataset[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n}\n\n.dataset\n-image-upload[_ngcontent-%COMP%] {\n  margin: 0 0 20px 0;\n  display: flex;\n  flex-direction: column;\n}\n\n.promo[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.dataset\n-image-upload[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-bottom:10px;\n}\n\n.upload-progress[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 10px;\n  max-width: 250px;\n}\n\n.progress-bar[_ngcontent-%COMP%] {\n  margin: 10px;\n  width: 300px;\n}\n\n.uploaded-image[_ngcontent-%COMP%] {\n  max-width: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1kYXRhc2V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTs7SUFFSSxnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjs7QUFFQTs7RUFFRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJjcmVhdGUtZGF0YXNldC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG46aG9zdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNyZWF0ZS1kYXRhc2V0XG4ge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgd2lkdGg6IDEwMDBweDtcbn1cblxuLmRhdGFzZXRcbi10aHVtYm5haWwge1xuICBtYXgtd2lkdGg6IDIwMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5jcmVhdGUtZGF0YXNldFxuIGZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmRhdGFzZXRcbi1pbWFnZS11cGxvYWQge1xuICBtYXJnaW46IDAgMCAyMHB4IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5wcm9tbyB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5kYXRhc2V0XG4taW1hZ2UtdXBsb2FkIHNwYW4ge1xuICBtYXJnaW4tYm90dG9tOjEwcHg7XG59XG5cbi51cGxvYWQtcHJvZ3Jlc3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDEwcHg7XG4gIG1heC13aWR0aDogMjUwcHg7XG59XG5cbi5wcm9ncmVzcy1iYXIge1xuICBtYXJnaW46IDEwcHg7XG4gIHdpZHRoOiAzMDBweDtcbn1cblxuLnVwbG9hZGVkLWltYWdlIHtcbiAgbWF4LXdpZHRoOiAyNTBweDtcbn1cblxuIl19 */"] });


/***/ }),

/***/ "DPsk":
/*!******************************************************************************************!*\
  !*** ./src/app/app_sections/main_pages/dataSet-card-list/dataSet-card-list.component.ts ***!
  \******************************************************************************************/
/*! exports provided: DataSetCardListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSetCardListComponent", function() { return DataSetCardListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _edit_ds_dialog_edit_ds_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../edit-ds-dialog/edit-ds-dialog.component */ "p1d9");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_dataset_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/dataset.service */ "i7ll");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");













const _c0 = function (a1) { return ["/dataset", a1]; };
function DataSetCardListComponent_mat_card_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-actions", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " VIEW COURSE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataSetCardListComponent_mat_card_0_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const dataset_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.editDataSet(dataset_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " EDIT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataSetCardListComponent_mat_card_0_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const dataset_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onDeleteDataset(dataset_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dataset_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dataset_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dataset_r1.longDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, dataset_r1.url));
} }
class DataSetCardListComponent {
    constructor(dialog, router, datasetsService) {
        this.dialog = dialog;
        this.router = router;
        this.datasetsService = datasetsService;
        this.datasetEdited = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.datasetDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        console.log("datasets", this.datasets);
    }
    editDataSet(dataset) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.minWidth = "400px";
        dialogConfig.data = dataset;
        this.dialog.open(_edit_ds_dialog_edit_ds_dialog_component__WEBPACK_IMPORTED_MODULE_4__["EditDsDialogComponent"], dialogConfig)
            .afterClosed()
            .subscribe(val => {
            if (val) {
                this.datasetEdited.emit();
            }
        });
    }
    onDeleteDataSet(dataset) {
        this.datasetsService.deleteDataset(dataset.id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => {
            console.log("Deleted ds", dataset);
            this.datasetDeleted.emit(dataset);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => {
            console.log(err);
            alert("Could not delete ds.");
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
        }))
            .subscribe();
    }
}
DataSetCardListComponent.ɵfac = function DataSetCardListComponent_Factory(t) { return new (t || DataSetCardListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_dataset_service__WEBPACK_IMPORTED_MODULE_6__["DatasetsService"])); };
DataSetCardListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataSetCardListComponent, selectors: [["datasets-card-list"]], inputs: { datasets: "datasets" }, outputs: { datasetEdited: "datasetEdited", datasetDeleted: "datasetDeleted" }, decls: 1, vars: 1, consts: [["class", "course-card mat-elevation-z10", 4, "ngFor", "ngForOf"], [1, "course-card", "mat-elevation-z10"], [1, "course-actions"], ["mat-button", "", 1, "mat-raised-button", "mat-primary", 3, "routerLink"], ["mat-button", "", 1, "mat-raised-button", "mat-accent", 3, "click"], ["mat-mini-fab", "", "color", "warn", 3, "click"]], template: function DataSetCardListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataSetCardListComponent_mat_card_0_Template, 17, 5, "mat-card", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.datasets);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"]], styles: [".course-card[_ngcontent-%COMP%] {\n    margin: 20px 10px;\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n}\n\n.course-actions[_ngcontent-%COMP%] {\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGFTZXQtY2FyZC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQiwwQkFBa0I7SUFBbEIsdUJBQWtCO0lBQWxCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJkYXRhU2V0LWNhcmQtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi5jb3Vyc2UtY2FyZCB7XG4gICAgbWFyZ2luOiAyMHB4IDEwcHg7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuXG4uY291cnNlLWFjdGlvbnMge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"] });


/***/ }),

/***/ "EnSQ":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _Rxjs_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Rxjs/reducers */ "AzDA");
/* harmony import */ var _Rxjs_actions_main_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Rxjs/actions/main.actions */ "Mg0f");
/* harmony import */ var _data_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data-utils */ "GOqg");
/* harmony import */ var _db_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./db-utils */ "KoUQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _dataset_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dataset.service */ "i7ll");











class DataService {
    constructor(db, store, datasetsService) {
        this.db = db;
        this.store = store;
        this.datasetsService = datasetsService;
        this.mainVar$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]("**premier**");
        this.crossVarCompte$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.categories$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.categoriesD = {};
        this.dataset$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.dataset$.subscribe((data) => {
        });
        this.datasetSVG$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.categoriesdd$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.variablesdd$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.nAtable$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.store.subscribe((state) => {
            let clear = state.main.clearState;
            if (clear) {
                this.categoriesD = {};
            }
        });
        // update chart
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_3__["selectCrossVar"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["withLatestFrom"])(this.dataset$, this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_3__["selectno_na"])))).subscribe(([data, dataset, no_na]) => {
            if (data &&
                data["0"] != "" && data["1"] != "" &&
                dataset.length > 0) {
                this.crossVarCompte$.next(this.createCompte(data, dataset, no_na));
                let charts = Object(_data_utils__WEBPACK_IMPORTED_MODULE_5__["createCompte2"])(data, dataset, no_na);
                this.store.dispatch(Object(_Rxjs_actions_main_actions__WEBPACK_IMPORTED_MODULE_4__["updateCrossVarM"])({ data: charts }));
            }
        });
    }
    createCompte(vars, dataset, no_na) {
        console.log(vars, dataset);
        console.log(vars["0"], vars["1"]);
        //prend l'index de chaque variable 
        let n1 = dataset[0].indexOf(vars["0"]);
        let n2 = dataset[0].indexOf(vars["1"]);
        //console.log(n1,n2)
        //Si les variables ont trop de categories 
        //le graphique ne sera pas beau
        let varNamesD1 = [];
        let varNamesD2 = [];
        for (var i = 1; i < dataset.length; i++) {
            varNamesD1[dataset[i][n1]] = 1;
            varNamesD2[dataset[i][n2]] = 1;
        }
        let varNames1 = Object.keys(varNamesD1);
        let varNames2 = Object.keys(varNamesD2);
        if (varNames1.length + varNames2.length > 30) {
            return [];
        }
        // le compte commence ici
        var counts = {};
        for (var i = 1; i < dataset.length; i++) {
            if (!(dataset[i][n1] in counts)) {
                counts[dataset[i][n1]] = {};
                for (let e of varNames2) {
                    counts[dataset[i][n1]][e] = 0;
                }
            }
            counts[dataset[i][n1]][dataset[i][n2]] = 1 + (counts[dataset[i][n1]][dataset[i][n2]]);
        }
        //Pour enlever les NA
        if (no_na) {
            delete counts["NA"];
            Object.keys(counts).map((k) => {
                console.log(counts[k]);
                delete counts[k]["NA"];
            });
        }
        //On construit un objet
        const result = [];
        for (let i in Object.keys(counts)) {
            let e = Object.keys(counts)[i];
            if (result.length == 0) {
                console.log("objet intermediaire");
                console.log(counts);
                console.log(Object.keys(counts));
                result[0] = [vars["0"], ...Object.keys(counts[e])];
            }
            for (let i2 in Object.keys(counts[e])) {
                let e2 = Object.keys(counts[e])[i2];
                let index_var2 = Number(i) + 1;
                if (!result[index_var2]) {
                    result[index_var2] = [];
                    result[index_var2][0] = e;
                }
                result[index_var2].push(counts[e][e2]);
            }
        }
        console.log("result");
        console.log(result);
        return result;
    }
    createCompte2(vars, dataset, no_na) {
        this.charts = [];
        console.log(vars, dataset);
        console.log(vars["0"], vars["1"]);
        //Obtention des index
        let n1 = dataset[0].indexOf(vars["0"]);
        let n2 = dataset[0].indexOf(vars["1"]);
        console.log(n1, n2);
        //Pour calculer la règle de création du graphique
        let varNamesD1 = [];
        let varNamesD2 = [];
        for (var i = 1; i < dataset.length; i++) {
            varNamesD1[dataset[i][n1]] = 1;
            varNamesD2[dataset[i][n2]] = 1;
        }
        let varNames1 = Object.keys(varNamesD1);
        let varNames2 = Object.keys(varNamesD2);
        if (varNames1.length + varNames2.length > 30) {
            return [];
        }
        var counts = {};
        for (var i = 1; i < dataset.length; i++) {
            if (!(dataset[i][n1] in counts)) {
                counts[dataset[i][n1]] = {};
                for (let e of varNames2) {
                    counts[dataset[i][n1]][e] = 0;
                }
            }
            counts[dataset[i][n1]][dataset[i][n2]] = 1 + (counts[dataset[i][n1]][dataset[i][n2]]);
        }
        if (no_na) {
            delete counts["NA"];
            Object.keys(counts).map((k) => {
                console.log(counts[k]);
                delete counts[k]["NA"];
            });
        }
        const result = [];
        console.log("counts");
        console.log(counts);
        //Création d'un ensemble de googleCharts
        for (let k of Object.keys(counts)) {
            let e = counts[k];
            console.log(e);
            let d = {};
            d.varNames = Object.keys(e);
            d.title = k;
            d["data"] = Object.keys(e).filter((x) => x != 'NA' && x != '').map((x) => {
                return [x, e[x]];
            });
            this.charts.push(d);
        }
    }
    modifieCategories(data) {
        if (Object.keys(this.categoriesD).includes("" + data)) {
            this.categoriesD["" + data] = this.categoriesD["" + data] + 1;
        }
        else {
            this.categoriesD["" + data] = 1;
        }
        let categories = Object.keys(this.categoriesD).map((cat) => {
            return { categorie: cat, count: this.categoriesD["" + cat] };
        });
        //this.store.dispatch(updateCategories({data:categories}))
        //console.log(categories)
        this.categories$.next(categories);
    }
    findVariableByNom(nom) {
        return this.db.collection("variables", ref => ref.where("nom", "==", nom))
            .get()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(results => {
            const courses = Object(_db_utils__WEBPACK_IMPORTED_MODULE_6__["convertSnaps"])(results);
            return courses.length == 1 ? courses[0] : null;
        }));
    }
    createVar(newVar, courseId) {
        console.log('newVar');
        console.log(newVar);
        return this.db.collection("variables", ref => ref.orderBy("seqNo", "desc").limit(1))
            .get()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(result => {
            var _a, _b;
            const v = Object(_db_utils__WEBPACK_IMPORTED_MODULE_6__["convertSnaps"])(result);
            console.log('result');
            console.log(result);
            console.log(v);
            const lastVSeqNo = (_b = (_a = v[0]) === null || _a === void 0 ? void 0 : _a.seqNo) !== null && _b !== void 0 ? _b : 0;
            const v2 = Object.assign(Object.assign({}, newVar), { seqNo: lastVSeqNo + 1 });
            let save$;
            if (courseId) {
                save$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.db.doc(`variables/${courseId}`).set(v2));
            }
            else {
                console.log("noid!!!!!!!");
                save$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.db.collection("variables").add(v2));
            }
            return save$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => {
                return Object.assign({ id: courseId !== null && courseId !== void 0 ? courseId : res.id }, v2);
            }));
        }));
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_dataset_service__WEBPACK_IMPORTED_MODULE_9__["DatasetsService"])); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "GOqg":
/*!****************************************!*\
  !*** ./src/app/services/data-utils.ts ***!
  \****************************************/
/*! exports provided: createCompte2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCompte2", function() { return createCompte2; });
function createCompte2(vars, dataset, no_na) {
    let charts = [];
    console.log(vars, dataset);
    console.log(vars["0"], vars["1"]);
    let n1 = dataset[0].indexOf(vars["0"]);
    let n2 = dataset[0].indexOf(vars["1"]);
    console.log(n1, n2);
    /*
    if(arr[1].split(" ")[0].split("-").length > 2 ){
      arr = arr.map(x=>x.split(" ")[0])

    }
    */
    let varNamesD1 = [];
    let varNamesD2 = [];
    for (var i = 1; i < dataset.length; i++) {
        varNamesD1[dataset[i][n1]] = 1;
        varNamesD2[dataset[i][n2]] = 1;
    }
    let varNames1 = Object.keys(varNamesD1);
    let varNames2 = Object.keys(varNamesD2);
    if (varNames1.length + varNames2.length > 30) {
        return [];
    }
    var counts = {};
    for (var i = 1; i < dataset.length; i++) {
        if (!(dataset[i][n1] in counts)) {
            counts[dataset[i][n1]] = {};
            for (let e of varNames2) {
                counts[dataset[i][n1]][e] = 0;
            }
        }
        counts[dataset[i][n1]][dataset[i][n2]] = 1 + (counts[dataset[i][n1]][dataset[i][n2]]);
    }
    if (no_na) {
        delete counts["NA"];
        Object.keys(counts).map((k) => {
            console.log(counts[k]);
            delete counts[k]["NA"];
        });
    }
    const result = [];
    console.log("counts");
    console.log(counts);
    for (let k of Object.keys(counts)) {
        let e = counts[k];
        console.log(e);
        let d = {};
        d.varNames = Object.keys(e);
        d.title = k;
        d["data"] = Object.keys(e).filter((x) => x != 'NA' && x != '').map((x) => {
            return [x, e[x]];
        });
        charts.push(d);
    }
    return charts;
}


/***/ }),

/***/ "IGsU":
/*!********************************************************************!*\
  !*** ./src/app/app_sections/main_pages/course/course.component.ts ***!
  \********************************************************************/
/*! exports provided: CourseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseComponent", function() { return CourseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");






function CourseComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CourseComponent_mat_header_cell_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CourseComponent_mat_cell_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lesson_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lesson_r9.seqNo);
} }
function CourseComponent_mat_header_cell_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CourseComponent_mat_cell_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lesson_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lesson_r10.description);
} }
function CourseComponent_mat_header_cell_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CourseComponent_mat_cell_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lesson_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lesson_r11.duration);
} }
function CourseComponent_mat_header_row_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row");
} }
function CourseComponent_mat_row_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-row");
} }
class CourseComponent {
    constructor(route) {
        this.route = route;
        this.loading = false;
        this.displayedColumns = ['seqNo', 'description', 'duration'];
    }
    ngOnInit() {
        this.course = this.route.snapshot.data["course"];
    }
}
CourseComponent.ɵfac = function CourseComponent_Factory(t) { return new (t || CourseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
CourseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CourseComponent, selectors: [["course"]], decls: 19, vars: 5, consts: [[1, "course"], [1, "course-thumbnail", "mat-elevation-z8", 3, "src"], ["class", "spinner-container", 4, "ngIf"], [1, "lessons-table", "mat-elevation-z8"], ["matColumnDef", "seqNo"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "description"], ["class", "description-cell", 4, "matCellDef"], ["matColumnDef", "duration"], ["class", "duration-cell", 4, "matCellDef"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["mat-raised-button", "", "color", "primary", 1, "bottom-toolbar"], [1, "spinner-container"], [1, "description-cell"], [1, "duration-cell"]], template: function CourseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CourseComponent_div_4_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](6, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CourseComponent_mat_header_cell_7_Template, 2, 0, "mat-header-cell", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CourseComponent_mat_cell_8_Template, 2, 1, "mat-cell", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CourseComponent_mat_header_cell_10_Template, 2, 0, "mat-header-cell", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CourseComponent_mat_cell_11_Template, 2, 1, "mat-cell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CourseComponent_mat_header_cell_13_Template, 2, 0, "mat-header-cell", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CourseComponent_mat_cell_14_Template, 2, 1, "mat-cell", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CourseComponent_mat_header_row_15_Template, 1, 0, "mat-header-row", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CourseComponent_mat_row_16_Template, 1, 0, "mat-row", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Load More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.course == null ? null : ctx.course.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.course == null ? null : ctx.course.iconUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatSpinner"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]], styles: [".course[_ngcontent-%COMP%] {\n    text-align: center;\n    max-width: 390px;\n    margin: 20px auto 0 auto;\n}\n\n.course-thumbnail[_ngcontent-%COMP%] {\n    width: 200px;\n    border-radius: 4px;\n    margin: 20px auto;\n    display: block;\n}\n\n.description-cell[_ngcontent-%COMP%] {\n    text-align: left;\n    margin: 10px auto;\n}\n\n.duration-cell[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n.duration-cell[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    display: inline-block;\n    vertical-align: middle;\n    font-size: 20px;\n}\n\n.spinner-container[_ngcontent-%COMP%] {\n    height: 360px;\n    width: 390px;\n    position: fixed;\n}\n\n.lessons-table[_ngcontent-%COMP%] {\n    min-height: 360px;\n    margin-top: 10px;\n}\n\n.spinner-container[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%] {\n    margin: 130px auto 0 auto;\n}\n\n.bottom-toolbar[_ngcontent-%COMP%] {\n  margin: 30px 0;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdXJzZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakIiLCJmaWxlIjoiY291cnNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jb3Vyc2Uge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXgtd2lkdGg6IDM5MHB4O1xuICAgIG1hcmdpbjogMjBweCBhdXRvIDAgYXV0bztcbn1cblxuLmNvdXJzZS10aHVtYm5haWwge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5kZXNjcmlwdGlvbi1jZWxsIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbjogMTBweCBhdXRvO1xufVxuXG4uZHVyYXRpb24tY2VsbCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZHVyYXRpb24tY2VsbCBtYXQtaWNvbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uc3Bpbm5lci1jb250YWluZXIge1xuICAgIGhlaWdodDogMzYwcHg7XG4gICAgd2lkdGg6IDM5MHB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuLmxlc3NvbnMtdGFibGUge1xuICAgIG1pbi1oZWlnaHQ6IDM2MHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5zcGlubmVyLWNvbnRhaW5lciBtYXQtc3Bpbm5lciB7XG4gICAgbWFyZ2luOiAxMzBweCBhdXRvIDAgYXV0bztcbn1cblxuLmJvdHRvbS10b29sYmFyIHtcbiAgbWFyZ2luOiAzMHB4IDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "KoUQ":
/*!**************************************!*\
  !*** ./src/app/services/db-utils.ts ***!
  \**************************************/
/*! exports provided: convertSnaps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertSnaps", function() { return convertSnaps; });
function convertSnaps(results) {
    return results.docs.map(snap => {
        return Object.assign({ id: snap.id }, snap.data());
    });
}


/***/ }),

/***/ "L5jK":
/*!*****************************************************************************!*\
  !*** ./src/app/Dataset_related/Load_related/load-csv/load-csv.component.ts ***!
  \*****************************************************************************/
/*! exports provided: LoadCSVComponent, Dialogdd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadCSVComponent", function() { return LoadCSVComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dialogdd", function() { return Dialogdd; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_Rxjs_actions_main_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Rxjs/actions/main.actions */ "Mg0f");
/* harmony import */ var src_app_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Rxjs/reducers */ "AzDA");
/* harmony import */ var _load_csv_dd_load_csv_dd_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../load-csv_dd/load-csv_dd.component */ "yle5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_csv_parser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-csv-parser */ "U7/n");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/data.service */ "EnSQ");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _show_dataset_related_div_data_view_test_data_view_test_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../show_dataset_related/div/data-view-test/data-view-test.component */ "8NQ9");
/* harmony import */ var _dd_testdd_testdd_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../dd/testdd/testdd.component */ "TYiS");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "bTqV");

















const _c0 = ["csvReader"];
function LoadCSVComponent_testdd_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "testdd");
} }
function Dialogdd_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
} }
class LoadCSVComponent {
    constructor(dialog, ngxCsvParser, dataService, store) {
        this.dialog = dialog;
        this.ngxCsvParser = ngxCsvParser;
        this.dataService = dataService;
        this.store = store;
        this.csvRecords = [];
        this.header = false;
        this.dd_present = false;
        this.ouvert_dataset = true;
        this.fileName_dd = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(src_app_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_3__["selectFileName_dd"]));
        this.fileName = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(src_app_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_3__["selectFileName"]));
    }
    ngOnInit() {
    }
    // Your applications input change listener for the CSV File
    uploadListener($event) {
        // Select the files from the event
        const files = $event.srcElement.files;
        console.log('files', files);
        if (files.length > 0) {
            this.store.dispatch(Object(src_app_Rxjs_actions_main_actions__WEBPACK_IMPORTED_MODULE_2__["updateFileName"])({ data: files[0].name }));
            this.store.dispatch(Object(src_app_Rxjs_actions_main_actions__WEBPACK_IMPORTED_MODULE_2__["updateFileSize"])({ data: formatBytes(files[0].size) }));
        }
        // Parse the file you want to select for the operation along with the configuration
        this.ngxCsvParser.parse(files[0], { header: this.header, delimiter: ',' })
            .pipe().subscribe((result) => {
            console.log('---------------Result', result);
            const dialogRef = this.dialog.open(Dialogdd, {
                width: '600px',
                data: { component: _load_csv_dd_load_csv_dd_component__WEBPACK_IMPORTED_MODULE_4__["LoadCSV_ddComponent"] }
            });
            dialogRef.afterClosed().subscribe(result => {
                this.ouvert_dataset = false;
            });
            this.varNames = result[0];
            this.nbEntree = this.varNames.length;
            this.myData = this.varNames.map((e, i) => {
                let nbNA = result.slice(1, this.nbEntree).filter((row) => {
                    return (row[i] == "" || row[i] == "NA");
                }).length;
                //console.log(nbNA)
                return { pcNA: (nbNA / this.nbEntree), name: e };
            });
            console.log("---------------myData");
            console.log(this.myData);
            this.dataService.nAtable$.next(this.myData);
            this.csvRecords = result;
            this.dataService.dataset$.next(result);
        }, (error) => {
            console.log('Error', error);
        });
    }
    uploadVar() {
        let newD = [];
        let name = this.csvRecords[0][10];
        let a = this.csvRecords.filter((d, i) => {
            return i != 0;
        });
        let b = a.map(function (v, i2) {
            newD[i2] = v[10];
        });
        let newVar = { nom: name, data: newD };
        this.dataService.createVar(newVar).subscribe();
    }
}
LoadCSVComponent.ɵfac = function LoadCSVComponent_Factory(t) { return new (t || LoadCSVComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_csv_parser__WEBPACK_IMPORTED_MODULE_6__["NgxCsvParser"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
LoadCSVComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: LoadCSVComponent, selectors: [["load-csv"]], viewQuery: function LoadCSVComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.fileImportInput = _t.first);
    } }, decls: 26, vars: 4, consts: [["multi", "", 1, "example-headers-align"], [3, "expanded"], [1, "mat-elevation-z10", "m-3"], [1, "upload-actions"], ["for", "txtFileUpload", 2, "width", "100%"], ["type", "file", "name", "Upload CSV", "id", "txtFileUpload", "accept", ".csv", 2, "width", "100%", 3, "change"], ["csvReader", ""], [4, "ngIf"], [2, "width", "fit-content", "margin", "auto"]], template: function LoadCSVComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-accordion", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-expansion-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " Choisi ton ensemble de donnee ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-panel-description");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " Un fichier csv ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "view_week");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Upload dataset");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Veuillez choisir un fichier.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "mat-card-actions", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Select a file for data:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function LoadCSVComponent_Template_input_change_20_listener($event) { return ctx.uploadListener($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, LoadCSVComponent_testdd_22_Template, 1, 0, "testdd", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](23, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "data-view-test");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("expanded", ctx.ouvert_dataset);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](23, 2, ctx.fileName_dd) != "");
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionPanelDescription"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardActions"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _show_dataset_related_div_data_view_test_data_view_test_component__WEBPACK_IMPORTED_MODULE_12__["DataViewTestComponent"], _dd_testdd_testdd_component__WEBPACK_IMPORTED_MODULE_13__["TestddComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"]], styles: [".form[_ngcontent-%COMP%] {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n  }\n  \n.full-width[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  \n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], .example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  flex-basis: 0;\n}\n  \n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  align-items: center;\n}\n  \n.example-headers-align[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWQtY3N2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7RUFDYjs7QUFFRjtJQUNJLFdBQVc7RUFDYjs7QUFFQTs7RUFFQSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6ImxvYWQtY3N2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybSB7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuLmZ1bGwtd2lkdGgge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmV4YW1wbGUtaGVhZGVycy1hbGlnbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUsXG4uZXhhbXBsZS1oZWFkZXJzLWFsaWduIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XG4gIGZsZXgtYmFzaXM6IDA7XG59XG5cbi5leGFtcGxlLWhlYWRlcnMtYWxpZ24gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZXhhbXBsZS1oZWFkZXJzLWFsaWduIC5tYXQtZm9ybS1maWVsZCArIC5tYXQtZm9ybS1maWVsZCB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59Il19 */"] });
function formatBytes(bytes, decimals = 2) {
    if (bytes === 0)
        return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}
class Dialogdd {
    constructor(store, dialogRef, data) {
        this.store = store;
        this.dialogRef = dialogRef;
        this.data = data;
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(src_app_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_3__["selectFileName_dd"])).subscribe((data) => {
            if (data != '') {
                this.dialogRef.close();
            }
        });
    }
    onNoClick() {
        this.dialogRef.close();
    }
}
Dialogdd.ɵfac = function Dialogdd_Factory(t) { return new (t || Dialogdd)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])); };
Dialogdd.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: Dialogdd, selectors: [["dialog-content"]], decls: 7, vars: 1, consts: [["mat-dialog-title", ""], [1, "mat-typography"], [4, "ngComponentOutlet"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""]], template: function Dialogdd_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Dictionnaire de donn\u00E9es");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-dialog-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, Dialogdd_ng_container_3_Template, 1, 0, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-dialog-actions", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Annuler");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngComponentOutlet", ctx.data.component);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgComponentOutlet"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"]], encapsulation: 2 });


/***/ }),

/***/ "Mg0f":
/*!**********************************************!*\
  !*** ./src/app/Rxjs/actions/main.actions.ts ***!
  \**********************************************/
/*! exports provided: loadMains, loadMainsSuccess, loadMainsFailure, addData, clearSVGon, clearSVGoff, updateCategories, updateFileName, updateFileSize, updateFileMeta, updateInterval, stopInterval, updateData, updateNo_na, updateFileName_map, updateFileName_dd, updateFocusVar, updateVarName, updateCrossVar, updateCrossVar1, updateCrossVar2, updatedd, updateCrossVarM, updateddVarName, updateddVarDesc, updateddCatVarName, updateddCatCode, updateddCatLabel, createDs, increment, decrement, reset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMains", function() { return loadMains; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMainsSuccess", function() { return loadMainsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMainsFailure", function() { return loadMainsFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addData", function() { return addData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearSVGon", function() { return clearSVGon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearSVGoff", function() { return clearSVGoff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCategories", function() { return updateCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateFileName", function() { return updateFileName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateFileSize", function() { return updateFileSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateFileMeta", function() { return updateFileMeta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateInterval", function() { return updateInterval; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopInterval", function() { return stopInterval; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateData", function() { return updateData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateNo_na", function() { return updateNo_na; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateFileName_map", function() { return updateFileName_map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateFileName_dd", function() { return updateFileName_dd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateFocusVar", function() { return updateFocusVar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateVarName", function() { return updateVarName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCrossVar", function() { return updateCrossVar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCrossVar1", function() { return updateCrossVar1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCrossVar2", function() { return updateCrossVar2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatedd", function() { return updatedd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCrossVarM", function() { return updateCrossVarM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateddVarName", function() { return updateddVarName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateddVarDesc", function() { return updateddVarDesc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateddCatVarName", function() { return updateddCatVarName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateddCatCode", function() { return updateddCatCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateddCatLabel", function() { return updateddCatLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDs", function() { return createDs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "increment", function() { return increment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decrement", function() { return decrement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reset", function() { return reset; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const loadMains = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Main] Load Mains');
const loadMainsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Main] Load Mains Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadMainsFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Main] Load Mains Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Data List] Add Data', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const clearSVGon = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Data clear] Add clear on', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const clearSVGoff = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Data clear] Add clear off', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateCategories = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Data update Cat] update Cat', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateFileName = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Data update FileName] update FileName', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateFileSize = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Data update FileSize] update FileSize', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateFileMeta = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Data update FileMeta] update FileMeta', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateInterval = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Data update Interval] update Interval', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const stopInterval = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Data stop Interval] update stop', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Data updateData] updateData', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateNo_na = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Data updateNoNA] update NO NA', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateFileName_map = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Data FileName_map] update FileName_map', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateFileName_dd = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Data FileName_dd] update FileName_dd', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateFocusVar = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Data FocusVar] update FocusVar', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateVarName = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Data updateVarName] update VarName', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateCrossVar = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Data updateCrossVar] update updateCrossVar', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateCrossVar1 = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Data updateCrossVar1] update updateCrossVar1', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateCrossVar2 = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Data updateCrossVar2] update updateCrossVar2', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updatedd = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Data updatedd] update updatedd', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateCrossVarM = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Data updateCrossVarM] update updateCrossVarM', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateddVarName = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Data updateddVarName] update updateddVarName', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateddVarDesc = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Data updateddVarDesc] update updateddVarDesc', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateddCatVarName = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Data updateddCatVarName] update updateddCatVarName', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateddCatCode = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Data updateddCatCode] update updateddCatCode', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateddCatLabel = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Data updateddCatLabel] update updateddCatLabel', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const createDs = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Data createDs] update createDs', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const increment = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Counter Component] Increment');
const decrement = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Counter Component] Decrement');
const reset = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Counter Component] Reset');


/***/ }),

/***/ "OY3S":
/*!******************************************************************!*\
  !*** ./src/app/app_sections/main_pages/login/login.component.ts ***!
  \******************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LoginComponent {
    constructor() {
    }
    ngOnInit() {
    }
    ngOnDestroy() {
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["login"]], decls: 4, vars: 0, consts: [[1, "login"], ["id", "firebaseui-auth-container", 1, "auth-container"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".login[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUxGIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uYXV0aC1jb250YWluZXIge1xuXG59XG5cblxuLmxvZ2luIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "OiRK":
/*!***************************************************************************************!*\
  !*** ./src/app/Dataset_related/show_dataset_related/chart/graph3/graph3.component.ts ***!
  \***************************************************************************************/
/*! exports provided: Graph3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Graph3Component", function() { return Graph3Component; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "VphZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ "EnSQ");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _select_var_select_vars_select_vars_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../select-var/select-vars/select-vars.component */ "vi/k");
/* harmony import */ var _cross_var_multi_cross_var_multi_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../cross-var-multi/cross-var-multi.component */ "a6Z1");









function Graph3Component_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Graph3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-card-content", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "select-vars");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "cross-var-multi");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "figure", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class Graph3Component {
    constructor(dataService, store) {
        this.dataService = dataService;
        this.store = store;
        this.width = 1000;
        this.margin = 20;
        this.h2 = 250;
        this.myclick = () => {
            console.log("data", this.data[0]);
            if (this.svg) {
                this.svg.selectAll("*").remove();
            }
            //let dataSplit = this.data[0].slice(1,500).map(data=>data.slice(0,100))
            let random_num = Math.floor(Math.random() * this.data[0].length - 2);
            let dataSplit = this.data[0].slice(random_num + 1, random_num + 2);
            let na_table_t = [];
            let na_table = dataSplit[0].map((data, j) => {
                return data != "NA";
            });
            let nrow = Math.floor(Math.sqrt(na_table.length));
            let ncol = Math.floor(na_table.length / nrow) + 1;
            let px_per_cell_x = this.width / ncol;
            let px_per_cell_y = this.h2 / nrow;
            console.log(px_per_cell_x, px_per_cell_y);
            console.log(na_table_t);
            this.svg.selectAll()
                .data(na_table)
                .enter()
                .append("circle")
                .attr("class", "na_cell")
                .attr("cx", (data, j) => ((j % ncol) * px_per_cell_x) + px_per_cell_x / 2)
                .attr("cy", (data, j) => (Math.floor(j / ncol) * px_per_cell_y) + px_per_cell_y / 2)
                .attr("r", 3)
                //.attr("stroke","black")
                .attr("stroke-width", 1)
                .attr("fill", (data, j) => (data) ? "black" : "red");
        };
        this.dataset$ = this.dataService.dataset$;
    }
    ngOnInit() {
        //this.createSvg()
        /*
            this.clearSub = this.store.subscribe((state:any)=>{
              let clear = state.main.clearState
              if(clear){
                this.svg.selectAll("*").remove()
                this.createSvg()
              }
            })
        
            this.dataService.dataset$.pipe(
              withLatestFrom(this.dataService.variablesdd$,this.dataService.categoriesdd$)
            ).subscribe((data)=>{
              console.log("data",data)
              this.data = data
              this.createSvg()
        
            })
        
        */
    }
    ngAfterViewInit() {
        this.createSvg();
    }
    ngOnDestroy() {
        this.clearSub.unsubscribe();
    }
    createSvg() {
        if (this.svg) {
            this.svg.selectAll("*").remove();
        }
        console.log(d3__WEBPACK_IMPORTED_MODULE_0__["select"]("figure#bar"));
        this.svg = d3__WEBPACK_IMPORTED_MODULE_0__["select"]("figure#bar")
            .append("svg")
            .attr("width", this.width + (this.margin * 2))
            .attr("height", this.h2 + (this.margin * 2))
            .attr("style", "background-color:white")
            .append("g")
            .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
        console.log(this.svg);
        //console.log("svg" )
        //console.log(this.svg )
    }
}
Graph3Component.ɵfac = function Graph3Component_Factory(t) { return new (t || Graph3Component)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
Graph3Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: Graph3Component, selectors: [["app-graph3"]], decls: 5, vars: 3, consts: [["style", "width: fit-content;margin: auto;", 4, "ngIf"], [2, "width", "fit-content", "margin", "auto"], ["mat-button", "", 3, "click"], [1, "mat-elevation-z10", "m-3"], [2, "height", "1200px"], ["id", "bar"]], template: function Graph3Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, Graph3Component_div_0_Template, 9, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Graph3Component_Template_button_click_3_listener() { return ctx.myclick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Calcul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_0_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.dataset$)) == null ? null : tmp_0_0.length) > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _select_var_select_vars_select_vars_component__WEBPACK_IMPORTED_MODULE_7__["SelectVarsComponent"], _cross_var_multi_cross_var_multi_component__WEBPACK_IMPORTED_MODULE_8__["CrossVarMultiComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJncmFwaDMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "Onam":
/*!*************************************************************************!*\
  !*** ./src/app/Dataset_related/dd/dd-var-name/dd-var-name.component.ts ***!
  \*************************************************************************/
/*! exports provided: DdVarNameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DdVarNameComponent", function() { return DdVarNameComponent; });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Rxjs/reducers */ "AzDA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/data.service */ "EnSQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");











function DdVarNameComponent_th_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Variable");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function DdVarNameComponent_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r16.variable, " ");
} }
function DdVarNameComponent_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Texte");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function DdVarNameComponent_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r17.texte_fr, " ");
} }
function DdVarNameComponent_tr_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 18);
} }
function DdVarNameComponent_tr_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 19);
} }
function DdVarNameComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Variable");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function DdVarNameComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r19.title, " ");
} }
function DdVarNameComponent_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function DdVarNameComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r20.code, " ");
} }
function DdVarNameComponent_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Texte");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function DdVarNameComponent_td_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r21.answer_fr, " ");
} }
function DdVarNameComponent_tr_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 18);
} }
function DdVarNameComponent_tr_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 19);
} }
const _c0 = function (a0) { return { "hidden": a0 }; };
class DdVarNameComponent {
    constructor(store, dataService, changeDetectorRefs) {
        this.store = store;
        this.dataService = dataService;
        this.changeDetectorRefs = changeDetectorRefs;
        this.displayedColumns1 = ["variable", "texte"];
        this.displayedColumns2 = ["variable", "code", "texte"];
        this.dataChange = (data) => {
            console.log("data change");
            console.log(data);
            if (this.variables) {
                this.dataSource1.data = this.variables.filter((data2) => data2.variable == data);
                this.dataSource2.data = this.cat.filter((data2) => data2.title == data);
            }
        };
    }
    ngOnInit() {
        console.log("init ");
        this.dataSource1 = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]([]);
        this.dataSource2 = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]([]);
        this.sub1 = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(src_app_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_3__["selectCrossVar"])).subscribe(data => {
            console.log("selectCrossVar", data);
            if (this.varIndex) {
                if (data) {
                    console.log("varIndex", this.varIndex);
                    this.varName = data[this.varIndex];
                    console.log(this.varName);
                    this.dataChange(this.varName);
                }
            }
        });
        this.dataService.variablesdd$.subscribe((data) => {
            //console.log(data)
            this.variables = data;
            this.dataSource1.data = data;
            this.resultsLength1 = data.length;
            //this.changeDetectorRefs.markForCheck()
        });
        this.dataService.categoriesdd$.subscribe((data) => {
            //console.log(data)
            this.cat = data;
            this.dataSource2.data = data;
            this.resultsLength2 = data.length;
            //
            //this.changeDetectorRefs.markForCheck()
        });
    }
    ngOnChanges(changes) {
    }
    ngOnDestroy() {
        this.sub1.unsubscribe();
    }
    ngAfterViewInit() {
        //this.dataSource1 = 
        //this.dataSource2 = new MatTableDataSource<any>([]);
        //
        this.dataSource1.paginator = this.paginators.get(0);
        this.dataSource2.paginator = this.paginators.get(1);
    }
    createFilter1() {
        let filterFunction = function (data, filter) {
            console.log("inside filter");
            return data.variable.indexOf(filter) !== -1;
        };
        return filterFunction;
    }
}
DdVarNameComponent.ɵfac = function DdVarNameComponent_Factory(t) { return new (t || DdVarNameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"])); };
DdVarNameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: DdVarNameComponent, selectors: [["ddVarName"]], viewQuery: function DdVarNameComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginator"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.paginators = _t);
    } }, inputs: { varIndex: "varIndex" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]], decls: 31, vars: 14, consts: [["mat-table", "", 1, "mat-elevation-z8", 2, "width", "100%", 3, "dataSource"], ["matColumnDef", "variable"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "texte"], ["mat-header-cell", "", "class", "ml-3", 4, "matHeaderCellDef"], ["mat-cell", "", "style", "padding-left:5px", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "ngClass", "pageSize"], ["page1", ""], ["hideToggle", ""], ["matColumnDef", "code"], ["page2", ""], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-cell", "", 1, "ml-3"], ["mat-cell", "", 2, "padding-left", "5px"], ["mat-header-row", ""], ["mat-row", ""]], template: function DdVarNameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Variables");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](3, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, DdVarNameComponent_th_4_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, DdVarNameComponent_td_5_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](6, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, DdVarNameComponent_th_7_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, DdVarNameComponent_td_8_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, DdVarNameComponent_tr_9_Template, 1, 0, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, DdVarNameComponent_tr_10_Template, 1, 0, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "mat-paginator", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "mat-expansion-panel", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, " Cat\u00E9gories ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](18, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, DdVarNameComponent_th_19_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, DdVarNameComponent_td_20_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](21, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, DdVarNameComponent_th_22_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, DdVarNameComponent_td_23_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](24, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, DdVarNameComponent_th_25_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, DdVarNameComponent_td_26_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, DdVarNameComponent_tr_27_Template, 1, 0, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, DdVarNameComponent_tr_28_Template, 1, 0, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "mat-paginator", 9, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.dataSource1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](10, _c0, ctx.dataSource1.data.length < 6))("pageSize", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.dataSource2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](12, _c0, ctx.dataSource2.data.length < 6))("pageSize", 5);
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionPanelTitle"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]], styles: [".hidden[_ngcontent-%COMP%]{\n    display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRkLXZhci1uYW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6ImRkLXZhci1uYW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlkZGVue1xuICAgIGRpc3BsYXk6IG5vbmU7XG59Il19 */"] });


/***/ }),

/***/ "PQ6M":
/*!*****************************************************************************************!*\
  !*** ./src/app/Dataset_related/show_dataset_related/svg/svg1_map/svg1_map.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: Svg1_mapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Svg1_mapComponent", function() { return Svg1_mapComponent; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "VphZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/d3 */ "tA33");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data.service */ "EnSQ");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");







function Svg1_mapComponent_mat_slider_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-slider", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function Svg1_mapComponent_mat_slider_2_Template_mat_slider_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1.slideChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("max", ctx_r0.slideMax);
} }
class Svg1_mapComponent {
    constructor(d3Service, dataService, ref, store) {
        this.d3Service = d3Service;
        this.dataService = dataService;
        this.ref = ref;
        this.store = store;
        this.margin = 50;
        this.width = 750 - (this.margin * 2);
        this.height = 400 - (this.margin * 2);
        this.h2 = 450;
        this.slideChange = (event) => {
            console.log(event.value);
            if (this.myData) {
                this.k = event.value + 3;
                this.drawMAp(this.myData);
            }
        };
    }
    onResize(event) {
        //this.graph.initSimulation(this.options);
    }
    ngOnInit() {
        this.createSvg();
        this.dataService.datasetSVG$
            .subscribe((data) => {
            console.log("svg_map");
            console.log(data);
            if (Object.keys(data).length > 0) {
                this.names = data.shift();
                this.myData = data;
                this.slideMax = data[0].length - 4;
                this.k = 4;
                this.drawMAp(data);
            }
            //this.ref.markForCheck()
        });
        this.store.subscribe((state) => {
            let clear = state.main.clearState;
            if (clear) {
                this.svg.selectAll("*").remove();
                //this.createSvg()
            }
        });
    }
    ngOnDestroy() {
        this.sub1.unsubscribe();
    }
    createSvg() {
        this.varName = "";
        //this.color  = ["blue", "green","red"]
        this.color = ["white", "grey", "black"];
        this.svg = d3__WEBPACK_IMPORTED_MODULE_0__["select"]("figure#bar")
            .append("svg")
            .attr("width", 50000)
            .attr("height", 50000);
        //console.log("svg" )
        //console.log(this.svg )
    }
    drawMAp(data) {
        let dataP = data.map(x => Number(x[this.k]));
        let mymin = d3__WEBPACK_IMPORTED_MODULE_0__["min"](dataP);
        let mymax = d3__WEBPACK_IMPORTED_MODULE_0__["max"](dataP);
        let middle = Math.round(mymax / 2);
        console.log(mymin, mymax);
        this.myColor = d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]()
            .domain([mymin, middle, mymax])
            .range(this.color);
        console.log("MAP");
        console.log(data);
        this.varName = this.names[this.k];
        this.svg.selectAll("*").remove();
        this.g1 = this.svg.append("g")
            .attr("transform", "translate(" + "-28000" + "," + "-28500" + ")");
        // Create the Map
        this.g1.selectAll("Map")
            .data(data)
            .enter()
            .append("path")
            .attr("d", d => (d[3]) ? (d[3]) : "")
            .attr("stroke", "black")
            .attr("fill", d => (d[this.k]) ? this.myColor(Number(d[this.k])) : "white")
            .append("title").text(d => "RSA : " + d[0] + " | n : " + d[this.k]);
        var g = this.svg.append("g").attr("transform", "translate(" + "10" + ", 0)");
        let array_legend = [...Array(10).keys()];
        let legend_scale = d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]()
            .range([mymin, mymax])
            .domain([0, array_legend.length - 1]);
        g.append("rect")
            .attr("x", -5)
            .attr("y", 30)
            .attr("width", 50 * 10 + 5)
            .attr("height", 80)
            .attr("fill", "white");
        g.selectAll(".legend").data(array_legend).enter()
            .append("rect")
            .attr("x", d => d * 50)
            .attr("y", 50)
            .attr("width", 50)
            .attr("height", 50)
            .attr("fill", d => this.myColor(legend_scale(d)));
        g.selectAll(".text").data(array_legend).enter()
            .append("text")
            .attr("x", d => d * 50 + 5)
            .attr("y", 48)
            .attr("font-family", "Verdana")
            .attr("font-size", 20)
            .text(d => Math.round(legend_scale(d)));
    }
}
Svg1_mapComponent.ɵfac = function Svg1_mapComponent_Factory(t) { return new (t || Svg1_mapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_d3__WEBPACK_IMPORTED_MODULE_2__["D3Service"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"])); };
Svg1_mapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: Svg1_mapComponent, selectors: [["svg1_map"]], hostBindings: function Svg1_mapComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function Svg1_mapComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, inputs: { varName: "varName", data2: "data2" }, decls: 4, vars: 2, consts: [["style", "min-width: 500px;", "min", "1", "step", "1", "value", "1", 3, "max", "change", 4, "ngIf"], ["id", "bar"], ["min", "1", "step", "1", "value", "1", 2, "min-width", "500px", 3, "max", "change"]], template: function Svg1_mapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, Svg1_mapComponent_mat_slider_2_Template, 1, 1, "mat-slider", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "figure", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.varName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.myData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__["MatSlider"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdmcxX21hcC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "Q7OG":
/*!******************************************************************************************!*\
  !*** ./src/app/app_sections/main_pages/courses-card-list/courses-card-list.component.ts ***!
  \******************************************************************************************/
/*! exports provided: CoursesCardListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesCardListComponent", function() { return CoursesCardListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _edit_course_dialog_edit_course_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../edit-course-dialog/edit-course-dialog.component */ "mmSu");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_courses_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/courses.service */ "y9Uy");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");













const _c0 = function (a1) { return ["/courses", a1]; };
function CoursesCardListComponent_mat_card_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-actions", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " VIEW COURSE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CoursesCardListComponent_mat_card_0_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const course_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.editCourse(course_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " EDIT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CoursesCardListComponent_mat_card_0_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const course_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onDeleteCourse(course_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const course_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", course_r1.iconUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r1.longDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, course_r1.url));
} }
class CoursesCardListComponent {
    constructor(dialog, router, coursesService) {
        this.dialog = dialog;
        this.router = router;
        this.coursesService = coursesService;
        this.courseEdited = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.courseDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    editCourse(course) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.minWidth = "400px";
        dialogConfig.data = course;
        this.dialog.open(_edit_course_dialog_edit_course_dialog_component__WEBPACK_IMPORTED_MODULE_4__["EditCourseDialogComponent"], dialogConfig)
            .afterClosed()
            .subscribe(val => {
            if (val) {
                this.courseEdited.emit();
            }
        });
    }
    onDeleteCourse(course) {
        this.coursesService.deleteCourseAndLessons(course.id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => {
            console.log("Deleted course", course);
            this.courseDeleted.emit(course);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => {
            console.log(err);
            alert("Could not delete course.");
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
        }))
            .subscribe();
    }
}
CoursesCardListComponent.ɵfac = function CoursesCardListComponent_Factory(t) { return new (t || CoursesCardListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_courses_service__WEBPACK_IMPORTED_MODULE_6__["CoursesService"])); };
CoursesCardListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CoursesCardListComponent, selectors: [["courses-card-list"]], inputs: { courses: "courses" }, outputs: { courseEdited: "courseEdited", courseDeleted: "courseDeleted" }, decls: 1, vars: 1, consts: [["class", "course-card mat-elevation-z10", 4, "ngFor", "ngForOf"], [1, "course-card", "mat-elevation-z10"], ["mat-card-image", "", 3, "src"], [1, "course-actions"], ["mat-button", "", 1, "mat-raised-button", "mat-primary", 3, "routerLink"], ["mat-button", "", 1, "mat-raised-button", "mat-accent", 3, "click"], ["mat-mini-fab", "", "color", "warn", 3, "click"]], template: function CoursesCardListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CoursesCardListComponent_mat_card_0_Template, 18, 6, "mat-card", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.courses);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"]], styles: [".course-card[_ngcontent-%COMP%] {\n    margin: 20px 10px;\n}\n\n.course-actions[_ngcontent-%COMP%] {\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdXJzZXMtY2FyZC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJjb3Vyc2VzLWNhcmQtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi5jb3Vyc2UtY2FyZCB7XG4gICAgbWFyZ2luOiAyMHB4IDEwcHg7XG59XG5cbi5jb3Vyc2UtYWN0aW9ucyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"] });


/***/ }),

/***/ "Q983":
/*!***************************************************************************************!*\
  !*** ./src/app/Dataset_related/show_dataset_related/chart/graph2/graph2.component.ts ***!
  \***************************************************************************************/
/*! exports provided: Graph2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Graph2Component", function() { return Graph2Component; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "VphZ");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data.service */ "EnSQ");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");








function Graph2Component_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Graph2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-card-content", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "figure", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class Graph2Component {
    constructor(dataService, store) {
        this.dataService = dataService;
        this.store = store;
        this.width = 1000;
        this.margin = 20;
        this.h2 = 250;
        this.myclick = () => {
            console.log("data", this.data[0]);
            if (this.svg) {
                this.svg.selectAll("*").remove();
            }
            //let dataSplit = this.data[0].slice(1,500).map(data=>data.slice(0,100))
            let random_num = Math.floor(Math.random() * this.data[0].length - 2);
            let dataSplit = this.data[0].slice(random_num + 1, random_num + 2);
            let na_table_t = [];
            let na_table = dataSplit[0].map((data, j) => {
                return data != "NA";
            });
            let nrow = Math.floor(Math.sqrt(na_table.length));
            let ncol = Math.floor(na_table.length / nrow) + 1;
            let px_per_cell_x = this.width / ncol;
            let px_per_cell_y = this.h2 / nrow;
            console.log(px_per_cell_x, px_per_cell_y);
            console.log(na_table_t);
            this.svg.selectAll()
                .data(na_table)
                .enter()
                .append("circle")
                .attr("class", "na_cell")
                .attr("cx", (data, j) => ((j % ncol) * px_per_cell_x) + px_per_cell_x / 2)
                .attr("cy", (data, j) => (Math.floor(j / ncol) * px_per_cell_y) + px_per_cell_y / 2)
                .attr("r", 3)
                //.attr("stroke","black")
                .attr("stroke-width", 1)
                .attr("fill", (data, j) => (data) ? "black" : "red");
        };
        this.dataset$ = this.dataService.dataset$;
    }
    ngOnInit() {
        this.createSvg();
        this.clearSub = this.store.subscribe((state) => {
            let clear = state.main.clearState;
            if (clear) {
                this.svg.selectAll("*").remove();
                this.createSvg();
            }
        });
        this.dataService.dataset$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["withLatestFrom"])(this.dataService.variablesdd$, this.dataService.categoriesdd$)).subscribe((data) => {
            console.log("data", data);
            this.data = data;
            this.createSvg();
        });
    }
    ngAfterViewInit() {
        this.createSvg();
    }
    ngOnDestroy() {
        this.clearSub.unsubscribe();
    }
    createSvg() {
        if (this.svg) {
            this.svg.selectAll("*").remove();
        }
        console.log(d3__WEBPACK_IMPORTED_MODULE_0__["select"]("figure#bar"));
        this.svg = d3__WEBPACK_IMPORTED_MODULE_0__["select"]("figure#bar")
            .append("svg")
            .attr("width", this.width + (this.margin * 2))
            .attr("height", this.h2 + (this.margin * 2))
            .attr("style", "background-color:white")
            .append("g")
            .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
        console.log(this.svg);
        //console.log("svg" )
        //console.log(this.svg )
    }
}
Graph2Component.ɵfac = function Graph2Component_Factory(t) { return new (t || Graph2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"])); };
Graph2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: Graph2Component, selectors: [["app-graph2"]], decls: 5, vars: 3, consts: [["style", "width: fit-content;margin: auto;", 4, "ngIf"], [2, "width", "fit-content", "margin", "auto"], ["mat-button", "", 3, "click"], [1, "mat-elevation-z10", "m-3"], [2, "height", "320px"], ["id", "bar"]], template: function Graph2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, Graph2Component_div_0_Template, 7, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Graph2Component_Template_button_click_3_listener() { return ctx.myclick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Calcul");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_0_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, ctx.dataset$)) == null ? null : tmp_0_0.length) > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJncmFwaDIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "QlY0":
/*!***************************************************************************************!*\
  !*** ./src/app/Dataset_related/show_dataset_related/chart/table/mytable.component.ts ***!
  \***************************************************************************************/
/*! exports provided: MyTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyTableComponent", function() { return MyTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/data.service */ "EnSQ");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "+0xr");



function MyTableComponent_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Cat\u00E9gorie");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MyTableComponent_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r6.categorie, " ");
} }
function MyTableComponent_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "D\u00E9compte");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MyTableComponent_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r7.count, " ");
} }
function MyTableComponent_tr_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 13);
} }
function MyTableComponent_tr_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 14);
} }
class MyTableComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.displayedColumns = ['nom', 'n'];
        this.dataSource = [];
    }
    ngOnInit() {
        this.dataService.categories$
            .subscribe((data) => {
            console.log("Table");
            console.log(data);
            this.dataSource = data;
        });
    }
}
MyTableComponent.ɵfac = function MyTableComponent_Factory(t) { return new (t || MyTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
MyTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyTableComponent, selectors: [["myTable"]], decls: 9, vars: 3, consts: [["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "nom"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "n"], ["mat-header-cell", "", "class", "ml-3", 4, "matHeaderCellDef"], ["mat-cell", "", "style", "padding-left:5px", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-cell", "", 1, "ml-3"], ["mat-cell", "", 2, "padding-left", "5px"], ["mat-header-row", ""], ["mat-row", ""]], template: function MyTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MyTableComponent_th_2_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MyTableComponent_td_3_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MyTableComponent_th_5_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MyTableComponent_td_6_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MyTableComponent_tr_7_Template, 1, 0, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MyTableComponent_tr_8_Template, 1, 0, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJteXRhYmxlLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "RTT0":
/*!*********************************************************************************************!*\
  !*** ./src/app/Dataset_related/show_dataset_related/chart/cross-var/cross-var.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: CrossVarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrossVarComponent", function() { return CrossVarComponent; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Rxjs/reducers */ "AzDA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data.service */ "EnSQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng2_google_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-google-charts */ "omRQ");








function CrossVarComponent_google_chart_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "google-chart", 1);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx_r0.chart);
} }
class CrossVarComponent {
    constructor(store, dataService) {
        this.store = store;
        this.dataService = dataService;
    }
    ngOnInit() {
        this.sub1 = this.dataService.crossVarCompte$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["withLatestFrom"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(src_app_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_2__["selectCrossVar"])), this.dataService.categoriesdd$)).subscribe(([data, vars, dd]) => {
            this.reset = false;
            setTimeout(() => {
                this.reset = true;
                console.log(data);
                this.rows = data;
                if (vars && data) {
                    let varNames = vars["0"] + " - " + vars["1"];
                    console.log();
                    this.chart = {
                        chartType: 'PieChart',
                        dataTable: this.rows,
                        //firstRowIsData: true,
                        options: {
                            is3D: true,
                            height: 400,
                            width: 900,
                            'title': varNames
                        },
                    };
                }
            }, 100);
        });
    }
    ngOnDestroy() {
        this.sub1.unsubscribe();
    }
}
CrossVarComponent.ɵfac = function CrossVarComponent_Factory(t) { return new (t || CrossVarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"])); };
CrossVarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CrossVarComponent, selectors: [["cross-var"]], decls: 1, vars: 1, consts: [[3, "data", 4, "ngIf"], [3, "data"]], template: function CrossVarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, CrossVarComponent_google_chart_0_Template, 1, 1, "google-chart", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reset && ctx.chart);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ng2_google_charts__WEBPACK_IMPORTED_MODULE_6__["GoogleChartComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcm9zcy12YXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "SW8s":
/*!***************************************************!*\
  !*** ./src/app/d3/models/force-directed-graph.ts ***!
  \***************************************************/
/*! exports provided: ForceDirectedGraph */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForceDirectedGraph", function() { return ForceDirectedGraph; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "VphZ");


const FORCES = {
    LINKS: 1 / 50,
    COLLISION: 1,
    CHARGE: -1
};
class ForceDirectedGraph {
    constructor(nodes, links, options) {
        this.ticker = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.nodes = [];
        this.links = [];
        this.nodes = nodes;
        this.links = links;
        this.initSimulation(options);
    }
    initNodes() {
        if (!this.simulation) {
            throw new Error('simulation was not initialized yet');
        }
        this.simulation.nodes(this.nodes);
    }
    initLinks() {
        if (!this.simulation) {
            throw new Error('simulation was not initialized yet');
        }
        this.simulation.force('links', d3__WEBPACK_IMPORTED_MODULE_1__["forceLink"](this.links)
            .id(d => d['id'])
            .strength(FORCES.LINKS));
    }
    initSimulation(options) {
        if (!options || !options.width || !options.height) {
            throw new Error('missing options when initializing simulation');
        }
        /** Creating the simulation */
        if (!this.simulation) {
            const ticker = this.ticker;
            this.simulation = d3__WEBPACK_IMPORTED_MODULE_1__["forceSimulation"]();
            this.simulation
                .force("link", d3__WEBPACK_IMPORTED_MODULE_1__["forceLink"]().distance(100))
                .force("collide", d3__WEBPACK_IMPORTED_MODULE_1__["forceCollide"](function (d) { return 10; }).iterations(16))
                .force("charge", d3__WEBPACK_IMPORTED_MODULE_1__["forceManyBody"]().strength(-2000))
                .force("center", d3__WEBPACK_IMPORTED_MODULE_1__["forceCenter"](options.width / 2, options.height / 2))
                .force("y", d3__WEBPACK_IMPORTED_MODULE_1__["forceY"](0))
                .force("x", d3__WEBPACK_IMPORTED_MODULE_1__["forceX"](0));
            // Connecting the d3 ticker to an angular event emitter
            this.simulation.on('tick', function () {
                ticker.emit(this);
            });
            this.initNodes();
            this.initLinks();
        }
        /** Updating the central force of the simulation */
        this.simulation.force('centers', d3__WEBPACK_IMPORTED_MODULE_1__["forceCenter"](options.width / 2, options.height / 2));
        /** Restarting the simulation internal timer */
        this.simulation.restart();
    }
}


/***/ }),

/***/ "Sld9":
/*!*************************************************************************************!*\
  !*** ./src/app/Dataset_related/Load_related/load-csv_map/load-csv_map.component.ts ***!
  \*************************************************************************************/
/*! exports provided: LoadCSV_mapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadCSV_mapComponent", function() { return LoadCSV_mapComponent; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Rxjs/reducers */ "AzDA");
/* harmony import */ var src_app_Rxjs_actions_main_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Rxjs/actions/main.actions */ "Mg0f");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_csv_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-csv-parser */ "U7/n");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/data.service */ "EnSQ");
/* harmony import */ var _show_dataset_related_svg_svg1_map_svg1_map_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../show_dataset_related/svg/svg1_map/svg1_map.component */ "PQ6M");








const _c0 = ["csvReader"];
class LoadCSV_mapComponent {
    constructor(ngxCsvParser, dataService, store) {
        this.ngxCsvParser = ngxCsvParser;
        this.dataService = dataService;
        this.store = store;
        this.csvRecords = [];
        this.header = false;
    }
    ngOnInit() {
        this.fileName = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(src_app_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_1__["selectFileName_map"]));
    }
    // Your applications input change listener for the CSV File
    uploadListener($event) {
        // Select the files from the event
        const files = $event.srcElement.files;
        console.log('files', files);
        if (files.length > 0) {
            this.store.dispatch(Object(src_app_Rxjs_actions_main_actions__WEBPACK_IMPORTED_MODULE_2__["updateFileName_map"])({ data: files[0].name }));
            //this.store.dispatch(updateFileSize({data:formatBytes(files[0].size)}))
        }
        // Parse the file you want to select for the operation along with the configuration
        this.ngxCsvParser.parse(files[0], { header: this.header, delimiter: ',' })
            .pipe().subscribe((result) => {
            //console.log('Result', result);
            this.options = result[0];
            let meta = {
                nrow: result.length,
                ncol: this.options.length,
                varName: this.options
            };
            console.log(meta);
            //this.store.dispatch(updateFileMeta({data:meta}))
            this.dataService.datasetSVG$.next(result);
        }, (error) => {
            console.log('Error', error);
        });
    }
    uploadVar() {
        let newD = [];
        let name = this.csvRecords[0][9];
        let a = this.csvRecords.filter((d, i) => {
            return i != 0;
        });
        let b = a.map(function (v, i2) {
            newD[i2] = v[9];
        });
        let newVar = { nom: name, data: newD };
        this.dataService.createVar(newVar).subscribe();
    }
}
LoadCSV_mapComponent.ɵfac = function LoadCSV_mapComponent_Factory(t) { return new (t || LoadCSV_mapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_csv_parser__WEBPACK_IMPORTED_MODULE_4__["NgxCsvParser"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"])); };
LoadCSV_mapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: LoadCSV_mapComponent, selectors: [["load-csv-map"]], viewQuery: function LoadCSV_mapComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.fileImportInput = _t.first);
    } }, decls: 6, vars: 0, consts: [["for", "txtFileUpload"], ["type", "file", "name", "Upload CSV", "id", "txtFileUpload", "accept", ".csv", 3, "change"], ["csvReader", ""]], template: function LoadCSV_mapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Select a file:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function LoadCSV_mapComponent_Template_input_change_3_listener($event) { return ctx.uploadListener($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "svg1_map");
    } }, directives: [_show_dataset_related_svg_svg1_map_svg1_map_component__WEBPACK_IMPORTED_MODULE_6__["Svg1_mapComponent"]], styles: [".form[_ngcontent-%COMP%] {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n  }\n  \n.full-width[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWQtY3N2X21hcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0VBQ2I7O0FBRUY7SUFDSSxXQUFXO0VBQ2IiLCJmaWxlIjoibG9hZC1jc3ZfbWFwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybSB7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuLmZ1bGwtd2lkdGgge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9Il19 */"] });
function formatBytes(bytes, decimals = 2) {
    if (bytes === 0)
        return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");







class AppComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 43, vars: 0, consts: [["fullscreen", ""], [3, "click"], ["start", ""], ["mat-list-item", "", "routerLink", "/"], ["mat-list-item", "", "routerLink", "/create-user"], ["mat-list-item", "", "routerLink", "about"], ["mat-list-item", "", "routerLink", "login"], ["mat-list-item", ""], ["color", "primary"], [1, "toolbar-tools"], ["mat-icon-button", "", 3, "click"], [1, "filler"], [1, "user-avatar"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_mat_sidenav_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "library_books");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "add_circle_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Create user");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "question_answer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "person_add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "exit_to_app");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-toolbar", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.open("mouse"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["body[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nmain[_ngcontent-%COMP%] {\n  margin: 30px;\n}\n\n.user-avatar[_ngcontent-%COMP%] {\n  max-height: 35px;\n  border-radius: 4px;\n\n}\n\n.toolbar-tools[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n}\n\n.filler[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7O0FBRXBCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7QUFDYjs7QUFHQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0FBQ2IiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmJvZHkge1xuICBtYXJnaW46IDA7XG59XG5cbm1haW4ge1xuICBtYXJnaW46IDMwcHg7XG59XG5cbi51c2VyLWF2YXRhciB7XG4gIG1heC1oZWlnaHQ6IDM1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcblxufVxuXG4udG9vbGJhci10b29scyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5cbi5maWxsZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbiJdfQ== */"] });


/***/ }),

/***/ "TYiS":
/*!***************************************************************!*\
  !*** ./src/app/Dataset_related/dd/testdd/testdd.component.ts ***!
  \***************************************************************/
/*! exports provided: TestddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestddComponent", function() { return TestddComponent; });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Rxjs/reducers */ "AzDA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/data.service */ "EnSQ");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");












function TestddComponent_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Variable");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TestddComponent_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r18.variable, " ");
} }
function TestddComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Texte fr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TestddComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r19.texte_fr, " ");
} }
function TestddComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Texte en");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TestddComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r20.texte_en, " ");
} }
function TestddComponent_tr_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 20);
} }
function TestddComponent_tr_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 21);
} }
function TestddComponent_th_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Variable");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TestddComponent_td_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r22.title, " ");
} }
function TestddComponent_th_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TestddComponent_td_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r23.code, " ");
} }
function TestddComponent_th_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Texte");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TestddComponent_td_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r24.answer_fr, " ");
} }
function TestddComponent_tr_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 20);
} }
function TestddComponent_tr_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 21);
} }
class TestddComponent {
    constructor(store, dataService, changeDetectorRefs) {
        this.store = store;
        this.dataService = dataService;
        this.changeDetectorRefs = changeDetectorRefs;
        this.displayedColumns1 = ["variable", "texte_fr", "texte_en"];
        this.displayedColumns2 = ["variable", "code", "texte"];
    }
    ngOnInit() {
        this.dataSource1 = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]([]);
        this.dataSource2 = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]([]);
    }
    ngAfterViewInit() {
        //this.dataSource1 = 
        //this.dataSource2 = new MatTableDataSource<any>([]);
        //
        this.dataSource1.paginator = this.paginators.get(0);
        this.dataSource2.paginator = this.paginators.get(1);
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(src_app_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_4__["selectFocusVar"])).subscribe((data) => {
            console.log("data focus var");
            console.log(data);
            if (this.variables) {
                this.dataSource1.data = this.variables.filter((data2) => data2.variable == data);
                this.dataSource2.data = this.cat.filter((data2) => data2.title == data);
            }
        });
        this.dataService.variablesdd$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["withLatestFrom"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(src_app_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_4__["selectddVarName"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)), this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(src_app_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_4__["selectddVarDesc"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)))).subscribe((data) => {
            console.log("variable");
            console.log(data);
            let name = data[1];
            let desc = data[2];
            this.variables = data[0].map((x, i) => {
                x.texte_fr = data[0][i][desc];
                x.variable = data[0][i][name];
                return (x);
            });
            console.log(this.variables);
            this.dataSource1.data = this.variables;
            this.resultsLength1 = this.variables.length;
            //this.changeDetectorRefs.markForCheck()
        });
        this.dataService.categoriesdd$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["withLatestFrom"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(src_app_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_4__["selectddCatVarName"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)), this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(src_app_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_4__["selectddCatCode"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)), this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(src_app_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_4__["selectddCatLabel"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)))).subscribe((data) => {
            console.log(data);
            let name = data[1];
            let code = data[2];
            let label = data[3];
            console.log(data[0]);
            this.categories = data[0].map((x, i) => {
                x.title = data[0][i][name];
                x.code = data[0][i][code];
                x.answer_fr = data[0][i][label];
                return (x);
            });
            this.cat = this.categories;
            this.dataSource2.data = this.categories;
            this.resultsLength2 = this.categories.length;
            //
            //this.changeDetectorRefs.markForCheck()
        });
    }
    createFilter1() {
        let filterFunction = function (data, filter) {
            console.log("inside filter");
            return data.variable.indexOf(filter) !== -1;
        };
        return filterFunction;
    }
}
TestddComponent.ɵfac = function TestddComponent_Factory(t) { return new (t || TestddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"])); };
TestddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: TestddComponent, selectors: [["testdd"]], viewQuery: function TestddComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginator"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.paginators = _t);
    } }, decls: 41, vars: 8, consts: [["multi", "", 1, "example-headers-align"], ["mat-table", "", 1, "mat-elevation-z8", 2, "width", "100%", 3, "dataSource"], ["matColumnDef", "variable"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "texte_fr"], ["mat-header-cell", "", "class", "ml-3", 4, "matHeaderCellDef"], ["mat-cell", "", "style", "padding-left:5px", 4, "matCellDef"], ["matColumnDef", "texte_en"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "pageSize"], ["page1", ""], ["matColumnDef", "code"], ["matColumnDef", "texte"], ["page2", ""], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-cell", "", 1, "ml-3"], ["mat-cell", "", 2, "padding-left", "5px"], ["mat-header-row", ""], ["mat-row", ""]], template: function TestddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-accordion", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " Data Dictionnary ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-panel-description");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " Variable et categories ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "table_view");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Variables");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](12, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, TestddComponent_th_13_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, TestddComponent_td_14_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](15, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, TestddComponent_th_16_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, TestddComponent_td_17_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](18, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, TestddComponent_th_19_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, TestddComponent_td_20_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, TestddComponent_tr_21_Template, 1, 0, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, TestddComponent_tr_22_Template, 1, 0, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "mat-paginator", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Cat\u00E9gories");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](28, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, TestddComponent_th_29_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, TestddComponent_td_30_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](31, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, TestddComponent_th_32_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](33, TestddComponent_td_33_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](34, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](35, TestddComponent_th_35_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](36, TestddComponent_td_36_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](37, TestddComponent_tr_37_Template, 1, 0, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](38, TestddComponent_tr_38_Template, 1, 0, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](39, "mat-paginator", 11, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx.dataSource1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pageSize", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx.dataSource2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pageSize", 5);
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionPanelDescription"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]], styles: [".example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], .example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  flex-basis: 0;\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  align-items: center;\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3RkZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoidGVzdGRkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1oZWFkZXJzLWFsaWduIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSxcbi5leGFtcGxlLWhlYWRlcnMtYWxpZ24gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcbiAgZmxleC1iYXNpczogMDtcbn1cblxuLmV4YW1wbGUtaGVhZGVycy1hbGlnbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5leGFtcGxlLWhlYWRlcnMtYWxpZ24gLm1hdC1mb3JtLWZpZWxkICsgLm1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn0iXX0= */"] });


/***/ }),

/***/ "WuPo":
/*!**********************************************************!*\
  !*** ./src/app/app_sections/main_pages/about/db-data.ts ***!
  \**********************************************************/
/*! exports provided: COURSES, LESSONS, USERS, findCourseById, findLessonsForCourse, authenticate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COURSES", function() { return COURSES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LESSONS", function() { return LESSONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USERS", function() { return USERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findCourseById", function() { return findCourseById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findLessonsForCourse", function() { return findLessonsForCourse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authenticate", function() { return authenticate; });
const COURSES = {
    20: {
        id: 20,
        description: 'Firebase & AngularFire In Depth',
        longDescription: 'Full stack Development with Angular, AngularFire, Firestore, Firebase Storage, Hosting & Cloud Functions.',
        iconUrl: 'https://angular-university.s3-us-west-1.amazonaws.com/course-images/firebase-course-1.jpg',
        lessonsCount: 10,
        categories: ['BEGINNER'],
        seqNo: 0,
        url: 'serverless-angular'
    },
    19: {
        id: 19,
        description: 'Angular Forms In Depth',
        longDescription: 'Build complex enterprise data forms with the powerful Angular Forms module',
        iconUrl: 'https://angular-university.s3-us-west-1.amazonaws.com/course-images/angular-forms-course-small.jpg',
        courseListIcon: 'https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png',
        categories: ['BEGINNER'],
        lessonsCount: 10,
        seqNo: 1,
        url: 'angular-forms-course',
        price: 50
    },
    18: {
        id: 18,
        description: 'Angular Router In Depth',
        longDescription: 'Build large-scale Single Page Applications with the powerful Angular Router',
        iconUrl: 'https://angular-university.s3-us-west-1.amazonaws.com/course-images/angular-router-course.jpg',
        courseListIcon: 'https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png',
        categories: ['BEGINNER'],
        lessonsCount: 10,
        seqNo: 2,
        url: 'angular-router-course',
        price: 50
    },
    17: {
        id: 17,
        description: 'Reactive Angular Course',
        longDescription: 'How to build Angular applications in Reactive style using plain RxJs - Patterns and Anti-Patterns',
        iconUrl: 'https://angular-university.s3-us-west-1.amazonaws.com/course-images/reactive-angular-course.jpg',
        courseListIcon: 'https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png',
        categories: ['BEGINNER'],
        lessonsCount: 10,
        seqNo: 3,
        url: 'reactive-angular-course',
        price: 50
    },
    3: {
        id: 3,
        description: 'RxJs In Practice Course',
        longDescription: 'Understand the RxJs Observable pattern, learn the RxJs Operators via practical examples',
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/rxjs-in-practice-course.png',
        courseListIcon: 'https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png',
        categories: ['BEGINNER'],
        lessonsCount: 10,
        seqNo: 4,
        url: 'rxjs-course',
        price: 50
    },
    4: {
        id: 4,
        description: 'NgRx (with NgRx Data) - The Complete Guide',
        longDescription: 'Learn the modern Ngrx Ecosystem, including NgRx Data, Store, Effects, Router Store, Ngrx Entity, and Dev Tools.',
        iconUrl: 'https://angular-university.s3-us-west-1.amazonaws.com/course-images/ngrx-v2.png',
        categories: ['BEGINNER'],
        lessonsCount: 10,
        seqNo: 5,
        url: 'ngrx-course',
        promo: false,
        price: 50
    },
    2: {
        id: 2,
        description: 'Angular Core Deep Dive',
        longDescription: 'A detailed walk-through of the most important part of Angular - the Core and Common modules',
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
        lessonsCount: 10,
        categories: ['BEGINNER'],
        seqNo: 6,
        url: 'angular-core-course',
        price: 50
    },
    5: {
        id: 5,
        description: 'Angular for Beginners',
        longDescription: 'Establish a solid layer of fundamentals, learn what\'s under the hood of Angular',
        iconUrl: 'https://angular-academy.s3.amazonaws.com/thumbnails/angular2-for-beginners-small-v2.png',
        courseListIcon: 'https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png',
        categories: ['BEGINNER'],
        lessonsCount: 10,
        seqNo: 7,
        url: 'angular-for-beginners',
        price: 50
    },
    12: {
        id: 12,
        description: 'Angular Testing Course',
        longDescription: 'In-depth guide to Unit Testing and E2E Testing of Angular Applications',
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-testing-small.png',
        categories: ['BEGINNER'],
        seqNo: 8,
        url: 'angular-testing-course',
        lessonsCount: 10,
        promo: false,
        price: 50
    },
    16: {
        id: 16,
        description: 'Stripe Payments In Practice',
        longDescription: 'Build your own ecommerce store & membership website with Firebase, Stripe and Express',
        iconUrl: 'https://angular-university.s3-us-west-1.amazonaws.com/course-images/stripe-course.jpg',
        lessonsCount: 10,
        categories: ['BEGINNER'],
        seqNo: 10,
        url: 'stripe-course',
        price: 50
    },
    14: {
        id: 14,
        description: 'NestJs In Practice (with MongoDB)',
        longDescription: 'Build a modern REST backend using Typescript, MongoDB and the familiar Angular API.',
        iconUrl: 'https://angular-university.s3-us-west-1.amazonaws.com/course-images/nestjs-v2.png',
        categories: ['BEGINNER'],
        lessonsCount: 10,
        seqNo: 11,
        url: 'nestjs-course',
        promo: false,
        price: 50
    },
    6: {
        id: 6,
        description: 'Angular Security Course - Web Security Fundamentals',
        longDescription: 'Learn Web Security Fundamentals and apply them to defend an Angular / Node Application from multiple types of attacks.',
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/security-cover-small-v2.png',
        courseListIcon: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/lock-v2.png',
        categories: ['ADVANCED'],
        lessonsCount: 11,
        seqNo: 12,
        url: 'angular-security-course',
        price: 50
    },
    7: {
        id: 7,
        description: 'Angular PWA - Progressive Web Apps Course',
        longDescription: 'Learn Angular Progressive Web Applications, build the future of the Web Today.',
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-pwa-course.png',
        courseListIcon: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/alien.png',
        categories: ['ADVANCED'],
        lessonsCount: 8,
        seqNo: 14,
        url: 'angular-pwa-course',
        price: 50
    },
    8: {
        id: 8,
        description: 'Angular Advanced Library Laboratory: Build Your Own Library',
        longDescription: 'Learn Advanced Angular functionality typically used in Library Development. Advanced Components, Directives, Testing, Npm',
        iconUrl: 'https://angular-academy.s3.amazonaws.com/thumbnails/advanced_angular-small-v3.png',
        courseListIcon: 'https://angular-academy.s3.amazonaws.com/thumbnails/angular-advanced-lesson-icon.png',
        categories: ['ADVANCED'],
        seqNo: 15,
        url: 'angular-advanced-course',
        price: 50
    },
    9: {
        id: 9,
        description: 'The Complete Typescript Course',
        longDescription: 'Complete Guide to Typescript From Scratch: Learn the language in-depth and use it to build a Node REST API.',
        iconUrl: 'https://angular-academy.s3.amazonaws.com/thumbnails/typescript-2-small.png',
        courseListIcon: 'https://angular-academy.s3.amazonaws.com/thumbnails/typescript-2-lesson.png',
        categories: ['BEGINNER'],
        seqNo: 16,
        url: 'typescript-course',
        price: 50
    },
    11: {
        id: 11,
        description: 'Angular Material Course',
        longDescription: 'Build Applications with the official Angular Widget Library',
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/material_design.png',
        categories: ['BEGINNER'],
        seqNo: 17,
        url: 'angular-material-course',
        price: 50
    }
};
const LESSONS = {
    1: {
        id: 1,
        'description': 'Angular Tutorial For Beginners - Build Your First App - Hello World Step By Step',
        'duration': '4:17',
        'seqNo': 1,
        courseId: 5
    },
    2: {
        id: 2,
        'description': 'Building Your First  Component - Component Composition',
        'duration': '2:07',
        'seqNo': 2,
        courseId: 5
    },
    3: {
        id: 3,
        'description': 'Component @Input - How To Pass Input Data To an  Component',
        'duration': '2:33',
        'seqNo': 3,
        courseId: 5
    },
    4: {
        id: 4,
        'description': ' Component Events - Using @Output to create custom events',
        'duration': '4:44',
        'seqNo': 4,
        courseId: 5
    },
    5: {
        id: 5,
        'description': ' Component Templates - Inline Vs External',
        'duration': '2:55',
        'seqNo': 5,
        courseId: 5
    },
    6: {
        id: 6,
        'description': 'Styling  Components - Learn About Component Style Isolation',
        'duration': '3:27',
        'seqNo': 6,
        courseId: 5
    },
    7: {
        id: 7,
        'description': ' Component Interaction - Extended Components Example',
        'duration': '9:22',
        'seqNo': 7,
        courseId: 5
    },
    8: {
        id: 8,
        'description': ' Components Tutorial For Beginners - Components Exercise !',
        'duration': '1:26',
        'seqNo': 8,
        courseId: 5
    },
    9: {
        id: 9,
        'description': ' Components Tutorial For Beginners - Components Exercise Solution Inside',
        'duration': '2:08',
        'seqNo': 9,
        courseId: 5
    },
    10: {
        id: 10,
        'description': ' Directives - Inputs, Output Event Emitters and How To Export Template References',
        'duration': '4:01',
        'seqNo': 10,
        courseId: 5
    },
    // Security Course
    11: {
        id: 11,
        'description': 'Course Helicopter View',
        'duration': '08:19',
        'seqNo': 1,
        courseId: 6
    },
    12: {
        id: 12,
        'description': 'Installing Git, Node, NPM and Choosing an IDE',
        'duration': '04:17',
        'seqNo': 2,
        courseId: 6
    },
    13: {
        id: 13,
        'description': 'Installing The Lessons Code - Learn Why Its Essential To Use NPM 5',
        'duration': '06:05',
        'seqNo': 3,
        courseId: 6
    },
    14: {
        id: 14,
        'description': 'How To Run Node In TypeScript With Hot Reloading',
        'duration': '03:57',
        'seqNo': 4,
        courseId: 6
    },
    15: {
        id: 15,
        'description': 'Guided Tour Of The Sample Application',
        'duration': '06:00',
        'seqNo': 5,
        courseId: 6
    },
    16: {
        id: 16,
        'description': 'Client Side Authentication Service - API Design',
        'duration': '04:53',
        'seqNo': 6,
        courseId: 6
    },
    17: {
        id: 17,
        'description': 'Client Authentication Service - Design and Implementation',
        'duration': '09:14',
        'seqNo': 7,
        courseId: 6
    },
    18: {
        id: 18,
        'description': 'The New Angular HTTP Client - Doing a POST Call To The Server',
        'duration': '06:08',
        'seqNo': 8,
        courseId: 6
    },
    19: {
        id: 19,
        'description': 'User Sign Up Server-Side Implementation in Express',
        'duration': '08:50',
        'seqNo': 9,
        courseId: 6
    },
    20: {
        id: 20,
        'description': 'Introduction To Cryptographic Hashes - A Running Demo',
        'duration': '05:46',
        'seqNo': 10,
        courseId: 6
    },
    21: {
        id: 21,
        'description': 'Some Interesting Properties Of Hashing Functions - Validating Passwords',
        'duration': '06:31',
        'seqNo': 11,
        courseId: 6
    },
    // PWA course
    22: {
        id: 22,
        'description': 'Course Kick-Off - Install Node, NPM, IDE And Service Workers Section Code',
        'duration': '07:19',
        'seqNo': 1,
        courseId: 7
    },
    23: {
        id: 23,
        'description': 'Service Workers In a Nutshell - Service Worker Registration',
        'duration': '6:59',
        'seqNo': 2,
        courseId: 7
    },
    24: {
        id: 24,
        'description': 'Service Workers Hello World - Lifecycle Part 1 and PWA Chrome Dev Tools',
        'duration': '7:28',
        'seqNo': 3,
        courseId: 7
    },
    25: {
        id: 25,
        'description': 'Service Workers and Application Versioning - Install & Activate Lifecycle Phases',
        'duration': '10:17',
        'seqNo': 4,
        courseId: 7
    },
    26: {
        id: 26,
        'description': 'Downloading The Offline Page - The Service Worker Installation Phase',
        'duration': '09:50',
        'seqNo': 5,
        courseId: 7
    },
    27: {
        id: 27,
        'description': 'Introduction to the Cache Storage PWA API',
        'duration': '04:44',
        'seqNo': 6,
        courseId: 7
    },
    28: {
        id: 28,
        'description': 'View Service Workers HTTP Interception Features In Action',
        'duration': '06:07',
        'seqNo': 7,
        courseId: 7
    },
    29: {
        id: 29,
        'description': 'Service Workers Error Handling - Serving The Offline Page',
        'duration': '5:38',
        'seqNo': 8,
        courseId: 7
    },
    // Firebase & AngularFire Course
    30: {
        id: 30,
        description: 'Development Environment Setup',
        'duration': '5:38',
        'seqNo': 1,
        courseId: 20
    },
    31: {
        id: 31,
        description: 'Introduction to the Firebase Ecosystem',
        'duration': '5:12',
        'seqNo': 2,
        courseId: 20
    },
    32: {
        id: 32,
        description: 'Importing Data into Firestore',
        'duration': '4:07',
        'seqNo': 3,
        courseId: 20
    },
    33: {
        id: 33,
        description: 'Firestore Documents in Detail',
        'duration': '7:32',
        'seqNo': 4,
        courseId: 20
    },
    34: {
        id: 34,
        description: 'Firestore Collections in Detail',
        'duration': '6:28',
        'seqNo': 5,
        courseId: 20
    },
    35: {
        id: 35,
        description: 'Firestore Unique Identifiers',
        'duration': '4:38',
        'seqNo': 6,
        courseId: 20
    },
    36: {
        id: 36,
        description: 'Querying Firestore Collections',
        'duration': '7:54',
        'seqNo': 7,
        courseId: 20
    },
    37: {
        id: 37,
        description: 'Firebase Security Rules In Detail',
        'duration': '5:31',
        'seqNo': 8,
        courseId: 20
    },
    38: {
        id: 38,
        description: 'Firebase Cloud Functions In Detail',
        'duration': '8:19',
        'seqNo': 9,
        courseId: 20
    },
    39: {
        id: 39,
        description: 'Firebase Storage In Detail',
        'duration': '7:05',
        'seqNo': 10,
        courseId: 20
    },
    // Angular Testing Course
    40: {
        id: 40,
        description: 'Angular Testing Course - Helicopter View',
        'duration': '5:38',
        'seqNo': 1,
        courseId: 12
    },
    41: {
        id: 41,
        description: 'Setting Up the Development Environment',
        'duration': '5:12',
        'seqNo': 2,
        courseId: 12
    },
    42: {
        id: 42,
        description: 'Introduction to Jasmine, Spies and specs',
        'duration': '4:07',
        'seqNo': 3,
        courseId: 12
    },
    43: {
        id: 43,
        description: 'Introduction to Service Testing',
        'duration': '7:32',
        'seqNo': 4,
        courseId: 12
    },
    44: {
        id: 44,
        description: 'Settting up the Angular TestBed',
        'duration': '6:28',
        'seqNo': 5,
        courseId: 12
    },
    45: {
        id: 45,
        description: 'Mocking Angular HTTP requests',
        'duration': '4:38',
        'seqNo': 6,
        courseId: 12
    },
    46: {
        id: 46,
        description: 'Simulating Failing HTTP Requests',
        'duration': '7:54',
        'seqNo': 7,
        courseId: 12
    },
    47: {
        id: 47,
        description: 'Introduction to Angular Component Testing',
        'duration': '5:31',
        'seqNo': 8,
        courseId: 12
    },
    48: {
        id: 48,
        description: 'Testing Angular Components without the DOM',
        'duration': '8:19',
        'seqNo': 9,
        courseId: 12
    },
    49: {
        id: 49,
        description: 'Testing Angular Components with the DOM',
        'duration': '7:05',
        'seqNo': 10,
        courseId: 12
    },
    // Ngrx Course
    50: {
        id: 50,
        'description': 'Welcome to the Angular Ngrx Course',
        'duration': '6:53',
        'seqNo': 1,
        courseId: 4
    },
    51: {
        id: 51,
        'description': 'The Angular Ngrx Architecture Course - Helicopter View',
        'duration': '5:52',
        'seqNo': 2,
        courseId: 4
    },
    52: {
        id: 52,
        'description': 'The Origins of Flux - Understanding the Famous Facebook Bug Problem',
        'duration': '8:17',
        'seqNo': 3,
        courseId: 4
    },
    53: {
        id: 53,
        'description': 'Custom Global Events - Why Don\'t They Scale In Complexity?',
        'duration': '7:47',
        'seqNo': 4,
        courseId: 4
    },
    54: {
        id: 54,
        'description': 'The Flux Architecture - How Does it Solve Facebook Counter Problem?',
        'duration': '9:22',
        'seqNo': 5,
        courseId: 4
    },
    55: {
        id: 55,
        'description': 'Unidirectional Data Flow And The Angular Development Mode',
        'duration': '7:07',
        'seqNo': 6,
        courseId: 4
    },
    56: {
        id: 56,
        'description': 'Dispatching an Action - Implementing the Login Component',
        'duration': '4:39',
        'seqNo': 7,
        courseId: 4
    },
    57: {
        id: 57,
        'description': 'Setting Up the Ngrx DevTools - Demo',
        'duration': '4:44',
        'seqNo': 8,
        courseId: 4
    },
    58: {
        id: 58,
        'description': 'Understanding Reducers - Writing Our First Reducer',
        'duration': '9:10',
        'seqNo': 9,
        courseId: 4
    },
    59: {
        id: 59,
        'description': 'How To Define the Store Initial State',
        'duration': '9:10',
        'seqNo': 10,
        courseId: 4
    },
    // NestJs Course
    60: {
        id: 60,
        'description': 'Introduction to NestJs',
        'duration': '4:29',
        'seqNo': 1,
        courseId: 14
    },
    61: {
        id: 61,
        'description': 'Development Environment Setup',
        'duration': '6:37',
        'seqNo': 2,
        courseId: 14
    },
    62: {
        id: 62,
        'description': 'Setting up a MongoDB Database',
        'duration': '6:38',
        'seqNo': 3,
        courseId: 14
    },
    63: {
        id: 63,
        'description': 'CRUD with NestJs - Controllers and Repositories',
        'duration': '12:12',
        'seqNo': 4,
        courseId: 14
    },
    64: {
        id: 64,
        'description': 'First REST endpoint - Get All Courses',
        'duration': '3:42',
        'seqNo': 5,
        courseId: 14
    },
    65: {
        id: 65,
        'description': 'Error Handling',
        'duration': '5:15',
        'seqNo': 6,
        courseId: 14
    },
    66: {
        id: 66,
        'description': 'NestJs Middleware',
        'duration': '7:08',
        'seqNo': 7,
        courseId: 14
    },
    67: {
        id: 67,
        'description': 'Authentication in NestJs',
        'duration': '13:22',
        'seqNo': 8,
        courseId: 14
    },
    68: {
        id: 68,
        'description': 'Authorization in NestJs',
        'duration': '6:43',
        'seqNo': 9,
        courseId: 14
    },
    69: {
        id: 69,
        'description': 'Guards & Interceptors',
        'duration': '8:16',
        'seqNo': 10,
        courseId: 14
    },
    // Stripe Course
    70: {
        id: 70,
        'description': 'Introduction to Stripe Payments',
        'duration': '03:45',
        'seqNo': 0,
        courseId: 16
    },
    71: {
        id: 71,
        'description': 'The advantages of Stripe Checkout',
        'duration': '08:36',
        'seqNo': 1,
        courseId: 16
    },
    72: {
        id: 72,
        'description': 'Setting up the development environment',
        'duration': '09:10',
        'seqNo': 2,
        courseId: 16
    },
    73: {
        id: 73,
        'description': 'Creating a server Checkout Session',
        'duration': '07:20',
        'seqNo': 3,
        courseId: 16
    },
    74: {
        id: 74,
        'description': 'Redirecting to the Stripe Checkout page',
        'duration': '11:47',
        'seqNo': 4,
        courseId: 16
    },
    75: {
        id: 75,
        'description': 'Order fulfillment webhook',
        'duration': '06:30',
        'seqNo': 5,
        courseId: 16
    },
    76: {
        id: 76,
        'description': 'Installing the Stripe CLI',
        'duration': '4:13',
        'seqNo': 6,
        courseId: 16
    },
    77: {
        id: 77,
        'description': 'Firestore Security Rules for protecting Premium content',
        'duration': '05:47',
        'seqNo': 7,
        courseId: 16
    },
    78: {
        id: 78,
        'description': 'Stripe Subscriptions with Stripe Checkout',
        'duration': '05:17',
        'seqNo': 8,
        courseId: 16
    },
    79: {
        id: 79,
        'description': 'Stripe Subscription Fulfillment',
        'duration': '07:50',
        'seqNo': 9,
        courseId: 16
    },
    // Reactive Angular Course
    80: {
        id: 80,
        'description': 'Introduction to Reactive Programming',
        'duration': '03:45',
        'seqNo': 0,
        courseId: 17,
        videoId: 'Df1QnesgB_s',
    },
    81: {
        id: 81,
        'description': 'Introduction to RxJs',
        'duration': '08:36',
        'seqNo': 1,
        courseId: 17,
        videoId: '8m5RrAtqlyw',
    },
    82: {
        id: 82,
        'description': 'Setting up the development environment',
        'duration': '09:10',
        'seqNo': 2,
        courseId: 17,
        videoId: '3fDbUB-nKqc',
    },
    83: {
        id: 83,
        'description': 'Designing and building a Service Layer',
        'duration': '07:20',
        'seqNo': 3,
        courseId: 17,
        videoId: '',
    },
    84: {
        id: 84,
        'description': 'Stateless Observable Services',
        'duration': '11:47',
        'seqNo': 4,
        courseId: 17,
        videoId: 'qvDPnRs_ZPA',
    },
    85: {
        id: 85,
        'description': 'Smart vs Presentational Components',
        'duration': '06:30',
        'seqNo': 5,
        courseId: 17,
        videoId: '5bsZJGAelFM',
    },
    86: {
        id: 86,
        'description': 'Lightweight state management',
        'duration': '4:13',
        'seqNo': 6,
        courseId: 17,
        videoId: '9m3_HHeP9Ko',
    },
    87: {
        id: 87,
        'description': 'Event bubbling anti-pattern',
        'duration': '05:47',
        'seqNo': 7,
        courseId: 17,
        videoId: 'PRQCAL_RMVo',
    },
    88: {
        id: 88,
        'description': 'Master detail with cached master table',
        'duration': '05:17',
        'seqNo': 8,
        courseId: 17,
        videoId: 'du4ib4jBUG0'
    },
    89: {
        id: 89,
        'description': 'Error handling',
        'duration': '07:50',
        'seqNo': 9,
        courseId: 17,
        videoId: '8m5RrAtqlyw'
    },
    // Angular Router Course
    90: {
        id: 90,
        'description': 'What is a Single Page Application?',
        'duration': '04:00',
        'seqNo': 1,
        courseId: 18,
        videoId: 'VES1eTNxi1s'
    },
    91: {
        id: 91,
        'description': 'Setting Up The Development Environment',
        'duration': '06:05',
        'seqNo': 2,
        courseId: 18,
        videoId: 'ANfplcxnl78'
    },
    92: {
        id: 92,
        'description': 'Angular Router Setup',
        'duration': '02:36',
        'seqNo': 3,
        courseId: 18,
        videoId: '9ez72LAd6mM'
    },
    93: {
        id: 93,
        'description': 'Configuring a Home Route and Fallback Route',
        'duration': '02:55',
        'seqNo': 4,
        courseId: 18,
        videoId: 'Clj-jZpl64w'
    },
    94: {
        id: 94,
        'description': 'Styling Active Routes With The routerLinkActive And routerLinkActiveOptions',
        'duration': '07:50',
        'seqNo': 5,
        courseId: 18,
        videoId: 'zcgnsmPVc30'
    },
    95: {
        id: 95,
        'description': 'Child Routes - How To Setup a Master Detail Route',
        'duration': '04:10',
        'seqNo': 6,
        courseId: 18,
        videoId: 'zcgnsmPVc30'
    },
    96: {
        id: 96,
        'description': 'Programmatic Router Navigation via the Router API ',
        'duration': '03:59',
        'seqNo': 7,
        courseId: 18,
        videoId: 'VES1eTNxi1s'
    },
    97: {
        id: 97,
        'description': 'Relative And Absolute Router Navigation',
        'duration': '04:58',
        'seqNo': 8,
        courseId: 18,
        videoId: 'MQl9Zs3QqGM'
    },
    98: {
        id: 98,
        'description': 'Master Detail Navigation And Route Parameters',
        'duration': '06:03',
        'seqNo': 9,
        courseId: 18,
        videoId: 'ANfplcxnl78'
    },
    99: {
        id: 99,
        'description': 'The Route Parameters Observable',
        'duration': '06:50',
        'seqNo': 10,
        courseId: 18,
        videoId: 'zcgnsmPVc30'
    },
    100: {
        id: 100,
        'description': 'Optional Route Query Parameters',
        'duration': '03:03',
        'seqNo': 11,
        courseId: 18,
        videoId: '0Qsg8fyKwO4'
    },
    101: {
        id: 101,
        'description': 'The queryParams Directive and the Query Parameters Observable',
        'duration': '07:50',
        'seqNo': 12,
        courseId: 18,
        videoId: 'VES1eTNxi1s'
    },
    102: {
        id: 102,
        'description': 'Exiting an Angular Route - How To Prevent Memory Leaks',
        'duration': '07:50',
        'seqNo': 13,
        courseId: 18,
        videoId: 'ANfplcxnl78'
    },
    103: {
        id: 103,
        'description': 'CanDeactivate Route Guard',
        'duration': '04:50',
        'seqNo': 14,
        courseId: 18,
        videoId: '9ez72LAd6mM'
    },
    104: {
        id: 104,
        'description': 'CanActivate Route Guard - An Example of An Asynchronous Route Guard',
        'duration': '03:32',
        'seqNo': 15,
        courseId: 18,
        videoId: 'Clj-jZpl64w'
    },
    105: {
        id: 105,
        'description': 'Configure Auxiliary Routes in the Angular Router',
        'duration': '05:16',
        'seqNo': 16,
        courseId: 18,
        videoId: 'zcgnsmPVc30'
    },
    106: {
        id: 106,
        'description': 'Angular Auxiliary Routes - How To Pass Router Parameters',
        'duration': '07:50',
        'seqNo': 17,
        courseId: 18,
        videoId: 'yjQUkNHb1Is'
    },
    107: {
        id: 107,
        'description': 'Angular Router Redirects and Path Matching',
        'duration': '02:59',
        'seqNo': 18,
        courseId: 18,
        videoId: 'VES1eTNxi1s'
    },
    108: {
        id: 108,
        'description': 'Angular Router Hash Location Strategy',
        'duration': '07:50',
        'seqNo': 19,
        courseId: 18,
        videoId: 'MQl9Zs3QqGM'
    },
    109: {
        id: 109,
        'description': 'Angular Router Lazy Loading and Shared Modules',
        'duration': '08:45',
        'seqNo': 20,
        courseId: 18,
        videoId: '0Qsg8fyKwO4'
    },
    110: {
        id: 110,
        'description': 'Exercise - Implement a Widget Dashboard',
        'duration': '07:50',
        'seqNo': 21,
        courseId: 18,
        videoId: 'VES1eTNxi1s'
    },
    111: {
        id: 111,
        'description': 'Exercise Solution ',
        'duration': '07:50',
        'seqNo': 22,
        courseId: 18,
        videoId: '0Qsg8fyKwO4'
    }
};
const USERS = {
    1: {
        id: 1,
        email: 'test@angular-university.io',
        password: 'test',
        pictureUrl: 'https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png'
    }
};
function findCourseById(courseId) {
    return COURSES[courseId];
}
function findLessonsForCourse(courseId) {
    return Object.values(LESSONS).filter(lesson => lesson.courseId == courseId);
}
function authenticate(email, password) {
    const user = Object.values(USERS).find(user => user.email === email);
    if (user && user.password == password) {
        return user;
    }
    else {
        return undefined;
    }
}


/***/ }),

/***/ "Xkb7":
/*!***********************************!*\
  !*** ./src/app/d3/models/link.ts ***!
  \***********************************/
/*! exports provided: Link */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
class Link {
    constructor(source, target, arrow) {
        this.source = source;
        this.target = target;
        this.arrow = arrow;
    }
}


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/functions */ "RgrY");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var ngx_csv_parser__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ngx-csv-parser */ "U7/n");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @ngrx/store-devtools */ "agSv");
/* harmony import */ var _Rxjs_reducers_main_reducer__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./Rxjs/reducers/main.reducer */ "edCO");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _Rxjs_effects_main_effects__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./Rxjs/effects/main.effects */ "pGJD");
/* harmony import */ var _Dataset_related_show_dataset_related_div_stream_div_stream_div_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./Dataset_related/show_dataset_related/div/stream-div/stream-div.component */ "99eu");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _Dataset_related_show_dataset_related_svg_svg1_map_svg1_map_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./Dataset_related/show_dataset_related/svg/svg1_map/svg1_map.component */ "PQ6M");
/* harmony import */ var _d3__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./d3 */ "tA33");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _Dataset_related_show_dataset_related_div_switch_div_switch_div_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./Dataset_related/show_dataset_related/div/switch-div/switch-div.component */ "q5/P");
/* harmony import */ var ng2_google_charts__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ng2-google-charts */ "omRQ");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _Dataset_related_show_dataset_related_svg_svg2_svg2_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./Dataset_related/show_dataset_related/svg/svg2/svg2.component */ "8One");
/* harmony import */ var _Dataset_related_show_dataset_related_chart_test_chart_test_chart_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./Dataset_related/show_dataset_related/chart/test-chart/test-chart.component */ "1Ba/");
/* harmony import */ var _Dataset_related_show_dataset_related_chart_table_mytable_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./Dataset_related/show_dataset_related/chart/table/mytable.component */ "QlY0");
/* harmony import */ var _Dataset_related_show_dataset_related_chart_cross_var_cross_var_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./Dataset_related/show_dataset_related/chart/cross-var/cross-var.component */ "RTT0");
/* harmony import */ var _Dataset_related_show_dataset_related_chart_cross_var_multi_cross_var_multi_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./Dataset_related/show_dataset_related/chart/cross-var-multi/cross-var-multi.component */ "a6Z1");
/* harmony import */ var _Dataset_related_show_dataset_related_chart_graph1_graph1_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./Dataset_related/show_dataset_related/chart/graph1/graph1.component */ "rCga");
/* harmony import */ var _Dataset_related_show_dataset_related_chart_graph2_graph2_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./Dataset_related/show_dataset_related/chart/graph2/graph2.component */ "Q983");
/* harmony import */ var _Dataset_related_show_dataset_related_chart_graph3_graph3_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./Dataset_related/show_dataset_related/chart/graph3/graph3.component */ "OiRK");
/* harmony import */ var _Dataset_related_show_dataset_related_chart_graph4_graph4_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./Dataset_related/show_dataset_related/chart/graph4/graph4.component */ "rkIt");
/* harmony import */ var _Dataset_related_show_dataset_related_chart_graph5_graph5_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./Dataset_related/show_dataset_related/chart/graph5/graph5.component */ "tJmR");
/* harmony import */ var _app_sections_main_pages_about_about_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./app_sections/main_pages/about/about.component */ "kwJM");
/* harmony import */ var _Dataset_related_Load_related_load_csv_load_csv_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./Dataset_related/Load_related/load-csv/load-csv.component */ "L5jK");
/* harmony import */ var _Dataset_related_Load_related_load_csv_dd_load_csv_dd_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./Dataset_related/Load_related/load-csv_dd/load-csv_dd.component */ "yle5");
/* harmony import */ var _Dataset_related_Load_related_load_csv_map_load_csv_map_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./Dataset_related/Load_related/load-csv_map/load-csv_map.component */ "Sld9");
/* harmony import */ var _app_sections_main_pages_course_course_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./app_sections/main_pages/course/course.component */ "IGsU");
/* harmony import */ var _app_sections_main_pages_courses_card_list_courses_card_list_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./app_sections/main_pages/courses-card-list/courses-card-list.component */ "Q7OG");
/* harmony import */ var _app_sections_main_pages_home_home_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./app_sections/main_pages/home/home.component */ "4stN");
/* harmony import */ var _app_sections_main_pages_edit_course_dialog_edit_course_dialog_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./app_sections/main_pages/edit-course-dialog/edit-course-dialog.component */ "mmSu");
/* harmony import */ var _app_sections_main_pages_login_login_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./app_sections/main_pages/login/login.component */ "OY3S");
/* harmony import */ var _app_sections_main_pages_create_course_create_course_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./app_sections/main_pages/create-course/create-course.component */ "iOwQ");
/* harmony import */ var _app_sections_main_pages_create_dataset_create_dataset_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./app_sections/main_pages/create-dataset/create-dataset.component */ "BRsh");
/* harmony import */ var _app_sections_main_pages_create_user_create_user_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./app_sections/main_pages/create-user/create-user.component */ "0zdU");
/* harmony import */ var _app_sections_main_pages_edit_ds_dialog_edit_ds_dialog_component__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./app_sections/main_pages/edit-ds-dialog/edit-ds-dialog.component */ "p1d9");
/* harmony import */ var _Dataset_related_show_dataset_related_select_var_select_vars_select_vars_component__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./Dataset_related/show_dataset_related/select-var/select-vars/select-vars.component */ "vi/k");
/* harmony import */ var _Dataset_related_show_dataset_related_div_data_div_data_div_component__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./Dataset_related/show_dataset_related/div/data-div/data-div.component */ "+3ha");
/* harmony import */ var _Dataset_related_show_dataset_related_div_stat_div_stat_div_component__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./Dataset_related/show_dataset_related/div/stat-div/stat-div.component */ "lMmC");
/* harmony import */ var _Dataset_related_show_dataset_related_svg_svg1_svg1_component__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./Dataset_related/show_dataset_related/svg/svg1/svg1.component */ "lTro");
/* harmony import */ var _app_sections_main_pages_dataset_dataset_component__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./app_sections/main_pages/dataset/dataset.component */ "o1tI");
/* harmony import */ var _app_sections_main_pages_dataSet_card_list_dataSet_card_list_component__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./app_sections/main_pages/dataSet-card-list/dataSet-card-list.component */ "DPsk");
/* harmony import */ var _Dataset_related_show_dataset_related_div_var_view_var_view_component__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./Dataset_related/show_dataset_related/div/var-view/var-view.component */ "6cgW");
/* harmony import */ var _Dataset_related_show_dataset_related_div_var_test_var_test_component__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./Dataset_related/show_dataset_related/div/var-test/var-test.component */ "4d4w");
/* harmony import */ var _Dataset_related_dd_testdd_testdd_component__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./Dataset_related/dd/testdd/testdd.component */ "TYiS");
/* harmony import */ var _Dataset_related_show_dataset_related_div_tableau_croise_tableau_croise_component__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./Dataset_related/show_dataset_related/div/tableau-croise/tableau-croise.component */ "svqS");
/* harmony import */ var _Dataset_related_dd_dd_var_name_dd_var_name_component__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./Dataset_related/dd/dd-var-name/dd-var-name.component */ "Onam");
/* harmony import */ var _Dataset_related_show_dataset_related_div_data_view_test_data_view_test_component__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./Dataset_related/show_dataset_related/div/data-view-test/data-view-test.component */ "8NQ9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! @angular/core */ "fXoL");























































































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_82__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_82__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _d3__WEBPACK_IMPORTED_MODULE_42__["D3Service"],
        { provide: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["USE_EMULATOR"], useValue: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].useEmulators ? ['localhost', 9099] : undefined },
        { provide: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["USE_EMULATOR"], useValue: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].useEmulators ? ['localhost', 8080] : undefined },
        { provide: _angular_fire_functions__WEBPACK_IMPORTED_MODULE_4__["USE_EMULATOR"], useValue: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].useEmulators ? ['localhost', 5001] : undefined }
    ], imports: [[
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_27__["MatCheckboxModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_43__["MatSliderModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_40__["MatGridListModule"],
            ngx_csv_parser__WEBPACK_IMPORTED_MODULE_33__["NgxCsvParserModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_30__["MatSlideToggleModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__["MatSortModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_22__["MatProgressBarModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialogModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelectModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__["MatDatepickerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_32__["MatNativeDateModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_26__["MatAutocompleteModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_28__["ReactiveFormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_29__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_31__["HttpClientModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_46__["MatExpansionModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].firebase),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestoreModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorageModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuthModule"],
            _angular_fire_functions__WEBPACK_IMPORTED_MODULE_4__["AngularFireFunctionsModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_34__["StoreModule"].forRoot({ main: _Rxjs_reducers_main_reducer__WEBPACK_IMPORTED_MODULE_36__["reducer"] }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_37__["EffectsModule"].forRoot([_Rxjs_effects_main_effects__WEBPACK_IMPORTED_MODULE_38__["MainEffects"]]),
            ng2_google_charts__WEBPACK_IMPORTED_MODULE_45__["Ng2GoogleChartsModule"],
            !_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_35__["StoreDevtoolsModule"].instrument() : []
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_82__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_Dataset_related_show_dataset_related_svg_svg2_svg2_component__WEBPACK_IMPORTED_MODULE_47__["Svg2Component"],
        _app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _app_sections_main_pages_home_home_component__WEBPACK_IMPORTED_MODULE_63__["HomeComponent"],
        _app_sections_main_pages_about_about_component__WEBPACK_IMPORTED_MODULE_57__["AboutComponent"],
        _app_sections_main_pages_dataset_dataset_component__WEBPACK_IMPORTED_MODULE_74__["DatasetComponent"],
        _app_sections_main_pages_dataSet_card_list_dataSet_card_list_component__WEBPACK_IMPORTED_MODULE_75__["DataSetCardListComponent"],
        _app_sections_main_pages_course_course_component__WEBPACK_IMPORTED_MODULE_61__["CourseComponent"],
        _app_sections_main_pages_courses_card_list_courses_card_list_component__WEBPACK_IMPORTED_MODULE_62__["CoursesCardListComponent"],
        _app_sections_main_pages_edit_course_dialog_edit_course_dialog_component__WEBPACK_IMPORTED_MODULE_64__["EditCourseDialogComponent"],
        _app_sections_main_pages_login_login_component__WEBPACK_IMPORTED_MODULE_65__["LoginComponent"],
        _app_sections_main_pages_create_course_create_course_component__WEBPACK_IMPORTED_MODULE_66__["CreateCourseComponent"],
        _app_sections_main_pages_create_dataset_create_dataset_component__WEBPACK_IMPORTED_MODULE_67__["CreateDatasetComponent"],
        _app_sections_main_pages_create_user_create_user_component__WEBPACK_IMPORTED_MODULE_68__["CreateUserComponent"],
        _Dataset_related_Load_related_load_csv_load_csv_component__WEBPACK_IMPORTED_MODULE_58__["LoadCSVComponent"],
        _Dataset_related_show_dataset_related_div_var_view_var_view_component__WEBPACK_IMPORTED_MODULE_76__["VarViewComponent"],
        _Dataset_related_show_dataset_related_div_var_test_var_test_component__WEBPACK_IMPORTED_MODULE_77__["VarTestComponent"],
        _Dataset_related_show_dataset_related_svg_svg1_svg1_component__WEBPACK_IMPORTED_MODULE_73__["Svg1Component"],
        _Dataset_related_show_dataset_related_div_data_div_data_div_component__WEBPACK_IMPORTED_MODULE_71__["DataDivComponent"],
        _Dataset_related_show_dataset_related_div_stream_div_stream_div_component__WEBPACK_IMPORTED_MODULE_39__["StreamDivComponent"],
        _Dataset_related_Load_related_load_csv_map_load_csv_map_component__WEBPACK_IMPORTED_MODULE_60__["LoadCSV_mapComponent"],
        _Dataset_related_show_dataset_related_svg_svg1_map_svg1_map_component__WEBPACK_IMPORTED_MODULE_41__["Svg1_mapComponent"],
        _Dataset_related_show_dataset_related_div_switch_div_switch_div_component__WEBPACK_IMPORTED_MODULE_44__["SwitchDivComponent"],
        _Dataset_related_show_dataset_related_div_stat_div_stat_div_component__WEBPACK_IMPORTED_MODULE_72__["StatDivComponent"],
        _Dataset_related_show_dataset_related_chart_test_chart_test_chart_component__WEBPACK_IMPORTED_MODULE_48__["TestChartComponent"],
        _Dataset_related_show_dataset_related_chart_table_mytable_component__WEBPACK_IMPORTED_MODULE_49__["MyTableComponent"],
        _Dataset_related_Load_related_load_csv_dd_load_csv_dd_component__WEBPACK_IMPORTED_MODULE_59__["LoadCSV_ddComponent"],
        _Dataset_related_dd_testdd_testdd_component__WEBPACK_IMPORTED_MODULE_78__["TestddComponent"],
        _Dataset_related_show_dataset_related_div_tableau_croise_tableau_croise_component__WEBPACK_IMPORTED_MODULE_79__["TableauCroiseComponent"],
        _Dataset_related_show_dataset_related_select_var_select_vars_select_vars_component__WEBPACK_IMPORTED_MODULE_70__["SelectVarsComponent"],
        _Dataset_related_dd_dd_var_name_dd_var_name_component__WEBPACK_IMPORTED_MODULE_80__["DdVarNameComponent"],
        _Dataset_related_show_dataset_related_chart_cross_var_cross_var_component__WEBPACK_IMPORTED_MODULE_50__["CrossVarComponent"],
        _Dataset_related_show_dataset_related_chart_cross_var_multi_cross_var_multi_component__WEBPACK_IMPORTED_MODULE_51__["CrossVarMultiComponent"],
        _app_sections_main_pages_edit_ds_dialog_edit_ds_dialog_component__WEBPACK_IMPORTED_MODULE_69__["EditDsDialogComponent"],
        _Dataset_related_Load_related_load_csv_load_csv_component__WEBPACK_IMPORTED_MODULE_58__["Dialogdd"],
        _Dataset_related_show_dataset_related_div_data_view_test_data_view_test_component__WEBPACK_IMPORTED_MODULE_81__["DataViewTestComponent"],
        _Dataset_related_show_dataset_related_chart_graph1_graph1_component__WEBPACK_IMPORTED_MODULE_52__["Graph1Component"],
        _Dataset_related_show_dataset_related_chart_graph2_graph2_component__WEBPACK_IMPORTED_MODULE_53__["Graph2Component"],
        _Dataset_related_show_dataset_related_chart_graph3_graph3_component__WEBPACK_IMPORTED_MODULE_54__["Graph3Component"],
        _Dataset_related_show_dataset_related_chart_graph4_graph4_component__WEBPACK_IMPORTED_MODULE_55__["Graph4Component"],
        _Dataset_related_show_dataset_related_chart_graph5_graph5_component__WEBPACK_IMPORTED_MODULE_56__["Graph5Component"],
        _Dataset_related_show_dataset_related_div_data_view_test_data_view_test_component__WEBPACK_IMPORTED_MODULE_81__["DialogTest"]], imports: [_angular_material_checkbox__WEBPACK_IMPORTED_MODULE_27__["MatCheckboxModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_43__["MatSliderModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_40__["MatGridListModule"],
        ngx_csv_parser__WEBPACK_IMPORTED_MODULE_33__["NgxCsvParserModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_30__["MatSlideToggleModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__["MatSortModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_22__["MatProgressBarModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialogModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelectModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_32__["MatNativeDateModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_26__["MatAutocompleteModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_28__["ReactiveFormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_29__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_31__["HttpClientModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_46__["MatExpansionModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestoreModule"],
        _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorageModule"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuthModule"],
        _angular_fire_functions__WEBPACK_IMPORTED_MODULE_4__["AngularFireFunctionsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_34__["StoreRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_37__["EffectsRootModule"], ng2_google_charts__WEBPACK_IMPORTED_MODULE_45__["Ng2GoogleChartsModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_35__["StoreDevtoolsModule"]] }); })();


/***/ }),

/***/ "ZhC9":
/*!************************************!*\
  !*** ./src/app/d3/models/index.ts ***!
  \************************************/
/*! exports provided: Node, Link, ForceDirectedGraph */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node */ "qqoW");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Node", function() { return _node__WEBPACK_IMPORTED_MODULE_0__["Node"]; });

/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./link */ "Xkb7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return _link__WEBPACK_IMPORTED_MODULE_1__["Link"]; });

/* harmony import */ var _force_directed_graph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./force-directed-graph */ "SW8s");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ForceDirectedGraph", function() { return _force_directed_graph__WEBPACK_IMPORTED_MODULE_2__["ForceDirectedGraph"]; });






/***/ }),

/***/ "a6Z1":
/*!*********************************************************************************************************!*\
  !*** ./src/app/Dataset_related/show_dataset_related/chart/cross-var-multi/cross-var-multi.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: CrossVarMultiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrossVarMultiComponent", function() { return CrossVarMultiComponent; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Rxjs/reducers */ "AzDA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data.service */ "EnSQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng2_google_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-google-charts */ "omRQ");








function CrossVarMultiComponent_div_1_google_chart_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "google-chart", 5);
} if (rf & 2) {
    const chart_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", chart_r1 == null ? null : chart_r1.data);
} }
function CrossVarMultiComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h3", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CrossVarMultiComponent_div_1_google_chart_3_Template, 1, 1, "google-chart", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chart_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](chart_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.reset && chart_r1);
} }
class CrossVarMultiComponent {
    constructor(store, dataService) {
        this.store = store;
        this.dataService = dataService;
    }
    ngOnInit() {
        this.charts = [];
        this.sub2 = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(src_app_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_2__["selectCrossVarM"])).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["withLatestFrom"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(src_app_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_2__["selectCrossVar"])), this.dataService.categoriesdd$)).subscribe(([data, vars, dd]) => {
            this.charts = [];
            console.log("data multi");
            console.log(data);
            this.reset = false;
            setTimeout(() => {
                for (let d of data) {
                    let di = {};
                    di["title"] = d.title;
                    di["data"] = {
                        chartType: 'PieChart',
                        dataTable: d.data,
                        firstRowIsData: true,
                        options: {
                            is3D: true,
                            height: 400,
                            width: 900,
                            'title': d.varNames
                        },
                    };
                    this.charts.push(di);
                }
                this.reset = true;
            }, 100);
        });
    }
    ngOnDestroy() {
        this.sub1.unsubscribe();
    }
}
CrossVarMultiComponent.ɵfac = function CrossVarMultiComponent_Factory(t) { return new (t || CrossVarMultiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"])); };
CrossVarMultiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CrossVarMultiComponent, selectors: [["cross-var-multi"]], decls: 2, vars: 1, consts: [[1, "row"], ["class", "col-md-6", 4, "ngFor", "ngForOf"], [1, "col-md-6"], [2, "margin", "auto", "width", "fit-content"], [3, "data", 4, "ngIf"], [3, "data"]], template: function CrossVarMultiComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CrossVarMultiComponent_div_1_Template, 4, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.charts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ng2_google_charts__WEBPACK_IMPORTED_MODULE_6__["GoogleChartComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcm9zcy12YXItbXVsdGkuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "edCO":
/*!***********************************************!*\
  !*** ./src/app/Rxjs/reducers/main.reducer.ts ***!
  \***********************************************/
/*! exports provided: mainFeatureKey, initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainFeatureKey", function() { return mainFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _actions_main_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/main.actions */ "Mg0f");


const mainFeatureKey = 'main';
const initialState = {
    data: "**booting**",
    no_na: false,
    dataSet: [],
    clearState: false,
    categories: {},
    fileState: {
        fileName: "",
        size: "",
        metaInfo: {
            nrow: 0,
            ncol: 0,
            varName: []
        }
    },
    interval: 0,
    fileName_map: "",
    fileName_dd: "",
    focusVar: "",
    varName: "",
    crossVar: { "0": "", "1": "" },
    crossVarM: [],
    updatedd: 0,
    datasetState: {
        categorieName: {
            title: "",
            texte_fr: "",
            code: ""
        },
        variableName: {
            variable: "",
            texte_fr: ""
        }
    },
    ddVarName: "name",
    ddVarDesc: "label:fr",
    ddCatVarName: "variable",
    ddCatCode: "name",
    ddCatLabel: "label:fr"
};
const mainReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_main_actions__WEBPACK_IMPORTED_MODULE_1__["clearSVGon"], state => (Object.assign(Object.assign({}, state), { clearState: true }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_main_actions__WEBPACK_IMPORTED_MODULE_1__["clearSVGoff"], state => (Object.assign(Object.assign({}, state), { clearState: false }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_main_actions__WEBPACK_IMPORTED_MODULE_1__["increment"], state => (Object.assign(Object.assign({}, state), { data: "" }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_main_actions__WEBPACK_IMPORTED_MODULE_1__["decrement"], state => (Object.assign(Object.assign({}, state), { data: "" }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_main_actions__WEBPACK_IMPORTED_MODULE_1__["addData"], (state, { data }) => {
    //console.log("reducer")
    //console.log(data)
    if (!state.no_na || data != "NA") {
        return Object.assign(Object.assign({}, state), { data: data });
    }
    else {
        return Object.assign({}, state);
    }
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_main_actions__WEBPACK_IMPORTED_MODULE_1__["updateCategories"], (state, { data }) => {
    console.log("categories");
    console.log(data);
    return Object.assign(Object.assign({}, state), { categories: data });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_main_actions__WEBPACK_IMPORTED_MODULE_1__["updateFileName"], (state, { data }) => {
    console.log("updateFileName");
    console.log(data);
    return Object.assign(Object.assign({}, state), { fileState: Object.assign(Object.assign({}, state.fileState), { fileName: data }) });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_main_actions__WEBPACK_IMPORTED_MODULE_1__["updateFileSize"], (state, { data }) => {
    console.log("updateFileSize");
    console.log(data);
    return Object.assign(Object.assign({}, state), { fileState: Object.assign(Object.assign({}, state.fileState), { size: data }) });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_main_actions__WEBPACK_IMPORTED_MODULE_1__["updateFileMeta"], (state, { data }) => {
    console.log("updateFileMeta");
    console.log(data);
    return Object.assign(Object.assign({}, state), { fileState: Object.assign(Object.assign({}, state.fileState), { metaInfo: data }) });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_main_actions__WEBPACK_IMPORTED_MODULE_1__["updateInterval"], (state, { data }) => {
    console.log("updateInterval");
    console.log(data);
    return Object.assign(Object.assign({}, state), { interval: data });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_main_actions__WEBPACK_IMPORTED_MODULE_1__["stopInterval"], (state, { data }) => {
    console.log("stopInterval");
    console.log(data);
    return Object.assign({}, state);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_main_actions__WEBPACK_IMPORTED_MODULE_1__["updateNo_na"], (state, { data }) => {
    console.log("updateNo_na");
    console.log(data);
    return Object.assign(Object.assign({}, state), { no_na: data });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_main_actions__WEBPACK_IMPORTED_MODULE_1__["updateFileName_map"], (state, { data }) => {
    console.log("updateFileName_map");
    console.log(data);
    return Object.assign(Object.assign({}, state), { fileName_map: data });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_main_actions__WEBPACK_IMPORTED_MODULE_1__["updateFileName_dd"], (state, { data }) => {
    console.log("updateFileName_dd");
    console.log(data);
    return Object.assign(Object.assign({}, state), { fileName_dd: data });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_main_actions__WEBPACK_IMPORTED_MODULE_1__["updateFocusVar"], (state, { data }) => {
    console.log("updateFocusVar");
    console.log(data);
    return Object.assign(Object.assign({}, state), { focusVar: data });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_main_actions__WEBPACK_IMPORTED_MODULE_1__["updateVarName"], (state, { data }) => {
    console.log("updateVarName");
    console.log(data);
    return Object.assign(Object.assign({}, state), { varName: data });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_main_actions__WEBPACK_IMPORTED_MODULE_1__["updateCrossVar"], (state, { data }) => {
    console.log("updateCrossVar");
    console.log(data);
    return Object.assign(Object.assign({}, state), { crossVar: data });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_main_actions__WEBPACK_IMPORTED_MODULE_1__["updateCrossVar1"], (state, { data }) => {
    console.log("updateCrossVar1");
    console.log(data);
    return Object.assign(Object.assign({}, state), { crossVar: { "0": data, "1": state.crossVar["1"] } });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_main_actions__WEBPACK_IMPORTED_MODULE_1__["updateCrossVar2"], (state, { data }) => {
    console.log("updateCrossVar2");
    console.log(data);
    return Object.assign(Object.assign({}, state), { crossVar: { "0": state.crossVar["0"], "1": data } });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_main_actions__WEBPACK_IMPORTED_MODULE_1__["updatedd"], (state, { data }) => {
    console.log("updatedd");
    console.log(data);
    return Object.assign(Object.assign({}, state), { updatedd: data });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_main_actions__WEBPACK_IMPORTED_MODULE_1__["updateCrossVarM"], (state, { data }) => {
    console.log("updateCrossVarM");
    console.log(data);
    return Object.assign(Object.assign({}, state), { crossVarM: data });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_main_actions__WEBPACK_IMPORTED_MODULE_1__["updateddVarName"], (state, { data }) => {
    console.log("updateCrossVarM");
    console.log(data);
    return Object.assign(Object.assign({}, state), { ddVarName: data });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_main_actions__WEBPACK_IMPORTED_MODULE_1__["updateddVarDesc"], (state, { data }) => {
    console.log("updateCrossVarM");
    console.log(data);
    return Object.assign(Object.assign({}, state), { ddVarDesc: data });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_main_actions__WEBPACK_IMPORTED_MODULE_1__["updateddCatVarName"], (state, { data }) => {
    console.log("updateCrossVarM");
    console.log(data);
    return Object.assign(Object.assign({}, state), { ddCatVarName: data });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_main_actions__WEBPACK_IMPORTED_MODULE_1__["updateddCatCode"], (state, { data }) => {
    console.log("updateddCatCode");
    console.log(data);
    return Object.assign(Object.assign({}, state), { ddCatCode: data });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_main_actions__WEBPACK_IMPORTED_MODULE_1__["updateddCatLabel"], (state, { data }) => {
    console.log("updateddCatLabel");
    console.log(data);
    return Object.assign(Object.assign({}, state), { ddCatLabel: data });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_main_actions__WEBPACK_IMPORTED_MODULE_1__["createDs"], (state, { data }) => {
    console.log("createDs");
    console.log(data);
    return Object.assign({}, state);
}));
function reducer(state, action) {
    return mainReducer(state, action);
}


/***/ }),

/***/ "i7ll":
/*!*********************************************!*\
  !*** ./src/app/services/dataset.service.ts ***!
  \*********************************************/
/*! exports provided: DatasetsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatasetsService", function() { return DatasetsService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _db_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./db-utils */ "KoUQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");





class DatasetsService {
    constructor(db) {
        this.db = db;
    }
    findDatasetByUrl(datasetUrl) {
        return this.db.collection("datasetStats", ref => ref.where("url", "==", datasetUrl))
            .get()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(results => {
            const datasets = Object(_db_utils__WEBPACK_IMPORTED_MODULE_2__["convertSnaps"])(results);
            return datasets.length == 1 ? datasets[0] : null;
        }));
    }
    deleteDataset(datasetId) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["from"])(this.db.doc(`datasetStats/${datasetId}`).delete());
    }
    updateDataset(datasetId, changes) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["from"])(this.db.doc(`datasetStats/${datasetId}`).update(changes));
    }
    createDataset(newDataset, datasetId) {
        console.log("createDataset");
        return this.db.collection("datasetStats", ref => ref.orderBy("seqNo", "desc").limit(1))
            .get()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["concatMap"])(result => {
            var _a, _b;
            const datasets = Object(_db_utils__WEBPACK_IMPORTED_MODULE_2__["convertSnaps"])(result);
            console.log("dataset", datasets);
            const lastDatasetSeqNo = (_b = (_a = datasets[0]) === null || _a === void 0 ? void 0 : _a.seqNo) !== null && _b !== void 0 ? _b : 0;
            const dataset = Object.assign(Object.assign({}, newDataset), { seqNo: lastDatasetSeqNo + 1 });
            console.log("dataset", dataset);
            let save$;
            console.log("datasetId", datasetId);
            //this.findDatasetByUrl("test").subscribe(console.log)
            //this.db.collection("courses").add(dataset)
            //this.db.doc(`dataset/${datasetId}`).set(dataset)
            //this.db.collection("ds").add({test:0})
            if (datasetId) {
                save$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["from"])(this.db.doc(`datasetStats/${datasetId}`).set(dataset));
            }
            else {
                save$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["from"])(this.db.collection("datasetStats").add(dataset));
            }
            return save$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(console.log), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(res => {
                return Object.assign({ id: datasetId !== null && datasetId !== void 0 ? datasetId : res.id }, dataset);
            }));
        }));
    }
    loadDataSets() {
        return this.db.collection("datasetStats")
            .get()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((data) => console.log("load datasetStats", data)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(result => Object(_db_utils__WEBPACK_IMPORTED_MODULE_2__["convertSnaps"])(result)));
    }
}
DatasetsService.ɵfac = function DatasetsService_Factory(t) { return new (t || DatasetsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"])); };
DatasetsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: DatasetsService, factory: DatasetsService.ɵfac, providedIn: "root" });


/***/ }),

/***/ "iOwQ":
/*!**********************************************************************************!*\
  !*** ./src/app/app_sections/main_pages/create-course/create-course.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CreateCourseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCourseComponent", function() { return CreateCourseComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "Jgta");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_courses_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/courses.service */ "y9Uy");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "bTqV");




var Timestamp = firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].firestore.Timestamp;












class CreateCourseComponent {
    constructor(fb, coursesService, afs, router) {
        this.fb = fb;
        this.coursesService = coursesService;
        this.afs = afs;
        this.router = router;
        this.form = this.fb.group({
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            category: ["BEGINNER", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            url: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            longDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            promo: [false],
            promoStartAt: [null]
        });
    }
    ngOnInit() {
        this.courseId = this.afs.createId();
    }
    onCreateCourse() {
        const val = this.form.value;
        const newCourse = {
            description: val.description,
            url: val.url,
            longDescription: val.longDescription,
            promo: val.promo,
            categories: [val.category]
        };
        newCourse.promoStartAt = Timestamp.fromDate(this.form.value.promoStartAt);
        this.coursesService.createCourse(newCourse, this.courseId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(course => {
            console.log("Created new course: ", course);
            this.router.navigateByUrl("/courses");
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(err => {
            console.log(err);
            alert("Could not create the course.");
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }))
            .subscribe();
    }
}
CreateCourseComponent.ɵfac = function CreateCourseComponent_Factory(t) { return new (t || CreateCourseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_courses_service__WEBPACK_IMPORTED_MODULE_5__["CoursesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
CreateCourseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CreateCourseComponent, selectors: [["create-course"]], decls: 33, vars: 4, consts: [[1, "create-course"], [3, "formGroup"], ["appearance", "outline"], ["placeholder", "Course title", "matInput", "", "formControlName", "description"], [1, "course-image-upload"], [1, "course-thumbnail", "mat-elevation-z3"], ["placeholder", "Select category", "formControlName", "category"], ["value", "BEGINNER"], ["value", "INTERMEDIATE"], ["value", "ADVANCED"], ["placeholder", "Course url", "matInput", "", "formControlName", "url"], ["matInput", "", "placeholder", "Course description", "formControlName", "longDescription"], ["color", "primary", "formControlName", "promo", 1, "promo"], ["matInput", "", "formControlName", "promoStartAt", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["promoStartPicker", ""], ["mat-raised-button", "", "color", "warn", 3, "disabled", "click"]], template: function CreateCourseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Create New Course");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Course thumbnail:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "mat-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Beginner");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Intermediate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Advanced");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "textarea", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "mat-slide-toggle", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, " Course in promotion? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Promotion start date");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "mat-datepicker-toggle", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "mat-datepicker", null, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreateCourseComponent_Template_button_click_31_listener() { return ctx.onCreateCourse(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, " Create Course ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matDatepicker", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("for", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.form.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepicker"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"]], styles: ["[_nghost-%COMP%] {\n    display: flex;\n    justify-content: center;\n}\n\n.create-course[_ngcontent-%COMP%] {\n    margin-top: 20px;\n}\n\n.course-thumbnail[_ngcontent-%COMP%] {\n  max-width: 200px;\n  margin-bottom: 10px;\n  border-radius: 4px;\n}\n\n.create-course[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n}\n\n.course-image-upload[_ngcontent-%COMP%] {\n  margin: 0 0 20px 0;\n  display: flex;\n  flex-direction: column;\n}\n\n.promo[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.course-image-upload[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-bottom:10px;\n}\n\n.upload-progress[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 10px;\n  max-width: 250px;\n}\n\n.progress-bar[_ngcontent-%COMP%] {\n  margin: 10px;\n  width: 300px;\n}\n\n.uploaded-image[_ngcontent-%COMP%] {\n  max-width: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1jb3Vyc2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoiY3JlYXRlLWNvdXJzZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG46aG9zdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNyZWF0ZS1jb3Vyc2Uge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5jb3Vyc2UtdGh1bWJuYWlsIHtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uY3JlYXRlLWNvdXJzZSBmb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5jb3Vyc2UtaW1hZ2UtdXBsb2FkIHtcbiAgbWFyZ2luOiAwIDAgMjBweCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ucHJvbW8ge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uY291cnNlLWltYWdlLXVwbG9hZCBzcGFuIHtcbiAgbWFyZ2luLWJvdHRvbToxMHB4O1xufVxuXG4udXBsb2FkLXByb2dyZXNzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAxMHB4O1xuICBtYXgtd2lkdGg6IDI1MHB4O1xufVxuXG4ucHJvZ3Jlc3MtYmFyIHtcbiAgbWFyZ2luOiAxMHB4O1xuICB3aWR0aDogMzAwcHg7XG59XG5cbi51cGxvYWRlZC1pbWFnZSB7XG4gIG1heC13aWR0aDogMjUwcHg7XG59XG5cbiJdfQ== */"] });


/***/ }),

/***/ "kwJM":
/*!******************************************************************!*\
  !*** ./src/app/app_sections/main_pages/about/about.component.ts ***!
  \******************************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ "5x/H");
/* harmony import */ var _db_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./db-data */ "WuPo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");






class AboutComponent {
    constructor(db) {
        this.db = db;
    }
    uploadData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const coursesCollection = this.db.collection('courses');
            const courses = yield this.db.collection('courses').get();
            for (let course of Object.values(_db_data__WEBPACK_IMPORTED_MODULE_2__["COURSES"])) {
                const newCourse = this.removeId(course);
                const courseRef = yield coursesCollection.add(newCourse);
                const lessons = yield courseRef.collection('lessons');
                const courseLessons = Object(_db_data__WEBPACK_IMPORTED_MODULE_2__["findLessonsForCourse"])(course['id']);
                console.log(`Uploading course ${course['description']}`);
                for (const lesson of courseLessons) {
                    const newLesson = this.removeId(lesson);
                    delete newLesson.courseId;
                    yield lessons.add(newLesson);
                }
            }
        });
    }
    removeId(data) {
        const newData = Object.assign({}, data);
        delete newData.id;
        return newData;
    }
    onReadDoc() {
        this.db.doc("courses/1CErZJychQ4KET9Yi96K")
            .valueChanges()
            .subscribe(course => {
            console.log(course);
        });
    }
    onReadCollection() {
        this.db.collection("courses", ref => ref.where("seqNo", "<=", 20)
            .where("url", "==", "angular-forms-course")
            .orderBy("seqNo")).get()
            .subscribe(snaps => {
            snaps.forEach(snap => {
                console.log(snap.id);
                console.log(snap.data());
            });
        });
    }
    onReadCollectionGroup() {
        this.db.collectionGroup("lessons", ref => ref.where("seqNo", "==", 1))
            .get()
            .subscribe(snaps => {
            snaps.forEach(snap => {
                console.log(snap.id);
                console.log(snap.data());
            });
        });
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"])); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["about"]], decls: 12, vars: 0, consts: [[1, "about"], ["src", "https://angular-university.s3-us-west-1.amazonaws.com/course-images/firebase-course-1.jpg", 1, "course-image", "mat-elevation-z10"], ["mat-raised-button", "", "color", "primary", 1, "upload-btn", 3, "click"], ["mat-raised-button", "", "color", "accent", 3, "click"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Firebase & AngularFire In Depth");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AboutComponent_Template_button_click_4_listener() { return ctx.uploadData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Populate Database");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AboutComponent_Template_button_click_6_listener() { return ctx.onReadDoc(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Read Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AboutComponent_Template_button_click_8_listener() { return ctx.onReadCollection(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " Read Collection");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AboutComponent_Template_button_click_10_listener() { return ctx.onReadCollectionGroup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " Read Collection Group");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]], styles: [".course-image[_ngcontent-%COMP%] {\n  max-width: 350px;\n  border-radius: 4px;\n}\n\n\n.about[_ngcontent-%COMP%] {\n  padding: 40px;\n}\n\n\n.upload-btn[_ngcontent-%COMP%] {\n    margin-top: 30px;\n}\n\n\nbutton[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n    display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOzs7QUFHQTtFQUNFLGFBQWE7QUFDZjs7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEIiLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb3Vyc2UtaW1hZ2Uge1xuICBtYXgtd2lkdGg6IDM1MHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cblxuLmFib3V0IHtcbiAgcGFkZGluZzogNDBweDtcbn1cblxuLnVwbG9hZC1idG4ge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbmJ1dHRvbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "lMmC":
/*!*****************************************************************************************!*\
  !*** ./src/app/Dataset_related/show_dataset_related/div/stat-div/stat-div.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: StatDivComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatDivComponent", function() { return StatDivComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_Rxjs_actions_main_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Rxjs/actions/main.actions */ "Mg0f");
/* harmony import */ var src_app_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Rxjs/reducers */ "AzDA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/data.service */ "EnSQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _svg_svg2_svg2_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../svg/svg2/svg2.component */ "8One");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ "FKr1");


















function StatDivComponent_mat_card_0_mat_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", option_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", option_r3, " ");
} }
function StatDivComponent_mat_card_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " S\u00E9lection de la variable ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "mat-form-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Var Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-autocomplete", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, StatDivComponent_mat_card_0_mat_option_17_Template, 2, 2, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](18, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "mat-expansion-panel", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, " Quick view ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "svg2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function StatDivComponent_mat_card_0_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r4.createStat(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Stat");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](16);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 4, ctx_r0.fileName$), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx_r0.myControl)("matAutocomplete", _r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](18, 6, ctx_r0.filteredOptions));
} }
class StatDivComponent {
    constructor(dataService, store) {
        this.dataService = dataService;
        this.store = store;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]();
        this.options = ['One', 'Two', 'Three'];
        this.findNextVar = () => {
            console.log("varNames", this.varNames, this.currentIndex);
            if (this.currentIndex < this.varNames.length) {
                this.currentIndex = this.currentIndex + 1;
                this.myControl.setValue(this.varNames[this.currentIndex]);
                //return this.options2[this.currentIndex++]
            }
            else {
                this.currentIndex = this.currentIndex + 1;
                this.myControl.setValue(this.varNames[this.currentIndex]);
                //return this.options2[this.currentIndex--]
            }
        };
        this.createStat = () => {
            console.log("stat1");
            this.store.dispatch(Object(src_app_Rxjs_actions_main_actions__WEBPACK_IMPORTED_MODULE_3__["updateVarName"])({ data: this.myControl.value }));
            this.dataService.dataset$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(console.log))
                .subscribe((dataset) => {
                this.stat(dataset);
            });
        };
        this.shuffle = (array) => {
            var currentIndex = array.length, temporaryValue, randomIndex;
            // While there remain elements to shuffle...
            while (0 !== currentIndex) {
                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;
                // And swap it with the current element.
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }
            return array;
        };
        this.stat = (dataset) => {
            console.log("stat2");
            //console.log(varNames.includes(this.myControl.value))
            if (dataset[0].includes(this.myControl.value)) {
                this.store.dispatch(Object(src_app_Rxjs_actions_main_actions__WEBPACK_IMPORTED_MODULE_3__["updateFocusVar"])({ data: this.myControl.value }));
                let n = dataset[0].indexOf(this.myControl.value);
                console.log("n");
                console.log(n);
                let col = dataset.map(x => x[n]);
                console.log("col", col);
                this.createStatDesc(col);
            }
        };
        this.createStatDesc = (col) => {
            console.log("length");
            console.log(col.length);
            let stat_desc = this.createCount(col);
            console.log("stat_desc ------------------------------------");
            console.log(stat_desc);
            this.dataService.categories$.next(stat_desc);
        };
    }
    handleKeyboardEvent(event) {
        if (event.key == "m") {
            this.findNextVar();
            this.createStat();
        }
        console.log(event.key);
    }
    ngOnInit() {
        this.currentIndex = 0;
        this.fileName$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(src_app_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_4__["selectFileName"]));
        this.dataService.dataset$.subscribe((data) => {
            if (data && data.length > 0) {
                this.options = data[0];
                this.varNames = data[0];
                this.filteredOptions = this.myControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((value) => {
                    if (this.varNames.includes(value)) {
                        this.currentIndex = this.varNames.indexOf(value);
                    }
                    return this._filter(value);
                }));
            }
        });
        this.filteredOptions = this.myControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(value => this._filter(value)));
    }
    _filter(value) {
        const filterValue = value.toLowerCase();
        return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
    }
    createCount(arr) {
        if (arr[1].split(" ")[0].split("-").length > 2) {
            arr = arr.map(x => x.split(" ")[0]);
        }
        var counts = {};
        for (var i = 1; i < arr.length; i++) {
            counts[arr[i]] = 1 + (counts[arr[i]] || 0);
        }
        let result = Object.keys(counts).sort().map((key) => {
            return { categorie: key, count: counts[key] };
        });
        return result;
    }
}
StatDivComponent.ɵfac = function StatDivComponent_Factory(t) { return new (t || StatDivComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
StatDivComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: StatDivComponent, selectors: [["stat-div"]], hostBindings: function StatDivComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keypress", function StatDivComponent_keypress_HostBindingHandler($event) { return ctx.handleKeyboardEvent($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveDocument"]);
    } }, decls: 2, vars: 3, consts: [[4, "ngIf"], [1, "row"], [1, "col-sm-3"], [1, "form"], [1, "example-full-width"], ["type", "text", "placeholder", "Pick one", "aria-label", "Number", "matInput", "", 3, "formControl", "matAutocomplete"], ["autoActiveFirstOption", ""], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-sm-9"], ["hideToggle", ""], ["mat-raised-button", "", 1, "ml-2", "mr-2", 3, "click"], [3, "value"]], template: function StatDivComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, StatDivComponent_mat_card_0_Template, 28, 8, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 1, ctx.fileName$) != "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionPanelTitle"], _svg_svg2_svg2_component__WEBPACK_IMPORTED_MODULE_13__["Svg2Component"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGF0LWRpdi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "lTro":
/*!*********************************************************************************!*\
  !*** ./src/app/Dataset_related/show_dataset_related/svg/svg1/svg1.component.ts ***!
  \*********************************************************************************/
/*! exports provided: Svg1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Svg1Component", function() { return Svg1Component; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "VphZ");
/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js/auto */ "1UnT");
/* harmony import */ var patternomaly__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! patternomaly */ "p/Sl");
/* harmony import */ var patternomaly__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(patternomaly__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Rxjs/reducers */ "AzDA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/data.service */ "EnSQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng2_google_charts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-google-charts */ "omRQ");











function Svg1Component_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "figure", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "canvas", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function Svg1Component_google_chart_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "google-chart", 4);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", ctx_r1.calendar);
} }
class Svg1Component {
    constructor(dataService, ref, store) {
        this.dataService = dataService;
        this.ref = ref;
        this.store = store;
        this.margin = 50;
        this.width = 750 - (this.margin * 2);
        this.height = 400 - (this.margin * 2);
        this.h2 = 450;
        this.backgroundC = Object(patternomaly__WEBPACK_IMPORTED_MODULE_3__["generate"])([
            '#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#911eb4', '#46f0f0',
            '#f032e6', '#bcf60c', '#fabebe', '#008080', '#e6beff', '#9a6324', '#fffac8', '#800000',
            '#aaffc3', '#808000', '#ffd8b1', '#000075', '#808080', '#ffffff', '#000000'
        ]);
        this.borderColor = this.backgroundC;
        this.jsChart = false;
        this.createPieChart = (categories) => {
            this.dataService.categoriesdd$.
                pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(src_app_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_5__["selectVarName"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)), this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(src_app_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_5__["selectddCatCode"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)), this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(src_app_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_5__["selectddCatLabel"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)), this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(src_app_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_5__["selectddCatVarName"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)))).subscribe(([dd, varName, ddCatCode, ddCatLabel, ddCatVarName]) => {
                //console.log(dd)
                let myCompare = function (dataA, dataB) {
                    let codeA = dd.filter(data3 => data3[ddCatVarName] == varName &&
                        data3[ddCatLabel].slice(0, 120) == dataA[0]);
                    let codeB = dd.filter(data3 => data3[ddCatVarName] == varName &&
                        data3[ddCatLabel].slice(0, 120) == dataB[0]);
                    console.log("codeA");
                    console.log(codeA);
                    console.log(dataA[0]);
                    console.log("codeB");
                    console.log(codeB);
                    if (codeA.length == 0 || codeB.length == 0) {
                        console.log("probleme");
                        console.log(dataA[0]);
                        console.log(dataB[0]);
                    }
                    if (!codeA || codeB || !('code' in codeA[0]) || !("code" in codeB[0])) {
                        // console.log(dataA[0])
                        // console.log(dataB[0])
                        // console.log(dd.filter(data3=>data3.title == varName).map(x=>x.answer_fr.slice(0, 120)))
                        return 0;
                    }
                    return Number(codeA[0][ddCatCode]) - Number(codeB[0][ddCatCode]);
                };
                this.reset = true;
                let allNum = categories.filter((x) => x.categorie != 'NA' &&
                    x.categorie != '' && x.categorie != 'Other').filter((x) => {
                    return !isNaN(Number(x.categorie));
                }).length != 0;
                if (allNum) {
                    this.rows = categories.filter((x) => x.categorie != 'NA' && x.categorie != '').map((x) => {
                        return [x.categorie, x.count];
                    });
                }
                else {
                    this.rows = categories.filter((x) => x.categorie != 'NA' && x.categorie != '').map((x) => {
                        if (dd.filter(data3 => data3[ddCatVarName] == varName &&
                            data3[ddCatLabel].slice(0, 120) == x.categorie).length > 0) {
                            return [dd.filter(data3 => data3[ddCatVarName] == varName &&
                                    data3[ddCatLabel].slice(0, 120) == x.categorie)[0][ddCatLabel], x.count];
                        }
                        console.log("prob1");
                        return ["erreur", x.count];
                    });
                }
                this.rows = this.convertRows(dd, this.rows, ddCatLabel, ddCatVarName, ddCatCode, varName);
                if (dd.filter(data => data[ddCatVarName] == varName).length > 0) {
                    this.rows.sort(myCompare);
                }
                else {
                    this.rows.sort((a, b) => Number(a[0]) - Number(b[0]));
                }
                console.log("rows", this.rows);
                this.calendar = {
                    chartType: 'PieChart',
                    dataTable: this.rows,
                    firstRowIsData: true,
                    options: {
                        is3D: true,
                        height: 800,
                        width: 900,
                        'title': varName
                    },
                };
            });
        };
        this.currentIndex = 0;
    }
    ngOnInit() {
        this.ctx = 'myChart';
        this.createSvg();
        this.dataService.categories$
            .subscribe((categories) => {
            console.log("svg : categories");
            console.log(categories);
            this.createGraph(categories);
            //this.ref.markForCheck()
        });
        this.store.subscribe((state) => {
            let clear = state.main.clearState;
            if (clear) {
                this.svg.selectAll("*").remove();
                //this.createSvg()
            }
        });
    }
    ngAfterViewInit() {
    }
    createGraph(categories) {
        this.reset = false;
        if (categories.length > 0) {
            let data_count = categories.map(x => x.count);
            console.log(data_count);
            let data2 = {
                labels: categories.map(x => x.categorie),
                datasets: [{
                        label: "",
                        data: data_count,
                        backgroundColor: this.backgroundC.slice(0, categories.length),
                        borderColor: this.borderColor.slice(0, categories.length),
                        borderWidth: 1
                    }]
            };
            console.log("data_count", data_count);
            console.log("data2", data2);
            if (this.myChart) {
                this.myChart.destroy();
            }
            if (categories.length < 20) {
                this.jsChart = true;
                setTimeout(() => {
                    this.myChart = new chart_js_auto__WEBPACK_IMPORTED_MODULE_2__["default"](this.ctx, {
                        type: 'bar',
                        data: data2,
                        options: {
                            indexAxis: "y",
                            scales: {
                                y: {
                                    beginAtZero: true
                                }
                            }
                        },
                    });
                }, 100);
                setTimeout(() => {
                    this.createPieChart(categories);
                }, 200);
            }
            else {
                console.log("data[1].categorie");
                console.log(categories[1].categorie);
                this.jsChart = false;
                if (categories[1].categorie.split(" ")[0].split("-").length > 2) {
                    this.jsChart = false;
                    this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(src_app_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_5__["selectVarName"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe((varName) => {
                        setTimeout(() => {
                            this.reset = true;
                            let years = {};
                            this.rows = categories.filter((x) => x.categorie != 'NA' && x.categorie != '').map((x) => {
                                let date = x.categorie.split(" ")[0].split("-");
                                years[date[0]] = 1;
                                return [new Date(date[0], Number(date[1]) - 1, date[2]), x.count];
                            });
                            let numberOfYear = Object.keys(years).length;
                            this.calendar = {
                                chartType: 'Calendar',
                                dataTable: this.rows,
                                firstRowIsData: true,
                                options: {
                                    height: 200 * numberOfYear,
                                    width: 1200,
                                    'title': varName
                                },
                            };
                        }, 100);
                    });
                }
                else {
                    setTimeout(() => {
                        this.createPieChart(categories);
                    }, 100);
                }
                this.drawBars(categories);
            }
        }
    }
    ngOnDestroy() {
        this.sub1.unsubscribe();
    }
    createSvg() {
        this.svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"]("figure#bar")
            .append("svg")
            .attr("width", this.width + (this.margin * 2))
            .attr("height", this.h2 + (this.margin * 2))
            .append("g")
            .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
        //console.log("svg" )
        //console.log(this.svg )
    }
    drawBars(data) {
        this.svg.selectAll("*").remove();
        let mymax = d3__WEBPACK_IMPORTED_MODULE_1__["max"](data.map(x => x.count));
        //console.log(data)
        // Create the X-axis band scale
        this.x = d3__WEBPACK_IMPORTED_MODULE_1__["scaleBand"]()
            .range([0, this.width])
            .domain(data.map(d => d.categorie))
            .padding(0.2);
        //console.log(data.map(d => d.categorie))
        // Draw the X-axis on the DOM
        this.svg.append("g")
            .attr("transform", "translate(0," + this.height + ")")
            .call(d3__WEBPACK_IMPORTED_MODULE_1__["axisBottom"](this.x))
            .selectAll("text")
            .attr("transform", "translate(-10,0)rotate(-25)")
            .style("text-anchor", "end");
        // Create the Y-axis band scale
        const y = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]()
            .domain([0, mymax])
            .range([this.height, 0]);
        // Draw the Y-axis on the DOM
        this.svg.append("g")
            .call(d3__WEBPACK_IMPORTED_MODULE_1__["axisLeft"](y));
        // Create and fill the bars
        this.svg.selectAll("bars")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", d => this.x(d.categorie))
            .attr("y", d => y(d.count))
            .attr("width", this.x.bandwidth())
            .attr("height", (d) => this.height - y(d.count))
            .attr("fill", "#d04a35");
    }
    convertRows(dd, rows, ddCatLabel, ddCatVarName, ddCatCode, varName) {
        for (let e of rows) {
            let value = dd.filter(data => data[ddCatVarName] == varName &&
                data[ddCatCode] == e[0]);
            if (value.length == 1) {
                e[0] = value[0][ddCatLabel];
            }
        }
        return rows;
    }
}
Svg1Component.ɵfac = function Svg1Component_Factory(t) { return new (t || Svg1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"])); };
Svg1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: Svg1Component, selectors: [["svg1"]], inputs: { varName: "varName", data2: "data2" }, decls: 3, vars: 2, consts: [[4, "ngIf"], [3, "data", 4, "ngIf"], ["id", "bar"], ["id", "myChart", "width", "1200px", "height", "400"], [3, "data"]], template: function Svg1Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, Svg1Component_div_0_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, Svg1Component_google_chart_2_Template, 1, 1, "google-chart", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.jsChart);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.reset && ctx.calendar);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], ng2_google_charts__WEBPACK_IMPORTED_MODULE_9__["GoogleChartComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdmcxLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "mY8e":
/*!****************************************!*\
  !*** ./src/app/d3/directives/index.ts ***!
  \****************************************/
/*! exports provided: ZoomableDirective, DraggableDirective, D3_DIRECTIVES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D3_DIRECTIVES", function() { return D3_DIRECTIVES; });
/* harmony import */ var _zoomable_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zoomable.directive */ "+xse");
/* harmony import */ var _draggable_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./draggable.directive */ "29W6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ZoomableDirective", function() { return _zoomable_directive__WEBPACK_IMPORTED_MODULE_0__["ZoomableDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DraggableDirective", function() { return _draggable_directive__WEBPACK_IMPORTED_MODULE_1__["DraggableDirective"]; });





const D3_DIRECTIVES = [
    _zoomable_directive__WEBPACK_IMPORTED_MODULE_0__["ZoomableDirective"],
    _draggable_directive__WEBPACK_IMPORTED_MODULE_1__["DraggableDirective"]
];


/***/ }),

/***/ "mmSu":
/*!********************************************************************************************!*\
  !*** ./src/app/app_sections/main_pages/edit-course-dialog/edit-course-dialog.component.ts ***!
  \********************************************************************************************/
/*! exports provided: EditCourseDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCourseDialogComponent", function() { return EditCourseDialogComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_courses_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/courses.service */ "y9Uy");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");










class EditCourseDialogComponent {
    constructor(dialogRef, fb, course, coursesService) {
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.coursesService = coursesService;
        this.course = course;
        this.form = this.fb.group({
            description: [course.description, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            longDescription: [course.longDescription, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            promo: [course.promo]
        });
    }
    close() {
        this.dialogRef.close();
    }
    save() {
        const changes = this.form.value;
        this.coursesService.updateCourse(this.course.id, changes)
            .subscribe(() => {
            this.dialogRef.close(changes);
        });
    }
}
EditCourseDialogComponent.ɵfac = function EditCourseDialogComponent_Factory(t) { return new (t || EditCourseDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_courses_service__WEBPACK_IMPORTED_MODULE_3__["CoursesService"])); };
EditCourseDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EditCourseDialogComponent, selectors: [["edit-course-dialog"]], decls: 15, vars: 1, consts: [["mat-dialog-title", ""], [3, "formGroup"], ["matInput", "", "placeholder", " Title", "formControlName", "description"], ["color", "primary", "formControlName", "promo", 1, "promo"], ["matInput", "", "placeholder", "Description", "formControlName", "longDescription"], ["mat-raised-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"]], template: function EditCourseDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Edit Course");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-dialog-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-slide-toggle", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Course in promotion? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "textarea", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditCourseDialogComponent_Template_button_click_11_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Close ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditCourseDialogComponent_Template_button_click_13_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]], styles: [".mat-form-field[_ngcontent-%COMP%] {\n    display: block;\n}\n\n.promo[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\ntextarea[_ngcontent-%COMP%] {\n    height: 100px;\n    resize: vertical;\n}\n\nmat-dialog-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtY291cnNlLWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7QUFDM0IiLCJmaWxlIjoiZWRpdC1jb3Vyc2UtZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnByb21vIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxudGV4dGFyZWEge1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcbn1cblxubWF0LWRpYWxvZy1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "o1tI":
/*!**********************************************************************!*\
  !*** ./src/app/app_sections/main_pages/dataset/dataset.component.ts ***!
  \**********************************************************************/
/*! exports provided: DatasetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatasetComponent", function() { return DatasetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");



class DatasetComponent {
    constructor(route) {
        this.route = route;
        this.loading = false;
        this.displayedColumns = ['seqNo', 'description', 'duration'];
    }
    ngOnInit() {
        this.dataset = this.route.snapshot.data["dataset"];
        console.log("Dataset : ", this.dataset);
    }
}
DatasetComponent.ɵfac = function DatasetComponent_Factory(t) { return new (t || DatasetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
DatasetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DatasetComponent, selectors: [["dataset"]], decls: 10, vars: 3, consts: [[1, "dataset"], [2, "width", "fit-content"]], template: function DatasetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dataset == null ? null : ctx.dataset.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Nombre de rang\u00E9es : ", ctx.dataset == null ? null : ctx.dataset.rowsCount, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Nombre de colonnes : ", ctx.dataset == null ? null : ctx.dataset.variablesCount, " ");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"]], styles: [".dataset[_ngcontent-%COMP%] {\n    text-align: center;\n    max-width: 390px;\n    margin: 20px auto 0 auto;\n}\n\n.dataset-thumbnail[_ngcontent-%COMP%] {\n    width: 200px;\n    border-radius: 4px;\n    margin: 20px auto;\n    display: block;\n}\n\n.description-cell[_ngcontent-%COMP%] {\n    text-align: left;\n    margin: 10px auto;\n}\n\n.duration-cell[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n.duration-cell[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    display: inline-block;\n    vertical-align: middle;\n    font-size: 20px;\n}\n\n.spinner-container[_ngcontent-%COMP%] {\n    height: 360px;\n    width: 390px;\n    position: fixed;\n}\n\n.lessons-table[_ngcontent-%COMP%] {\n    min-height: 360px;\n    margin-top: 10px;\n}\n\n.spinner-container[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%] {\n    margin: 130px auto 0 auto;\n}\n\n.bottom-toolbar[_ngcontent-%COMP%] {\n  margin: 30px 0;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGFzZXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCIiwiZmlsZSI6ImRhdGFzZXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmRhdGFzZXQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXgtd2lkdGg6IDM5MHB4O1xuICAgIG1hcmdpbjogMjBweCBhdXRvIDAgYXV0bztcbn1cblxuLmRhdGFzZXQtdGh1bWJuYWlsIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZGVzY3JpcHRpb24tY2VsbCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXJnaW46IDEwcHggYXV0bztcbn1cblxuLmR1cmF0aW9uLWNlbGwge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmR1cmF0aW9uLWNlbGwgbWF0LWljb24ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnNwaW5uZXItY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDM2MHB4O1xuICAgIHdpZHRoOiAzOTBweDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbi5sZXNzb25zLXRhYmxlIHtcbiAgICBtaW4taGVpZ2h0OiAzNjBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uc3Bpbm5lci1jb250YWluZXIgbWF0LXNwaW5uZXIge1xuICAgIG1hcmdpbjogMTMwcHggYXV0byAwIGF1dG87XG59XG5cbi5ib3R0b20tdG9vbGJhciB7XG4gIG1hcmdpbjogMzBweCAwO1xuICBmb250LXNpemU6IDE4cHg7XG59XG4iXX0= */"] });


/***/ }),

/***/ "p1d9":
/*!************************************************************************************!*\
  !*** ./src/app/app_sections/main_pages/edit-ds-dialog/edit-ds-dialog.component.ts ***!
  \************************************************************************************/
/*! exports provided: EditDsDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDsDialogComponent", function() { return EditDsDialogComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_dataset_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/dataset.service */ "i7ll");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");










class EditDsDialogComponent {
    constructor(dialogRef, fb, dataset, datasetsService) {
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.datasetsService = datasetsService;
        this.dataset = dataset;
        this.form = this.fb.group({
            description: [dataset.description, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            longDescription: [dataset.longDescription, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            rowsCount: [dataset.rowsCount]
        });
    }
    close() {
        this.dialogRef.close();
    }
    save() {
        const changes = this.form.value;
        this.datasetsService.updateDataset(this.dataset.id, changes)
            .subscribe(() => {
            this.dialogRef.close(changes);
        });
    }
}
EditDsDialogComponent.ɵfac = function EditDsDialogComponent_Factory(t) { return new (t || EditDsDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_dataset_service__WEBPACK_IMPORTED_MODULE_3__["DatasetsService"])); };
EditDsDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EditDsDialogComponent, selectors: [["edit-ds-dialog"]], decls: 15, vars: 1, consts: [["mat-dialog-title", ""], [3, "formGroup"], ["matInput", "", "placeholder", " Title", "formControlName", "description"], ["color", "primary", "formControlName", "rowsCount", 1, "promo"], ["matInput", "", "placeholder", "Description", "formControlName", "longDescription"], ["mat-raised-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"]], template: function EditDsDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Edit Course");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-dialog-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-slide-toggle", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " RowCount ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "textarea", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditDsDialogComponent_Template_button_click_11_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Close ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditDsDialogComponent_Template_button_click_13_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]], styles: [".mat-form-field[_ngcontent-%COMP%] {\n    display: block;\n}\n\n.promo[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\ntextarea[_ngcontent-%COMP%] {\n    height: 100px;\n    resize: vertical;\n}\n\nmat-dialog-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtZHMtZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJlZGl0LWRzLWRpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5wcm9tbyB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbnRleHRhcmVhIHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHJlc2l6ZTogdmVydGljYWw7XG59XG5cbm1hdC1kaWFsb2ctYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4iXX0= */"] });


/***/ }),

/***/ "pGJD":
/*!**********************************************!*\
  !*** ./src/app/Rxjs/effects/main.effects.ts ***!
  \**********************************************/
/*! exports provided: MainEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainEffects", function() { return MainEffects; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _actions_main_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/main.actions */ "Mg0f");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers */ "AzDA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/data.service */ "EnSQ");
/* harmony import */ var src_app_services_dataset_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/dataset.service */ "i7ll");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");












class MainEffects {
    constructor(dataService, store, actions$, datasetsService, router) {
        this.dataService = dataService;
        this.store = store;
        this.actions$ = actions$;
        this.datasetsService = datasetsService;
        this.router = router;
        this.clearActions$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])("[Data clear] Add clear on"), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(action => {
            this.store.dispatch(Object(_actions_main_actions__WEBPACK_IMPORTED_MODULE_4__["clearSVGoff"])({ data: "" }));
            console.log(action);
        })), { dispatch: false });
        this.newDsActions$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])('[Data createDs] update createDs'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["withLatestFrom"])(this.dataService.dataset$, this.dataService.variablesdd$, this.dataService.categories$, this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_5__["selectall"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((data) => {
            console.log("createMetaData");
            console.log("data_from_effect", data);
            let newDataset = JSON.parse(JSON.stringify(data[0].data));
            newDataset.rowsCount = data[1].length;
            newDataset.variablesCount = data[1][0].length;
            this.datasetsService.createDataset(newDataset, newDataset.id)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(dataset => {
                console.log("Created new dataset: ", dataset);
                this.router.navigateByUrl("/datasets/" + newDataset.url);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
                console.log(err);
                alert("Could not create the dataset.");
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }))
                .subscribe();
        })), { dispatch: false });
        this.updateDataActions$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])("[Data List] Add Data"), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["withLatestFrom"])(this.store), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(([action, store]) => {
            if (!store.main.no_na || action["data"] != "NA") {
                //console.log("nona")
                this.dataService.modifieCategories(action["data"]);
            }
            //console.log("action")
            //console.log(action["data"])
        })), { dispatch: false });
        this.stopIntervalActions$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])("[Data stop Interval] update stop"), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["withLatestFrom"])(this.store), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(([action, store]) => {
            console.log("store");
            console.log(store);
            clearInterval(store.main.interval);
            console.log("action stop");
            console.log(action["data"]);
        })), { dispatch: false });
        this.updatedd$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])("[Data updateCrossVar1] update updateCrossVar1", "[Data updateCrossVar2] update updateCrossVar2"), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["withLatestFrom"])(this.store), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(([action, store]) => {
            this.store.dispatch(Object(_actions_main_actions__WEBPACK_IMPORTED_MODULE_4__["updatedd"])({ data: 1 }));
        })), { dispatch: false });
    }
}
MainEffects.ɵfac = function MainEffects_Factory(t) { return new (t || MainEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](src_app_services_dataset_service__WEBPACK_IMPORTED_MODULE_8__["DatasetsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"])); };
MainEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: MainEffects, factory: MainEffects.ɵfac });


/***/ }),

/***/ "pnwb":
/*!*********************************************!*\
  !*** ./src/app/services/course.resolver.ts ***!
  \*********************************************/
/*! exports provided: CourseResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseResolver", function() { return CourseResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _courses_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./courses.service */ "y9Uy");


class CourseResolver {
    constructor(coursesService) {
        this.coursesService = coursesService;
    }
    resolve(route, state) {
        const courseUrl = route.paramMap.get("courseUrl");
        return this.coursesService.findCourseByUrl(courseUrl);
    }
}
CourseResolver.ɵfac = function CourseResolver_Factory(t) { return new (t || CourseResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_courses_service__WEBPACK_IMPORTED_MODULE_1__["CoursesService"])); };
CourseResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CourseResolver, factory: CourseResolver.ɵfac, providedIn: "root" });


/***/ }),

/***/ "q5/P":
/*!*********************************************************************************************!*\
  !*** ./src/app/Dataset_related/show_dataset_related/div/switch-div/switch-div.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: SwitchDivComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchDivComponent", function() { return SwitchDivComponent; });
/* harmony import */ var src_app_Rxjs_actions_main_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/Rxjs/actions/main.actions */ "Mg0f");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");






function SwitchDivComponent_mat_grid_tile_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-grid-tile", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-checkbox", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SwitchDivComponent_mat_grid_tile_5_Template_mat_checkbox_click_1_listener() { const i_r2 = ctx.index; const switch_r1 = ctx.$implicit; return switch_r1.my_f(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const switch_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", switch_r1.text, " ");
} }
class SwitchDivComponent {
    constructor(store) {
        this.store = store;
        this.no_na = (i) => {
            this.switchs[i].checked = !this.switchs[i].checked;
            console.log("noNA");
            this.store.dispatch(Object(src_app_Rxjs_actions_main_actions__WEBPACK_IMPORTED_MODULE_0__["updateNo_na"])({ data: this.switchs[i].checked }));
        };
        this.switchChange = (f, i) => {
            f(i);
        };
        this.switchs = [{ text: "No NA", my_f: this.no_na, checked: false }];
    }
    ngOnInit() {
    }
}
SwitchDivComponent.ɵfac = function SwitchDivComponent_Factory(t) { return new (t || SwitchDivComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
SwitchDivComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SwitchDivComponent, selectors: [["switchs-div"]], decls: 6, vars: 1, consts: [[1, "mt-2", "panel", "panel-primary"], [1, "panel-heading"], [1, "panel-body"], ["cols", "4", "rowHeight", "100px"], ["colspan", "1", "rowspan", "1", 4, "ngFor", "ngForOf"], ["colspan", "1", "rowspan", "1"], [1, "", 3, "click"]], template: function SwitchDivComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Outils");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-grid-list", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SwitchDivComponent_mat_grid_tile_5_Template, 3, 1, "mat-grid-tile", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.switchs);
    } }, directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridTile"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckbox"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzd2l0Y2gtZGl2LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "qqoW":
/*!***********************************!*\
  !*** ./src/app/d3/models/node.ts ***!
  \***********************************/
/*! exports provided: Node */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Node", function() { return Node; });
class Node {
    constructor(id, img, label) {
        this.linkCount = 0;
        this.normal = () => {
            return Math.sqrt(this.linkCount / 2);
        };
        this.id = id;
        this.img = img;
        this.label = label;
        this.box = {};
    }
    get r() {
        return 50 * this.normal() + 10;
    }
    get fontSize() {
        return (30 * this.normal() + 10) + 'px';
    }
    get color() {
        let index = Math.floor(this.normal());
        return "blue";
    }
}


/***/ }),

/***/ "rCga":
/*!***************************************************************************************!*\
  !*** ./src/app/Dataset_related/show_dataset_related/chart/graph1/graph1.component.ts ***!
  \***************************************************************************************/
/*! exports provided: Graph1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Graph1Component", function() { return Graph1Component; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "VphZ");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data.service */ "EnSQ");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");








function Graph1Component_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Graph1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-card-content", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "figure", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class Graph1Component {
    constructor(dataService, store) {
        this.dataService = dataService;
        this.store = store;
        this.width = 500;
        this.margin = 20;
        this.h2 = 250;
        this.myclick = () => {
            console.log("data", this.data[0]);
            if (this.svg) {
                this.svg.selectAll("*").remove();
            }
            //let dataSplit = this.data[0].slice(1,500).map(data=>data.slice(0,100))
            let random_num = Math.floor(Math.random() * this.data[0].length - 2);
            let dataSplit = this.data[0].slice(random_num + 1, random_num + 11);
            let na_table_t = [];
            dataSplit[0].map((data, i) => {
                na_table_t[i] = [];
            });
            let na_table = dataSplit.map((data, i) => {
                let result = data.map((data, j) => {
                    na_table_t[j][i] = data != "NA";
                    return data != "NA";
                });
                return result;
            });
            let nrow = na_table_t.length;
            let ncol = na_table_t[0].length;
            let px_per_cell_x = this.width / nrow;
            let px_per_cell_y = this.h2 / ncol;
            console.log(px_per_cell_x, px_per_cell_y);
            console.log(na_table_t);
            na_table_t.map((data, i) => {
                console.log(i);
                this.svg.selectAll()
                    .data(data)
                    .enter()
                    .append("circle")
                    .attr("class", "na_cell_" + i)
                    .attr("cx", (i * px_per_cell_x) + px_per_cell_x / 2)
                    .attr("cy", (data, j) => (j * px_per_cell_y) + px_per_cell_y / 2)
                    .attr("r", (data, j) => (data) ? 1 : 0)
                    //.attr("stroke","black")
                    .attr("stroke-width", 1)
                    .attr("fill", "black");
            });
        };
        this.dataset$ = this.dataService.dataset$;
    }
    ngOnInit() {
        this.createSvg();
        this.clearSub = this.store.subscribe((state) => {
            let clear = state.main.clearState;
            if (clear) {
                this.svg.selectAll("*").remove();
                this.createSvg();
            }
        });
        this.dataService.dataset$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["withLatestFrom"])(this.dataService.variablesdd$, this.dataService.categoriesdd$)).subscribe((data) => {
            console.log("data", data);
            this.data = data;
            this.createSvg();
        });
    }
    ngAfterViewInit() {
        this.createSvg();
    }
    ngOnDestroy() {
        this.clearSub.unsubscribe();
    }
    createSvg() {
        if (this.svg) {
            this.svg.selectAll("*").remove();
        }
        console.log(d3__WEBPACK_IMPORTED_MODULE_0__["select"]("figure#bar"));
        this.svg = d3__WEBPACK_IMPORTED_MODULE_0__["select"]("figure#bar")
            .append("svg")
            .attr("width", this.width + (this.margin * 2))
            .attr("height", this.h2 + (this.margin * 2))
            .attr("style", "background-color:green")
            .append("g")
            .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
        console.log(this.svg);
        //console.log("svg" )
        //console.log(this.svg )
    }
}
Graph1Component.ɵfac = function Graph1Component_Factory(t) { return new (t || Graph1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"])); };
Graph1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: Graph1Component, selectors: [["app-graph1"]], decls: 5, vars: 3, consts: [["style", "width: fit-content;margin: auto;", 4, "ngIf"], [2, "width", "fit-content", "margin", "auto"], ["mat-button", "", 3, "click"], [1, "mat-elevation-z10", "m-3"], [2, "height", "300px"], ["id", "bar"]], template: function Graph1Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, Graph1Component_div_0_Template, 7, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Graph1Component_Template_button_click_3_listener() { return ctx.myclick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Calcul");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_0_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, ctx.dataset$)) == null ? null : tmp_0_0.length) > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJncmFwaDEuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "rkIt":
/*!***************************************************************************************!*\
  !*** ./src/app/Dataset_related/show_dataset_related/chart/graph4/graph4.component.ts ***!
  \***************************************************************************************/
/*! exports provided: Graph4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Graph4Component", function() { return Graph4Component; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "VphZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ "EnSQ");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _div_stat_div_stat_div_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../div/stat-div/stat-div.component */ "lMmC");
/* harmony import */ var _svg_svg1_svg1_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../svg/svg1/svg1.component */ "lTro");









function Graph4Component_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Graph4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-card-content", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "stat-div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "svg1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "figure", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class Graph4Component {
    constructor(dataService, store) {
        this.dataService = dataService;
        this.store = store;
        this.width = 1000;
        this.margin = 20;
        this.h2 = 250;
        this.myclick = () => {
            console.log("data", this.data[0]);
            if (this.svg) {
                this.svg.selectAll("*").remove();
            }
            //let dataSplit = this.data[0].slice(1,500).map(data=>data.slice(0,100))
            let random_num = Math.floor(Math.random() * this.data[0].length - 2);
            let dataSplit = this.data[0].slice(random_num + 1, random_num + 2);
            let na_table_t = [];
            let na_table = dataSplit[0].map((data, j) => {
                return data != "NA";
            });
            let nrow = Math.floor(Math.sqrt(na_table.length));
            let ncol = Math.floor(na_table.length / nrow) + 1;
            let px_per_cell_x = this.width / ncol;
            let px_per_cell_y = this.h2 / nrow;
            console.log(px_per_cell_x, px_per_cell_y);
            console.log(na_table_t);
            this.svg.selectAll()
                .data(na_table)
                .enter()
                .append("circle")
                .attr("class", "na_cell")
                .attr("cx", (data, j) => ((j % ncol) * px_per_cell_x) + px_per_cell_x / 2)
                .attr("cy", (data, j) => (Math.floor(j / ncol) * px_per_cell_y) + px_per_cell_y / 2)
                .attr("r", 3)
                //.attr("stroke","black")
                .attr("stroke-width", 1)
                .attr("fill", (data, j) => (data) ? "black" : "red");
        };
        this.dataset$ = this.dataService.dataset$;
    }
    ngOnInit() {
        //this.createSvg()
        /*
            this.clearSub = this.store.subscribe((state:any)=>{
              let clear = state.main.clearState
              if(clear){
                this.svg.selectAll("*").remove()
                this.createSvg()
              }
            })
        
            this.dataService.dataset$.pipe(
              withLatestFrom(this.dataService.variablesdd$,this.dataService.categoriesdd$)
            ).subscribe((data)=>{
              console.log("data",data)
              this.data = data
              this.createSvg()
        
            })
        
        */
    }
    ngAfterViewInit() {
        this.createSvg();
    }
    ngOnDestroy() {
        this.clearSub.unsubscribe();
    }
    createSvg() {
        if (this.svg) {
            this.svg.selectAll("*").remove();
        }
        console.log(d3__WEBPACK_IMPORTED_MODULE_0__["select"]("figure#bar"));
        this.svg = d3__WEBPACK_IMPORTED_MODULE_0__["select"]("figure#bar")
            .append("svg")
            .attr("width", this.width + (this.margin * 2))
            .attr("height", this.h2 + (this.margin * 2))
            .attr("style", "background-color:white")
            .append("g")
            .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
        console.log(this.svg);
        //console.log("svg" )
        //console.log(this.svg )
    }
}
Graph4Component.ɵfac = function Graph4Component_Factory(t) { return new (t || Graph4Component)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
Graph4Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: Graph4Component, selectors: [["app-graph4"]], decls: 5, vars: 3, consts: [["style", "width: fit-content;margin: auto;", 4, "ngIf"], [2, "width", "fit-content", "margin", "auto"], ["mat-button", "", 3, "click"], [1, "mat-elevation-z10", "m-3"], [2, "height", "1600px"], ["id", "bar"]], template: function Graph4Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, Graph4Component_div_0_Template, 9, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Graph4Component_Template_button_click_3_listener() { return ctx.myclick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Calcul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_0_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.dataset$)) == null ? null : tmp_0_0.length) > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _div_stat_div_stat_div_component__WEBPACK_IMPORTED_MODULE_7__["StatDivComponent"], _svg_svg1_svg1_component__WEBPACK_IMPORTED_MODULE_8__["Svg1Component"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJncmFwaDQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "svqS":
/*!*****************************************************************************************************!*\
  !*** ./src/app/Dataset_related/show_dataset_related/div/tableau-croise/tableau-croise.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: TableauCroiseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableauCroiseComponent", function() { return TableauCroiseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _switch_div_switch_div_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../switch-div/switch-div.component */ "q5/P");
/* harmony import */ var _Load_related_load_csv_load_csv_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Load_related/load-csv/load-csv.component */ "L5jK");
/* harmony import */ var _Load_related_load_csv_dd_load_csv_dd_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Load_related/load-csv_dd/load-csv_dd.component */ "yle5");
/* harmony import */ var _select_var_select_vars_select_vars_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../select-var/select-vars/select-vars.component */ "vi/k");
/* harmony import */ var _chart_cross_var_multi_cross_var_multi_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../chart/cross-var-multi/cross-var-multi.component */ "a6Z1");






class TableauCroiseComponent {
    constructor() { }
    ngOnInit() {
    }
}
TableauCroiseComponent.ɵfac = function TableauCroiseComponent_Factory(t) { return new (t || TableauCroiseComponent)(); };
TableauCroiseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TableauCroiseComponent, selectors: [["tableau-croise"]], decls: 8, vars: 0, consts: [[1, "container"]], template: function TableauCroiseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "switchs-div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "load-csv");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "load-csv-dd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "select-vars");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "cross-var-multi");
    } }, directives: [_switch_div_switch_div_component__WEBPACK_IMPORTED_MODULE_1__["SwitchDivComponent"], _Load_related_load_csv_load_csv_component__WEBPACK_IMPORTED_MODULE_2__["LoadCSVComponent"], _Load_related_load_csv_dd_load_csv_dd_component__WEBPACK_IMPORTED_MODULE_3__["LoadCSV_ddComponent"], _select_var_select_vars_select_vars_component__WEBPACK_IMPORTED_MODULE_4__["SelectVarsComponent"], _chart_cross_var_multi_cross_var_multi_component__WEBPACK_IMPORTED_MODULE_5__["CrossVarMultiComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJsZWF1LWNyb2lzZS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "tA33":
/*!*****************************!*\
  !*** ./src/app/d3/index.ts ***!
  \*****************************/
/*! exports provided: D3Service, Node, Link, ForceDirectedGraph, ZoomableDirective, DraggableDirective, D3_DIRECTIVES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _d3_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./d3.service */ "/8bv");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "D3Service", function() { return _d3_service__WEBPACK_IMPORTED_MODULE_0__["D3Service"]; });

/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models */ "ZhC9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Node", function() { return _models__WEBPACK_IMPORTED_MODULE_1__["Node"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return _models__WEBPACK_IMPORTED_MODULE_1__["Link"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ForceDirectedGraph", function() { return _models__WEBPACK_IMPORTED_MODULE_1__["ForceDirectedGraph"]; });

/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives */ "mY8e");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ZoomableDirective", function() { return _directives__WEBPACK_IMPORTED_MODULE_2__["ZoomableDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DraggableDirective", function() { return _directives__WEBPACK_IMPORTED_MODULE_2__["DraggableDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "D3_DIRECTIVES", function() { return _directives__WEBPACK_IMPORTED_MODULE_2__["D3_DIRECTIVES"]; });






/***/ }),

/***/ "tJmR":
/*!***************************************************************************************!*\
  !*** ./src/app/Dataset_related/show_dataset_related/chart/graph5/graph5.component.ts ***!
  \***************************************************************************************/
/*! exports provided: Graph5Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Graph5Component", function() { return Graph5Component; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "VphZ");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var src_app_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Rxjs/reducers */ "AzDA");
/* harmony import */ var src_app_Rxjs_actions_main_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Rxjs/actions/main.actions */ "Mg0f");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/data.service */ "EnSQ");
/* harmony import */ var _div_switch_div_switch_div_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../div/switch-div/switch-div.component */ "q5/P");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng2_google_charts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-google-charts */ "omRQ");

















function Graph5Component_google_chart_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "google-chart", 22);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("data", ctx_r0.calendar);
} }
function Graph5Component_th_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Variable");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function Graph5Component_td_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r19.variable, " ");
} }
function Graph5Component_th_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Texte fr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function Graph5Component_td_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r20.texte_fr, " ");
} }
function Graph5Component_th_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Texte en");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function Graph5Component_td_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r21.texte_en, " ");
} }
function Graph5Component_tr_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 27);
} }
function Graph5Component_tr_42_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function Graph5Component_tr_42_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r24); const row_r22 = ctx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r23.clickRows(row_r22); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r22 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("demo-row-is-clicked", ctx_r8.clickedRows.has(row_r22));
} }
function Graph5Component_th_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Variable");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function Graph5Component_td_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r25.title, " ");
} }
function Graph5Component_th_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function Graph5Component_td_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r26.code, " ");
} }
function Graph5Component_th_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Texte");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function Graph5Component_td_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r27.answer_fr, " ");
} }
function Graph5Component_tr_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 27);
} }
function Graph5Component_tr_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 29);
} }
/*
Graph5

Permet de selectionner une variable et de montrer des statistiques et des graphique



*/
class Graph5Component {
    constructor(dataService, store, changeDetectorRefs) {
        this.dataService = dataService;
        this.store = store;
        this.changeDetectorRefs = changeDetectorRefs;
        this.width = 1000;
        this.margin = 20;
        this.h2 = 250;
        this.displayedColumns1 = ["variable", "texte_fr", "texte_en"];
        this.displayedColumns2 = ["variable", "code", "texte"];
        this.chart = true;
        this.reset = false;
        this.clickedRows = new Set();
        this.varNames2 = [];
        this.findPrevVar = () => {
            console.log("varNames", this.varNames2, this.currentIndex);
            if (this.currentIndexdd != 0) {
                this.currentIndexdd = this.currentIndexdd - 1;
                let row = this.variables.filter((data) => {
                    return data.variable == this.varNames2[this.currentIndexdd];
                })[0];
                console.log(row, this.variables, this.varNames2[this.currentIndexdd]);
                this.clickRows(row);
                //return this.options2[this.currentIndex++]
            }
            else {
                this.currentIndexdd = this.varNames2.length;
                let row = this.variables.filter((data) => {
                    data.variable == this.varNames2[this.currentIndexdd];
                })[0];
                this.clickRows(row);
            }
        };
        this.findNextVar = () => {
            console.log("varNames", this.varNames, this.currentIndex);
            if (this.currentIndexdd < this.varNames2.length) {
                this.currentIndexdd = this.currentIndexdd + 1;
                let row = this.variables.filter((data) => {
                    return data.variable == this.varNames2[this.currentIndexdd];
                })[0];
                console.log(row, this.variables, this.varNames2[this.currentIndexdd]);
                this.clickRows(row);
                //return this.options2[this.currentIndex++]
            }
            else {
                this.currentIndexdd = 0;
                let row = this.variables.filter((data) => {
                    data.variable == this.varNames2[this.currentIndexdd];
                })[0];
                this.clickRows(row);
            }
        };
        this.createPieChart = (categories) => {
            this.dataService.categoriesdd$.
                pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["withLatestFrom"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(src_app_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_5__["selectVarName"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)), this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(src_app_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_5__["selectddCatCode"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)), this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(src_app_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_5__["selectddCatLabel"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)), this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(src_app_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_5__["selectddCatVarName"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)), this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(src_app_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_5__["selectddVarName"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)), this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(src_app_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_5__["selectddVarDesc"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)), this.dataService.variablesdd$)).subscribe(([dd, varName, ddCatCode, ddCatLabel, ddCatVarName, ddVarName, ddVarDesc, ddVar]) => {
                //console.log(dd)
                let myCompare = function (dataA, dataB) {
                    let codeA = dd.filter(data3 => {
                        //console.log(data3)
                        let ddCatstring = data3[ddCatLabel] + "";
                        return data3[ddCatVarName] == varName &&
                            ddCatstring.slice(0, 120) == dataA[0];
                    });
                    let codeB = dd.filter(data3 => {
                        let ddCatstring = data3[ddCatLabel] + "";
                        return data3[ddCatVarName] == varName &&
                            ddCatstring.slice(0, 120) == dataB[0];
                    });
                    console.log("codeA");
                    console.log(codeA);
                    console.log(dataA[0]);
                    console.log("codeB");
                    console.log(codeB);
                    if (codeA.length == 0 || codeB.length == 0) {
                        console.log("probleme");
                        console.log(dataA[0]);
                        console.log(dataB[0]);
                    }
                    if (!codeA || codeB || !('code' in codeA[0]) || !("code" in codeB[0])) {
                        // console.log(dataA[0])
                        // console.log(dataB[0])
                        // console.log(dd.filter(data3=>data3.title == varName).map(x=>x.answer_fr.slice(0, 120)))
                        return 0;
                    }
                    return Number(codeA[0][ddCatCode]) - Number(codeB[0][ddCatCode]);
                };
                this.reset = true;
                let allNum = categories.filter((x) => x.categorie != 'NA' &&
                    x.categorie != '' && x.categorie != 'Other').filter((x) => {
                    return !isNaN(Number(x.categorie));
                }).length != 0;
                if (allNum) {
                    this.rows = categories
                        //.filter((x)=>x.categorie != 'NA' && x.categorie != '')
                        .map((x) => {
                        return [x.categorie, x.count];
                    });
                }
                else {
                    this.rows = categories.map((x) => {
                        if (dd.filter(data3 => data3[ddCatVarName] == varName &&
                            data3[ddCatLabel].slice(0, 120) == x.categorie).length > 0) {
                            return [dd.filter(data3 => data3[ddCatVarName] == varName &&
                                    data3[ddCatLabel].slice(0, 120) == x.categorie)[0][ddCatLabel], x.count];
                        }
                        console.log("prob1");
                        return ["erreur", x.count];
                    });
                    /*categories.filter((x)=>x.categorie != 'NA' && x.categorie != '').map((x)=>{
                  
                      if(dd.filter(data3=>data3[ddCatVarName] == varName &&
                        data3[ddCatLabel].slice(0, 120) == x.categorie).length > 0){
                          return [dd.filter(data3=>data3[ddCatVarName] == varName &&
                             data3[ddCatLabel].slice(0, 120) == x.categorie)[0][ddCatLabel],x.count]
                      }
                      console.log("prob1")
                      return["erreur",x.count]
                    })*/
                }
                this.rows = this.convertRows(dd, this.rows, ddCatLabel, ddCatVarName, ddCatCode, varName);
                this.desc = "";
                let desc = "";
                desc = ddVar.filter(data => data[ddVarName] == varName)[0][ddVarDesc];
                if (dd.filter(data => data[ddCatVarName] == varName).length > 0) {
                    this.rows.sort(myCompare);
                }
                else {
                    this.rows.sort((a, b) => Number(a[0]) - Number(b[0]));
                }
                console.log("rows", this.rows);
                this.calendar = {
                    chartType: 'PieChart',
                    dataTable: this.rows,
                    firstRowIsData: true,
                    options: {
                        is3D: true,
                        height: 800,
                        width: 900,
                        'title': varName + " : " + desc
                    },
                };
            });
        };
        this.stat = (dataset, varname, no_NA) => {
            console.log("stat2");
            //console.log(varNames.includes(this.myControl.value))
            if (dataset[0].includes(varname)) {
                let n = dataset[0].indexOf(varname);
                console.log("n");
                console.log(n);
                let col = dataset.map(x => x[n]);
                console.log("col", col);
                this.createStatDesc(col, no_NA);
            }
        };
        this.createStatDesc = (col, no_NA) => {
            if (!no_NA) {
                col = col.map((data) => {
                    return (data == "") ? "NA" : data;
                });
            }
            else {
                col = col.filter((data) => {
                    return data != "";
                });
            }
            console.log("length");
            console.log(col.length);
            let stat_desc = this.createCount(col);
            console.log("stat_desc ------------------------------------");
            console.log(stat_desc);
            this.createGraph(stat_desc);
        };
        this.dataset$ = this.dataService.dataset$;
    }
    handleKeyboardEvent(event) {
        if (event.key == "m") {
            this.findNextVar();
        }
        if (event.key == "n") {
            this.findPrevVar();
        }
        console.log("event.key", event.key);
    }
    ngOnInit() {
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(src_app_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_5__["selectno_na"])).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["withLatestFrom"])(this.dataService.variablesdd$)).subscribe((data) => {
            console.log(data);
            if (data && data[1] && data[1][0]) {
                if (!this.row) {
                    this.row = data[1][0];
                }
                this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(src_app_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_5__["selectVarName"]))
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["withLatestFrom"])(this.dataService.dataset$, this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(src_app_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_5__["selectno_na"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1))))
                    .subscribe((data) => {
                    console.log("graph5 : no_NA");
                    console.log(data);
                    this.stat(data[1], data[0], data[2]);
                });
            }
        });
        this.currentIndex = 1;
        this.dataSource1 = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]([]);
        this.dataSource2 = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]([]);
        this.dataService.dataset$.subscribe((data) => {
            if (data && data.length > 0) {
                this.varNames = data[0];
            }
        });
        this.subVarName = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(src_app_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_5__["selectVarName"]));
        this.subVarName.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["withLatestFrom"])(this.dataService.categoriesdd$, this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(src_app_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_5__["selectddCatVarName"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)), this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(src_app_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_5__["selectddCatCode"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)), this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(src_app_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_5__["selectddCatLabel"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)))).subscribe((data) => {
            console.log("total", data);
            let varName = data[0];
            let name = data[2];
            let code = data[3];
            let label = data[4];
            console.log("categories", data[1]);
            this.categories = data[1].map((x, i) => {
                x.title = data[1][i][name];
                x.code = data[1][i][code];
                x.answer_fr = data[1][i][label];
                return (x);
            });
            this.categories = this.categories.filter((data) => {
                return data.title == varName;
            });
            this.cat = this.categories;
            this.dataSource2.data = this.categories;
            this.resultsLength2 = this.categories.length;
        });
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(src_app_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_5__["selectVarName"]))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["withLatestFrom"])(this.dataService.dataset$, this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(src_app_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_5__["selectno_na"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1))))
            .subscribe((data) => {
            console.log("graph5 : categories");
            console.log(data);
            this.stat(data[1], data[0], data[2]);
        });
        this.dataSource2.data = this.categories;
        this.dataService.variablesdd$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["withLatestFrom"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(src_app_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_5__["selectddVarName"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)), this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(src_app_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_5__["selectddVarDesc"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)))).subscribe((data) => {
            console.log("variable");
            console.log(data);
            let name = data[1];
            let desc = data[2];
            this.variables = data[0].map((x, i) => {
                x.texte_fr = data[0][i][desc];
                x.variable = data[0][i][name];
                this.varNames2[i] = data[0][i][name];
                return (x);
            });
            console.log(this.variables);
            this.dataSource1.data = this.variables;
            this.resultsLength1 = this.variables.length;
            //this.changeDetectorRefs.markForCheck()
        });
        this.dataService.categoriesdd$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["withLatestFrom"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(src_app_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_5__["selectddCatVarName"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)), this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(src_app_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_5__["selectddCatCode"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)), this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(src_app_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_5__["selectddCatLabel"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)))).subscribe((data) => {
            console.log(data);
            let name = data[1];
            let code = data[2];
            let label = data[3];
            console.log(data[0]);
            this.categories = data[0].map((x, i) => {
                x.title = data[0][i][name];
                x.code = data[0][i][code];
                x.answer_fr = data[0][i][label];
                return (x);
            });
            this.cat = this.categories;
            this.dataSource2.data = this.categories;
            this.resultsLength2 = this.categories.length;
            //
            //this.changeDetectorRefs.markForCheck()
        });
        //this.createSvg()
        /*
            this.clearSub = this.store.subscribe((state:any)=>{
              let clear = state.main.clearState
              if(clear){
                this.svg.selectAll("*").remove()
                this.createSvg()
              }
            })
        
            this.dataService.dataset$.pipe(
              withLatestFrom(this.dataService.variablesdd$,this.dataService.categoriesdd$)
            ).subscribe((data)=>{
              console.log("data",data)
              this.data = data
              this.createSvg()
        
            })
        
        */
    }
    ngAfterViewInit() {
        //this.dataSource1 = 
        //this.dataSource2 = new MatTableDataSource<any>([]);
        //
        this.dataSource1.paginator = this.paginators.get(0);
        this.dataSource2.paginator = this.paginators.get(1);
    }
    clickRows(row) {
        this.row = row;
        this.clickedRows.clear();
        this.clickedRows.add(row);
        console.log("row", row);
        this.store.dispatch(Object(src_app_Rxjs_actions_main_actions__WEBPACK_IMPORTED_MODULE_6__["updateVarName"])({ data: row.variable }));
        this.currentIndexdd = this.varNames2.indexOf(row.variable);
        this.currentIndex = this.varNames2.indexOf(row.variable);
        console.log("currentIndex", this.currentIndexdd);
        let page = Math.floor((this.currentIndexdd) / 5);
        console.log("page", page);
        if (this.paginators) {
            let pag1 = this.paginators.get(0);
            pag1.pageIndex = page;
            this.dataSource1.paginator = pag1;
        }
        this.changeDetectorRefs.markForCheck();
    }
    ngOnDestroy() {
        //this.clearSub.unsubscribe()
    }
    createSvg() {
        if (this.svg) {
            this.svg.selectAll("*").remove();
        }
        console.log(d3__WEBPACK_IMPORTED_MODULE_1__["select"]("figure#bar"));
        this.svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"]("figure#bar")
            .append("svg")
            .attr("width", this.width + (this.margin * 2))
            .attr("height", this.h2 + (this.margin * 2))
            .attr("style", "background-color:white")
            .append("g")
            .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
        console.log(this.svg);
        //console.log("svg" )
        //console.log(this.svg )
    }
    createGraph(categories) {
        this.reset = false;
        if (categories.length > 0) {
            if (categories.length < 20) {
                setTimeout(() => {
                    this.createPieChart(categories);
                }, 200);
            }
            else {
                console.log("data[1].categorie");
                console.log(categories[1].categorie);
                if (categories[1].categorie.split(" ")[0].split("-").length > 2) {
                    this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(src_app_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_5__["selectVarName"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["withLatestFrom"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(src_app_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_5__["selectddVarName"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)), this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(src_app_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_5__["selectddVarDesc"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)), this.dataService.variablesdd$)).subscribe(([varName, ddVarName, ddVarDesc, ddVar]) => {
                        setTimeout(() => {
                            this.reset = true;
                            let years = {};
                            this.desc = "";
                            this.desc = ddVar.filter(data => data[ddVarName] == varName)[0][ddVarDesc];
                            this.rows = categories.filter((x) => x.categorie != 'NA' && x.categorie != '').map((x) => {
                                let date = x.categorie.split(" ")[0].split("-");
                                years[date[0]] = 1;
                                return [new Date(date[0], Number(date[1]) - 1, date[2]), x.count];
                            });
                            let numberOfYear = Object.keys(years).length;
                            this.calendar = {
                                chartType: 'Calendar',
                                dataTable: this.rows,
                                firstRowIsData: true,
                                options: {
                                    height: 200 * numberOfYear,
                                    width: 1200,
                                    'title': varName
                                },
                            };
                        }, 100);
                    });
                }
                else {
                    setTimeout(() => {
                        this.createPieChart(categories);
                    }, 100);
                }
            }
        }
    }
    convertRows(dd, rows, ddCatLabel, ddCatVarName, ddCatCode, varName) {
        for (let e of rows) {
            let value = dd.filter(data => data[ddCatVarName] == varName &&
                data[ddCatCode] == e[0]);
            if (value.length == 1) {
                e[0] = value[0][ddCatLabel] + "";
            }
        }
        return rows;
    }
    createCount(arr) {
        if (arr[1].split(" ")[0].split("-").length > 2) {
            arr = arr.map(x => x.split(" ")[0]);
        }
        var counts = {};
        for (var i = 1; i < arr.length; i++) {
            counts[arr[i]] = 1 + (counts[arr[i]] || 0);
        }
        let result = Object.keys(counts).sort().map((key) => {
            return { categorie: key, count: counts[key] };
        });
        return result;
    }
}
Graph5Component.ɵfac = function Graph5Component_Factory(t) { return new (t || Graph5Component)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_8__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectorRef"])); };
Graph5Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: Graph5Component, selectors: [["app-graph5"]], viewQuery: function Graph5Component_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.paginators = _t);
    } }, hostBindings: function Graph5Component_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keypress", function Graph5Component_keypress_HostBindingHandler($event) { return ctx.handleKeyboardEvent($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresolveDocument"]);
    } }, decls: 61, vars: 14, consts: [[1, "row"], [1, "col-12"], ["multi", "", 1, "example-headers-align"], [1, "material-icons-outlined"], [3, "data", 4, "ngIf"], ["mat-table", "", 1, "mat-elevation-z8", 2, "width", "100%", 3, "dataSource"], ["matColumnDef", "variable"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "texte_fr"], ["mat-header-cell", "", "class", "ml-3", 4, "matHeaderCellDef"], ["mat-cell", "", "style", "padding-left:5px", 4, "matCellDef"], ["matColumnDef", "texte_en"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "demo-row-is-clicked", "click", 4, "matRowDef", "matRowDefColumns"], [3, "pageIndex", "pageSize"], ["page1", ""], ["matColumnDef", "code"], ["matColumnDef", "texte"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "pageSize"], ["page2", ""], [3, "data"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-cell", "", 1, "ml-3"], ["mat-cell", "", 2, "padding-left", "5px"], ["mat-header-row", ""], ["mat-row", "", 3, "click"], ["mat-row", ""]], template: function Graph5Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "switchs-div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "mat-accordion", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, " Vizualisation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "mat-panel-description");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, " Chart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, " pie_chart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, Graph5Component_google_chart_15_Template, 1, 1, "google-chart", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "mat-accordion", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, " Dictionnaire de donn\u00E9es ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "mat-panel-description");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, " Variable et categories ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "table_view");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "Variables");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](30, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](32, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](33, Graph5Component_th_33_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](34, Graph5Component_td_34_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](35, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](36, Graph5Component_th_36_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](37, Graph5Component_td_37_Template, 2, 1, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](38, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](39, Graph5Component_th_39_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](40, Graph5Component_td_40_Template, 2, 1, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](41, Graph5Component_tr_41_Template, 1, 0, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](42, Graph5Component_tr_42_Template, 1, 2, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](43, "mat-paginator", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46, "Cat\u00E9gories");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](48, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](49, Graph5Component_th_49_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](50, Graph5Component_td_50_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](51, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](52, Graph5Component_th_52_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](53, Graph5Component_td_53_Template, 2, 1, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](54, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](55, Graph5Component_th_55_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](56, Graph5Component_td_56_Template, 2, 1, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](57, Graph5Component_tr_57_Template, 1, 0, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](58, Graph5Component_tr_58_Template, 1, 0, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](59, "mat-paginator", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.desc);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.reset && ctx.chart);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](30, 12, ctx.subVarName));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx.dataSource1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pageIndex", ctx.pageIndex1)("pageSize", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx.dataSource2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pageSize", 5);
    } }, directives: [_div_switch_div_switch_div_component__WEBPACK_IMPORTED_MODULE_9__["SwitchDivComponent"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanelDescription"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], ng2_google_charts__WEBPACK_IMPORTED_MODULE_13__["GoogleChartComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["AsyncPipe"]], styles: [".demo-table[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  \n  .mat-row[_ngcontent-%COMP%]   .mat-cell[_ngcontent-%COMP%] {\n    border-bottom: 1px solid transparent;\n    border-top: 1px solid transparent;\n    cursor: pointer;\n  }\n  \n  .mat-row[_ngcontent-%COMP%]:hover   .mat-cell[_ngcontent-%COMP%] {\n    border-color: currentColor;\n  }\n  \n  .demo-row-is-clicked[_ngcontent-%COMP%] {\n    font-weight: bold;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyYXBoNS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztFQUNiOztFQUVBO0lBQ0Usb0NBQW9DO0lBQ3BDLGlDQUFpQztJQUNqQyxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25CIiwiZmlsZSI6ImdyYXBoNS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlbW8tdGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAubWF0LXJvdyAubWF0LWNlbGwge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIFxuICAubWF0LXJvdzpob3ZlciAubWF0LWNlbGwge1xuICAgIGJvcmRlci1jb2xvcjogY3VycmVudENvbG9yO1xuICB9XG4gIFxuICAuZGVtby1yb3ctaXMtY2xpY2tlZCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH0iXX0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_course_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/course.resolver */ "pnwb");
/* harmony import */ var _services_dataset_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/dataset.resolver */ "5Xy+");
/* harmony import */ var _app_sections_main_pages_about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app_sections/main_pages/about/about.component */ "kwJM");
/* harmony import */ var _Dataset_related_Load_related_load_csv_map_load_csv_map_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Dataset_related/Load_related/load-csv_map/load-csv_map.component */ "Sld9");
/* harmony import */ var _app_sections_main_pages_course_course_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app_sections/main_pages/course/course.component */ "IGsU");
/* harmony import */ var _app_sections_main_pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app_sections/main_pages/home/home.component */ "4stN");
/* harmony import */ var _app_sections_main_pages_create_course_create_course_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app_sections/main_pages/create-course/create-course.component */ "iOwQ");
/* harmony import */ var _app_sections_main_pages_create_dataset_create_dataset_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app_sections/main_pages/create-dataset/create-dataset.component */ "BRsh");
/* harmony import */ var _app_sections_main_pages_create_user_create_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app_sections/main_pages/create-user/create-user.component */ "0zdU");
/* harmony import */ var _app_sections_main_pages_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app_sections/main_pages/login/login.component */ "OY3S");
/* harmony import */ var _app_sections_main_pages_dataset_dataset_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app_sections/main_pages/dataset/dataset.component */ "o1tI");
/* harmony import */ var _Dataset_related_show_dataset_related_div_var_view_var_view_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Dataset_related/show_dataset_related/div/var-view/var-view.component */ "6cgW");
/* harmony import */ var _Dataset_related_show_dataset_related_div_tableau_croise_tableau_croise_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Dataset_related/show_dataset_related/div/tableau-croise/tableau-croise.component */ "svqS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "fXoL");
















const routes = [
    {
        path: '',
        component: _app_sections_main_pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
    },
    {
        path: 'create-course',
        component: _app_sections_main_pages_create_course_create_course_component__WEBPACK_IMPORTED_MODULE_7__["CreateCourseComponent"]
    },
    {
        path: 'create-dataset',
        component: _app_sections_main_pages_create_dataset_create_dataset_component__WEBPACK_IMPORTED_MODULE_8__["CreateDatasetComponent"]
    },
    {
        path: 'varview',
        component: _Dataset_related_show_dataset_related_div_var_view_var_view_component__WEBPACK_IMPORTED_MODULE_12__["VarViewComponent"]
    },
    {
        path: 'svg',
        component: _Dataset_related_Load_related_load_csv_map_load_csv_map_component__WEBPACK_IMPORTED_MODULE_4__["LoadCSV_mapComponent"]
    },
    {
        path: 'create-user',
        component: _app_sections_main_pages_create_user_create_user_component__WEBPACK_IMPORTED_MODULE_9__["CreateUserComponent"]
    },
    {
        path: 'about',
        component: _app_sections_main_pages_about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]
    },
    {
        path: 'login',
        component: _app_sections_main_pages_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"]
    },
    {
        path: 'home',
        component: _app_sections_main_pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
    },
    {
        path: 'courses/:courseUrl',
        component: _app_sections_main_pages_course_course_component__WEBPACK_IMPORTED_MODULE_5__["CourseComponent"],
        resolve: {
            course: _services_course_resolver__WEBPACK_IMPORTED_MODULE_1__["CourseResolver"]
        }
    },
    {
        path: 'datasets/:datasetUrl',
        component: _app_sections_main_pages_dataset_dataset_component__WEBPACK_IMPORTED_MODULE_11__["DatasetComponent"],
        resolve: {
            dataset: _services_dataset_resolver__WEBPACK_IMPORTED_MODULE_2__["DatasetResolver"]
        }
    },
    {
        path: 'tb',
        component: _Dataset_related_show_dataset_related_div_tableau_croise_tableau_croise_component__WEBPACK_IMPORTED_MODULE_13__["TableauCroiseComponent"]
    },
    {
        path: '**',
        redirectTo: '/'
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vi/k":
/*!******************************************************************************************************!*\
  !*** ./src/app/Dataset_related/show_dataset_related/select-var/select-vars/select-vars.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: SelectVarsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectVarsComponent", function() { return SelectVarsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_Rxjs_actions_main_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Rxjs/actions/main.actions */ "Mg0f");
/* harmony import */ var src_app_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Rxjs/reducers */ "AzDA");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/data.service */ "EnSQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _dd_dd_var_name_dd_var_name_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../dd/dd-var-name/dd-var-name.component */ "Onam");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "FKr1");

















const _c0 = ["var1"];
const _c1 = ["var2"];
function SelectVarsComponent_mat_card_1_mat_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r4, " ");
} }
function SelectVarsComponent_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " S\u00E9lection de la variable 1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Var Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-autocomplete", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SelectVarsComponent_mat_card_1_mat_option_15_Template, 2, 2, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "ddVarName", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, ctx_r0.fileName$), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.myControl1)("matAutocomplete", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 6, ctx_r0.filteredOptions1));
} }
function SelectVarsComponent_mat_card_3_mat_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r7, " ");
} }
function SelectVarsComponent_mat_card_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " S\u00E9lection de la variable 2 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Var Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-autocomplete", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SelectVarsComponent_mat_card_3_mat_option_15_Template, 2, 2, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "ddVarName", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, ctx_r1.fileName$), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r1.myControl2)("matAutocomplete", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 6, ctx_r1.filteredOptions2));
} }
class SelectVarsComponent {
    constructor(resolver, dataService, store) {
        this.resolver = resolver;
        this.dataService = dataService;
        this.store = store;
        this.options1 = [];
        this.options2 = [];
        this.change = () => {
            let data1 = this.myControl1.value;
            let data2 = this.myControl2.value;
            this.store.dispatch(Object(src_app_Rxjs_actions_main_actions__WEBPACK_IMPORTED_MODULE_4__["updateCrossVar"])({ data: [data1, data2] }));
            this._filter1(data1);
            this._filter2(data2);
        };
        this.findNextVar = () => {
            if (this.currentIndex < this.varNames.length) {
                this.currentIndex = this.currentIndex + 1;
                this.myControl2.setValue(this.varNames[this.currentIndex]);
                //return this.options2[this.currentIndex++]
            }
            else {
                this.currentIndex = this.currentIndex + 1;
                this.myControl2.setValue(this.varNames[this.currentIndex]);
                //return this.options2[this.currentIndex--]
            }
        };
        this.myControl1 = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.myControl2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
    }
    handleKeyboardEvent(event) {
        if (event.key == "m") {
            this.findNextVar();
        }
        console.log(event.key);
    }
    ngOnInit() {
        this.fileName$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(src_app_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_5__["selectFileName"]));
        this.dataService.dataset$.subscribe((data) => {
            console.log("from select vars", data);
            this.options1 = data[0];
            if (data && data.length > 0) {
                this.varNames = data[0];
                this.options1 = data[0];
                this.options2 = data[0];
                this.filteredOptions1 = this.myControl1.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((data) => {
                    console.log("myControl1", data);
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
                    console.log(data);
                    //this.currentIndex = data.toLowerCase().indexOf(this.options1)
                    this.store.dispatch(Object(src_app_Rxjs_actions_main_actions__WEBPACK_IMPORTED_MODULE_4__["updateCrossVar1"])({ data }));
                    return this._filter1(data);
                }));
                this.filteredOptions2 = this.myControl2.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((data) => {
                    console.log("myControl2", data);
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
                    console.log("data--------------------------");
                    document["data5"] = data;
                    document["dataV"] = this.varNames;
                    console.log(data);
                    console.log(this.varNames);
                    console.log(this.varNames.indexOf(data));
                    if (data) {
                        this.currentIndex = this.varNames.indexOf(data);
                        this.store.dispatch(Object(src_app_Rxjs_actions_main_actions__WEBPACK_IMPORTED_MODULE_4__["updateCrossVar2"])({ data }));
                    }
                    return this._filter2(data);
                }));
            }
        });
    }
    _filter1(value) {
        const filterValue = value.toLowerCase();
        if (this.options1) {
            return this.options1.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
        }
        else {
            return [];
        }
    }
    _filter2(value) {
        const filterValue = value.toLowerCase();
        if (this.options1) {
            return this.options2.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
        }
        else {
            return [];
        }
    }
}
SelectVarsComponent.ɵfac = function SelectVarsComponent_Factory(t) { return new (t || SelectVarsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
SelectVarsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelectVarsComponent, selectors: [["select-vars"]], viewQuery: function SelectVarsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.var1 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.var2 = _t.first);
    } }, hostBindings: function SelectVarsComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function SelectVarsComponent_keypress_HostBindingHandler($event) { return ctx.handleKeyboardEvent($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, decls: 5, vars: 6, consts: [[1, "row"], ["class", "col-5 me-auto", 4, "ngIf"], [1, "col-5", "me-auto"], [1, "form"], [1, "example-full-width"], ["type", "text", "placeholder", "Pick one", "aria-label", "Number", "matInput", "", 3, "formControl", "matAutocomplete"], ["autoActiveFirstOption", ""], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["varIndex", "0"], [3, "value"], ["varIndex", "1"]], template: function SelectVarsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SelectVarsComponent_mat_card_1_Template, 18, 8, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SelectVarsComponent_mat_card_3_Template, 18, 8, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx.fileName$) != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, ctx.fileName$) != "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _dd_dd_var_name_dd_var_name_component__WEBPACK_IMPORTED_MODULE_12__["DdVarNameComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWxlY3QtdmFycy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "y9Uy":
/*!*********************************************!*\
  !*** ./src/app/services/courses.service.ts ***!
  \*********************************************/
/*! exports provided: CoursesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesService", function() { return CoursesService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _db_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./db-utils */ "KoUQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");





class CoursesService {
    constructor(db) {
        this.db = db;
    }
    findCourseByUrl(courseUrl) {
        return this.db.collection("courses", ref => ref.where("url", "==", courseUrl))
            .get()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(results => {
            const courses = Object(_db_utils__WEBPACK_IMPORTED_MODULE_2__["convertSnaps"])(results);
            return courses.length == 1 ? courses[0] : null;
        }));
    }
    deleteCourseAndLessons(courseId) {
        return this.db.collection(`courses/${courseId}/lessons`)
            .get()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["concatMap"])(results => {
            const lessons = Object(_db_utils__WEBPACK_IMPORTED_MODULE_2__["convertSnaps"])(results);
            const batch = this.db.firestore.batch();
            const courseRef = this.db.doc(`courses/${courseId}`).ref;
            batch.delete(courseRef);
            for (let lesson of lessons) {
                const lessonRef = this.db.doc(`courses/${courseId}/lessons/${lesson.id}`).ref;
                batch.delete(lessonRef);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["from"])(batch.commit());
        }));
    }
    deleteCourse(courseId) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["from"])(this.db.doc(`courses/${courseId}`).delete());
    }
    updateCourse(courseId, changes) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["from"])(this.db.doc(`courses/${courseId}`).update(changes));
    }
    createCourse(newCourse, courseId) {
        return this.db.collection("courses", ref => ref.orderBy("seqNo", "desc").limit(1))
            .get()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["concatMap"])(result => {
            var _a, _b;
            const courses = Object(_db_utils__WEBPACK_IMPORTED_MODULE_2__["convertSnaps"])(result);
            const lastCourseSeqNo = (_b = (_a = courses[0]) === null || _a === void 0 ? void 0 : _a.seqNo) !== null && _b !== void 0 ? _b : 0;
            const course = Object.assign(Object.assign({}, newCourse), { seqNo: lastCourseSeqNo + 1 });
            let save$;
            if (courseId) {
                save$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["from"])(this.db.doc(`courses/${courseId}`).set(course));
            }
            else {
                save$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["from"])(this.db.collection("courses").add(course));
            }
            return save$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(res => {
                return Object.assign({ id: courseId !== null && courseId !== void 0 ? courseId : res.id }, course);
            }));
        }));
    }
    loadCoursesByCategory(category) {
        return this.db.collection("courses", ref => ref.where("categories", "array-contains", category)
            .orderBy("seqNo"))
            .get()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(result => Object(_db_utils__WEBPACK_IMPORTED_MODULE_2__["convertSnaps"])(result)));
    }
}
CoursesService.ɵfac = function CoursesService_Factory(t) { return new (t || CoursesService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"])); };
CoursesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: CoursesService, factory: CoursesService.ɵfac, providedIn: "root" });


/***/ }),

/***/ "yle5":
/*!***********************************************************************************!*\
  !*** ./src/app/Dataset_related/Load_related/load-csv_dd/load-csv_dd.component.ts ***!
  \***********************************************************************************/
/*! exports provided: LoadCSV_ddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadCSV_ddComponent", function() { return LoadCSV_ddComponent; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_Rxjs_actions_main_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Rxjs/actions/main.actions */ "Mg0f");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xlsx */ "EUZL");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Rxjs/reducers */ "AzDA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/data.service */ "EnSQ");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");













const _c0 = ["csvReader"];
class LoadCSV_ddComponent {
    constructor(fb, dataService, store) {
        this.fb = fb;
        this.dataService = dataService;
        this.store = store;
        this.csvRecords = [];
        this.header = false;
        this.store.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe((data) => {
            console.log("in_popup dd", data);
            this.form = this.fb.group({
                description: [data.main.ddVarName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                varName: [data.main.ddVarDesc, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                catVarName: [data.main.ddCatVarName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                catCode: [data.main.ddCatCode, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                catLabel: [data.main.ddCatLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            });
            this.form.get("description").valueChanges.subscribe(x => {
                console.log('description');
                console.log(x);
                this.store.dispatch(Object(src_app_Rxjs_actions_main_actions__WEBPACK_IMPORTED_MODULE_1__["updateddVarDesc"])({ data: x }));
            });
            this.form.get("varName").valueChanges.subscribe(x => {
                console.log('varName');
                console.log(x);
                this.store.dispatch(Object(src_app_Rxjs_actions_main_actions__WEBPACK_IMPORTED_MODULE_1__["updateddVarName"])({ data: x }));
            });
            this.form.get("catVarName").valueChanges.subscribe(x => {
                console.log('catVarName');
                console.log(x);
                this.store.dispatch(Object(src_app_Rxjs_actions_main_actions__WEBPACK_IMPORTED_MODULE_1__["updateddCatVarName"])({ data: x }));
            });
            this.form.get("catCode").valueChanges.subscribe(x => {
                console.log('ddCatCode');
                console.log(x);
                this.store.dispatch(Object(src_app_Rxjs_actions_main_actions__WEBPACK_IMPORTED_MODULE_1__["updateddCatCode"])({ data: x }));
            });
            this.form.get("catLabel").valueChanges.subscribe(x => {
                console.log('catLabel');
                console.log(x);
                this.store.dispatch(Object(src_app_Rxjs_actions_main_actions__WEBPACK_IMPORTED_MODULE_1__["updateddCatLabel"])({ data: x }));
            });
        });
    }
    ngOnInit() {
        this.fileName = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(src_app_Rxjs_reducers__WEBPACK_IMPORTED_MODULE_5__["selectFileName_dd"]));
    }
    // Your applications input change listener for the CSV File
    uploadListener($event) {
        // Select the files from the event
        const files = $event.srcElement.files;
        //console.log('files', files);
        if (files.length > 0) {
            this.store.dispatch(Object(src_app_Rxjs_actions_main_actions__WEBPACK_IMPORTED_MODULE_1__["updateFileName_dd"])({ data: files[0].name }));
            //this.store.dispatch(updateFileSize({data:formatBytes(files[0].size)}))
            let fileReader = new FileReader();
            fileReader.readAsArrayBuffer(files[0]);
            fileReader.onload = (e) => {
                this.arrayBuffer = fileReader.result;
                var data = new Uint8Array(this.arrayBuffer);
                var arr = new Array();
                for (var i = 0; i != data.length; ++i)
                    arr[i] = String.fromCharCode(data[i]);
                var bstr = arr.join("");
                var workbook = xlsx__WEBPACK_IMPORTED_MODULE_2__["read"](bstr, { type: "binary" });
                var first_sheet_name = workbook.SheetNames[0];
                var worksheet_var = workbook.Sheets[first_sheet_name];
                let variables = xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].sheet_to_json(worksheet_var, { raw: true });
                console.log("variables");
                console.log(variables);
                this.dataService.variablesdd$.next(variables);
                var sec_sheet_name = workbook.SheetNames[1];
                var worksheet_cat = workbook.Sheets[sec_sheet_name];
                let categories = xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].sheet_to_json(worksheet_cat, { raw: true });
                console.log(categories);
                this.dataService.categoriesdd$.next(categories);
            };
        }
        // Parse the file you want to select for the operation along with the configuration
    }
    uploadVar() {
        let newD = [];
        let name = this.csvRecords[0][9];
        let a = this.csvRecords.filter((d, i) => {
            return i != 0;
        });
        let b = a.map(function (v, i2) {
            newD[i2] = v[9];
        });
        let newVar = { nom: name, data: newD };
        this.dataService.createVar(newVar).subscribe();
    }
}
LoadCSV_ddComponent.ɵfac = function LoadCSV_ddComponent_Factory(t) { return new (t || LoadCSV_ddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"])); };
LoadCSV_ddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: LoadCSV_ddComponent, selectors: [["load-csv-dd"]], viewQuery: function LoadCSV_ddComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.fileImportInput = _t.first);
    } }, decls: 43, vars: 1, consts: [[3, "formGroup"], [1, "mat-elevation-z10", "m-3"], [1, "container"], [1, "element1"], ["for", "html"], ["matInput", "", "id", "html", "placeholder", "", "formControlName", "varName"], ["for", "description"], ["matInput", "", "id", "description", "placeholder", "", "formControlName", "description"], ["matInput", "", "id", "html", "placeholder", "", "formControlName", "catVarName"], ["for", "catCode"], ["matInput", "", "id", "catCode", "placeholder", "", "formControlName", "catCode"], ["for", "catLabel"], ["matInput", "", "id", "catLabel", "placeholder", "", "formControlName", "catLabel"], ["for", "txtFileUpload"], ["type", "file", "name", "Upload DD", "id", "txtFileUpload", "accept", ".xlsx", 3, "change"], ["csvReader", ""]], template: function LoadCSV_ddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Variables");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Colonne VarName");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Colonne Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Cat\u00E9gorie");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "Colonne VarName");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](27, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "Colonne Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](32, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "Colonne Label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](37, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, "Select a file for dd:");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function LoadCSV_ddComponent_Template_input_change_41_listener($event) { return ctx.uploadListener($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.form);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"]], styles: [".form[_ngcontent-%COMP%] {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n  }\n  \n.full-width[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  \n.course-actions[_ngcontent-%COMP%] {\n    text-align: center;\n}\n  \n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row ;\n  justify-content: center ;\n  flex-direction: column;\n}\n  \n.element1[_ngcontent-%COMP%]{\n  padding:0 15px;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWQtY3N2X2RkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7RUFDYjs7QUFFRjtJQUNJLFdBQVc7RUFDYjs7QUFFRjtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsd0JBQXdCO0VBQ3hCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGNBQWM7O0FBRWhCIiwiZmlsZSI6ImxvYWQtY3N2X2RkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybSB7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuLmZ1bGwtd2lkdGgge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbi5jb3Vyc2UtYWN0aW9ucyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdyA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyIDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmVsZW1lbnQxe1xuICBwYWRkaW5nOjAgMTVweDtcbiAgXG59Il19 */"] });
function formatBytes(bytes, decimals = 2) {
    if (bytes === 0)
        return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map