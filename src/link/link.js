// Reusable Component
// props ---> Is read only
export default function Link(props) {
  return (
    <>
      <a href={props.link}>{props.name}</a>
    </>
  );
}
