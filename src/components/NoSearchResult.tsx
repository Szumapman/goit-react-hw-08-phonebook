import { EmptyState, VStack } from "@chakra-ui/react";
import { VscSearchStop } from "react-icons/vsc";

const NoSearchResult = () => {
    return (
        <EmptyState.Root>
            <EmptyState.Content>
                <EmptyState.Indicator>
                    <VscSearchStop color="#2196F3"/>
                </EmptyState.Indicator>
                <VStack textAlign="center">
                    <EmptyState.Title>No search result matches your query.</EmptyState.Title>
                    <EmptyState.Description>
                        Try searching by a different search term.
                    </EmptyState.Description>
                </VStack>
            </EmptyState.Content>
        </EmptyState.Root>
    );
};

export default NoSearchResult