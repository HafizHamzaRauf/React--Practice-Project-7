import classes from "./List.module.css";
import ListItem from "./ListItem";

function List(props) {
  const listContent = props.data.map((item) => (
    <ListItem src={item.image} name={item.name} age={item.age}></ListItem>
  ));
  return (
    <div className={classes.container}>
      <h1 className={classes["primary-heading"]}>
        {props.data.length} birthdays today
      </h1>
      <ul className={classes.list}>{listContent}</ul>
    </div>
  );
}
export default List;
