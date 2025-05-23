import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../features/posts/postSlice";

const Posts = () => {
    const posts = useSelector(state => state.posts);
    const dispatch = useDispatch()
    // console.log(posts);


    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    if (posts.isLoading) return <h3>posts loading ............</h3>
    if (posts.error) return <h3>error : {posts.error}</h3>



    return (
        <div className="my-6">
            <h3 className="text-3xl text-teal-300 text-center">posts data </h3>
            <div className="">
                {
                    posts.posts.map(post => (
                        <div key={post.id} className="p-4 bg rounded">
                            <div className="p-4 bg-gray-50 text-black rounded">
                                <h3 className="text-2xl">{post.title}</h3>
                                <p className="text-xl text-gray-600">{post.body}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
};
export default Posts;