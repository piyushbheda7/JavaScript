// const data = null;

// const xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

// xhr.addEventListener("readystatechange", function () {
// 	if (this.readyState === this.DONE) {
// 		console.log(this.responseText);
// 	}
// });

// xhr.open("GET", "https://google-news1.p.rapidapi.com/top-headlines?country=US&lang=en&limit=50");
// xhr.setRequestHeader("X-RapidAPI-Host", "google-news1.p.rapidapi.com");
// xhr.setRequestHeader("X-RapidAPI-Key", "02fc068588mshaf67d619ecb16fbp1cb59bjsn6a3c560027f5");

// xhr.send(data);

// const data = null;

// const xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

// xhr.addEventListener("readystatechange", function () {
// 	if (this.readyState === this.DONE) {
// 		console.log(this.responseText);
// 	}
// });

// xhr.open("GET", "https://google-search3.p.rapidapi.com/api/v1/search/q=elon+musk");
// xhr.setRequestHeader("X-User-Agent", "desktop");
// xhr.setRequestHeader("X-Proxy-Location", "EU");
// xhr.setRequestHeader("X-RapidAPI-Host", "google-search3.p.rapidapi.com");
// xhr.setRequestHeader("X-RapidAPI-Key", "78e2e6080fmsh359c6c65abcf9abp13ff49jsncb6272e3d386");

// xhr.send(data);

const data = null;

const xhr = new XMLHttpRequest();
// xhr.withCredentials = true ;

// xhr.open('GET', "\json.json", true)
xhr.open("GET", "https://bing-news-search1.p.rapidapi.com/news?safeSearch=Off&textFormat=Raw");
xhr.setRequestHeader("X-BingApis-SDK", "true");
xhr.setRequestHeader("X-RapidAPI-Host", "bing-news-search1.p.rapidapi.com");
xhr.setRequestHeader("X-RapidAPI-Key", "02fc068588mshaf67d619ecb16fbp1cb59bjsn6a3c560027f5");
xhr.addEventListener("readystatechange", func1)


function func1() {
    if (this.readyState == this.DONE) {
        let accordianItem = document.getElementById('accordionExample')
        let obj = JSON.parse(this.responseText);
        console.log(obj.value);
        let str = '';
        let i = 1;
        for (const key of obj.value) {
            if(key.image != undefined)
            {
                console.log(key.image.thumbnail);
                str += `<div class="accordion-item">
                            <h2 class="accordion-header" id="heading${i}">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapse${i}" aria-expanded="false" aria-controls="collapse${i}">
                                    ${key.name} <br>Published At : ${key.datePublished}
                                </button>
                            </h2>
                            <div id="collapse${i}" class="accordion-collapse collapse" aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <img src="${key.image.thumbnail.contentUrl}" style="height:500px ; weight:700px"  alt="img"><br>
                                    ${key.description} <a href="${key.url}" target="_blank">Read More Here</a>
                                </div>
                            </div>
                        </div>`;
                i++;

            }
            
        }
        accordianItem.innerHTML = str ;
    }
}

xhr.send();

console.log('hello');
