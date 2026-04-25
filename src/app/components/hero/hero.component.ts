import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="hero">
      <div class="hero-overlay"></div>
      <div class="container hero-content animate-fade-in">
        <p class="hero-subtitle">FIND YOUR NEXT STAY</p>
        <h1 class="hero-title">Out On Excursion & <br> Discover The Best Places</h1>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      position: relative;
      height: 85vh;
      min-height: 650px;
      background: url('/assets/images/hero.png') center/cover no-repeat;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      color: white;
    }

    .hero-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.2));
    }

    .hero-content {
      position: relative;
      z-index: 10;
      margin-top: 50px;
    }

    .hero-subtitle {
      font-size: 16px;
      letter-spacing: 6px;
      margin-bottom: 20px;
      font-weight: 600;
      color: var(--text-light);
      text-transform: uppercase;
    }

    .hero-title {
      font-size: 72px;
      line-height: 1.1;
      font-weight: 700;
      font-family: 'Outfit', sans-serif;
    }

    @media (max-width: 768px) {
      .hero-title { font-size: 40px; }
      .hero { min-height: 500px; }
      .hero-content { margin-top: 0; padding: 0 15px; }
    }

    @media (max-width: 480px) {
      .hero-title { font-size: 32px; }
      .hero-subtitle { font-size: 14px; letter-spacing: 4px; }
    }
  `]
})
export class HeroComponent { }
