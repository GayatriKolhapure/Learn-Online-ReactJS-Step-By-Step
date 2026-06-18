import styled from "styled-components";

const Styledcomp = () => {

//   const Heading = styled.h3`
//     color: red;
//     background-color: yellow;
//     border-radius:5px;
//   `;

  const Heading = styled.h3({
    color: 'green',
    backgroundColor: 'yellow',
    borderRadius:'5px'
  })

  const StyleButton = styled.button`
  color:red;
  background-color:gray;
  `;

  return (
    <>
      <Heading>Hello Heading</Heading>
      <StyleButton>Login</StyleButton>
      <StyleButton>SignUp</StyleButton>
    </>
  );
};
export default Styledcomp;
