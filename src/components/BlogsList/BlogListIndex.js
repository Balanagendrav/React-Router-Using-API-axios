//Using UseState and axios

import { useEffect, useState } from "react";
import { TailSpin } from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import axios from 'axios'
import BlogItemIndex from '../BlogItem/BlogItemIndex';

import './BlogListIndex.css';

const BlogListIndex = () => {
    const [blog, setBlog] = useState([])
    const [isLoading, setLoading] = useState(true);
    const blogData = async () => {
        const result = await axios.get("https://apis.ccbp.in/blogs")
        setBlog(result.data)
        setLoading(false)
    }
    useEffect(() => {
        blogData()
    }, [])

    return (
        <div className="blog-list-container">
            {isLoading ? (<TailSpin type="TailSpin" color="#00BFFF" height={50} width={50} />) : (
                blog.map((item) => {
                    return (
                        <div>
                            <BlogItemIndex item={item} />
                        </div>
                    )
                })
        )}
        </div>
    )
}


//Using Class Components

// import {Component} from 'react'
// import { TailSpin } from 'react-loader-spinner';

// import BlogItemIndex from '../BlogItem/BlogItemIndex';

// import './BlogListIndex.css'
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

// class BlogListIndex extends Component {
//   state = {
//     blogsData: [],
//     isLoading: true,
//   }

//   componentDidMount() {
//     this.getBlogsData()
//   }

//   getBlogsData = async () => {
//     const response = await fetch('https://apis.ccbp.in/blogs')
//     const data = await response.json()
//     const updatedData = data.map(eachItem => ({
//       id: eachItem.id,
//       author: eachItem.author,
//       title: eachItem.title,
//       topic: eachItem.topic,
//       avatarUrl: eachItem.avatar_url,
//       imageUrl: eachItem.image_url,
//     }))
//     this.setState({blogsData: updatedData, isLoading: false})
//   }

//   render() {
//     const {blogsData} = this.state
//     const {isLoading} = this.state
//     return (
//       <div className="blog-list-container">
//         {isLoading ? (
//           <TailSpin type="TailSpin" color="#00BFFF" height={50} width={50} />
//         ) : (
//           blogsData.map(item => <BlogItemIndex blogData={item} key={item.id} />)
//         )}
//       </div>
//     )
//   }
// }

export default BlogListIndex
