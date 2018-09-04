import { TestBed } from '@angular/core/testing';

import { MathService } from './math.service';

describe('MathService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MathService = TestBed.get(MathService);
    expect(service).toBeTruthy();
  });
  it('should multiplication', ()=>{
    const service: MathService = TestBed.get(MathService);
    const a:number =2;
    const b:number =7;
    expect(service.multiplication(a,b)).toEqual(2*7);
  });
  it('should plus', ()=>{
    const service: MathService = TestBed.get(MathService);
    const a:number =2;
    const b:number =7;
    expect(service.plus(a,b)).toEqual(2+7);
  });
  it('should substract', ()=>{
    const service: MathService = TestBed.get(MathService);
    const a:number =2;
    const b:number =7;
    expect(service.substract(a,b)).toEqual(2-7);
  });
  it('should divide', ()=>{
    const service: MathService = TestBed.get(MathService);
    const a:number =2;
    const b:number =7;
    expect(service.divide(a,b)).toEqual(2/7);
  })
});
