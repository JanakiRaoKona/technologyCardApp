// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardsList} = props
  const {title, description, imgUrl, className, key} = cardsList
  return (
    <li className={`${className} card-style`} id={key}>
      <h1 className="heading">{title}</h1>
      <p className="paragraph">{description}</p>
      <div className="image-style">
        <img className="title" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}
export default CardItem
