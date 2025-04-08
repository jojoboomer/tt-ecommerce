import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface State {
  products: ProductOnCart[];
  totalProducts: number;
  totalPrice: number;
}

interface Actions {
  add: (producto: Product) => void;
  remove: (id: number) => void;
  clear: () => void;
  update: (id: number, quantity: number) => void;
}

// Estado inicial
const initState: State = {
  products: [],
  totalProducts: 0,
  totalPrice: 0,
};

export const useCart = create<State & Actions>()(
  persist(
    set => ({
      ...initState,
      add: (item) => {
        set((state) => {
          const { id } = item;
          const alreadyAdded = state.products.findIndex(
            (item) => item.id === id
          );

          if (alreadyAdded !== -1) {
            const newProducts: ProductOnCart[] = state.products.map((item) =>
              item.id === id
                ? { ...item, quantity: (item.quantity || 1) + 1 }
                : item
            );

            return {
              products: newProducts,
              totalProducts: state.totalProducts + 1,
              totalPrice: state.totalPrice + item.price,
            };
          }

          return {
            products: [...state.products, { ...item, quantity: 1 }],
            totalProducts: state.totalProducts + 1,
            totalPrice: state.totalPrice + item.price,
          };
        });
      },
      remove: (id) => {
        set((state) => {
          const existingProduct = state.products.find((item) => item.id === id);
          if (!existingProduct) return state;
      
          const quantity = existingProduct.quantity;
          const unitPrice = Number(existingProduct.price.toFixed(2));
          const totalDeduction = Number((unitPrice * quantity).toFixed(2));
      
          return {
            products: state.products.filter((item) => item.id !== id),
            totalProducts: state.totalProducts - quantity,
            totalPrice: Number((state.totalPrice - totalDeduction).toFixed(2)),
          };
        });
      },
      update: (id, quantity) => {
        set((state) => {
          const product = state.products.find((item) => item.id === id);
          if (!product) return state;

          const oldQuantity = product.quantity;
          const quantityDifference = quantity - oldQuantity;
          const newTotalProducts = state.totalProducts + quantityDifference;
          const newTotalPrice =
            state.totalPrice + product.price * quantityDifference;

          const updatedProducts = state.products.map((item) =>
            item.id === id ? { ...item, quantity } : item
          );

          return {
            products: updatedProducts,
            totalProducts: newTotalProducts,
            totalPrice: newTotalPrice,
          };
        });
      },
      clear: () => {
        set(() => initState);
      },
    }),
    {
      name: "commerce-storage",
      storage: createJSONStorage(() => localStorage)
    }
  )
);
