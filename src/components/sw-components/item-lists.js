import React from 'react';
import ItemList from "../item-list/";
import {withData, withSwapiService} from "../hoc-helper/";


const withChildFunc = (fn) => (Wrapped) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    }
};

const mapPersonMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    }
};
const mapPlanetMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    }
};
const mapStarshipsMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    }
};

const renderName = ({name}) => <span>{name}</span>;
const renderModelAndName = ({name}) => <span>{name}</span>;

const PersonList = withSwapiService(mapPersonMethodsToProps)(
                        withData(withChildFunc(renderName)(
                            ItemList)));
const PlanetList = withSwapiService(mapPlanetMethodsToProps)(
                        withData(withChildFunc(renderName)(
                            ItemList)));
const StarshipList = withSwapiService(mapStarshipsMethodsToProps)(
                        withData(withChildFunc(renderModelAndName)(
                            ItemList)));

export {
    PersonList,
    PlanetList,
    StarshipList
}