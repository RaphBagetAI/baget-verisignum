"use server";

import { revalidatePath } from "next/cache";

// These functions are globally available in the sandbox environment.
declare function run_sql(params: { sql: string; params: any[] }): Promise<any>;
declare function wire_payment(params: {
  productName: string;
  amountCents: number;
  billingInterval: 'month' | 'year' | 'one_time';
  description?: string;
}): Promise<{ url:string }>;


export async function createRetainer(
  state: { success: boolean; message: string },
  formData: FormData
) {
  // Hardcoded user ID since auth is disabled
  const userId = "12345";

  const productName = formData.get("productName") as string;
  const amount = parseFloat(formData.get("amount") as string);
  const amountCents = Math.round(amount * 100);

  if (!productName || isNaN(amountCents) || amountCents <= 0) {
    return { success: false, message: "Invalid form data" };
  }

  try {
    const paymentLink = await wire_payment({
      productName: productName,
      amountCents: amountCents,
      billingInterval: "month",
      description: `Monthly retainer for ${productName}`,
    });

    if (!paymentLink || !paymentLink.url) {
      return { success: false, message: "Could not create payment link" };
    }

    await run_sql({
      sql: "INSERT INTO retainers (user_id, product_name, amount_cents, billing_interval, payment_link_url) VALUES ($1, $2, $3, $4, $5)",
      params: [userId, productName, amountCents, "month", paymentLink.url],
    });

    revalidatePath("/dashboard");
    return { success: true, message: `Successfully created payment link: ${paymentLink.url}` };
  } catch (error) {
    console.error(error);
    return { success: false, message: "An error occurred" };
  }
}
