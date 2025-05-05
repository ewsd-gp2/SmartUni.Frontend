import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { FaDownload, FaRegImage } from "react-icons/fa6";
import { IoMdSend } from "react-icons/io";
import { useParams } from "react-router-dom";
import { formatDate } from "../../formatdatetime/FormatDateTime";
const BASE_URL = "http://localhost:7142";

const BlogDetailRow = () => {
  const { id } = useParams();
  // console.log(id)
  const [blogDetail, setBlogDetail] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [liked, setLiked] = useState(false);
  const [reactionCount, setReactionCount] = useState(0);
  console.log(blogDetail)
  useEffect(() => {
    getBlogDetail(id);
  }, []);

  const getBlogDetail = async (id) => {
    setLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/blog/${id}`, {
        headers: {
          "Access-Control-Allow-Origin": "http://localhost:5173",
        },
        withCredentials: true,
      });
      const res = response.data;
      // console.log(res)
      setBlogDetail(res);
      setLiked(res.isLiked);
      setReactionCount(res.reactionCount);
      setLoading(false);
    } catch (error) {
      console.log("Fetching blog error", error);
    }
  };



  const handleCommentSubmit = async (e, id) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    try {
      await axios.put(
        `${BASE_URL}/blog/${id}/comment`,
        { comment: newComment },
        {
          headers: {
            "Access-Control-Allow-Origin": "http://localhost:5173",
          },
          withCredentials: true,
        }
      );

      await getBlogDetail(id);

      setNewComment("");
    } catch (error) {
      console.log("Comment submission error:", error);
    }
  };

  const handleLikeToggle = async (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const method = liked ? "DELETE" : "PUT";
      const respose = await axios({
        method: method,
        url: `${BASE_URL}/blog/${id}/like`,
        headers: {
          "Access-Control-Allow-Origin": "http://localhost:5173",
        },
        withCredentials: true,
      });

      setLiked(!liked);
      setReactionCount((prevCount) => (liked ? prevCount - 1 : prevCount + 1));
      await getBlogDetail(id);
    } catch (error) {
      console.log("Like toggle error:", error);
    }
  };
 const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleCommentSubmit(e, id);
    }
  };
  return (
    <div className=" h-screen">
      <div
        className=" w-96 flex gap-4 mb-5
        "
      >
        <img
          className=" size-10 rounded-full"
          src={blogDetail.authorAvatar ? `data:image/jpeg;base64,${blogDetail.authorAvatar}` : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}
          alt=""
        />
        <div>
          <p className="">{blogDetail.authorName}</p>

          <p className=" text-xs text-gray-500 text-end">{formatDate(blogDetail.createdOn)}</p>
        </div>
      </div>
      <div className=" sm:w-[300px] md:w-[400px] lg:w-[600px] xl:w-[700px] bg-white rounded-lg border border-gray-200 shadow-sm ">
        <div>
          <img
            className="rounded-t-lg sm:h-[100px] md:h-[200px] lg:h-[300px] w-full"
            src={`data:image/jpeg;base64,${blogDetail.coverImage}`}
            alt
          />

          <div className="  my-3">
            <p className="  text-sm text-gray-700 dark:text-gray-400">
              {blogDetail.content}
            </p>
            {blogDetail.attachmentName && (
              <div className="mt-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FaDownload className="text-gray-500 mr-2" />
                    <span className="text-sm font-medium text-gray-700">
                      {blogDetail.attachmentName || "Attachment"}
                    </span>
                  </div>
                  <button
                    className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors flex items-center"
                  >
                    <FaDownload className="mr-1" size={12} />
                    Download
                  </button>
                </div>
              </div>
            )}
            <div className="mt-3 flex gap-3">
              <button
                type="button"
                onClick={(e) => handleLikeToggle(e, id)}
                className="focus:outline-none"
              >
                {liked ? <AiFillLike /> : <AiOutlineLike />}
              </button>
              <span className=" text-sm">{reactionCount}</span>

              <div>
                <p className=" text-sm text-gray-500">
                  Comments{" "}
                  <span className=" text-gray-800">
                    ({blogDetail.comments ? blogDetail.comments.length : 0})
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className=" mt-5">Comments</p>

        <form
          className=" w-[400px]"
          onSubmit={(e) => handleCommentSubmit(e, id)}
        >
          <label htmlFor="chat" className="sr-only">
            Your message
          </label>
          <div className="flex items-center  py-2 rounded-lg bg-gray-50">
            <textarea
              id="chat"
              rows={1}
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              onKeyUp={handleEnter}
              className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Add a comment..."
              // defaultValue={newComment}
            />
            <button
              type="submit"
              className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100"
            >
              <IoMdSend className=" size-5" />
              <span className="sr-only">Send message</span>
            </button>
          </div>
        </form>
        {blogDetail.comments &&
          [...blogDetail.comments]
            .sort((a, b) => new Date(b.commentedOn) - new Date(a.commentedOn))
            .map((comment) => (
              <div key={comment.id} className="w-full max-w-2xl px-4 mt-4">
                <div className="flex items-start gap-3">
                  <img
                    className="w-9 h-9 rounded-full object-cover"
                    src={comment.commenterAvatar ? `data:image/jpeg;base64,${comment.commenterAvatar}` : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}
                    alt="avatar"
                  />
                  <div className="bg-gray-100 hover:bg-gray-200 transition rounded-xl px-4 py-2 w-[350px]">
                    <p className="text-sm font-semibold text-gray-800">
                      {comment.commenterName}
                    </p>
                    <p className="text-sm text-gray-700 mt-1 break-words">
                      {comment.comment}
                    </p>
                    <p className="text-xs text-gray-500 mt-1 text-end">
                      {formatDate(comment.commentedOn)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default BlogDetailRow;
