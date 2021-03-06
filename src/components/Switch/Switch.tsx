import * as React from "react"
import { useState, useCallback } from "react"
import "./switch.style.css"
interface SwitchItem {
  title: string
  value: string
}
interface SwitchProps {
  items: SwitchItem[]
  onSelectCallback: (value: string) => void
}
const Switch = ({ items, onSelectCallback }: SwitchProps) => {
  const [selectedItem, setSelectedItem] = useState(items[0])
  const onSelect = useCallback(
    (item: SwitchItem) => {
      setSelectedItem(item)
      onSelectCallback(item.value)
    },
    [onSelectCallback]
  )
  return (
    <div className="mb-6 flex justify-center text-xs sm:text-lg">
      <div className="switch flex w-full justify-center">
        {items.map((item) => (
          <button
            className={`flex items-center justify-center px-5`}
            onClick={() => onSelect(item)}
            key={item.title}
            id={selectedItem.title === item.title ? "selected-tab" : ""}
          >
            {item.title}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Switch
