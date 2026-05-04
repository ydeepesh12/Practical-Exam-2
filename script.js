const btn = document.createElement('button');
btn.id = 'likeBtn';
btn.textContent = 'Like';
document.body.appendChild(btn);


const para = document.createElement('p');
para.textContent = 'Total Likes: ';
const counter = document.createElement('span');
counter.textContent = '0';
para.appendChild(counter);
document.body.appendChild(para);


let count = 0;
let liked = false;


btn.addEventListener('click', function () {
    liked = !liked;
    count = liked  count + 1 : count - 1;

    if (liked) {
        btn.textContent = ' Liked!';
        btn.classList.add('liked');
    } else {
        btn.textContent = 'Like';
        btn.classList.remove('liked');
    }

    counter.textContent = count;

    const msg = liked
        ? `Aapne like kiya Total likes: ${count}`
        : `Like hata diya. Total likes: ${count}`;


    alert(msg);


    console.log('[Like Button]', msg);
});
