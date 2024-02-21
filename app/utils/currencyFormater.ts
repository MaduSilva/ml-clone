export const getCurrencySymbol = (currencyCode: string): string => {
  if (currencyCode) {
    switch (currencyCode.toUpperCase()) {
      case "BRL":
        return "R$";
      case "ARS":
        return "$";

      default:
        return currencyCode;
    }
  }
  return "";
};
