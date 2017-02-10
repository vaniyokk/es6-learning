function applyDiscountES5(cost, discount) {
    discount = discount || .10;

    return cost - (cost * discount);
}

function applyDiscountES6(cost, discount = .10) {
    return cost - (cost * discount);
}

function getDefaultDiscount() {
    return .10;
}

function applyDiscountES6function(cost, discount = getDefaultDiscount()) {
    return cost - (cost * discount);
}

console.log(applyDiscountES5(100));
console.log(applyDiscountES6(100));
console.log(applyDiscountES6function(100));