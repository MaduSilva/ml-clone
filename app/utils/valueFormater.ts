export const formatValue = (value: number): string => {
  if (value) {
    return value.toLocaleString("pt-BR", { minimumFractionDigits: 0 });
  }

  return "";
};
