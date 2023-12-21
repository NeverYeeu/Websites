import {api} from "./app.js"
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let getWebsite = api[0].website;
let countryBtns = $$('.nav-country > li');
// Chuong trinh se chay khi moi duyet web
function webStart(){
	let getIndex = Math.floor(Math.random() * countryBtns.length);
	countryBtns[getIndex].classList.add('choose-country');
	let getName = countryBtns[getIndex].innerText.toLowerCase();
	getArrayLanguage(getName)
} webStart()
// Xu ly khi ta click vao thanh nav
function handleCountryBtn(){
	countryBtns.forEach((btn, index) => {
		btn.addEventListener('click', () => {
			$('.nav-country > li.choose-country').classList.remove('choose-country');
			btn.classList.add('choose-country');
			let nameLanguage = btn.innerText.toLowerCase();
			getArrayLanguage(nameLanguage);
		})
	})
}; handleCountryBtn();
function getArrayLanguage(name) {
	let arrayLanguage = getWebsite.filter((lang) => {
		return lang.webLang.includes(name);
	});
	handleWebsite(arrayLanguage)
};
function handleWebsite(arr){
	let boxInfor = $('#box-infor');
	boxInfor.innerHTML = arr.map(renderWebsite).join('');
	function renderWebsite(web){
		let {webName, webImg, webHref, webDescription} = web;
		return (`
		<div class="infor-wrap">
					<img src=${webImg} alt="" class="wrap_img">
					<div class="wrap-head">
						<span>${webName}</span>
						<div class="list-genre">${webDescription}</div>
						<a href=${webHref} class="read-btn href">Đọc truyện</a>
					</div>
					<i class="fa-solid fa-bars genre-icon"></i>
				</div>
		`)
	};

}	
