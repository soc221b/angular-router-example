import { TestBed } from '@angular/core/testing';

import { Product } from './product';
import { inputBinding } from '@angular/core';

describe('Product', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Product],
    }).compileComponents();
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(Product, { bindings: [inputBinding('id', () => 123)] });
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Product 123');
  });
});
