import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEquipmentComponent } from './create-equipment/create-equipment.component';
import { DisplayEquipmentComponent } from './display-equipment/display-equipment.component';
import { EditEquipmentComponent } from './edit-equipment/edit-equipment.component';
import { DeleteEquipmentComponent } from './delete-equipment/delete-equipment.component';
import { HttpClientModule } from '@angular/common/http';
import { DisplayProductComponent } from './display-product/display-product.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateEquipmentComponent,
    DisplayEquipmentComponent,
    EditEquipmentComponent,
    DeleteEquipmentComponent,
    DisplayProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
