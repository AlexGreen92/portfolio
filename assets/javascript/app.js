$(document).ready(function(){
    loadMainPage();

    $('#aboutli').on('click',function(){
        loadMainPage();
    })
    $('#portfolio').on('click',function(){
        loadPortfolio();
    })
    $('#contacts').on('click',function(){
        loadContacts();
    })
})

loadMainPage = function(){
    $('#bg').html('')
    $('#bg').append(`
    <div class='row'>
        <div class='col'>
        <h1 id='aboutme'>About Me</h1>
        </div>
    </div>
<hr>
    <div class='row text-secondary' >
        <div class='col-4'>
            <img class="img-fluid"  src="assets/images/alex.jpg">
        </div>
        <div class='col-8'>
        <p class="lead">Full Stack Web Developer with a background in applied math and programming. Strong engineering professional skills in both Front-end and Back-end Development with outstanding knowledge of  HTML CSS and Javascript. Flexible and adaptive to new environments with a high desire to achieve. I enjoy coding, debugging and solving problems. I’m extremely passionate about web development and design in all its forms helping small businesses and artists build and improve their online presence. Always open to learn new and share my knowledge with others. I hold communication in high regard and work well when collaborating with others or independently. Recently I've graduated from Northwestern Coding Bootcamp witch helped me to develop many of the skills required to be a great Web Developer.</p>
        <p class="lead">Education: Belarusian State Univercity 2009-2012 (Applied math and programming)</p>
        <p class="lead">Northwestern Coding Bootcamp (2019)</p>
        <p class="lead">Online courses : CodeCademy, Coursera , Khan Academy...</p>
        </div>
    </div>
    <div class='row text-secondary'>
        <div class='col'>
        <h3 id="core">Core Skills:</h3>
        <ul id="qua">
        <li class="lead">Outstanding knowledge of web programming languages including HTML CSS JavaScript</li>
        <li class="lead">Bootstrap / AngularJS / Responsive Web Design</li>
        <li class="lead">node.js / npm / git / terminal</li>
        <li class="lead">Google Firebase DB development</li>
        <li class="lead">MongoDb / REST API / MERN stack development</li>
        <li class="lead">CMS</li>
        <li class="lead">Profound creative and analytical problem-solving and troubleshooting skills</li>
        <li class="lead">Exceptional organization and presentation abilities</li>
        <li class="lead">Superior facility with Windows Linux and MAC operating systems</li>
        </ul>
        </div>
    </div>
`)}

loadPortfolio = function(){
    $('#bg').html('');
    $('#bg').append(`
    <div class='row'>
        <div class='col'>
            <h1 id='aboutme'>Portfolio</h1>
        </div>
    </div>
    <hr>
    <div class='container'>
        <div class='row'>
            <div class='col-6'><a href="https://alexgreen92.github.io/unit-4-game/"><img class='img-fluid' src="assets/images/pokeball.png"><h3>Pokemon RPG</h3></a></div>
            <div class='col-6'><a href="https://alexgreen92.github.io/TriviaGame/"><img class='img-fluid' src="assets/images/trivia.png"><h3>Trivia game</h3></a></div>
        </div>
        <div class='row'>
            <div class='col-6'><a href="https://alexgreen92.github.io/homework6/"><img class='img-fluid' src="assets/images/giphy.png"><h3>Giphy Api App</h3></a></div>
            <div class='col-6'><a href="https://alexgreen92.github.io/RPS-Multiplayer/"><img class='img-fluid' src="assets/images/rps.png"><h3>Rock Paper Scissors Multiplayer</h3></a></div>
        </div>
        <div class='row'>
            <div class='col-6'><a href='https://veronicavera.github.io/GroupProjectFood/'><img class='img-fluid' src="assets/images/foodCocktail.png"><h3>Food/Cocktail Group Project</h3></a></div>
            <div class='col-6'><a href='https://desolate-island-91451.herokuapp.com/'><img class='img-fluid' src="assets/images/ff.png"><h3>Friend Finder App </h3></a></div>
        </div>
        <div class='row'>
            <div class='col-6'><a href = 'https://fast-headland-65580.herokuapp.com/'><img class='img-fluid' src='assets/images/shop.png'><h3>Shop Till you Drop</h3></a></div>
            <div class='col-6'><a href = 'https://nextpedia.herokuapp.com/'><img class='img-fluid' src='assets/images/next.png'><h3>NextPedia</h3></a></div>
        </div>
    </div>
    `)
}
loadContacts = function(){
    $('#bg').html('');
    $('#bg').append(`
        <div class='row'>
            <div class='col'>
                <h1 id='aboutme'>Contacts</h1>
            </div>
        </div>
                <hr>
           <h4>Email : alexgreen2015@icloud.com</h4>
           <h4>Tel : 312-505-9763</h4>
           <h4>GitHub: https://github.com/AlexGreen92</h4>
           <h4>LinkedIn : https://www.linkedin.com/in/aliaksandr-chahrynets-1a8276116/</h4>

    `)
}