export const Card = () => {
  return (
    <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
      <figure className="relative mb-2 w-full h-4/5">
        <span
          className="absolute bottom-0 left-0 bg-white/60
          rounded-lg text-black text-xs
          m-2 px-3 py-0.5
        "
        >
          Electronics
        </span>
        <img
          className="
          w-full 
          h-full object-cover rounded-lg"
          src="https://cdn.shopify.com/s/files/1/0573/2309/4216/products/Miami_RubyRed_001_1200x1200.png?v=1656925796"
          alt="headphones"
        />
        <div
          className="absolute 
          top-0 right-0 flex justify-center 
          items-center
          bg-white w-6 h-6 rounded-full
          p-1
          "
        >
          +
        </div>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">Headphones</span>
        <span className="text-lg font-semibold">$300</span>
      </p>
    </div>
  );
};
