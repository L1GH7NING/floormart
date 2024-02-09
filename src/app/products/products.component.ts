import { Component } from '@angular/core';
import { CardComponent } from '../components/card/card.component';
import { ProductpageComponent } from '../productpage/productpage.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CardComponent, ProductpageComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

}
