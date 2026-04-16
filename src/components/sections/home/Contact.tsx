"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { useDict } from "@/i18n/DictContext";

export default function Contact() {
  const { dict } = useDict();
  const [form, setForm] = useState({
    name: "",
    email: "",
    amount: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(false);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "",
          subject: `[Wise Coin] New inquiry from ${form.name}`,
          from_name: form.name,
          email: form.email,
          amount: form.amount || "Not specified",
          message: form.message || "No message",
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
        setForm({ name: "", email: "", amount: "", message: "" });
      } else {
        setError(true);
        setTimeout(() => setError(false), 3000);
      }
    } catch {
      setError(true);
      setTimeout(() => setError(false), 3000);
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="section-padding">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary-green text-xs tracking-[0.2em] uppercase">
            {dict.contact.label}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
            {dict.contact.title}
          </h2>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div>
            <label className="block text-gray-600 text-sm mb-1.5">
              {dict.contact.name} <span className="text-primary-green">*</span>
            </label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-primary-green/50 transition-colors"
            />
          </div>

          <div>
            <label className="block text-gray-600 text-sm mb-1.5">
              {dict.contact.email} <span className="text-primary-green">*</span>
            </label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-primary-green/50 transition-colors"
            />
          </div>

          <div>
            <label className="block text-gray-600 text-sm mb-1.5">
              {dict.contact.amount}
            </label>
            <input
              type="number"
              value={form.amount}
              onChange={(e) => setForm({ ...form, amount: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-primary-green/50 transition-colors"
            />
          </div>

          <div>
            <label className="block text-gray-600 text-sm mb-1.5">
              {dict.contact.message}
            </label>
            <textarea
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-primary-green/50 transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={sending}
            className="w-full py-3.5 bg-green-gradient text-white font-semibold text-sm rounded-lg hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(76,175,125,0.3)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {sending ? "..." : dict.contact.submit}
          </button>
        </motion.form>

        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 px-6 py-3 bg-primary-green/90 text-white text-sm font-medium rounded-lg shadow-lg z-50"
          >
            {dict.contact.toast}
          </motion.div>
        )}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 px-6 py-3 bg-red-600/90 text-gray-900 text-sm font-medium rounded-lg shadow-lg z-50"
          >
            {dict.contact.error}
          </motion.div>
        )}
      </div>
    </section>
  );
}
