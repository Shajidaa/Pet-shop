const allCategories = document.getElementById('categories-pet');

const categoryImage = document.getElementById('category-image');
const loadCategories = async () => {
  const url = await fetch(`https://openapi.programming-hero.com/api/peddy/categories `);
  const data = await url.json();
  displayCategories(data.categories);

}
const displayCategories = async (categories) => {


  categories.forEach(category => {
    console.log(category.category);

    allCategories.innerHTML += `
    
     <div id=${category.category}
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

           const items=category.getAttribute('id')
           loadPetCategories(items);
           
        }

    })

}
const loadPetCategories = (category) => {

  let url = ``;
  if (category) {
    url = `https://openapi.programming-hero.com/api/peddy/category/${category}`
  } else {
    url = `https://openapi.programming-hero.com/api/peddy/pets`
  }
  fetch(url)
    .then(res => res.json())
    .then(res =>displayPetCategories (res.data||res.pets) )
}

const displayPetCategories = (pets) => {
  const loadPetCategoriesContainer = document.getElementById('loadPetCategories');
 loadPetCategoriesContainer.innerHTML = ``;
  pets.forEach(pet => {
    loadPetCategoriesContainer.innerHTML += `
    
   <div class="container border-1 border-gray-200 p-5 rounded-xl shadow">
            <div>
              <img class="mb-5 w-full rounded-xl" src="${pet.image}" alt="pet image" />
            </div>
            <div>
              <h1 class="text-2xl font-bold mb-2">${pet.pet_name}</h1>
              <div>
                <p class="text-[#6e6c6c] font-normal text-base mb-2">
                  <i class="fa-regular fa-square"></i> Breed :
                </p>
                <p class="text-[#6e6c6c] font-normal text-base mb-2">
                  <i class="fa-solid fa-calendar"></i> Birth :
                </p>
                <p class="text-[#6e6c6c] font-normal text-base mb-2">
                  <i class="fa-solid fa-mars-and-venus"></i> Gender :
                </p>
                <p class="text-[#6e6c6c] font-normal text-base mb-2">
                  $ Price :
                </p>
              </div>
            </div>
            <hr class="text-gray-300" />
            <div class="flex justify-between items-center pt-4">
              <p class="btn border-1 rounded-lg border-[#0E7A81]">
                <i class="lg:text-xl text-base text-[#6e6c6c] fa-regular fa-thumbs-up"></i>
              </p>
              <p
                class="btn border-1 rounded-lg border-[#0E7A81] text-[#0E7A81] font-bold lg:text-lg text-base"
              >
                Adopt
              </p>
              <p
                class="btn border-1 rounded-lg border-[#0E7A81] text-[#0E7A81] font-bold lg:text-lg text-base"
              >
                Details
              </p>
            </div>
          </div>
    
    `
  })
}

loadPetCategories()
loadCategories()
