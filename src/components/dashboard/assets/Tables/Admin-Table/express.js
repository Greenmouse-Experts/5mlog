import React from 'react'
import { useSelector } from 'react-redux';
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaAngleLeft, FaAngleRight, FaFileDownload, FaSearch } from "react-icons/fa";
import { useTable, useGlobalFilter, useAsyncDebounce, useFilters, usePagination } from "react-table";
import { useNavigate } from "react-router-dom";
import {useMemo } from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Input,
  Select,
  Option,
} from "@material-tailwind/react";
import { BsThreeDotsVertical } from 'react-icons/bs';
import jsPDF from "jspdf";
import "jspdf-autotable";
// import { useExportData } from "react-table-plugins";
import Papa from "papaparse";
import * as XLSX from 'xlsx'
import dayjs from 'dayjs';
import { formatPriceNgn } from '../../RegexFormat/Format';

// export table files

function getExportFileBlob({ columns, data, fileType, fileName }) {
  if (fileType === "csv") {
    // CSV example
    const headerNames = columns // eslint-disable-next-line
      .filter((c) => c.Header != "Action")
      .map((col) => col.exportValue);
    const csvString = Papa.unparse({ fields: headerNames, data });
    return new Blob([csvString], { type: "text/csv" });
  } else if (fileType === "xlsx") {
    // XLSX example

    const header = columns // eslint-disable-next-line
      .filter((c) => c.Header != "Action")
      .map((c) => c.exportValue);
    const compatibleData = data.map((row) => {
      const obj = {};
      header.forEach((col, index) => {
        obj[col] = row[index];
      });
      return obj;
    });

    let wb = XLSX.utils.book_new();
    let ws1 = XLSX.utils.json_to_sheet(compatibleData, {
      header
    });
    XLSX.utils.book_append_sheet(wb, ws1, "React Table Data");
    XLSX.writeFile(wb, `${fileName}.xlsx`);

    // Returning false as downloading of file is already taken care of
    return false;
  }
  //PDF example
  if (fileType === "pdf") {
    const headerNames = columns // eslint-disable-next-line
      .filter((c) => c.Header != "Action")
      .map((column) => column.exportValue);
    const doc = new jsPDF();
    doc.autoTable({
      head: [headerNames],
      body: data,
      styles: {
        minCellHeight: 9,
        halign: "left",
        valign: "center",
        fontSize: 11
      }
    });
    doc.save(`${fileName}.pdf`);

    return false;
  }

  // Other formats goes here
  return false;
}

