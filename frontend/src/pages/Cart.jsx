import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { Trash } from "lucide-react";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item],
            });
          }
        }
      }
      setCartData(tempData);
    }
  }, [cartItems, products]);

  const isStockInvalid = cartData.some((item) => {
    const productData = products.find((p) => p._id === item._id);
    return item.quantity > (productData?.numberOfItems || 0);
  });

  return (
    <div className="border-t pt-14">
      <div className="mb-3 text-2xl">
        <Title text1={"YOUR"} text2={"CART"} lineLength={{ base: 5, sm: 24 }} />
      </div>

      <div>
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );
          const isInvalid =
            item.quantity > (productData?.numberOfItems || 0);

          return (
            <div
              key={index}
              className="grid py-4 text-gray-700 dark:text-gray-300 border-t border-b grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
            >
              <div className="flex items-start gap-6">
                <img
                  className="w-16 sm:w-20"
                  src={productData.image[0]}
                  alt=""
                />
                <div>
                  <p className="flex items-center gap-2 text-xs font-medium sm:text-lg">
                    {productData.name}
                    {isInvalid && (
                      <span
                        className="text-sm text-red-500"
                        title="Quantity exceeds available stock"
                      >
                        ⚠️
                      </span>
                    )}
                  </p>
                  <div className="flex items-center gap-5 mt-2">
                    <p>
                      {currency}
                      {productData.price}
                    </p>
                    <p className="px-2 border sm:px-3 sm:py-1 bg-slate-50 dark:bg-gray-800">
                      {item.size}
                    </p>
                  </div>
                  {isInvalid && (
                    <p className="mt-1 text-xs text-red-500">
                      Only {productData.numberOfItems} left in stock
                    </p>
                  )}
                </div>
              </div>

              <input
                onChange={(e) =>
                  e.target.value === "" || e.target.value === "0"
                    ? null
                    : updateQuantity(
                        item._id,
                        item.size,
                        Number(e.target.value)
                      )
                }
                className="px-1 py-1 text-black bg-white border border-gray-300 rounded dark:border-gray-600 dark:bg-gray-800 dark:text-white max-w-10 sm:max-w-20 sm:px-2"
                type="number"
                min={1}
                defaultValue={item.quantity}
              />

              <Trash
                onClick={() => updateQuantity(item._id, item.size, 0)}
                className="w-4 mr-4 text-gray-600 cursor-pointer sm:w-5 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-500"
              />
            </div>
          );
        })}
      </div>

      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className="w-full text-end">
            <button
              onClick={() => {
                if (!isStockInvalid) {
                  navigate("/place-order");
                }
              }}
              disabled={isStockInvalid}
              className={`px-8 py-3 my-8 text-white tex-sm transition-colors duration-200
              ${
                isStockInvalid
                  ? "bg-gray-400 cursor-not-allowed dark:bg-gray-700"
                  : "bg-black hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700"
              }
              `}
            >
              {isStockInvalid
                ? "INVALID QUANTITY IN CART"
                : "PROCEED TO CHECKOUT"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
