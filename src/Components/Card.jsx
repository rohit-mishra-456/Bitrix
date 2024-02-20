import React from "react";
import jsonData from "../data/data.json";

const Card = () => {
    return (
      <div >
        {jsonData.map((data) => (
          <div
            key={data.id}
            className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-5"
          >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {data.title}
              </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {data.name}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {data.detail}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {data.date}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {data.percentage}
            </p>
          </div>
        ))}
      </div>
    );
  };
  

export default Card;
