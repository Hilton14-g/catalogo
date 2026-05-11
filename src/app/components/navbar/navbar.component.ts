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
      background: linear-gradient(135deg, var(--rose-gradient-start) 0%, var(--rose-gradient-end) 100%);
      color: white;
      padding: 0;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      box-shadow: 0 4px 30px rgba(253, 121, 168, 0.3);
    }
    
    .navbar-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 1.5rem;
    }
    
    .logo {
      font-family: 'Playfair Display', serif;
      font-size: 1.4rem;
      font-weight: 700;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: white;
    }
    
    .btn-cart {
      background: white;
      color: var(--rose-primary);
      border: none;
      width: 45px;
      height: 45px;
      border-radius: 50%;
      font-size: 1.3rem;
      cursor: pointer;
      position: relative;
      transition: transform 0.3s ease;
      margin-left: auto;
    }
    
    .btn-cart:hover {
      transform: scale(1.1);
    }
    
    .cart-count {
      position: absolute;
      top: -5px;
      right: -5px;
      background: var(--rose-dark);
      color: white;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      font-size: 0.75rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
    }
  `]
})
export class NavbarComponent {
  private carritoService = inject(CarritoService);
  totalItems = this.carritoService.getTotalItems();
  
  @Output() toggleCarrito = new EventEmitter<void>();
}
