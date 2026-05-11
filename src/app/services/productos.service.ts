import { Injectable } from '@angular/core';
import { Producto } from '../components/product-card/product-card.component';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  
  private productos: Producto[] = [
    {
      id: 1,
      nombre: 'Caja Premium 6 Rosas',
      descripcion: 'Caja negra con terciopelo',
      precio: 14900,
      imagen: 'https://images.unsplash.com/photo-1546039907-7fa05f864c02?w=400',
      badge: 'POPULAR'
    },
    {
      id: 2,
      nombre: 'Cúpula de Cristal',
      descripcion: 'Rosa única con luz LED',
      precio: 12900,
      imagen: 'https://images.unsplash.com/photo-1591886960571-74d43a9d4166?w=400'
    },
    {
      id: 3,
      nombre: 'Ramo 12 Rosas',
      descripcion: 'Mix de colores en caja',
      precio: 24900,
      precioAnterior: 29900,
      imagen: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400',
      badge: 'OFERTA'
    },
    {
      id: 4,
      nombre: 'Deluxe 24 Rosas',
      descripcion: 'Caja premium grande',
      precio: 44900,
      imagen: 'https://images.unsplash.com/photo-1562690868-60bbe7293e94?w=400'
    },
    {
      id: 5,
      nombre: 'Corazón de Rosas',
      descripcion: 'Arreglo en forma de corazón',
      precio: 18900,
      imagen: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=400'
    },
    {
      id: 6,
      nombre: 'Pureza Blanca',
      descripcion: '6 rosas blancas en caja',
      precio: 15900,
      imagen: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400'
    }
  ];

  private ocasiones = {
    mama: [
      {
        id: 101,
        nombre: 'Caja Premium Mamá',
        descripcion: '6 rosas eternas en caja de terciopelo',
        precio: 14900,
        precioAnterior: 19900,
        imagen: 'https://images.unsplash.com/photo-1546039907-7fa05f864c02?w=400',
        badge: 'POPULAR'
      },
      {
        id: 102,
        nombre: 'Rosa Única Gold',
        descripcion: 'Rosa dorada en cúpula de cristal',
        precio: 8900,
        imagen: 'https://images.unsplash.com/photo-1591886960571-74d43a9d4166?w=400'
      },
      {
        id: 103,
        nombre: 'Ramo Agradecimiento',
        descripcion: '12 rosas eternas mix de colores',
        precio: 22900,
        precioAnterior: 27900,
        imagen: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400'
      },
      {
        id: 104,
        nombre: 'Corazón de Mamá',
        descripcion: 'Arreglo en forma de corazón',
        precio: 18900,
        imagen: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=400'
      }
    ],
    cumple: [
      {
        id: 201,
        nombre: 'Caja Sorpresa',
        descripcion: '9 rosas + tarjeta personalizada',
        precio: 16900,
        precioAnterior: 21900,
        imagen: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=400',
        badge: 'OFERTA'
      },
      {
        id: 202,
        nombre: 'Arcoíris de Rosas',
        descripcion: '7 rosas de colores vibrantes',
        precio: 19900,
        imagen: 'https://images.unsplash.com/photo-1494972308805-463bc619d34e?w=400'
      },
      {
        id: 203,
        nombre: 'Luxury Birthday',
        descripcion: 'Caja negra con 12 rosas rojas',
        precio: 25900,
        imagen: 'https://images.unsplash.com/photo-1582794543139-8ac92a900275?w=400'
      },
      {
        id: 204,
        nombre: 'Deseo Especial',
        descripcion: '3 rosas con base iluminada',
        precio: 12900,
        imagen: 'https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=400'
      }
    ],
    aniversario: [
      {
        id: 301,
        nombre: 'Amor Eterno Deluxe',
        descripcion: '24 rosas rojas en caja premium',
        precio: 39900,
        precioAnterior: 49900,
        imagen: 'https://images.unsplash.com/photo-1562690868-60bbe7293e94?w=400',
        badge: 'EXCLUSIVO'
      },
      {
        id: 302,
        nombre: 'Pureza de Amor',
        descripcion: '12 rosas blancas eternas',
        precio: 22900,
        imagen: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400'
      },
      {
        id: 303,
        nombre: 'Champagne Love',
        descripcion: 'Rosas champagne en caja elegante',
        precio: 34900,
        imagen: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=400'
      },
      {
        id: 304,
        nombre: 'Mi Corazón Es Tuyo',
        descripcion: 'Arreglo corazón + joyero',
        precio: 27900,
        imagen: 'https://images.unsplash.com/photo-1518882605630-8eb565f5e673?w=400'
      }
    ],
    amor: [
      {
        id: 401,
        nombre: 'Corazón Rojo Pasión',
        descripcion: '18 rosas rojas en corazón',
        precio: 32900,
        imagen: 'https://images.unsplash.com/photo-1518621736915-f3b1c41bfd08?w=400',
        badge: 'LIMITADO'
      },
      {
        id: 402,
        nombre: 'Caja Te Amo',
        descripcion: '9 rosas rojas con mensaje',
        precio: 19900,
        imagen: 'https://images.unsplash.com/photo-1546039907-7fa05f864c02?w=400'
      },
      {
        id: 403,
        nombre: 'Cúpula de Enamorados',
        descripcion: '2 rosas eternas juntas',
        precio: 15900,
        imagen: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=400'
      },
      {
        id: 404,
        nombre: 'Sorpresa Romántica',
        descripcion: 'Rosa + chocolates + vino',
        precio: 29900,
        imagen: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=400',
        badge: 'NUEVO'
      }
    ]
  };

  getProductos(): Producto[] {
    return this.productos;
  }

  getProductosPorOcasion(ocasion: 'mama' | 'cumple' | 'aniversario' | 'amor'): Producto[] {
    return this.ocasiones[ocasion] || [];
  }
}
