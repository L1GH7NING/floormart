import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SlicePipe } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { ApiService } from './api.service';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgxStarRatingModule } from 'ngx-star-rating';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SlicePipe, CardComponent, NavComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'FakeShop';

  data: any = [];

  constructor(public api: ApiService) { }
  ngOnInit() {
    this.api.getData().subscribe(response => {
      this.data = response
    })

  }
}

