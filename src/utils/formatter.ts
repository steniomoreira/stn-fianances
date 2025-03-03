export const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat("pt-BR", { timeZone: "UTC" }).format(date);
};

export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};
