import { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { publicRequest } from "../requestMethod";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Message = styled.span`
  color: green;
  margin-top: 20px;
  margin-left: 30px;
  display: block;
`;

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      return alert("Passwords do not match!");
    }

    try {
      const res = await publicRequest.post("/auth/register", {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });
      setSuccessMessage("User registered successfully!");
      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      navigate("/login");  // Navigate to the login page
    } catch (err) {
      console.error("Error registering user:", err);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            name="username"
            placeholder="username"
            value={formData.username}
            onChange={handleChange}
          />
          <Input
            name="email"
            placeholder="email"
            value={formData.email}
            onChange={handleChange}
          />
          <Input
            name="password"
            type="password"
            placeholder="password"
            value={formData.password}
            onChange={handleChange}
          />
          <Input
            name="confirmPassword"
            type="password"
            placeholder="confirm password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button type="submit">CREATE</Button>
          {successMessage && <Message>{successMessage}</Message>}
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
