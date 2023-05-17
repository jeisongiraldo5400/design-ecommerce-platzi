import { useState, useEffect } from "react";
import { Layout } from "../../components/Layout";
import { Card } from "../../components/Card";

export const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.log(error));
  }, []);

  console.log(items);

  return (
    <Layout>
      Home
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {items.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </Layout>
  );
};
