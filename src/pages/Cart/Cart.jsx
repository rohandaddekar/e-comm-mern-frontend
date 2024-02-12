import { useEffect } from "react";
import Button from "../../components/Buttons/Button";
import { useClearCart, useGetAllCartItems } from "../../apis/cart/cart";
import CartItem from "../../components/Cart/CartItem";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartId = useSelector((state) => state.user.cartId);

  const { data, getAllCartItemsReq, isLoading, refetch } = useGetAllCartItems();
  const {
    clearCartReq,
    data: dataClearCart,
    isLoading: isLoadingClearCart,
  } = useClearCart();

  useEffect(() => {
    getAllCartItemsReq(cartId);
  }, []);

  const handleRefetch = () => {
    refetch(cartId);
  };

  const clearCartHandler = (e) => {
    e.preventDefault();
    clearCartReq(cartId);
  };

  useEffect(() => {
    dataClearCart && handleRefetch();
  }, [dataClearCart]);

  return (
    <>
      <section className="container mx-auto py-10">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-7 border p-8 rounded-md shadow">
            <div className="border-b pb-3 mb-5 flex items-center justify-between">
              <h1 className="text-3xl font-semibold ">Cart Items</h1>
              <form onSubmit={clearCartHandler}>
                <Button
                  title={"Clear Cart"}
                  type={"submit"}
                  isLoading={isLoadingClearCart}
                />
              </form>
            </div>

            {isLoading ? (
              <>loading...</>
            ) : data?.items?.length === 0 ? (
              <>no cart items</>
            ) : (
              data?.items?.map((item, i) => (
                <CartItem
                  key={i}
                  item={item}
                  index={i}
                  refetch={handleRefetch}
                />
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
