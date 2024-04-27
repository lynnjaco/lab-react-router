import React from "react";
export const Staffer = ({ employee }) => {
  const { firstName, lastName, prefix, postfix, title } = employee;
  let name = `${firstName} ${lastName}`;
  if (prefix) name = `${prefix} ${name}`;
  if (postfix) name = `${name}, ${postfix}`;

  return (
    <article className="staffer">
      <h3>{name}</h3>
      <h4>{title}</h4>
    </article>
  );
};

export default Staffer;
