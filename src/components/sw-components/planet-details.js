import ItemDetails, {RecordIt} from "../item-details";
import React from "react";
import {withSwapiService} from "../hoc-helper/with-swapi-service";

const PlanetDetails = (props) => {

    return (
        <ItemDetails {...props}>

            <RecordIt field="population" label="Population:"/>
            <RecordIt field="rotationPeriod" label="Rotation Period:"/>
            <RecordIt field="diameter" label="Diameter:"/>
        </ItemDetails>
    )
}
const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPlanet,
        getImageUrl: swapiService.getPlanetImage
    }
}

export default withSwapiService(mapMethodsToProps)(PlanetDetails);