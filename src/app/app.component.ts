import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarritoModalComponent } from './components/carrito-modal/carrito-modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, CarritoModalComponent],
  template: `
    <app-navbar (toggleCarrito)="abrirCarrito()"></app-navbar>
    <main>
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
    <app-carrito-modal #carritoModal></app-carrito-modal>
  `,
  styles: [`
    main {
      min-height: calc(100vh - 200px);
    }
  `]
})
export class AppComponent {
  title = 'flores-eternas-angular';
  
  @ViewChild('carritoModal') carritoModal!: CarritoModalComponent;
  
  abrirCarrito() {
    this.carritoModal.abrir();
  }
}
