import Form from 'react-bootstrap/Form';

function FavoriteToggle() {
  return (
    <Form>
      <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        label="Check this switch"
      />
    </Form>
  );
}

export default FavoriteToggle;
