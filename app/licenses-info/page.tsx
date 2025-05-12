import Link from "next/link"
import { Check, HelpCircle, Info } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FaRupeeSign } from "react-icons/fa";

// License types data
const licenses = [
  {
    id: "free",
    name: "Free For Profit",
    price: "INR-0.00",
    description: "Perfect for independent artists and small projects",
    features: [
      "MP3 file format",
      "Use in one commercial project",
      "Up to 10,000 streams",
      "Credit required (Prod. by Your Name)",
      "Non-exclusive rights",
    ],
    limitations: [
      "Cannot claim ownership of the beat",
      "Cannot register with PROs",
      "Cannot use for unlimited projects",
    ],
  },
  {
    id: "premium",
    name: "Non-Exclusive License",
    price: "INR-499.00+",
    description: "Ideal for established artists and medium-sized projects",
    features: [
      "WAV + MP3 file formats",
      "Use in one commercial project",
      "Up to 100,000 streams",
      "Credit required (Prod. by Your Name)",
      "Non-exclusive rights",
      "Distribute on all platforms",
      "Radio broadcasting rights",
    ],
    limitations: ["Cannot claim ownership of the beat", "Cannot register with PROs without permission"],
  },
  {
    id: "exclusive",
    name: "Exclusive License",
    price: "INR-999.00+",
    description: "Complete ownership for serious artists and major projects",
    features: [
      "WAV + MP3 + Trackout files",
      "Unlimited commercial use",
      "Unlimited streams and sales",
      "Credit appreciated but not required",
      "Exclusive rights (beat removed from store)",
      "Full broadcasting rights",
      "Can register with PROs",
    ],
    limitations: ["Cannot resell or transfer the beat to others"],
  },
]

// FAQ data
const faqs = [
  {
    question: "What is the difference between non-exclusive and exclusive licenses?",
    answer:
      "A non-exclusive license means the beat can be sold to multiple artists, while an exclusive license means you're the only one who can use the beat (it will be removed from our store after purchase).",
  },
  {
    question: "Can I upgrade my license later?",
    answer:
      "Yes, you can upgrade from a Basic or Premium license to a higher tier by paying the difference in price. Contact us for upgrade options.",
  },
  {
    question: "What are trackout files?",
    answer:
      "Trackout files are individual stems of the beat (separate files for drums, bass, melody, etc.) that allow you to customize the beat or create a better mix with your vocals.",
  },
  {
    question: "Do I need to give credit when using your beats?",
    answer:
      "Credit is required for Basic and Premium licenses (e.g., 'Prod. by Your Name'). For Exclusive licenses, credit is appreciated but not required.",
  },
  {
    question: "What are PROs?",
    answer:
      "PROs (Performance Rights Organizations) like ASCAP, BMI, and SESAC collect royalties when your music is performed publicly. With an Exclusive license, you can register the beat with these organizations.",
  },
  {
    question: "Can I use your beats on YouTube?",
    answer:
      "Yes, all licenses allow you to use the beats on YouTube. However, the number of monetized views may be limited depending on your license type.",
  },
]

