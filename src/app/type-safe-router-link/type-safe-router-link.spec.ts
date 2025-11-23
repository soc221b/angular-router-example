import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TypeSafeRouterLink } from './type-safe-router-link';
import { inputBinding } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { Component } from '@angular/core';

@Component({
  selector: 'basic',
  template: '',
})
class Basic {}
const routeBasic: Route = { title: 'Basic', path: 'basic', component: Basic };

@Component({
  selector: 'with-parameter',
  template: '',
})
class WithParameter {}
const routeWithParameter: Route = {
  title: 'With Parameter',
  path: ':id',
  component: WithParameter,
};

describe('TypeSafeRouterLink', () => {
  let component: TypeSafeRouterLink<Route>;
  let fixture: ComponentFixture<TypeSafeRouterLink<Route>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypeSafeRouterLink, RouterModule.forRoot([routeBasic, routeWithParameter])],
    }).compileComponents();
  });

  it('should render title', async () => {
    fixture = TestBed.createComponent(TypeSafeRouterLink, {
      bindings: [inputBinding('route', () => routeBasic), inputBinding('parameters', () => ({}))],
    });
    component = fixture.componentInstance;
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('a')?.textContent).toContain('Basic');
  });

  it('should render correct path', async () => {
    fixture = TestBed.createComponent(TypeSafeRouterLink, {
      bindings: [inputBinding('route', () => routeBasic), inputBinding('parameters', () => ({}))],
    });
    component = fixture.componentInstance;
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('a')?.href).toContain('basic');
  });

  it('should render correct parameter', async () => {
    fixture = TestBed.createComponent(TypeSafeRouterLink, {
      bindings: [
        inputBinding('route', () => routeWithParameter),
        inputBinding('parameters', () => ({ id: '123' })),
      ],
    });
    component = fixture.componentInstance;
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('a')?.href).toContain('123');
  });
});
