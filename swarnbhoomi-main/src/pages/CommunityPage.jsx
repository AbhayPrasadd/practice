import React, { useState, useEffect } from "react";
import {
  UserCircle,
  MessageSquare,
  ThumbsUp,
  Share2,
  Image as ImageIcon,
  Trash2,
  ArrowLeft
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  arrayUnion
} from "firebase/firestore";
import { useTranslation } from "react-i18next";

const Community = () => {
  const { t } = useTranslation();
  const [posts, setPosts] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [newPost, setNewPost] = useState("");
  const [image, setImage] = useState(null);
  const [likesMap, setLikesMap] = useState({});
  const [commentsMap, setCommentsMap] = useState({});
  const [newComment, setNewComment] = useState("");
  const navigate = useNavigate();

  const demoPosts = [
    {
      id: "demo1",
      user: "Kisan Bhai",
      text: t("demo_post_1"),
      image: "https://wallpapercave.com/wp/wp2024155.jpg",
      likes: 15,
      comments: []
    },
    {
      id: "demo2",
      user: "Farmer Lakshmi",
      text: t("demo_post_2"),
      image: null,
      likes: 9,
      comments: []
    },
    {
      id: "demo3",
      user: "Anand Kisan",
      text: t("demo_post_3"),
      image: "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?auto=format&fit=crop&w=800&q=80",
      likes: 23,
      comments: []
    }
  ];

  const fetchPosts = async () => {
    const querySnapshot = await getDocs(collection(db, "community"));
    const postList = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setPosts([...demoPosts, ...postList.reverse()]);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handlePost = async () => {
    if (!newPost.trim() && !image) return;

    const newDemoPost = {
      user: t("you"),
      text: newPost,
      image: image ? URL.createObjectURL(image) : null,
      likes: 0,
      comments: []
    };

    try {
      await addDoc(collection(db, "community"), newDemoPost);
      fetchPosts();
    } catch (error) {
      console.error("Error adding post:", error);
    }

    setNewPost("");
    setImage(null);
    setModalOpen(false);
  };

  const handleLike = async (postId, currentLikes) => {
    const postRef = doc(db, "community", postId);
    const newLikes = (currentLikes || 0) + 1;
    try {
      await updateDoc(postRef, { likes: newLikes });
      setPosts((prev) =>
        prev.map((p) => (p.id === postId ? { ...p, likes: newLikes } : p))
      );
    } catch (error) {
      console.error("Error updating likes:", error);
    }
  };

  const handleComment = async (postId) => {
    const postRef = doc(db, "community", postId);
    try {
      await updateDoc(postRef, {
        comments: arrayUnion(newComment)
      });
      setCommentsMap({ ...commentsMap, [postId]: "" });
      fetchPosts();
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  const handleDelete = async (postId) => {
    try {
      await deleteDoc(doc(db, "community", postId));
      fetchPosts();
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div className="min-h-screen pb-24">
      {/* ✅ Back Button */}
      <div className="p-4 flex items-center gap-2">
        <button
          onClick={() => navigate("/dashboard")}
          className="text-green-700 hover:text-green-900 flex items-center gap-1"
        >
          <ArrowLeft size={20} />
          <span className="text-sm">{t("back")}</span>
        </button>
      </div>

      <div className="p-4 space-y-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <div className="flex items-center justify-between p-3">
              <div className="flex items-center gap-2">
                <UserCircle className="text-green-600" size={28} />
                <span className="font-semibold text-gray-800">{post.user}</span>
              </div>
              {post.user === t("you") && (
                <button onClick={() => handleDelete(post.id)}>
                  <Trash2 className="text-red-600" size={20} />
                </button>
              )}
            </div>

            {post.image && (
              <img
                src={post.image}
                alt="post"
                className="w-full max-h-[400px] object-cover"
              />
            )}

            <div className="p-4">
              <p className="text-gray-700 mb-3 text-base md:text-lg">{post.text}</p>
              <div className="flex gap-6 text-sm text-gray-600 mb-3">
                <button
                  onClick={() => handleLike(post.id, post.likes)}
                  className="flex items-center gap-1 hover:text-green-600"
                >
                  <ThumbsUp size={16} />
                  <span>{post.likes || 0} {t("like")}</span>
                </button>
                <button className="flex items-center gap-1 hover:text-blue-600">
                  <MessageSquare size={16} />
                  <span>{t("comment")}</span>
                </button>
                <button className="flex items-center gap-1 hover:text-purple-600">
                  <Share2 size={16} />
                  <span>{t("share")}</span>
                </button>
              </div>
              <div className="space-y-2">
                {(post.comments || []).map((cmt, idx) => (
                  <p key={idx} className="text-sm text-gray-600 bg-gray-100 p-2 rounded-md">💬 {cmt}</p>
                ))}
                <div className="flex items-center gap-2 mt-2">
                  <input
                    type="text"
                    placeholder={t("add_comment")}
                    value={commentsMap[post.id] || ""}
                    onChange={(e) =>
                      setCommentsMap({ ...commentsMap, [post.id]: e.target.value })
                    }
                    className="flex-1 border p-2 rounded-md text-sm"
                  />
                  <button
                    onClick={() => {
                      setNewComment(commentsMap[post.id]);
                      handleComment(post.id);
                    }}
                    className="text-white bg-green-600 hover:bg-green-700 px-3 py-1 rounded"
                  >
                    {t("post")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Ask Button */}
      <button
        onClick={() => setModalOpen(true)}
        className="fixed bottom-20 right-6 bg-green-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-700 transition z-50 text-sm font-semibold"
      >
        {t("ask_community")}
      </button>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50">
          <div className="bg-white rounded-xl w-[90%] max-w-md p-6 shadow-xl">
            <h2 className="text-xl font-semibold mb-4 text-green-700">{t("create_post")}</h2>
            <textarea
              className="w-full border border-gray-300 p-3 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
              rows="4"
              placeholder={t("share_placeholder")}
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
            ></textarea>
            <div className="flex justify-between items-center mt-4">
              <label className="flex items-center gap-2 text-green-600 cursor-pointer hover:text-green-800">
                <ImageIcon size={20} />
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => setImage(e.target.files[0])}
                />
                {image && <span className="text-xs text-gray-600">{image.name}</span>}
              </label>
              <div className="flex gap-2">
                <button
                  onClick={() => setModalOpen(false)}
                  className="px-3 py-2 text-sm rounded-md text-gray-600 hover:bg-gray-200"
                >
                  {t("cancel")}
                </button>
                <button
                  onClick={handlePost}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 text-sm rounded-md"
                >
                  {t("post")}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Community;
