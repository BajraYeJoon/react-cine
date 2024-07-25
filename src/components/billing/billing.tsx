import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { z } from "zod";
import { Button } from "../ui/button";
import CryptoJS from "crypto-js";
import axios from "axios";

const billingSchema = z.object({
  amount: z.string(),
  failure_url: z.string(),
  product_delivery_charge: z.string(),
  product_service_charge: z.string(),
  product_code: z.string(),
  signature: z.string(),
  signed_field_names: z.string(),
  success_url: z.string(),
  tax_amount: z.string(),
  total_amount: z.string(),
  transaction_uuid: z.string(),
});

// {
//   "amount": "100",
//   "failure_url": "https://google.com",
//   "product_delivery_charge": "0",
//   "product_service_charge": "0",
//   "product_code": "EPAYTEST",
//   "signature": "YVweM7CgAtZW5tRKica/BIeYFvpSj09AaInsulqNKHk=",
//   "signed_field_names": "total_amount,transaction_uuid,product_code",
//   "success_url": "https://esewa.com.np",
//   "tax_amount": "10",
//   "total_amount": "110",
//   "transaction_uuid": "ab14a8f2b02c3"
//   }

const Billing = () => {
  const form = useForm<z.infer<typeof billingSchema>>({
    resolver: zodResolver(billingSchema),
    defaultValues: {
      amount: "0",
      failure_url: "",
      product_delivery_charge: "0",
      product_service_charge: "0",
      product_code: "",
      signature: "",
      signed_field_names: "",
      success_url: "",
      tax_amount: "0",
      total_amount: "0",
      transaction_uuid: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof billingSchema>) => {
    const currentTime = new Date();
    const transaction_uuid =
      currentTime.toISOString().slice(2, 10).replace(/-/g, "") +
      "-" +
      currentTime.getHours() +
      currentTime.getMinutes() +
      currentTime.getSeconds();

    const { total_amount, product_code } = values;

    const secret = "8gBm/:&EnhH.1/q";

    const hash = CryptoJS.HmacSHA256(
      `total_amount=${total_amount},transaction_uuid=${transaction_uuid},product_code=${product_code}`,
      secret
    );
    const signature = CryptoJS.enc.Base64.stringify(hash);

    const data = {
      amount: values.amount,
      failure_url: "https://google.com",
      product_delivery_charge: values.product_delivery_charge,
      product_service_charge: values.product_service_charge,
      product_code: "595a9dsf",
      signature: signature,
      signed_field_names: "total_amount,transaction_uuid,product_code",
      success_url: "https://esewa.com.np",
      tax_amount: values.tax_amount,
      total_amount:
        values.amount +
        values.tax_amount +
        values.product_delivery_charge +
        values.product_service_charge,
      transaction_uuid: transaction_uuid,
    };

    const senddata = async () => {
      await axios
        .post("https://rc-epay.esewa.com.np/api/epay/main/v2/form", data)
        .then((res) => {
          console.log(res.data);
        });
    };
    senddata();

    console.log(data);
  };

  return (
    <section className="flex items-center gap-4 ">
      <div className="flex flex-col gap-4">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-2"
            // method="POST"
            // action="https://rc-epay.esewa.com.np/api/epay/main/v2/form"
          >
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel> Amount</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="  Amount" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>{" "}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="product_delivery_charge"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Delivery Charge</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="  Product Delivery Charge"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="product_service_charge"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>service </FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="  " {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="tax_amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel> tax </FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="tax  " {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Pay with khalti
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default Billing;
