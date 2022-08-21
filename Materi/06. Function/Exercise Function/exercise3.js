var gajiP = [9100000, 9800000, 9500000, 10300000, 9300000]

var result = gajiP.filter((gaji) => {
    var gajiPersen = (gaji - ((gaji * 5)/100))
    return gajiPersen > 9000000

})
console.log(result);