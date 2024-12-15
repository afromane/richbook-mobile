import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MarketOfNeedsPage } from './market-of-needs.page';

describe('MarketOfNeedsPage', () => {
  let component: MarketOfNeedsPage;
  let fixture: ComponentFixture<MarketOfNeedsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketOfNeedsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
