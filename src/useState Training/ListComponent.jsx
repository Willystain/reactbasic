import Item from "./Item";

const ListComponent = (props) => {
  return (
    <div>
      {props.userData.map((user) => {
        return <Item user={user} />;
      })}
    </div>
  );
};

export default ListComponent;
