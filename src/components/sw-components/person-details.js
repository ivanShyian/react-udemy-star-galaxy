import ItemDetails, {RecordIt} from "../item-details";
import {withSwapiService} from "../hoc-helper/with-swapi-service";
import React from "react";

const PersonDetails = (props) => {
    return (
        <ItemDetails {...props}>

            <RecordIt field="gender" label="Gender:"/>
            <RecordIt field="birthYear" label="Birth Year:"/>
            <RecordIt field="eyeColor" label="Eye Color:"/>
            <RecordIt field="hairColor" label="Hair Color:"/>
            <RecordIt field="skinColor" label="Skin Color:"/>
            <RecordIt field="height" label="Height:"/>
            <RecordIt field="mass" label="Mass:"/>

        </ItemDetails>
    )
}
const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPerson,
        getImageUrl: swapiService.getPersonImage
    }
}
export default withSwapiService(mapMethodsToProps)(PersonDetails);