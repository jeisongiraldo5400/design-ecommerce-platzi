import { useContext } from "react";

import "./styles.css";

// Icons
import { XMarkIcon } from "@heroicons/react/24/solid";

//ShoppingCartContext 
import { ShoppingCartContext } from "../../Context";

export const ProductDetail = () => {

  const context = useContext(ShoppingCartContext);

  return (
    <aside
      className={`
        ${context.isProductDetailOpen ? 'flex' : 'hidden' }
        product-detail
        flex-col fixed right-0 
        border border-black 
        rounded-lg
        bg-white
    `}
    >
      <div className="flex justify-between items-center p-5">
        <h2 className="font-medium text-xl">Detail</h2>
        <div
          className="cursor-pointer"
          onClick={() => context.closeProductDetail()}
        >
          <XMarkIcon className="h-6 w-6 text-black"/>
        </div>
      </div>
    </aside>
  );
};
