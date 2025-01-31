import Styled from "styled-components"
const SixthPage = () => {
    return(
        
<Main>
            <FormContainer>
                <Form>
                    <Heading>
                    *What type of media content does your Software have to support?
                    </Heading>
                    <CheckBoxCon>
                        <input type="checkbox" id="one"/>
                        <Label htmlfor="one">
                        Images
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                        <input type="checkbox" id="two"/>
                        <Label htmlfor="two">
                        Video
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                        <input type="checkbox" id="three"/>
                        <Label htmlfor="three">
                        Audio
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                        <input type="checkbox" id="four"/>
                        <Label htmlfor="four">
                        Interactive content
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                        <input type="checkbox" id="five"/>
                        <Label htmlfor="five">
                        Others (Please Specify)
                        </Label>
                    </CheckBoxCon>
                    <Para1>
                    Should your website or App support payments?
                    </Para1>
                    <Main5>
                        <ActiveButton>Yes</ActiveButton>
                        <Buttonel>No</Buttonel>
                    </Main5>
                    
                </Form>
            </FormContainer>
            <FormContainer>
                <Form>
                <Heading>
                *What is the expected number of monthly visitors?
                    </Heading>
                    
                    <InputContainer>
<Label>
    <Input type='radio' name="industry" value="Healthcare"/>
    I am not sure
    </Label>
</InputContainer>
<InputContainer>
<Label>
    <Input type='radio' name="industry" value="Healthcare"/>
    up to 50
    </Label>
</InputContainer>
<InputContainer>
<Label>
    <Input type='radio' name="industry" value="Healthcare"/>
    50-100
    </Label>
</InputContainer>
<InputContainer>
<Label>
    <Input type='radio' name="industry" value="Healthcare"/>
    100-500
    </Label>
</InputContainer>
<InputContainer>
<Label>
    <Input type='radio' name="industry" value="Healthcare"/>
    500-1,000
    </Label>
</InputContainer>
<InputContainer>
<Label>
    <Input type='radio' name="industry" value="Healthcare"/>
    1,000-5,000
    </Label>
</InputContainer>
<InputContainer>
<Label>
    <Input type='radio' name="industry" value="Healthcare"/>
    5,000-10,000
    </Label>
</InputContainer>
<InputContainer>
<Label>
    <Input type='radio' name="industry" value="Healthcare"/>
    more than 10,000
    </Label>
</InputContainer>
                </Form>
            </FormContainer>
        </Main>
    )
}
export default SixthPage;

const Main5 = Styled.div`
display:flex;
flex-direction:row;
`
const ActiveButton = Styled.button`
  background-color: #2b459b;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  font-size: 20px;
  width:60px;
  height:30px;
  color: #ffffff;
`;

const Buttonel = Styled.button`
  font-size: 20px;
  background-color: #d9d9d9;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 0px;
  width:60px;
  height:30px;
  margin-left: -10px;
  border-right: 1px solid #9e9898;
`;

const Main = Styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-item:center;
gap:20px;
`
const Heading = Styled.h1`
font-family: Inter;
font-size: 20px;
font-weight: 700;
line-height: 30px;
letter-spacing: 0em;
text-align: left;
color: #263238;
`

const FormContainer = Styled.div`
display:flex;
flex-direction:column;
border: 1px solid #C1CAE7;
background: #C1CAE7;
gap:-20px;
border-radius:10px;
padding:20px;

height:300px;

height:300px;

height:400px;

width:300px;
`
const CheckBoxCon = Styled.div`
gap:30px;
align-items:start;
justify-content:space-between;
margin-top:5px;



`
const Label = Styled.label`
font-size:15px;
font-family: Inter;
font-weight: 500;
color:#263238;
letter-spacing: 0em;
text-align: left;
`
const Form = Styled.form`

`
const Para1 = Styled.p`

`
const InputContainer=Styled.div`
margin-top:20px;

`
// const Input1 = Styled.textarea`
// background:transparent;
// border: 1px solid #C1CAE7;
// font-size:15px;
// color: #263238;
// font-weight:500;
// height:15px;
// `
const Input = Styled.input`

`