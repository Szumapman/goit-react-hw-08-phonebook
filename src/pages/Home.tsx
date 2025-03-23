import Logout from "@/components/NavComponents/Logout";
import useAuth from "../hooks/useAuth";
import { Flex, Heading, HStack, Link, Text } from "@chakra-ui/react"
import { MdOutlineContacts } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();
    return (
        <>
            <title>Home</title>
            <Flex h="80vh" alignItems="center" justifyContent="start" marginTop={20} flexDirection={"column"} gap={4}>
                <HStack gap={4} >
                    <MdOutlineContacts size={"4rem"} color="#2196F3" />
                    <Heading>
                        Welcome to Phonebook 
                    </Heading>
                </HStack>
                <Text>Manage your contacts efficiently!</Text>
                {isLoggedIn && <Logout />}
                {!isLoggedIn && <Text><Link onClick={() => { navigate("/register") }} color={"blue.600"}>Register</Link> or <Link onClick={() => { navigate("/login") }} color={"blue.600"}>log in</Link> to get started.</Text>}
            </Flex>
        </>
    );
};

export default Home;