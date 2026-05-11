import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosService } from '../../services/productos.service';
import { ProductCardComponent, Producto } from '../../components/product-card/product-card.component';

type OcasionType = 'mama' | 'cumple' | 'aniversario' | 'amor';

interface Ocasion {
  id: OcasionType;
  nombre: string;
  icono: string;
  subtitulo: string;
}

@Component({
  selector: 'app-ocasiones',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  template: `
    <section class="hero-small">
      <h1>Elige la Ocasión</h1>
      <p>Encuentra el regalo perfecto</p>
    </section>
    
    <!-- Nav de ocasiones -->
    <div class="occasion-nav">
      <button 
        *ngFor="let ocasion of ocasiones" 
        class="occasion-btn"
        [class.active]="ocasionActual() === ocasion.id"
        (click)="cambiarOcasion(ocasion.id)">
        {{ ocasion.icono }} {{ ocasion.nombre }}
      </button>
    </div>
    
    <!-- Contenido de ocasión -->
    <section class="content">
      <div class="section-header">
        <div class="section-icon">{{ ocasionActualData()?.icono }}</div>
        <h2>{{ ocasionActualData()?.nombre }}</h2>
        <p class="subtitle">{{ ocasionActualData()?.subtitulo }}</p>
      </div>
      
      <div class="product-grid">
        <app-product-card 
          *ngFor="let producto of productos" 
          [producto]="producto">
        </app-product-card>
      </div>
    </section>
  `,
  styles: [`
    .hero-small {
      background: linear-gradient(135deg, var(--rose-gradient-start) 0%, var(--rose-gradient-end) 100%);
      color: white;
      text-align: center;
      padding: 4rem 2rem 2rem;
      margin-top: 60px;
    }
    
    .hero-small h1 {
      font-family: 'Playfair Display', serif;
      font-size: 1.8rem;
      margin-bottom: 0.5rem;
    }
    
    .hero-small p {
      opacity: 0.9;
    }
    
    .occasion-nav {
      display: flex;
      overflow-x: auto;
      background: white;
      padding: 1rem 0.5rem;
      gap: 0.5rem;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      scrollbar-width: none;
    }
    
    .occasion-nav::-webkit-scrollbar {
      display: none;
    }
    
    .occasion-btn {
      flex-shrink: 0;
      padding: 0.8rem 1.2rem;
      border: 2px solid var(--rose-primary);
      background: white;
      color: var(--rose-primary);
      border-radius: 25px;
      font-size: 0.85rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
      white-space: nowrap;
    }
    
    .occasion-btn.active {
      background: linear-gradient(135deg, var(--rose-primary) 0%, var(--rose-dark) 100%);
      color: white;
      border-color: transparent;
      box-shadow: 0 4px 15px rgba(253, 121, 168, 0.3);
    }
    
    .content {
      padding: 1.5rem 1rem;
    }
    
    .section-header {
      text-align: center;
      margin-bottom: 1.5rem;
    }
    
    .section-icon {
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
    }
    
    .section-header h2 {
      font-family: 'Playfair Display', serif;
      color: var(--rose-dark);
      font-size: 1.6rem;
      margin-bottom: 0.5rem;
    }
    
    .subtitle {
      color: var(--text-light);
      font-size: 0.9rem;
    }
    
    .product-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
      max-width: 800px;
      margin: 0 auto;
    }
    
    @media (min-width: 768px) {
      .product-grid {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  `]
})
export class OcasionesComponent {
  private productosService = inject(ProductosService);
  ocasionActual = signal<OcasionType>('mama');
  productos: Producto[] = [];
  
  ocasiones: Ocasion[] = [
    { id: 'mama', nombre: 'Día de la Madre', icono: '💝', subtitulo: 'Homenajea a mamá con nuestras rosas eternas' },
    { id: 'cumple', nombre: 'Cumpleaños', icono: '🎂', subtitulo: 'Celebra con el toque eterno del cariño' },
    { id: 'aniversario', nombre: 'Aniversario', icono: '💕', subtitulo: 'Celebrando amor que trasciende el tiempo' },
    { id: 'amor', nombre: 'San Valentín', icono: '💖', subtitulo: 'El regalo más romántico del año' }
  ];
  
  constructor() {
    this.actualizarProductos();
  }
  
  ocasionActualData(): Ocasion | undefined {
    return this.ocasiones.find(o => o.id === this.ocasionActual());
  }
  
  cambiarOcasion(ocasion: OcasionType) {
    this.ocasionActual.set(ocasion);
    this.actualizarProductos();
  }
  
  private actualizarProductos() {
    this.productos = this.productosService.getProductosPorOcasion(this.ocasionActual());
  }
}
