import React from "react";
import Sky from './sky'
import useWebAnimations from "@wellyshen/use-web-animations";
import Spaceship from './spaceship';
import Grass from './grass'
import Star from './star'
import Moon from "./moon";
import Goat from "./goat";

const Parent = () => {


  return (
    <>
    <Sky />
    <Grass />
    <Spaceship />
    <Star />
    <Moon />
    <Goat />
    </>

  );
};

export default Parent