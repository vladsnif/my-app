import { Component, OnInit } from '@angular/core';
import {MathService} from "../math.service";

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {
  helloWorld: String = "Hello world";
  constructor(private mathService: MathService) { }
  a: number;
  b: number;
  ngOnInit() {
    this.mathService.divide(this.a, this.b);
    this.mathService.multiplication(this.a, this.b);
    this.mathService.substract(this.a, this.b);
    this.mathService.plus(this.a, this.b);
  }

}
