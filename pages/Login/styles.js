import styled from 'styled-components/native'


export const Container = styled.View`
    background-color:#333;
    flex:1;
    align-items:center;
    justify-content:flex-end;
    padding:0px 20px;

`;

export const Logo = styled.Image `
width:300px;
height:100px
`;

export const CaixaLogin = styled.View`
background-color:#fff;
height:52%;
width:100%;
border-top-right-radius:25px;
border-top-left-radius:25px;
padding:20px;
`;
export const ContainerButton = styled.View`
flex-direction:row;
`;
export const ButtonText = styled.Text`
font-size:20px;
color:${props=>props.lastClick? "#673f66":"#e6e6e6"};

`;


export const Button = styled.TouchableOpacity`
height:60px;
border-bottom-width:4px;
border-color:${props=>props.lastClick? "#AE1B73":"#fff"};
justify-content:center;
flex:1;
align-items:center;
margin:0px 5px;
`;


export const InputText = styled.Text`
color:#b4b8c6;
margin-top:20px;

`;

export const Input = styled.TextInput`
border:1px solid #ccc;
width:100%;
height:65px;
margin-top:5px;
border-radius:5px;
padding:0 20px;
`;

export const ForgotPasswordText = styled.Text`
color:#ae1b73;
margin-top:14px;
font-size:14px;
text-align:right;

`;
export const ContainerSubmit = styled.View`
flex-direction:row;
margin-top:25px;
`;

export const ButtonSubmit = styled.TouchableOpacity`
height:60px;
background-color:${props=>props.invert? "#fff":"#AE1B73"};
border:1px solid #AE1B73;
border-radius:5px;
justify-content:center;
align-items:center;
flex:1
margin-right:${props=>props.invert? '15px':'0px'};
`;

export const ButtonSubmitText = styled.Text`

color:${props=>props.invert? "#AE1B73":"#fff"};
font-size:16px;
font-weight:bold;

`;

   
  