import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { isValidPhoneNumber } from "libphonenumber-js";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "@/components/ui/use-toast";

const memberSchema = z.object({
  firstname: z.string().min(1, { message: "Required" }),
  lastname: z.string().min(1, { message: "Required" }),
});

// 1. Create a form schema - using Zod schema
export const FormSchema = z.object({
  firstname: z
    .string({
      invalid_type_error: "Name must be a string",
    })
    .min(1, { message: "Please provide your first name" }),
  lastname: z
    .string({
      invalid_type_error: "Name must be a string",
    })
    .min(1, { message: "Please provide your last name" }),
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .min(1)
    .refine((value) => value.length > 0, {
      message: "Please provide your email address",
      path: ["."],
    }),
  phone: z.string().refine(
    (value) => {
      return isValidPhoneNumber(value);
    },
    {
      message: "Invalid phone number",
    }
  ),
  dates: z
    .object({
      from: z.date(),
      to: z.date().optional(),
    })
    .refine(
      (dates) => {
        const fromTime = new Date(dates.from).getTime();
        const toTime = dates.to ? new Date(dates.to).getTime() : 1;
        return fromTime !== toTime;
      },
      {
        message: "You must stay for at least one night",
        path: ["."],
      }
    )
    .refine((dates) => dates.to, {
      message: "Please select a return date",
      path: ["."],
    }),
  members: z
    .array(memberSchema)
    .max(9, { message: "You can only add up to 9 additional members." }),
});

export default function BookingForm() {
  // 2.1 Define form with useForm hook from react-hook-form
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      members: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "members",
  });

  // Errors object
  // console.log("formErrors: ", JSON.stringify(form.formState.errors, null, 4));
  // console.log("-----------------------------------------");

  // 2.2 Define submit handler
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function onSubmit(_values: z.infer<typeof FormSchema>) {
    // console.log(values);
    toast({
      title: "Reservation Confirmed",
      description: "We will be in touch with you soon!",
    });
  }

  const phone = form.watch("phone"); // Watch the phone input value

  // 3. Build your form using <Form /> components
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex flex-row gap-10">
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="Mark" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Zuckerberg" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-row gap-10">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="mark.zuckerberg@gmail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <PhoneInput
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    {...field}
                    defaultCountry="US"
                    value={phone}
                    onChange={(value) =>
                      form.setValue("phone", value ?? "", {
                        shouldValidate: true,
                      })
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="dates"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Trip Dates</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      id="date"
                      variant={"outline"}
                      className={cn(
                        "w-[300px] justify-start text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {field.value?.from ? (
                        field.value.to ? (
                          <>
                            {format(field.value.from, "LLL dd, y")} -{" "}
                            {format(field.value.to, "LLL dd, y")}
                          </>
                        ) : (
                          format(field.value.from, "LLL dd, y")
                        )
                      ) : (
                        <span>Select your dates</span>
                      )}
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    initialFocus
                    mode="range"
                    defaultMonth={field.value?.from}
                    selected={field.value}
                    onSelect={field.onChange}
                    numberOfMonths={2}
                    disabled={(date) => date < new Date()}
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>
                The departure and return dates of your trip.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-col items-start gap-5">
          <span className="text-base">Additional Members</span>
          {fields.map((field, index) => (
            <div
              id="member-input-group "
              key={field.id}
              className="flex flex-row gap-10 items-center justify-center"
            >
              <FormField
                control={form.control}
                name={`members.${index}.firstname`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Mark" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`members.${index}.lastname`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Zuckerberg" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="button" onClick={() => remove(index)}>
                Remove
              </Button>
            </div>
          ))}
          <Button
            type="button"
            onClick={() => append({ firstname: "", lastname: "" })}
            disabled={fields.length >= 9}
          >
            Add
          </Button>
        </div>

        <Button title="Submit" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
}
