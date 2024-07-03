import { useEffect, useState } from "react"
import axios from "axios"
import { BACKEND_URL } from "../../config"

// fetch details from recent post
export const useRecentBlogs = () => {
  const [loading, setLoading] = useState(true)
  const [recentBlogs, setRecentBlogs] = useState([])

  useEffect(()=>{
    axios.get(`${BACKEND_URL}/recent-blogs`)
    .then(res => {
      setRecentBlogs(res.data.data)
      setLoading(false)
    })
    .catch(err => {
      console.log(err);
    })
  },[])
  return {
    loading,
    recentBlogs
  }
}

// fetch my blogs
export const useMyBlogs = () => {
  const [loading, setLoading] = useState(true)
  const [myBlogs, setMyBlogs] = useState([])

  useEffect(() => {
    axios.get(`${BACKEND_URL}/my-blogs`,{
      headers:{
        Authorization: localStorage.getItem("token")
      }
    })
    .then(res => {
      setMyBlogs(res.data.blogs)
      setLoading(false)
    })
  }, [])
  return{
    loading,
    myBlogs
  }
}

// fetch all blogs
export const useAllBlogs = () => {
  const [loading, setLoading] = useState(true)
  const [allBlogs, setAllBlogs] = useState([])

  useEffect(()=>{
    axios.get(`${BACKEND_URL}/get-all`,{
      headers: {
        Authorization: localStorage.getItem("token")
      }
    })
    .then(res => {
      setAllBlogs(res.data.data)
      setLoading(false)
    })
    .catch(err => {
      console.log(err);
    })
  }, [])
  return {
    loading,
    allBlogs
  }
}

// fetch blog data using blogID
export const useBlog = ({id}) => {
  const [loading, setLoading] = useState(true)
  const [blog, setBlog] = useState([])

  useEffect(()=>{
    axios.get(`${BACKEND_URL}/blog/${id}`,{
      headers:{
        Authorization: localStorage.getItem("token")
      }
    })
    .then(res => {
      setBlog(res.data.blog)
      setLoading(false)
    })
  },[id])

  return {
    loading,
    blog
  }
}