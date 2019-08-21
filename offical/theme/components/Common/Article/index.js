import React, {Fragment} from 'react';
import './style.less';

export default ({children}) => (
  <Fragment>
    <article className="article ">
      <div className="article-content typo">
        {children}
      </div>
    </article>
  </Fragment>
);
