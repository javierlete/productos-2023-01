import { Location } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductoService } from '../producto.service';
import { ListadoDataSource, Producto } from './listado-datasource';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Producto>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'nombre', 'precio', 'opciones'];

  dataSource!: ListadoDataSource;

  constructor(
    private router: Router,
    private productoService: ProductoService) {
      this.dataSource = new ListadoDataSource(this.productoService);
  }

  ngAfterViewInit(): void {
    this.dataSource = new ListadoDataSource(this.productoService);

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  editar(id: number) {
    this.router.navigate(["/formulario/", id]);
  }

  borrar(id: number) {
    this.productoService.borrar(id).subscribe(() => {

      this.ngAfterViewInit();
    }
    );
  }
}
