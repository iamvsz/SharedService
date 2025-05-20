import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-component-a',
  imports: [FormsModule],
  templateUrl: './component-a.component.html',
  styleUrl: './component-a.component.css'
})
export class ComponentAComponent {
  inputData: string = '';

  constructor(private sharedService: SharedService) { }

  sendData(): void {
    this.sharedService.setSharedData(this.inputData);
  }
}
