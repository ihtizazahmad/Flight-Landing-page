import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-special-offers',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="special-offers container">
      <div class="offers-top-row">
        <div class="offers-title-block">
          <h2>Special Offers</h2>
          <div class="title-underline"></div>
        </div>
        <div class="offer-nav">
          <button class="nav-btn"><i class="fa-solid fa-chevron-left"></i></button>
          <button class="nav-btn"><i class="fa-solid fa-chevron-right"></i></button>
        </div>
      </div>

      <div class="offers-grid">
        @for (offer of offers; track offer.from; let i = $index) {
          <div class="offer-card" [class.featured]="offer.featured">
            <div class="offer-image">
              <img [src]="offer.image" [alt]="offer.from + ' to ' + offer.to" (error)="onImgError($event, offer)">
            </div>
            <div class="offer-content" [class.featured-content]="offer.featured">
              <h3 class="route-title">
                <span class="route-from">{{offer.from}}</span>
                <span class="route-arrow" [class.featured-text]="offer.featured"> to </span>
                <span class="route-to">{{offer.to}}</span>
              </h3>
              <div class="price-block">
                <span class="from-label" [class.featured-text]="offer.featured">From</span>
                <div class="price-value" [class.featured-price]="offer.featured">{{offer.price}}</div>
                <div class="price-note" [class.featured-text]="offer.featured">One-way / Basic Fare</div>
              </div>
              <button class="booking-btn" [class.booking-btn-featured]="offer.featured">BOOKING HERE</button>
            </div>
          </div>
        }
      </div>
    </section>
  `,
  styles: [`
    .special-offers {
      padding: 80px 0;
    }

    .offers-top-row {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 40px;
    }

    .offers-title-block h2 {
      font-size: 26px;
      font-weight: 700;
      color: #1a1a1a;
      margin-bottom: 10px;
    }

    .title-underline {
      width: 50px;
      height: 3px;
      background: #003580;
      border-radius: 2px;
    }

    .offer-nav {
      display: flex;
      gap: 10px;
      margin-top: 4px;
    }

    .nav-btn {
      width: 38px;
      height: 38px;
      border: 1.5px solid #ccc;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #666;
      font-size: 13px;
      background: white;
      transition: all 0.2s ease;
      cursor: pointer;
    }

    .nav-btn:hover {
      border-color: #003580;
      color: #003580;
    }

    .offers-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
    }

    .offer-card {
      background: white;
      border-radius: 12px;
      overflow: hidden;
      border: 1px solid #eee;
      transition: all 0.3s ease;
      display: flex;
      flex-direction: column;
    }

    .offer-card:hover {
      box-shadow: 0 8px 30px rgba(0,0,0,0.12);
      transform: translateY(-4px);
    }

    .offer-card.featured {
      background: #1a3a6b;
      border-color: #1a3a6b;
    }

    .offer-image {
      height: 190px;
      overflow: hidden;
    }

    .offer-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .offer-card:hover .offer-image img {
      transform: scale(1.05);
    }

    .offer-content {
      padding: 18px;
      display: flex;
      flex-direction: column;
      flex: 1;
    }

    .route-title {
      font-size: 15px;
      font-weight: 400;
      color: #1a1a1a;
      margin-bottom: 14px;
      line-height: 1.4;
    }

    .route-from {
      font-weight: 700;
    }

    .route-arrow {
      font-weight: 400;
      color: #555;
    }

    .route-to {
      font-weight: 700;
    }

    .featured-content .route-title {
      color: white;
    }

    .featured-content .route-arrow {
      color: rgba(255,255,255,0.75);
    }

    .price-block {
      margin-bottom: 16px;
      flex: 1;
    }

    .from-label {
      font-size: 11px;
      color: #888;
      display: block;
      margin-bottom: 2px;
    }

    .featured-text {
      color: rgba(255,255,255,0.75) !important;
    }

    .price-value {
      font-size: 22px;
      font-weight: 700;
      color: #006ce4;
      display: block;
    }

    .featured-price {
      color: #fff !important;
    }

    .price-note {
      font-size: 11px;
      color: #999;
      margin-top: 2px;
    }

    .booking-btn {
      width: 100%;
      padding: 10px 0;
      border: 1.5px solid #003580;
      color: #003580;
      background: transparent;
      border-radius: 6px;
      font-weight: 600;
      font-size: 13px;
      letter-spacing: 0.5px;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .booking-btn:hover {
      background: #003580;
      color: white;
    }

    .booking-btn-featured {
      background: #003580 !important;
      color: white !important;
      border-color: #003580;
    }

    .booking-btn-featured:hover {
      background: #001f4d !important;
    }

    @media (max-width: 1100px) {
      .offers-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 768px) {
      .special-offers {
        padding: 50px 0;
      }
      .offers-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;
      }
      .offers-top-row {
        margin-bottom: 25px;
      }
    }

    @media (max-width: 480px) {
      .offers-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class SpecialOffersComponent {
  offers = [
    {
      from: 'Arequipa',
      to: 'Lima',
      price: '$291.87',
      featured: false,
      image: 'https://images.unsplash.com/photo-1531968455001-5c5272a41129?auto=format&fit=crop&w=500&q=80',
      fallbacks: ['https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=500&q=80']
    },
    {
      from: 'Piura (PIU)',
      to: 'Lima (LIM)',
      price: '$291.87',
      featured: false,
      image: 'https://images.unsplash.com/photo-1555952517-2e8e729e0b44?auto=format&fit=crop&w=500&q=80',
      fallbacks: ['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=500&q=80']
    },
    {
      from: 'Calama (CJC)',
      to: 'Santiago (SCL)',
      price: '$291.87',
      featured: false,
      image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=500&q=80',
      fallbacks: ['https://images.unsplash.com/photo-1499092346302-b8d7a599b894?auto=format&fit=crop&w=500&q=80']
    },
    {
      from: 'Santiago (SCL)',
      to: 'Puerto Montt (PMC)',
      price: '$291.87',
      featured: false,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=500&q=80',
      fallbacks: ['https://images.unsplash.com/photo-1508193638397-1c4234db14d8?auto=format&fit=crop&w=500&q=80']
    }
  ];

  onImgError(event: Event, offer: any) {
    const img = event.target as HTMLImageElement;
    if (!offer._fallbackIndex) offer._fallbackIndex = 0;
    if (offer.fallbacks && offer._fallbackIndex < offer.fallbacks.length) {
      img.src = offer.fallbacks[offer._fallbackIndex];
      offer._fallbackIndex++;
    }
  }
}
