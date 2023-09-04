import {useSelector} from "react-redux";

export const Pagination = ({page, limit, total, lastPage, handleNext, handlePrev}) => {
  const currentPage = page === 1 ? 1 : limit * (page - 1) + 1;
  return (
    <>
      {
        lastPage > 1 &&
        <nav
          className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
          aria-label="Pagination"
        >
          <div className="hidden sm:block">
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">{currentPage}</span> to <span className="font-medium">{limit * page}</span> of{' '}
              <span className="font-medium">{total}</span> results
            </p>
          </div>
          <div className="flex flex-1 justify-between sm:justify-end">
            {
              page > 1 &&
              <a
              onClick={handlePrev}
              className="relative inline-flex cursor-pointer items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
            >
              Previous
            </a>
            }
            {
              lastPage !== page &&
              <a
                onClick={handleNext}
                className="relative ml-3 cursor-pointer inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
              >
                Next
              </a>
            }

          </div>
        </nav>
      }
    </>
  )
}
