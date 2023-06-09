const newPost = () => {
   document.location.replace('/new-post');
}

document.getElementById('new-post').addEventListener('click', newPost)

let allPosts = document.querySelectorAll('.post-title');
allPosts.forEach((post) => post.addEventListener('click', async (event) => {
   const response = await fetch(`/edit-post/${event.target.dataset.postId}`);
   console.log(response.status)
   if(response.status === 404){
       document.location.replace('/')
   }
   else{
       document.location.replace(`/edit-post/${event.target.dataset.postId}`)
   }
}))