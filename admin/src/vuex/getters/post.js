/*  header-comment
/*  file   : post
/*  author : loasu
/*  date   : 2017-6-2 14:50:11
/*  last   : 2017-6-2 17:8:20
*/
export const postList = ({
  post
}) => {
  return post.all;
}
export const articleIdOfPost = ({
  post
}) => {
  return post.articleId;
}
export const currentPostId = ({
  post
}) => {
  return post.currentPostId;
}
export const currentPostIndex = ({
  post
}) => {
  return post.currentPostIndex;
}
export const postTitle = ({
  post
}) => {
  return post.title;
}
export const postSaved = ({
  post
}) => {
  return post.postSaved;
}
export const postTitleSaved = ({
  post
}) => {
  return post.postTitleSaved;
}
