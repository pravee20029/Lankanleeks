// ===== MOVIE DATA =====
const movies = [
  {
    image: "https://i.ibb.co/Z66GbR1q/Screenshot-20250331-123130.jpg",
    link: "https://mega.nz/file/Wp5FXZBA#t3G2l12alo-W_cAbe0FYLugDdcO8ft51cAB_o3VVPkI"
  },
  {
    image: "https://i.ibb.co/xrTvFrr/Screenshot-20250331-123146.jpg",
    link: "https://mega.nz/file/uxZTxSTZ#XfaVLU564j4Le0aaJL-ItLxMaPzdQ3YYrm0OH30H2k4"
  },
  {
    image: "https://i.ibb.co/4kpdKz2/Screenshot-20250331-080927.jpg",
    link: "https://mega.nz/file/DkwBAJbD#yQfkkKxIhicqqPY4iQq9GW-C2rpmmuQTD33dMmaS5ZU"
  },
  {
    image: "https://i.ibb.co/21Z4XwHR/Screenshot-20250330-213610.jpg",
    link: "https://mega.nz/file/z8wjgC7J#0rT7M0CAhPaz3WLLG8ot_aGxqaYZDxNNc8wojBuUUMA"
  },
  {
    image: "https://i.ibb.co/fG0xDZW9/Screenshot-20250330-213553.jpg",
    link: "https://mega.nz/file/2hYyHYLa#hFY9CAqIvtawwaAu_niTN25SG-h--Ymz9ivkEqNxzBk"
  },
  {
    image: "https://i.ibb.co/sx2JZvL/Screenshot-20250330-213620.jpg",
    link: "https://mega.nz/file/fwgBFAzI#mytLxpPfmLcKq7LdSlVRucr7UVmXQLmKl8k3Kh_s51k"
  },
  {
    image: "https://i.ibb.co/TqdYb9SG/Screenshot-20250330-213559.jpg",
    link: "https://mega.nz/file/G9wUFRiC#VLrMhqYYM511D7SINqB12is4Y_ORw_cwnvkhAj0--U0"
  },
  {
    image: "https://i.ibb.co/5XdQWpyf/Screenshot-20250330-213630.jpg",
    link: "https://mega.nz/file/WwgW3LhS#tP0eDps5bQ8HBRqGoryOlVmwrbaBYPUnKlF2zH3FeoI"
  },
{
    image: "https://i.ibb.co/0RTF2ccr/Screenshot-20250330-213656-2.jpg",
    link: "https://mega.nz/file/ykImmAaZ#mOXV7-ZOvVaKI6Q8CFzUTP1xpaXCHLwvcnxvlD_giEA"
  },
  {
    image: "https://i.ibb.co/kgGMkG8Q/Screenshot-20250330-213615.jpg",
    link: "https://mega.nz/file/S1w3Fbwa#MqbREdUxn1DqQpq6mgjv6Bopi5VXpsEd4ZKFTMnaEKA"
  },
  {
    image: "https://i.ibb.co/vCvmzzbJ/Screenshot-20250330-213634-2.jpg",
    link: "https://mega.nz/file/S1w3Fbwa#MqbREdUxn1DqQpq6mgjv6Bopi5VXpsEd4ZKFTMnaEKA"
  },
  {
    image: "https://i.ibb.co/NdWdBjNc/Screenshot-20250330-213604-2.jpg",
    link: "https://mega.nz/file/qgx1CYha#7fZLbTBsLNxFvUeRK0tJVkSZDry1ePZ3sPo2ekjDNgU"
  },
  {
    image: "https://i.ibb.co/Rns85L6/Screenshot-20250330-151428.jpg",
    link: "https://mega.nz/file/T4YWXIiZ#9Bq34tFnF57xjZx4RWIH2S_09Jc1fVTZGR_Gm9NajOI"
  },
  {
    image: "https://i.ibb.co/7JH4rd3j/Screenshot-20250330-151458.jpg",
    link: "https://mega.nz/file/DwZlAbRA#NXYi7LtoEPVq0tZS5X9QCyFuElSiA5CYDVkLwIf7zjo"
  },
  {
    image: "https://i.ibb.co/KjLjrwgJ/Screenshot-20250330-151413.jpg",
    link: "https://mega.nz/file/PkJHwR7b#INSHOS-Hnd87VrDDJIpC2gq8NGtOQUsV7f1XCuMHMXg"
  },
  {
    image: "https://i.ibb.co/mCfCs6Bz/Screenshot-20250330-151439.jpg",
    link: "https://mega.nz/file/LkIRwQxK#VTbb1TILhNMzWwlbwHx2unTCTZwoFuUb6koMUkjcyPs"
  },
{
    image: "https://i.ibb.co/99777dZ6/Screenshot-20250330-151349.jpg",
    link: "https://mega.nz/file/68Ih2YIS#r-J0_Myu-_YVyr38tqIlnLEUwX4MExg823NKyzk3fM8"
  },
  {
    image: "https://i.ibb.co/mrCMF7Z7/Screenshot-20250330-141113.jpg",
    link: "https://mega.nz/file/vwxDzYKQ#XZCo7qCZRyKxxUAShAbKXyPMjLGvqK73T2ibwJaS734"
  },
  {
    image: "https://i.ibb.co/KxShyx2Z/Screenshot-20250330-141033.jpg",
    link: "https://mega.nz/file/7xw1XaAS#ZNeygCE7wj1svewMzMVf586B6A7KirIRPXKr-Y3wIYc"
  },
  {
    image: "https://i.ibb.co/tTgp6p4j/Screenshot-20250330-141041.jpg",
    link: "https://mega.nz/file/j94lkIiR#CXUKye_6AfcKB8EaTnBlJ7I8D_dksajboSEJs7W6198"
  },
  {
    image: "https://i.ibb.co/nsYxGBcm/Screenshot-20250330-141019.jpg",
    link: "https://mega.nz/file/SsQwVLCJ#6NcZbGX9vSILD-khAVEmBBiQmwh-5d-jRUZe_Ej_3tA"
  },
  {
    image: "https://i.ibb.co/SXmSZqbn/Screenshot-20250330-140940.jpg",
    link: "https://mega.nz/file/m4ZwVQZS#qqRt5wlwsZfNX6EoyVS9XqiMf1ff6e5YmLLMBNMW4g0"
  },
  {
    image: "https://i.ibb.co/C3fbk292/Screenshot-20250330-212745.jpg",
    link: "https://mega.nz/file/WwQnmKSK#hMlvpo5ojsDnUcKXgVLHWuNn7g1YdkZYtVzpxHu4Xgg"
  },
  {
    image: "https://i.ibb.co/Q389y3CC/Screenshot-20250330-212656.jpg",
    link: "https://mega.nz/file/q8oAnBSA#BMEcPqdHUwcR1ubBdX5pmRxxM0oWaWSxdDFhIo0SfNY"
  }

];

