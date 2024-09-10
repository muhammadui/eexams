import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/custom-input-otp";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { Loader2 } from "lucide-react";

const otpSchema = z.object({
  otp: z.string(),
});

export function VerifyOTPForm() {
  const [error, setError] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);

  // 1. Define your form.
  const form = useForm<z.infer<typeof otpSchema>>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otp: "",
    },
  });
  const navigate = useNavigate();
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof otpSchema>) {
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
      setIsVerifying(true);

      const data = await response.json();
      console.log("Login successful", data);
      localStorage.setItem("token", data.token); // Save token to local storage
      navigate("/reset-password");
    } catch (error) {
      console.error("Login failed", error);
      console.log(values);
      setError("Network error, Please try again.");
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

        <p className="text-2xl font-semibold">Verify OTP</p>
        <p>Please Enter OPT code sent to your email address</p>
        {error && <p className="text-sm text-red-500">{error}</p>}

        <FormField
          control={form.control}
          name="otp"
          render={({ field }) => (
            <FormItem>
              <FormLabel>One-Time Password</FormLabel>
              <FormControl>
                <InputOTP maxLength={6} {...field}>
                  <InputOTPGroup className="flex w-full justify-between gap-1 md:gap-4">
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        {isVerifying ? (
          <Button
            type="submit"
            className="w-full cursor-not-allowed gap-2 bg-[#0f3376] text-white"
          >
            <Loader2 className="animate-spin" />
            Verifying OTP Code
          </Button>
        ) : (
          <Button type="submit" className="w-full bg-[#0f3376] text-white">
            Verify
          </Button>
        )}

        <div className="flex items-center justify-between gap-2 text-blue-700 hover:cursor-pointer">
          <NavLink className={`text-sm`} to={"/resend-otp"}>
            Resend Code
          </NavLink>
          <NavLink className={`text-sm`} to={"/"}>
            Timer
          </NavLink>
        </div>
      </form>
    </Form>
  );
}

export default function VerifyOtpPage() {
  return (
    <>
      <section className="login__page flex h-screen">
        <div className="left__login__section flex w-full items-center justify-center bg-[url('assets/mobile-bg.svg')] bg-auto bg-center bg-no-repeat bg-blend-overlay md:bg-none xl:w-2/5">
          <VerifyOTPForm />
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
