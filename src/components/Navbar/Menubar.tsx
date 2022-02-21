import { Link } from "react-router-dom"
import { menuItems, subMenuItems } from "../../utils/constants/common.constant"
import { Size } from "../../utils/enums/common.enum"
import { MenuBG, MenuList, MenuRoot } from "./style"

export type MenubarProps = {
  width: number
}

export const Menubar = (props: MenubarProps) => {
  const menu = props.width > Size.MOBILE_OVERALL ? subMenuItems : menuItems
  const items = menu.map((item, pos) => {
    return (
      <Link to={item.link} className="flex w-full flex-col justify-center py-3" key={`item-${pos}`}>
        {item.name}
      </Link>
    )
  })

  return (
    <MenuRoot>
      <MenuBG className="w-11/12 sm:w-[37%] lg:w-[30%] xl:w-[22%] 2xl:w-80" />
      <MenuList className="w-11/12 divide-y-[1px] divide-white font-NotoSansThai font-medium sm:w-[37%] sm:text-xs lg:w-[30%] xl:w-[22%] 2xl:w-80 2xl:text-base">
        {items}
      </MenuList>
    </MenuRoot>
  )
}
