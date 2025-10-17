import { Button, Container } from "react-bootstrap";

export default function HeroSection() {
  return (
    <div className="bg-light py-5 text-center" id="home">
      <Container>
        <h2 className="fw-bold">Nossa missão é ajudar quem precisa.</h2>
        <p className="text-muted">Um pequeno gesto pode fazer uma grande diferença.</p>
        <Button variant="dark" href="#donate">Doar</Button>
      </Container>
    </div>
  );
}
