import { Box, Button, Flex, Text } from '@chakra-ui/react';
import PropTypes from "prop-types";

export function PaginationPersediaanProduk({meta, onPageChange}) {
    const { current_page, last_page, links } = meta || {};

    return (
        <div className="">
            <Flex justifyContent="center"  align="center" mt={4}>
                <Button
                    onClick={() => onPageChange(1)}
                    isDisabled={current_page === 1}
                    size="sm"
                    w="70px"
                    h="30px"
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
                            size="sm" // Mengatur ukuran tombol
                            w="45px" // Mengatur lebar tombol
                            h="25px" // Mengatur tinggi tombol
                            m={2} // Mengatur margin antara tombol
                        >
                            <Text dangerouslySetInnerHTML={{ __html: link.label }} />
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
    )
}

PaginationPersediaanProduk.propTypes = {
    meta: PropTypes.shape({
        current_page: PropTypes.number.isRequired,
        last_page: PropTypes.number.isRequired,
        links: PropTypes.arrayOf(
            PropTypes.shape({
                url: PropTypes.string,
                label: PropTypes.string.isRequired,
                active: PropTypes.bool.isRequired,
            })
        ).isRequired,
    }).isRequired,
    onPageChange: PropTypes.func.isRequired,
};