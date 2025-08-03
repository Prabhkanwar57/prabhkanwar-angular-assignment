import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiDataComponent } from './api-data';

describe('ApiDataComponent', () => {
  let component: ApiDataComponent;
  let fixture: ComponentFixture<ApiDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiDataComponent], // for standalone
    }).compileComponents();

    fixture = TestBed.createComponent(ApiDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
