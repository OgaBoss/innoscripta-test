import {ISelect} from "../ISelect.jsx";
import {IButton} from "../IButton.jsx";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
  FetchAllSources,
  FetchAuthorsBySources,
  FetchCategoriesBySources,
} from "../../modules/shared/services.js";
import { Icon } from '@iconify/react';
import Calendar from 'react-calendar';
import {updateSource, updateDate, updateAuthor, updateCategory} from "../../modules/news/feedsSlice.js";
import {FetchNewsFeeds} from "../../modules/news/services.js";

export const Filters = ({handleFilter}) => {

  const [value, onChange] = useState(null);
  const [source, setSource] = useState({})
  const [category, setCategory] = useState({})
  const [author, setAuthor] = useState({})

  const dispatch = useDispatch()
  const {sources, categories, authors, loading} = useSelector(state => state.shared)
  const {page} = useSelector(state => state.feeds)

  const handleSubmit = () => {
    dispatch(updateSource(source))
    dispatch(updateDate(value?.toLocaleDateString()))
    dispatch(updateCategory(category))
    dispatch(updateAuthor(author))

    const params = {
      source: source?.id,
      author: author?.id,
      category: category?.id,
      date: value,
      page
    }

    dispatch(FetchNewsFeeds(params))

    handleFilter()
  }

  // Fetch Sources
  useEffect(() => {
    dispatch(FetchAllSources())
  }, []);


  useEffect(() => {
    if (source && source.id) {
      dispatch(FetchCategoriesBySources(source.id))
      dispatch(FetchAuthorsBySources(source.id))
    }
  }, [source]);

  return (
    <div className="h-full w-full max-w-xl mx-auto">
      <div className="p-4 border-b border-gray-400 flex justify-between items-center">
        <p className="text-xl font-bold text-body">Filter newsfeed</p>
        <Icon onClick={handleFilter} icon="uiw:close" className="h-6 w-6 cursor-pointer" />
      </div>
      <div className="flex h-full w-full flex-col space-y-6 p-6">
        <ISelect label="Source" selectedOption={source} setSelected={setSource} options={sources} containerClassNames="w-full" classNames="w-full" />
        <ISelect label="Categoty" selectedOption={category} setSelected={setCategory} options={categories} containerClassNames="w-full" classNames="w-full" />
        <ISelect label="Author" selectedOption={author} setSelected={setAuthor} options={authors} containerClassNames="w-full" classNames="w-full" />
        <Calendar onChange={onChange} value={value} />
        <div className="">
          <IButton label="Submit" classNames="mt-6" loading={loading} onClick={handleSubmit} />
        </div>
      </div>
    </div>
  )
}
