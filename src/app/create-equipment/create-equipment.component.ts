import { Component, OnInit } from '@angular/core';
import { Equipment } from '../models/equipment.models';
import { EquipmentServiceService } from '../service/equipment-service.service';
@Component({
  selector: 'app-create-equipment',
  templateUrl: './create-equipment.component.html',
  styleUrls: ['./create-equipment.component.css']
})
export class CreateEquipmentComponent implements OnInit{

  equipment: Equipment =
  {
    id: Math.floor(Math.random() * 1000000),
    brand: "",
    type: "",
    description: "",
    price: 0
  };
  wasSubmitted: boolean = false;

  constructor(private service: EquipmentServiceService) { }

  ngOnInit(){console.log("Create Product: " + this.equipment.brand)}

  public  onSubmit()
  {
      this.service.createEquipment(this!.equipment , () => this.equipment = this.equipment);
      console.log("The return from createAlbum() was " + this.equipment.id + " " + this.equipment.brand + " " + this.equipment.type + " " + this.equipment.description + " " + this.equipment.price);
      this.wasSubmitted = true;

  }

}
