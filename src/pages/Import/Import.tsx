import { useState } from 'react';
import * as jsonBrands from '../../mock/data_file.json';
import { Brand } from '../../types/Brand';

const Import = () => {
  const [current, setCurrent] = useState('0');
  const [brands, setBrands] = useState<{ [index: string]: any }>(jsonBrands);

  const upload = async () => {
    for (const brand in brands) {
      if (brand != 'default') {
        setCurrent(brand);
      }
    }
  };

  return (
    <>
      <div>Import brands {Object.keys(brands).length}</div>
      <button type='button' onClick={upload}>
        Import {current}
      </button>
    </>
  );
};

export default Import;
