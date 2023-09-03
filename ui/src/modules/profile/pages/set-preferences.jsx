import {ISelect, IButton} from "../../../component";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {FetchAllSources, FetchAuthorsBySources, FetchCategoriesBySources, SaveUserPreference} from "../../shared/services.js";
import { toast } from 'react-toastify';
import {Navigate} from "react-router-dom";
import {FetchMe} from "../../authentication/services.js";

const SetPreference = () => {
  const dispatch = useDispatch()
  const {sources, categories, authors, loading, isSuccess} = useSelector(state => state.shared)
  const {user} = useSelector(state => state.auth)
  const [source, setSource] = useState(null)
  const [category, setCategory] = useState(null)
  const [author, setAuthor] = useState(null)

  const handleSubmit = () => {
    const payload = {
      source: source.value,
      category: category.value,
      author: author.value
    }
    dispatch(SaveUserPreference(payload))
  }

  // Fetch Sources
  useEffect(() => {
    dispatch(FetchAllSources())
  }, []);


  useEffect(() => {
    if (source) {
      dispatch(FetchCategoriesBySources(source.value))
      dispatch(FetchAuthorsBySources(source.value))
    }
  }, [source]);

  useEffect(() => {
    if (isSuccess) {
      toast.success("Preferences successfully saved!");
      dispatch(FetchMe())
    }
  }, [isSuccess]);

  return (
    <>
      {
        user.preferences
          ? <Navigate to="/" />
          : isSuccess
            ? <Navigate to="/" />
            : <div className="h-full w-full">
              <div className="p-4 border-b border-gray-400 flex justify-center">
                <p className="text-xl font-bold text-body">Set news preferences</p>
              </div>
              <div className="flex h-full w-full flex-col space-y-6 p-6">
                <ISelect label="Source" selectedOption={source} setSelected={setSource} options={sources} containerClassNames="w-full" classNames="w-full" />
                <ISelect label="Categoty" selectedOption={category} setSelected={setCategory} options={categories} containerClassNames="w-full" classNames="w-full" />
                <ISelect label="Author" selectedOption={author} setSelected={setAuthor} options={authors} containerClassNames="w-full" classNames="w-full" />
                <div className="">
                  <IButton label="Submit" classNames="mt-6" loading={loading} onClick={handleSubmit} />
                </div>
              </div>
            </div>
      }
    </>
  )
}

export default SetPreference
