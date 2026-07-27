import StatusBar from './components/StatusBar'
import Hero from './components/Hero'
import Overview from './components/Overview'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Milestones from './components/Milestones'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CursorGlow from './components/CursorGlow'

function App() {
  return (
    <div className="relative min-h-screen bg-void text-ink">
      <CursorGlow />
      <div className="relative z-10">
        <StatusBar />
        <main>
          <Hero />
          <Overview />
          <Experience />
          <Skills />
          <Milestones />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
