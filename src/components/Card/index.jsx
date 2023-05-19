import PropTypes from 'prop-types';  

import { useContext } from 'react';

import { ShoppingCartContext } from '../../Context';

// Icons
import { PlusIcon } from "@heroicons/react/24/solid";


export const Card = ({ data }) => {

  const context = useContext(ShoppingCartContext);

  const { category, price, title, images } = data;
  const { name } = category;
  
  return (
    <div 
      className="bg-white cursor-pointer w-56 h-60 rounded-lg"
      onClick={() => context.openProductDetail()}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span
          className="absolute bottom-0 left-0 bg-white/60
          rounded-lg text-black text-xs
          m-2 px-3 py-0.5
        "
        >
          {name}
        </span>
        <img
          className="
          w-full 
          h-full object-cover rounded-lg"
          src={images[0]}
          alt={title}
        />
        <div
          className="absolute 
          top-0 right-0 flex justify-center 
          items-center
          bg-white w-6 h-6 rounded-full
          p-1
          "
          onClick={() => context.setCount(context.count + 1)}
        >
          <PlusIcon className='h-6 w-6 text-black'/>
        </div>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{title}</span>
        <span className="text-lg font-semibold">{price}</span>
      </p>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.object.isRequired
}