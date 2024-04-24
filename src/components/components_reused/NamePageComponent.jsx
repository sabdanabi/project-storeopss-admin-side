export default function NamePageComponent() {
    return (
        <div className="flex items-center justify-between h-20 border-b-[3px]
                w-full px-6 py-4 bg-white border-gray-200">
            <h1 className="text-2xl font-semibold text-gray-900">Product</h1>
            <button className="flex items-center px-4 py-2 bg-[#1A4F8B] group
                    rounded-lg shadow-sm hover:bg-gray-50 hover:border-[#1A4F8B] hover:border-2">
                <img src="/assets_img/icon_add.png" className="h-5 mr-2" alt="Icon Notifikasi"/>
                <span className="text-white font-semibold group-hover:text-[#1A4F8B]">Tambah Product</span>
            </button>
        </div>
    )
}