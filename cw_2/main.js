let content = [];

async function getResponse() {
    let response = await fetch("../cw_2/shoping.json");
    console.log("response:\n", response, "\n /response: \n");
    let data = await response.text();
    console.log("await response.text()\n", data);
    content = JSON.parse(data);
    content = content.slice(0, 9);
    console.log("content.slice(0, 9)", content);
    
    renderProducts(content);
}

function renderProducts(products) {
    let node_for_insert = document.getElementById("node_for_insert");
    node_for_insert.innerHTML = '';
    products.forEach(item => {
        node_for_insert.innerHTML += `
            <li style="width: 210px" class="d-flex flex-column m-1 p-1 border bg-body">
                <img style="width: 180px" class="align-self-center" src="${item.img}">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text">${item.description}. Цена ${item.price} р.</p>
                <input type="hidden" name="vendor_code" value="${item.vendor_code}">
                <p class="card-text">Заказать <input class="w-25" type="number" name="amount" value="0"></p>
            </li>
        `;
    });
}

document.getElementById("searchInput").addEventListener("input", function() {
    let searchValue = this.value.toLowerCase();
    let filteredContent = content.filter(item => 
        item.title.toLowerCase().includes(searchValue)
    );
    renderProducts(filteredContent);
});

document.getElementById("sortSelect").addEventListener("change", function() {
    let sortBy = this.value;
    let sortedContent = [...content];

    if (sortBy === "price") {
        sortedContent.sort((a, b) => a.price - b.price);
    } else if (sortBy === "title") {
        sortedContent.sort((a, b) => a.title.localeCompare(b.title));
    }

    renderProducts(sortedContent);
});

getResponse();
