import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-component-b',
  imports: [],
  templateUrl: './component-b.component.html',
  styleUrl: './component-b.component.css'
})
export class ComponentBComponent {
  sharedData: string = '';

  constructor(private sharedService: SharedService) {
    this.sharedService.sharedData$.subscribe(data => {
      this.sharedData = data;
    });
  }
}
