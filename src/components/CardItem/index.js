// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails

  return (
    <li className={`${className} card-item`}>
      <div className="list-container">
        <h1 className="heading">{title}</h1>
        <p className="description">{description}</p>
        <img src={imgUrl} alt="avatar" className="image-item" />
      </div>
    </li>
  )
}

export default CardItem
