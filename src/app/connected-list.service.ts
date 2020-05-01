import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectedListService {

  private message = new BehaviorSubject([]);
  sharedMessage = this.message.asObservable();

  constructor() { }

  nextMessage(message: Array<string>) {
    this.message.next(message)
  }
  
}


// import { Injectable } from '@angular/core';

// @Injectable()
// export class SharedService {

//   private message = new BehaviorSubject([]);
//   sharedMessage = this.message.asObservable();

//   constructor() { }

//   nextMessage(message: Array<string>) {
//     this.message.next(message)
//   }
  
// }
