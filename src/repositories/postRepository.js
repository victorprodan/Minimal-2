import Api from '../services/api';

export default {
  getPosts({ lastPostId }) {
    const params = lastPostId ? `?lastPostId=${lastPostId}` : '';
    return Api.get(`/posts${params}`);
  },

  getPost({ id }) {
    return Api.get(`/posts/${id}`);
  },

  createPost({ text }) {
    return Api.post(`/posts`, { data: { attributes: { text: text, post_type: 'Post text' } } });
  },

  editPost(post, text) {
    return Api.patch(`/posts/${post.id}`, { data: { attributes: { text } } });
  },

  deletePost(post) {
    return Api.delete(`/posts/${post.id}`);
  },

  reportPost(post) {
    return Api.post(`/posts/${post.id}/report`);
  },

  createComment(post, text) {
    return Api.post(`/posts/${post.id}/comments`, { data: { attributes: { text } } });
  },

  editComment(comment, text) {
    return Api.patch(`/posts/${comment.post.id}/comments/${comment.id}`, { data: { attributes: { text } } });
  },

  deleteComment(comment) {
    return Api.delete(`/posts/${comment.post.id}/comments/${comment.id}`);
  },

  reportComment(comment) {
    return Api.post(`/posts/${comment.post.id}/comments/${comment.id}/report`);
  },

  createReply(comment, text) {
    return Api.post(`/posts/${comment.post.id}/comments/${comment.id}/comment_replies`, {
      data: { attributes: { text } }
    });
  },

  editReply(reply, text) {
    return Api.patch(`/posts/${reply.comment.post.id}/comments/${reply.comment.id}/comment_replies/${reply.id}`, {
      data: { attributes: { text } }
    });
  },

  deleteReply(reply) {
    return Api.delete(`/posts/${reply.comment.post.id}/comments/${reply.comment.id}/comment_replies/${reply.id}`);
  },

  reportReply(reply) {
    return Api.post(`/posts/${reply.comment.post.id}/comments/${reply.comment.id}/comment_replies/${reply.id}/report`);
  },

  togglePostlike({ post }) {
    return Api.post(`/posts/${post.id}/like`, { data: {} });
  },

  toggleCommentlike({ comment }) {
    return Api.post(`/posts/${comment.post.id}/comments/${comment.id}/like`, { data: {} });
  },

  toggleReplylike({ reply }) {
    return Api.post(`/posts/${reply.comment.post.id}/comments/${reply.comment.id}/comment_replies/${reply.id}/like`, {
      data: {}
    });
  }
};
