import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { portfolioData } from "../data/portfolio";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

export const Contact = () => {
  const { contact } = portfolioData;

  const [status, setStatus] = useState<string | null>(null);

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    const serviceId = "service_fizgahm";
    const templateId = "template_puqymec";
    const publicKey = "EtBeWrUnkFtbAG63A";

    if (!serviceId || !templateId || !publicKey) {
      console.error("Missing EmailJS environment variables");
      setStatus("Failed to send. Missing configuration.");
      return;
    }

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      () => {
        setStatus("Message sent successfully!");
        form.current!.reset();
      },
      (error) => {
        setStatus("Failed to send. Please try again later.");
        console.error("EmailJS Error:", error);
      }
    );
  };

  // console.log("Service ID", process.env.REACT_APP_SERVICE_ID);
  // console.log("Template ID", process.env.REACT_APP_TEMPLATE_ID);
  // console.log("Public Key", process.env.REACT_APP_PUBLIC_KEY);

  return (
    <section id="contact" className="section py-20 bg-background/50">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-text-secondary text-lg">
            I'm currently looking for new opportunities. Whether you have a
            question or just want to say hi, I'll try my best to get back to
            you!
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Contact Info (Email, Phone, LinkedIn, GitHub) */}
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Mail
                  className="w-6 h-6 text-primary"
                  aria-label="Email Icon"
                />
              </div>
              <div>
                <h3 className="font-medium">Email</h3>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  {contact.email}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Phone
                  className="w-6 h-6 text-primary"
                  aria-label="Phone Icon"
                />
              </div>
              <div>
                <h3 className="font-medium">Phone</h3>
                <a
                  href={`tel:${contact.phone}`}
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  {contact.phone}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Linkedin
                  className="w-6 h-6 text-primary"
                  aria-label="LinkedIn Icon"
                />
              </div>
              <div>
                <h3 className="font-medium">LinkedIn</h3>
                <a
                  href={`https://linkedin.com/in/${contact.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  {contact.linkedin}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Github
                  className="w-6 h-6 text-primary"
                  aria-label="GitHub Icon"
                />
              </div>
              <div>
                <h3 className="font-medium">GitHub</h3>
                <a
                  href={`https://github.com/${contact.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  {contact.github}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
            ref={form} // Attach form reference
            onSubmit={sendEmail} // Attach email sending function to form submission
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                name="name" // Required by EmailJS to match template variables
                id="name"
                className="w-full px-4 py-2 bg-background border border-primary/20 rounded-md focus:outline-none focus:border-primary text-black"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                name="email" // Required by EmailJS to match template variables
                id="email"
                className="w-full px-4 py-2 bg-background border border-primary/20 rounded-md focus:outline-none focus:border-primary text-black"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                name="comments" // Required by EmailJS to match template variables
                id="message"
                rows={4}
                className="w-full px-4 py-2 bg-background border border-primary/20 rounded-md focus:outline-none focus:border-primary text-black"
                placeholder="Your message..."
                required
              />
            </div>

            {/* Status Message (Success/Error) */}
            {status && (
              <div
                className={`text-center text-lg font-medium mt-4 ${
                  status.includes("successfully")
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {status}
              </div>
            )}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary-light transition-colors"
              type="submit"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
