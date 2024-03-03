import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";

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

// 1. Create a form schema - using Zod schema
const FormSchema = z.object({
  firstname: z
    .string({
      required_error: "Please provide your first name.",
      invalid_type_error: "Name must be a string",
    })
    .min(1, { message: "Please provide your first name." }),
  lastname: z
    .string({
      required_error: "Please provide your last name.",
      invalid_type_error: "Name must be a string",
    })
    .min(1, { message: "Please provide your last name." }),
  dates: z
    .object({
      from: z.date(),
      to: z.date().optional(),
      // .refine() message is only reached if the property is optional! otherwise, since it's required by default, the defaul required message supercedes
    })
    .refine(
      (dates) => {
        const fromTime = new Date(dates.from).getTime();
        const toTime = dates.to ? new Date(dates.to).getTime() : 1; // since dates.to is optional, we must satisfy ts type checks. chose 1 arbitrarily.
        return fromTime !== toTime; // we only proceed to the message if this condition returns false (i.e. dates.from and dates.to are the same)
      },
      {
        message: "You must stay for at least one night.",
        path: ["."], // this value is concatenated to the end of the actual path of the error
      }
    )
    .refine(
      // chaining .refine()
      (dates) => dates.to, // we only proceed to the message if this condition returns false (i.e. dates.to is undefined)
      {
        message: "Please select a return date.",
        path: ["."],
      }
    ),
});

export default function BookingForm() {
  // 2.1 Define form with useForm hook from react-hook-form
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
    },
  });

  console.log("formErrors: ", JSON.stringify(form.formState.errors, null, 4));

  // 2.2 Define submit handler
  function onSubmit(values: z.infer<typeof FormSchema>) {
    console.log(values);
  }

  // 3. Build your form using <Form /> components
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
