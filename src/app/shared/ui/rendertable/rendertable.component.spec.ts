import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RendertableComponent } from './rendertable.component';

describe('RendertableComponent', () => {
  let component: RendertableComponent;
  let fixture: ComponentFixture<RendertableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RendertableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RendertableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
