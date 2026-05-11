import { Component, inject, Output, EventEmitter } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="navbar">
      <div class="navbar-top">
        <div class="logo">🌹 Rosas Eternas</div>
        <button class="btn-cart" (click)="toggleCarrito.emit()">
          🛒
          <span class="cart-count" *ngIf="totalItems() > 0">{{ totalItems() }}</span>
        </button>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      background: var(--bg-lila);
      color: var(--rose-primary);
      padding: 0;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      box-shadow: var(--shadow-sm);
      border-bottom: 1px solid var(--border-light);
    }

    .navbar-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      max-width: 1400px;
      margin: 0 auto;
    }

    .logo {
      font-family: 'Yellowtail', cursive;
      font-size: 2rem;
      font-weight: 400;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--rose-primary);
      letter-spacing: normal;
    }

    .btn-cart {
      background: transparent;
      color: var(--rose-primary);
      border: 2px solid var(--rose-primary);
      width: 48px;
      height: 48px;
      border-radius: 12px;
      font-size: 1.3rem;
      cursor: pointer;
      position: relative;
      transition: all 0.2s ease;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .btn-cart:hover {
      background: var(--rose-primary);
      color: white;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(233, 30, 99, 0.3);
    }

    .cart-count {
      position: absolute;
      top: -8px;
      right: -8px;
      background: var(--rose-primary);
      color: white;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      font-size: 0.75rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      border: 2px solid white;
    }
  `]
})
export class NavbarComponent {
  private carritoService = inject(CarritoService);
  totalItems = this.carritoService.getTotalItems();
  
  @Output() toggleCarrito = new EventEmitter<void>();
}
