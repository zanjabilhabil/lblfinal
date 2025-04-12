import { useState } from "react";
export function Tabs({ children, defaultValue }) {
  const [active, setActive] = useState(defaultValue);
  return <div>{children.map(child => {
    if (child.type.name === "TabsList") {
      return <div>{child.props.children.map(tab => React.cloneElement(tab, { onSelect: setActive, active }))}</div>;
    }
    if (child.props.value === active) return <div>{child.props.children}</div>;
    return null;
  })}</div>;
}
export function TabsList({ children }) {
  return <div className="flex space-x-2 mb-4">{children}</div>;
}
export function TabsTrigger({ value, children, onSelect, active }) {
  return <button onClick={() => onSelect(value)} className={`px-4 py-2 rounded ${active === value ? "bg-blue-600 text-white" : "bg-gray-200"}`}>{children}</button>;
}
export function TabsContent({ children }) {
  return <div>{children}</div>;
}