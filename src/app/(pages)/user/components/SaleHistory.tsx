'use client';
import React, { useState } from 'react';

export interface SaleHistoryItem {
  productName: string;
  buyAt: Date;
  downloadLink: string;
}

export const saleHistory: SaleHistoryItem[] = [
  {
    productName: 'Product 1',
    buyAt: new Date('2023-01-01'),
    downloadLink: '#',
  },
  {
    productName: 'Product 2',
    buyAt: new Date('2023-01-02'),
    downloadLink: '#',
  },
];

interface SaleHistoryProps {
  SaleHistory: SaleHistoryItem[];
}

const ITEMS_PER_PAGE = 10;

const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
};

const SaleHistory = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = saleHistory.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const totalPages = Math.ceil(saleHistory.length / ITEMS_PER_PAGE);

  return (
    <div id='saleRecord' className='container mt-5 scroll-mt-[11vh]'>
      <h2 className='mb-4 text-2xl font-bold'>Sale History</h2>
      <p className='text-lg italic'>This is not implement yet</p>

      <table className='min-w-full rounded-lg bg-white text-black'>
        <thead>
          <tr>
            <th className='border-b px-4 py-2'>Product Name</th>
            <th className='border-b px-4 py-2'>Buy Date</th>
            <th className='border-b px-4 py-2'>Download Link</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => (
            <tr key={index}>
              <td className='border-b px-4 py-2'>{item.productName}</td>
              <td className='border-b px-4 py-2'>{formatDate(item.buyAt)}</td>
              <td className='border-b px-4 py-2'>
                <a href={item.downloadLink} className='text-blue-500 underline'>
                  Download
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='mt-4 flex justify-center'>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`mx-1 border px-3 py-1 ${
              page === currentPage
                ? 'bg-primary text-white'
                : 'bg-white text-primary'
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SaleHistory;
