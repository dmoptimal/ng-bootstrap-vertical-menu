import { Component, OnInit } from '@angular/core';
import { faHome, faTachometerAlt, faCog, faLanguage, faPlus, faEyeSlash, faUser, faUsers, faFolder } from '@fortawesome/free-solid-svg-icons';
// import { PrettyJsonComponent } from 'angular2-prettyjson';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styles: [`
    :host /deep/ .string { color: green; }
    :host /deep/ .number { color: darkorange; }
    :host /deep/ .boolean { color: blue; }
    :host /deep/ .null { color: magenta; }
    :host /deep/ .key { color: red; }
  `],
  styleUrls: ['./shell.component.scss'],
  // entryComponents: [
  //   PrettyJsonComponent
  // ]
})
export class ShellComponent implements OnInit {

  faHome = faHome
  faTachometerAlt = faTachometerAlt
  faCog = faCog
  faLanguage = faLanguage
  faPlus = faPlus
  faEyeSlash = faEyeSlash
  faUser = faUser
  faUsers = faUsers
  faFolder = faFolder

  // Large List 
  // items = [
  //   {
  //     title: "Item 1",
  //     isCollapsed: true,
  //     items: [
  //       {
  //         title: "Item 1.1",
  //         isCollapsed: true,
  //       }, {
  //         title: "Item 1.2",
  //         isCollapsed: true,
  //         items: [
  //           {
  //             title: "Item 1.2.1",
  //           },
  //           {
  //             title: "Item 1.2.2"
  //           },
  //           {
  //             title: "Item 1.2.3"
  //           },
  //           {
  //             title: "Item 1.2.4",
  //             isCollapsed: true,
  //             items: [
  //               {
  //                 title: "Item 1.2.4.1"
  //               },
  //               {
  //                 title: "Item 1.2.4.2"
  //               }
  //             ]
  //           }
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     title: "Item 1",
  //     isCollapsed: true,
  //     items: [
  //       {
  //         title: "Item 1.1",
  //         isCollapsed: true,
  //       }, {
  //         title: "Item 1.2",
  //         isCollapsed: true,
  //         items: [
  //           {
  //             title: "Item 1.2.1",
  //           },
  //           {
  //             title: "Item 1.2.2"
  //           },
  //           {
  //             title: "Item 1.2.3"
  //           },
  //           {
  //             title: "Item 1.2.4",
  //             isCollapsed: true,
  //             items: [
  //               {
  //                 title: "Item 1.2.4.1"
  //               },
  //               {
  //                 title: "Item 1.2.4.2"
  //               }
  //             ]
  //           }
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     title: "Item 1",
  //     isCollapsed: true,
  //     items: [
  //       {
  //         title: "Item 1.1",
  //         isCollapsed: true,
  //       }, {
  //         title: "Item 1.2",
  //         isCollapsed: true,
  //         items: [
  //           {
  //             title: "Item 1.2.1",
  //           },
  //           {
  //             title: "Item 1.2.2"
  //           },
  //           {
  //             title: "Item 1.2.3"
  //           },
  //           {
  //             title: "Item 1.2.4",
  //             isCollapsed: true,
  //             items: [
  //               {
  //                 title: "Item 1.2.4.1"
  //               },
  //               {
  //                 title: "Item 1.2.4.2"
  //               }
  //             ]
  //           }
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     title: "Item 1",
  //     isCollapsed: true,
  //     items: [
  //       {
  //         title: "Item 1.1",
  //         isCollapsed: true,
  //       }, {
  //         title: "Item 1.2",
  //         isCollapsed: true,
  //         items: [
  //           {
  //             title: "Item 1.2.1",
  //           },
  //           {
  //             title: "Item 1.2.2"
  //           },
  //           {
  //             title: "Item 1.2.3"
  //           },
  //           {
  //             title: "Item 1.2.4",
  //             isCollapsed: true,
  //             items: [
  //               {
  //                 title: "Item 1.2.4.1"
  //               },
  //               {
  //                 title: "Item 1.2.4.2"
  //               }
  //             ]
  //           }
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     title: "Item 1",
  //     isCollapsed: true,
  //     items: [
  //       {
  //         title: "Item 1.1",
  //         isCollapsed: true,
  //       }, {
  //         title: "Item 1.2",
  //         isCollapsed: true,
  //         items: [
  //           {
  //             title: "Item 1.2.1",
  //           },
  //           {
  //             title: "Item 1.2.2"
  //           },
  //           {
  //             title: "Item 1.2.3"
  //           },
  //           {
  //             title: "Item 1.2.4",
  //             isCollapsed: true,
  //             items: [
  //               {
  //                 title: "Item 1.2.4.1"
  //               },
  //               {
  //                 title: "Item 1.2.4.2"
  //               }
  //             ]
  //           }
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     title: "Item 1",
  //     isCollapsed: true,
  //     items: [
  //       {
  //         title: "Item 1.1",
  //         isCollapsed: true,
  //       }, {
  //         title: "Item 1.2",
  //         isCollapsed: true,
  //         items: [
  //           {
  //             title: "Item 1.2.1",
  //           },
  //           {
  //             title: "Item 1.2.2"
  //           },
  //           {
  //             title: "Item 1.2.3"
  //           },
  //           {
  //             title: "Item 1.2.4",
  //             isCollapsed: true,
  //             items: [
  //               {
  //                 title: "Item 1.2.4.1"
  //               },
  //               {
  //                 title: "Item 1.2.4.2"
  //               }
  //             ]
  //           }
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     title: "Item 1",
  //     isCollapsed: true,
  //     items: [
  //       {
  //         title: "Item 1.1",
  //         isCollapsed: true,
  //       }, {
  //         title: "Item 1.2",
  //         isCollapsed: true,
  //         items: [
  //           {
  //             title: "Item 1.2.1",
  //           },
  //           {
  //             title: "Item 1.2.2"
  //           },
  //           {
  //             title: "Item 1.2.3"
  //           },
  //           {
  //             title: "Item 1.2.4",
  //             isCollapsed: true,
  //             items: [
  //               {
  //                 title: "Item 1.2.4.1"
  //               },
  //               {
  //                 title: "Item 1.2.4.2"
  //               }
  //             ]
  //           }
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     title: "Item 1",
  //     isCollapsed: true,
  //     items: [
  //       {
  //         title: "Item 1.1",
  //         isCollapsed: true,
  //       }, {
  //         title: "Item 1.2",
  //         isCollapsed: true,
  //         items: [
  //           {
  //             title: "Item 1.2.1",
  //           },
  //           {
  //             title: "Item 1.2.2"
  //           },
  //           {
  //             title: "Item 1.2.3"
  //           },
  //           {
  //             title: "Item 1.2.4",
  //             isCollapsed: true,
  //             items: [
  //               {
  //                 title: "Item 1.2.4.1"
  //               },
  //               {
  //                 title: "Item 1.2.4.2"
  //               }
  //             ]
  //           }
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     title: "Item 1",
  //     isCollapsed: true,
  //     items: [
  //       {
  //         title: "Item 1.1",
  //         isCollapsed: true,
  //       }, {
  //         title: "Item 1.2",
  //         isCollapsed: true,
  //         items: [
  //           {
  //             title: "Item 1.2.1",
  //           },
  //           {
  //             title: "Item 1.2.2"
  //           },
  //           {
  //             title: "Item 1.2.3"
  //           },
  //           {
  //             title: "Item 1.2.4",
  //             isCollapsed: true,
  //             items: [
  //               {
  //                 title: "Item 1.2.4.1"
  //               },
  //               {
  //                 title: "Item 1.2.4.2"
  //               }
  //             ]
  //           }
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     title: "Item 1",
  //     isCollapsed: true,
  //     items: [
  //       {
  //         title: "Item 1.1",
  //         isCollapsed: true,
  //       }, {
  //         title: "Item 1.2",
  //         isCollapsed: true,
  //         items: [
  //           {
  //             title: "Item 1.2.1",
  //           },
  //           {
  //             title: "Item 1.2.2"
  //           },
  //           {
  //             title: "Item 1.2.3"
  //           },
  //           {
  //             title: "Item 1.2.4",
  //             isCollapsed: true,
  //             items: [
  //               {
  //                 title: "Item 1.2.4.1"
  //               },
  //               {
  //                 title: "Item 1.2.4.2"
  //               }
  //             ]
  //           }
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     title: "Item 1",
  //     isCollapsed: true,
  //     items: [
  //       {
  //         title: "Item 1.1",
  //         isCollapsed: true,
  //       }, {
  //         title: "Item 1.2",
  //         isCollapsed: true,
  //         items: [
  //           {
  //             title: "Item 1.2.1",
  //           },
  //           {
  //             title: "Item 1.2.2"
  //           },
  //           {
  //             title: "Item 1.2.3"
  //           },
  //           {
  //             title: "Item 1.2.4",
  //             isCollapsed: true,
  //             items: [
  //               {
  //                 title: "Item 1.2.4.1"
  //               },
  //               {
  //                 title: "Item 1.2.4.2"
  //               }
  //             ]
  //           }
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     title: "Item 1",
  //     isCollapsed: true,
  //     items: [
  //       {
  //         title: "Item 1.1",
  //         isCollapsed: true,
  //       }, {
  //         title: "Item 1.2",
  //         isCollapsed: true,
  //         items: [
  //           {
  //             title: "Item 1.2.1",
  //           },
  //           {
  //             title: "Item 1.2.2"
  //           },
  //           {
  //             title: "Item 1.2.3"
  //           },
  //           {
  //             title: "Item 1.2.4",
  //             isCollapsed: true,
  //             items: [
  //               {
  //                 title: "Item 1.2.4.1"
  //               },
  //               {
  //                 title: "Item 1.2.4.2"
  //               }
  //             ]
  //           }
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     title: "Item 1",
  //     isCollapsed: true,
  //     items: [
  //       {
  //         title: "Item 1.1",
  //         isCollapsed: true,
  //       }, {
  //         title: "Item 1.2",
  //         isCollapsed: true,
  //         items: [
  //           {
  //             title: "Item 1.2.1",
  //           },
  //           {
  //             title: "Item 1.2.2"
  //           },
  //           {
  //             title: "Item 1.2.3"
  //           },
  //           {
  //             title: "Item 1.2.4",
  //             isCollapsed: true,
  //             items: [
  //               {
  //                 title: "Item 1.2.4.1"
  //               },
  //               {
  //                 title: "Item 1.2.4.2"
  //               }
  //             ]
  //           }
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     title: "Item 1",
  //     isCollapsed: true,
  //     items: [
  //       {
  //         title: "Item 1.1",
  //         isCollapsed: true,
  //       }, {
  //         title: "Item 1.2",
  //         isCollapsed: true,
  //         items: [
  //           {
  //             title: "Item 1.2.1",
  //           },
  //           {
  //             title: "Item 1.2.2"
  //           },
  //           {
  //             title: "Item 1.2.3"
  //           },
  //           {
  //             title: "Item 1.2.4",
  //             isCollapsed: true,
  //             items: [
  //               {
  //                 title: "Item 1.2.4.1"
  //               },
  //               {
  //                 title: "Item 1.2.4.2"
  //               }
  //             ]
  //           }
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     title: "Item 1",
  //     isCollapsed: true,
  //     items: [
  //       {
  //         title: "Item 1.1",
  //         isCollapsed: true,
  //       }, {
  //         title: "Item 1.2",
  //         isCollapsed: true,
  //         items: [
  //           {
  //             title: "Item 1.2.1",
  //           },
  //           {
  //             title: "Item 1.2.2"
  //           },
  //           {
  //             title: "Item 1.2.3"
  //           },
  //           {
  //             title: "Item 1.2.4",
  //             isCollapsed: true,
  //             items: [
  //               {
  //                 title: "Item 1.2.4.1"
  //               },
  //               {
  //                 title: "Item 1.2.4.2"
  //               }
  //             ]
  //           }
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     title: "Item 1",
  //     isCollapsed: true,
  //     items: [
  //       {
  //         title: "Item 1.1",
  //         isCollapsed: true,
  //       }, {
  //         title: "Item 1.2",
  //         isCollapsed: true,
  //         items: [
  //           {
  //             title: "Item 1.2.1",
  //           },
  //           {
  //             title: "Item 1.2.2"
  //           },
  //           {
  //             title: "Item 1.2.3"
  //           },
  //           {
  //             title: "Item 1.2.4",
  //             isCollapsed: true,
  //             items: [
  //               {
  //                 title: "Item 1.2.4.1"
  //               },
  //               {
  //                 title: "Item 1.2.4.2"
  //               }
  //             ]
  //           }
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     title: "Item 1",
  //     isCollapsed: true,
  //     items: [
  //       {
  //         title: "Item 1.1",
  //         isCollapsed: true,
  //       }, {
  //         title: "Item 1.2",
  //         isCollapsed: true,
  //         items: [
  //           {
  //             title: "Item 1.2.1",
  //           },
  //           {
  //             title: "Item 1.2.2"
  //           },
  //           {
  //             title: "Item 1.2.3"
  //           },
  //           {
  //             title: "Item 1.2.4",
  //             isCollapsed: true,
  //             items: [
  //               {
  //                 title: "Item 1.2.4.1"
  //               },
  //               {
  //                 title: "Item 1.2.4.2"
  //               }
  //             ]
  //           }
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     title: "Item 1",
  //     isCollapsed: true,
  //     items: [
  //       {
  //         title: "Item 1.1",
  //         isCollapsed: true,
  //       }, {
  //         title: "Item 1.2",
  //         isCollapsed: true,
  //         items: [
  //           {
  //             title: "Item 1.2.1",
  //           },
  //           {
  //             title: "Item 1.2.2"
  //           },
  //           {
  //             title: "Item 1.2.3"
  //           },
  //           {
  //             title: "Item 1.2.4",
  //             isCollapsed: true,
  //             items: [
  //               {
  //                 title: "Item 1.2.4.1"
  //               },
  //               {
  //                 title: "Item 1.2.4.2"
  //               }
  //             ]
  //           }
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     title: "Item 1",
  //     isCollapsed: true,
  //     items: [
  //       {
  //         title: "Item 1.1",
  //         isCollapsed: true,
  //       }, {
  //         title: "Item 1.2",
  //         isCollapsed: true,
  //         items: [
  //           {
  //             title: "Item 1.2.1",
  //           },
  //           {
  //             title: "Item 1.2.2"
  //           },
  //           {
  //             title: "Item 1.2.3"
  //           },
  //           {
  //             title: "Item 1.2.4",
  //             isCollapsed: true,
  //             items: [
  //               {
  //                 title: "Item 1.2.4.1"
  //               },
  //               {
  //                 title: "Item 1.2.4.2"
  //               }
  //             ]
  //           }
  //         ]
  //       }
  //     ]
  //   }
  // ]

  items = [
    {
      title: 'Home',
      icon: faHome,
      isCollapsed: true,
    },
    {
      title: 'Dashboards',
      icon: faTachometerAlt,
      isCollapsed: true,
      items: [
        {
          title: 'Owned By You',
          icon: faEyeSlash,
          iconClass: 'text-danger',
          isCollapsed: true,
          sortable: true,
          id:'owned',
          connectedTo:['folder1'],
          subfolders: true,
          items: [
            {
              title: 'Production',
              icon: faFolder,
              iconColor: '#D14747',
              isCollapsed: true,
              sortable: true,
              id:'folder1',
              connectedTo:['owned'],
              editable: true,
              items: [
                {title: 'CM1'},
                {title: 'CM2'},
                {title: 'CM3'},
                {title: 'CM4'},
              ]
            },
            { title: 'Speed' },
            { title: 'Time' },
            { title: 'Process' },
            { title: 'Cold Mills' },
          ]
        },
        {
          title: 'Shared With You',
          icon: faUser,
          iconClass: 'text-success'
        },
        {
          title: 'Public',
          icon: faUsers,
          iconClass: 'text-primary'
        },
        {
          title: 'New Dashboard',
          icon: faPlus,
          class: "text-success"
        }
      ]
    },
    {
      title: 'Language',
      icon: faLanguage,
      isCollapsed: true,
      items: [
        {
          title: 'English',
          flag: 'gb'
        },
        {
          title: 'Swedish',
          flag: 'se'
        },
        {
          title: 'Chinese',
          flag: 'cn'
        }
      ]
    },
    {
      title: 'Settings',
      icon: faCog,
      isCollapsed: true,
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
