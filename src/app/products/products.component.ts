import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  togglebtn() {
    let navBar = document.getElementById("navBar");
      navBar!.classList.toggle("hidemenu")
    }
}
