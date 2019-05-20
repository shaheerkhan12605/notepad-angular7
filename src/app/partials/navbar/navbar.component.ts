import { Component, OnInit, Renderer2, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  constructor(private renderer: Renderer2) {
    this.addJsToElement('../../assets/js/material-dashboard.min40a0.js').onload = () => {
    };
  }
  ngOnInit() {
  }
  addJsToElement(src: string): HTMLScriptElement {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    this.renderer.appendChild(document.body, script);
    return script;
  }
  ngAfterViewInit(){
    // this.addJsToElement('../../assets/js/material-dashboard.min40a0.js').onload = () => {
    // };
  }

}
