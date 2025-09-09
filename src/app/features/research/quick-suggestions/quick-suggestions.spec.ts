import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickSuggestions } from './quick-suggestions';

describe('QuickSuggestions', () => {
  let component: QuickSuggestions;
  let fixture: ComponentFixture<QuickSuggestions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuickSuggestions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickSuggestions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
