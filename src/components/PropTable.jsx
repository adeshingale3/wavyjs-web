import React from "react";

const PropsTable = ({ data }) => {
  return (
    <div className="w-full border border-gray-700 rounded-lg">
      <table className="w-full text-left text-gray-300">
        <thead className="bg-white/10 text-gray-200 text-xs sm:text-sm">
          <tr>
            <th className="px-2 py-1 sm:px-4 sm:py-2">Prop</th>
            <th className="px-2 py-1 sm:px-4 sm:py-2">Type</th>
            <th className="px-2 py-1 sm:px-4 sm:py-2">Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((prop, index) => (
            <tr
              key={index}
              className="border-t border-gray-700 hover:bg-gray-800/40"
            >
              <td className="px-2 py-1 sm:px-4 sm:py-2 font-medium text-white text-xs sm:text-sm">
                {prop.name}
              </td>
              <td className="px-2 py-1 sm:px-4 sm:py-2 font-mono text-blue-400 text-xs sm:text-sm">
                {prop.type}
              </td>
              <td className="px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm">
                {prop.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PropsTable;
