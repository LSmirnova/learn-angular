"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var product_1 = require("./product");
var category_1 = require("./category");
var MyTableListComponent = (function () {
    function MyTableListComponent() {
        this.product = product_1.products;
        this.newProduct = product_1.products;
        this.remove = new core_1.EventEmitter();
        this.categoryArray = category_1.category;
        this.categoryItem = category_1.categorylist;
        this.row = this.product.length;
        this.newCategory = "Category1";
    }
    MyTableListComponent.prototype.sort = function (value) {
        this.product = [];
        if (value === 'All') {
            for (var i = 0; i < this.newProduct.length; i++) {
                this.product.push(this.newProduct[i]);
            }
            return this.product;
        }
        else if (value === 'Category1') {
            for (var i = 0; i < this.newProduct.length; i++) {
                if (this.newProduct[i].category === 'Category1') {
                    this.product.push(this.newProduct[i]);
                }
            }
            return this.product;
        }
        else if (value === 'Category2') {
            for (var i = 0; i < this.newProduct.length; i++) {
                if (this.newProduct[i].category === 'Category2') {
                    this.product.push(this.newProduct[i]);
                }
            }
            return this.product;
        }
        else if (value === 'Category3') {
            for (var i = 0; i < this.newProduct.length; i++) {
                if (this.newProduct[i].category === 'Category3') {
                    this.product.push(this.newProduct[i]);
                }
            }
            return this.product;
        }
        if (this.row < 0 || this.row > this.newProduct.length) {
            for (var i = 0; i < this.newProduct.length; i++) {
                this.product.push(this.newProduct[i]);
            }
        }
        else {
            for (var i = 0; i < (this.row); i++) {
                this.product.push(this.newProduct[i]);
            }
        }
    };
    MyTableListComponent.prototype.onDelete = function (selected) {
        if (this.product.length === this.newProduct.length) {
            this.product.splice(this.product.indexOf(selected), 1);
            this.newProduct = this.product;
        }
        else {
            this.product.splice(this.product.indexOf(selected), 1);
            this.newProduct.splice(this.newProduct.indexOf(selected), 1);
            this.reTable();
        }
        this.remove.emit(selected.id);
    };
    MyTableListComponent.prototype.reTable = function () {
        this.product = [];
        if (this.row < 0 || this.row > this.newProduct.length) {
            for (var i = 0; i < this.newProduct.length; i++) {
                this.product.push(this.newProduct[i]);
            }
        }
        else {
            for (var i = 0; i < (this.row); i++) {
                this.product.push(this.newProduct[i]);
            }
        }
        return this.product;
    };
    MyTableListComponent.prototype.update = function (value) {
        this.newCategory = value;
    };
    MyTableListComponent.prototype.addItem = function (newId, newName, newPrice, newCategory) {
        this.tmpObj = {
            id: newId,
            name: newName,
            price: newPrice,
            category: newCategory
        };
        this.newProduct.push(this.tmpObj);
    };
    return MyTableListComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], MyTableListComponent.prototype, "remove", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], MyTableListComponent.prototype, "newId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MyTableListComponent.prototype, "newName", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], MyTableListComponent.prototype, "newPrice", void 0);
MyTableListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-table-list',
        templateUrl: 'my-table-list.component.html',
        styleUrls: ['my-table-list.component.css']
    })
], MyTableListComponent);
exports.MyTableListComponent = MyTableListComponent;
//# sourceMappingURL=my-table-list.component.js.map