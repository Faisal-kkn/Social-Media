import instance from '../../Axios/UserAxios'
import axios from 'axios'

export const userLogin = (data) => axios.post(`https://reachgram.online/api/login`, data)
export const userRegister = (data) => axios.post(`https://reachgram.online/api/signup`, data)
export const userRegisterOtp = (data) => axios.post(`https://reachgram.online/api/otpvarification`, data)
export const passwordForgot = (email) => axios.post(`https://reachgram.online/api/forgotPassword`, email)
export const OtpForm = (newPassword) => axios.post(`https://reachgram.online/api/newPassword`, newPassword)
export const newPost = (data) => axios.post(`https://reachgram.online/api/newPost`, data, {
    headers: {
        "accesstoken": localStorage.getItem("userToken")
    },
})
export const userEditProfile = (data) => axios.put(`https://reachgram.online/api/editProfile`, data, {
    headers: {
        "accesstoken": localStorage.getItem("userToken")
    },
})


export const userAuth = () => instance.get(`/isUserAuth`)
export const getPost = (userId) => instance.get(`/home?userId=${userId}`)
export const postDelete = (mainId, postId) => instance.delete(`/deletePost?mainId=${mainId}&postId=${postId}`)
export const likeUnlike = (data) => instance.put(`/likeordislike`, data)
export const getAllComment = (postId) => instance.get(`/postComments?postId=${postId}`)
export const newComment = ({ userId, postId, comment }) => instance.post(`/commentPost`, { userId, postId, comment })
export const commentLikeDisLike = ({ postId, commentId, likedUser }) => instance.put(`/commentLikeAndDisLike`, { postId, commentId, likedUser })
export const postReport = ({ userId, mainId, postId }) => instance.put(`/reportPost`, { userId, mainId, postId })
export const getUserData = (userId) => instance.get(`/myData?userId=${userId}`)
export const getSearch = (data) => instance.get(`/search?data=${data}`)
export const getMyPosts = (userId) => instance.get(`/profile?userId=${userId}`)
export const userProfileData = (userId) => instance.get(`/profiledata?userId=${userId}`)
export const FollowList = (followList) => instance.get(`/FollowersList?FollowersList[]=${followList}`)
export const FollowUser = ({ userId, myId }) => instance.post(`/followAndUnfollow`, { userId, myId })
export const MessageUser = ({ myId, userId }) => instance.post(`/chat/newChat`, { myId, userId })
export const Friends = (userId) => instance.get(`/friends?userId=${userId}`)
export const getOnlineFriends = (users) => instance.get(`/onlineFriends?friendId[]=${users}`)
export const postUpdate = (data) => instance.put(`/updatePost`, data)
export const newConversation = (data) => instance.post(`/chat/conversation`, data)
export const getChatIds = (userId) => instance.get(`/chat/chatList?userId=${userId}`)
export const getConversationData = (id) => instance.get(`/chat/conversation?conversationId=${id}`)
export const getChatUser = (userIds) => instance.get(`/chat/users?friendId=${userIds}`)


