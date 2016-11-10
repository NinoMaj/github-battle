
/*var USER_DATA = {
  name: "Tyler McGinnis",
  username: "tylermcginnis",
  imageUrl: "https://avatars0.githubusercontent.com/u/2933430?v=3&s=460"
}

var React = require('react');
var ReactDOM = require('react-dom');

const ProfilePic = (props) => 
      <img src={props.imageUrl} style={{height: 100, width: 100}} />;


const Link = (props) => {
  const changeURL = () => {
    window.location.replace(props.href);
  };
      return (
      <span
        style={{color: "blue", cursor: "pointer"}}
        onClick={changeURL}>
        {props.children}
      </span>
    );
};

const ProfileLink = (props) => 
  <div>
    <Link href={"https://www.github.com/" + props.username}>
      {props.username}
    </Link>
  </div>;
  

const ProfileName = (props) =>
      <div>{props.name}</div>;
  

class Avatar extends React.Component {
  render() {
    return (
      <div>
        <ProfilePic imageUrl={this.props.user.imageUrl} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username} />
      </div>
    );
  } 
}

ReactDOM.render(
  <Avatar user={USER_DATA} />,
  document.getElementById('app')
);
*/

var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');


ReactDOM.render(routes, document.getElementById('app'));
