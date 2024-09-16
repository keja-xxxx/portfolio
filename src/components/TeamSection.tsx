import Image from 'next/image'

export default function TeamSection() {
  return (
    <section className="w-screen h-screen flex flex-col items-center bg-black justify-center text-left">
      <h2 className="text-4xl font-bold">Our Team</h2>
      <p className="text-gray-400 mb-8">Subheading goes here</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {['Mark Twain', 'Jane Doe', 'John Smith'].map((name, i) => (
          <div key={name} className="p-6 bg-gray-700 rounded-lg">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
              <Image
                src={`/placeholder.svg?height=128&width=128&text=${name}`}
                alt={name}
                width={128}
                height={128}
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold">{name}</h3>
            <p className="text-gray-400">{['CEO', 'COO', 'CTO'][i]}</p>
          </div>
        ))}
      </div>
    </section>
  )
}