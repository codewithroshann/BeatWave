"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/contact-us`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            subject,
            message,
          }),
        }
      );
      if (res.ok) {
        const data = await res.json();
        console.log(data);
      }
      if (!res.ok) {
        const data = await res.json();
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-2 mb-3">
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Your Name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="space-y-2 mb-3">
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          name="email"
          required
          placeholder="example@email.com"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="space-y-2 mb-3">
        <Label htmlFor="subject">Subject</Label>
        <Input
          type="text"
          id="subject"
          name="subject"
          required
          placeholder="What is this regarding?"
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>
      <div className="space-y-2 mb-3">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          className="resize-none"
          required
          placeholder="Tell us What You Need?"
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <Button type="submit" className="float-right">
        Submit
      </Button>
    </form>
  );
}
