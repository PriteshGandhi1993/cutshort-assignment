export type Menu = {
    name: string, 
    icon?: object, 
    active?: boolean,
    submenu?: { name: string, url: string, active: boolean }[],
    value? : string
}