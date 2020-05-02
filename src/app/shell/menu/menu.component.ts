import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faChevronRight, faChevronDown, faPlus, faFolder, faPencilAlt, faTint, faCheck } from '@fortawesome/free-solid-svg-icons';
import { trigger, state, style, animate, transition, stagger, query } from '@angular/animations';
import { CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { v4 as uuidv4 } from 'uuid';
import { MenuItem } from 'src/app/menu-item';
import { ConnectedListService } from '../../connected-list.service'


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

  @Input()
  newItem: boolean;

  @Input()
  parentNode: boolean;

  @Input()
  parentColor: string;

  // @Output() 
  // updateConnectedChildLists = new EventEmitter<Array<string>>();

  // onUpdateConnectedList(event ) {
  //   if(this.id = 'owned'){
  //     console.log(event);
  //     // console.log();
  //     this.connectedTo = event
  //   }

    // console.log(event);

    // event: MouseEvent
//       console.log(event)
//     let selNode: any;
//     if(event instanceof MouseEvent) {
//          event.preventDefault();
//          event.stopPropagation();
//          selNode = this.items
//     } else {
//         selNode = event
//     }
//     this.updateConnectedChildLists.emit(selNode);
//     console.log(this.items);
//     this.items.connectedTo = selNode
    // console.log(this.items.connectedTo)
  // }


  hovering: boolean;

  constructor(private state: ConnectedListService) { }

  ngOnInit(): void {
    // console.log(this.newItem);
    // setTimeout(()=>{
    //   if(this.newItem){
    //     this.updateConnectedChildLists.emit(this.connectedTo);
    //   }
    // })
    // if(parentNode)
    if(this.sortable){
      this.state.sharedList.subscribe(result => {
        console.log(this.id);
        console.log(this.sortable);
        console.log(result);
        this.connectedTo = result; // this set's the username to the default observable value
      });
    } 
    
  }

  public rgbReduceA(c){
    if(c){
      return c
    }
  }

  public RGBAToHexA(rgba) {
    if(rgba){
      let sep = rgba.indexOf(",") > -1 ? "," : " ";
    rgba = rgba.substr(5).split(")")[0].split(sep);
    console.log(rgba[3]);     
    rgba[3] = 0.1;
    return `rgba(${rgba[0]}, ${rgba[1]}, ${rgba[2]}, ${rgba[3]})`         
    // Strip the slash if using space-separated syntax
//     if (rgba.indexOf("/") > -1)
//       rgba.splice(3,1);
  
//     for (let R in rgba) {
//       // R = parseInt(R)
//       let r = rgba[R];
//       if (r.indexOf("%") > -1) {
//         let p = r.substr(0,r.length - 1) / 100;
  
//         if (R < 3) {
//           rgba[R] = Math.round(p * 255);
//         } else {
//           rgba[R] = p;
//         }
//       }
//     }

//     let r = (+rgba[0]).toString(16),
//     g = (+rgba[1]).toString(16),
//     b = (+rgba[2]).toString(16),
//     a = Math.round(+rgba[3] * 255).toString(16);

// if (r.length == 1)
//   r = "0" + r;
// if (g.length == 1)
//   g = "0" + g;
// if (b.length == 1)
//   b = "0" + b;
// if (a.length == 1)
//   a = "0" + a;

// return "#" + r + g + b + a;

    }
    
  }

  public hexToRGB(h) {
    if(h){
      let r = "0", g = "0", b = "0";
  
      // 3 digits
      if (h.length == 4) {
        r = "0x" + h[1] + h[1];
        g = "0x" + h[2] + h[2];
        b = "0x" + h[3] + h[3];
    
      // 6 digits
      } else if (h.length == 7) {
        r = "0x" + h[1] + h[2];
        g = "0x" + h[3] + h[4];
        b = "0x" + h[5] + h[6];
      }
      
      return "rgb("+ +r + "," + +g + "," + +b + ", 0.1)";
    }

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
    const newId = uuidv4()
    // Get parent folder ID
    const parentId = [this.items[0].id];

    // Get folders on the same level
    const otherFoldersOnThisLevel = this.items[0].items.reduce((res:Array<string>, item:MenuItem)=>{
      if(item.sortable){
        return res.concat(item.id)
      }
      return res
    }, [])

    

    // Concat connected ids
    const connectedFolders = parentId.concat(otherFoldersOnThisLevel, [newId])
    
    this.state.nextListState(connectedFolders);


    this.items[0].items.push({
      title: '',
      icon: faFolder,
      iconColor: '#D14747',
      isCollapsed: true,
      sortable: true,
      editable: true,
      editing: true,
      id: newId,
      connectedTo: connectedFolders,
      items: [],
      newItem: true
    })
  }

  editItem(item) {
    item.editing = true;
  }

}
