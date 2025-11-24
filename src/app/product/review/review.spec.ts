import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Review } from './review';

describe('Review', () => {
  let component: Review;
  let fixture: ComponentFixture<Review>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Review],
    }).compileComponents();

    fixture = TestBed.createComponent(Review);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(Review);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Review');
  });
});
