import "./link.css";
// Reusable Component
// props ---> Is read only
export default function Link(props) {
  return (
    <>
      <a class="link-component" href={props.link}>
        {props.name}
      </a>
    </>
  );
}
