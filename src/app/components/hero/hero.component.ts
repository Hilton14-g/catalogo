import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="hero">
      <div class="hero-content">
        <span class="hero-tag">✨ Rosas Preservadas</span>
        <h2>Rosas que Perduran para Siempre</h2>
        <p>El regalo perfecto para momentos inolvidables. Belleza eterna, elegancia sin tiempo.</p>
        <button class="hero-cta" routerLink="/ocasiones">Ver Colección</button>
      </div>
      <div class="hero-visual">
        <img src="https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=600" alt="Rosas Eternas">
      </div>
    </section>
  `,
  styles: [`
    .hero {
      background: var(--bg-lila);
      min-height: calc(100vh - 80px);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4rem;
      padding: 6rem 2rem 4rem;
      margin-top: 0;
      max-width: 1400px;
      margin-left: auto;
      margin-right: auto;
    }

    .hero-content {
      flex: 1;
      max-width: 600px;
      text-align: left;
    }

    .hero-tag {
      display: inline-block;
      background: var(--rose-light);
      color: var(--rose-dark);
      padding: 0.5rem 1rem;
      border-radius: 50px;
      font-size: 0.85rem;
      font-weight: 700;
      font-family: 'Overpass', sans-serif;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      margin-bottom: 1.5rem;
    }

    .hero-content h2 {
      font-size: 3rem;
      font-weight: 700;
      font-family: 'Overpass', sans-serif;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--rose-primary);
      line-height: 1.2;
      margin-bottom: 1.5rem;
    }

    .hero-content p {
      font-size: 1.25rem;
      color: var(--text-light);
      line-height: 1.7;
      margin-bottom: 2rem;
      font-family: 'Overpass', sans-serif;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      font-weight: 600;
    }

    .hero-cta {
      background: var(--rose-primary);
      color: white;
      border: none;
      padding: 1rem 2.5rem;
      border-radius: 12px;
      font-size: 0.95rem;
      font-weight: 700;
      font-family: 'Overpass', sans-serif;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      cursor: pointer;
      transition: all 0.2s ease;
      box-shadow: 0 4px 15px rgba(233, 30, 99, 0.3);
    }

    .hero-cta:hover {
      background: var(--rose-dark);
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(233, 30, 99, 0.4);
    }

    .hero-visual {
      flex: 0 0 450px;
      position: relative;
    }

    .hero-visual img {
      width: 100%;
      height: 450px;
      object-fit: cover;
      border-radius: 24px;
      box-shadow: var(--shadow-lg);
    }

    .hero-visual::before {
      content: '';
      position: absolute;
      top: -20px;
      left: -20px;
      right: 20px;
      bottom: 20px;
      background: linear-gradient(135deg, var(--rose-light) 0%, transparent 100%);
      border-radius: 24px;
      z-index: -1;
      opacity: 0.5;
    }

    @media (max-width: 968px) {
      .hero {
        flex-direction: column;
        text-align: center;
        padding: 8rem 2rem 4rem;
        gap: 2rem;
      }

      .hero-content {
        text-align: center;
      }

      .hero-content h2 {
        font-size: 2.5rem;
      }

      .hero-visual {
        flex: 0 0 auto;
        width: 100%;
        max-width: 400px;
      }

      .hero-visual img {
        height: 350px;
      }
    }

    @media (max-width: 480px) {
      .hero-content h2 {
        font-size: 2rem;
      }

      .hero-content p {
        font-size: 1rem;
      }
    }
  `]
})
export class HeroComponent {}
