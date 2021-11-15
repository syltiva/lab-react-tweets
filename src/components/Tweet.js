import Actions from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";

function Tweet(props) {
  console.log(props)
  return (
    <div className="tweet">
      {/* <img
        src={props.tweet.user.image}
        className="profile"
        alt="profile"
      /> */
      
      <ProfileImage image={props.tweet.user.image}/>
      }

      <div className="body">
        <div className="top">
          {/* <span className="user">
            <span className="name">{props.tweet.user.name}</span>
            <span className="handle">@{props.tweet.user.handle}</span>
          </span> */}
          <User userData={props.tweet.user}/>


          {/* <span className="timestamp">{props.tweet.timestamp}</span> */}
          <Timestamp time={props.tweet.timestamp}/>

        </div>

        {/* <p className="message">
          {props.tweet.message}
        </p> */}
        <Message message={props.tweet.message}/>

          {/* Font Awesome icons */}
        {/* <div className="actions">
          <i className="far fa-comment"></i>
          <i className="fas fa-retweet"></i>
          <i className="far fa-heart"></i>
          <i className="fas fa-share"></i>
        </div> */}
        <Actions/>
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
