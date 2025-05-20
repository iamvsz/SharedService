import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private dataSubject = new BehaviorSubject<string>('Initial Value');
  sharedData$ = this.dataSubject.asObservable();

  setSharedData(data: string): void {
    this.dataSubject.next(data);
  }
}
