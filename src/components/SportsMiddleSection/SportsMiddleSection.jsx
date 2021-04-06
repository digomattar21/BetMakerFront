import { makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import Api from "../../utils/api.utils";
const SportsMiddleSection = () => {
  const classes = useStyles();

  useEffect(() => {
    loadInplayEvents();
  }, []);

  
  const loadInplayEvents = async () => {
    try {
      let req = await Api.getInplayEvents();
      if (req.status===201){
        const data = Array.from(req.data.results);
        console.log('data', data)
      }

    } catch (error) {
      console.log(error);
    }
  };

  return <h1>Middle section</h1>;
};

const useStyles = makeStyles((theme) => ({}));

export default SportsMiddleSection;