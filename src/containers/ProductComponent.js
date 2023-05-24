import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    return (
      <div className="border-2 rounded-lg shadow-lg w-64" key={product.id}>
        <div className="flex flex-col justify-start gap-3 px-3">
          <div className="w-full">
            <img
              className="h-60 w-full object-contain"
              src={product.image}
              alt={product.title}
            />
          </div>
          <div className="flex flex-col justify-start gap-2 max-h-36 min-h-[9rem]">
            <div className="text-lg font-bold h-16 overflow-clip">
              {product.title}
            </div>
            <div className="text-lg font-bold">${product.price}</div>
            <div className="text-gray-500 text-sm font-semibold">
              {product.category}
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <>{renderList}</>;
};
export default ProductComponent;
