import type { Discount } from "@prisma/client";
import { useState } from "react";

export function DiscountCard({ discount }: { discount: Discount }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <li className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
      <div className="flex w-full items-center justify-between space-x-6 p-6">
        <div className="flex-1 truncate">
          <h3 className="truncate text-sm font-medium text-gray-900">
            {discount.discountSupplierId}
          </h3>
          <p className="mt-1 truncate text-sm text-gray-500">
            {discount.shortDescription}
          </p>
        </div>
        <img
          className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
          src="https://tobb.no/media/ki2fx5ob/logo_orisdental.png?width=200&format=WebP&rnd=133401936133170000"
          alt=""
        />
      </div>
      {expanded && (
        <p className="mt-1 truncate text-sm text-gray-500">
          {discount.longDescription}
        </p>
      )}
      <div>
        <div className="-mt-px flex divide-x divide-gray-200">
          <div className="flex w-0 flex-1">
            <a
              href={discount.read_more_url}
              className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
            >
              Gå til infoside
            </a>
          </div>
          <div className="-ml-px flex w-0 flex-1">
            <button
              onClick={() => setExpanded((prev) => !prev)}
              className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
            >
              Forstørr
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
