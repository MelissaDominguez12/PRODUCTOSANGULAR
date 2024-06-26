import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ActividadesComponent } from './actividades/actividades.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { ConversionesComponent } from './conversiones/conversiones.component';
import { CategoriaFormsComponent } from './categorias-form/categorias-form.component'; // Add this line


export const routes: Routes = [
     {path: '',redirectTo:'/home',pathMatch:'full'},
     {path:'home',component:HomeComponent},
     {path:'actividades',component:ActividadesComponent},
     {path:'conversiones',component:ConversionesComponent},
     {path:'categorias',component:CategoriasComponent},
     {path:'categoriasform',component:CategoriaFormsComponent},
     {path:'categoriasform/:id',component:CategoriaFormsComponent}
];
