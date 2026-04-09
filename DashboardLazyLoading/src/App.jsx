import { lazy, Suspense } from 'react'
import './App.css'

const LazyDashboard = lazy(() => import('./Dashboard.jsx'))

function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <LazyDashboard />
    </Suspense>
  )
}

export default App
