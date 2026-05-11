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
      background: var(--bg-lila);
      color: var(--rose-primary);
      text-align: center;
      padding: 8rem 2rem 3rem;
      margin-top: 0;
      border-bottom: 1px solid var(--border-light);
    }

    .hero-small h1 {
      font-family: 'Yellowtail', cursive;
      font-size: 3.5rem;
      font-weight: 400;
      margin-bottom: 0.5rem;
      letter-spacing: normal;
    }

    .hero-small p {
      color: var(--text-light);
      font-size: 1.1rem;
      font-family: 'Overpass', sans-serif;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      font-weight: 600;
    }

    .occasion-nav {
      display: flex;
      overflow-x: auto;
      background: var(--bg-lila);
      padding: 1.5rem 2rem;
      gap: 0.75rem;
      justify-content: center;
      border-bottom: 1px solid var(--border-light);
      scrollbar-width: none;
    }

    .occasion-nav::-webkit-scrollbar {
      display: none;
    }

    .occasion-btn {
      flex-shrink: 0;
      padding: 0.9rem 1.5rem;
      border: 2px solid var(--border-light);
      background: var(--lila-light);
      color: var(--text-light);
      border-radius: 12px;
      font-size: 0.9rem;
      font-weight: 600;
      font-family: 'Overpass', sans-serif;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      cursor: pointer;
      transition: all 0.2s ease;
      white-space: nowrap;
    }

    .occasion-btn:hover {
      border-color: var(--rose-light);
      color: var(--rose-primary);
    }

    .occasion-btn.active {
      background: var(--rose-primary);
      color: white;
      border-color: var(--rose-primary);
      box-shadow: 0 4px 15px rgba(233, 30, 99, 0.25);
    }

    .content {
      padding: 3rem 2rem;
      background: var(--bg-lila);
      min-height: 60vh;
    }

    .section-header {
      text-align: center;
      margin-bottom: 2.5rem;
    }

    .section-icon {
      font-size: 3rem;
      margin-bottom: 0.75rem;
    }

    .section-header h2 {
      font-family: 'Yellowtail', cursive;
      color: var(--rose-primary);
      font-size: 3.5rem;
      font-weight: 400;
      margin-bottom: 0.5rem;
      letter-spacing: normal;
    }

    .subtitle {
      color: var(--text-light);
      font-size: 1rem;
      font-family: 'Overpass', sans-serif;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      font-weight: 600;
    }

    .product-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1.5rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    @media (min-width: 768px) {
      .product-grid {
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 2rem;
      }
    }

    @media (min-width: 1024px) {
      .product-grid {
        grid-template-columns: repeat(4, minmax(0, 1fr));
      }
    }

    @media (max-width: 480px) {
      .hero-small h1 {
        font-size: 1.8rem;
      }

      .occasion-nav {
        padding: 1rem;
        justify-content: flex-start;
      }

      .content {
        padding: 2rem 1rem;
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
