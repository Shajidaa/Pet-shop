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
  const displayImage=document.getElementById('category-image');
 loadPetCategoriesContainer.innerHTML = ``;
 displayImage.innerHTML='';
  if (pets.length==0) {
  loadPetCategoriesContainer.innerHTML+=`
  <div class=" grid col-span-3 grid-cols-1 bg-[##f8f8f8]">
<div class="flex flex-col justify-center items-center  gap-3 p-5">
  <img src="./images/error.webp" alt="" />
  <h1 class="text-2xl font-bold">No Information Available</h1>
  <p class="text-xl font-semibold text-center">
    It is a long established fact that a reader will be distracted by the
    readable content of a page when looking at its layout. The point of using
    Lorem Ipsum is that it has a.
  </p>
</div>
</div>
  
  `
 }
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
                  <i class="fa-regular fa-square"></i>  Breed :${pet.breed}
                </p>
                <p class="text-[#6e6c6c] font-normal text-base mb-2">
                  <i class="fa-solid fa-calendar"></i> Birth : ${pet.date_of_birth}
                </p>
                <p class="text-[#6e6c6c] font-normal text-base mb-2">
                  <i class="fa-solid fa-mars-and-venus"></i> Gender : ${pet.gender}
                </p>
                <p class="text-[#6e6c6c] font-normal text-base mb-2">
                  $ Price :  ${pet.price}
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
              <p onclick='details(${pet.petId})'
                class="btn border-1 rounded-lg border-[#0E7A81] text-[#0E7A81] font-bold lg:text-lg text-base"
              >
                Details
              </p>
            </div>
          </div>
    
    `
   displayImage.innerHTML+=`
    <div>
     <img class="mb-5 w-full rounded-xl" src="${pet.image}" alt="pet image" />
            </div>
   `
   
  })
}

const details=async(id)=>{
 const url=await fetch(`https://openapi.programming-hero.com/api/peddy/pet/${id}`)
 const data=await url.json();
 displayDetails(data.petData);
 
}
// "breed": "Golden Retriever",
// "category": "Dog",
// "date_of_birth": "2023-01-15",
// "price": 1200,
// "image": "https://i.ibb.co.com/p0w744T/pet-1.jpg",
// "gender": "Male",
// "pet_details": "This friendly male Golden Retriever is energetic and loyal, making him a perfect companion for families. Born on January 15, 2023, he enjoys playing outdoors and is especially great with children. Fully vaccinated, he's ready to join your family and bring endless joy. Priced at $1200, he offers love, loyalty, and a lively spirit for those seeking a playful yet gentle dog.",
// "vaccinated_status": "Fully",
// "pet_name": "Sunny"


const displayDetails=(pet)=>{
  console.log(pet);
  document.getElementById('detailsContainer').innerHTML='';
document.getElementById('detailsContainer').innerHTML+=`
   <div class="container border-1 border-gray-200 p-5 rounded-xl shadow">
            <div>
              <img class="mb-5 w-full rounded-xl" src="${pet.image}" alt="pet image" />
            </div>
            <div>
              <h1 class="text-2xl font-bold mb-2">${pet.pet_name}</h1>
              <div>
                <p class="text-[#6e6c6c] font-normal text-base mb-2">
                  <i class="fa-regular fa-square"></i> Breed :${pet.breed}
                </p>
                <p class="text-[#6e6c6c] font-normal text-base mb-2">
                  <i class="fa-solid fa-calendar"></i> Birth : ${pet.date_of_birth}
                </p>
                <p class="text-[#6e6c6c] font-normal text-base mb-2">
                  <i class="fa-solid fa-mars-and-venus"></i> Gender : ${pet.gender}
                </p>
                <p class="text-[#6e6c6c] font-normal text-base mb-2">
                  $ Price :  ${pet.price}
                </p>
              </div>
              </div> <P>Details information :${pet.pet_details}</p>
            </div>
            <hr class="text-gray-300" /> 
                
          </div>
          </div>
            <div class="modal-action">
              <form method="dialog">
                <!-- if there is a button in form, it will close the modal -->
                <button class="btn w-full btn-wide">Close</button>
              </form>
            </div>


`
document.getElementById("my_modal_5").showModal();
  
}




loadPetCategories()
loadCategories()

