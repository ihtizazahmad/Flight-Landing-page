import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-destinations',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="destinations">
      <div class="container">
        <div class="section-header">
          <h2>Explore The World With Us</h2>
          <p>Choose from over 1 million destinations around the globe. Discover new places
            and experience the world like never before.</p>
          <div class="divider-line"></div>
        </div>

        <div class="destinations-grid">
          @for (dest of destinationsList; track dest.name) {
            <div class="dest-card" (click)="selectDest(dest)">
              <div class="dest-image">
                <img [src]="dest.image" [alt]="dest.name" (error)="onImgError($event, dest)">
                <div class="city-name">{{ dest.name }}</div>
                <div class="price-economy">
                  <span class="price-label">Economy From</span>
                  <span class="price-val">USD {{ dest.economy }}</span>
                </div>
                <div class="price-business">
                  <span class="price-label">Business from</span>
                  <span class="price-val">USD {{ dest.business }}</span>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .destinations {
      background: #f0f4f8;
      padding: 80px 0 70px;
    }

    .section-header {
      text-align: center;
      margin-bottom: 50px;
    }

    .section-header h2 {
      font-size: 30px;
      font-weight: 700;
      color: #1a1a1a;
      margin-bottom: 14px;
    }

    .section-header p {
      color: #888;
      font-size: 14px;
      max-width: 560px;
      margin: 0 auto 18px;
      line-height: 1.7;
    }

    .divider-line {
      width: 50px;
      height: 3px;
      background: #003580;
      margin: 0 auto;
      border-radius: 2px;
    }

    .destinations-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
    }

    .dest-card {
      border-radius: 12px;
      overflow: hidden;
      cursor: pointer;
      border: 2px solid #a8c8f0;
      background: white;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .dest-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 30px rgba(0, 53, 128, 0.18);
    }

    .dest-image {
      position: relative;
      height: 220px;
      display: block;
    }

    .dest-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .city-name {
      position: absolute;
      top: 14px;
      left: 14px;
      color: white;
      font-size: 18px;
      font-weight: 700;
      text-shadow: 0 1px 6px rgba(0, 0, 0, 0.6);
      letter-spacing: 0.3px;
    }

    .price-economy {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 14px;
      background: #2a2f3e;
    }

    .price-business {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 14px;
      background: #003580;
    }

    .price-label {
      font-size: 13px;
      color: rgba(255, 255, 255, 0.85);
      font-weight: 400;
    }

    .price-val {
      font-size: 13px;
      font-weight: 700;
      color: #ffffff;
    }

    @media (max-width: 1100px) {
      .destinations-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 640px) {
      .destinations {
        padding: 50px 0;
      }
      .destinations-grid {
        grid-template-columns: 1fr;
      }
      .dest-image {
        height: 240px;
      }
    }
  `]
})
export class DestinationsComponent {
  destinationsList = [
    {
      name: 'Milan',
      image: 'https://images.unsplash.com/photo-1513581166391-887a96ddeafd?w=600&q=80',
      economy: '260.00',
      business: '360.00'
    },
    {
      name: 'Paris',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80',
      economy: '260.00',
      business: '360.00'
    },
    {
      name: 'Rome',
      image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&q=80',
      economy: '260.00',
      business: '360.00'
    },
    {
      name: 'Frankfurt',
      image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&q=80',
      economy: '260.00',
      business: '360.00'
    }
  ];

  selectDest(dest: any) {
  }

  onImgError(event: Event, dest: any) {
    const fallbacks: Record<string, string> = {
      Milan: 'https://images.unsplash.com/photo-1513581166391-887a96ddeafd?w=600&q=80',
      Paris: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80',
      Rome: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&q=80',
      Frankfurt: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&q=80'
    };
    const img = event.target as HTMLImageElement;
    if (fallbacks[dest.name]) img.src = fallbacks[dest.name];
  }
}
