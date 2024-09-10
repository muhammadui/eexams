import { useState } from "react";
import { NavLink } from "react-router-dom";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { MoveRight, Lock } from "lucide-react";

import { Checkbox } from "@/components/ui/checkbox";
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

const newPasswordSchema = z
  .object({
    confirm_password: z.string(),
    password: z.string(),
  })
  .refine((values) => values.password === values.confirm_password, {
    message: "Passwords don't match",
    path: ["confirm_password"], // This sets which field the error is attached to
  });
// newPasswordSchema.parse({ password: "asdf", confirm: "qwer" });

export function ResetPasswordForm() {
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  // const [error, setError] = useState("");

  // 1. Define your form.
  const form = useForm<z.infer<typeof newPasswordSchema>>({
    resolver: zodResolver(newPasswordSchema),
    defaultValues: {
      confirm_password: "",
      password: "",
    },
  });
  // const navigate = useNavigate();
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof newPasswordSchema>) {
    // Todo - make api call to backend and redirect student to dashboard after  a success creation of new password - redirect him to login
    console.log(values.confirm_password);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-6 px-10"
      >
        <div className="logo__wrapper mb-10 flex items-center justify-center md:-mt-16">
          <img src="baze-logo.png" className="w-28 lg:w-40" alt="" />
        </div>
        <p className="text-2xl font-semibold">Create new password</p>
        <FormMessage />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs">Password</FormLabel>
              <FormControl>
                <div className="relative">
                  <Lock
                    strokeWidth={0.5}
                    size={16}
                    className="absolute right-0 top-3 z-20 mr-2 flex items-center"
                  />
                  <Input
                    placeholder="password"
                    type={showPassword ? "text" : "password"}
                    {...field}
                  />
                </div>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirm_password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs">Confirm password</FormLabel>
              <FormControl>
                <div className="relative">
                  <Lock
                    strokeWidth={0.5}
                    size={16}
                    className="absolute right-0 top-3 z-20 mr-2 flex items-center"
                  />
                  <Input
                    placeholder="confirm password"
                    type={showPassword ? "text" : "password"}
                    {...field}
                  />
                </div>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <div className="items-top flex space-x-2">
          <Checkbox
            id="show-password"
            onClick={() => setShowPassword(!showPassword)}
          />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="show-password"
              className="text-sm font-light leading-none text-[#262e3d]"
            >
              Show Password
            </label>
          </div>
        </div>

        <Button type="submit" className="w-full bg-[#0f3376] text-white">
          Set password
        </Button>
        <div className="flex items-center justify-end gap-2 text-blue-700 hover:cursor-pointer">
          <NavLink className={`text-sm`} to={"/forgot-password"}>
            {" "}
            forgot password
          </NavLink>
          <MoveRight size={16} strokeWidth={2} />
        </div>
      </form>
    </Form>
  );
}

export default function ResetPasswordPage() {
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
