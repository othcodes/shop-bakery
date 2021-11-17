export const calculateTotalPrice = (total = 0, object) => {
    for (let o in object) {
        total += object[o].price * object[o].quantity; 
    }
    return total;
}