// const logoutBtn = document.querySelector(".logoutBtn");

// logoutBtn.addEventListener("click", () => {
//   localStorage.removeItem("user");
//   window.location.reload();
// });

// if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
//   if (localStorage.getItem("user") === null) {
//     window.location.assign("http://127.0.0.1:5500/signin.html");
//   } else {
//     window.location.assign("http://127.0.0.1:5500/home.html");
//   }
// }

// Set Posts

// const content = document.querySelector(".content");

let renderType = {};

if (localStorage.getItem("renderType") === null) {
  let renderTypeTemp = {
    listView: true,
    listImgView: false,
  };
  localStorage.setItem("renderType", JSON.stringify(renderTypeTemp));
}

const container = document.querySelector(".container");
const list = document.querySelector(".list");
const listWImg = document.querySelector(".list-w-img");
const gridView = document.querySelector(".grid-view");

list.addEventListener("click", () => {
  let renderTypeTemp = JSON.parse(localStorage.getItem("renderType"));
  renderTypeTemp.listView = true;
  renderTypeTemp.listImgView = false;
  localStorage.setItem("renderType", JSON.stringify(renderTypeTemp));
  window.location.reload();
  listWImg.classList.remove("active");
});

listWImg.addEventListener("click", () => {
  let renderTypeTemp = JSON.parse(localStorage.getItem("renderType"));
  renderTypeTemp.listView = false;
  renderTypeTemp.listImgView = true;
  localStorage.setItem("renderType", JSON.stringify(renderTypeTemp));
  window.location.reload();
});

gridView.addEventListener("click", () => {
  container.classList.add("close");
  gridContainer.classList.remove("close");
});

renderType = JSON.parse(localStorage.getItem("renderType"));

let posts = [
  {
    img: "https://i.guim.co.uk/img/media/5452d4f6b3662390f435c830c3363324b691f780/0_391_4434_2660/master/4434.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=e00398e0a6ebf8e4155fffc401163153",
    title: "MCLAREN F1",
    date: "15:30 - 08 Oct 2021",
    located: "Turkey",
    header: "FIA F1 WORLD CHAMPIONSHIP 2021",
    subHeader: "2021 Turkish Grand Prix",
    desc: "Practice 1",
    rate: [
      { name: "#1 Yuki Tsunoda", higtlight: false },
      { name: "#2 Lando Narris", higtlight: false },
      { name: "#3 Lewis Hamilton", higtlight: false },
      { name: "#4 Daniel Riccardo", higtlight: true },
    ],
    cmt: 200,
    like: 310,
  },
];

for (let i = 0; i < 4; i++) {
  posts = [...posts, ...posts, ...posts];
}

let number = 0;
const numberMore = 20;
function loadingPost(number) {
  let temp = number;
  while (temp < number + numberMore) {
    const content = document.createElement("div");
    container.appendChild(content);

    let topNameString = "";

    posts[number].rate.map((rated) => {
      let temp = `<div class='${
        rated.higtlight ? "highlight" : ""
      } my-4' >${rated.name.toString()}</div>
      `;
      topNameString += temp;
    });

    content.innerHTML = `
    <div class="content df justify-between align-center my-50">
    ${
      renderType.listView
        ? `<div class="box1 title">${posts[number].title}</div>`
        : ""
    }
    ${
      renderType.listImgView
        ? `<div class='box1 ' >
                                  <img src="${posts[number].img}" class="box1 img"></img>
                                </div>`
        : ""
    }
  
    <div class="box2 timeNLocation df justify-center">
      <div class="timeNLocationDetail">
        ${
          renderType.listImgView
            ? `<div class="box2 title title-img-view">${posts[number].title}</div>`
            : ""
        }
        <div>
          <div class="dateTime my-4"> <i class="blur-icon-8 fa-solid fa-clock"></i> ${
            posts[number].date
          }</div>
          <div class="located my-12"><i class="blur-icon-8 fa-solid fa-location-dot"></i> ${
            posts[number].located
          }</div>
        </div>
      </div>
    </div>
  
    <div class="box3">
      <div class="box3-detail">
        <div class="header font-bold my-4">${posts[number].header}</div>
        <div class="subHeader font-bold my-4">${posts[number].subHeader}</div>
        <div class="desc my-4">${posts[number].desc}</div>
      </div>
    </div>
  
    <div class="box4">${topNameString}
    </div>
  
    <div class="box5 df justify-around">
      <div class="cmt df blur-icon-8">
        <div class='' >
          <i class="fa-solid fa-comment"></i>
        </div> ${posts[number].cmt}
      </div>
  
      <div class="like df blur-icon-8">
        <div class='' >
          <i class="fa-solid fa-heart"></i>
        </div> ${posts[number].like}
      </div>
    </div>
    
  </div>
    `;
    temp++;
  }
}

loadingPost(number);
number += numberMore;

window.addEventListener("scroll", function () {
  if (
    this.window.scrollY + this.window.innerHeight >=
    document.documentElement.scrollHeight
  ) {
    loadingPost(number);
    number += numberMore;
  }
});

const gridContainer = document.querySelector(".grid-container");

let numberGrid = 0;
let numberGridMore = 20;

