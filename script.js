$(document).ready(function () {
    $(".btn1").click(function () {
        $(".btn1").attr("href", "nike.html")
    })
    $(".btn2").click(function () {
        $(".btn2").attr("href", "adidas.html")
    })
    $("#btn3").click(function () {
        var product = {};
        product = {
            name: "Nike",
            price: "Rs. 2877",
            color: "Black"
        }
        localStorage.setItem("Nike", JSON.stringify(product));
        alert("Product Added to Cart");
        window.location.href = "index.html";
    })
    $("#btn4").click(function () {
        product = {
            name: "Adidas",
            price: "Rs. 3219",
            color: "Green"
        }
        localStorage.setItem("Adidas", JSON.stringify(product));
        alert("Product Added to Cart");
        window.location.href = "index.html";
    })

    $("#btn5").mouseenter(function () {
        let products = [];
        let len = localStorage.length;
        for (let i = 0; i < len; i++) {
            var product = JSON.parse(localStorage.getItem(localStorage.key(i)));
            products.push(product);
        }
        console.log(products);
        populate(products)
    })

    function populate(products) {
        let html_data = "";
        for (product of products) {

            html_data += `<tr>
            <th>Product</th>
            <th>Price</th>
            <th>Action</th>
        </tr><tr><td id="test">${product.name}</td><td>${product.price}</td><td><button id="remove" class="btn btn-danger">Remove</button></td></tr>`;

            // html_data+=`<div value="a" id="test">${product.name}</div>`;
            $("#cart-products").html(html_data);

            $("#remove").click(function () {
                let rem = ($("#test").text());
                localStorage.removeItem(rem);

                location.reload();
                alert("Removed from cart");
            })

        }

    }

    // console.log("ENTERED");
    // console.log($("#test").val());
    // let t=$("#test").html();
    // console.log(t);
    // console.log($("#test").html());
    // let t=document.querySelector("#test");
    // console.log(t);



})