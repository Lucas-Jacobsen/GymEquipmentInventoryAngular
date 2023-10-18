import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEquipmentComponent } from './create-equipment/create-equipment.component';
import { DeleteEquipmentComponent } from './delete-equipment/delete-equipment.component';
import { DisplayEquipmentComponent } from './display-equipment/display-equipment.component';
import { EditEquipmentComponent } from './edit-equipment/edit-equipment.component';

const routes: Routes = [
  {path: 'create', component: CreateEquipmentComponent},
  {path: 'delete/:id', component: DeleteEquipmentComponent},
  {path: 'display', component: DisplayEquipmentComponent},
  {path: 'edit/:id', component: EditEquipmentComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
