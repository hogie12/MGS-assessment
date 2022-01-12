import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Segment,
  Button,
  Dimmer,
  Loader,
  //   Header,
  //   Icon,
  //   Form,
  //   Input,
  //   Label,
} from "semantic-ui-react";
import SidebarMenu from "../component/sidebar";
import Tabel from "../component/table";
import { getTiket } from "../store/action";

export default function MainPage() {
  const tiket = useSelector((state) => state.allTiket);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTiket());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(tiket);
  return (
    <div>
      <SidebarMenu>
        <Segment>
          <h3>Ticket Support CC</h3>
        </Segment>

        {tiket.isLoading ? (
          <>
            <Segment>
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
              >
                Add
              </Button>
              <Tabel tiket={tiket}/>
            </Container>
          </>
        )}

        {/* <Segment>
          <Header as="h4" block>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              Ticket - Penugasan Support CC
              <Icon name="x" />
            </div>
          </Header>
          <Container>
          <Form>
            <Form.Field inline>
              <label>No. Laporan :</label>
              <Input disabled >
                  <Label>Genereted By Sistem</Label>
              </Input>
            </Form.Field>
            <Form.Field inline required>
              <label>Tanggal Laporan :</label>
              <Input type="date"/>
            </Form.Field>
            <Form.Field inline required>
              <label>Jenis Gangguan :</label>
              <Input placeholder="Jenis Gangguan" />
            </Form.Field>
            <Form.Field inline required>
              <label>Sub Jenis Gangguan :</label>
              <Input placeholder="Sub Jenis Gangguan" />
            </Form.Field>
            
          </Form>
          </Container>
        </Segment> */}
      </SidebarMenu>
    </div>
  );
}
