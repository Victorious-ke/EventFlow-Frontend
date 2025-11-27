import React from 'react';
import { Link } from 'react-router-dom';


export default function Navbar() {
return (
<nav className="bg-white shadow p-3 flex items-center justify-between">
<Link to="/" className="text-xl font-bold">EventsApp</Link>
<div className="space-x-4">
<Link to="/" className="hover:underline">Home</Link>
<Link to="/create" className="bg-blue-600 text-white px-3 py-1 rounded">Create Event</Link>
</div>
</nav>
);
}