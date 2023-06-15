import React from "react";

const FooterBottom = ({ title, listItem }) => {
  return (
    <div className="footer__bottom__item">
      <h3>{title}</h3>

      <ul>
        {listItem.map((item) => item.listData.map((data) => <li>{data}</li>))}
      </ul>
    </div>
  );
};

export default FooterBottom;
