import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
} from '@chakra-ui/react';
import { useState } from 'react';
import { updateStatusTransaction } from '../../../services/TransaksiService.jsx';

export function BtnEditTransaksi({ transactionId, updateProductsState }) {
    const [status, setStatus] = useState('');

    const handleStatusSelect = async (selectedStatus) => {
        try {
            setStatus(selectedStatus);
            const result = await updateStatusTransaction(transactionId, selectedStatus);
            updateProductsState();
            console.log('Update status transaction result:', result);
        } catch (error) {
            console.error('Error updating transaction status:', error);

        }
    };

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                                    className="xl:w-5 xl:h-5 lg:w-3 lg:mr-2 text-[#727E91]">
                <path strokeLinecap="round-[20px]" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
            </svg>}>
                <p className="text-[10px] font-medium text-[#727E91]">Status</p>
            </MenuButton>
            <MenuList>
                <div className='text-[12px] font-normal'>
                <MenuItem onClick={() => handleStatusSelect('Lunas')}>Lunas</MenuItem>
                <MenuItem onClick={() => handleStatusSelect('Belum Lunas')}>Belum Lunas</MenuItem>
                </div>
            </MenuList>
        </Menu>
    );
}
