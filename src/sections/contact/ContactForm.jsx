import React, { useState } from "react";
import AnimatedSection from "../../components/AnimatedSection";
import { motion } from "framer-motion";

function ContactForm({ formRef }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);
// console.log();

  const submit = (e) => {
    e.preventDefault();
    setStatus("Sending...");
    setTimeout(() => {
      setStatus("Message sent — thanks!");
      setTimeout(() => setStatus(null), 2000);
    }, 1200);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <AnimatedSection delay={0.14}>
      <section ref={formRef} className="py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Text side */}
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, }}
                className="text-3xl font-bold mb-4 text-text">
                Get in touch
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-muted leading-relaxed">
                Have an idea or a project in mind? Let’s discuss and build
                something unique together.
              </motion.p>
            </div>

            {/* Form side */}
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              onSubmit={submit}
              className="section-card p-8 backdrop-blur-md border border-white/10 shadow-xl"
            >
              <div>
                <label className="text-sm text-muted">Full name</label>
                <input
                  required
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full mt-2 p-3 rounded-md bg-[rgba(255,255,255,0.04)] border border-white/10 text-text placeholder:text-muted focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] outline-none transition-all"
                />
              </div>

              <div className="mt-5">
                <label className="text-sm text-muted">Email</label>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@mail.com"
                  className="w-full mt-2 p-3 rounded-md bg-[rgba(255,255,255,0.04)] border border-white/10 text-text placeholder:text-muted focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] outline-none transition-all"
                />
              </div>

              <div className="mt-5">
                <label className="text-sm text-muted">Project details</label>
                <textarea
                  required
                  rows="6"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your project"
                  className="w-full mt-2 p-3 rounded-md bg-[rgba(255,255,255,0.04)] border border-white/10 text-text placeholder:text-muted focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] outline-none transition-all resize-none"
                ></textarea>
              </div>

              <div className="mt-6 flex items-center gap-4">
                <button type="submit" className="btn">
                  Send message
                </button>
                {status && (
                  <div className="text-[var(--accent)] font-medium">
                    {status}
                  </div>
                )}
              </div>
            </motion.form>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}


export default ContactForm