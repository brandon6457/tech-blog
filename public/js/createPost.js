const createPost = async (event) => {
   event.preventDefault();

   const title = document.querySelector('#post-title').value.trim();
   const body = document.querySelector('#post-body').value.trim();


   const response = await fetch('/api/posts/', {
       method: 'POST',
       body: JSON.stringify({
           title,
           body,
       }),
       headers: { 'Content-Type': 'application/json' },
   });

   if (response.ok) {
       document.location.replace('/dashboard');
   } else {
       alert('Failed to post');
   }
};


document.querySelector('#create-post').addEventListener('click', createPost)