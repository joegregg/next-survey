import "@/app/globals.css";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-100 text-gray-700 py-8 px-4">
      <div className="font-bold text-lg mb-4">Menu</div>
      <nav>
        <Link
          key="listSurveys"
          href="/list"
          className="text-indigo-500 block py-2 px-4 rounded"
        >
          Surveys list
        </Link>
        <Link
          key="createSurvey"
          href="/create"
          className="text-indigo-500 block py-2 px-4 rounded"
        >
          Create Survey
        </Link>
      </nav>
    </aside>
  );
}
