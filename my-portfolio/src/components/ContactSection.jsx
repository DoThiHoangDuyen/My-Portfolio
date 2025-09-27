import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out! I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Get in <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, collaborations, or
          just a friendly chat. Feel free to reach out to me through any of the
          platforms below, or send me an email directly. I look forward to
          connecting with you!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6 pl-10">Contact Information</h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4 pl-20">
                <div className="p-4 rounded-full bg-primary/10">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium pr-5">Email</h4>
                  <a
                    href="mailto:thihoangduyendo@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    thihoangduyendo@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4 pl-20">
                <div className="p-4 rounded-full bg-primary/10">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium pl-10">Phone</h4>
                  <a
                    href="tel:+0332694718"
                    className="text-muted-foreground hover:text-primary transition-colors pl-5"
                  >
                    (+84) 033 269 4718
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4 pl-20">
                <div className="p-4 rounded-full bg-primary/10">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium ">Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors pl-2">
                    Ho Chi Minh City, Vietnam
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <h4 className="font-medium mb-4 pl-10">Connect with me</h4>
              <div className="flex space-x-4 justify-center pl-10">
                <a
                  href="https://www.linkedin.com/in/duyendothihoang/"
                  target="_blank"
                >
                  <Linkedin></Linkedin>
                </a>
                <a
                  href="https://www.instagram.com/aurielle_duck/"
                  target="_blank"
                >
                  <Instagram></Instagram>
                </a>
                <a
                  href="https://www.facebook.com/oduyen.451618"
                  target="_blank"
                >
                  <Facebook></Facebook>
                </a>
              </div>
            </div>
          </div>
          <div
            className="bg-card p-8 rounded-lg shadow-xs"
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-input rounded-md bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Hoang Duyen...."
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-input rounded-md bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="thihoangduyendo@gmail.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 border border-input rounded-md bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I would like to talk about..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
