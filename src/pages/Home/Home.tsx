import { useEffect, useState } from 'react';
import { getBrands } from '../../api/service/brands/brands';
import { Brand } from '../../types/Brand';
const Home = () => {
  const [brands, setBrands] = useState<Brand[]>([]);

  useEffect(() => {
    getBrands().then((resp) => {
      setBrands(resp);
    });
  }, []);

  return (
    <>
      <div>Home</div>
      {brands.map((brand) => (
        <span key={brand.name}>
          {brand.name}
        </span>
      ))}
    </>
  );
};

export default Home;
