import { Flex } from "@chakra-ui/react";
import LoginForm from "../components/LoginForm";

const Login = () => {
    return (
        <>
            <title>Login</title>
            <Flex h="80vh" alignItems="center" justifyContent="center" marginTop={20}>
                <LoginForm />
            </Flex>
        </>
    )
}

export default Login;