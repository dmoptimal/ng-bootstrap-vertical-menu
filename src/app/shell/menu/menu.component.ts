import { Component, OnInit, Input } from '@angular/core';
import { faChevronRight, faChevronDown, faPlus, faFolder, faPencilAlt, faTint, faCheck } from '@fortawesome/free-solid-svg-icons';
import { trigger, state, style, animate, transition, stagger, query } from '@angular/animations';
import { CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ height: 0, opacity: 0 }),
            animate('0.2s ease',
              style({ height: '*', opacity: 1 }))
          ]
        ),
        transition(
          ':leave',

          [
            style({ height: '*', opacity: 1 }),
            animate('0.2s ease',
              style({ height: 0, opacity: 0 })),

          ]
        )
      ]
    ),
    trigger(
      'inOutNoHeightAnimation',
      [
        transition(
          ':enter',
          [
            style({ opacity: 0 }),
            animate('0.2s 300ms ease',
              style({ opacity: 1 }))
          ]
        ),
        transition(
          ':leave',

          [
            style({opacity: 1 }),
            animate('0.2s 300ms ease',
              style({  opacity: 0 })),

          ]
        )
      ]
    ),
    // trigger(
    //   'inOutNoHeightAnimation',
    //   [
    //     ,
    //     transition('* => *',[
    //       query(':leave',

    //         [
    //           style({ opacity: 1 }),
    //           stagger(100, [animate('0.1s ease',
    //             style({ opacity: 0 }))])
             

    //         ])
    //     ]
    //     )
    //   ]
    // )
    // trigger('inOutNoHeightAnimation', [
    //   transition('* => *', [ // each time the binding value changes
    //     query(':leave', [
    //       stagger(100, [
    //         animate('0.5s', style({ opacity: 0 }))
    //       ])
    //     ], { optional: true }),
    //     query(':enter', [
    //       style({ opacity: 0 }),
    //       stagger(100, [
    //         animate('0.5s', style({ opacity: 1 }))
    //       ])
    //     ], { optional: true })
    //   ])
    // ])
  ]
})
export class MenuComponent implements OnInit {

  faChevronRight = faChevronRight;
  faChevronDown = faChevronDown;
  faPlus = faPlus;
  faFolder = faFolder;
  faPencilAlt = faPencilAlt;
  faTint = faTint;
  faCheck = faCheck;

  @Input()
  connectedTo: any;

  @Input()
  id: any;

  @Input()
  items: any

  @Input()
  sortable: any;

  @Input()
  subfolders: any;

  @Input()
  collapsed: any;

  // public dls: CdkDropList[] = [];

  hovering: boolean;

  constructor() { }

  ngOnInit(): void {
    console.log(this.items);
  }

  select(item) {
    item.isCollapsed = !item.isCollapsed
    // item.isSelected = true
  }

  drop(event: any) {
    // console.log(this.items);
    // moveItemInArray(this.items, event.previousIndex, event.currentIndex);
    // console.log('--------------------');
    // console.log(event.previousContainer);
    // console.log(event.container);

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // console.log('hello');
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }

  }

  addSubfolder() {
    console.log(this.items[0].items);
    this.items[0].items.push({
      title: '',
      icon: faFolder,
      iconColor: '#D14747',
      isCollapsed: true,
      sortable: true,
      editable: true,
      editing: true,
      id: 'folder2',
      connectedTo: ['owned', 'folder1'],
      items: []
    })
  }

  editItem(item) {
    item.editing = true;
  }

}
