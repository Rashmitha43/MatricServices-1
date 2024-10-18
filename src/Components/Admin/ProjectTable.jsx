// components/admin/projecttable.jsx
import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react';

const ProjectTable = () => {
  const projects = [
    { id: 1, name: 'Project Alpha', description: 'Description of Project Alpha' },
    { id: 2, name: 'Project Beta', description: 'Description of Project Beta' },
    { id: 3, name: 'Project Gamma', description: 'Description of Project Gamma' }
  ];

  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Project Name</Th>
            <Th>Project Description</Th>
          </Tr>
        </Thead>
        <Tbody>
          {projects.map((project) => (
            <Tr key={project.id}>
              <Td>{project.name}</Td>
              <Td>{project.description}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default ProjectTable;
