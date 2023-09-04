import {useDispatch, useSelector} from "react-redux";
import {NewsLoading} from "../../../component/index.js";
import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {FetchNewsDetails} from "../services.js";
import {Icon} from "@iconify/react";

export const Details = () => {
  const dispatch = useDispatch()
  const {details, detailsLoading, detailsSuccess} = useSelector(state => state.feeds)
  const {id} = useParams()

  useEffect(() => {
    dispatch(FetchNewsDetails(id))
  }, [id]);
  return (
    <>
      {
        detailsLoading && <NewsLoading />
      }

      {
        detailsSuccess &&
        <div className="h-full w-full flex flex-col overflow-auto">
          <div className="flex flex-col space-y-4">
            <div className="h-[248px] w-full">
              {details.img_url && <img src={details.img_url} alt="" className="object-cover h-full"/>}
              {!details.img_url && <Icon icon="noto:rolled-up-newspaper" className="h-[248px] max-w-[300px] " />}
            </div>
            <div className="flex flex-col space-y-2">
              <span className="font-light">
                {details.category ? details.category.name : 'Innoscripta'}
              </span>
              <span className="font-light">
                {details.date ? new Date(details.date).toLocaleDateString() : new Date().toLocaleDateString()}
              </span>
              <span className="font-light">
                Author: {details.author ? details.author.name : 'Ogaboss'}
              </span>
              <span className="font-light">
                Source: {details.news_source ? details.news_source : 'Ogaboss News'}
              </span>
            </div>

            <p className="font-semibold text-lg">
              {details.title ? details.title : 'Innoscripta'}
            </p>

            <p className="font-light text-justify">
              {details.content ? details.content : 'Innoscripta'}
            </p>

          </div>
        </div>
      }

    </>
  )
}
