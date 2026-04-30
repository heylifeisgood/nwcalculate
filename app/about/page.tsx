export default function AboutPage() {
  return (
    <main className="min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-nw-accent mb-6">About NW Calculate</h1>

        <div className="space-y-6 text-nw-text">
          <section className="bg-nw-secondary rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-nw-accent mb-4">What is NW Calculate?</h2>
            <p className="mb-4">
              NW Calculate is a comprehensive web-based calculator suite designed specifically for New World players.
              Our mission is to provide accurate, easy-to-use tools that help players make informed decisions about
              crafting, trading, and gear optimization in the game.
            </p>
            <p>
              Whether you're a casual player looking to maximize your profits at the Trading Post, a dedicated
              crafter calculating material costs, or a competitive player optimizing your gear score, NW Calculate
              has the tools you need.
            </p>
          </section>

          <section className="bg-nw-secondary rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-nw-accent mb-4">Our Tools</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-nw-accent mb-2">Crafting Calculator</h3>
                <p>
                  Calculate the total cost of crafting items including all materials, crafting fees, and taxes.
                  Determine if crafting an item is profitable before you invest your resources. Our calculator
                  supports multiple materials and provides detailed breakdowns of all costs involved.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-nw-accent mb-2">Trading Calculator</h3>
                <p>
                  Analyze buy-and-resell opportunities in the Trading Post. Calculate your profit margins after
                  accounting for buy taxes, sell taxes, and listing fees. Our ROI calculator helps you identify
                  the most profitable trading opportunities and optimize your gold-making strategies.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-nw-accent mb-2">Gear Score Calculator</h3>
                <p>
                  Track your character's gear score across all equipment slots. Calculate your average gear score
                  and identify which pieces need upgrading. Our tier classification system helps you understand
                  your current progression level and plan your gear upgrades efficiently.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-nw-secondary rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-nw-accent mb-4">Why Choose NW Calculate?</h2>

            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-nw-accent mr-2">✓</span>
                <span><strong>Free to Use:</strong> All our calculators are completely free with no registration required.</span>
              </li>
              <li className="flex items-start">
                <span className="text-nw-accent mr-2">✓</span>
                <span><strong>Accurate Calculations:</strong> Our formulas are based on current game mechanics and regularly updated.</span>
              </li>
              <li className="flex items-start">
                <span className="text-nw-accent mr-2">✓</span>
                <span><strong>Mobile Friendly:</strong> Use our calculators on any device - desktop, tablet, or smartphone.</span>
              </li>
              <li className="flex items-start">
                <span className="text-nw-accent mr-2">✓</span>
                <span><strong>No Data Collection:</strong> We don't store your calculations or personal information.</span>
              </li>
              <li className="flex items-start">
                <span className="text-nw-accent mr-2">✓</span>
                <span><strong>Fast & Lightweight:</strong> Optimized for speed with minimal loading times.</span>
              </li>
            </ul>
          </section>

          <section className="bg-nw-secondary rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-nw-accent mb-4">Our Story</h2>
            <p className="mb-4">
              NW Calculate was created by passionate New World players who recognized the need for reliable
              calculation tools in the community. We understand the complexity of the game's economy and crafting
              systems, and we wanted to create tools that make these calculations simple and accessible to everyone.
            </p>
            <p>
              Since our launch, we've helped thousands of players optimize their gameplay, save time on manual
              calculations, and make better economic decisions in Aeternum.
            </p>
          </section>

          <section className="bg-nw-secondary rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-nw-accent mb-4">Technology</h2>
            <p className="mb-4">
              NW Calculate is built with modern web technologies to ensure the best user experience:
            </p>
            <ul className="space-y-2">
              <li>• Next.js 13 for fast, server-side rendering</li>
              <li>• TypeScript for type-safe, reliable code</li>
              <li>• Tailwind CSS for responsive, beautiful design</li>
              <li>• Deployed on Vercel for global CDN performance</li>
            </ul>
          </section>

          <div className="text-center pt-6">
            <a
              href="/"
              className="inline-block px-6 py-3 bg-nw-accent text-nw-primary rounded-lg font-semibold hover:bg-nw-accent/90 transition-colors"
            >
              Back to Calculators
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
