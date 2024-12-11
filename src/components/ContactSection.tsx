export default function ContactSection() {
  return (
    <section className="p-6 border-t border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
        Contact Us
      </h2>
      <p className="text-gray-600 mb-4">
        We'd love to hear from you! Get in touch with us to learn more about our initiatives
        or to get involved.
      </p>
      <div className="bg-gray-50 p-4 rounded-lg space-y-2">
        <p className="text-gray-600">📧 Email: info@newsociety.org</p>
        <p className="text-gray-600">📱 Phone: (555) 123-4567</p>
        <p className="text-gray-600">📍 Address: 123 Innovation Street, Future City, FC 12345</p>
      </div>
    </section>
  )
}
