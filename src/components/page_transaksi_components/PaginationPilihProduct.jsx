import {Box, Button, Flex, Text} from "@chakra-ui/react";

export function PaginationPilihProduct({pagination, onPageChange}) {
    const { current_page, last_page, links } = pagination || {};
    return (
        <>
            <div className="">
                <Flex justifyContent="center" align="center" mt={2}>
                    <Button
                        onClick={() => onPageChange(1)}
                        isDisabled={current_page === 1}
                        size="sm"
                        w="50px"
                        h="10px"
                        p={2}
                        mr={2}
                    >
                        First
                    </Button>
                    <Box>
                        {links && links.map((link, index) => (
                            <Button
                                key={index}
                                onClick={() => onPageChange(link.url ? new URL(link.url).searchParams.get('page') : current_page)}
                                isDisabled={!link.url}
                                colorScheme={link.active ? "blue" : "gray"}
                                size="sm"
                                w="50px"
                                h="25px"
                                m={3}
                            >
                                <Text dangerouslySetInnerHTML={{__html: link.label}}/>
                            </Button>
                        ))}
                    </Box>
                    <Button
                        onClick={() => onPageChange(last_page)}
                        isDisabled={current_page === last_page}
                        size="sm"
                        w="70px"
                        h="30px"
                        p={2}
                        ml={2}
                    >
                        Last
                    </Button>
                </Flex>
            </div>
        </>
    )
}