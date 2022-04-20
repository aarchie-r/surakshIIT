import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";

import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";



const BACKEND_URL = "http://127.0.0.1:8000/register/"

const Register = () => {

  const [uid, setUID] = useState("");
  const [name, setNAME] = useState("");
  const [email, setEMAIL] = useState("");
  const [phone, setPHONE] = useState("");
  const [room_no, setROOMNO] = useState("");
  const [address, setADDRESS] = useState("");
  const [gender, setGENDER] = useState("");
  const [password, setPASSWORD] = useState("");
  const [re_password, setREPASSWORD] = useState("");
  const [dp, setDP] = useState("");

  
  const history = useHistory();
  const handleSubmit = async () => {





    let form_data = new FormData();
    form_data.append('uid',uid);
    form_data.append('name',name);
    form_data.append('email',email);
    form_data.append('phone', phone);
    form_data.append('room_no', room_no);
    form_data.append('address', address);
    form_data.append('gender', gender);
    form_data.append('password',password);
    form_data.append('re_password',re_password);
    form_data.append('dp', dp)

    const data = {
      uid: uid,
      name: name,
      email: email,
      phone: phone,
      room_no: room_no,
      address: address,
      gender: gender,
      password: password,
      re_password: re_password,
      dp: dp
    }
    if(uid=="" | name=="" | email=="" | phone==""|room_no==""|address==""|gender==""|password==""|re_password==""){
      alert(("Please fill in all the required details"))
    }

    else {
      axios.defaults.withCredentials = true;
      axios.defaults.xsrfCookieName = 'csrftoken'
      axios.defaults.xsrfHeaderName = 'X-CSRFToken'
      await axios 
      .post(BACKEND_URL,form_data,{headers: {
        'content-type': 'multipart/form-data'
      }})
      .then((response)=>{
        alert("Registered Successfuly!!");
        history.push('/login')
      })
        
      .catch((err)=>alert((err.response.data.message)))
    }
  }

  return (
    <>
      <Col lg="6" md="8">
      <div>
        <img  width={450}
                      alt="..."
                      src={
                        require("../../assets/img/brand/argon-react-white.png")
                          .default
                      }
                    />
        </div>
        
        <center><span style={{color:"white"}}>User Register</span></center>
        <Card className="bg-secondary shadow border-0">
          {}
          <CardBody className="px-lg-5 py-lg-5">
            <small><center> Enter your details</center></small>
            <Form role="form">
          
            <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                    <i className="ni ni-single-02" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="UID"

                    onChange={(event) => {
                      event.preventDefault();
                      setUID(event.target.value);
                    }}
                    id="uid"
                    type="text"
                  />
                </InputGroup>
              </FormGroup>

              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-hat-3" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Name"

                    onChange={(event) => {
                      event.preventDefault();
                      setNAME(event.target.value);
                    }}
                    id="name"
                    type="text"
                  />
                </InputGroup>
              </FormGroup>

              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                   
                    placeholder="Email"

                    onChange={(event) => {
                      event.preventDefault();
                      setEMAIL(event.target.value);
                    }}
                    id="email"
                    type="email"
                  />
                </InputGroup>
              </FormGroup>

              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                    <i className="ni ni-tablet-button" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                   
                    placeholder="Phone"

                    onChange={(event) => {
                      event.preventDefault();
                      setPHONE(event.target.value);
                    }}
                    id="phone"
                    type="text"
                  />
                </InputGroup>
              </FormGroup>

              <FormGroup>
                <label
                  className="form-control-label"
                  htmlFor="Gender"
                >
                  Gender
                </label><br></br>
                <select value={gender} onChange={(e) => {
                  e.preventDefault();
                
                  setGENDER(e.target.value);
                }}>
                  <option >--select--</option>
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                  <option value="3">Rather Not Say</option>

                </select>
              </FormGroup>

              

              {/* <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                    <i className="ni ni-building" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    
                    placeholder="Address"

                    onChange={(event) => {
                      event.preventDefault();
                      setADDRESS(event.target.value);
                    }}
                    id="address"
                    type="text"
                  />
                </InputGroup>
              </FormGroup> */}

              <FormGroup>
                
                <label
                  className="form-control-label"
                  htmlFor="Address"
                >
                  Address
                </label><br></br>
                <select value={address} onChange={(e) => {
                  e.preventDefault();
                
                  setADDRESS(e.target.value);
                }}>
                  
                  <option>---select---</option>
                  <option value="Hall-1">Hall-1</option>
                  <option value="Hall-2">Hall-2</option>
                  <option value="Hall-3">Hall-3</option>
                  <option value="Hall-4">Hall-4</option>
                  <option value="Hall-5">Hall-5</option>
                  <option value="Hall-6">Hall-6</option>
                  <option value="Hall-7">Hall-7</option>
                  <option value="Hall-8">Hall-8</option>
                  <option value="Hall-9">Hall-9</option>
                  <option value="Hall-10">Hall-10</option>
                  <option value="Hall-11">Hall-11</option>
                  <option value="Hall-12">Hall-12</option>
                  <option value="Hall-13">Hall-13</option>

                </select>
              </FormGroup>

              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                    <i className="ni ni-badge" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    
                    placeholder="Room Number (e.g. B-404)"

                    onChange={(event) => {
                      event.preventDefault();
                      setROOMNO(event.target.value);
                    }}
                    id="room_no"
                    type="text"
                  />
                </InputGroup>
              </FormGroup>              

              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                    <i className="ni ni-check-bold" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password"
                    type="password"
                   

                    onChange={(event) => {
                      event.preventDefault();
                      setPASSWORD(event.target.value);
                    }}
                    id="password"
                  />
                </InputGroup>
              </FormGroup>

              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-hat-3" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                
                    placeholder="Re-Enter Password"

                    onChange={(event) => {
                      event.preventDefault();
                      setREPASSWORD(event.target.value);
                    }}
                    id="re_password"
                    type="password"
                  />
                </InputGroup>
              </FormGroup>

              

              <FormGroup>
                <label className="form-control-label" htmlFor="input-pic">Image</label>
                    <Input
                    className="form-control-alternative"
                    onChange={(event) => {
                    event.preventDefault();
                    setDP(event.target.files[0]);
                    }}
                    id="image"
                    type="file"
                    accept="image/png, image/jpeg"
                    />
                </FormGroup>

              <div className="text-center">
                <Button className="mt-4" color="primary" onClick={handleSubmit} type="button">
                  Create account
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default Register;
