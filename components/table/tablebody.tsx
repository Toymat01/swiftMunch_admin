import React from "react";

export default function TableRow(props: any) {
  return <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
    {props.children}
  </tr>;

}