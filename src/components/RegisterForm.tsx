import { useDispatch } from "react-redux";
import { register } from "../redux/auth/operations";
import { RegisterCredentials } from "../types/RegisterCredentials";
import { Box, Button, Card, Field, Input, Stack } from "@chakra-ui/react";
import { PasswordInput, PasswordStrengthMeter } from "./ui/password-input";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import zxcvbn from "zxcvbn";


const RegisterForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [password, setPassword] = useState<string>("");
    const [passwordValueStrength, setPasswordValueStrength] = useState<number>(0);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setPassword(value);
        setPasswordValueStrength(zxcvbn(value).score);
    };
    
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        
        const credentials: RegisterCredentials = { name, email, password };
        const result = await(dispatch as any)(register(credentials));
        if (!result.email) {
            setErrorMessage("Registration failed. This email is already in use. Please try again.");
            return;
        }
        event.currentTarget.reset();
        navigate("/contacts");
    };

    return (
        <Card.Root maxW="sm" width="full">
            <Card.Header>
                <Card.Title>Register</Card.Title>
                <Card.Description>
                    Fill in the form below to create an account
                </Card.Description>
            </Card.Header>
            <form onSubmit={handleSubmit} autoComplete="off">
                <Card.Body>
                    <Stack gap="4" w="full">
                        <Field.Root required>
                            <Field.Label>
                                Your Name <Field.RequiredIndicator />
                            </Field.Label>
                            <Input name="name" type="text"/>
                        </Field.Root>
                        <Field.Root required invalid={errorMessage !== null}>
                            <Field.Label>
                                Your email <Field.RequiredIndicator />
                            </Field.Label>
                            <Input name="email" type="email" />
                            <Field.ErrorText>{errorMessage}</Field.ErrorText>
                        </Field.Root>
                        <Field.Root required>
                            <Field.Label>
                                Password <Field.RequiredIndicator />
                            </Field.Label>
                            <PasswordInput name="password" onChange={handlePasswordChange} type="password"/>
                            <Box width={"full"} textAlign="left" mt="1" fontSize="sm" color="gray.500">
                                Password Strength:
                                <PasswordStrengthMeter value={passwordValueStrength} max={4} />
                            </Box>
                        </Field.Root>
                    </Stack>
                </Card.Body>
                <Card.Footer justifyContent="flex-end">
                    <Button variant="outline" onClick={() => {navigate("/")}}>Cancel</Button>
                    <Button colorPalette="blue" type="submit" >Sign in</Button>
                </Card.Footer>
            </form>
        </Card.Root>
    );
};

export default RegisterForm;