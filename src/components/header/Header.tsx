import styled from 'styled-components'
import "@fontsource/jost"
import "@fontsource/josefin-slab"
import "@fontsource/jura"

const HeaderStyle = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: flex-start;
  padding: 20px 15px 15px 15px;
  background-color: #343a40;
  color: #fff;
  cursor: default
`
const Box = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`

const Title = styled.h1`
padding-right: 16px;
font-family: Josefin Slab;
font-size: 64px;
font-weight: 400;
line-height: 64px;
letter-spacing: 0em;
text-align: left;
`
const TextLogo = styled.p`
font-family: Jura;
font-size: 14px;
font-weight: 500;
line-height: 19px;
`

const LogIn = styled.p`
font-family: Josefin Slab;
font-size: 24px;
font-weight: 400;
margin-right:5px;
cursor: pointer
`

const Form = styled.form`
position: relative;
width: 300px;
margin: 0 30px;
`

const ButtonMagnifier = styled.button`
border: none;
outline: none;
position: absolute;
right: 10px;
top: 1px;
cursor: pointer;
background: transparent;
`
const SearchBar = styled.input`
border: none;
outline: none;
border-radius: 50px;
width: 100%;
height: 38px;
background: #fff;
padding-left: 15px;
font-family: Jost;
font-size: 110%;
`

const Header = () => {
  return (
    <HeaderStyle>
      <Box>
        <Title>CarLogo</Title>
        <TextLogo>справочник<br /> автомобильных марок</TextLogo>
      </Box>
<Box>
      <Form>
        <SearchBar type="text" placeholder="Искать..." />
        <ButtonMagnifier type="submit">
          <svg width="32" height="32" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M27.5714 29.6043C22.4917 33.6727 15.0561 33.3525 10.3473 28.6437C5.29487 23.5913 5.29487 15.3997 10.3473 10.3473C15.3997 5.29488 23.5913 5.29488 28.6437 10.3473C33.3525 15.0561 33.6727 22.4917 29.6043 27.5714L39.4859 37.453C40.0473 38.0144 40.0473 38.9245 39.4859 39.4859C38.9246 40.0473 38.0144 40.0473 37.453 39.4859L27.5714 29.6043ZM12.3802 26.6107C8.45056 22.6811 8.45056 16.3099 12.3802 12.3802C16.3099 8.45057 22.6811 8.45057 26.6107 12.3802C30.5375 16.307 30.5404 22.6717 26.6194 26.6021C26.6165 26.6049 26.6136 26.6078 26.6107 26.6107C26.6078 26.6136 26.6049 26.6165 26.6021 26.6194C22.6717 30.5404 16.307 30.5375 12.3802 26.6107Z" fill="#007934" />
          </svg>
        </ButtonMagnifier>
      </Form>

      <Box>
        <LogIn>log in</LogIn>
        <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M13.8853 13.4375C13.8853 9.2321 17.2945 5.82294 21.4999 5.82294C25.7053 5.82294 29.1145 9.2321 29.1145 13.4375C29.1145 17.6429 25.7053 21.0521 21.4999 21.0521C17.2945 21.0521 13.8853 17.6429 13.8853 13.4375ZM21.4999 8.51044C18.7788 8.51044 16.5728 10.7164 16.5728 13.4375C16.5728 16.1587 18.7788 18.3646 21.4999 18.3646C24.2211 18.3646 26.427 16.1587 26.427 13.4375C26.427 10.7164 24.2211 8.51044 21.4999 8.51044Z" fill="white" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3333 26.4271C12.1069 26.4271 10.302 28.232 10.302 30.4584V32.5874C10.302 32.6198 10.3255 32.6474 10.3575 32.6526C17.7369 33.8574 25.2629 33.8574 32.6424 32.6526C32.6743 32.6474 32.6978 32.6198 32.6978 32.5874V30.4584C32.6978 28.232 30.893 26.4271 28.6666 26.4271H28.0559C28.0086 26.4271 27.9617 26.4346 27.9168 26.4492L26.3661 26.9556C23.2041 27.9881 19.7957 27.9881 16.6337 26.9556L15.083 26.4492C15.0381 26.4346 14.9912 26.4271 14.944 26.4271H14.3333ZM7.6145 30.4584C7.6145 26.7477 10.6226 23.7396 14.3333 23.7396H14.944C15.2745 23.7396 15.603 23.7919 15.9172 23.8945L17.4679 24.4008C20.0879 25.2563 22.912 25.2563 25.5319 24.4008L27.0826 23.8945C27.3968 23.7919 27.7253 23.7396 28.0559 23.7396H28.6666C32.3773 23.7396 35.3853 26.7477 35.3853 30.4584V32.5874C35.3853 33.9369 34.4073 35.0876 33.0754 35.305C25.4092 36.5567 17.5907 36.5567 9.92445 35.305C8.59254 35.0876 7.6145 33.9369 7.6145 32.5874V30.4584Z" fill="white" />
        </svg>
      </Box>
      </Box>
    </HeaderStyle>);
};

export default Header;
