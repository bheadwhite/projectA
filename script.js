window.onload = () => {
  var one = document.getElementById("one")
  var two = document.getElementById("two")
  var three = document.getElementById("three")

  var blue = document.getElementsByClassName("blue")[0]
  var green = document.getElementsByClassName("green")[0]
  var yellow = document.getElementsByClassName("yellow")[0]

  var oneTotal = document.getElementById("one_total")
  var twoTotal = document.getElementById("two_total")
  var threeTotal = document.getElementById("three_total")

  blue.addEventListener("click", function() {
    var oneNum = Number(one.innerHTML)
    var twoNum = Number(two.innerHTML)
    var threeNum = Number(three.innerHTML)

    one.innerHTML = Number(one.innerHTML) + 1
    oneTotal.innerHTML = oneNum + twoNum + threeNum
  })
  green.addEventListener("click", function() {
    var oneNum = Number(one.innerHTML)
    var twoNum = Number(two.innerHTML)
    var threeNum = Number(three.innerHTML)

    two.innerHTML = twoNum + 1
    twoTotal.innerHTML = oneNum + twoNum + threeNum
  })
  yellow.addEventListener("click", function() {
    var oneNum = Number(one.innerHTML)
    var twoNum = Number(two.innerHTML)
    var threeNum = Number(three.innerHTML)

    three.innerHTML = threeNum + 1
    threeTotal.innerHTML = oneNum + twoNum + threeNum
  })

  one.addEventListener("click", function() {
    var oneNum = Number(one.innerHTML)
    var twoNum = Number(two.innerHTML)
    var threeNum = Number(three.innerHTML)

    one.innerHTML = oneNum - 1
    oneTotal.innerHTML = oneNum + twoNum + threeNum
  })
  two.addEventListener("click", function() {
    var oneNum = Number(one.innerHTML)
    var twoNum = Number(two.innerHTML)
    var threeNum = Number(three.innerHTML)

    two.innerHTML = twoNum - 1
    twoTotal.innerHTML = oneNum + twoNum + threeNum
  })
  three.addEventListener("click", function() {
    var oneNum = Number(one.innerHTML)
    var twoNum = Number(two.innerHTML)
    var threeNum = Number(three.innerHTML)

    three.innerHTML = threeNum - 1
    threeTotal.innerHTML = oneNum + twoNum + threeNum
  })
}
