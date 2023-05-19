import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardProduct(props) {
  const { img, title, content } = props;
  return (
    <Card style={{ width: "24rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
        <Button variant="primary">Xem Giá</Button>
      </Card.Body>
    </Card>
  );
}
export default CardProduct;
