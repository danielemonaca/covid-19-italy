import React from 'react';
import { StreamApp, NotificationDropdown, FlatFeed } from 'react-activity-feed';
import 'react-activity-feed/dist/index.css';

class NewsFeed extends React.Component {
  render() {
    return (
      <StreamApp
        apiKey='du8he7epvp94'
        appId='45206'
        token='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMmU1ZWZhZTEtM2JiZC00Mjg3LTlkZWYtNjJlM2QzZmU2OGQyIn0.GY-w4iY5L4dWuTpwJxXG2fLYxkEQEhtyrybmDYgPk1M'
      >
        <NotificationDropdown notify />
        <FlatFeed notify />
      </StreamApp>
    );
  }
}

export default NewsFeed;
