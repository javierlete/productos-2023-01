import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  productoForm = this.fb.group({
    nombre: ['', Validators.required],
    precio: [0, Validators.required],
  });

  constructor(private fb: FormBuilder, private productoService: ProductoService, private route: ActivatedRoute) {}

  ngOnInit() {
    const id: number = +this.route.snapshot.paramMap.get('id')!;
    this.productoService.getProducto(id).subscribe(
      producto => this.productoForm.patchValue(producto));
  }

  guardar(): void {
    alert('Thanks!');
  }
}
