import classes from './SnapDetail.module.css'

const SnapDetail = (props) => {

return(
<section className={classes.Detail}>
    <img src={props.image}  alt={props.title} ></img>
    <h1>{props.title}</h1>
    <address>{props.address}</address>
    <p>{props.description}</p>
</section>
)
}

export default SnapDetail;