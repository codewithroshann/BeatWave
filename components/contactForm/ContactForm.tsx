"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { clearAlert, setAlert } from "@/redux/slices/AlertReducer";
import { useDispatch } from "react-redux";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const dispatch = useDispatch();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
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
        dispatch(setAlert({ message: data.message, type: data.type }));
        setName("")
        setEmail("")
        setSubject("")
        setMessage("")
      }
      if (!res.ok) {
        const data = await res.json();    
        dispatch(setAlert({ message: data.message, type: data.type }));
      }
      setTimeout(() => {
        dispatch(clearAlert());
        setIsSubmitting(false)
      }, 2500);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`${isSubmitting? "pointer-events-none" : ""}`}>
      <div className="space-y-2 mb-3">
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Your Name"
          value={name}
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
          value={email}
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
          value={subject}
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
          value={message}
          placeholder="Tell us What You Need?"
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <Button disabled={isSubmitting} type="submit" className="float-right">
        {isSubmitting ? "Submiting..." : "Submit"}
      </Button>
    </form>
  );
}
