import { IconType } from 'react-icons';
import { RiDashboard2Line, RiPhoneLine, RiChat3Line, RiFile3Line, RiNewspaperLine} from 'react-icons/ri'

export interface IMenuItem {
    link: string
    icon: IconType
}

export const menu: IMenuItem[] = [{
    link: '/',
    icon: RiDashboard2Line,
},
{
    link: '/',
    icon: RiPhoneLine,
},{
    link: '/',
    icon: RiChat3Line,
},{
    link: '/',
    icon: RiFile3Line,
},{
    link: '/',
    icon: RiNewspaperLine,
}]