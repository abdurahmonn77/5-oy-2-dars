let elCountryList = document.querySelector('.list')
let elSelect = document.querySelector('.capital-select')
let elSearchInput = document.querySelector('.search-input')

function renderCountries(arr, list) {
    // list.innerHTML = null
    arr.map(item => {
        let elCountryItem = document.createElement('li')
        elCountryItem.className = "w-[264px] rounded-md overflow-hidden bg-white mt-[48px]"
        elCountryItem.innerHTML = `
        <img class="w-full h-[160px] object-cover" src=${item.flag} alt="" width="100" height="160">
        <div class="p-5">
        <h2 class="font-bold mb-2 text-[22px]">${item.name}</h2>
        <p class="mb-2 ">Population: ${item.population}</p>
        <p class="mb-2 ">Capital: ${item.capital}</p>
        </div>
        <div class="flex items-center justify-between p-2">
            <button class="w-[45px] h-[45px] border-[2px] border-black rounded-full flex items-center justify-center">
            <img src="./images/heart.svg" width="20" height="20">
            </button>
            <button class="w-[45px] h-[45px] border-[2px] border-black rounded-full flex items-center justify-center">
            <img src="./images/saved.svg" width="20" height="20">
            </button>
        </div>
        `
        list.append(elCountryItem)
    })
}
renderCountries(countrys, elCountryList)

//SELECT PART
function renderSelectOption(arr, list) {
    arr.forEach(item => {
        let elOption = document.createElement("option")
        elOption.textContent = item.capital
        elOption.value = item.capital.toLowerCase()
        list.append(elOption)
    })
}
renderSelectOption(countrys, elSelect)

elSelect.addEventListener("change", function(e){
    const result = countrys.filter(item => item.capital.toUpperCase() == e.target.value)
    renderCountries(result, elCountryList)
})
// SELECT PART END


// SEARCH PART 
elSearchInput.addEventListener("input", function(e){
    const value = e.target.value.toLowerCase()
    const searchedList = countrys.filter(item => item.name.toLowerCase().includes(value))
    renderCountries(searchedList, elCountryList)
})

// SEARCH PART END