export default function Card(props) {
  return (
    <div className="p-4 rounded-lg bg-gray-800 shadow-sm">{props.children}</div>
  );
}
