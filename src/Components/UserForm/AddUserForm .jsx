import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  contact: z
    .string()
    .min(7, "Contact must be at least 7 digits")
    .max(15, "Contact must be at most 15 digits")
    .regex(/^\+?[0-9\s-]+$/, "Contact must contain only digits, spaces, dashes or an optional leading +"),
  city: z.string().min(1, "City is required"),
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .regex(/^[a-zA-Z0-9_]+$/, "Username can only contain letters, numbers and underscores"),
  company: z.string().min(1, "Company is required"),
});

export default function AddUserForm({onSubmit,onClose}) {

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
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

  return (
    <div className="min-h-screen flex fixed w-full top-[0%] items-center justify-center bg-black/40 p-6" onClick={onClose}>
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">
       <div className="flex justify-between">
         <h2 className="text-2xl font-semibold mb-2">Create account</h2>
         <X onClick={onClose} className="hover:cursor-pointer"/>
       </div>
        <p className="text-sm text-gray-500 mb-6">Please fill the fields — validation is done with Zod.</p>

        <form onSubmit={handleSubmit(onSubmit)} noValidate onClick={(e)=>{e.stopPropagation()}}>
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

          <div className="mt-6 flex items-center gap-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-white font-medium shadow hover:bg-indigo-700 disabled:opacity-60"
            >
              {isSubmitting ? 'Saving...' : 'Save'}
            </button>

            <button
              type="button"
              onClick={() => reset()}
              className="rounded-lg border px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
            >
              Reset
            </button>

            <div className="ml-auto text-sm hidden sm:block text-gray-500">All fields are required.</div>
          </div>
        </form>
      </div>
    </div>
  );
}
