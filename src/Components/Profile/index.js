import React, { useState, useEffect } from 'react';

import './style.css';

import Avatar from '../Avatar';
import Contacts from '../Contacts';
import Connection from '../Connection';
import Summary from '../Summary';

const Profile = () => {
  const [profile, setProfile] = useState({});

  const [error, setError] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/bwanamaina')
      .then(response => response.json())
      .then(response => {
        setProfile(response);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <React.Fragment>
      {error
        ? <div>
            {error.message}
          </div>
        : <React.Fragment>
            {loading
              ? <div>loading...</div>
              : <React.Fragment>
                  <div className={'column left'}>
                    <Avatar source={profile.avatar_url} />
                    <Contacts name={profile.name} />
                    <Connection
                      followers={profile.followers}
                      following={profile.following}
                    />
                  </div>
                  <div className={'column right'}>
                    <Summary profile={profile} />
                  </div>
                </React.Fragment>}
          </React.Fragment>}
    </React.Fragment>
  );
};

export default Profile;
