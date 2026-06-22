import { AUTH_TOKEN, DEV_MODE, BASE_URL } from "./env.js";
import { loader, formatDate } from "./helpers.js";
const PER_PAGE = 20

function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

const form = document.getElementById('search_movies_form')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  search()
})

async function authFetch(url) {
  loader.show()
  try {
    const resp = await fetch(url, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer '+AUTH_TOKEN
      }
    })
    if (!resp.ok){
      throw new Error(resp.status)
    }
    const data = await resp.json()
    return {
      isOK: true,
      data
    }
  } catch(error){
    console.error(error)
    return {
      isOK: false,
      data: null
    }
  } finally {
    loader.hide()
  }
}

async function search() {
  const formData = new FormData(form);
  const serializedString = new URLSearchParams(formData).toString();
  const url = DEV_MODE
    ? 'mocks/movies.json?' + serializedString
    : BASE_URL + 'search/movie?' + serializedString
  const response = await authFetch(url)
  if (response.isOK) {
    showResult(response.data, formData.get('query'))
  } else {
    //TODO: replace with error toast
    alert("Some error occured. Try again, please")
  }
  
}

function showResult(data, query){
  const tmpl = document.getElementById('movie_list_item')
  const result = document.getElementById('result-wrap')
  result.innerHTML = ''
  data.results.forEach(item => {
    const clone = document.importNode(tmpl.content, true)
   
    const img = clone.querySelector('.movie-poster img')
    img.setAttribute('src', 'https://image.tmdb.org/t/p/w300' + item.poster_path)
    img.setAttribute('alt', item.title)
    clone.querySelector('.movie-title').innerText = item.title
    clone.querySelector('.movie-year').innerText = formatDate(item.release_date)
    clone.querySelector('.poster-badge span').innerText = item.vote_average.toFixed(1)
    clone.querySelector('.movie-info button').dataset.id = item.id

    result.appendChild(clone)
  })
  document.getElementById("show-results-text").innerText = `Showing 8 of ${data.total_results} results for "${query}"`
  buildPagination(data.page, data.total_pages)
}

async function getMovieDetail(id) {
  if (localStorage.getItem('movie_' + id)) {
    return JSON.parse(localStorage.getItem('movie_' + id))
  }
  const url = DEV_MODE
    ? 'mocks/detail.json'
    : 'https://api.themoviedb.org/3/movie/' + id
  const response = await authFetch(url)
  if (!response.isOK) {
    //TODO: replace with error toast
    alert("Some error occured. Try again, please")
    return null
  }
  localStorage.setItem('movie_' + id, JSON.stringify(response.data))
  return response.data
}


async function showDetail(id) {
  const item = await getMovieDetail(id)
  if (!item) return
  const detail = document.getElementById('page-detail')

  detail.querySelector('.hero-bg').style.backgroundImage = `url('https://image.tmdb.org/t/p/w1280${item.backdrop_path}')`
  const img = detail.querySelector('.detail-poster-img')
  img.setAttribute('src', 'https://image.tmdb.org/t/p/w500' + item.poster_path)
  img.setAttribute('alt', item.title)
  detail.querySelector('.detail-title').innerText = item.title
  detail.querySelector('.rating-score').innerText = item.vote_average.toFixed(1)
  detail.querySelector('.rating-count').innerText = item.vote_count
  detail.querySelector('.detail-overview').innerText = item.overview

  

  showPage('detail')
}

document.addEventListener('click', (e)=>{
  if(e.target.classList.contains('get-detail-movie-btn')){
    showDetail(e.target.dataset.id)
  }
})


// buildPagination(1, 12)

function goToPage(newPage) {
  document.getElementById('page_val').value = newPage
  search()
  console.log('goToPage: ', newPage);
}

window.goToPage = goToPage

function buildPagination(page, totalPages) {
  let from = 1
  let to = totalPages
  let showFirst = true
  let showLast = true
  if (totalPages <= 6) {
    showFirst = showLast = false
  } else {
    if (page >= 1 && page <= 4) {
      to = 5
      showFirst = false
    } else if (page >= 5 && page <= totalPages - 4) {
      from = page - 2
      to = page + 2
    } else if (page >= totalPages - 4) {
      from = totalPages - 4
      showLast = false
    }
  }

  let items = ''
   items += `<li>
          <button class="page-btn" ${page == 1 ? 'disabled' : ''} onclick="goToPage(${page-1})">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
        </li>`
  
  if (showFirst) {
  items += `<li>
    <button class="page-btn" onclick="goToPage(1)">1</button>
  </li>
  <li>
    <span class="page-sep">...</span>
  </li>`
  }
  
for(let i = from; i <= to; i++){
  items += '<li>'
  if (page === i) {
    items += `<span class="page-active">${i}</span>`
  } else {
    items += `<button class="page-btn" onclick="goToPage(${i})">${i}</button>`
  }
  items += '</li>'
}
  
  if (showLast) {
  items += `
  <li>
    <span class="page-sep">...</span>
  </li>
  <li>
    <button class="page-btn" onclick="goToPage(${totalPages})">${totalPages}</button>
  </li>`
}
  
  items += `<li>
  <button class="page-btn" ${page == totalPages ? 'disabled' : ''} onclick="goToPage(${page+1})">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  </button>
</li>`
  document.querySelector('.pagination').innerHTML = items
}




