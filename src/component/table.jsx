import React from "react";
import { Table } from "semantic-ui-react";

export default function Tabel({ tiket }) {
    console.log(tiket)
  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>No</Table.HeaderCell>
            <Table.HeaderCell>No Laporan</Table.HeaderCell>
            <Table.HeaderCell>Tgl Laporan</Table.HeaderCell>
            <Table.HeaderCell>Jenis</Table.HeaderCell>
            <Table.HeaderCell>Sub Jenis</Table.HeaderCell>
            <Table.HeaderCell>Petugas</Table.HeaderCell>
            <Table.HeaderCell>Permasalahan</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {tiket?.data?.map((data, idx) => (
            <Table.Row>
              <Table.Cell>{data.id}</Table.Cell>
              <Table.Cell>{data.no_lap}</Table.Cell>
              <Table.Cell>{data.tgl_lap}</Table.Cell>
              <Table.Cell>{data.type_ticket.nama}</Table.Cell>
              <Table.Cell>{data.sub_type_ticket.nama}</Table.Cell>
              <Table.Cell>{data.petugas.nama}</Table.Cell>
              <Table.Cell>{data.permasalahan}</Table.Cell>
              <Table.Cell>{data.status.nama}</Table.Cell>
              
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
