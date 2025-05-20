import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';

@Component({
  selector: 'app-root',
  imports: [ ComponentAComponent, ComponentBComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sharedservice';
}
