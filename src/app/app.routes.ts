import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { ProductpageComponent } from './productpage/productpage.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "contact", component: ContactComponent },
    { path: "products", component: ProductsComponent },
    {path: "products/:id", component: ProductpageComponent}
];
