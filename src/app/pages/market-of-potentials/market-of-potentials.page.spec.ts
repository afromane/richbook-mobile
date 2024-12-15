import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MarketOfPotentialsPage } from './market-of-potentials.page';

describe('MarketOfPotentialsPage', () => {
  let component: MarketOfPotentialsPage;
  let fixture: ComponentFixture<MarketOfPotentialsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketOfPotentialsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
