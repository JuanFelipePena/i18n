import React from "react";

const Job = (props) => {
  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>{props.offer.name}</td>
      <td>{props.offer.company}</td>
      <td>
        <formattedPlural
        value={props.offer.salary}
        one="Millón"
        other="Millones"
        />
      </td>
      <td>{props.offer.city}</td>
      <td>
        <FormattedDate
        value={new Date(props.offer.date)}
        year='numeric'
        month='long'
        day='numeric'
        weekday='long'
        />
      </td>
      <td>
        <FormattedNumber
        value={props.offer.views}
        />
      </td>
    </tr>
  );
};

export default Job;
