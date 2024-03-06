import { fakerKO as faker } from "@faker-js/faker";
import type { Payment } from "./columns";

function generatePayment(count: number): Payment[] {
  const payments = [];
  for (let i = 0; i < count; i++) {
    const payment: Payment = {
      id: faker.string.nanoid(),
      amount: faker.number.int({ min: 1000, max: 100000 }),
      status: faker.helpers.arrayElement([
        "pending",
        "processing",
        "success",
        "failed",
      ]),
      email: faker.internet.email({ allowSpecialCharacters: false }),
    };
    payments.push(payment);
  }

  return payments;
}

export { generatePayment };
