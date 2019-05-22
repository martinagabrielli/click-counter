// *** Vanilla Javascript *** 

// var button = document.getElementById('clickme');
// count = 0;
// button.onclick = function(){
//     count = count + 1;
//     if (count === 1) {
//         times.innerHTML = 'You have clicked me ' + count + ' time';
//     } else {
//         times.innerHTML = 'You have clicked me ' + count + ' times';
//     }
// };

// *** jQuery ***

var button = jQuery('#clickme');
count = 0;

function clickCounter(){
    count = count + 1;
    if (count === 1) {
        times.innerHTML = 'You have clicked me ' + count + ' time';
    } else {
        times.innerHTML = 'You have clicked me ' + count + ' times';
    }
};

button.on('click', clickCounter);