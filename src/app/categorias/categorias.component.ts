import { CategoriaService } from './../service/categoria.service';
import { Categoria } from './../model/Categoria';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent implements OnInit {
  titulo: string = "Listado de Categorias";
  listaDeCategorias:Categoria[] =[];

  constructor(private categoriaService: CategoriaService) { }
  HttpClient= inject(HttpClient);

  ngOnInit(): void {
    this.categoriaService.mostrarCategorias().subscribe(
      (lasCategorias) => (
        this.listaDeCategorias = lasCategorias
      )
    );
  }

    /*
  {
      idCategoria: 1,
      nombreCategoria:'Deportes',
      descripcionCategoria:'Articulos deportivos',

    },

    {
      idCategoria: 2,
      nombreCategoria:'Electronica',
      descripcionCategoria:'Articulos electronicos',

    },
    {
      idCategoria: 3,
      nombreCategoria:'Hogar',
      descripcionCategoria:'Articulos para el hogar',
    },

    {
      idCategoria: 4,
      nombreCategoria:'Juguetes',
      descripcionCategoria:'Juguetes para niños',
    },


  ]; */

  delete(categoria:Categoria):void{
    Swal.fire({
      title: "Estas seguro de eliminar la categoria?",
      text: "No vas a poder recuperar tu categoria!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si,eliminala!",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        this.categoriaService
        .eliminarCategoria(categoria.idCategoria)
        .subscribe((response) =>
          this.categoriaService
        .mostrarCategorias()
        .subscribe
        ((lasCategorias) => {
          this.listaDeCategorias = lasCategorias;
        })
        );

        Swal.fire({
      
  
          title: "Eliminado!",
          text: "La categoria : ${categoria.nombreCategoria} fue eliminada.",
          icon: "success"
        });
      }
    });
  }

 
  
};

