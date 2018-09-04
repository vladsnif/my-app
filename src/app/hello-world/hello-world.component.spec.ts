import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloWorldComponent } from './hello-world.component';
import {it} from "selenium-webdriver/testing";
import {MathService} from "../math.service";

fdescribe('HelloWorldComponent', () => {
  let component: HelloWorldComponent;
  let fixture: ComponentFixture<HelloWorldComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HelloWorldComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloWorldComponent);
    component = fixture.componentInstance;
    // let mathService = TestBed.get(MathService);
    // spyOn(mathService, 'plus');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be equals', () => {
    expect(component.helloWorld).toEqual("Hello world");
  });


  it('should be', () => {
    // component.ngOnInit();
    // component.a = 7;
    // component.b = 2;
  });
});
