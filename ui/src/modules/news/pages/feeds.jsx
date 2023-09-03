import {Layout, Input, NewsLoading, NewsFeed, Pagination} from "../../../component/index.js";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {FetchNewsFeeds} from "../services.js";
import 'react-loading-skeleton/dist/skeleton.css'
import {FormProvider, useForm} from "react-hook-form";
import {updateAuthor, updateCategory, updateSource} from "../feedsSlice.js";
import { Icon } from '@iconify/react';
export const NewsFeeds = () => {
  const {user} = useSelector(state => state.auth)
  const [mode, setMode] = useState(false)
  const [keyword, setKeyword] = useState(null)
  const dispatch = useDispatch()
  const methods = useForm()
  const {feeds, loading, source, category, author, page, lastPage, total, isSuccess, limit} = useSelector(state => state.feeds)
  const [filter, setFilter] = useState(false)

  const viewAll = () => {
    if (mode) {
      setFilterValues()

      fetchNewsFeedsWithFilter()
    } else {
      dispatch(updateSource(null))
      dispatch(updateCategory(null))
      dispatch(updateAuthor(null))

      dispatch(FetchNewsFeeds({limit}))
    }

    setMode(!mode)
  }

  const setFilterValues = () => {
    dispatch(updateSource(user.preferences.source))
    dispatch(updateCategory(user.preferences.category))
    dispatch(updateAuthor(user.preferences.author))
  }

  const fetchNewsFeedsWithFilter = () => {
    const params = {
      source: user.preferences.source?.id,
      author: user.preferences.author?.id,
      category: user.preferences.category?.id,
      keyword,
      page,
      limit
    }

    dispatch(FetchNewsFeeds(params))
  }

  useEffect(() => {
    setFilterValues()
    fetchNewsFeedsWithFilter()
  }, [user]);

  useEffect(() => {
    fetchNewsFeedsWithFilter()
  }, [keyword]);

  const handleFilter = () => {
    setFilter(!filter)
  }
  return (
    <>
      <Layout filter={filter} handleFilter={handleFilter} >
        <div className="h-full w-full flex flex-col p-6 space-y-8 overflow-hidden">
          <FormProvider {...methods} >
            <form >
              <Input id="search" label="" name="search" classNames="w-full" isSearch={true} isFilter={true} handleFilter={handleFilter} handleOnChange={setKeyword} />
              <span onClick={viewAll} className="block text-primary text-xs hover:underline cursor-pointer text-end mt-2">
                {mode ? 'View Preferences' : 'View all'}
              </span>
            </form>
          </FormProvider>

          <div className="space-x-3 flex justify-center">
            {source?.id && <div className="py-1 px-2 bg-success/50 rounded w-fit text-xs text-white"> {source.name}</div>}
            {category?.id && <div className="py-1 px-2 bg-success/50 rounded w-fit text-xs text-white"> {category.name}</div>}
            {author?.id && <div className="py-1 px-2 bg-success/50 rounded w-fit text-xs text-white"> {author.name}</div>}
          </div>

          {
            loading
              ? <NewsLoading />
              : <div className="overflow-auto flex-1">
                {
                  isSuccess && feeds.length === 0 &&
                  <div className="flex flex-col justify-center mt-24 items-center">
                    <Icon icon="line-md:coffee-half-empty-twotone-loop" className="w-[300px] h-[300px] text-body" />
                    <p>Unfortunately no result matches your search</p>
                  </div>
                }
                <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10  pb-6">
                  {feeds?.map((feed) => (
                    <NewsFeed feed={feed} key={feed.id} />
                  ))}
                </div>
                <Pagination page={page} lastPage={lastPage} total={total} limit="10" />
              </div>
          }
        </div>
      </Layout>
    </>
  )
}

