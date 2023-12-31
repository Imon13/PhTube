const handleCatageroy = async ()=>{
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const data = await res.json()
    const category = data.data
    // console.log(category)
    //  console.log(data)
    const tabContainer = document.getElementById('tab-container')
    category.forEach(category => {
        const div = document.createElement('div')
        div.innerHTML=`
        <a onclick="showDetails('${category.category_id}')" class="tab ">${category.category}</a> 
        `
        tabContainer.appendChild(div)
        
    });
}
const showDetails = async (categoryId) =>{
    //  console.log(categoryId)
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`)
    const data = await res.json()
      // console.log(data.data)
    const News = data.data
    console.log(News)
    const cardContainer = document.getElementById('card-container')
    cardContainer.innerHTML=''
    News.forEach((news)=>{
        const div = document.createElement('div')
        div.innerHTML = `
        
        
        <div class="card bg-base-100 shadow-xl ">
        <div class="h-52">
        <figure><img  src="${news?.thumbnail}" /></figure>
  
      </div>
      <div class="card-body">
        <h2 class="card-title">${news?.title}</h2>
        <div class="flex justify-center">
       <div class="w-16 justify-center">
        <figure><img class="rounded-full"  src="${news?.authors[0].profile_picture}" /></figure>
        </div>
      <p class="items-center m-auto ml-2">${news?.authors[0].profile_name}</p> </br>
      <h2>Views:${news?.others.views}</h2>
    </div>
        
        
        
    </div>

        `
        cardContainer.appendChild(div)
        
       

    });

}
const handledBlog = ()=>{
  const blog = document.getElementById('blog-container')
  blog = window.location.href='blog.html'
}


handleCatageroy()
showDetails("1000")