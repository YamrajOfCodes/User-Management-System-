import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  contact: z.string().min(7).max(15),
  city: z.string().min(1),
  username: z.string().min(3),
  company: z.string().min(1),
});

export default function AddUserForm({
  onSubmit,
  onClose,
  formLabel,
  initialValues = null,
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      contact: "",
      city: "",
      username: "",
      company: "",
    },
  });

  useEffect(() => {
    if (initialValues) {
      reset({
        name: initialValues.Name || "",
        email: initialValues.userEmail || "",
        contact: initialValues.userPhone || "",
        city: initialValues.userCity
          || "",
        username: initialValues.userName || "",
        company: initialValues.userCompany || "",
      });
    }
  }, [initialValues, reset]);

  return (
    <div
      className="min-h-screen fixed inset-0 flex items-center justify-center bg-black/40"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-white rounded-2xl p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-semibold">{formLabel}</h2>
          <X className="cursor-pointer" onClick={onClose} />
        </div>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-sm font-medium text-gray-700">Name</span>
              <input
                type="text"
                {...register("name")}
                className={`mt-1 block w-full rounded-lg border px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-400 ${errors.name ? 'border-red-300' : 'border-gray-200'}`}
                placeholder="Jane Doe"
              />
              {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
            </label>


            <label className="block">
              <span className="text-sm font-medium text-gray-700">Email</span>
              <input
                type="email"
                {...register("email")}
                className={`mt-1 block w-full rounded-lg border px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-400 ${errors.email ? 'border-red-300' : 'border-gray-200'}`}
                placeholder="you@example.com"
              />
              {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
            </label>


            <label className="block">
              <span className="text-sm font-medium text-gray-700">Contact</span>
              <input
                type="tel"
                {...register("contact")}
                className={`mt-1 block w-full rounded-lg border px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-400 ${errors.contact ? 'border-red-300' : 'border-gray-200'}`}
                placeholder="+1 555-555-5555"
              />
              {errors.contact && <p className="mt-1 text-xs text-red-600">{errors.contact.message}</p>}
            </label>


            <label className="block">
              <span className="text-sm font-medium text-gray-700">City</span>
              <input
                type="text"
                {...register("city")}
                className={`mt-1 block w-full rounded-lg border px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-400 ${errors.city ? 'border-red-300' : 'border-gray-200'}`}
                placeholder="Mumbai"
              />
              {errors.city && <p className="mt-1 text-xs text-red-600">{errors.city.message}</p>}
            </label>


            <label className="block">
              <span className="text-sm font-medium text-gray-700">Username</span>
              <input
                type="text"
                {...register("username")}
                className={`mt-1 block w-full rounded-lg border px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-400 ${errors.username ? 'border-red-300' : 'border-gray-200'}`}
                placeholder="janedoe_123"
              />
              {errors.username && <p className="mt-1 text-xs text-red-600">{errors.username.message}</p>}
            </label>


            <label className="block md:col-span-2">
              <span className="text-sm font-medium text-gray-700">Company</span>
              <input
                type="text"
                {...register("company")}
                className={`mt-1 block w-full rounded-lg border px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-400 ${errors.company ? 'border-red-300' : 'border-gray-200'}`}
                placeholder="Your company name"
              />
              {errors.company && <p className="mt-1 text-xs text-red-600">{errors.company.message}</p>}
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-6 bg-indigo-600 text-white px-4 py-2 rounded-lg"
          >
            {isSubmitting ? "Saving..." : "Save"}
          </button>
        </form>
      </div>
    </div>
  );
}
