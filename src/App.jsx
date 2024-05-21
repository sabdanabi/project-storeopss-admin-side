import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import PersediaanPage from "./pages/main_page/PersediaanPage.jsx";
import LaporanStocPage from "./pages/main_page/LaporanStocPage.jsx";
import StatisticPage from "./pages/main_page/StatisticPage.jsx";
import RiwayatTambahProdukPage from "./pages/main_page/RiwayatTambahProdukPage.jsx";
import RiwayatRestockProdukPage from "./pages/main_page/RiwayatRestockProdukPage.jsx";
import ProfilePage from "./pages/profile_page/ProfilePage.jsx";
import TransaksiPage from "./pages/main_page/TransaksiPage.jsx";
import NotaPage from "./pages/main_page/NotaPage.jsx";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PersediaanPage/>}/>
                <Route path="/laporan-page" element={<LaporanStocPage/>}/>
                <Route path="/statistic-page" element={<StatisticPage/>}/>
                <Route path="/riwayat-tambah-produk-page" element={<RiwayatTambahProdukPage/>}/>
                <Route path="/riwayat-restock-page" element={<RiwayatRestockProdukPage/>}/>
                <Route path="/profile" element={<ProfilePage/>}/>
                <Route path="/transaksi-page" element={<TransaksiPage/>}/>
                <Route path="/nota-page" element={<NotaPage/>}/>
            </Routes>
        </Router>
    )
}