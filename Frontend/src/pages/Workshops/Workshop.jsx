import React from "react";
import Workshopsec1 from "../../Components/Workshops/Workshopsec1";
import Workshopcard from "../../Components/Workshops/Workshopcard";
import Workshopsec2 from "../../Components/Workshops/Workshopsec2";
import CampusAmbassdor from "../../Components/Workshops/CampusAmbassdor";
import Workshopform from "../../Components/Workshops/Workshopform";
import Workshopgallery from "../../Components/Workshops/Workshopgallery";
const Workshop = () => {
    return(
        <>
        <Workshopsec1/>
        <Workshopsec2/>
        <Workshopcard/>
        <CampusAmbassdor/>
        <Workshopgallery/>
        <Workshopform/>
        </>
    );
}
export default Workshop;