import Card from "react-bootstrap/Card";

import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";
import { Component } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const books = {
  fantasy,
  history,
  horror,
  romance,
  scifi,
};

class AllTheBooks extends Component {
  state = {
    selectedGeners: "fantasy",
  };

  render() {
    return (
      <>
        <Container className="d-flex justify-content-center gap-3">
          <Button onClick={() => this.setState({ selectedGeners: "fantasy" })}>Fantasy</Button>
          <Button onClick={() => this.setState({ selectedGeners: "history" })}>History</Button>
          <Button onClick={() => this.setState({ selectedGeners: "horror" })}>Horror</Button>
          <Button onClick={() => this.setState({ selectedGeners: "romance" })}>Romance</Button>
          <Button onClick={() => this.setState({ selectedGeners: "scifi" })}>Scifi</Button>
        </Container>
        <Container fluid className="my-5">
          <Row className="g-4">
            {books[this.state.selectedGeners].map((book) => (
              <Col sm={6} md={4} lg={3} xl={2} key={book.asin}>
                <Card className="h-100">
                  <Card.Img style={{ height: "200px", objectFit: "cover" }} variant="top" src={book.img} />
                  <Card.Body>
                    <Card.Text className="book-title">{book.title}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </>
    );
  }
}

export default AllTheBooks;
