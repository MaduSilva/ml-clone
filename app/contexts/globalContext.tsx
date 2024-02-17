import Product from "@/interfaces/productsInterface";
import { createContext, useContext, useState } from "react";

interface GlobalContextType {
  productsData: Product[];
  setProductsData: React.Dispatch<React.SetStateAction<Product[]>>;
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}

const GlobalContext = createContext<GlobalContextType | null>(null);

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("Error useGlobalContext: context needs to be provided");
  }
  return context;
};

interface GlobalContextProviderProps {
  children?: React.ReactNode;
}

export const GlobalContextProvider: React.FC<GlobalContextProviderProps> = ({
  children,
}) => {
  const [productsData, setProductsData] = useState<Product[]>([]);
  const [searchText, setSearchText] = useState<string>("Samsung");

  return (
    <GlobalContext.Provider
      value={{ productsData, setProductsData, searchText, setSearchText }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
