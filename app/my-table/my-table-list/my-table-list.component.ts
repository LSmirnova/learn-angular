import {Component, EventEmitter, Output, Input} from "@angular/core";
import {Product, products} from "./product";
import {Category, category, categorylist} from "./category";


@Component({
    moduleId: module.id,
    selector: 'my-table-list',
    templateUrl: 'my-table-list.component.html',
    styleUrls: ['my-table-list.component.css']
})
export class MyTableListComponent{
    product: Product[] = products;
    newProduct: Product[] = products;

    @Output()
    remove: EventEmitter<number> = new EventEmitter();

    categoryArray: Category[] = category;

    categoryItem: Category[] = categorylist;

    sort(value){
        this.product = [];
        if (value === 'All'){
            for (let i = 0; i < this.newProduct.length; i++){
                this.product.push(this.newProduct[i]);
            }
            return this.product
        } else if (value === 'Category1'){
            for (let i = 0; i < this.newProduct.length; i++){
                if (this.newProduct[i].category === 'Category1'){
                    this.product.push(this.newProduct[i]);
                }

            }
            return this.product
        } else if (value === 'Category2'){
            for (let i = 0; i < this.newProduct.length; i++){
                if (this.newProduct[i].category === 'Category2'){
                    this.product.push(this.newProduct[i]);
                }

            }
            return this.product
        } else if (value === 'Category3'){
            for (let i = 0; i < this.newProduct.length; i++){
                if (this.newProduct[i].category === 'Category3'){
                    this.product.push(this.newProduct[i]);
                }

            }
            return this.product
        }


        if (this.row < 0 || this.row > this.newProduct.length){
            for (let i = 0; i < this.newProduct.length; i++){
                this.product.push(this.newProduct[i]);
            }
        } else {
            for (let i = 0; i < (this.row); i++){
                this.product.push(this.newProduct[i]);
            }
        }

    }

    onDelete(selected: Product){
        if(this.product.length === this.newProduct.length){
            this.product.splice(this.product.indexOf(selected), 1);
            this.newProduct = this.product;
        } else {
            this.product.splice(this.product.indexOf(selected), 1);
            this.newProduct.splice(this.newProduct.indexOf(selected), 1);
            this.reTable();
        }

        this.remove.emit(selected.id);
    }

    row:number = this.product.length;


    reTable(){
        this.product = [];
        if (this.row < 0 || this.row > this.newProduct.length){
            for (let i = 0; i < this.newProduct.length; i++){
                this.product.push(this.newProduct[i]);
            }
        } else {
            for (let i = 0; i < (this.row); i++){
                this.product.push(this.newProduct[i]);
            }
        }

        return this.product

    }


    @Input()
    newId: number;
    @Input()
    newName: string;
    @Input()
    newPrice: number;

    newCategory: string = "Category1";

    update(value){
        this.newCategory = value;
    }

    tmpObj: Product;

    addItem(newId, newName, newPrice, newCategory) {
        this.tmpObj = {
            id: newId,
            name: newName,
            price: newPrice,
            category: newCategory
        };
        this.newProduct.push(this.tmpObj);
    }



}
