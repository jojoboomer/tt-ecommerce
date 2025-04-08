export const CategoryList = ({ categories }: { categories: Category[] }) => {
  return (
    <section className="w-full flex items-center gap-4 overflow-clip">
      {categories.map((category) => (
        <div
          className="aspect-video flex items-center justify-center h-36 bg-tertiary p-2 border cursor-pointer border-black rounded-md hover:bg-tertiary/80"
          key={category.id}
        >
          {category.name}
        </div>
      ))}
    </section>
  );
};
