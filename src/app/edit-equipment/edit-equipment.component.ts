import { Component } from '@angular/core';
import { Equipment } from '../models/equipment.models';
import { EquipmentServiceService } from '../service/equipment-service.service';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-edit-equipment',
  templateUrl: './edit-equipment.component.html',
  styleUrls: ['./edit-equipment.component.css']
})
export class EditEquipmentComponent {

  //Read id from uri


  equipment: Equipment =
  {
    id: Math.floor(Math.random() * 1000000),
    brand: "",
    type: "",
    description: "",
    price: 0
  };

  wasSubmitted: boolean = false;

  constructor(private service: EquipmentServiceService, private route: ActivatedRoute) { }

  ngOnInit()
  {
    this.route.params.subscribe((params: Params) => {this.equipment.id = +params['id'];})
    console.log("Edit Product: " + this.equipment.id)

  }
  public  onSubmit()
  {

      this.service.updateEquipment(this.equipment , () => this.equipment = this.equipment);
      console.log("The return from editEquipment was " + this.equipment.id + " " + this.equipment.brand + " " + this.equipment.type + " " + this.equipment.description + " " + this.equipment.price);
      this.wasSubmitted = true;

  }

}
