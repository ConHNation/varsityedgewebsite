import React, { useState } from "react";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell, Legend
} from "recharts";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f50", "#a1c4fd", "#ff6b6b"];

const nameList = [
  "Jalen Ross", "Maya Thompson", "Derrick Holloway", "Sierra Wallace",
  "Tyrese Knox", "Ava Johnson", "Elijah Barnes", "Kendall Lee",
  "Dante Martin", "Zoe Williams", "Miles Carter", "Chloe Scott",
  "Jayden Brown", "Savannah Davis", "Caleb Harris", "Isabella Wright",
  "Bryce Edwards", "Gianna Lewis", "Logan Walker", "Madison Green"
];

const fakeRegistrations = Array.from({ length: 172 }, (_, i) => {
  const name = nameList[i % nameList.length];
  const email = name.toLowerCase().replace(/[^a-z]/g, "") + "@athlete.com";
  return {
    name,
    email,
    position: ["WR", "QB", "RB", "LB", "CB", "TE"][Math.floor(Math.random() * 6)],
    age: Math.floor(Math.random() * 6) + 14,
    shirt: ["S", "M", "L", "XL"][Math.floor(Math.random() * 4)],
  };
});

const dailyRegistrations = Array.from({ length: 14 }, (_, i) => ({
  day: `Day ${i + 1}`,
  registrations: Math.floor(Math.random() * 40) + 10,
}));

const revenueByCamp = [
  { name: "QB Elite", revenue: 4200 },
  { name: "WR Academy", revenue: 3100 },
  { name: "Linebacker Lab", revenue: 2900 },
  { name: "Speed School", revenue: 3600 },
];

const shirtSizes = [
  { name: "S", value: 38 },
  { name: "M", value: 68 },
  { name: "L", value: 44 },
  { name: "XL", value: 22 },
];

const positions = [
  { name: "QB", value: 35 },
  { name: "WR", value: 42 },
  { name: "RB", value: 30 },
  { name: "LB", value: 25 },
  { name: "CB", value: 18 },
  { name: "TE", value: 22 },
];

const ages = [
  { age: "14", count: 25 },
  { age: "15", count: 41 },
  { age: "16", count: 38 },
  { age: "17", count: 46 },
  { age: "18", count: 22 },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 p-6">
        <div className="flex flex-col h-full">
          <h2 className="text-2xl font-bold mb-6">Varsity Edge</h2>

          <div className="sticky top-6 space-y-3">
            <button onClick={() => setActiveTab("overview")} className="block hover:text-blue-400">Overview</button>
            <button onClick={() => setActiveTab("registrations")} className="block hover:text-blue-400">Registrations</button>
            <button onClick={() => setActiveTab("analytics")} className="block hover:text-blue-400">Analytics</button>
          </div>

          <div className="mt-auto pt-10">
            <a href="/" className="text-sm text-gray-400 hover:text-white">← Back to Home</a>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 space-y-10 overflow-y-auto">
        <h1 className="text-3xl font-bold">Hello, Robert W.</h1>

        {activeTab === "overview" && (
          <>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">Camp Name</h3>
                <p className="text-gray-400">Robert W. QB Camp</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">Date & Time</h3>
                <p className="text-gray-400">July 20, 2025 · 9:00 AM</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">Location</h3>
                <p className="text-gray-400">Destin High School, FL</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-2">Registrations</h4>
                <p className="text-3xl">172</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-2">Revenue</h4>
                <p className="text-3xl">$12,940</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-2">Messages</h4>
                <p className="text-3xl">0</p>
                <p className="text-gray-500 text-sm">No new messages</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Registrations per Day</h2>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={dailyRegistrations}>
                  <XAxis dataKey="day" stroke="#ccc" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="registrations" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </>
        )}

        {activeTab === "registrations" && (
          <div>
            <h2 className="text-xl font-bold mb-4">All Registrations</h2>
            <div className="overflow-x-auto max-h-[500px] overflow-y-scroll border border-gray-700 rounded-lg">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-800 sticky top-0">
                  <tr>
                    <th className="p-3 text-left">Name</th>
                    <th className="p-3 text-left">Email</th>
                    <th className="p-3 text-left">Position</th>
                    <th className="p-3 text-left">Age</th>
                    <th className="p-3 text-left">Shirt Size</th>
                  </tr>
                </thead>
                <tbody>
                  {fakeRegistrations.map((r, i) => (
                    <tr key={i} className="border-t border-gray-800 hover:bg-gray-800">
                      <td className="p-3">{r.name}</td>
                      <td className="p-3">{r.email}</td>
                      <td className="p-3">{r.position}</td>
                      <td className="p-3">{r.age}</td>
                      <td className="p-3">{r.shirt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "analytics" && (
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-xl font-semibold mb-2">Daily Registrations</h2>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={dailyRegistrations}>
                  <XAxis dataKey="day" stroke="#ccc" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="registrations" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Revenue by Camp</h2>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={revenueByCamp}>
                  <XAxis dataKey="name" stroke="#ccc" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="revenue" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Shirt Size Distribution</h2>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie data={shirtSizes} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
                    {shirtSizes.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Legend />
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Position Breakdown</h2>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie data={positions} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
                    {positions.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Legend />
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Age Demographics</h2>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={ages}>
                  <XAxis dataKey="age" stroke="#ccc" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" fill="#ff7f50" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
