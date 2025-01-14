import React from 'react';

const EventPagination = ({ totalPages, currentPage, onPageChange }) => {
    const renderPageButtons = () => {
        const buttons = [];
        const maxVisiblePages = 5;

        // Previous button
        if (currentPage > 1) {
            buttons.push(
                <button
                    key="prev"
                    onClick={() => onPageChange(currentPage - 1)}
                    className="mx-1 rounded-full w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition duration-300"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </button>
            );
        }

        // Calculate start and end page numbers
        let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
        let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

        // Adjust startPage if endPage is less than maxVisiblePages
        if (endPage - startPage < maxVisiblePages - 1) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }

        // Page number buttons
        for (let i = startPage; i <= endPage; i++) {
            buttons.push(
                <button
                    key={i}
                    onClick={() => onPageChange(i)}
                    className={`mx-1 rounded-full w-10 h-10 flex items-center justify-center transition duration-300 ${
                        currentPage === i
                            ? "bg-[#00AA55] text-white shadow-lg scale-105"
                            : "bg-white text-gray-700 hover:bg-gray-100 hover:text-gray-900 border"
                    }`}
                >
                    {i}
                </button>
            );
        }

        // Next button
        if (currentPage < totalPages) {
            buttons.push(
                <button
                    key="next"
                    onClick={() => onPageChange(currentPage + 1)}
                    className="mx-1 rounded-full w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition duration-300"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>
            );
        }

        return buttons;
    };

    // If there's only one page, don't render pagination
    if (totalPages <= 1) return null;

    return (
        <div className="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-sm shadow-2xl py-4 z-50">
            <div className="flex justify-center items-center space-x-2">
                {renderPageButtons()}
            </div>
        </div>
    );
};

export default EventPagination;