export default function ContactPage() {
  return (
    <main className="min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-nw-accent mb-6">Contact Us</h1>

        <div className="space-y-6 text-nw-text">
          <section className="bg-nw-secondary rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-nw-accent mb-4">Get in Touch</h2>
            <p className="mb-4">
              We're here to help! Whether you have questions about our calculators, found a bug, have suggestions
              for new features, or need assistance with anything else, we'd love to hear from you. Your feedback
              helps us improve NW Calculate and provide better tools for the New World community.
            </p>
            <p className="mb-4">
              Please feel free to reach out to us using any of the contact methods below. We typically respond
              to all inquiries within 24-48 hours during business days.
            </p>
          </section>

          <section className="bg-nw-secondary rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-nw-accent mb-4">Contact Information</h2>

            <div className="space-y-4">
              <div className="border-l-4 border-nw-accent pl-4">
                <h3 className="text-lg font-semibold text-nw-accent mb-2">General Inquiries</h3>
                <p className="mb-2">For general questions, feedback, or suggestions:</p>
                <a href="mailto:contact@nwcalculate.com" className="text-nw-accent hover:underline font-semibold">
                  contact@nwcalculate.com
                </a>
              </div>

              <div className="border-l-4 border-nw-accent pl-4">
                <h3 className="text-lg font-semibold text-nw-accent mb-2">Technical Support</h3>
                <p className="mb-2">For bug reports, technical issues, or calculator errors:</p>
                <a href="mailto:support@nwcalculate.com" className="text-nw-accent hover:underline font-semibold">
                  support@nwcalculate.com
                </a>
              </div>

              <div className="border-l-4 border-nw-accent pl-4">
                <h3 className="text-lg font-semibold text-nw-accent mb-2">Business & Partnerships</h3>
                <p className="mb-2">For business inquiries, partnerships, or advertising:</p>
                <a href="mailto:business@nwcalculate.com" className="text-nw-accent hover:underline font-semibold">
                  business@nwcalculate.com
                </a>
              </div>

              <div className="border-l-4 border-nw-accent pl-4">
                <h3 className="text-lg font-semibold text-nw-accent mb-2">Privacy & Legal</h3>
                <p className="mb-2">For privacy concerns, data requests, or legal matters:</p>
                <a href="mailto:privacy@nwcalculate.com" className="text-nw-accent hover:underline font-semibold">
                  privacy@nwcalculate.com
                </a>
              </div>
            </div>
          </section>

          <section className="bg-nw-secondary rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-nw-accent mb-4">What to Include in Your Message</h2>
            <p className="mb-4">
              To help us assist you more effectively, please include the following information when contacting us:
            </p>
            <ul className="space-y-2">
              <li>• <strong>Subject:</strong> A clear, descriptive subject line</li>
              <li>• <strong>Calculator Type:</strong> Which calculator you're using (Crafting, Trading, or Gear Score)</li>
              <li>• <strong>Issue Description:</strong> A detailed description of your question or problem</li>
              <li>• <strong>Steps to Reproduce:</strong> For bugs, the steps that led to the issue</li>
              <li>• <strong>Browser & Device:</strong> Your browser type, version, and device (desktop/mobile)</li>
              <li>• <strong>Screenshots:</strong> If applicable, screenshots can be very helpful</li>
            </ul>
          </section>

          <section className="bg-nw-secondary rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-nw-accent mb-4">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-nw-accent mb-2">How accurate are the calculators?</h3>
                <p>
                  Our calculators are based on the current New World game mechanics and are regularly updated to
                  reflect any changes made by Amazon Games. We strive for 100% accuracy, but if you notice any
                  discrepancies, please let us know immediately so we can investigate and correct them.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-nw-accent mb-2">Do I need to create an account?</h3>
                <p>
                  No! All our calculators are completely free to use without any registration or account creation.
                  Simply visit the site and start calculating. We believe in keeping things simple and accessible
                  for everyone.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-nw-accent mb-2">Is my calculation data saved?</h3>
                <p>
                  No, we do not store or save any of your calculation data. All calculations are performed locally
                  in your browser, and your input values are never transmitted to our servers. Your data remains
                  completely private and is cleared when you close your browser or refresh the page.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-nw-accent mb-2">Can I use these calculators on mobile?</h3>
                <p>
                  Yes! Our calculators are fully responsive and work great on all devices including smartphones,
                  tablets, and desktop computers. The interface automatically adapts to your screen size for the
                  best experience.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-nw-accent mb-2">Why are there ads on the site?</h3>
                <p>
                  We display ads through Google AdSense to help cover the costs of hosting, maintenance, and
                  development. This allows us to keep all our calculators free for everyone. We carefully select
                  ad placements to minimize disruption to your experience while using our tools.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-nw-accent mb-2">Can I suggest new features or calculators?</h3>
                <p>
                  Absolutely! We love hearing from our users and are always looking to add new features and tools.
                  If you have an idea for a new calculator or an improvement to an existing one, please send us
                  an email at contact@nwcalculate.com. We review all suggestions and prioritize based on community
                  demand and feasibility.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-nw-accent mb-2">How often are the calculators updated?</h3>
                <p>
                  We monitor New World updates closely and update our calculators whenever there are changes to
                  game mechanics, formulas, or tax rates. Major game updates are typically reflected in our
                  calculators within 24-48 hours. We also continuously improve the user interface and add new
                  features based on user feedback.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-nw-accent mb-2">Is NW Calculate affiliated with Amazon Games?</h3>
                <p>
                  No, NW Calculate is an independent fan-made project and is not affiliated with, endorsed by, or
                  sponsored by Amazon Games. New World is a trademark of Amazon Games. We are simply passionate
                  players who wanted to create useful tools for the community.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-nw-accent mb-2">I found a bug. How do I report it?</h3>
                <p>
                  Thank you for helping us improve! Please email us at support@nwcalculate.com with details about
                  the bug, including which calculator you were using, what you were trying to do, what happened
                  versus what you expected, and your browser/device information. Screenshots are extremely helpful
                  if possible.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-nw-accent mb-2">Can I use these calculators offline?</h3>
                <p>
                  Currently, our calculators require an internet connection to load the website. However, once
                  loaded, the calculations themselves are performed locally in your browser. We're exploring
                  options for offline functionality in the future, so stay tuned for updates.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-nw-accent mb-2">How can I support NW Calculate?</h3>
                <p>
                  The best way to support us is by using our calculators and sharing them with other New World
                  players who might find them useful. You can also help by providing feedback, reporting bugs,
                  and suggesting improvements. If you'd like to support us financially, simply allowing ads to
                  display helps cover our operating costs.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-nw-accent mb-2">Do you have an API for developers?</h3>
                <p>
                  We don't currently offer a public API, but we're open to discussing integration opportunities
                  with other New World community tools and websites. If you're interested in a partnership or
                  integration, please contact us at business@nwcalculate.com.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-nw-secondary rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-nw-accent mb-4">Response Time</h2>
            <p className="mb-4">
              We aim to respond to all inquiries within 24-48 hours during business days (Monday through Friday).
              During weekends and holidays, response times may be slightly longer. For urgent technical issues
              affecting the functionality of our calculators, we prioritize those requests and typically respond
              within a few hours.
            </p>
            <p>
              Please note that we receive a high volume of emails, so we appreciate your patience. Rest assured
              that we read every message and will get back to you as soon as possible.
            </p>
          </section>

          <section className="bg-nw-secondary rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-nw-accent mb-4">Community Guidelines</h2>
            <p className="mb-4">
              When contacting us, we ask that you:
            </p>
            <ul className="space-y-2">
              <li>• Be respectful and courteous in your communications</li>
              <li>• Provide clear and detailed information about your inquiry</li>
              <li>• Avoid sending duplicate messages (we'll respond to your first email)</li>
              <li>• Use the appropriate email address for your type of inquiry</li>
              <li>• Be patient while waiting for a response</li>
            </ul>
            <p className="mt-4">
              We're committed to maintaining a positive and helpful community, and we appreciate your cooperation
              in making NW Calculate a valuable resource for all New World players.
            </p>
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
