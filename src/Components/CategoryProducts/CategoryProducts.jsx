import axios from "axios";
import { useEffect } from "react";

const CategoryProducts = ({ categoryId }) => {
  async function getCategoryProducts() {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/categoy/products/${categoryId}`
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCategoryProducts();
  }, []);

  return <div>CategoryProducts</div>;
};

export default CategoryProducts;
