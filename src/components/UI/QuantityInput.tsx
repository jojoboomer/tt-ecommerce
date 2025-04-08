export const QuantityInput = ({
  id,
  value,
  onChange,
}: {
  value: number;
  id: number;
  onChange: (value: number, id: number) => void;
}) => {
  return (
    <div>
      <div className="flex items-center rounded-sm border border-gray-200">
        <input
          type="number"
          id="quantity"
          value={value}
          onChange={(e) => onChange(id, parseInt(e.target.value))}
          className="h-10 w-16 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
        />
      </div>
    </div>
  );
};
