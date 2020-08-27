import React from "react";

interface HelloProps {
  value: string;
}

export default function Hello(props: HelloProps) {
  return (
    <React.Fragment>
      <h1>{props.value}</h1>
    </React.Fragment>
  );
}
