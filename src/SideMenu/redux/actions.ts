import { SIDEMENU_SHOW, SideMenuActionTypes} from './types'

export function sideMenuShow(newValue: boolean): SideMenuActionTypes {
    return {
        type: SIDEMENU_SHOW,
        sideMenuValue: newValue
    }
}
