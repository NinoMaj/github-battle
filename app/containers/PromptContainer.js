var React = require("react");
var Prompt = require("../components/Prompt");

class PromptContainer extends React.Component {  
    constructor(props) {
        super(props);
        this.state = {username: ""};
    }

     //constructor(props, context) {
        //super(props);
        //this.state = {username: ""};
        //context.router
    //}  
    handleUpdateUser(event) { 
        let temp = event.target.value;
        this.setState({
            username: temp
        });
  }
    
        
    handleSubmitUser(e) {
        e.preventDefault();
        let username = this.state.username; //caching username because if some press back we won't have username
        this.setState({
            username: ""
        });
        if (this.props.routeParams.playerOne) {
            this.props.router.push({
                pathname: '/battle',
                query: {
                    playerOne: this.props.routeParams.playerOne,
                    playerTwo: this.state.username,
                }
            })
        } else {
            this.props.router.push('/playerTwo/' + this.state.username)
        }
    } 
    
    render() {
        
        return(
            <Prompt
                onSubmitUser={(event) => this.handleSubmitUser(event)}
                onUpdateUser={(e) => this.handleUpdateUser(e)}
                header={this.props.route.header}
                username={this.state.username} />
        );
    }
}

module.exports = PromptContainer;