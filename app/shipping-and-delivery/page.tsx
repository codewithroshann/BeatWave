import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ArrowLeft, Music, Download, Clock, Shield } from "lucide-react"

export default function ShippingPage() {
  return (
    <div className="min-h-screen">
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
              <CardTitle className="text-2xl">Shipping and Delivery Policy</CardTitle>
              <p className="text-sm text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <Alert className="mb-6">
                <Download className="h-4 w-4" />
                <AlertDescription>
                  All Beatwave products are digital downloads. No physical items are shipped. Your purchases are
                  delivered instantly to your account.
                </AlertDescription>
              </Alert>

              <div className="space-y-8">
                <section>
                  <h2 className="text-xl font-semibold mb-4">1. Digital Delivery Overview</h2>
                  <p className="text-white leading-relaxed mb-3">
                    Beatwave specializes in digital music content delivery. All beats, instrumentals, and related
                    content are delivered electronically through our secure platform. There are no physical products or
                    traditional shipping involved.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 mt-4">
                    <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                      <Clock className="h-5 w-5 text-blue-600 mr-2" />
                      <span className="text-sm font-medium">Instant Delivery</span>
                    </div>
                    <div className="flex items-center p-3 bg-green-50 rounded-lg">
                      <Download className="h-5 w-5 text-green-600 mr-2" />
                      <span className="text-sm font-medium">High-Quality Files</span>
                    </div>
                    <div className="flex items-center p-3 bg-purple-50 rounded-lg">
                      <Shield className="h-5 w-5 text-purple-600 mr-2" />
                      <span className="text-sm font-medium">Secure Access</span>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4">2. Delivery Process</h2>
                  <p className="text-white leading-relaxed mb-3">Here's how your digital content is delivered:</p>
                  <ol className="list-decimal pl-6 text-white space-y-3">
                    <li>
                      <strong>Purchase Confirmation:</strong> After successful payment, you'll receive an email
                      confirmation with your order details
                    </li>
                    <li>
                      <strong>Account Access:</strong> Your purchased beats are immediately added to your Beatwave
                      account library
                    </li>
                    <li>
                      <strong>Download Links:</strong> Direct download links are provided in your account dashboard and
                      via email
                    </li>
                    <li>
                      <strong>File Access:</strong> You can download your files in multiple formats (WAV, MP3, stems if
                      included)
                    </li>
                    <li>
                      <strong>License Documentation:</strong> Your license agreement and certificate are available for
                      download
                    </li>
                  </ol>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4">3. Delivery Timeframes</h2>
                  <div className="space-y-4">
                    <div className="border-l-4 border-green-500 pl-4">
                      <h3 className="font-semibold text-gray-800">Instant Delivery (Most Common)</h3>
                      <p className="text-white">
                        95% of purchases are delivered within 1-2 minutes of payment confirmation
                      </p>
                    </div>
                    <div className="border-l-4 border-yellow-500 pl-4">
                      <h3 className="font-semibold text-gray-800">Delayed Delivery</h3>
                      <p className="text-white">
                        In rare cases, delivery may take up to 15 minutes due to payment processing or system updates
                      </p>
                    </div>
                    <div className="border-l-4 border-red-500 pl-4">
                      <h3 className="font-semibold text-gray-800">Delivery Issues</h3>
                      <p className="text-white">
                        If you don't receive your content within 30 minutes, please contact our support team immediately
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4">4. File Formats and Quality</h2>
                  <p className="text-white leading-relaxed mb-3">Your digital downloads include:</p>
                  <ul className="list-disc pl-6 text-white space-y-2">
                    <li>
                      <strong>WAV Files:</strong> Uncompressed, studio-quality audio (44.1kHz/16-bit minimum)
                    </li>
                    <li>
                      <strong>MP3 Files:</strong> High-quality compressed audio (320kbps)
                    </li>
                    <li>
                      <strong>Stems/Trackouts:</strong> Individual instrument tracks (premium licenses only)
                    </li>
                    <li>
                      <strong>MIDI Files:</strong> When available and included in the license
                    </li>
                    <li>
                      <strong>License Agreement:</strong> PDF document outlining your usage rights
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4">5. Download Instructions</h2>
                  <p className="text-white leading-relaxed mb-3">To access your purchased content:</p>
                  <ol className="list-decimal pl-6 text-white space-y-2">
                    <li>Log into your Beatwave account</li>
                    <li>Navigate to "My Library" or "My Downloads"</li>
                    <li>Find your purchased beat and click "Download"</li>
                    <li>Choose your preferred file format</li>
                    <li>Save the files to your desired location</li>
                    <li>Download your license agreement for your records</li>
                  </ol>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4">6. Download Limitations and Access</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Download Attempts</h3>
                      <p className="text-white">
                        Each purchase includes unlimited download attempts for 12 months from the purchase date
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Account Access</h3>
                      <p className="text-white">
                        Your purchased content remains accessible in your account library indefinitely
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Re-download Policy</h3>
                      <p className="text-white">
                        You can re-download your purchases at any time through your account dashboard
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4">7. Technical Requirements</h2>
                  <p className="text-white leading-relaxed mb-3">To ensure smooth delivery and download:</p>
                  <ul className="list-disc pl-6 text-white space-y-2">
                    <li>
                      <strong>Internet Connection:</strong> Stable broadband connection recommended
                    </li>
                    <li>
                      <strong>Browser:</strong> Modern web browser with JavaScript enabled
                    </li>
                    <li>
                      <strong>Storage Space:</strong> Sufficient device storage for downloaded files
                    </li>
                    <li>
                      <strong>Email Access:</strong> Valid email address for delivery confirmations
                    </li>
                    <li>
                      <strong>Account Registration:</strong> Active Beatwave account required
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4">8. Delivery Confirmation</h2>
                  <p className="text-white leading-relaxed mb-3">
                    You will receive confirmation through multiple channels:
                  </p>
                  <ul className="list-disc pl-6 text-white space-y-2">
                    <li>
                      <strong>Email Receipt:</strong> Detailed purchase confirmation with download links
                    </li>
                    <li>
                      <strong>Account Notification:</strong> In-platform notification of successful delivery
                    </li>
                    <li>
                      <strong>SMS Alert:</strong> Optional text message confirmation (if enabled)
                    </li>
                    <li>
                      <strong>Dashboard Update:</strong> Immediate update to your account library
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4">9. Delivery Issues and Support</h2>
                  <p className="text-white leading-relaxed mb-3">If you experience delivery problems:</p>
                  <ul className="list-disc pl-6 text-white space-y-2">
                    <li>Check your spam/junk email folder for delivery notifications</li>
                    <li>Verify your internet connection is stable</li>
                    <li>Try logging out and back into your account</li>
                    <li>Clear your browser cache and cookies</li>
                    <li>Contact our support team with your order number</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4">10. International Delivery</h2>
                  <p className="text-white leading-relaxed">
                    Digital delivery is available worldwide with no additional fees or restrictions. All customers,
                    regardless of location, receive the same instant delivery service. However, please note:
                  </p>
                  <ul className="list-disc pl-6 text-white space-y-2 mt-3">
                    <li>Local internet speeds may affect download times</li>
                    <li>Some countries may have restrictions on digital content</li>
                    <li>Payment processing times may vary by region</li>
                    <li>Customer support is provided in English</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4">11. Backup and Storage Recommendations</h2>
                  <p className="text-white leading-relaxed mb-3">To protect your purchased content:</p>
                  <ul className="list-disc pl-6 text-white space-y-2">
                    <li>Create backup copies of downloaded files</li>
                    <li>Store files in multiple locations (cloud storage, external drives)</li>
                    <li>Keep your license agreements organized and accessible</li>
                    <li>Maintain access to your Beatwave account for re-downloads</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4">12. Contact Information</h2>
                  <p className="text-white leading-relaxed">For delivery-related questions or technical support:</p>
                  <div className="mt-3 text-white">
                    <p>Email: support@beatwave.com</p>
                    <p>Technical Support: tech@beatwave.com</p>
                    <p>Live Chat: Available 24/7 on our website</p>
                    <p>Response Time: Within 2-4 hours during business days</p>
                    <p>Emergency Support: [Your Emergency Contact] (for urgent delivery issues)</p>
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
