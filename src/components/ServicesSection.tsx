export default function ServicesSection() {
    return (
        
      <section className="w-screen h-screen flex flex-col items-center bg-black justify-center text-left">
        <h2 className="text-4xl font-bold">Our Services</h2>
        <p className="text-gray-400 mb-8">Subheading goes here</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-700 rounded-lg">
            <div className="text-green-500 mb-4">💎</div>
            <h3 className="text-xl font-bold">Development</h3>
            <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="p-6 bg-gray-700 rounded-lg">
            <div className="text-green-500 mb-4">💻</div>
            <h3 className="text-xl font-bold">Design</h3>
            <p className="text-gray-400">Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p>
          </div>
          <div className="p-6 bg-gray-700 rounded-lg">
            <div className="text-green-500 mb-4">🌐</div>
            <h3 className="text-xl font-bold">SEO</h3>
            <p className="text-gray-400">Vestibulum ac diam sit amet quam vehicula elementum sed sit.</p>
          </div>
        </div>
      </section>
    )
  }