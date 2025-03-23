import { Avatar, Button, Card, Dialog, HStack, Icon } from "@chakra-ui/react";
import { LuPhone } from "react-icons/lu";
import DeleteButtonWithConfirmation from "./DeleteButtonWithConfirmation";
import { ContactForm } from "./ContactForm";

const ContactCard = ({ name, number, id }: { name: string, number: string, id: string }) => {
    const colorPalette = ["red", "blue", "green", "yellow", "purple", "orange"]

    const pickPalette = (name: string) => {
        const index = name.charCodeAt(0) % colorPalette.length
        return colorPalette[index]
    }

    return (
        <Card.Root width="320px">
            <Card.Body gap="2">
                <HStack gap="4">
                    <Avatar.Root colorPalette={pickPalette(name)}>
                        <Avatar.Fallback name={name} />
                    </Avatar.Root>
                    <Card.Title>{name}</Card.Title>
                </HStack>
                <HStack gap="4">
                    <Icon size="xl" color="#2196F3" margin={"2"}>
                        <LuPhone />
                    </Icon>
                    <Card.Description mt="2" fontSize="md" fontWeight="bold">{number}</Card.Description>
                </HStack>
            </Card.Body>
            <Card.Footer justifyContent="flex-end">
                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <Button colorPalette={"blue"} size="sm">
                        Edit
                        </Button>
                    </Dialog.Trigger>
                    <ContactForm name={name} number={number} id={id} />  
                </Dialog.Root>
                <DeleteButtonWithConfirmation name={name} id={id} />
            </Card.Footer>
        </Card.Root>
    );
};

export default ContactCard;