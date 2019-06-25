export const SIDEMENU_SHOW = 'SIDEMENU_SHOW'

export interface SideMenuShowAction {
    type: typeof SIDEMENU_SHOW
    sideMenuValue: boolean
}

export interface SideMenuState {
    sideMenuShow: boolean
}

export type SideMenuActionTypes = SideMenuShowAction
