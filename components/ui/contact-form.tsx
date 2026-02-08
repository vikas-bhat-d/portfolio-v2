"use client";
import { useState } from "react";

type Errors = {
  name?: string;
  email?: string;
  message?: string;
};

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Errors>({});

  const validate = (data: {
    name: string;
    email: string;
    message: string;
  }): Errors => {
    const newErrors: Errors = {};

    if (!data.name || data.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (
      !data.email ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)
    ) {
      newErrors.email = "Enter a valid email address";
    }

    if (!data.message || data.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("idle");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      message: String(formData.get("message") || ""),
    };

    const validationErrors = validate(data);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      setStatus(res.ok ? "success" : "error");

      if (res.ok) {
        form.reset();
        setErrors({});
      }
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="w-full space-y-4 border border-dashed border-secondary/60 rounded-xl p-6 bg-secondary/5 backdrop-blur-xl"
    >
      <div>
        <input
          name="name"
          placeholder="Your name"
          className={`w-full p-2 rounded-md bg-transparent border ${
            errors.name ? "border-red-500" : "border-secondary/40"
          }`}
        />
        {errors.name && (
          <p className="text-red-400 text-xs mt-1">{errors.name}</p>
        )}
      </div>

      <div>
        <input
          name="email"
          type="email"
          placeholder="Your email"
          className={`w-full p-2 rounded-md bg-transparent border ${
            errors.email ? "border-red-500" : "border-secondary/40"
          }`}
        />
        {errors.email && (
          <p className="text-red-400 text-xs mt-1">{errors.email}</p>
        )}
      </div>

      <div>
        <textarea
          name="message"
          rows={4}
          placeholder="Your message"
          className={`w-full p-2 rounded-md bg-transparent border ${
            errors.message ? "border-red-500" : "border-secondary/40"
          }`}
        />
        {errors.message && (
          <p className="text-red-400 text-xs mt-1">{errors.message}</p>
        )}
      </div>

      <button
        disabled={loading}
        className="w-full py-2 bg-primary text-black rounded-md font-medium hover:opacity-90 disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p className="text-green-400 text-sm">
          Message sent successfully!
        </p>
      )}
      {status === "error" && (
        <p className="text-red-400 text-sm">
          Failed to send message.
        </p>
      )}
    </form>
  );
};

export default ContactForm;
