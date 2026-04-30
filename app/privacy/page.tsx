export default function PrivacyPage() {
  return (
    <main className="min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-nw-accent mb-6">Privacy Policy</h1>

        <div className="space-y-6 text-nw-text">
          <section className="bg-nw-secondary rounded-lg p-6">
            <p className="text-sm text-nw-text/70 mb-4">
              <strong>Last Updated:</strong> January 2025
            </p>
            <p className="mb-4">
              At NW Calculate, we take your privacy seriously. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our website and use our calculator tools.
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy,
              please do not access the site.
            </p>
          </section>

          <section className="bg-nw-secondary rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-nw-accent mb-4">Information We Collect</h2>

            <h3 className="text-xl font-semibold text-nw-accent mb-3 mt-4">Automatically Collected Information</h3>
            <p className="mb-4">
              When you visit our website, we may automatically collect certain information about your device and
              your interaction with our site. This information may include:
            </p>
            <ul className="space-y-2 mb-4">
              <li>• Browser type and version</li>
              <li>• Operating system</li>
              <li>• IP address</li>
              <li>• Time zone settings</li>
              <li>• Pages visited and time spent on pages</li>
              <li>• Referring website addresses</li>
              <li>• Device identifiers and characteristics</li>
            </ul>
            <p className="mb-4">
              This information is collected through cookies, web beacons, and similar tracking technologies.
              We use this data to analyze trends, administer the site, track user movements, and gather
              demographic information for aggregate use.
            </p>

            <h3 className="text-xl font-semibold text-nw-accent mb-3 mt-4">Calculator Data</h3>
            <p className="mb-4">
              When you use our calculators (Crafting Calculator, Trading Calculator, or Gear Score Calculator),
              all calculations are performed locally in your browser. We do not store, transmit, or have access
              to the specific values you enter into our calculators. Your calculation data remains private and
              is never sent to our servers.
            </p>

            <h3 className="text-xl font-semibold text-nw-accent mb-3 mt-4">Cookies and Local Storage</h3>
            <p className="mb-4">
              We may use cookies and local storage to enhance your experience on our website. Cookies are small
              data files stored on your device that help us remember your preferences and improve site functionality.
              You can control cookie settings through your browser preferences, though disabling cookies may affect
              some features of our site.
            </p>
          </section>

          <section className="bg-nw-secondary rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-nw-accent mb-4">How We Use Your Information</h2>
            <p className="mb-4">
              We use the information we collect in the following ways:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-nw-accent mr-2">•</span>
                <span><strong>To provide and maintain our service:</strong> Ensuring our calculators function properly and deliver accurate results.</span>
              </li>
              <li className="flex items-start">
                <span className="text-nw-accent mr-2">•</span>
                <span><strong>To improve our website:</strong> Analyzing usage patterns to enhance user experience and add new features.</span>
              </li>
              <li className="flex items-start">
                <span className="text-nw-accent mr-2">•</span>
                <span><strong>To monitor site performance:</strong> Identifying and fixing technical issues, bugs, and errors.</span>
              </li>
              <li className="flex items-start">
                <span className="text-nw-accent mr-2">•</span>
                <span><strong>To analyze trends:</strong> Understanding how users interact with our tools to make data-driven improvements.</span>
              </li>
              <li className="flex items-start">
                <span className="text-nw-accent mr-2">•</span>
                <span><strong>To display advertisements:</strong> We may use third-party advertising services like Google AdSense to display relevant ads.</span>
              </li>
              <li className="flex items-start">
                <span className="text-nw-accent mr-2">•</span>
                <span><strong>To comply with legal obligations:</strong> Meeting regulatory requirements and responding to legal requests.</span>
              </li>
            </ul>
          </section>

          <section className="bg-nw-secondary rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-nw-accent mb-4">Third-Party Services</h2>

            <h3 className="text-xl font-semibold text-nw-accent mb-3 mt-4">Google AdSense</h3>
            <p className="mb-4">
              We use Google AdSense to display advertisements on our website. Google AdSense uses cookies and
              similar technologies to serve ads based on your prior visits to our website or other websites.
              Google's use of advertising cookies enables it and its partners to serve ads based on your visit
              to our site and/or other sites on the Internet.
            </p>
            <p className="mb-4">
              You may opt out of personalized advertising by visiting{' '}
              <a href="https://www.google.com/settings/ads" className="text-nw-accent hover:underline" target="_blank" rel="noopener noreferrer">
                Google Ads Settings
              </a>
              . Alternatively, you can opt out of third-party vendor's use of cookies for personalized advertising
              by visiting{' '}
              <a href="http://www.aboutads.info/choices/" className="text-nw-accent hover:underline" target="_blank" rel="noopener noreferrer">
                www.aboutads.info
              </a>
              .
            </p>

            <h3 className="text-xl font-semibold text-nw-accent mb-3 mt-4">Analytics Services</h3>
            <p className="mb-4">
              We may use third-party analytics services to help us understand how users interact with our website.
              These services may collect information about your use of our site and other websites over time. This
              information is used to analyze and improve our service, but it does not identify you personally.
            </p>

            <h3 className="text-xl font-semibold text-nw-accent mb-3 mt-4">Hosting Services</h3>
            <p className="mb-4">
              Our website is hosted on Vercel, a cloud platform provider. Vercel may collect and process certain
              technical information to provide hosting services. For more information, please review Vercel's
              privacy policy.
            </p>
          </section>

          <section className="bg-nw-secondary rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-nw-accent mb-4">Data Security</h2>
            <p className="mb-4">
              We implement appropriate technical and organizational security measures to protect your information
              against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="space-y-2 mb-4">
              <li>• Secure HTTPS encryption for all data transmission</li>
              <li>• Regular security assessments and updates</li>
              <li>• Limited access to personal information by authorized personnel only</li>
              <li>• Secure hosting infrastructure with industry-standard protections</li>
            </ul>
            <p className="mb-4">
              However, please note that no method of transmission over the Internet or electronic storage is 100%
              secure. While we strive to use commercially acceptable means to protect your information, we cannot
              guarantee its absolute security.
            </p>
          </section>

          <section className="bg-nw-secondary rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-nw-accent mb-4">Data Retention</h2>
            <p className="mb-4">
              We retain automatically collected information for as long as necessary to fulfill the purposes outlined
              in this Privacy Policy, unless a longer retention period is required or permitted by law. Since we do
              not collect or store your calculator input data, there is no retention period for that information.
            </p>
            <p className="mb-4">
              Analytics and usage data may be retained for up to 26 months to help us understand long-term trends
              and improve our services. After this period, data is either deleted or anonymized so that it can no
              longer be associated with individual users.
            </p>
          </section>

          <section className="bg-nw-secondary rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-nw-accent mb-4">Your Privacy Rights</h2>
            <p className="mb-4">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-nw-accent mr-2">•</span>
                <span><strong>Right to Access:</strong> You can request information about the personal data we hold about you.</span>
              </li>
              <li className="flex items-start">
                <span className="text-nw-accent mr-2">•</span>
                <span><strong>Right to Correction:</strong> You can request that we correct any inaccurate information.</span>
              </li>
              <li className="flex items-start">
                <span className="text-nw-accent mr-2">•</span>
                <span><strong>Right to Deletion:</strong> You can request that we delete your personal information.</span>
              </li>
              <li className="flex items-start">
                <span className="text-nw-accent mr-2">•</span>
                <span><strong>Right to Object:</strong> You can object to our processing of your personal information.</span>
              </li>
              <li className="flex items-start">
                <span className="text-nw-accent mr-2">•</span>
                <span><strong>Right to Data Portability:</strong> You can request a copy of your data in a machine-readable format.</span>
              </li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, please contact us using the information provided in our Contact page.
            </p>
          </section>

          <section className="bg-nw-secondary rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-nw-accent mb-4">Children's Privacy</h2>
            <p className="mb-4">
              Our website is not intended for children under the age of 13. We do not knowingly collect personal
              information from children under 13. If you are a parent or guardian and believe that your child has
              provided us with personal information, please contact us immediately. If we become aware that we have
              collected personal information from children under 13 without verification of parental consent, we
              will take steps to remove that information from our servers.
            </p>
          </section>

          <section className="bg-nw-secondary rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-nw-accent mb-4">International Data Transfers</h2>
            <p className="mb-4">
              Your information may be transferred to and maintained on computers located outside of your state,
              province, country, or other governmental jurisdiction where data protection laws may differ from
              those in your jurisdiction. By using our website, you consent to the transfer of your information
              to our facilities and to the third parties with whom we share it as described in this Privacy Policy.
            </p>
          </section>

          <section className="bg-nw-secondary rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-nw-accent mb-4">Changes to This Privacy Policy</h2>
            <p className="mb-4">
              We may update our Privacy Policy from time to time to reflect changes in our practices, technology,
              legal requirements, or other factors. We will notify you of any material changes by posting the new
              Privacy Policy on this page and updating the "Last Updated" date at the top of this policy.
            </p>
            <p className="mb-4">
              We encourage you to review this Privacy Policy periodically to stay informed about how we are
              protecting your information. Your continued use of our website after any changes to this Privacy
              Policy constitutes your acceptance of such changes.
            </p>
          </section>

          <section className="bg-nw-secondary rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-nw-accent mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices,
              please contact us through our Contact page. We will respond to your inquiry as soon as possible,
              typically within 30 days.
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
