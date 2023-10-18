import { Component } from '@angular/core';
import { Equipment } from '../models/equipment.models';
import { EquipmentServiceService } from '../service/equipment-service.service';
import { ActivatedRoute, Params } from '@angular/router';



@Component({
  selector: 'app-delete-equipment',
  templateUrl: './delete-equipment.component.html',
  styleUrls: ['./delete-equipment.component.css']
})
export class DeleteEquipmentComponent {


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

  ngOnInit(){

    this.route.params.subscribe((params: Params) => {this.equipment.id= +params['id'];})
    console.log("Delete Product: " + this.equipment.id)
  }

  public  onSubmit()
  {
      this.service.deleteEquipment(this!.equipment.id , () => this.equipment = this.equipment);
      this.wasSubmitted = true;

  }
}
