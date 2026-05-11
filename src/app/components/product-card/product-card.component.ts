import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../../services/carrito.service';

export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  precioAnterior?: number;
  imagen: string;
  badge?: string;
}

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="product-card">
      <div class="badge" *ngIf="producto.badge">{{ producto.badge }}</div>
      <img [src]="producto.imagen" [alt]="producto.nombre" class="product-image">
      <div class="product-info">
        <h3 class="product-name">{{ producto.nombre }}</h3>
        <p class="product-desc">{{ producto.descripcion }}</p>
        <p class="product-price">
          {{ formatPrice(producto.precio) }}
          <span *ngIf="producto.precioAnterior">{{ formatPrice(producto.precioAnterior) }}</span>
        </p>
        <button class="btn-add-cart" (click)="agregarAlCarrito()">
          🛒 Agregar
        </button>
      </div>
    </div>
  `,
  styles: [`
    .product-card {
      background: white;
      border-radius: 15px;
      overflow: hidden;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      position: relative;
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    
    .product-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 30px rgba(253, 121, 168, 0.25);
    }
    
    .product-image {
      width: 100%;
      height: 180px;
      object-fit: cover;
      background: linear-gradient(135deg, #ffccd5 0%, #ffeff5 100%);
    }
    
    .product-info {
      padding: 0.8rem;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
    }
    
    .product-name {
      font-family: 'Inter', -apple-system, sans-serif;
      font-size: 1rem;
      font-weight: 600;
      color: var(--text-dark);
      margin-bottom: 0.3rem;
      letter-spacing: -0.01em;
    }
    
    .product-desc {
      font-size: 0.75rem;
      color: var(--text-light);
      margin-bottom: 0.4rem;
    }
    
    .product-price {
      font-size: 1.1rem;
      font-weight: 600;
      color: var(--rose-primary);
      margin-bottom: 0.5rem;
    }
    
    .btn-add-cart {
      width: 100%;
      padding: 0.75rem;
      background: var(--rose-primary);
      color: white;
      border: none;
      border-radius: 10px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s ease;
      font-size: 0.9rem;
      margin-top: auto;
    }

    .btn-add-cart:hover {
      background: var(--rose-dark);
      transform: translateY(-2px);
      box-shadow: 0 4px 15px rgba(233, 30, 99, 0.3);
    }
    
    .product-price span {
      font-size: 0.7rem;
      color: var(--text-light);
      text-decoration: line-through;
      margin-left: 0.3rem;
    }
    
    .badge {
      position: absolute;
      top: 12px;
      right: 12px;
      background: var(--rose-primary);
      color: white;
      padding: 0.3rem 0.75rem;
      border-radius: 20px;
      font-size: 0.7rem;
      font-weight: 600;
      box-shadow: 0 2px 8px rgba(233, 30, 99, 0.3);
    }
  `]
})
export class ProductCardComponent {
  @Input() producto!: Producto;
  private carritoService = inject(CarritoService);
  
  formatPrice(precio: number): string {
    return '$' + precio.toLocaleString('es-CL');
  }
  
  agregarAlCarrito() {
    this.carritoService.agregarAlCarrito(this.producto);
  }
}
