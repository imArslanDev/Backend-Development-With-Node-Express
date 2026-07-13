const cartData = ([...items]) => {
    if(items.length > 0) {
        items.length && items.forEach(item => {
            console.log(item)
        })
    } else {
        console.log("No Data")
    }

}

module.exports = cartData