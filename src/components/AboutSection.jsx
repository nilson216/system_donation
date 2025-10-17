import { Container, Row, Col, Card } from "react-bootstrap";

export default function AboutSection() {
  return (
    <Container id="about" className="my-5">
      <h3 className="fw-bold mb-4">Quem somos</h3>
      <Row className="align-items-center">
        <Col md={6}>
          <Card className="p-3 shadow-sm border-0">
            <Card.Body>
              <Card.Text>
                A <strong>DOe.</strong> surgiu de um projeto de extensão da 
                Universidade do Vale do Itajaí (UNIVALI), sem fins lucrativos, 
                com o objetivo de integrar um sistema de gerenciamento de doações 
                às instituições parceiras que desejam digitalizar o seu sistema 
                de doações. Assim gerando uma melhor organização de artigos 
                recebidos e doados.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="text-center">
          <img
            src="https://img.freepik.com/premium-vector/donation-hands-give-box-pop-art-style_197582-557.jpg"
            alt="Doação"
            className="img-fluid rounded"
          />
        </Col>
      </Row>
    </Container>
  );
}
