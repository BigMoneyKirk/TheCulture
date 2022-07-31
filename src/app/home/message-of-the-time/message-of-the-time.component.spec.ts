import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageOfTheTimeComponent } from './message-of-the-time.component';

describe('MessageOfTheTimeComponent', () => {
  let component: MessageOfTheTimeComponent;
  let fixture: ComponentFixture<MessageOfTheTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageOfTheTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageOfTheTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
