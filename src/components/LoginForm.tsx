import { useDispatch } from "react-redux";
import { LoginCredentials } from "../types/LoginCredentials";
import { logIn } from "../redux/auth/operations";
import { Button, Card, Field, Input, Stack } from "@chakra-ui/react";
import { PasswordInput } from "./ui/password-input";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        const credentials: LoginCredentials = { email, password };

        (dispatch as any)(logIn(credentials));
        event.currentTarget.reset();
    };
    
    return (
        <Card.Root maxW="sm" width="full">
            <Card.Header>
                <Card.Title>Login</Card.Title>
                <Card.Description>
                    Fill in the form below to login
                </Card.Description>
            </Card.Header>
            <form onSubmit={handleSubmit} autoComplete="off">
                <Card.Body>
                    <Stack gap="4" w="full">
                        <Field.Root required>
                            <Field.Label>
                                Email <Field.RequiredIndicator />
                            </Field.Label>
                        <Input name="email" type="email"/>
                        </Field.Root>
                        <Field.Root required>
                            <Field.Label>
                                Password <Field.RequiredIndicator />
                            </Field.Label>
                            <PasswordInput name="password" type="password" />
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

export default LoginForm;