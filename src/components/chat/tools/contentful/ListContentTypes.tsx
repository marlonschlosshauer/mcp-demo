import React from "react";
import { Table } from "@contentful/f36-components";
import { ContentTypeLink } from "@/components/contentful/ContentType";
import { ContentfulTypeArray } from "@/types/mcp/contentful";

export type ListContentTypesProps = ContentfulTypeArray;

export const ListContentTypes: React.FC<ListContentTypesProps> = ({
  items,
}) => {
  if (!items) {
    return;
  }

  return (
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.Cell>Name</Table.Cell>
          <Table.Cell>Fields</Table.Cell>
          <Table.Cell></Table.Cell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {items.map((ct, key) => (
          <Table.Row key={key}>
            <Table.Cell>{ct.name}</Table.Cell>
            <Table.Cell>{ct.fields.length}</Table.Cell>
            <Table.Cell>
              <ContentTypeLink {...ct}>Link</ContentTypeLink>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};
