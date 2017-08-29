import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {MyTableListComponent} from "./my-table/my-table-list/my-table-list.component";
import { FormsModule } from "@angular/forms";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        MyTableListComponent
    ],
    bootstrap: [AppComponent]

})
 export class AppModule{}