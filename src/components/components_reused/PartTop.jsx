import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
} from '@chakra-ui/react'
import echo from "../../echo";
import { useAtom } from "jotai";
import { notificationsAtom } from "../../lib/atom";
import {useEffect} from "react";

export default function PartTop() {
    const [notifications, setNotifications] = useAtom(notificationsAtom);

    useEffect(() => {
        const channel = echo.channel("product-checklist");

        channel.listen(".product-checked", (e) => {
            setNotifications((notification) => [
                ...notification, {
                    transactionId: e.transactionId,
                    customerName: e.customerName
                }
            ]);
        });

        return () => channel.stopListening(".product-checked");
    }, []);
    

    return (
        <div className="flex flex-row-reverse items-center w-full px-6 py-4 bg-white border-b-[3px] border-gray-200">
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="w-6 h-6 text-[#8C95A4]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
                </svg>
            </button>
            <a href="/profile"><img src="/assets_img/img_profile_picture.png" className="h-8 mx-4"/></a>
            <div className="h-7 border-l border-gray-300 ml-4"></div>
            <Menu>
                <MenuButton
                    as={IconButton}
                    aria-label='Options'
                    variant='outline'
                    icon={
                        <div className="relative">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                stroke="currentColor" className="w-6 h-6 text-[#8C95A4]">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"/>
                            </svg>

                            {/* Conditionally render the red dot if notifications exist */}
                            {notifications.length > 0 && (
                                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                            )}
                        </div>
                    }
                />
                <MenuList>
                    {notifications.length === 0 ? (
                        <MenuItem>No new notifications</MenuItem>
                    ) : (
                        notifications.map((notification, index) => (
                        <MenuItem key={index}>
                            Pesanan atas nama {notification.customerName} terkirim!
                        </MenuItem>
                        ))
                    )}
                </MenuList>
            </Menu>
        </div>
    )
}