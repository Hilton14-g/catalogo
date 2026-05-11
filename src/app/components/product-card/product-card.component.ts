import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    }
    
    .product-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 30px rgba(253, 121, 168, 0.25);
    }
    
    .product-image {
      width: 100%;
      height: 160px;
      object-fit: cover;
      background: linear-gradient(135deg, #ffccd5 0%, #ffeff5 100%);
    }
    
    .product-info {
      padding: 0.8rem;
    }
    
    .product-name {
      font-family: 'Playfair Display', serif;
      font-size: 0.9rem;
      color: var(--text-dark);
      margin-bottom: 0.2rem;
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
    }
    
    .product-price span {
      font-size: 0.7rem;
      color: var(--text-light);
      text-decoration: line-through;
      margin-left: 0.3rem;
    }
    
    .badge {
      position: absolute;
      top: 8px;
      right: 8px;
      background: linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%);
      color: var(--text-dark);
      padding: 0.2rem 0.5rem;
      border-radius: 12px;
      font-size: 0.65rem;
      font-weight: 600;
      box-shadow: 0 2px 8px rgba(253, 203, 110, 0.4);
    }
  `]
})
export class ProductCardComponent {
  @Input() producto!: Producto;
  
  formatPrice(precio: number): string {
    return '$' + precio.toLocaleString('es-CL');
  }
}
