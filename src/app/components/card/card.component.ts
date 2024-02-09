import { SlicePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { ProductpageComponent } from '../../productpage/productpage.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [SlicePipe, ProductpageComponent, RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  data: any = [];

  constructor(public api: ApiService) { }
  ngOnInit() {
    this.api.getData().subscribe(response => {
      this.data = response
    })

  }

}
