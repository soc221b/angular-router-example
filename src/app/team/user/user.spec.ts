import { TestBed } from '@angular/core/testing';

import { User } from './user';
import { inputBinding } from '@angular/core';

describe('User', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [User],
    }).compileComponents();
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(User, {
      bindings: [inputBinding('userId', () => 123)],
    });
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('User 123');
  });
});
