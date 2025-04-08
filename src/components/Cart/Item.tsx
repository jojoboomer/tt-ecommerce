
export const Item = ({ product }: { product: ProductOnCart }) => {
  

  return (
    <li className="flex items-center gap-4 text-base">
      <img
        src={product.image}
        alt={product.title}
        className="size-16 rounded-sm object-cover border border-text/20"
      />

      <h3 className="text-gray-900">{product.title}</h3>

      <div className="flex flex-1 flex-col md:flex-row items-center justify-end gap-2">
        <div className="space-x-1">
          <dt className="inline">Cantidad:</dt>
          <dd className="inline">{product.quantity}</dd>
        </div>

        <div className="space-x-1">
          <dt className="inline">Precio:</dt>
          <dd className="inline">${product.quantity * product.price}</dd>
        </div>
      </div>
    </li>
  );
};
