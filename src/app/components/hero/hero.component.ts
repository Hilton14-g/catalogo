import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="hero">
      <div class="hero-content">
        <h2>Rosas que Perduran</h2>
        <p>El regalo perfecto para momentos inolvidables</p>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), 
                  url('https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=800') center/cover;
      height: 50vh;
      min-height: 350px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      color: white;
      padding: 2rem;
      margin-top: 60px;
    }
    
    .hero-content h2 {
      font-family: 'Playfair Display', serif;
      font-size: 2rem;
      margin-bottom: 1rem;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
    }
    
    .hero-content p {
      font-size: 1rem;
      opacity: 0.95;
    }
    
    @media (min-width: 768px) {
      .hero-content h2 {
        font-size: 2.5rem;
      }
    }
  `]
})
export class HeroComponent {}
