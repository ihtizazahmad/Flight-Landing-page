import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="partners container">
      <div class="partners-header">
        <h3>Most Booked Flight</h3>
        <div class="divider-line"></div>
      </div>
      
      <div class="partners-grid">
        @for (logo of logos; track logo.name) {
          <div class="partner-card">
            <img 
              [src]="logo.url" 
              [alt]="logo.name"
              (error)="onImgError($event, logo)"
            >
          </div>
        }
      </div>

      <div class="dots">
        <span class="dot"></span>
        <span class="dot active"></span>
        <span class="dot"></span>
      </div>
    </section>
  `,
  styles: [`
    .partners {
      padding: 80px 0;
    }

    .partners-header {
      text-align: center;
      margin-bottom: 40px;
    }

    .partners-header h3 {
      font-size: 24px;
      font-weight: 700;
      color: #1a1a1a;
      margin-bottom: 10px;
    }

    .divider-line {
      width: 50px;
      height: 3px;
      background: #003580;
      margin: 0 auto;
    }

    .partners-grid {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 16px;
      flex-wrap: wrap;
    }

    .partner-card {
      background: white;
      border: 1px solid #e8e8e8;
      border-radius: 8px;
      width: 140px;
      height: 70px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 12px 16px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
      transition: var(--transition);
      overflow: hidden;
    }

    .partner-card:hover {
      box-shadow: 0 6px 20px rgba(0,0,0,0.08);
      border-color: #d0d0d0;
      transform: translateY(-2px);
    }

    .partner-card img {
      max-width: 100%;
      max-height: 100%;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .dots {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      margin-top: 40px;
    }

    .dot {
      width: 6px;
      height: 6px;
      background: #ccc;
      border-radius: 50%;
    }

    .dot.active {
      background: #003580;
      width: 25px;
      height: 6px;
      border-radius: 10px;
    }

    @media (max-width: 768px) {
      .partners {
        padding: 50px 0;
      }
      .partner-card {
        width: 110px;
        height: 60px;
      }
    }

    @media (max-width: 480px) {
      .partner-card {
        width: calc(50% - 10px);
      }
    }
  `]
})
export class PartnersComponent {
  logos = [
    {
      name: 'Flyadeal',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Flyadeal_logo.svg/320px-Flyadeal_logo.svg.png',
      fallbacks: [
        'https://www.gstatic.com/flights/airline_logos/70px/XY.png'
      ]
    },
    {
      name: 'Qatar Airways',
      url: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/320px-Qatar_Airways_Logo.svg.png',
      fallbacks: [
        'https://www.gstatic.com/flights/airline_logos/70px/QR.png'
      ]
    },
    {
      name: 'Emirates',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Emirates_logo.svg/320px-Emirates_logo.svg.png',
      fallbacks: [
        'https://www.gstatic.com/flights/airline_logos/70px/EK.png'
      ]
    },
    {
      name: 'Etihad Airways',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Etihad_Airways_logo.svg/320px-Etihad_Airways_logo.svg.png',
      fallbacks: [
        'https://www.gstatic.com/flights/airline_logos/70px/EY.png'
      ]
    },
    {
      name: 'Turkish Airlines',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Turkish_Airlines_logo_2019.svg/320px-Turkish_Airlines_logo_2019.svg.png',
      fallbacks: [
        'https://www.gstatic.com/flights/airline_logos/70px/TK.png'
      ]
    },
    {
      name: 'Air Arabia',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Air_Arabia_Logo.svg/320px-Air_Arabia_Logo.svg.png',
      fallbacks: [
        'https://www.gstatic.com/flights/airline_logos/70px/G9.png'
      ]
    },
    {
      name: 'Flydubai',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Flydubai_logo.svg/320px-Flydubai_logo.svg.png',
      fallbacks: [
        'https://www.gstatic.com/flights/airline_logos/70px/FZ.png'
      ]
    }
  ];

  onImgError(event: Event, logo: any) {
    const img = event.target as HTMLImageElement;
    if (!logo._fallbackIndex) {
      logo._fallbackIndex = 0;
    }
    if (logo.fallbacks && logo._fallbackIndex < logo.fallbacks.length) {
      img.src = logo.fallbacks[logo._fallbackIndex];
      logo._fallbackIndex++;
    }
  }
}
