let most_popular_container = document.querySelector('#most-popular-content');
let posts_cont = document.querySelector('.posts-content');
// fetching posts from 

let posts = fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then((json) => {
    // creating most popular post cards with image and title of the post at the back
    create_most_pop(json);
    // creating posts fetched from jsonplaceholder with title , desc and body of the post
    create_posts(json);

})

function create_most_pop(json) {
    posts = json.slice(0,3);
    for(let i =0 ;i<3;i++) {
        let d = document.createElement('div');
        d.classList.add('flip-card');
        let d_i = document.createElement('div');
        d_i.classList.add('flip-card-inner');
        d.appendChild(d_i);
        let d_i_f = document.createElement('div');
        d_i_f.classList.add('flip-card-front');
        d_i.appendChild(d_i_f);
        let img = document.createElement('img');
        img.src = `../images/${i+3}.jpg`;
        d_i_f.appendChild(img);
        let d_i_b = document.createElement('div');
        d_i_b.classList.add('flip-card-back');
        let title = document.createElement('h2');
        title.innerHTML = `${posts[i].title}`;
        d_i_b.appendChild(title);
        d_i.appendChild(d_i_b);

        most_popular_container.appendChild(d);
    };

}

function create_posts(json) {
    let posts = json;
    posts.map(post =>{
        post.completed = true;
        let div = document.createElement('div');
        div.classList.add('post-card');
        // extract name
        let name = document.createElement('h2');
        name.classList.add('post-card-name');
        name.innerHTML=`${post.title.slice(0,10)}`;
        div.appendChild(name);
        //extract title
        let t = document.createElement('h4');
        t.classList.add('post-card-title');
        t.innerHTML=`${post.title}`;
        div.appendChild(t);
        //extract body
        let b = document.createElement('p');
        b.classList.add('post-card-body');
        b.innerHTML=`${post.body}`;
        div.appendChild(b);
        //if completd 
        let flag = document.createElement('p');
        flag.innerHTML= "* status";
        post.completed ?  flag.classList.add('green') : flag.classList.add('red');
        div.appendChild(flag);
        // append all posts container
        posts_cont.appendChild(div);
    })

}


