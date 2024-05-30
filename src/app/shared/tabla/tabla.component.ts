import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {
  titulo: string = 'Tabla de datos';

  datos: any[] = [
    { "nombre": "Juan", "apellido": "Perez", "edad": 25 },
    { "nombre": "Maria", "apellido": "Gomez", "edad": 30 },
    { "nombre": "Pedro", "apellido": "Lopez", "edad": 35 },
    { "nombre": "Ana", "apellido": "Gutierrez", "edad": 40 }
  ]
}
