const products = [
    'dell hardcorte i29 200GB laptop lg',
    'iphone 1TB camera flashlight Phone',
    'yellow laptop with black camera lg',
    'dell 1x59 lenovo commercial yoga laptop ',
    'LG supernova laptop ',
    'HTC low price phone lg',
    'dell purple color phone with Laptop '
]
/* 1.index of */
const serching = 'lg';
const output = [];
for (const product of products) {
    if (product.toLowerCase().lastIndexOf(serching.toLowerCase()) != -1) {
        // output.push(product);
        /* এ টা ভাল করে বুজতে হবে ১১ টার সাপোর্ট শেসোনে
         */
    }
}
// console.log(output);

/* 2.includes */
for (const product of products) {
    if (product.toLowerCase().includes(serching.toLowerCase())) {
        // output.push(product);
    }
}
// console.log(output);

/* 3. start with  */
for (const product of products) {
    if (product.toLowerCase().startsWith(serching.toLowerCase())) {
        // output.push(product);
    }
}
// console.log(output);

/* 4.ends with  */
for (const product of products) {
    if (product.toLowerCase().endsWith(serching.toLowerCase())) {
        output.push(product);
    }
}
console.log(output);
