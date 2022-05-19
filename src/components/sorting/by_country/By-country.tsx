import styled from 'styled-components'
import GridItem from '../../grid_item';

import '@fontsource/jura';

const Box = styled.div`
font-family: Jura;
margin: 20px 10% 30px 10%;
display: grid;
grid-template-columns: repeat(auto-fill, minmax(64px, 1fr));
grid-auto-rows: minmax(44px, 1fr);;
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

  // const { filterValue, setFilterValue } = useFilter();

  return (
    <>
    <Box>
      <Flag src={"https://firebasestorage.googleapis.com/v0/b/carlogo-30ae8.appspot.com/o/flags-svg%2FAustralia.svg?alt=media&token=b975372e-b4e9-4669-afab-f328cff3486e"}/>
      <Flag src={"https://firebasestorage.googleapis.com/v0/b/carlogo-30ae8.appspot.com/o/flags-svg%2FAustria.svg?alt=media&token=f58ade28-3a04-4ee4-982d-66246341e96d"}/>
      <Flag src={"https://firebasestorage.googleapis.com/v0/b/carlogo-30ae8.appspot.com/o/flags-svg%2FBelarus.svg?alt=media&token=a969a7a0-b17d-40d6-b209-ea30f8360a19"}/>
      <Flag src={"https://firebasestorage.googleapis.com/v0/b/carlogo-30ae8.appspot.com/o/flags-svg%2FBelgium.svg?alt=media&token=1c2574e0-6b93-4294-aead-7512a64b1cb8"}/>
      <Flag src={"https://firebasestorage.googleapis.com/v0/b/carlogo-30ae8.appspot.com/o/flags-svg%2FBrazil.svg?alt=media&token=4c8b79d2-c035-417d-9c28-a7c80440ff98"}/>
      <Flag src={"https://firebasestorage.googleapis.com/v0/b/carlogo-30ae8.appspot.com/o/flags-svg%2FChina.svg?alt=media&token=cc3b2f14-17e8-4d2a-ab4f-f2a15ab78ee1"}/>
      <Flag src={"https://firebasestorage.googleapis.com/v0/b/carlogo-30ae8.appspot.com/o/flags-svg%2FCroatia.svg?alt=media&token=1ce44f4a-c11f-4c20-8b91-2181998e9a1d"}/>
      <Flag src={"https://firebasestorage.googleapis.com/v0/b/carlogo-30ae8.appspot.com/o/flags-svg%2FCzech.svg?alt=media&token=7009f93d-bda3-4822-b8d0-6b6183bf8df2"}/>
      <Flag src={"https://firebasestorage.googleapis.com/v0/b/carlogo-30ae8.appspot.com/o/flags-svg%2FDenmark.svg?alt=media&token=47e666d3-aa06-4031-b028-3aaf66f556ea"}/>
      <Flag src={"https://firebasestorage.googleapis.com/v0/b/carlogo-30ae8.appspot.com/o/flags-svg%2FFinland.svg?alt=media&token=7ce7e530-a60a-453c-8733-965bb6bf5018"}/>
      <Flag src={"https://firebasestorage.googleapis.com/v0/b/carlogo-30ae8.appspot.com/o/flags-svg%2FFrance.svg?alt=media&token=f27b9638-7524-4f28-b725-046ab3738ffe"}/>
      <Flag src={"https://firebasestorage.googleapis.com/v0/b/carlogo-30ae8.appspot.com/o/flags-svg%2FGermany.svg?alt=media&token=8d6c0f0b-44db-461b-b1bb-b615a0f24869"}/>
      <Flag src={"https://firebasestorage.googleapis.com/v0/b/carlogo-30ae8.appspot.com/o/flags-svg%2FGreatBritain.svg?alt=media&token=54294236-df82-407a-bed1-ae353ba5a16f"}/>
      <Flag src={"https://firebasestorage.googleapis.com/v0/b/carlogo-30ae8.appspot.com/o/flags-svg%2FGreece.svg?alt=media&token=cc672d7a-9202-44b2-80be-e8006bb384d5"}/>
      <Flag src={"https://firebasestorage.googleapis.com/v0/b/carlogo-30ae8.appspot.com/o/flags-svg%2FIndia.svg?alt=media&token=9f86c152-8375-45d3-9b0a-9295e9787814"}/>
      <Flag src={"https://firebasestorage.googleapis.com/v0/b/carlogo-30ae8.appspot.com/o/flags-svg%2FIran.svg?alt=media&token=1bf7edef-c991-4c22-aa73-fbca3a0c27ba"}/>
      <Flag src={"https://firebasestorage.googleapis.com/v0/b/carlogo-30ae8.appspot.com/o/flags-svg%2FItaly.svg?alt=media&token=5e07fa90-f085-4ff5-8352-66f35417677a"}/>
      <Flag src={"https://firebasestorage.googleapis.com/v0/b/carlogo-30ae8.appspot.com/o/flags-svg%2FJapan.svg?alt=media&token=f58fbf3e-10a2-439b-b321-47e4ebb88a83"}/>
      <Flag src={"https://firebasestorage.googleapis.com/v0/b/carlogo-30ae8.appspot.com/o/flags-svg%2FLatvian.svg?alt=media&token=2717f60a-ce0a-45e3-bfd9-8b5078adb235"}/>
      <Flag src={"https://firebasestorage.googleapis.com/v0/b/carlogo-30ae8.appspot.com/o/flags-svg%2FMalaysia.svg?alt=media&token=aaf9b72f-1232-47ce-b00f-5266b5d2f28c"}/>
      <Flag src={"https://firebasestorage.googleapis.com/v0/b/carlogo-30ae8.appspot.com/o/flags-svg%2FMexico.svg?alt=media&token=ec035179-f8cc-47d1-93ee-cbee34275bf5"}/>
      <P>Все страны</P>
      </Box>

      <GridItem />
    </>
  );
};

export default ByCountry;
