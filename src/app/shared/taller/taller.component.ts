import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-taller',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './taller.component.html',
  styleUrls: ['./taller.component.css']
})
export class TallerComponent {
  titulo: string = 'Taller de Angular';

  temas: any[] = [
    { texto: "Rutas" },  // Corregido para eliminar ":" adicional
    { texto: "Taller" },
    { texto: "Desarrollo" },
    { texto: "Aplicaciones" },
    { texto: "Web" }
  ];
}
