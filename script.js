    document.getElementById('phone-inrease').addEventListener('click', function () {
        updateProduct('phone',true)
 
})
    document.getElementById('phone-decrease').addEventListener('click', function() {
        updateProduct('phone',false)

})
    document.getElementById('case-increase').addEventListener('click', function () {
        updateProduct('case',true)
})
    document.getElementById('case-deccrease').addEventListener('click', function () {
        updateProduct('case',false)
        
})

    function updateProduct (product, isIncreasing) {
        const totalInput = document.getElementById(product + '-count')
        const totalInputNumber = parseInt(totalInput.value)
        let productNewCount = totalInputNumber
        if(isIncreasing == true){
            productNewCount = totalInputNumber + 1
        }else if (isIncreasing == false && totalInputNumber > 0){
            productNewCount = totalInputNumber - 1
        }
        totalInput.value = productNewCount
        let totalProduct = 0
        if (product == 'phone'){
            totalProduct = productNewCount * 1299
        }else if (product == 'case'){
            totalProduct = productNewCount * 59
        }
        document.getElementById(product + '-price').innerText = totalProduct
        calculateTotal()
}

    function calculateTotal () {
        const phoneTotalNumber = getInputValue('phone')
        const caseTotalNumber = getInputValue('case')
        const totall = phoneTotalNumber * 1299 + caseTotalNumber * 59 
        document.getElementById('sub-total').innerText = totall

        const tax = Math.round(totall * 0.01)
        document.getElementById('tax-amount').innerText = tax
        const grandTotal = totall + tax;
        document.getElementById('grand-total').innerText = grandTotal
}
    function getInputValue (product){
        const productTotal = document.getElementById(product + '-count')
        const productTotalNumber = parseInt(productTotal.value)
        return productTotalNumber
    
}
    document.getElementById('order-btn').addEventListener('click', function () {
        alert('Your Order Are Submitted')
})