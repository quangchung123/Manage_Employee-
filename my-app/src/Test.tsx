import React, { useState } from 'react';

function Paginate({ items, pageSize } : any) {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(items.length / pageSize);
    const goToPage = (page: number) => {
        setCurrentPage(page);
    };
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <div>
            {/* Nút để chuyển đến trang trước */}
            <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
                Trang trước
            </button>

            {/* Hiển thị các số trang và liên kết để chuyển đến từng trang */}
            {pageNumbers.map((number) => (
                <button key={number} onClick={() => goToPage(number)}>
                    {number}
                </button>
            ))}

            {/* Nút để chuyển đến trang tiếp theo */}
            <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
                Trang tiếp theo
            </button>

            {/* Hiển thị danh sách các mục trên trang hiện tại */}
            <ul>
                {items
                    .slice((currentPage - 1) * pageSize, currentPage * pageSize)
                    .map((item: any, index : number) => (
                        <li key={index}>{item}</li>
                    ))}
            </ul>
        </div>
    );
}

// Sử dụng component Paginate
function App() {
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const pageSize = 3;

    return (
        <div>
            <h1>Phân trang</h1>
            <Paginate items={items} pageSize={pageSize} />
        </div>
    );
}

export default App;
