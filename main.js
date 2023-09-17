const markAll =document.querySelector('#mark-all')
const numberElement =document.querySelector('#number')
const markPost =document.querySelectorAll('.post')

markPost.forEach(post => {
    post.addEventListener('click', ()=>{
        post.querySelector('.not-read').classList.remove('not-read')
        updateNotifications()
    })
     
    
});

markAll.addEventListener('click', ()=>{
    const notReadElement =document.querySelectorAll('.not-read')
    console.log(notReadElement)
    console.log(notReadElement.length)
    notReadElement.forEach((notReadElement) => {
        notReadElement.classList.remove('not-read')
    });
    updateNotifications()

})

const updateNotifications = () =>{
    const notReadElementErase =document.querySelectorAll('.not-read')
    console.log(notReadElementErase)
    console.log(notReadElementErase.length)
    numberElement.innerText =notReadElementErase.length
}