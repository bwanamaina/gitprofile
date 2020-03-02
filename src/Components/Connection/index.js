import React, { Fragment } from 'react';

import PropTypes from 'prop-types';

import './style.css';

const Connection = ({ followers, following }) => {
  return (
    <Fragment>
      <Fragment>
        <div className={'grid'}>
          <span>
            {followers}
          </span>
          <div>Followers</div>
        </div>
        <div className={'grid'}>
          <span>
            {following}
          </span>
          <div>Following</div>
        </div>
      </Fragment>
    </Fragment>
  );
};

Connection.propTypes = {
  followers: PropTypes.number,
  following: PropTypes.number,
};

export default Connection;
