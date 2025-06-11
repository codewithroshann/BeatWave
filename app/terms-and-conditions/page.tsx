import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Music } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="min-h-screen ">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <Link href="/">
              <Button variant="outline" size="sm" className="mr-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <div className="flex items-center">
              <Music className="h-8 w-8 text-purple-600 mr-3" />
              <h1 className="text-3xl font-bold text-white">Beatwave</h1>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Terms and Conditions</CardTitle>
              <p className="text-sm text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <div className="space-y-8">
                <section>
                  <h2 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
                  <p className="text-white leading-relaxed">
                    By accessing and using Beatwave ("the Platform"), you accept and agree to be bound by the terms and
                    provision of this agreement. If you do not agree to abide by the above, please do not use this
                    service.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4">2. Description of Service</h2>
                  <p className="text-white leading-relaxed mb-3">
                    Beatwave is a digital marketplace that connects music producers with artists, musicians, and content
                    creators. Our platform allows:
                  </p>
                  <ul className="list-disc pl-6 text-white space-y-2">
                    <li>Purchase and download of instrumental beats and music tracks</li>
                    <li>Various licensing options for different usage rights</li>
                    <li>Secure payment processing and instant digital delivery</li>
                    <li>Producer profiles and beat categorization</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4">3. User Accounts and Registration</h2>
                  <p className="text-white leading-relaxed mb-3">
                    To access certain features of our service, you must register for an account. You agree to:
                  </p>
                  <ul className="list-disc pl-6 text-white space-y-2">
                    <li>Provide accurate, current, and complete information during registration</li>
                    <li>Maintain and update your account information</li>
                    <li>Keep your password secure and confidential</li>
                    <li>Accept responsibility for all activities under your account</li>
                    <li>Notify us immediately of any unauthorized use of your account</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4">4. Intellectual Property Rights</h2>
                  <p className="text-white leading-relaxed mb-3">
                    All beats, instrumentals, and music content on Beatwave are protected by copyright and other
                    intellectual property laws:
                  </p>
                  <ul className="list-disc pl-6 text-white space-y-2">
                    <li>Producers retain ownership of their original compositions</li>
                    <li>Purchasing a beat grants you specific usage rights as outlined in the chosen license</li>
                    <li>Unauthorized distribution, resale, or sharing of purchased beats is prohibited</li>
                    <li>The Beatwave platform, design, and technology are owned by Beatwave</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4">5. License Types and Usage Rights</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-800">Basic License</h3>
                      <p className="text-white">
                        Non-exclusive rights for personal use, demos, and limited commercial use
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Premium License</h3>
                      <p className="text-white">
                        Extended commercial rights including radio play, streaming, and performances
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Exclusive License</h3>
                      <p className="text-white">Full exclusive rights with beat removal from marketplace</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4">6. Prohibited Uses</h2>
                  <p className="text-white leading-relaxed mb-3">You may not use our service:</p>
                  <ul className="list-disc pl-6 text-white space-y-2">
                    <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                    <li>
                      To violate any international, federal, provincial, or state regulations, rules, laws, or local
                      ordinances
                    </li>
                    <li>
                      To infringe upon or violate our intellectual property rights or the intellectual property rights
                      of others
                    </li>
                    <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                    <li>To submit false or misleading information</li>
                    <li>To upload or transmit viruses or any other type of malicious code</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4">7. Payment Terms</h2>
                  <p className="text-white leading-relaxed mb-3">
                    All purchases are processed securely through our payment partners:
                  </p>
                  <ul className="list-disc pl-6 text-white space-y-2">
                    <li>Prices are displayed in USD and include all applicable taxes</li>
                    <li>Payment is required before download access is granted</li>
                    <li>We accept major credit cards, PayPal, and other approved payment methods</li>
                    <li>All sales are final unless otherwise specified in our refund policy</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4">8. Privacy Policy</h2>
                  <p className="text-white leading-relaxed">
                    Your privacy is important to us. We collect, use, and protect your personal information in
                    accordance with our Privacy Policy. By using our service, you consent to the collection and use of
                    information as outlined in our Privacy Policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4">9. Limitation of Liability</h2>
                  <p className="text-white leading-relaxed">
                    In no event shall Beatwave, nor its directors, employees, partners, agents, suppliers, or
                    affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages,
                    including without limitation, loss of profits, data, use, goodwill, or other intangible losses,
                    resulting from your use of the service.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4">10. Termination</h2>
                  <p className="text-white leading-relaxed">
                    We may terminate or suspend your account and bar access to the service immediately, without prior
                    notice or liability, under our sole discretion, for any reason whatsoever and without limitation,
                    including but not limited to a breach of the Terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4">11. Changes to Terms</h2>
                  <p className="text-white leading-relaxed">
                    We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a
                    revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4">12. Contact Information</h2>
                  <p className="text-white leading-relaxed">
                    If you have any questions about these Terms and Conditions, please contact us at:
                  </p>
                  <div className="mt-3 text-white">
                    <p>Email: legal@beatwave.com</p>
                    <p>Address: [Your Business Address]</p>
                    <p>Phone: [Your Contact Number]</p>
                  </div>
                </section>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
