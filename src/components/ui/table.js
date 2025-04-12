export function Table({ children }) {
  return <table className="w-full border-collapse text-sm">{children}</table>;
}
export function TableHeader({ children }) {
  return <thead className="bg-gray-200">{children}</thead>;
}
export function TableRow({ children }) {
  return <tr className="border-b">{children}</tr>;
}
export function TableHead({ children }) {
  return <th className="p-2 text-left">{children}</th>;
}
export function TableBody({ children }) {
  return <tbody>{children}</tbody>;
}
export function TableCell({ children }) {
  return <td className="p-2">{children}</td>;
}