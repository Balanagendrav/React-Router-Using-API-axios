import './BlogItemIndex.css'

const BlogItemIndex = ({item}) => {
//   const {blogData} = props
//   const {id, imageUrl, topic, title, avatarUrl, author} = blogData
  return (
    <div className="item-container">
      <img className="item-image" src={item.image_url} alt = {item.id}/>

      <div className="item-info">
        <p className="item-topic">{item.topic}</p>

        <p className="item-title">{item.title}</p>
        <div className="author-info">
          <img className="avatar" src={item.avatar_url} alt = {item.id}/>
          <p className="author-name">{item.author}</p>
        </div>
      </div>
    </div>
  )
}

export default BlogItemIndex