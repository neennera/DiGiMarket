'use client';
import React, { useState } from 'react';

export interface PurchaseHistoryItem {
  productName: string;
  buyAt: Date;
  downloadLink: string;
}

export const purchaseHistory: PurchaseHistoryItem[] = [
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

interface PurchaseHistoryProps {
  purchaseHistory: PurchaseHistoryItem[];
}

const ITEMS_PER_PAGE = 10;

const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
};

const PurchaseHistory: React.FC<PurchaseHistoryProps> = ({
  purchaseHistory,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = purchaseHistory.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const totalPages = Math.ceil(purchaseHistory.length / ITEMS_PER_PAGE);

  return (
    <div className='container mx-auto p-4'>
      <h2 className='mb-4 text-2xl font-bold'>Purchase History</h2>
      <table className='min-w-full border border-gray-200 bg-white'>
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
                ? 'bg-blue-500 text-white'
                : 'bg-white text-blue-500'
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PurchaseHistory;
