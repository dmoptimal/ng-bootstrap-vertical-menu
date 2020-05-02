export interface MenuItem {
    title: string,
    icon?: any,
    iconClass?: string,
    iconColor?: string,
    flag?: string,
    id: string,
    class?: string,
    subfolders?: boolean,
    sortable?: boolean,
    editable?: boolean,
    isCollapsed?: boolean,
    connectedTo?: Array<string>,
    items?: Array<this>,
    callback?: Function,
    route?: string
    editing?: boolean,
    parentNode?: boolean
}