import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoService, CarritoItem } from '../../services/carrito.service';

@Component({
  selector: 'app-carrito-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="modal-overlay" [class.active]="isOpen()" (click)="cerrar()">
      <div class="modal-content" (click)="$event.stopPropagation()">
        <div class="modal-header">
          <h2>🛒 Tu Carrito</h2>
          <button class="btn-close" (click)="cerrar()">✕</button>
        </div>
        
        <div class="modal-body">
          <div *ngIf="items().length === 0" class="empty-cart">
            <p>Tu carrito está vacío</p>
          </div>
          
          <div *ngFor="let item of items()" class="cart-item">
            <img [src]="item.imagen" [alt]="item.nombre" class="item-image">
            <div class="item-info">
              <h4>{{ item.nombre }}</h4>
              <p class="item-price">{{ formatPrice(item.precio) }}</p>
              <div class="item-controls">
                <button class="btn-qty" (click)="decrementar(item.id)">-</button>
                <span>{{ item.cantidad }}</span>
                <button class="btn-qty" (click)="incrementar(item.id)">+</button>
                <button class="btn-remove" (click)="eliminar(item.id)">🗑️</button>
              </div>
            </div>
          </div>
        </div>
        
        <div class="modal-footer" *ngIf="items().length > 0">
          <div class="total">
            <span>Total:</span>
            <span class="total-amount">{{ formatPrice(getTotal()) }}</span>
          </div>
          <button class="btn-whatsapp" (click)="enviarWhatsApp()">
            💬 Pedir por WhatsApp
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,0.5);
      display: flex;
      align-items: flex-end;
      justify-content: center;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
      z-index: 2000;
    }
    
    .modal-overlay.active {
      opacity: 1;
      visibility: visible;
    }
    
    .modal-content {
      background: white;
      width: 100%;
      max-width: 500px;
      max-height: 80vh;
      border-radius: 20px 20px 0 0;
      display: flex;
      flex-direction: column;
      transform: translateY(100%);
      transition: transform 0.3s ease;
    }
    
    .modal-overlay.active .modal-content {
      transform: translateY(0);
    }
    
    .modal-header {
      padding: 1.5rem;
      border-bottom: 1px solid #eee;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .modal-header h2 {
      font-family: 'Playfair Display', serif;
      color: var(--rose-dark);
      margin: 0;
    }
    
    .btn-close {
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      color: var(--text-light);
    }
    
    .modal-body {
      padding: 1rem;
      overflow-y: auto;
      flex-grow: 1;
    }
    
    .empty-cart {
      text-align: center;
      padding: 2rem;
      color: var(--text-light);
    }
    
    .cart-item {
      display: flex;
      gap: 1rem;
      padding: 1rem;
      background: var(--bg-soft);
      border-radius: 12px;
      margin-bottom: 0.8rem;
    }
    
    .item-image {
      width: 70px;
      height: 70px;
      object-fit: cover;
      border-radius: 8px;
    }
    
    .item-info {
      flex-grow: 1;
    }
    
    .item-info h4 {
      margin: 0 0 0.3rem 0;
      font-size: 0.9rem;
      color: var(--text-dark);
    }
    
    .item-price {
      margin: 0 0 0.5rem 0;
      color: var(--rose-primary);
      font-weight: 600;
      font-size: 0.95rem;
    }
    
    .item-controls {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    
    .btn-qty {
      width: 28px;
      height: 28px;
      border: 1px solid var(--rose-primary);
      background: white;
      color: var(--rose-primary);
      border-radius: 6px;
      cursor: pointer;
      font-weight: 600;
    }
    
    .btn-qty:hover {
      background: var(--rose-primary);
      color: white;
    }
    
    .btn-remove {
      margin-left: auto;
      background: none;
      border: none;
      cursor: pointer;
      font-size: 1rem;
    }
    
    .modal-footer {
      padding: 1.5rem;
      border-top: 1px solid #eee;
    }
    
    .total {
      display: flex;
      justify-content: space-between;
      font-size: 1.2rem;
      font-weight: 600;
      margin-bottom: 1rem;
      color: var(--text-dark);
    }
    
    .total-amount {
      color: var(--rose-primary);
    }
    
    .btn-whatsapp {
      width: 100%;
      padding: 1rem;
      background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
      color: white;
      border: none;
      border-radius: 12px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: transform 0.3s ease;
    }
    
    .btn-whatsapp:hover {
      transform: scale(1.02);
    }
    
    @media (min-width: 768px) {
      .modal-overlay {
        align-items: center;
      }
      
      .modal-content {
        border-radius: 20px;
        transform: scale(0.9);
      }
      
      .modal-overlay.active .modal-content {
        transform: scale(1);
      }
    }
  `]
})
export class CarritoModalComponent {
  private carritoService = inject(CarritoService);
  isOpen = signal(false);
  items = this.carritoService.items;
  
  abrir() {
    this.isOpen.set(true);
    document.body.style.overflow = 'hidden';
  }
  
  cerrar() {
    this.isOpen.set(false);
    document.body.style.overflow = '';
  }
  
  incrementar(id: number) {
    const item = this.items().find(i => i.id === id);
    if (item) {
      this.carritoService.actualizarCantidad(id, item.cantidad + 1);
    }
  }
  
  decrementar(id: number) {
    const item = this.items().find(i => i.id === id);
    if (item) {
      this.carritoService.actualizarCantidad(id, item.cantidad - 1);
    }
  }
  
  eliminar(id: number) {
    this.carritoService.eliminarDelCarrito(id);
  }
  
  getTotal() {
    return this.carritoService.getTotal();
  }
  
  formatPrice(precio: number): string {
    return '$' + precio.toLocaleString('es-CL');
  }
  
  enviarWhatsApp() {
    const items = this.items();
    if (items.length === 0) return;
    
    let mensaje = ' *Hola, deseo hacer el siguiente pedido:*%0A%0A';
    items.forEach((item, index) => {
      mensaje += `▫ ${item.nombre} (x${item.cantidad})%0A`;
    });
    
    const telefono = '51983836445';
    const url = `https://wa.me/${telefono}?text=${mensaje}`;
    window.open(url, '_blank');
    
    this.cerrar();
    this.carritoService.vaciarCarrito();
  }
}
