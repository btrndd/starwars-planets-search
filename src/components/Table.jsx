import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { data, isFetch } = useContext(PlanetsContext);

  function mapInfoToTable() {
    const allKeys = Object.keys(data[0]);
    const keys = allKeys.filter((key) => key !== 'residents');
    console.log(keys);
    return (
      <tbody>
        { data.map((planet) => (
          <tr key={ planet.name }>
            { keys.map((key, index) => <td key={ index }>{ planet[key] }</td>) }
          </tr>)) }
      </tbody>
    );
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>Url</th>
        </tr>
      </thead>
      { isFetch ? mapInfoToTable() : <tbody><tr><td>Loading...</td></tr></tbody> }
    </table>
  );
}

export default Table;
