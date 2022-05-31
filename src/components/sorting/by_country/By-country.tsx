import styled from 'styled-components'
import GridItem from '../../grid_item';
import useFilter from '../../../context/Filter/hooks/userFilter';

const Box = styled.div`
font-family: 'Jura';
margin: 20px 10% 30px 10%;
display: grid;
grid-template-columns: repeat(auto-fill, minmax(64px, 1fr));
grid-auto-rows: minmax(44px, 1fr);
`
interface Active {
  active?: boolean;
}
const Flag = styled.img<Active>`
padding: 5px;
cursor: pointer;
transition: all 0.3s ease;
&:hover {
  filter: drop-shadow(0 0 10px #007934);
  transition: all 0.3s ease;
}
&:active {
  filter: drop-shadow(0 0 10px #38930D);
}
filter: ${(props) => (props.active ? 'drop-shadow(0 0 10px #007934)' : '')};
`

const P = styled.p<Active>`
font-size: 26px;
font-weight: 400;
padding: 5px;
cursor: pointer;
white-space: nowrap;
&:hover {
  transition: all 0.3s ease;
  color: #38930D;
}
color: ${(props) => (props.active ? '#38930d' : '#000000')};
`

// переделать в виде функции.
const ByCountry = () => {

  const { filterValue, setFilterValue } = useFilter();

  const flags = [
    {
      title: 'Америка',
      name: 'Американские автомобили',
      img: 'https://firebasestorage.googleapis.com/v0/b/carlogo-30ae8.appspot.com/o/flags-svg%2F%D0%90%D0%BC%D0%B5%D1%80%D0%B8%D0%BA%D0%B0%D0%BD%D1%81%D0%BA%D0%B8%D0%B5%20%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D0%B8.svg?alt=media&token=1b361550-50ef-49ab-871d-c3c8431fc4ea'
    },
    {
      title: 'Англия',
      name: 'Английские автомобили',
      img: 'https://firebasestorage.googleapis.com/v0/b/carlogo-30ae8.appspot.com/o/flags-svg%2F%D0%90%D0%BD%D0%B3%D0%BB%D0%B8%D0%B9%D1%81%D0%BA%D0%B8%D0%B5%20%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D0%B8.svg?alt=media&token=030cb35c-432e-4287-8d27-24ec200a96cc'
    },
    {
      title: 'Бразилия',
      name: 'Бразильские автомобили',
      img: 'https://firebasestorage.googleapis.com/v0/b/carlogo-30ae8.appspot.com/o/flags-svg%2F%D0%91%D1%80%D0%B0%D0%B7%D0%B8%D0%BB%D1%8C%D1%81%D0%BA%D0%B8%D0%B5%20%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D0%B8.svg?alt=media&token=784b68c7-d371-415e-be17-27da2beac46f'
    },
    {
      title: 'Дубай',
      name: 'Дубайские автомобили',
      img: 'https://firebasestorage.googleapis.com/v0/b/carlogo-30ae8.appspot.com/o/flags-svg%2F%D0%94%D1%83%D0%B1%D0%B0%D0%B9%D1%81%D0%BA%D0%B8%D0%B5%20%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D0%B8.svg?alt=media&token=d15d30a2-6c1d-48a7-bca4-01d7ec6fbabe'
    },
    {
      title: 'Индия',
      name: 'Индийские автомобили',
      img: 'https://firebasestorage.googleapis.com/v0/b/carlogo-30ae8.appspot.com/o/flags-svg%2F%D0%98%D0%BD%D0%B4%D0%B8%D0%B9%D1%81%D0%BA%D0%B8%D0%B5%20%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D0%B8.svg?alt=media&token=80b982a1-23f6-4364-a3af-130aea9a85a7'
    },
    {
      title: 'Иран',
      name: 'Иранские автомобили',
      img: 'https://firebasestorage.googleapis.com/v0/b/carlogo-30ae8.appspot.com/o/flags-svg%2F%D0%98%D1%80%D0%B0%D0%BD%D1%81%D0%BA%D0%B8%D0%B5%20%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D0%B8.svg?alt=media&token=0fbc58f6-00f9-4b1d-aae5-351e4dccf8fe'
    },
    {
      title: 'Испания',
      name: 'Испанские автомобили',
      img: 'https://firebasestorage.googleapis.com/v0/b/carlogo-30ae8.appspot.com/o/flags-svg%2F%D0%98%D1%81%D0%BF%D0%B0%D0%BD%D1%81%D0%BA%D0%B8%D0%B5%20%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D0%B8.svg?alt=media&token=6bb413f9-e4ae-4930-997d-17939dca95a9'
    },
    {
      title: 'Италия',
      name: 'Итальянские автомобили',
      img: 'https://firebasestorage.googleapis.com/v0/b/carlogo-30ae8.appspot.com/o/flags-svg%2F%D0%98%D1%82%D0%B0%D0%BB%D1%8C%D1%8F%D0%BD%D1%81%D0%BA%D0%B8%D0%B5%20%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D0%B8.svg?alt=media&token=cff30649-6063-49d9-9d9b-33ec9ddbf0eb'
    },
    {
      title: 'Китай',
      name: 'Китайские автомобили',
      img: 'https://firebasestorage.googleapis.com/v0/b/carlogo-30ae8.appspot.com/o/flags-svg%2F%D0%9A%D0%B8%D1%82%D0%B0%D0%B9%D1%81%D0%BA%D0%B8%D0%B5%20%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D0%B8.svg?alt=media&token=e19fbb0a-6566-44dc-a6b9-98b5d3dff406'
    },
    {
      title: 'Корея',
      name: 'Корейские автомобили',
      img: 'https://firebasestorage.googleapis.com/v0/b/carlogo-30ae8.appspot.com/o/flags-svg%2F%D0%9A%D0%BE%D1%80%D0%B5%D0%B9%D1%81%D0%BA%D0%B8%D0%B5%20%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D0%B8.svg?alt=media&token=744006bf-402d-4071-9cdd-132b5ec0b85f'
    },
    {
      title: 'Латвия',
      name: 'Латвийские автомобили',
      img: 'https://firebasestorage.googleapis.com/v0/b/carlogo-30ae8.appspot.com/o/flags-svg%2F%D0%9B%D0%B0%D1%82%D0%B2%D0%B8%D0%B9%D1%81%D0%BA%D0%B8%D0%B5%20%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D0%B8.svg?alt=media&token=c7d21da7-030a-41f7-8cdd-1a572a7611ea'
    },
    {
      title: 'Малазия',
      name: 'Малазийские автомобили',
      img: 'https://firebasestorage.googleapis.com/v0/b/carlogo-30ae8.appspot.com/o/flags-svg%2F%D0%9C%D0%B0%D0%BB%D0%B0%D0%B7%D0%B8%D0%B9%D1%81%D0%BA%D0%B8%D0%B5%20%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D0%B8.svg?alt=media&token=0d9168a2-9543-429f-9b0f-a4c2e9537b07'
    },
    {
      title: 'Германия',
      name: 'Немецкие автомобили',
      img: 'https://firebasestorage.googleapis.com/v0/b/carlogo-30ae8.appspot.com/o/flags-svg%2F%D0%9D%D0%B5%D0%BC%D0%B5%D1%86%D0%BA%D0%B8%D0%B5%20%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D0%B8.svg?alt=media&token=c6a9279d-2195-4e2a-8883-d68dbcf33975'
    },
    {
      title: 'Россий',
      name: 'Российские автомобили',
      img: 'https://firebasestorage.googleapis.com/v0/b/carlogo-30ae8.appspot.com/o/flags-svg%2F%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D0%B9%D1%81%D0%BA%D0%B8%D0%B5%20%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D0%B8.svg?alt=media&token=811a911c-b3c8-48cd-8d61-4646b889fe80'
    },
    {
      title: 'Тайвань',
      name: 'Тайваньские автомобили',
      img: 'https://firebasestorage.googleapis.com/v0/b/carlogo-30ae8.appspot.com/o/flags-svg%2F%D0%A2%D0%B0%D0%B9%D0%B2%D0%B0%D0%BD%D1%8C%D1%81%D0%BA%D0%B8%D0%B5%20%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D0%B8.svg?alt=media&token=dc2d7892-e579-48c7-96bb-442348f9511c'
    },
    {
      title: 'Узбекистан',
      name: 'Узбекские автомобили',
      img: 'https://firebasestorage.googleapis.com/v0/b/carlogo-30ae8.appspot.com/o/flags-svg%2F%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D1%81%D0%BA%D0%B8%D0%B5%20%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D0%B8.svg?alt=media&token=3c82e203-ad23-440c-bf2e-decf8c75684d'
    },
    {
      title: 'Франция',
      name: 'Французские автомобили',
      img: 'https://firebasestorage.googleapis.com/v0/b/carlogo-30ae8.appspot.com/o/flags-svg%2F%D0%A4%D1%80%D0%B0%D0%BD%D1%86%D1%83%D0%B7%D1%81%D0%BA%D0%B8%D0%B5%20%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D0%B8.svg?alt=media&token=350d5303-8ae2-47a6-bb3b-eeda0b3dfefe'
    },
    {
      title: 'Чехия',
      name: 'Чешские автомобили',
      img: 'https://firebasestorage.googleapis.com/v0/b/carlogo-30ae8.appspot.com/o/flags-svg%2F%D0%A7%D0%B5%D1%88%D1%81%D0%BA%D0%B8%D0%B5%20%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D0%B8.svg?alt=media&token=474bcdff-c8ad-4244-862b-15bdcbf772a2'
    },
    {
      title: 'Швеция',
      name: 'Шведские автомобили',
      img: 'https://firebasestorage.googleapis.com/v0/b/carlogo-30ae8.appspot.com/o/flags-svg%2F%D0%A8%D0%B2%D0%B5%D0%B4%D1%81%D0%BA%D0%B8%D0%B5%20%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D0%B8.svg?alt=media&token=1f22910d-1282-4cb5-9b36-05271d5a5392'
    },

    {
      title: 'Швейцария',
      name: 'Швейцарские автомобили',
      img: 'https://firebasestorage.googleapis.com/v0/b/carlogo-30ae8.appspot.com/o/flags-svg%2F%D0%A8%D0%B2%D0%B5%D0%B9%D1%86%D0%B0%D1%80%D1%81%D0%BA%D0%B8%D0%B5%20%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D0%B8.svg?alt=media&token=7f3b9d05-ae38-42af-ad08-f66bf77b55ba'
    },

    {
      title: 'Япония',
      name: 'Японские автомобили',
      img: 'https://firebasestorage.googleapis.com/v0/b/carlogo-30ae8.appspot.com/o/flags-svg%2F%D0%AF%D0%BF%D0%BE%D0%BD%D1%81%D0%BA%D0%B8%D0%B5%20%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D0%B8.svg?alt=media&token=230679f7-3a79-421b-8ce3-3fdee8220519'
    },
  ];

  return (
    <>
      <Box>
        {flags.map((flag) => {
          return (<Flag 
            active={flag.name === filterValue}
            onClick={() => {
              setFilterValue(flag.name);
            }}

            key={flag.name} 
            title={flag.title} 
            src={flag.img} 
            alt={flag.name} 
          />)
        })}


        <P
          active={filterValue === ''}
          onClick={() => {
            setFilterValue('');
          }}
        >
          Все марки
        </P>
      </Box>

      <GridItem />
    </>
  );
};

export default ByCountry;
