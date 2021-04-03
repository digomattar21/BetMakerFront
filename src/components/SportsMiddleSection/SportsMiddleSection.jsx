import React, { useEffect } from 'react';
import Api from '../../utils/api.utils';
const SportsMiddleSection = () => {
  useEffect(() => {
    loadInplayEvents();
  }, []);
  const loadInplayEvents = async () => {
    try {
      let req = await Api.getInplayEvents();
      console.log(req);
    } catch (error) {
      console.log(error);
    }
  };
  return <h1>Middle section</h1>;
};
export default SportsMiddleSection;
