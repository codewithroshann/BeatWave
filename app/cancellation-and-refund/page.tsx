import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ArrowLeft, Music, AlertCircle } from "lucide-react";

export default function RefundPage() {
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
              <CardTitle className="text-2xl">
                Cancellation and Refund Policy
              </CardTitle>
              <p className="text-sm text-gray-600">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <Alert className="mb-6">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  Due to the digital nature of our products, all sales are
                  generally final. Please read this policy carefully before
                  making a purchase.
                </AlertDescription>
              </Alert>

              <div className="space-y-8">
                <section>
                  <h2 className="text-xl font-semibold mb-4">
                    1. General Refund Policy
                  </h2>
                  <p className="text-white leading-relaxed mb-3">
                    At Beatwave, we understand that customer satisfaction is
                    paramount. However, due to the instant digital delivery
                    nature of our beats and instrumentals, we maintain a strict
                    no-refund policy under normal circumstances.
                  </p>
                  <p className="text-white leading-relaxed">
                    All sales are considered final once the digital content has
                    been successfully delivered to your account and download
                    links have been provided.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4">
                    2. Exceptional Circumstances for Refunds
                  </h2>
                  <p className="text-white leading-relaxed mb-3">
                    We may consider refunds in the following exceptional
                    circumstances:
                  </p>
                  <ul className="list-disc pl-6 text-white space-y-2">
                    <li>
                      <strong>Technical Issues:</strong> If there are technical
                      problems preventing you from downloading or accessing your
                      purchased content
                    </li>
                    <li>
                      <strong>Duplicate Purchases:</strong> If you accidentally
                      purchase the same beat multiple times within 24 hours
                    </li>
                    <li>
                      <strong>Payment Errors:</strong> If you were charged
                      incorrectly due to a system error
                    </li>
                    <li>
                      <strong>Fraudulent Activity:</strong> If unauthorized
                      purchases were made on your account
                    </li>
                    <li>
                      <strong>Defective Content:</strong> If the downloaded
                      files are corrupted or significantly different from what
                      was advertised
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4">
                    3. Refund Request Process
                  </h2>
                  <p className="text-white leading-relaxed mb-3">
                    To request a refund under exceptional circumstances:
                  </p>
                  <ol className="list-decimal pl-6 text-white space-y-2">
                    <li>
                      Contact our support team within <strong>48 hours</strong>{" "}
                      of your purchase
                    </li>
                    <li>
                      Provide your order number and detailed explanation of the
                      issue
                    </li>
                    <li>Include any relevant screenshots or documentation</li>
                    <li>
                      Allow up to 5-7 business days for our team to review your
                      request
                    </li>
                    <li>
                      If approved, refunds will be processed within 7-14
                      business days
                    </li>
                  </ol>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4">
                    4. Refund Methods
                  </h2>
                  <p className="text-white leading-relaxed mb-3">
                    Approved refunds will be processed using the same payment
                    method used for the original purchase:
                  </p>
                  <ul className="list-disc pl-6 text-white space-y-2">
                    <li>
                      <strong>Credit/Debit Cards:</strong> 5-10 business days to
                      appear on your statement
                    </li>
                    <li>
                      <strong>PayPal:</strong> 3-5 business days to your PayPal
                      account
                    </li>
                    <li>
                      <strong>Digital Wallets:</strong> 3-7 business days
                      depending on the provider
                    </li>
                  </ul>
                  <p className="text-white leading-relaxed mt-3">
                    Please note that processing times may vary depending on your
                    bank or payment provider.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4">
                    5. Cancellation Policy
                  </h2>
                  <p className="text-white leading-relaxed mb-3">
                    Due to the instant digital delivery of our products:
                  </p>
                  <ul className="list-disc pl-6 text-white space-y-2">
                    <li>
                      Orders cannot be cancelled once payment is processed and
                      download links are generated
                    </li>
                    <li>
                      There is no "cooling off" period for digital downloads
                    </li>
                    <li>
                      Subscription services (if applicable) can be cancelled at
                      any time but no refunds will be provided for unused
                      portions
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4">
                    6. License Refunds and Exchanges
                  </h2>
                  <p className="text-white leading-relaxed mb-3">
                    Special considerations for different license types:
                  </p>
                  <ul className="list-disc pl-6 text-white space-y-2">
                    <li>
                      <strong>Basic to Premium Upgrade:</strong> You may upgrade
                      your license by paying the difference within 30 days
                    </li>
                    <li>
                      <strong>Exclusive Licenses:</strong> No refunds available
                      once the beat is removed from the marketplace
                    </li>
                    <li>
                      <strong>License Downgrades:</strong> Not permitted under
                      any circumstances
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4">
                    7. Chargeback Policy
                  </h2>
                  <p className="text-white leading-relaxed">
                    Initiating a chargeback instead of contacting our support
                    team may result in:
                  </p>
                  <ul className="list-disc pl-6 text-white space-y-2 mt-3">
                    <li>Immediate suspension of your account</li>
                    <li>Removal of access to all purchased content</li>
                    <li>Potential legal action for unauthorized chargebacks</li>
                  </ul>
                  <p className="text-white leading-relaxed mt-3">
                    We encourage you to contact us first to resolve any issues
                    before initiating a chargeback.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4">
                    8. Dispute Resolution
                  </h2>
                  <p className="text-white leading-relaxed">
                    If you're unsatisfied with our refund decision, you may
                    escalate the matter through:
                  </p>
                  <ul className="list-disc pl-6 text-white space-y-2 mt-3">
                    <li>
                      Our internal appeals process (contact senior support)
                    </li>
                    <li>Mediation through a mutually agreed third party</li>
                    <li>
                      Small claims court in your jurisdiction (for eligible
                      amounts)
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4">
                    9. Prevention Tips
                  </h2>
                  <p className="text-white leading-relaxed mb-3">
                    To avoid issues that might require refunds:
                  </p>
                  <ul className="list-disc pl-6 text-white space-y-2">
                    <li>Preview beats thoroughly before purchasing</li>
                    <li>
                      Read license terms carefully to ensure they meet your
                      needs
                    </li>
                    <li>Check your cart before completing payment</li>
                    <li>
                      Ensure you have a stable internet connection for downloads
                    </li>
                    <li>
                      Contact support immediately if you encounter any issues
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4">
                    10. Contact Information
                  </h2>
                  <p className="text-white leading-relaxed">
                    For refund requests or questions about this policy, please
                    contact us:
                  </p>
                  <div className="mt-3 text-white">
                    <p>Email: refunds@beatwave.in</p>
                    <p>Response Time: Within 24-48 hours</p>
                    <p>Phone: 91+7869235983 (Business hours only)</p>
                  </div>
                </section>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
