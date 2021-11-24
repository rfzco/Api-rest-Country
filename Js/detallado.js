const banderas = document.getElementById('flags')
var first_container = document.getElementById('one')
var first = document.getElementById('first')
var second = document.getElementById('second')
var third = document.getElementById('third')
var fourth = document.getElementById('fourth')


const query = new URLSearchParams(window.location.search)
const params = query.get('name')
console.log(params)

document.addEventListener("DOMContentLoaded", e => {
    fetchData()
})


const fetchData = async () => {
    try {
        const res = await fetch('https://restcountries.com/v2/all')
        var data = await res.json()
        

        const filtroData = data.filter(item => item.name === params)

        banderillas(filtroData)
    } catch (error) {
        console.log(error)
    }
   
}

const banderillas = data => {

    data.forEach(item => {

  
        //img flag
            img = document.createElement('img')
			img.src = item.flag ;
			img.alt = 'flag';
			first_container.appendChild(img)

         //name
            h2 = document.createElement('h2');
            h2.innerHTML = item.name;
            first.appendChild(h2);
            console.log(h2);

        //population
            p = document.createElement('p');
            p.innerHTML = item.population;
            second.appendChild(p)
            console.log(p);

            app = document.createElement('b');
            app.innerHTML = 'Name: ';
            second.appendChild(app)
            p.insertAdjacentElement("afterbegin", app);

        //region
            p = document.createElement('p');
            p.innerHTML = item.region;
            second.appendChild(p)
            console.log(p);

            app = document.createElement('b');
            app.innerHTML = 'Region: ';
            second.appendChild(app)
            p.insertAdjacentElement("afterbegin", app);

        //sub region
            p = document.createElement('p');
            p.innerHTML = item.subregion;
            second.appendChild(p)
            console.log(p);

            app = document.createElement('b');
            app.innerHTML = 'Sub Region: ';
            second.appendChild(app)
            p.insertAdjacentElement("afterbegin", app);

        //capital
            p = document.createElement('p');
            p.innerHTML = item.capital;
            second.appendChild(p)
            console.log(p);

            app = document.createElement('b');
            app.innerHTML = 'Capital: ';
            second.appendChild(app)
            p.insertAdjacentElement("afterbegin", app);


        //top level domain
            p = document.createElement('p');
            p.innerHTML = item.topLevelDomain;
            third.appendChild(p)
            console.log(p);

            app = document.createElement('b');
            app.innerHTML = 'Top Level Domain: ';
            third.appendChild(app)
            p.insertAdjacentElement("afterbegin", app);
        //currencies
            p = document.createElement('p');
            p.innerHTML = item.currencies[0].name;
            third.appendChild(p)
            console.log(p);

            app = document.createElement('b');
            app.innerHTML = 'Currencies: ';
            third.appendChild(app)
            p.insertAdjacentElement("afterbegin", app);




        //languages
            p = document.createElement('p');
            p.innerHTML = '';
            third.appendChild(p)
            console.log(p);

                let m = item.languages.length
                for (let i = 0; i < m; i++) {
                    span = document.createElement('span');
                    span.innerHTML = item.languages[i].name ;
                    third.appendChild(span);


                }
                app = document.createElement('b');
                app.innerHTML = 'Lang: ';
                third.appendChild(app)
                span.insertAdjacentElement("afterbegin", app);
            p.insertAdjacentElement("afterbegin", span)


        //borders
        p = document.createElement('p');
        p.innerHTML = '';
        fourth.appendChild(p);

                    let n = item.borders.length
                    for (let i = 0; i < n; i++) {
                        span = document.createElement('span');
                        span.innerHTML = item.borders[i];
                        fourth.appendChild(span);
                        
                        const border= item.borders[i];
                        const alpha= item.alpha3Code;
                        console.log(border)
                    }
                    

                    
            app = document.createElement('b');
            app.innerHTML = 'Countries Borders: ';
            fourth.appendChild(app);
            span.insertAdjacentElement("afterbegin", app);
        p.insertAdjacentElement("afterbegin", app);

       


    });

}








