import { Component, NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { NavComponent } from '../components/nav/nav.component';
import { NgxStarRatingComponent, NgxStarRatingModule } from 'ngx-star-rating';
import { RatingComponent } from '../rating/rating.component';

@Component({
  selector: 'app-productpage',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './productpage.component.html',
  styleUrl: './productpage.component.css',
})

// @NgModule({
//   imports: [NgxStarRatingComponent],
// })
export class ProductpageComponent {
  value: any;
  constructor(private routeId: ActivatedRoute, private api: ApiService) { }
  data: any = []
  rating: number = 0

  ngOnInit() {
    this.api.getData().subscribe((res: any) => {
      let id = this.routeId.snapshot.paramMap.get('id');
      let response = res;
      let product = response.filter((e: any) => e.id == id);
      this.data = product[0];
    })
  }
}
