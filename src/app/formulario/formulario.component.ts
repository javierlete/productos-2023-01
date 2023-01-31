import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../listado/listado-datasource';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  productoForm = this.fb.group({
    id: [0],
    nombre: ['', Validators.required],
    precio: [0, Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private productoService: ProductoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    const id: number = +this.route.snapshot.paramMap.get('id')!;
    
    if (id) {
      this.productoService.getProducto(id).subscribe(
        producto => this.productoForm.patchValue(producto));
    }
  }

  guardar(): void {
    const producto = this.productoForm.value;
    if (producto.id) {
      this.productoService.modificar(producto as Producto).subscribe(
        () => this.irAListado()
      );
    } else {
      this.productoService.insertar(producto as Producto).subscribe(
        () => this.irAListado()
      );
    };
  }

  irAListado() {
    this.router.navigate(["/listado"]);
  }
}
