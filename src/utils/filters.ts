// Función auxiliar para capitalizar palabras
export const capitalizeWords = (text: string) => {
    return text
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

// Función auxiliar para crear ID limpio
export const createCleanId = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, "-");
};

export const obtenerCategorias = (productos: { category: string }[]) => {
  const categoriasUnicas = Array.from(
    new Set(productos.map((p) => p.category))
  ).map(categoria => (categoria));

  return categoriasUnicas;
}
