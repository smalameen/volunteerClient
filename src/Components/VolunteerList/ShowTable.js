import React, { useEffect, useState } from 'react'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import axios from 'axios'

const ShowTable = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://morning-hollows-81253.herokuapp.com/volunteer')
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [])

  // const [data, setData] = useState({ hits: [] })
  // const propertyNames = Object.values(data)
  // console.log(propertyNames)

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios('https://morning-hollows-81253.herokuapp.com/volunteer')

  //     setData(result.data)
  //   }
  //   fetchData()
  // }, [])
  return (
    <div>

      <Table
        style={{
          backgroundColor: 'white',
          borderRadius: '1rem',
          marginTop: '1rem',
        }}
      >
        <Thead>
          <Tr>
            <Th style={{ padding: '1rem' }}>Event type</Th>
            <Th> Volunteer's name </Th>
            <Th> Gmail ID </Th>
            <Th> Phone number </Th>
          </Tr>
        </Thead>
        <Tbody>

          
          {
            data.length === 0 && <b>Loading Data from API...</b>
          }
          
          
          {data.map((volunteer) => (
            <Tr>
              <Td style={{ padding: '1rem' }}>{volunteer.interestedOrg}</Td>
              <Td>{volunteer.name}</Td>
              <Td>{volunteer.gmail}</Td>
              <Td>{volunteer.phoneNumber}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  )
}

export default ShowTable
