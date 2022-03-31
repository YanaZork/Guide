import { useEffect, useState } from 'react';
import { getBrands } from '../../api/service/brands/brands';
import { Brand } from '../../types/Brand';
import Header from '../../components/Header';
const Home = () => {
  const [brands, setBrands] = useState<Brand[]>([]);

  useEffect(() => {
    getBrands().then((resp) => {
      setBrands(resp);
    });
  }, []);

  return (
    <>
      <Header />
      <div>Home</div>
      {brands.map((brand) => (
        <span>{brand.name}</span>
      ))}
    </>
  );
};

export default Home;
