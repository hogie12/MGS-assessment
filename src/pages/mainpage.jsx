import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Segment,
  Button,
  Dimmer,
  Loader,
  Header,
  Icon,
  Form,
  Input,
  Label,
  Dropdown,
} from "semantic-ui-react";
import SidebarMenu from "../component/sidebar";
import Tabel from "../component/table";
import { addTicket, getTiket } from "../store/action";
import axios from "axios";

export default function MainPage() {
  const tiket = useSelector((state) => state.allTiket);
  const dispatch = useDispatch();
  const [state, setState] = useState(true);
  const [type, setType] = useState([]);
  const [createTicket, setCreateTicket] = useState({
    type_ticket_id: 1,
    sub_type_ticket_id: "",
    permasalahan: "",
  });
  const ticketType = async () => {
    const res = await axios.get("/api/mastersupport/getdata");
    const data = res.data.data;
    setType(data);
  };
  useEffect(() => {
    ticketType();
  }, []);

  useEffect(() => {
    dispatch(getTiket());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChangeType = (e, { value }) =>
    setCreateTicket({ ...createTicket, type_ticket_id: value });

  const handleChangeSubType = (e, { value }) =>
    setCreateTicket({ ...createTicket, sub_type_ticket_id: value });

  const subType = createTicket.type_ticket_id - 1;
  const subTypeValue = type[0 || subType];
  const optionType = type?.map((data) => {
    return { key: data.kode, text: data.nama, value: data.id };
  });
  const optionSubType = subTypeValue?.sub_type_ticket.map((data) => {
    return {
      key: data.id,
      text: data.nama,
      value: data.id,
    };
  });

  const handleCreate = (e) => {
    e.preventDefault();
    dispatch(addTicket(createTicket));
  };

  return (
    <div>
      <SidebarMenu>
        <Segment>
          <h3>Ticket Support CC</h3>
        </Segment>

        {state ? (
          <>
            {tiket.isLoading ? (
              <>
                <Segment style={{ minHeight: "50vh" }}>
                  <Dimmer active inverted>
                    <Loader inverted>Loading</Loader>
                  </Dimmer>
                </Segment>
              </>
            ) : (
              <>
                <Container>
                  <Button
                    color="green"
                    floated="right"
                    style={{ margin: "20px 0" }}
                    onClick={() => setState(false)}
                  >
                    Add
                  </Button>
                  <Tabel tiket={tiket} />
                </Container>
              </>
            )}
          </>
        ) : (
          <>
            <Segment>
              <Header as="h4" block>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  Ticket - Penugasan Support CC
                  <Icon name="x" onClick={() => setState(true)} />
                </div>
              </Header>
              <Container>
                <Form onSubmit={handleCreate}>
                  <Form.Field inline>
                    <label>No. Laporan :</label>
                    <Input disabled>
                      <Label>Genereted By Sistem</Label>
                    </Input>
                  </Form.Field>
                  <Form.Field inline required>
                    <label>Tanggal Laporan :</label>
                    <Input type="date" />
                  </Form.Field>
                  <Form.Field inline required>
                    <label>Jenis Gangguan :</label>
                    <Dropdown
                      onChange={handleChangeType}
                      button
                      basic
                      options={optionType}
                      floating
                      placeholder="jenis gangguan"
                      value={createTicket.type_ticket_id}
                    />
                  </Form.Field>
                  <Form.Field inline required>
                    <label>Sub Jenis Gangguan :</label>
                    <Dropdown
                      onChange={handleChangeSubType}
                      value={createTicket.sub_type_ticket_id}
                      button
                      basic
                      floating
                      options={optionSubType}
                      placeholder="sub jenis gangguan"
                    />
                  </Form.Field>
                  <Form.Field inline>
                    <label>permasalahan :</label>
                    <input
                      placeholder="permasalahan"
                      value={createTicket.permasalahan}
                      onChange={(e) =>
                        setCreateTicket({
                          ...createTicket,
                          permasalahan: e.target.value,
                        })
                      }
                    />
                  </Form.Field>
                  <Button
                    color="green"
                    style={{ margin: "20px 10px" }}
                    type="submit"
                  >
                    Simpan
                  </Button>
                  <Button
                    style={{ margin: "20px 10px" }}
                    onClick={() => setState(false)}
                  >
                    Batal
                  </Button>
                </Form>
              </Container>
            </Segment>
          </>
        )}
      </SidebarMenu>
    </div>
  );
}
