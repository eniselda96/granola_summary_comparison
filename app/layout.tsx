"use client"
import "./globals.css";

// components/Layout.tsx
import Link from "next/link";
import { meetingsData } from "./data";
import { usePathname } from "next/navigation"; // usePathname is a hook now imported from navigation


export default function RootLayout({ children }) {
  const pathName = usePathname();


  return (
    <html>
      <body>
        <div className="flex min-h-screen bg-gray-100">
          <aside className="w-64 bg-white shadow-md p-6 fixed h-full">
            <h2 className="text-xl font-bold mb-6 text-gray-700">Meetings</h2>
            <ul className="space-y-4">
              {meetingsData.map((meeting) => {
                const isActive = pathName.startsWith(`/pages/meetings/${meeting.id}`)

                return (
                  <li
                    key={meeting.id}
                    className={`bg-white shadow-lg p-4 ${
                      isActive ? 'bg-blue-100 border-l-4 border-blue-600' : 'hover:bg-gray-50'
                    } transition duration-300`}
                  >
                    <Link
                      href={`/pages/meetings/${meeting.id}`}
                      className={`${
                        isActive ? 'text-blue-800 font-semibold' : 'text-blue-600 hover:text-blue-800'
                      }`}
                    >
                      <span className="font-semibold">{meeting.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </aside>
          <main className="flex-1 p-6 bg-white shadow-inner ms-64">
            {children}
          </main>
        </div>
      </body>
    </html>
  );

}