import { Spinner } from "@chakra-ui/react";
import PropTypes from "prop-types";

export default function PopupDetailTransaksi({
  transaction,
  handleCloseModal,
  calculateTotal,
  isLoading,
  handleFinishTransaction
}) {
  if (!transaction && !isLoading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded-lg max-w-lg w-full">
        <div className="flex justify-between items-center mb-4">
          <p className="font-semibold text-[20px] text-blue-gray-600">
            Detail transaksi
          </p>
          <button className="text-red-500 font-bold" onClick={handleCloseModal}>
            X
          </button>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </div>
        ) : (
          <div className="bg-white w-85 py-2 px-1 rounded-[10px] shadow-md">
            <div className="flex ml-4 mr-5 mt-3 justify-between items-center">
              <p className="font-semibold text-[17px] text-blue-gray-700">
                Toko Adel Jaya
              </p>
              <p
                className={`text-[14px] font-semibold ${
                  transaction.is_finished ? "text-[#2B713A]" : "text-[#7A3636]"
                }`}
              >
                {transaction.is_finished ? "Selesai" : "Belum selesai"}
              </p>
            </div>
            <div className="flex flex-col text-[13px] font-medium text-blue-gray-300 mt-3 relative ml-4 mr-4">
              <p className="font-semibold text-blue-gray-700">
                Transaksi atas nama: {transaction.customer.name ?? "Seseorang"}
              </p>
              <p className="font-semibold text-blue-gray-700">
                Tanggal: {transaction.date}
              </p>
              <p className="font-semibold text-blue-gray-700">
                Tanggal: {transaction.status}
              </p>
              <p>Produk:</p>
              {transaction.products.map((product, index) => (
                  <div
                      key={index}
                      className="pl-2 flex items-center justify-between"
                  >
                    <p>
                      - x{product.quantity} {product.name} @{" "}
                      {product.price.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </p>
                    {product.is_checked && (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4 text-green-500 ml-2"
                        >
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                    )}
                  </div>
              ))}
              <p className="font-semibold text-blue-gray-700 mt-2">
                Total:{" "}
                {calculateTotal(transaction.products).toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })}
              </p>
            </div>
          </div>
        )}
        {!isLoading && (
            <div className="flex justify-center mt-4">
            <button
              onClick={() => handleFinishTransaction(transaction.id)}
              className="px-7 py-2 bg-[#1A4F8B] rounded-lg shadow-sm hover:bg-gray-50 hover:text-[#1A4F8B] border border-transparent hover:border-[#1A4F8B] transition-colors"
            >
              <span className="text-white font-medium text-sm group-hover:text-[#1A4F8B]">
                Selesaikan transaksi
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

PopupDetailTransaksi.propTypes = {
  transaction: PropTypes.shape({
    id: PropTypes.number,
    is_finished: PropTypes.bool,
    customer: PropTypes.shape({
      name: PropTypes.string,
    }),
    date: PropTypes.string,
    status: PropTypes.string,
    products: PropTypes.arrayOf(
        PropTypes.shape({
          quantity: PropTypes.number,
          name: PropTypes.string,
          price: PropTypes.number,
          is_checked: PropTypes.bool,
        })
    ),
  }),
  handleCloseModal: PropTypes.func,
  calculateTotal: PropTypes.func,
  isLoading: PropTypes.bool,
  handleFinishTransaction: PropTypes.func,
};