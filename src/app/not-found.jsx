import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center h-32">
      <h2 className="text-3xl font-semibold text-red-500">Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className="text-blue-500">
        Return Home
      </Link>
    </div>
  );
}
