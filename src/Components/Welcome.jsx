import { Alert } from "react-bootstrap";

const Welcome = function (props) {
  return (
    <Alert variant="success" className="text-center">
      <h2>Welcome</h2>
      <p>{props.sottoTitolo}</p>
      <p>{props.istruzioni}</p>
    </Alert>
  );
};

export default Welcome;
