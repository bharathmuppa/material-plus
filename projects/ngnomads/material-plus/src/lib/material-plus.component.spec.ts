import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialPlusComponent } from './material-plus.component';

describe('MaterialPlusComponent', () => {
  let component: MaterialPlusComponent;
  let fixture: ComponentFixture<MaterialPlusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaterialPlusComponent]
    });
    fixture = TestBed.createComponent(MaterialPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
