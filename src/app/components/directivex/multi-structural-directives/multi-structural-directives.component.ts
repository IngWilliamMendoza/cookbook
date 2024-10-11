import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

export enum Fruit {
  Apple = 'Apple 🍎',
  Banana = 'Banana 🍌',
  Grapes = 'Grapes 🍇',
  Cherries = 'Cherry 🍒'
}

interface IFruit {
  id: number;
  name: Fruit;
}

@Component({
  selector: 'app-multi-structural-directives',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './multi-structural-directives.component.html',
  styleUrl: './multi-structural-directives.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultiStructuralDirectivesComponent {
  selectedFruit: Fruit = '' as any;
  fruits: string[] = Object.values(Fruit);
  MAX_BUCKET_LENGTH = 10;
  bucket: IFruit[] = [];
  addSelectedFruitToBucket() {
    this.bucket.push({
      id: Date.now(),
      name: this.selectedFruit
    });
  }
  
  deleteFromBucket(item: IFruit) {
    this.bucket = this.bucket.filter(fruit => fruit.id != item.id);
  }

}
