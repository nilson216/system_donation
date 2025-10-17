import { Container, Row, Col, Card } from "react-bootstrap";

export default function DonateSection() {
  return (
    <Container id="donate" className="my-5">
      <h3 className="fw-bold mb-4">Doar</h3>
      <Row>
        <Col md={6}>
          <Card className="p-3 shadow-sm border-0">
            <Card.Body>
              <p>Se dirija a uma instituição parceira com os itens que você deseja doar.</p>
              <p><strong>Estamos localizados em:</strong></p>
              <p>
                Nome da instituição<br />
                CEP: 00000-000<br />
                Rua Nome<br />
                Bairro Nome
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!..."
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
}
