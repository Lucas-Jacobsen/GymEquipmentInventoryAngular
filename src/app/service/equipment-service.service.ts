import { Injectable } from '@angular/core';
import exampleData from '../data/sample-equipment-data.json';
import {Equipment} from '../models/equipment.models';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class EquipmentServiceService {

  private host = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  public getEquipment(callback: (eqpt: Equipment[]) => void) : void {
    this.http.get<Equipment[]>(this.host + "/equipment").subscribe((equipment: Equipment[]) => {callback(equipment);})
  }

  public createEquipment(equipment: Equipment, callback: () => void) : void {
    this.http.post<Equipment>(this.host + "/equipment", equipment).subscribe((data) =>{callback();});
  }

  public updateEquipment(equipment: Equipment, callback: () => void): void {
    this.http.put<Equipment>(this.host + "/equipment", equipment).subscribe((data) => {callback();});
  }

  public deleteEquipment(id: number, callback: () => void ) : void {
    this.http.delete(this.host + "/equipment/" + id).subscribe((data) => {callback();});
  }
}
