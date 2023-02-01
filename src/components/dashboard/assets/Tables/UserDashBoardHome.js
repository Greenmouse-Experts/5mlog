import React from 'react'

export const UserDashBoardHomeTable = ({ tableList }) => {
  return (
    <div>
        <div className="overflow-x-auto">
            <table className="items-center w-full bg-transparent border-collapse">
                <thead className="thead-light bg-light">
                <tr>
                    <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                    S/N
                    </th>
                    <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                    Order ID
                    </th>
                    <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                    Tracking ID
                    </th>
                    <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                    Amount
                    </th>
                    <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                    Mail Sent
                    </th>
                    <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                    Status
                    </th>
                    <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                    Location
                    </th>
                </tr>
                </thead>
                  <tbody>
                      {tableList.map((list, index) =>
                          <tr>
                              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                  {index + 1}
                              </td>
                              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                  {list.order_id}
                              </td>
                              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                  {list.tracking_number}
                              </td>
                              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                  {list.price ? `NGN ${list.price}` : ''}
                              </td>
                              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                  {}
                              </td>
                              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                  {list.status === 'Ongoing' ? <p className='px-2 py-1 rounded-lg bg-orange-100 text-orange-600 fw-600'>Ongoing</p> : ''}
                                  {list.status === 'Delivered' ? <p className='px-2 py-1 rounded-lg bg-green-100 text-green-600 fw-600'>Delivered</p> : ''}
                                  {list.status === 'New' ? <p className='px-2 py-1 rounded-lg bg-blue-100 text-blue-600 fw-600'>New</p> : ''}
                              </td>
                              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                  {list.sender_address}
                              </td>
                          </tr>
                      )}
                </tbody>
            </table>
            </div>
    </div>
  )
}