export function ExpressTable({status, paymentModal, dispatchOrder}) {

  let order = useSelector((state) => state.orderAdmin.expressOrder);
  
    if (status) {
    order = order.filter(where => where.status === status)
    }

    const formatStatus = (status) => {
      switch (status) {
          case "New":
              return <p className="px-2 py-1 text-blue-700 bg-blue-100 w-24 rounded-md fw-600">New</p>
          case "Updated":
              return <p className="px-2 py-1 text-pink-700 bg-pink-100 w-24 rounded-md fw-600">Updated</p>
          case "Dispatch":
            return <p className="px-2 py-1 text-purple-700 bg-purple-100 w-28 rounded-md fw-600">Processing</p>
            case "Ongoing":
            return <p className="px-2 py-1 text-orange-700 bg-orange-100 w-28 rounded-md fw-600">Ongoing</p>
          case "Completed":
            return <p className="px-2 py-1 text-blue-700 bg-blue-100 w-24 rounded-md fw-600">Completed</p>
        
            default: return <p className="px-2 py-1 text-orange-700 bg-orange-100 w-24 rounded-md fw-600">Inactive</p>
        }
    }
  const navigate = useNavigate()
    const gotoDetailsPage = (id) => {
        navigate(`/dashboard/orderdetail?orderId=${id}`)
    }
    const gotoDriverRequest = (id) => {
      navigate(`/dashboard/driver-request?requestId=${id}`)
    }


    const columns = useMemo(
        () => [
          {
            Header: 'S/N',
            accessor: ( row, index) => index + 1  //RDT provides index by default
          },
          {
            Header: "Order ID",
            accessor: "order_id",
          },
          {
            Header: "Tracking ID",
            accessor: "tracking_number",
            id: "track"
            
          },
          {
            Header: "Item Name",
            accessor: "package_name",
          },
          {
            Header: "Service Type",
            accessor: "freight_service",
          },
          {
            Header: "Order Date",
            accessor: "created_at",
            Cell: (props) => dayjs(props.value).format('DD/MM/YYYY') 
          },
          {
            Header: "Amount",
            accessor: "price",
            Cell: (props) => {
              return props.value === null ? "" : formatPriceNgn(props.value);
           }
          },
          {
            Header: "Paid",
            accessor: "paid",
            Cell: (props) => {
              return props.value === null ? "No" : "Yes";
           }
          },
          {
            Header: "Status",
            accessor:  'status',
            Cell: (props) => formatStatus(props.value),
            Filter: SelectColumnFilter, 
            filter: 'includes',
            
          },
          {
            Header: "Shipping From",
            accessor: "shipping_from_state_province_region",
          },
          {
            Header: "Shipping To",
            accessor: "shipping_to_state_province_region",
          },
          {
            Header: 'Action',
            accessor: "order_id",
            id: "details",
            Cell: (row) => <Menu placement="left-start" className="w-16">
                    <MenuHandler>
                      <Button className="border-none bg-transparent shadow-none hover:shadow-none text-black"><button className="lg:text-xl"><BsThreeDotsVertical /></button></Button>
                    </MenuHandler>
                    <MenuList className="w-16 bg-gray-100 fw-600 text-black">
                      <MenuItem onClick={() => gotoDetailsPage(row.value)}>View Details</MenuItem>
                      <MenuItem onClick={() => paymentModal(row.row.original)}>Update Details</MenuItem>
                      {
                        row?.row.original.paid === null ?
                        ""
                        :
                        row.row.original?.status === "New" || row.row.original?.status === "Updated"? <MenuItem onClick={() => dispatchOrder(row.value)}>Dispatch Order</MenuItem> : <MenuItem className="" onClick={() => gotoDriverRequest(row.value)} >View Requests</MenuItem>         
                      }
                      <MenuItem className="bg-red-600 text-white">Delete</MenuItem>
                    </MenuList>
                  </Menu>,
          },
        ],  // eslint-disable-next-line 
        []
      );

    
      const data = useMemo(() => order, [order]);
    
      return (
        <>
          <div className="overflow-hidden bg-white">
            <Table columns={columns} data={data}  className=""/>
          </div>
        </>
      );

}

function GlobalFilter({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
  }) {
    // const count = preGlobalFilteredRows.length
    const [value, setValue] = React.useState(globalFilter)
    const onChange = useAsyncDebounce(value => {
      setGlobalFilter(value || undefined)
    }, 200)
  
    return (
      <div>
        <Input
          value={value || ""}
          onChange={e => {
            setValue(e.target.value);
            onChange(e.target.value);
          }}
        //   placeholder={`${count} records...`}
          className=""
          icon={<FaSearch/>}
          label="Search Order"
        />
      </div>
    )
  }

