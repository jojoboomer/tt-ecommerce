import { create } from "zustand";
import { persist } from "zustand/middleware";

type Filters = {
  category: string;
  searchText: string;
};

interface State {
  allProducts: Product[];
  allCategories: string[];
  filters: Filters;
}

interface Actions {
  fetchProducts: () => Promise<void>;
  setFilters: (filters: Partial<Filters>) => void;
}

const initState: State = {
  allProducts: [],
  allCategories: [],
  filters: {
    category: "all",
    searchText: "",
  },
};

export const useProductStore = create<State & Actions>()(
  persist(
    set => ({
      ...initState,

      fetchProducts: async () => {
        try {
          const res = await fetch("https://fakestoreapi.com/products");

          const allProducts: Product[] = await res.json();
          const allCategories = Array.from(
            new Set(allProducts.map((p) => p.category))
          );
          set({ allProducts, allCategories });
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      },

      setFilters: (newFilters) => {
        set((state) => ({
          filters: {
            ...state.filters,
            ...newFilters,
          },
        }));
      },
    }),
    {
      name: "product-store",
      partialize: (state) => ({
        filters: state.filters,
      }),
    }
  )
);
