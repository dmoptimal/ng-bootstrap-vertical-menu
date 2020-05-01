import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faChevronRight, faChevronDown, faPlus, faFolder, faPencilAlt, faTint, faCheck } from '@fortawesome/free-solid-svg-icons';
import { trigger, state, style, animate, transition, stagger, query } from '@angular/animations';
import { CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { v4 as uuidv4 } from 'uuid';
import { MenuItem } from 'src/app/menu-item';



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
    )
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

  @Output() 
  updateConnectedChildLists = new EventEmitter<Array<string>>();

  onUpdateConnectedList(event: MouseEvent) {
    // event: MouseEvent
      console.log(event)
    let selNode: any;
    if(event instanceof MouseEvent) {
         event.preventDefault();
         event.stopPropagation();
         selNode = this.items
    } else {
        selNode = event
    }
    this.updateConnectedChildLists.emit(selNode);
    console.log(this.items);
    this.items.connectedTo = selNode
    // console.log(this.items.connectedTo)
  }


  hovering: boolean;

  constructor() { }

  ngOnInit(): void {
    // console.log(this.items);
  }

  select(item) {
    item.isCollapsed = !item.isCollapsed
  }

  drop(event: any) {

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }

  }

  addSubfolder() {
    // console.log(this.items[0]);

    // Get parent folder ID
    const parentId = [this.items[0].id];

    // Get folders on the same level
    const otherFoldersOnThisLevel = this.items[0].items.reduce((res:Array<string>, item:MenuItem)=>{
      if(item.sortable){
        return res.concat(item.id)
      }
      return res
    }, [])

    this.updateConnectedChildLists.emit(otherFoldersOnThisLevel);

    // Concat connected ids
    const connectedFolders = parentId.concat(otherFoldersOnThisLevel)



    this.items[0].items.push({
      title: '',
      icon: faFolder,
      iconColor: '#D14747',
      isCollapsed: true,
      sortable: true,
      editable: true,
      editing: true,
      id: uuidv4(),
      connectedTo: connectedFolders,
      items: []
    })
  }

  editItem(item) {
    item.editing = true;
  }

}