const Table = ({columns, data}) => {

    const { getTableProps, getTableBodyProps, headerGroups, prepareRow, state, preGlobalFilteredRows, setGlobalFilter, page, canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,exportData } =
    useTable({
      columns,
      data,
      getExportFileBlob,
    }, 
    useFilters,
    useGlobalFilter, usePagination );

    

    return (
        <>
            <div className="lg:flex items-center mb-5 justify-between">
                <GlobalFilter
                    preGlobalFilteredRows={preGlobalFilteredRows}
                    globalFilter={state.globalFilter}
                    setGlobalFilter={setGlobalFilter}
                />
                <div className="flex justify-between mt-3 lg:mt-0 lg:justify-end">
                <Menu>
                    <MenuHandler>
                      <Button className="p-0 m-0 bg-transparent shadow-none text-primary hover:shadow-none flex items-center"> Export <FaFileDownload className="text-xl animate-bounce"/></Button>
                    </MenuHandler>
                    <MenuList>
                      <MenuItem onClick={() => {
                          exportData("csv", true);
                        }}>
                          Export as CSV
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          exportData("xlsx", true);
                        }}>
                          Export as Excel
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          exportData("pdf", true);
                        }}>
                          Export as PDF 
                      </MenuItem>
                    </MenuList>
                  </Menu>
                  {headerGroups.map((headerGroup) =>
                      headerGroup.headers.map((column) =>
                      column.Filter ? (
                          <div className="fs-500 px-3 py-2 " key={column.id}>
                              {/* <label for={column.id} className="fw-600 ">{column.render("Header")}: </label> */}
                              {column.render("Filter")}
                          </div>
                      ) : null
                      )
                  )}
                </div>                
                
            </div>
        <div className="mt-2 pl-3 flex flex-col">
            <div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden border-gray-200 sm:rounded-lg">
                        <table {...getTableProps()} className="items-center w-full bg-transparent border-collapse">
                            <thead className="thead-light bg-light">
                                {headerGroups.map((headerGroup) => (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map((column) => (
                                    <th 
                                    scope="col"
                                    className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left"
                                    {...column.getHeaderProps()}>{column.render("Header")}</th>
                                    ))}
                                </tr>
                                ))}
                            </thead>
                            <tbody
                                className="bg-white"
                                {...getTableBodyProps()}>
                                {page.map((row, i) => {
                                prepareRow(row);
                                return (
                                    <tr 
                                        {...row.getRowProps()}>
                                    {row.cells.map((cell) => {
                                        return <td className="border-b border-gray-200 align-middle fs-500 whitespace-nowrap px-2 py-4 text-left" {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                                    })}
                                    </tr>
                                );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div className="pagination mt-8 lg:flex justify-between items-center bg-light fs-500 px-3 py-2 lg:py-2 rounded-lg">
            <div className='flex items-center lg:w-6/12'>
                <div className='pr-5'>
                    <span>
                    Page{' '}
                    <strong>
                        {state.pageIndex + 1} of {pageOptions.length}
                    </strong>{' '}
                    </span>
                </div>
                <div className='w-20'>
                    <Select
                    value={state.pageSize}
                    onChange={e => {
                        setPageSize(Number(e.target.value))
                    }}
                    className=""
                    >
                    {[5, 10, 20].map(pageSize => (
                        <Option key={pageSize} value={pageSize}>
                        Show {pageSize}
                        </Option>
                    ))}
                    </Select>
                </div>
            </div>
            <div className='flex lg:mt-0 mt-4 justify-center gap-2'>
                <button className="border border-gray-400 w-7 h-7 grid place-content-center circle bg-primary text-white text-xl" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                    <FaAngleDoubleLeft/>
                </button>{' '}
                <button className="border border-gray-400 w-7 h-7 grid place-content-center circle bg-primary text-white text-xl" onClick={() => previousPage()} disabled={!canPreviousPage}>
                    <FaAngleLeft/>
                </button>{' '}
                <button className="border border-gray-400 w-7 h-7 grid place-content-center circle bg-primary text-white text-xl" onClick={() => nextPage()} disabled={!canNextPage}>
                    <FaAngleRight/>
                </button>{' '}
                <button className="border border-gray-400 w-7 h-7 grid place-content-center circle bg-primary text-white text-xl" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                    <FaAngleDoubleRight/>
                </button>
            </div>
        </div>
        </>
      );
}

// dropdown filter for table

export function SelectColumnFilter({
    column: { filterValue, setFilter, preFilteredRows, id },
  }) {
    // Calculate the options for filtering
    // using the preFilteredRows
    const options = React.useMemo(() => {
      const options = new Set();
      preFilteredRows.forEach((row) => {
        options.add(row.values[id]);
      });
      return [...options.values()];
    }, [id, preFilteredRows]);
  
    // Render a multi-select box
    return (
      <Select
        name={id}
        id={id}
        value={filterValue}
        onChange={(e) => {
          setFilter(e.target.value || undefined);
        }}
        className="text-black"
        label='Filter by Status'
      >
        <Option value="">All</Option>
        {options.map((option, i) => (
          <Option key={i} value={option}>
            {option}
          </Option>
        ))}
      </Select>
    );
  }