import React from 'react'
import {Table} from 'semantic-ui-react'

const InfoStudentList = ({student,weeklength}) => (
    student.map((student)=>
            <Table.Row key={student.userId}>
                <Table.Cell >{student.fullName}</Table.Cell>
                <Table.Cell>{student.schoolNumber}</Table.Cell>
                <Table.Cell>{student.email}</Table.Cell>
                <Table.Cell>{student.studentDiscontinuity+"/"+weeklength}</Table.Cell>
            </Table.Row>
    )
)

export default InfoStudentList