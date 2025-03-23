import { EmptyState, VStack } from "@chakra-ui/react"
import { VscEmptyWindow } from "react-icons/vsc"

const EmptyPhonebook = () => {
    return (
        <EmptyState.Root>
            <EmptyState.Content>
                <EmptyState.Indicator>
                    <VscEmptyWindow color="#2196F3"/>
                </EmptyState.Indicator>
                <VStack textAlign="center">
                    <EmptyState.Title>Your phonebook is empty</EmptyState.Title>
                    <EmptyState.Description>
                        Add some contacts to get started.
                    </EmptyState.Description>
                </VStack>
            </EmptyState.Content>
        </EmptyState.Root>
    );
};

export default EmptyPhonebook;