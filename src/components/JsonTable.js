import React from "react";
import { Table, Thead, Tr, Th, Tbody, Td } from "@patternfly/react-table";

const JsonTable = ({ data }) => {
  if (!data || !Array.isArray(data.content)) return <p>No data available.</p>;

  return (
    <Table aria-label="AI Agent Response">
      <Thead>
        <Tr>
          <Th>Key</Th>
          <Th>Value</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.content.map((item, index) => (
          <Tr key={index}>
            <Td>{item.key}</Td>
            <Td>{item.value.toString()}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default JsonTable;
