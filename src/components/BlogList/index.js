import BlogItem from '../BlogItem'

import './index.css'

const BlogList = props => {
  const {blogDetails} = props

  return (
    <ul className="blog-list-container">
      {blogDetails.map(eachBlog => (
        <BlogItem key={eachBlog.id} details={eachBlog} />
      ))}
    </ul>
  )
}

export default BlogList
