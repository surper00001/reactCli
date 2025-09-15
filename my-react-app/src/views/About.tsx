import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="space-y-6 text-center">
        <h1 className="text-3xl font-semibold">About</h1>
        <p>Starter with Router, Redux, Tailwind, Axios ready.</p>
        <Link className="text-indigo-400 underline" to="/">Back Home</Link>
      </div>
    </div>
  )
}

