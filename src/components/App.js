import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userPick: null,
            randPick: null,
            userScore: 0,
            computerScore: 0
        };

    }

    render() {
        const {userPick} = this.state;
        const variant = {
            rock: '💎',
            paper: '📜',
            scissors: '✂'
        };
        return (
            <div id="app">
                <h1>
                    <span role='img' aria-label='rock'>{variant[userPick]}</span>
                    <span role='img' aria-label='paper'>📜</span>
                </h1>

                <div>
                    <button value={'rock'} onClick={this.play}>💎</button>
                    <button value={'paper'} onClick={this.play}>📜</button>
                    <button value={'scissors'} onClick={this.play}>✂</button>
                </div>
                <h1>1 - 3</h1>
            </div>
        )
    }

    play = (e) => {
        const picks = ['rock', 'paper', 'scissors'];

        this.setState({
            userPick: e.currentTarget.value,
            randPick: picks[Math.floor(Math.random() * picks.length)]
        });
    };

    setScore = () => {
        const {userPick, randPick} = this.state;
        if (userPick === 'rock') {
            if (randPick === 'paper') {
                console.log('Computer wins');
                this.computerScore++;
            } else if (randPick === 'scissors') {
                console.log('User wins');
                this.userScore++;
            } else {
                console.log('Draw');
            }
        } else if (userPick === 'paper') {
            if (randPick === 'rock') {
                console.log('User wins');
                this.userScore++;
            } else if (randPick === 'scissors') {
                console.log('Computer wins');
                this.computerScore++;
            } else {
                console.log('Draw');
            }
        } else {
            if (randPick === 'rock') {
                console.log('Computer wins');
                this.computerScore++;
            } else if (randPick === 'paper') {
                console.log('User wins');
                this.userScore++;
            } else {
                console.log('Draw');
            }
        }
    }
}

export default App
