// amar code

function megaFriend(friends) {
    let mega = '';
    for (const friend of friends) {
        if (isNaN(friend)) {
            if (friend.length > mega.length) {
                mega = friend;
            }
        }
        else {
            mega = 'wrong input';
        }
    }

    return mega;
}
const friends = [1236];
console.log(megaFriend(friends))

// try

// function megaFriend(friends) {
//     if (Array.isArray(friends) == false) {
//         return 'Please provide an array';
//     }

//     let mega = friends[0];
//     for (const friend of friends) {
//         if (friend.length > mega.length) {
//             mega = friend;
//         }
//     }
//     return mega;
// }

// const friends = ['kutub', 'Lion', 'Shamol', 'Sabbir'];
// const myBigBuddy = megaFriend(1234);
// console.log(myBigBuddy);



// if (friends.indexOf('Fox') != -1) {
//     console.log('Lion exists');
// }
// else {
//     console.log("Fox doesn't exists")
// }
// // includes
// if (friends.includes('Lion')) {
//     console.log('Lion exits using includes');
// }

// // concat
// const first = [1, 3, 5];
// const second = [4, 6, 8, 9];
// const combined = first.concat(second);
// console.log(combined);