import Styled from "styled-components"
const EightthPage = () => {
    return(
        <Main>
            <Main2>
                <Para1>
                Almost done!
                </Para1>
                <Para2>
                Please let us know where we should send your estimate. Our experts may need to ask a few extra questions to calculate a precise quote for your case.
                </Para2>
                <Para3>
                Your contact data
                </Para3>
                <Main3>
                    <Main4>
                        <label>
                        *Full name
                        <Input type="text"/>
                        </label>
                    </Main4>
                    <Main4>
                    <label>
                        *Company Name
                        <Input type="text"/>
                        </label>
                    </Main4>
                </Main3>
                <Main3>
                    <Main4>
                        <label htmlFor="Fullname">
                        *Work email
                        <Input type="text" id="Fullname"/>
                        </label>
                        
                    </Main4>
                    <Main4>
                    <label htmlFor="Fullname">
                        *Phone Number
                        <Input type="text" id="Fullname"/>
                        </label>
                    </Main4>
                </Main3>
                <Main3>
                <para3>
                Preferred way of communication:
                </para3>
                <ButtonCon>
      <ActiveButton>Any</ActiveButton>
      <div>
        <Buttonel>Email</Buttonel>
        <Butt>Phone</Butt>
      </div>
    </ButtonCon>

                </Main3>
                

            </Main2>
            <label> <Input2 type="checkbox" />I agree to have Sepnoty contact me Via email, Phone, Messenger.</label>
            
            <label><Input2 type="checkbox"/>I agree to have Sepnoty provide my request information to sepnoty affiliated development
centres.</label>
<para1>Your personal data will be stored for ten years on US servers in accordance with GDPR, and erased thereafter. 
We'll share it with our development centre to address your request, ensuring GDPR compliance at both locations. 
Refer to our <Span>Privacy Policy </Span>for details.</para1>
        </Main>
    )

}




export default EightthPage;

const ActiveButton = Styled.button`
  background-color: #2b459b;
  border-radius:8px;
  margin-right:-10px;
  margin-top:5px;
  font-size: 10px;
  color: #ffffff;
  height:30px;
  height:20px;
  width:60px;
`;

const Buttonel =    Styled.button`
  font-size: 10px;
  background-color: #d9d9d9;
  margin-left: 1px;
  border-right: 1px solid #9e9898;
  height:20px;
  width:60px;
`;

 const Butt = Styled.button`
  background-color: #d9d9d9;
  font-size: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  height:20px;
  width:60px;
`;
const ButtonCon = Styled.div`
  display: flex;
  flex-direction: row;
  margin-left:40px;

`;

const Main = Styled.div`
    display:flex;
    flex-direction:column;
    padding:20px;
background: #C1CAE7;
gap:20px;
`
const Main2 = Styled.div`
display:flex;
    flex-direction:column;

`
const Para1 = Styled.p`
color:#2B459B;
font-weight:500;
`




const Para2 = Styled.p`
color:#263238;
margin-top:-10px;
`
const Para3 = Styled.p`
color:#263238;
font-weight:700;
font-family:inter;
`
const Main3 = Styled.div`
display:flex;
flex-direction:row;
margin-top:10px;
margin-bottom:10px;
`
const Main4 = Styled.div`
display:flex;
flex:direction:column;
`
const Input =  Styled.input`
background:transparent;
`
const Input2 = Styled.input`

`
const Span = Styled.span`
color:#BC2424;
`




