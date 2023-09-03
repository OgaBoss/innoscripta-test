import {Icon} from "@iconify/react";
import {NewsFeeds} from "../../modules/news/pages/feeds.jsx";
import PropTypes from "prop-types";

export const NewsFeed = ({feed}) => {
  return (
    <div className="flex space-x-2 col-span-1">
      <div className="h-[96px] w-[96px] rounded">
        {feed.img_url && <img src={feed.img_url} alt="" className="object-cover h-full"/>}
        {!feed.img_url && <Icon icon="noto:rolled-up-newspaper" className="h-[96px] w-[96px] " />}
      </div>
      <div className="flex flex-col space-y-2 flex-1">
        <p className="text-body text-xs font-light">{feed.category ? feed.category.name.toUpperCase() : 'Technology'}</p>
        <p className="text-body font-bold text-xs h-10 overflow-hidden overflow-ellipsis">{feed.title}</p>
        <p className="text-body text-xs">Author <span className="font-bold italic text-warning">{feed.author ? `${feed.author.name}` : 'Ogaboss'}</span></p>
      </div>
    </div>
  )
}

NewsFeeds.propTypes = {
  feed: PropTypes.object
}
