import Skeleton from 'react-loading-skeleton'
export const NewsLoading = () => {
  return (
    <div className="flex flex-col space-y-6">
      <Skeleton containerClassName="flex-1" height="200px" />
      <div>
        <Skeleton containerClassName="flex-1" height="20px" className="mb-1" />
        <Skeleton containerClassName="flex-1" height="20px" width="80%" className="mb-1" />
        <Skeleton containerClassName="flex-1" height="20px" width="50%" className="mb-1" />
        <Skeleton containerClassName="flex-1" height="20px" width="25%" className="mb-1" />
      </div>

    </div>
  )
}
