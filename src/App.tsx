import { useEffect } from 'react'
import StatusBar from './components/StatusBar'
import Hero from './components/Hero'
import Overview from './components/Overview'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Milestones from './components/Milestones'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CursorGlow from './components/CursorGlow'
import PortfolioIndex from './components/portfolio/PortfolioIndex'
import ProjectPage from './components/portfolio/ProjectPage'
import { projects } from './data/projects'

const SITE_TITLE = 'Mark James — Web Engineer & Engineering Manager'

function Home() {
  // the page renders after the browser's own jump to the fragment, so arriving
  // from another page at /#deploys needs a nudge
  useEffect(() => {
    if (window.location.hash) {
      document.getElementById(window.location.hash.slice(1))?.scrollIntoView()
    }
  }, [])

  return (
    <>
      <Hero />
      <Overview />
      <Experience />
      <Skills />
      <Milestones />
      <Contact />
    </>
  )
}

function NotFound() {
  return (
    <section className="bg-grid flex min-h-[60svh] flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-red">404 / not.found</p>
      <h1 className="mt-4 font-display text-5xl font-black uppercase tracking-tight text-ink">No such route</h1>
      <a href="/" className="mt-8 font-mono text-xs uppercase tracking-[0.15em] text-ink-dim hover:text-signal">
        ← back to the status page
      </a>
    </section>
  )
}

function resolve(pathname: string): { page: React.ReactNode; title: string } {
  const path = pathname.replace(/\/+$/, '') || '/'
  if (path === '/') return { page: <Home />, title: SITE_TITLE }
  if (path === '/portfolio') return { page: <PortfolioIndex />, title: 'Portfolio — Mark James' }

  const match = path.match(/^\/portfolio\/([^/]+)$/)
  const project = match && projects.find((p) => p.slug === match[1])
  if (project) return { page: <ProjectPage project={project} />, title: `${project.name} — Mark James` }

  return { page: <NotFound />, title: 'Not found — Mark James' }
}

function App() {
  const { page, title } = resolve(window.location.pathname)

  useEffect(() => {
    document.title = title
  }, [title])

  return (
    <div className="relative min-h-screen bg-void text-ink">
      <CursorGlow />
      <div className="relative z-10">
        <StatusBar />
        <main>{page}</main>
        <Footer />
      </div>
    </div>
  )
}

export default App
