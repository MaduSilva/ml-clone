interface Product {
  id: string;
  title: string;
  currency_id: string;
  price: number;
  installments: {
    quantity: number;
    amount: number;
  };
  thumbnail: string;
  condition: string;
  shipping: {
    free_shipping: boolean;
  };
  permalink: string;
}

export default Product;
