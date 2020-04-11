import { Component, OnInit, Input } from '@angular/core';
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger('smoothCollapse', [
      state('initial', style({
        height:'0',
        overflow:'hidden',
        opacity:'1'
      })),
      state('final', style({
        overflow:'hidden',
        opacity:'1'
      })),
      transition('initial=>final', animate('150ms')),
      transition('final=>initial', animate('150ms'))
    ]),
  ]
})
export class MenuComponent implements OnInit {

  faChevronRight = faChevronRight;
  faChevronDown = faChevronDown;
  
  @Input()
  connectedTo: any;

  @Input()
  id: any;

  @Input()
  items: any

  @Input()
  sortable: any;

  public dls: CdkDropList[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  select(item){
    item.isCollapsed = !item.isCollapsed
    // item.isSelected = true
  }

  drop(event:any) {
    // console.log(this.items);
    // moveItemInArray(this.items, event.previousIndex, event.currentIndex);

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log('hello');
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }

  }

}