function loadingPostGrid(numberGrid) {
  let temp = numberGrid;

  while (temp < numberGrid + numberGridMore) {
    const grid = document.createElement("div");
    grid.classList.add("grid");
    gridContainer.appendChild(grid);

    let topNameString = "";

    posts[temp].rate.map((rated) => {
      let temp = `<div class='${
        rated.higtlight ? "highlight" : ""
      } my-4' >${rated.name.toString()}</div>
      `;
      topNameString += temp;
    });

    grid.innerHTML = `
    <div class="item" >
      <img src=${posts[temp].img} ></img>
      <div class="title">${posts[temp].title}</div>

      <div class="timeDate">
        <div class="timeNLocationDetail df">
          <div class="dateTime"> <i class="fa-solid fa-clock"></i> ${posts[temp].date}</div>
          <div class="located"><i class="fa-solid fa-location-dot"></i> ${posts[temp].located}</div>
        </div>
      </div>

      <div class="subHeader">${posts[temp].subHeader}</div>

      <div class="topName">${topNameString}</div>

      <div class="interaction df ">
        <div class="cmt df blur-icon-8 my-4">
          <i class="fa-solid fa-comment"></i>
          <div>${posts[temp].cmt}</div>
        </div>

        <div class="like df blur-icon-8 my-4">
          <i class="fa-solid fa-heart"></i>
          <div>${posts[temp].like}</div>
        </div>
      </div>
    </div>`;

    temp++;
  }

  numberGrid = temp;
}

loadingPostGrid(numberGrid);
numberGrid += numberGridMore;

window.addEventListener("scroll", function () {
  if (
    this.window.scrollY + this.window.innerHeight >=
    document.documentElement.scrollHeight
  ) {
    loadingPostGrid(number);
    numberGrid += numberGridMore;
  }
});

/////////////////////////////////

const data1Btn = document.querySelector(".data1-btn");
const data2Btn = document.querySelector(".data2-btn");
const data1 = document.querySelector(".data1");
const data2 = document.querySelector(".data2");

data1Btn.addEventListener("click", () => {
  data1.classList.remove("close");
  data2.classList.add("close");
});

data2Btn.addEventListener("click", () => {
  data1.classList.add("close");
  data2.classList.remove("close");
});

async function axiosApi() {
  const data = await axios({
    method: "post",
    url: "https://test.fandelo.com/api/portal/fan/home",
    responseType: "stream",
    headers: {
      authorization: "Bearer 838ba62c-1695-47db-94ca-6cdedc2b9ea9",
    },
    data: { status: 1, pageSize: 50, pageIndex: 0 },
  });

  return data.data.responseData.data;
}

let data = await axiosApi();
console.log(data);

const data2Container = document.querySelector(".data2__container");

function render(listPost, type) {
  data2Container.innerHTML = "";

  listPost.map((post) => {
    if (type === "all") {
      const item = document.createElement("div");
      item.classList.add("item");
      data2Container.appendChild(item);

      item.innerHTML = `
        ${
          post.externalImageUrl
            ? `<img class="img" alt="img" src="${post.externalImageUrl}" />`
            : ""
        }
        <div class="header my-12">${post.talent.displayName}</div>
        ${
          post.description
            ? `<div class="desc">${
                post.description.length > 200
                  ? post.description.substr(0, 200) + "..."
                  : post.description
              }</div>`
            : ""
        }
        ${post.title ? `<div class="desc">${post.title}</div>` : ""}
        <div class="interaction df">
          <div class="like-btn">
            <i class="fa-solid fa-heart"></i>
            ${post.totalEmotion.totalLove}
          </div>
          <div class="comment-btn">
            <i class="fa-solid fa-comment"></i>
            ${post.totalComment}
          </div>
        </div>
      `;

      ///////// Like Handler
      item.querySelector(".like-btn").addEventListener("click", function () {
        likeHandler(
          item.querySelector(".like-btn"),
          post,
          item.querySelector(".liked")
        );
        // console.log(post);
      });
    } else {
      if (post.collection === type) {
        const item = document.createElement("div");
        item.classList.add("item");
        data2Container.appendChild(item);

        item.innerHTML = `
        ${
          post.externalImageUrl
            ? `<img class="img" alt="img" src="${post.externalImageUrl}" />`
            : ""
        }
        <div class="header my-12">${post.talent.displayName}</div>
        ${
          post.description
            ? `<div class="desc">${
                post.description.length > 200
                  ? post.description.substr(0, 200) + "..."
                  : post.description
              }</div>`
            : ""
        }
        ${post.title ? `<div class="desc">${post.title}</div>` : ""}
        <div class="interaction df">
          <div class="like-btn">
            <i class="fa-solid fa-heart"></i>
            ${post.totalEmotion.totalLove}
          </div>
          <div class="comment-btn">
            <i class="fa-solid fa-comment"></i>
            ${post.totalComment}
          </div>
        </div>
        `;

        ///////// Like Handler
        item.querySelector(".like-btn").addEventListener("click", function () {
          likeHandler(
            item.querySelector(".like-btn"),
            post,
            item.querySelector(".liked")
          );
          // console.log(post);
        });
      }
    }
  });
}

render(data, "all");
const select = document.querySelector("#selection");

select.addEventListener("change", function (e) {
  render(data, e.target.value);
});

////////////// Like

function likeHandler(element, param, isLiked) {
  for (let post of data) {
    if (post.id === param.id) {
      if (isLiked === null) {
        post.totalEmotion.totalLove += 1;
        element.classList.add("liked");

        element.innerHTML = `
          <i class="fa-solid fa-heart"></i>
          ${post.totalEmotion.totalLove}
        `;
      } else {
        post.totalEmotion.totalLove -= 1;
        element.classList.remove("liked");

        element.innerHTML = `
          <i class="fa-solid fa-heart"></i>
          ${post.totalEmotion.totalLove}
        `;
      }
    }
  }
  console.log(element, param, isLiked);
}
