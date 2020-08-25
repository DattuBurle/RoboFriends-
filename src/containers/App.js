import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry'
import './App.css';
import {robots} from './robots';


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots : robots,
            searchfield : ''
        }
    }



    onSearchChange = (event) => {
        this.setState({ searchfield : event.target.value})
    }

    render() {
        const { robots, searchfield } = this.state;
        const filterRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        if(robots.length === 0){
            return <h1 className = 'tc'>Loading...</h1>
        }
        else{
            return (
                <div className = 'tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange = {this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filterRobots}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
        );
        }

    }

}

export default App;