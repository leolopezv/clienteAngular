import { Component } from '@angular/core';
import { provideRouter, RouterOutlet, RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ContactoComponent } from './shared/contacto/contacto.component';
import { TablaComponent } from './shared/tabla/tabla.component';
import { TallerComponent } from './shared/taller/taller.component';
import { RecursosService } from './servicios/recursos.service';
import { Foto } from './interfaz/foto';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    ContactoComponent,
    TablaComponent,
    TallerComponent,
    HttpClientModule
  ],
  providers: [
    RecursosService
  ]
})
export class AppComponent {
  title = 'clienteAngular';

  fotos: Foto[] = [];

  constructor(private recursosService: RecursosService) {
    this.recursosService.obtenerDatos().subscribe(respuesta => {
      this.fotos = respuesta as Foto[];
    });
  }
}
