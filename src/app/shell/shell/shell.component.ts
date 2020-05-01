import { Component, OnInit } from '@angular/core';
import { faHome, faTachometerAlt, faCog, faLanguage, faPlus, faEyeSlash, faUser, faUsers, faFolder } from '@fortawesome/free-solid-svg-icons';
// import { PrettyJsonComponent } from 'angular2-prettyjson';
import {MenuItem} from '../../menu-item';

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

  // title : string
  // icon: any
  // iconClass: string
  // iconColor: string (html color),
  // flag: string (enum country codes)
  // id: string
  // subfolders: boolean
  // sortable: boolean
  // editable: boolean
  // isCollapsed: boolean
  // items: array (menu items)
  // 

  items:Array<MenuItem> = [
    {
      title: 'Home',
      id:'home',
      icon: faHome,
      isCollapsed: true,
    },
    {
      title: 'Dashboards',
      icon: faTachometerAlt,
      isCollapsed: true,
      id: 'dash',
      items: [
        {
          title: 'Owned By You',
          icon: faEyeSlash,
          iconClass: 'text-danger',
          isCollapsed: true,
          sortable: true,
          id:'owned',
          connectedTo:['owned', 'folder1', 'folder2'],
          subfolders: true,
          items: [
            {
              title: 'Production',
              icon: faFolder,
              iconColor: '#D14747',
              isCollapsed: true,
              sortable: true,
              id:'folder1',
              connectedTo:['owned', 'folder1', 'folder2'],
              editable: true,
              items: [
                {title: 'CM1', id: 'CM1'},
                {title: 'CM2', id: 'CM2'},
                {title: 'CM3', id: 'CM3'},
                {title: 'CM4', id: 'CM3'},
              ]
            },
            { title: 'Speed', id:'Speed' },
            { title: 'Time',  id:'Time'  },
            { title: 'Process',  id:'Process'  },
            { title: 'Cold Mills',  id:'Mills'  },
          ]
        },
        {
          title: 'Shared With You',
          id:'shared',
          icon: faUser,
          iconClass: 'text-success'
        },
        {
          title: 'Public',
          id:'pub',
          icon: faUsers,
          iconClass: 'text-primary'
        },
        {
          title: 'New Dashboard',
          id:'newDash',
          icon: faPlus,
          class: "text-success"
        }
      ]
    },
    {
      title: 'Language',
      icon: faLanguage,
      isCollapsed: true,
      id:'lang',
      items: [
        {
          title: 'English',
          flag: 'gb',
          id:'eng'
        },
        {
          title: 'Swedish',
          flag: 'se',
          id:'swe'
        },
        {
          title: 'Chinese',
          flag: 'cn',
          id: 'chn'
        }
      ]
    },
    {
      title: 'Settings',
      id:'sett',
      icon: faCog,
      isCollapsed: true,
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
