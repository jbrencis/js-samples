// Get remove index
const removeIndex = post.likes
  .map(item => item.user.toString())
  .indexOf(req.user.id);

// Splice out of array
post.likes.splice(removeIndex, 1);
