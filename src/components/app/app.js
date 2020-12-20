import React, {Component} from 'react';
import './app.css';
import Header from "../header";
import ErrorIndicator from "../error-indicator";
import SwapiService from '../../services/swapi-service';
import RandomPlanet from "../random-planet";
import {SwapiServiceProvider} from "../swapi-service-context";
import ErrorBoundry from "../error-boundry";
import {PeoplePage,
        PlanetPage,
        StarshipPage} from "../pages";


export default class App extends Component {
    swapiService = new SwapiService();

    state = {
        hasError: false,
    }

    componentDidCatch() {
        this.setState({
            hasError: true
        })
    }

    render() {
        const {hasError} = this.state

        if (hasError) {
            return <ErrorIndicator/>
        }

        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.swapiService}>
                    <div className='app'>
                        <Header/>
                        <RandomPlanet/>
                        <PeoplePage/>
                        <PlanetPage/>
                        <StarshipPage/>
                    </div>
                </SwapiServiceProvider>
            </ErrorBoundry>
        )
    }
}
