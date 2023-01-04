import classes from "./ListItem.module.css";
function ListItem(props) {
  return (
    <li className={classes["container-item"]}>
      <div className={classes["image-container"]}>
        <img className={classes.image} src={props.src} alt={"A person image"} />
      </div>
      <div>
        <h3 className={classes["secondary-heading"]}>{props.name}</h3>
        <p className={classes.age}>{props.age} years</p>
      </div>
    </li>
  );
}
export default ListItem;
