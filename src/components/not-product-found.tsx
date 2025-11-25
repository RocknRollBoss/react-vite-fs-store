import React from "react";
import { Search } from "lucide-react";
export const NotProductFound: React.FC = () => {
  return (
    <div className="col-span-4 flex flex-col items-center justify-center py-20 text-center text-gray-600 md:col-span-2 sm:col-span-1">
      <Search width={25} height={25} />
      <p className="text-lg font-semibold mb-2">Product not found</p>
      <p className="text-sm text-gray-400">
        Try changing the category, price range, or search.
      </p>
    </div>
  );
};
