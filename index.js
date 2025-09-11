const allCategories=document.getElementById('categories-pet');
const loadPetCategoriesContainer=document.getElementById('loadPetCategories');
const loadCategories=async ()=>{
    const url= await fetch (`https://openapi.programming-hero.com/api/peddy/categories `) ;
    const data=await url.json();
    displayCategories(data.categories);
    
}
const displayCategories=async(categories)=>{
   
    
  categories.forEach(category => {
     allCategories.innerHTML+=`
    
     <div
            class="  category  py-2 gap-2 flex-1 rounded-full border-1 border-gray-300 flex justify-center items-center "
          >
            <img class='w-[56px] h-[56px]' src="${category.category_icon}" alt="" />

            <h1 class="font-bold text-xl">${category.category}</h1>
          </div>
    `

   
  });
   allCategories.addEventListener('click',(e)=>{
   const category=e.target.closest(".category" );
    
        if (category) {
          document.querySelectorAll('.category').forEach(c=> c.classList.remove('active'))
           category.classList.add('active')
          
        }
    })
   
}
const loadPetCategories=async()=>{
  if (loadPetCategoriesContainer.length === 0) {
    console.log('heleo');
    
  }
}


loadCategories()