const editPost = async () => {
   const title = document.querySelector('#post-title').value.trim();
   const body = document.querySelector('#post-body').value.trim();
   const id = document.querySelector('.card').dataset.postId
   console.log(id)
   const response = await fetch(`/api/posts/${id}`, {
       method : 'PUT',
       body : JSON.stringify({
           title,
           body,
       }),
       headers: { 'Content-Type': 'application/json' },
   })  

   if (response.ok) {
       document.location.replace('/dashboard');
   } else {
       alert('Failed to update');
   }
}

const deletePost = async () => {
   const id = document.querySelector('.card').dataset.postId
   console.log(id)
   const response = await fetch(`/api/posts/${id}`, {
       method : 'DELETE',
       body : JSON.stringify({
           title,
           body,
       }),
       headers: { 'Content-Type': 'application/json' },
   })  

   if (response.ok) {
       document.location.replace('/dashboard');
   } else {
       alert('Failed to update');
   }
}

document.querySelector('#edit-post').addEventListener('click', editPost)
document.querySelector('#delete-post').addEventListener('click', deletePost)