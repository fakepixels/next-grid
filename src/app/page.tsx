import Image from 'next/image'

const companyLinks = [
  'https:/station.express',
  'https:/app.uniswap.org',
  'https://gnosis-safe.io/',
  'https://zora.co/',
  'https://hey.xyz',
  'https:/compound.finance'
  // ... add more company links as needed
];

export default function Home() {
  return (
    <main className="min-h-screen p-24 flex h-screen overflow-hidden">
      {/* Left section for the logo */}
      <div className="flex flex-1 flex-col items-center justify-center">
        <div className="w-1/2">
          <Image src="/terminal.png" alt="Station Logo" layout="responsive" width={500} height={500} />
        </div>
      </div>

      {/* Right section for the 2x3 grid */}
      <div className="flex flex-1 flex-col items-center justify-center pl-8">
    <div className="grid grid-cols-2 gap-4 w-full">
      {Array(6).fill(0).map((_, index) => (
        <a href={companyLinks[index]} target="_blank" rel="noopener noreferrer" key={index} className="border border-gray-700 p-4 h-64 transform transition-transform duration-300 hover:scale-105 hover:bg-white hover:bg-opacity-20"> 
          <div className="flex items-center justify-center h-full">
            <img src={`/company${index + 1}-logo.png`} alt={`Company ${index + 1} Logo`} className="w-1/2" />
          </div>
        </a>
      ))}
    </div>
</div>
    </main>
  )
}
