import { useEffect, useState } from "react";
import SideNavbarComponent from "../../components/components_reused/SideNavbarComponent.jsx";
import PartTop from "../../components/components_reused/PartTop.jsx";
import NamePageComponent from "../../components/components_reused/NamePageComponent.jsx";
import DescPageComponent from "../../components/components_reused/DescPageComponent.jsx";
import BarChartComponent from "../../components/chart_components/BarChartComponent.jsx";
import { getStatisticProductSell } from "../../services/StatisticService.jsx";
import {Spinner} from "@chakra-ui/react";

export default function StatisticPage() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [sort, setSort] = useState('asc');
    const [isAuth, setAuth] = useState(false);


    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await getStatisticProductSell({ sort });
            console.log('Fetched data:', response.data);
            console.log('Products data:', response.data.products);
            setData(response.data.products);
            setAuth(true);
        } catch (error) {
            console.error('Error fetching data:', error);
            setError('Failed to fetch product statistics.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [sort]);

    // if (loading) {
    //     return <div>Loading...</div>;
    // }
    //
    // if (error) {
    //     return <div>{error}</div>;
    // }

    return (
        <div className="flex h-screen overflow-hidden bg-gray-100">
            <SideNavbarComponent/>

            <div className="flex flex-col flex-1 w-full">
                <PartTop/>
                <NamePageComponent nama={"Statistik Produk"}/>

                {loading ? (
                    <div className="flex items-center justify-center h-full">
                        <Spinner
                            thickness='4px'
                            speed='0.65s'
                            emptyColor='gray.200'
                            color='blue.500'
                            size='xl'
                        />                    </div>
                ) : isAuth ? (
                    <main className="flex-1 p-10 overflow-y-auto">
                        <div className="bg-white rounded-t-lg overflow-hidden border-[3px] border-gray-200">
                            <DescPageComponent
                                desc={`Laporan stok ini mencakup recap product pada bulan .`}/>
                            <BarChartComponent statistics={data}/>
                        </div>
                    </main>
                ) : (
                    <div className="flex items-center justify-center h-full">
                        <p className="text-xl">{error}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
