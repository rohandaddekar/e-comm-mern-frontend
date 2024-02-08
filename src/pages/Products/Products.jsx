import { useEffect } from "react";
import { useGetAllProducts } from "../../apis/product/product";
import Search from "../../components/Product/Search";
import Card from "../../components/Product/Card";

const Products = () => {
  const { data, getAllProductsReq, isLoading } = useGetAllProducts();

  useEffect(() => {
    getAllProductsReq();
  }, []);

  return (
    <>
      <section className="container mx-auto py-10">
        <div className="border-b mb-8 pb-5 grid grid-cols-12">
          <h1 className="col-span-6 text-3xl font-semibold">Products</h1>
          <div className="col-span-6">
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-6">
                <Search />
              </div>
              <select className="col-span-6 select select-bordered w-full max-w-xs">
                <option value="default" disabled>
                  Sort By
                </option>
                <option value="latest">Latest</option>
                <option value="oldest">Oldest</option>
              </select>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-4"></div>
          <div className="col-span-8">
            {isLoading ? (
              <>loading...</>
            ) : data?.products?.length === 0 ? (
              <>no products</>
            ) : (
              <div className="grid grid-cols-12 gap-10">
                {data?.products?.map((product, i) => (
                  <Card product={product} key={i} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