export default function LicensesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">License Information</h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Choose the right license for your project. All licenses are one-time payments with no recurring fees.
        </p>
      </div>

      {/* License Tabs */}
      <Tabs defaultValue="compare" className="mx-auto max-w-5xl">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="compare">Compare All</TabsTrigger>
          <TabsTrigger value="details">License Details</TabsTrigger>
          <TabsTrigger value="faq">Licensing FAQ</TabsTrigger>
        </TabsList>

        {/* Compare All Licenses */}
        <TabsContent value="compare" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>License Comparison</CardTitle>
              <CardDescription>Compare our license options to find the best fit for your needs</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[200px]">Feature</TableHead>
                    <TableHead>Basic License</TableHead>
                    <TableHead>Premium License</TableHead>
                    <TableHead>Exclusive License</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Price</TableCell>
                    <TableCell>INR-0.00</TableCell>
                    <TableCell>INR-499.00</TableCell>
                    <TableCell>INR-999.00+</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">File Formats</TableCell>
                    <TableCell>MP3</TableCell>
                    <TableCell>WAV + MP3</TableCell>
                    <TableCell>WAV + MP3 + Trackouts</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Distribution Limit</TableCell>
                    <TableCell>10,000 streams</TableCell>
                    <TableCell>100,000 streams</TableCell>
                    <TableCell>Unlimited</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Commercial Use</TableCell>
                    <TableCell>One project</TableCell>
                    <TableCell>One project</TableCell>
                    <TableCell>Unlimited projects</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Credit Required</TableCell>
                    <TableCell>Yes</TableCell>
                    <TableCell>Yes</TableCell>
                    <TableCell>No (appreciated)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Radio Broadcasting</TableCell>
                    <TableCell>No</TableCell>
                    <TableCell>Yes</TableCell>
                    <TableCell>Yes</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">PRO Registration</TableCell>
                    <TableCell>No</TableCell>
                    <TableCell>With permission</TableCell>
                    <TableCell>Yes</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Exclusivity</TableCell>
                    <TableCell>Non-exclusive</TableCell>
                    <TableCell>Non-exclusive</TableCell>
                    <TableCell>Exclusive</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* License Details */}
        <TabsContent value="details" className="mt-6">
          <div className="grid gap-6 md:grid-cols-3">
            {licenses.map((license) => (
              <Card key={license.id} className="flex flex-col">
                <CardHeader>
                  <CardTitle>{license.name}</CardTitle>
                  <CardDescription>{license.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="mb-4 text-3xl font-bold">{license.price}</p>
                  <div className="space-y-2">
                    {license.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-green-500 shrink-0" />
                        <p className="text-sm">{feature}</p>
                      </div>
                    ))}
                  </div>
                  {license.limitations.length > 0 && (
                    <div className="mt-4 pt-4 border-t">
                      <p className="mb-2 text-sm font-medium">Limitations:</p>
                      <div className="space-y-2">
                        {license.limitations.map((limitation, index) => (
                          <div key={index} className="flex items-start">
                            <Info className="mr-2 h-5 w-5 text-amber-500 shrink-0" />
                            <p className="text-sm text-muted-foreground">{limitation}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/beats">Browse Beats</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* FAQ Section */}
        <TabsContent value="faq" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <HelpCircle className="mr-2 h-5 w-5" />
                Frequently Asked Questions
              </CardTitle>
              <CardDescription>Common questions about our licensing options</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
            <CardFooter className="flex justify-center border-t pt-6">
              <p className="text-center text-sm text-muted-foreground">
                Still have questions about licensing?{" "}
                <Link href="/contact-us" className="font-medium underline underline-offset-4">
                  Contact us
                </Link>
              </p>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Terms and Conditions */}
      <div className="mt-16 mx-auto max-w-5xl">
        <h2 className="mb-6 text-2xl font-bold tracking-tight">Terms and Conditions</h2>
        <Card>
          <CardContent className="pt-6">
            <div className="prose prose-sm max-w-none">
              <p>By purchasing a license from our beat store, you agree to the following terms:</p>

              <h3>1. Ownership</h3>
              <p>
                The producer retains ownership of the master recording (the "beat") for all non-exclusive licenses. Only
                with an exclusive license does the buyer receive ownership rights to the beat, and even then certain
                restrictions may apply.
              </p>
              <br />
              <h3>2. Payment and Delivery</h3>
              <p>
                All licenses require payment in full before delivery. Once payment is confirmed, you will receive the
                beat in the format(s) specified by your license type.
              </p>
              <br />

              <h3>3. License Modifications</h3>
              <p>
                The terms of each license cannot be modified unless agreed upon in writing by both parties. License
                upgrades are available by paying the difference between your current license and the desired license.
              </p>
              <br />

              <h3>4. Refund Policy</h3>
              <p>
                Due to the digital nature of our products, all sales are final and no refunds will be issued. Please
                preview all beats before purchasing.
              </p>
              <br />

              <h3>5. Term</h3>
              <p>
                All licenses are perpetual and do not expire, provided you adhere to the limitations of your specific
                license type.
              </p>
              <br />
              <br />

              <h3>6. Credit</h3>
              <p>
                Proper credit must be given as specified in your license agreement. Failure to provide credit as
                required may result in termination of your license.
              </p>
              <br />

              <p className="text-sm text-muted-foreground mt-4">Last updated: May 12, 2025</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
