import React from 'react';
import { useSelector } from 'react-redux';


function FinalScreen() {
  const { availablePolicyTypes }  = useSelector((state) => state.buisnessUser)
  const listItems = availablePolicyTypes.map((policy) =>
    <li>{policy}</li>
  );
  return (
    <ul>{availablePolicyTypes.length > 0 ? listItems : 'No policy yet'}</ul>
  );
}

export default FinalScreen;
