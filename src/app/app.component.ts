import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactoComponent } from './shared/contacto/contacto.component';
import { TablaComponent } from './shared/tabla/tabla.component';
import { RecursosService } from './servicios/recursos.service'; // Import RecursosService
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { Foto } from './interfaz/foto';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContactoComponent, TablaComponent, HttpClientModule], // El import es para importar una librearia o modulo
  providers: [RecursosService], // Add RecursosService to the providers array // El provider es un servicio que se va a consumir
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clienteAngular';

  fotos: Foto[] = [];
  // Inyeccion de dependencias significa que Angular crea una instancia de RecursosService y la pasa al constructor de AppComponent
  constructor(private recursosService: RecursosService) {
    recursosService.obtenerDatos().subscribe(respuesta => { //El json que se obtiene de la base de datos se guarda en respuesta
      this.fotos = respuesta as Array<Foto>; // Se guarda en el arreglo fotos
    })
  }

}
