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
      background: var(--lila-light);
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
      font-family: 'Overpass', sans-serif;
      text-transform: uppercase;
      font-size: 0.95rem;
      font-weight: 700;
      color: var(--text-dark);
      margin-bottom: 0.5rem;
      letter-spacing: 0.15em;
      line-height: 1.4;
    }
    
    .product-desc {
      font-family: 'Overpass', sans-serif;
      text-transform: uppercase;
      font-size: 0.7rem;
      color: var(--text-light);
      margin-bottom: 0.6rem;
      letter-spacing: 0.1em;
    }
    
    .product-price {
      font-family: 'Overpass', sans-serif;
      font-size: 1.2rem;
      font-weight: 700;
      color: var(--rose-primary);
      margin-bottom: 0.8rem;
      letter-spacing: 0.05em;
    }
    
    .btn-add-cart {
      width: 100%;
      padding: 0.85rem;
      background: var(--rose-primary);
      color: white;
      border: none;
      border-radius: 10px;
      font-family: 'Overpass', sans-serif;
      text-transform: uppercase;
      font-weight: 700;
      letter-spacing: 0.15em;
      cursor: pointer;
      transition: all 0.2s ease;
      font-size: 0.85rem;
      margin-top: auto;
    }

    .btn-add-cart:hover {
      background: var(--rose-dark);
      transform: translateY(-2px);
      box-shadow: 0 4px 15px rgba(233, 30, 99, 0.3);
    }
    
    .product-price span {
      font-size: 0.8rem;
      color: var(--text-light);
      text-decoration: line-through;
      margin-left: 0.5rem;
    }
    
    .badge {
      position: absolute;
      top: 12px;
      right: 12px;
      background: var(--rose-primary);
      color: white;
      padding: 0.4rem 0.8rem;
      border-radius: 20px;
      font-family: 'Overpass', sans-serif;
      text-transform: uppercase;
      font-size: 0.65rem;
      font-weight: 700;
      letter-spacing: 0.15em;
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
