/* eslint-disable react/no-array-index-key */
import React from 'react'

import './PredictionTable.css'
import Loading from '../../loading.svg'
import { columns } from '../../utils/constants'
import TableFilter from '../TableFilter/TableFilter'

const PredictionTable = ({
  colleges, filters,
  setFilters, isLoading = true,
}) => {
  const updateFilters = (key, val) => {
    const newFilters = {
      ...filters,
      [key]: val,
    }
    setFilters(newFilters)
  }

  if (isLoading) {
    return (
      <div className="loading">
        <img
          className='w-36 h-36'
          src={Loading}
          alt="Loading"
        />
      </div>
    )
  }

  return (


    <div className="college-table w-[95%] sm:w-[90%] mx-auto mt-10 sm:mt-16">
  <div className="overflow-x-auto">
    <table className="min-w-full text-left border " style={{ borderSpacing: '0' }}>
      <colgroup>
        {columns.map((col) => (
          <col
            span="1"
            key={`col-span-${col.title}`}
            style={col.style}
          />
        ))}
      </colgroup>
      <thead className="text-gray-300 bg-gray-800">
        <tr>
          {columns.map((col) => (
            <TableFilter
              className="flex items-baseline p-2"
              title={col.title}
              data={col.data}
              property={col.property}
              key={col.property}
              value={filters[col.property]}
              updateFilters={updateFilters}
            />
          ))}
        </tr>
      </thead>
      <tbody className="text-gray-900">
        {colleges?.length ? colleges.map((college, index) => (
          <tr
            key={`${index}-${college.institute}`}
            className="bg-white even:bg-gray-100 border-b border-gray-200"
          >
            <td className="p-2" title={college.institute}>
              {college.institute}
            </td>
            <td className="p-2" title={college.program}>
              {college.program}
            </td>
            <td className="p-2" title={college.quota}>
              {college.quota}
            </td>
            <td className="p-2" title={college.category}>
              {college.category}
            </td>
            <td className="p-2" title={college.seat}>
              {college.seat}
            </td>
            <td className="p-2 " title={college.openingRank}>
              {college.openingRank}
            </td>
            <td className="p-2 " title={college.closingRank}>
              {college.closingRank}
            </td>
            <td className="p-2 " title={college.type}>
              {college.type}
            </td>
            <td className="p-2 " title={college.courseDuration}>
              {college.courseDuration}
            </td>
          </tr>
        )) : (
          <tr>
            <td className="p-4 text-center" colSpan={columns.length}>
              No Colleges found as per filters applied. <span className='text-xl'>😔</span>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
</div>



  )
}

export default PredictionTable
