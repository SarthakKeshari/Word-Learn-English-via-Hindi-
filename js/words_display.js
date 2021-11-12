const xhr = new XMLHttpRequest();
// console.log(xhr);

// Open the object
xhr.open("GET", "./js/words.json", true);

// What to do onprogress(optional)
xhr.onprogress = function () {
//   console.log("On progress");
};

// What to do when response is ready
xhr.onload = function () {
  if (this.status === 200) {
    
    const response = JSON.parse(this.responseText);
    console.log(response.length);

    let word_display_area = document.getElementById('word_display_area');
    word_display = ``;
    for(let i=0; i<5; i++)
    {
        i = i%(response.length);
        // console.log(response[i].wordID);

        wordID = response[i].wordID;
        eng_word = response[i].eng_word;
        hindi_word = response[i].hindi_word;
        meaning = response[i].meaning;
        eng_sentence = response[i].eng_sentence;
        hindi_sentence = response[i].hindi_sentence;

        word_display += `
        <div class=" col-lg-6 col-sm-12 col-md-12 p-0 mb-4">
        <div class="accordion-item">
        <h2 class="accordion-header d-flex align-items-center justify-content-between" id="heading${wordID}">
            <button class="btn card-btn w-100 d-flex justify-content-start collapsed flex-column" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${wordID}" aria-expanded="false" aria-controls="collapse${wordID}">
                <h5>${eng_word}</h5>
                <h6 class="h6 fst-italic"><code>${hindi_word}</code></h6>
            </button>
            <div class="d-flex px-2">
                <a type="button" class="btn border border-dark mx-1 d-flex align-items-center" data-bs-toggle="button" autocomplete="off" onclick="bolo('${eng_word}', 0.25)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                    </svg>
                </a>
                <a type="button" class="btn border border-dark mx-1 d-flex align-items-center" data-bs-toggle="button" autocomplete="off" onclick="bolo('${eng_word}', 0.5)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-megaphone" viewBox="0 0 16 16">
                        <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-.214c-2.162-1.241-4.49-1.843-6.912-2.083l.405 2.712A1 1 0 0 1 5.51 15.1h-.548a1 1 0 0 1-.916-.599l-1.85-3.49a68.14 68.14 0 0 0-.202-.003A2.014 2.014 0 0 1 0 9V7a2.02 2.02 0 0 1 1.992-2.013 74.663 74.663 0 0 0 2.483-.075c3.043-.154 6.148-.849 8.525-2.199V2.5zm1 0v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0zm-1 1.35c-2.344 1.205-5.209 1.842-8 2.033v4.233c.18.01.359.022.537.036 2.568.189 5.093.744 7.463 1.993V3.85zm-9 6.215v-4.13a95.09 95.09 0 0 1-1.992.052A1.02 1.02 0 0 0 1 7v2c0 .55.448 1.002 1.006 1.009A60.49 60.49 0 0 1 4 10.065zm-.657.975 1.609 3.037.01.024h.548l-.002-.014-.443-2.966a68.019 68.019 0 0 0-1.722-.082z"/>
                    </svg>
                </a>
                <a type="button" class="btn border border-dark mx-1 d-flex align-items-center" data-bs-toggle="button" autocomplete="off" onclick="bolo('${eng_word}', 1)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                    </svg>
                </a>
            </div>
        </h2>
        <div id="collapse${wordID}" class="accordion-collapse collapse" aria-labelledby="heading${wordID}" data-bs-parent="#accordionFlushExample">
            <hr class="m-0">
            <div class="accordion-body">
                Meaning(अर्थ): <code>${meaning}</code>
                
                <p>
                    <div>
                        Sentence(वाक्य)- 
                    </div>
                    <div class="ms-2">
                        ${eng_sentence}
                        <br>
                        <code>${hindi_sentence}</code>
                    </div>
                </p>
            </div>
        </div>
        </div>
    </div>
        `
    }

    word_display_area.innerHTML = word_display;
    
  } else {
    console.log("Some error occured");
  }
};

// send the request for GET
xhr.send();

console.log("We are done");
