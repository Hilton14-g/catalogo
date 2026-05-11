import { Injectable, signal, computed } from '@angular/core';
import { Producto } from '../components/product-card/product-card.component';

export interface CarritoItem extends Producto {
  cantidad: number;
}

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private carrito = signal<CarritoItem[]>([]);
  
  items = computed(() => this.carrito());
  
  agregarAlCarrito(producto: Producto) {
    const items = this.carrito();
    const existingItem = items.find(item => item.id === producto.id);
    
    if (existingItem) {
      this.carrito.update(items => 
        items.map(item => 
          item.id === producto.id 
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      );
    } else {
      this.carrito.update(items => [...items, { ...producto, cantidad: 1 }]);
    }
  }
  
  eliminarDelCarrito(id: number) {
    this.carrito.update(items => items.filter(item => item.id !== id));
  }
  
  vaciarCarrito() {
    this.carrito.set([]);
  }
  
  actualizarCantidad(id: number, cantidad: number) {
    if (cantidad <= 0) {
      this.eliminarDelCarrito(id);
      return;
    }
    this.carrito.update(items => 
      items.map(item => 
        item.id === id ? { ...item, cantidad } : item
      )
    );
  }
  
  getTotal() {
    return this.carrito().reduce((total, item) => total + (item.precio * item.cantidad), 0);
  }
  
  getTotalItems() {
    return computed(() => this.carrito().reduce((total, item) => total + item.cantidad, 0));
  }
}
