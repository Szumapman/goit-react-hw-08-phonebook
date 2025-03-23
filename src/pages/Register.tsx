import { Flex } from "@chakra-ui/react";
import RegisterForm from "../components/RegisterForm";

const Register = () => {
    return (
        <>
            <title>Register</title>
            <Flex h="80vh" alignItems="center" justifyContent="center" marginTop={20}>
                <RegisterForm />
            </Flex>
        </>
    );
};

export default Register;