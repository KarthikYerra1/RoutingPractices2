import './index.css'

const BlogItem = props => {
  const {details} = props
  const {title, description, publishedDate} = details

  return (
    <li className="blog-list-item">
      <div className="name-date-container">
        <h1 className="title-name">{title}</h1>
        <p className="date-desc-text">{publishedDate}</p>
      </div>
      <p className="date-desc-text">{description}</p>
      <hr className="hr-line" />
    </li>
  )
}

export default BlogItem
