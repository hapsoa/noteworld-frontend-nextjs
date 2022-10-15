import { NextPage } from "next";
import { Col, Container, Row } from "react-bootstrap";
import NavigatorDrawer from "../components/NavigationDrawer/NavigationDrawer";
import Navbar from "../components/NavigationBar/NavigationBar";
import PageView from "../components/PageView/PageView";

const Home: NextPage = () => {
  return (
    <Container fluid style={{ height: "100vh" }}>
      <Row style={{ height: "100%" }}>
        <NavigatorDrawer />
        <Col style={{ padding: 0 }}>
          <Navbar></Navbar>
          <PageView></PageView>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
