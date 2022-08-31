import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

function MyBadge() {
  return (
    <Button variant="primary">
      libri <Badge bg="secondary">9</Badge>
    </Button>
  );
}

export default MyBadge;