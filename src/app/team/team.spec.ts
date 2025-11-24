import { TestBed } from '@angular/core/testing';

import { Team } from './team';
import { inputBinding } from '@angular/core';

describe('Team', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Team],
    }).compileComponents();
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(Team, {
      bindings: [inputBinding('teamId', () => 123)],
    });
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Team 123');
  });
});
