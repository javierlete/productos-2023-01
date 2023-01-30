import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  productoForm = this.fb.group({
    nombre: [null, Validators.required],
    precio: [null, Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  guardar(): void {
    alert('Thanks!');
  }
}
