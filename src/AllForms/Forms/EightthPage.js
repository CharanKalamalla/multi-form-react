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
                        </label>
                        <div>
                        <Input type="text"/>
                        </div>
                    </Main4>
                    <Main4>
                        <para3>
                        *Company name
                        </para3>
                        <div>
                        <Input type="text"/>
                        </div>
                    </Main4>
                </Main3>
                <Main3>
                    <Main4>
                        <label htmlFor="Fullname">
                        *Work email
                        </label>
                        <Input type="text" id="Fullname"/>
                    </Main4>
                    <Main4>
                        <para3>
                        *Phone number
                        </para3>
                        <div>
                        <Input type="text"/>
                        </div>
                    </Main4>
                </Main3>
                <para3>
                Preferred way of communication:
                </para3>

            </Main2>
            <label> <Input2 type="checkbox" />I agree to have Sepnoty contact me Via email, Phone, Messenger.</label>
            
            <label><Input2 type="checkbox"/>I agree to have Sepnoty provide my request information to sepnoty affiliated development
centres.</label>
<para1>Your personal data will be stored for ten years on US servers in accordance with GDPR, and erased thereafter. 
We'll share it with our development centre to address your request, ensuring GDPR compliance at both locations. 
Refer to our Privacy Policy for details.</para1>
        </Main>
    )

}
export default EightthPage;

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




