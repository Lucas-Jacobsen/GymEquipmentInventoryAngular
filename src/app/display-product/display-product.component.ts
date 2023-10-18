import { Component, Input } from '@angular/core';
import { Equipment } from '../models/equipment.models';

@Component({
  selector: 'app-display-product',
  templateUrl: './display-product.component.html',
  styleUrls: ['./display-product.component.css']
})
export class DisplayProductComponent {
  @Input() equipment: Equipment | undefined;
}
