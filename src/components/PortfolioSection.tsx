import Image from 'next/image'

export default function PortfolioSection() {
  return (
    <section className="w-screen h-screen flex flex-col items-center bg-black justify-center text-left">
      <h2 className="text-4xl font-bold">My Portfolio</h2>
      <p className="text-gray-400 mb-8">Subheading goes here</p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="overflow-hidden rounded-lg">
            <Image
              src={`/placeholder.svg?height=300&width=500&text=Project+${i}`}
              alt={`Project ${i}`}
              width={500}
              height={300}
              className="transform transition hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  )
}