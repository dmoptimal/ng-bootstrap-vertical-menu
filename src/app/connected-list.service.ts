import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectedListService {

  private connectedList = new BehaviorSubject([]);
  sharedList = this.connectedList.asObservable();

  constructor() { }

  nextListState(newList: Array<string>) {
    this.connectedList.next(newList)
    // console.log(this.connectedList);
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
