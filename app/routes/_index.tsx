import type { Discount } from "@prisma/client";
import { json, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { DiscountCard } from "~/components/DiscountCard";
import { prisma } from "~/utils/prisma.server";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader() {
  return json(await prisma.discount.findMany());
}

export default function Index() {
  const discounts = useLoaderData<Array<Discount>>();

  return (
    <div className="h-screen bg-gradient-to-b from-5% from-mp-turquoise to-mp-blue grid grid-cols-3">
      {discounts.map((discount) => (
        <DiscountCard key={discount.id} discount={discount}></DiscountCard>
      ))}
    </div>
  );
}
