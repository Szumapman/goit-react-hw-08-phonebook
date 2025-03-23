import Logout from "../NavComponents/Logout";
import useAuth from "../../hooks/useAuth";
import { Box, Flex, HStack, Icon, IconButton, Separator, Stack, useDisclosure } from "@chakra-ui/react";
import { LuPanelTopClose } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineContacts } from "react-icons/md";
import { GrUserSettings } from "react-icons/gr";
import HomeNav from "../NavComponents/HomeNav";
import RegisterNav from "../NavComponents/RegisterNav";
import LoginNav from "../NavComponents/LoginNav";
import ContactsNav from "../NavComponents/ContactsNav";
import "./Navigation.css";

const Navigation = () => {
    const { isLoggedIn, user } = useAuth();
    const { open, onOpen, onClose } = useDisclosure();

    return (
        <Box
            as="header"
            position="fixed"
            top={0}
            left={0}
            width="full"
            zIndex="1000"
            bg="blue.100"
            boxShadow="md"
            px={4}
        >
            <Flex h={16} justifyContent="space-between" alignItems="center">
                <HStack gap={4} alignItems="center">
                    <Icon size="2xl" color="#2196F3" margin={"2"}>
                        <MdOutlineContacts />
                    </Icon>
                    <Separator orientation={"vertical"} height={"8"} colorPalette="gray"  />
                    <HomeNav display={{ base: "none", md: "flex" }} />
                    {isLoggedIn && (
                        <ContactsNav display={{ base: "none", md: "flex" }} />
                    )}
                </HStack>
                <HStack as="nav" gap={4} display={{ base: "none", md: "flex" }}>
                    {!isLoggedIn && (
                        <>
                            <RegisterNav />
                            <LoginNav />
                        </>
                    )}
                    {isLoggedIn && (
                        <>
                            <HStack ><GrUserSettings />{user.email}</HStack>
                            <Logout />
                        </>
                    )}
                </HStack>

                {/* Mobile menu icon*/}
                <IconButton display={{ md: 'none' }} aria-label="Open menu" onClick={open ? onClose : onOpen} size={"md"} colorPalette="black" variant={"ghost"}>
                    {open ? <LuPanelTopClose /> : <RxHamburgerMenu />}
                </IconButton>
            </Flex>

            {/* Mobile menu */}
            {open ? (
                <Box pb={4} display={{ md: "none" }}>
                    <Stack as="nav" gap={4}>
                        <HomeNav display={{ base: "flex", md: "none" }}/>
                        {isLoggedIn && <ContactsNav display={{ base: "flex", md: "none" }} />}
                        {!isLoggedIn && (
                            <>
                                <RegisterNav />
                                <LoginNav />
                            </>
                        )}
                        {isLoggedIn && (
                            <>
                                <HStack ><GrUserSettings />{user.email}</HStack>
                                <Logout />
                            </>
                        )}
                    </Stack>
                </Box>
            ) : null}
        </Box>
    );
};

export default Navigation;