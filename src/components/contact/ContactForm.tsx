"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Card from "@/components/ui/Card";
import { contactToast } from "@/lib/data";

type Errors = { name?: string; email?: string; message?: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const validate = (): Errors => {
    const e: Errors = {};
    if (!name.trim()) e.name = "Name is required.";
    if (!email.trim()) e.email = "Email is required.";
    else if (!EMAIL_RE.test(email)) e.email = "That doesn't look like a valid email.";
    if (message.trim().length < 10) e.message = "Message needs at least 10 characters.";
    return e;
  };

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;
    setSent(true);
    setName("");
    setEmail("");
    setMessage("");
    setTimeout(() => setSent(false), 4000);
  };

  const inputCls = (err?: string) =>
    `w-full rounded-full border bg-white/85 px-5 py-3 text-sm text-ink outline-none backdrop-blur transition-colors placeholder:text-muted/70 ${
      err
        ? "border-red-300 focus:border-red-400 focus:ring-4 focus:ring-red-500/10"
        : "border-line focus:border-accent/40 focus:ring-4 focus:ring-accent-soft"
    }`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <Card hover={false} className="p-5 md:p-6">
        <form onSubmit={submit} noValidate className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                aria-label="Name"
                aria-invalid={!!errors.name}
                className={inputCls(errors.name)}
              />
              {errors.name && <p className="mt-1.5 text-xs font-medium text-red-500">{errors.name}</p>}
            </div>
            <div>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                aria-label="Email"
                type="email"
                aria-invalid={!!errors.email}
                className={inputCls(errors.email)}
              />
              {errors.email && <p className="mt-1.5 text-xs font-medium text-red-500">{errors.email}</p>}
            </div>
          </div>

          <div>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="What can I help you build?"
              aria-label="Message"
              aria-invalid={!!errors.message}
              rows={4}
              className={`${inputCls(errors.message)} resize-none rounded-2xl py-3.5`}
            />
            {errors.message && <p className="mt-1.5 text-xs font-medium text-red-500">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="rounded-full bg-accent px-6 py-3 text-sm font-bold text-white shadow-card transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-lift active:translate-y-0"
          >
            Send message
          </button>
        </form>
      </Card>

      {/* success toast, top-right of the page */}
      <AnimatePresence>
        {sent && (
          <motion.div
            initial={{ opacity: 0, x: 24, y: -8 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 16 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            role="status"
            className="fixed right-5 top-20 z-50 flex items-center gap-2.5 rounded-2xl border border-emerald-200 bg-white px-4 py-3 shadow-lift"
            style={{ boxShadow: "0 8px 24px rgba(16,185,129,0.18)" }}
          >
            <span className="grid size-6 place-items-center rounded-full bg-emerald-500 text-xs font-bold text-white">
              ✓
            </span>
            <p className="text-sm font-semibold text-ink">{contactToast}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
