import React from "react";
import { Table } from "@contentful/f36-components";

export const ListContentTypes: React.FC<any> = ({ items }) => {
  if (!items) {
    return;
  }

  return (
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.Cell>Name</Table.Cell>
          <Table.Cell>Fields</Table.Cell>
          <Table.Cell>Updated at</Table.Cell>
          <Table.Cell>Created at</Table.Cell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {items.map((ct: any, key: number) => (
          <Table.Row key={key}>
            <Table.Cell>{ct.name}</Table.Cell>
            <Table.Cell>{ct.fields.length}</Table.Cell>
            <Table.Cell>{ct.sys.updatedAt}</Table.Cell>
            <Table.Cell>{ct.sys.createdAt}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};
