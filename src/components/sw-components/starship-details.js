import React from "react";
import ItemDetails, {RecordIt} from "../item-details";
import {withSwapiService} from "../hoc-helper/with-swapi-service";

const StarshipDetails = (props) => {
    return (
        <ItemDetails {...props}>

            <RecordIt field="model" label="Model:"/>
            <RecordIt field="length" label="Length:"/>
            <RecordIt field="costInCredits" label="Cost:"/>
        </ItemDetails>
    )
}
const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getStarship,
        getImageUrl: swapiService.getStarshipImage
    }
}
export default withSwapiService(mapMethodsToProps)(StarshipDetails);
