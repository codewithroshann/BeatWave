import { Mail, MapPin, Phone } from "lucide-react"
import ContactForm from "@/components/contactForm/ContactForm"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">Contact Us</h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Have questions about our beats or need custom production? Get in touch with us.
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
        {/* Contact Information */}
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h2 className="mb-6 text-2xl font-semibold">Get In Touch</h2>

          <div className="space-y-4">
            <div className="flex items-start">
              <Mail className="mr-3 h-5 w-5 text-muted-foreground" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-muted-foreground">info@beatstore.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <Phone className="mr-3 h-5 w-5 text-muted-foreground" />
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-muted-foreground">(123) 456-7890</p>
              </div>
            </div>

            <div className="flex items-start">
              <MapPin className="mr-3 h-5 w-5 text-muted-foreground" />
              <div>
                <p className="font-medium">Location</p>
                <p className="text-muted-foreground">Los Angeles, CA</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="mb-3 text-lg font-medium">Business Hours</h3>
            <p className="text-muted-foreground">Monday - Friday: 9am - 6pm</p>
            <p className="text-muted-foreground">Saturday: 10am - 4pm</p>
            <p className="text-muted-foreground">Sunday: Closed</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h2 className="mb-6 text-2xl font-semibold">Send a Message</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
