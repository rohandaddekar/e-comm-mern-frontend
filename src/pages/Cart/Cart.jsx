import { useEffect } from "react";
import { useGetAllCartItems } from "../../apis/cart/cart";
import CartItem from "../../components/Cart/CartItem";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartId = useSelector((state) => state.user.cartId);

  const { data, getAllCartItemsReq, isLoading } = useGetAllCartItems();

  useEffect(() => {
    getAllCartItemsReq(cartId);
  }, []);

  return (
    <>
      <section className="container mx-auto py-10">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-7 border p-8 rounded-md shadow">
            <h1 className="text-3xl font-semibold border-b pb-3 mb-5">
              Cart Items
            </h1>

            {isLoading ? (
              <>loading...</>
            ) : data?.items?.length === 0 ? (
              <>no cart items</>
            ) : (
              data?.items?.map((item, i) => (
                <CartItem key={i} item={item} index={i} />
              ))
            )}
          </div>
          <div className="col-span-5 border p-8 rounded-md shadow">
            <h1 className="text-3xl font-semibold border-b pb-3">Checkout</h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
