import { useState } from "react";
import FeaturedCard from "./FeaturedCard";
import "./featured.scss";

function FeaturedNavItem(props) {
  return (
    <div
      className={`featured-nav-item ${props.isActive ? "active" : ""}`}
      onClick={props.onClick}
    >
      <div className="fs-5 fw-bold mb-2">{props.title}</div>
      <small>{props.subTitle}</small>
    </div>
  );
}

export default function FeaturedTab({ title, dataList }) {
  const [activeTabId, setActiveTabId] = useState(0);

  return (
    <div className="featured-tab mb-5">
      <div className="gray_bold_text">{title}</div>
      <div className="featured-content">
        {dataList.map((_data, _id) => {
          return (
            <FeaturedCard key={_id} {..._data} isActive={activeTabId === _id} />
          );
        })}
      </div>
      <div className="featured-nav">
        {dataList.map((_data, _id) => {
          return (
            <FeaturedNavItem
              key={_id}
              isActive={activeTabId === _id}
              title={_data.title}
              subTitle={_data.stack.map((_) => _.label).join(", ")}
              onClick={() => setActiveTabId(_id)}
            />
          );
        })}
      </div>
    </div>
  );
}
