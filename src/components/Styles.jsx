import styled from 'styled-components';

export const InputBox = styled.div`
width: 100%;
height: 28px;
padding: 8px 0;
display: flex;
flex-flow: row wrap;
align-items: flex-start;
justify-content: space-between;`;

export const Input = styled.input`
width: 80%;
text-decoration: none;
border: none;
background-color: whitesmoke;
padding: 2px 10px;
color: grey;
height: 100%;
font-size: medium;

 &::placeholder {
  color: grey;
  font-size: medium;
}

& :focus {
  outline: none;
}


&:focus::placeholder {
  color: transparent;
  border: none !important;
}
`;

export const TitleH3 = styled.h3`
font-weight: 700;
margin: auto;
padding: 40px 10px 40px 0;
font-size: 1.8em;
`;


export const Th = styled.th`
text-align: left;
color: darkslategrey;
font-weight: 700;



`;

export const Td = styled.td`
color: slategrey;
padding-left: ${props => (props.patientId ? '4px' : '0')};



`;

export const Tr = styled.tr`
font-weight: 700;

&:nth-child(even) {
  background-color: whitesmoke;
}
`;

export const Table = styled.table`
width: 100%;
margin: auto;
`;

export const Span = styled.span`
color: grey;
`;


export const Button = styled.button`
font-weight: 700;
text-align: center;
margin: auto;
text-decoration: none;
color: white;

padding: 10px 20px;
border: none !important;
background-color: transparent;
color: slategray;

 &:hover {
  color: darkslategray;
  border: 1px solid black;
}
`;

export const RegisterArea = styled.div`
position: fixed;
width: 100px;
height: 100px;
bottom: 100px;
right: 90px;
background-color: darkturquoise;
color: #fff;
border-radius: 50px;
text-align: center;
box-shadow: 2px 2px 3px #999;
margin: auto;

& :hover :nth-child(1) {
  color: rgb(164, 157, 199);
}

`;

export const EndForm = styled.button`
position: fixed;
width: 100px;
height: 100px;
bottom: 100px;
right: 90px;
background-color: darkturquoise;
color: #fff;
border-radius: 50px;
text-align: center;
box-shadow: 2px 2px 3px #999;
margin: auto;

& :hover :nth-child(1) {
  color: rgb(164, 157, 199);
}
`;

export const Container = styled.div`
width: 90%;
height: 100vh;
margin: 0 auto;
font-family: 'Open Sans', sans-serif;
/* overflow: hidden; */
padding-top: 20px;
`;

export const Nav = styled.nav`
position: sticky;
`;

export const Ul = styled.ul`
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    border: 4px solid white;
    color: turquoise;
`;


export const Li = styled.li`
width: 20%;
height: 60px;
display: flex;
align-items: flex-start;
justify-content: flex-start;
color: turquoise;
text-decoration: none;
list-style-type: none;

&:hover {
  color: rgb(164, 157, 199);
}

:hover :first-child {
  /* background-color: rgb(164, 157, 199); */
  color: rgb(164, 157, 199);
}
`;

export const Pe = styled.p`
font-size: medium;
`;

