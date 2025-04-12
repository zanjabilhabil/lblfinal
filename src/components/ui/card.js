export function Card({ children }) {
  return <div className="bg-white shadow rounded p-4 mb-4">{children}</div>;
}
export function CardContent({ children, className }) {
  return <div className={className}>{children}</div>;
}