// ===== SETTINGS =====
const moviesPerPage = 24;
let currentPage = 1;

// ===== DISPLAY MOVIES =====
function displayMovies() {
  const movieGrid = document.getElementById("movieGrid");
  movieGrid.innerHTML = "";

  const start = (currentPage - 1) * moviesPerPage;
  const end = start + moviesPerPage;
  const currentMovies = movies.slice(start, end);

  currentMovies.forEach((movie, index) => {
    const card = document.createElement("div");
    card.classList.add("movie-card");

    const loadingType = currentPage === 1 && index < 3 ? "eager" : "lazy";

    card.innerHTML = `
      <a href="${movie.link}" target="_blank">
        <img src="${movie.image}" loading="${loadingType}">
      </a>
    `;

    movieGrid.appendChild(card);
  });
}

// ===== PAGINATION =====
function setupPagination() {
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";

  const pageCount = Math.ceil(movies.length / moviesPerPage);

  for (let i = 1; i <= pageCount; i++) {
    const btn = document.createElement("button");
    btn.innerText = i;

    if (i === currentPage) {
      btn.style.background = "#ff0055";
    }

    btn.onclick = () => {
      currentPage = i;
      displayMovies();
      setupPagination();
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    pagination.appendChild(btn);
  }
}

// ===== INIT =====
displayMovies();
setupPagination();