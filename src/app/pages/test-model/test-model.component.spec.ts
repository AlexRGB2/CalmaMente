import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestModelComponent } from './test-model.component';

describe('TestModelComponent', () => {
  let component: TestModelComponent;
  let fixture: ComponentFixture<TestModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestModelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
