import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFirstCComponent } from './my-first-c.component';

describe('MyFirstCComponent', () => {
  let component: MyFirstCComponent;
  let fixture: ComponentFixture<MyFirstCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFirstCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyFirstCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
