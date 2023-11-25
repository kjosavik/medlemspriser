import type { Discount } from "@prisma/client";

export function DiscountCard({ discount }: { discount: Discount }) {
  return (
    <div className="border-2 border-mp-olive rounded p-4 bg-mp-gray">
      <h3>{discount.shortDescription}</h3>
      <p>{discount.longDescription}</p>
      <a className="font-bold hover:underline" href={discount.read_more_url}>
        Les mer
      </a>
    </div>
  );
}
