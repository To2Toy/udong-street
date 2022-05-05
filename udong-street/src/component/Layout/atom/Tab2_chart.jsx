import React, { useMemo } from "react"
import { useTable } from "react-table"
import styled from 'styled-components'

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
  `

const Tab2_chart = (props) => {
    const name = props.name
    const columns = [{
        Header: name,
        columns: [
            {
                Header: '지역',
                accessor: 'area',
            },
            {
                Header: '총 확진자',
                accessor: 'all',
            },
            {
                Header: '일일 확진자',
                accessor: 'day',
            },
        ],
    },
    ]

    //   const data = React.useMemo(() => makeData(20), [])

    const data = useMemo(() => [{
        "area": "서울",
        "all": "34234",
        "day": "3453"
    }], [])

    return (
        <Styles>
            <Table columns={columns} data={data} />
        </Styles>
    )
}


function Table({ columns, data }) {
    // Use the state and functions returned from useTable to build your UI
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    })

    // Render the UI for your table
    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
export default Tab2_chart