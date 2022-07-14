import SnapItem from './SnapItem';
import classes from './SnapList.module.css';

function SnapList(props) {
  return (
    <ul className={classes.list}>
      {props.Snaps.map((Snap) => (
        <SnapItem
          key={Snap.id}
          id={Snap.id}
          image={Snap.image}
          title={Snap.title}
          address={Snap.address}
        />
      ))}
    </ul>
  );
}

export default SnapList;
