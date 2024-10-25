import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
  {path: 'Usuario',component: UserComponent},
  {path: 'Productos',component: ProductsComponent},
  { path: '', redirectTo: '/mi-componente', pathMatch: 'full' }, // Ruta por defecto
  { path: '**', redirectTo: '/mi-componente' } // Ruta 404
];
