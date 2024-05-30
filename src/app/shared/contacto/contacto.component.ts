import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  titulo: string = 'Contactos';

  medios: any[] = [
    { "texto": "En Twitter"},
    { "texto": "En Facebook"},
    { "texto": "Por correo electronico"}
  ]
}
