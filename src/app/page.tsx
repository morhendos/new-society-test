import AboutSection from '../components/AboutSection'
import MissionSection from '../components/MissionSection'
import ContactSection from '../components/ContactSection'

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Welcome to New Society
        </h1>
        <AboutSection />
        <MissionSection />
        <ContactSection />
      </div>
    </main>
  )
}
