'use client';
export default function HeroSection() {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Content */}
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Great software is built with amazing developers
          </h1>
          <p className="text-lg text-gray-600 max-w-xl">
            We help build and manage a team of world-class developers to bring your vision to life
          </p>

          {/* Newsletter Form */}
          <div className="space-y-8">
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Subscribe newsletter"
                className="flex-1"
              />
              <button
                className="bg-[#8D448B] hover:bg-[#7D347A] text-white border-2 border-white rounded-md px-6 py-3 text-lg h-auto"
              >
                Subscribe
              </button>
            </form>
          </div>


          {/* Sponsors */}
          <div className="pt-8">
            <p className="text-sm text-gray-500 mb-4">Sponsored by:</p>
            <div className="flex items-center gap-8">
              <img
                src="/roo.png?height=30&width=100"
                alt="PayPal"
                className="h-8 opacity-50"
              />
              <img
                src="/placeholder.png?height=30&width=100"
                alt="Google"
                className="h-8 opacity-50"
              />
              <img
                src="/ro.png?height=30&width=100"
                alt="Dropbox"
                className="h-8 opacity-50"
              />
            </div>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="hidden lg:block">
          <img
            src="/me.png?height=600&width=600"
            alt="Developer illustration"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
