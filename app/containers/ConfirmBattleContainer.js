var React = require("react");
var ConfirmBattle = require("../components/ConfirmBattle");
var githubHelpers = require("../utils/githubHelpers")

class ConfirmBattleContainer extends React.Component {  
    constructor(props) {
       super(props);
       this.state = {
           isLoading: true,
           playersInfo: []
        };
    } 

    componentDidMount() { //this will mount when ConfirmBattle load (see return) and it is great time to fetch playerOne and playerTwo query from PromptContainer.js
        var query = this.props.location.query;
        githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
      .then(function (players) {
        this.setState({
          isLoading: false,
          playersInfo: [players[0], players[1]]
        })
      }.bind(this))
    }

    handleInitiateBattle() {
        this.props.router.push({
            pathname: '/results',
            state: {
                playersInfo: this.state.playersInfo
            }
        }) 
    }

    render() {
        
        return(
            <ConfirmBattle
                isLoading={this.state.isLoading}
                onInitiateBattle={() => this.handleInitiateBattle()}
                playersInfo={this.state.playersInfo}
            />
        );
    }
}

ConfirmBattleContainer.contextTypes = {
        router: React.PropTypes.object.isRequired
    };

module.exports = ConfirmBattleContainer;