import {ISelect, IButton, Layout} from "./index.js";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {FetchAllSources, FetchAuthorsBySources, FetchCategoriesBySources, SaveUserPreference} from "../modules/shared/services.js";
import { toast } from 'react-toastify';
import {Navigate} from "react-router-dom";
import {FetchMe} from "../modules/authentication/services.js";

export const SetPreferences = () => {
  const dispatch = useDispatch()
  const {sources, categories, authors, loading, isSuccess} = useSelector(state => state.shared)
  const [source, setSource] = useState({})
  const [category, setCategory] = useState({})
  const [author, setAuthor] = useState({})
  const {user} = useSelector(state => state.auth)
  const handleSubmit = () => {
    const payload = {
      source: source.id,
      category: category.id,
      author: author.id
    }
    dispatch(SaveUserPreference(payload))
  }

  useEffect(() => {
    if (user && user.preferences) {
      setSource(user.preferences.source)
      setCategory(user.preferences.category)
      setAuthor(user.preferences.author)
    }
  }, [user]);

  // Fetch Sources
  useEffect(() => {
    dispatch(FetchAllSources())
  }, []);


  useEffect(() => {
    if (source) {
      dispatch(FetchCategoriesBySources(source.id))
      dispatch(FetchAuthorsBySources(source.id))
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
      <Layout>
        {
          isSuccess
            ? <Navigate to="/" />
            : <div className="h-full w-full">
              <div className="p-4 border-b border-gray-400 flex justify-center">
                <p className="text-xl font-bold text-body">Set news preferences</p>
              </div>
              <div className="flex h-full w-full flex-col space-y-6 p-6">
                <ISelect label="Source" selectedOption={source} setSelected={setSource} options={sources} containerClassNames="w-full" classNames="w-full" />
                <ISelect label="Category" selectedOption={category} setSelected={setCategory} options={categories} containerClassNames="w-full" classNames="w-full" />
                <ISelect label="Author" selectedOption={author} setSelected={setAuthor} options={authors} containerClassNames="w-full" classNames="w-full" />
                <div className="">
                  <IButton label="Submit" classNames="mt-6" loading={loading} onClick={handleSubmit} />
                </div>
              </div>
            </div>
        }
      </Layout>

    </>
  )
}
