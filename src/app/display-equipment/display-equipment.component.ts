import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Equipment } from '../models/equipment.models';
import { EquipmentServiceService } from '../service/equipment-service.service'


@Component({
  selector: 'app-display-equipment',
  templateUrl: './display-equipment.component.html',
  styleUrls: ['./display-equipment.component.css']
})
export class DisplayEquipmentComponent
{
  constructor(
    private route: ActivatedRoute,
    private service: EquipmentServiceService
  ) {}

  selectedEquipment: Equipment | null = null;
  equipment: Equipment[] = [];

  ngOnInit(){
    console.log("Getting data...");
    this.service.getEquipment((equipment: Equipment[]) =>{this.equipment = equipment; })
  }

  onSelectEquipment(equipment: Equipment) {
    this.selectedEquipment = equipment;
  }
}
