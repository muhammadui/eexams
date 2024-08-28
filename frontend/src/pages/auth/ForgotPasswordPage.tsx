import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { MailOpen, MoveRight } from "lucide-react";
import { NavLink } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const resetPasswordSchema = z.object({
  email: z.string().email(),
});

export function ResetPasswordForm() {
  const [error, setError] = useState("");

  // 1. Define your form.
  const form = useForm<z.infer<typeof resetPasswordSchema>>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      email: "",
    },
  });
  const navigate = useNavigate();
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof resetPasswordSchema>) {
    try {
      const response = await fetch("http://localhost:5000/api/admins/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      console.log("Login successful", data);
      localStorage.setItem("token", data.token); // Save token to local storage
      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed", error);
      setError("Invalid email or password. Please try again.");
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-6 px-10"
      >
        <div className="logo__wrapper -mt-16 mb-10 flex items-center justify-center">
          <img src="baze-logo.png" className="w-28 lg:w-40" alt="" />
        </div>

        <p className="text-2xl font-semibold">Reset Password</p>
        {error && <p className="animate-pulse text-sm text-red-500">{error}</p>}

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs">Email</FormLabel>
              <FormControl className="">
                <div className="relative">
                  <MailOpen
                    strokeWidth={0.5}
                    size={16}
                    className="absolute right-0 top-3 z-20 mr-2 flex items-center"
                  />
                  <Input placeholder="email" {...field} />
                </div>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full bg-[#0f3376] text-white">
          Reset Password
        </Button>
        <div className="flex items-center justify-end gap-2 text-blue-700 hover:cursor-pointer">
          <NavLink className={`text-sm`} to={"/"}>
            {" "}
            login
          </NavLink>

          <MoveRight size={16} strokeWidth={2} />
        </div>
      </form>
    </Form>
  );
}

export default function ForgotPasswordPage() {
  return (
    <>
      <section className="login__page flex h-screen">
        <div className="left__login__section flex w-full items-center justify-center bg-[url('assets/mobile-bg.svg')] bg-auto bg-center bg-no-repeat bg-blend-overlay md:bg-none xl:w-2/5">
          <ResetPasswordForm />
        </div>
        <div className="right__login__section relative hidden h-screen w-screen bg-[#1546a3] bg-cover bg-no-repeat xl:flex">
          {/* <img src="assets/main-bg.svg" alt="" className="object-cover" /> */}
          <img
            src="cap-line.svg"
            className="absolute bottom-16 left-0 z-20 w-screen"
            alt=""
          />
          <p className="absolute bottom-4 right-0 p-6 text-sm font-semibold text-white">
            &copy; Baze University 2024
          </p>
        </div>
      </section>
    </>
  );
}
