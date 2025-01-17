
let themeBtn = document.querySelector('.navbar__theme-btn');

themeBtn.addEventListener('click', () => {
        let body = document.body;
        if(body.className == ""){
            body.className = "dark";
            themeBtn.innerHTML=`<i class="uil uil-sun"></i>`
        }else{
            body.className = "";
            themeBtn.innerHTML = `<i class="uil uil-moon"></i>`
        }
})

let sideBarOpenBtn = document.querySelector('.sidebar__toggel-open');
let sideBarcloseBtn = document.querySelector('.sidebar__toggel-close');
let sideBar = document.querySelector('.sidebar');


sideBarOpenBtn.addEventListener('click', () => {
    sideBar.style.left = '0';
    sideBarOpenBtn.style.display = "none";
    sideBarcloseBtn.style.display = "inline-block";
})

sideBarcloseBtn.addEventListener('click', () => {
    sideBar.style.left = '-100%';
    sideBarcloseBtn.style.display = "none";
    sideBarOpenBtn.style.display = 'inline-block';
})


const chart = document.getElementById('chart');

new Chart(chart, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jnu', 'Jul', 'Aug', 'sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'sales for the month',
      data: [1424, 602, 1695, 735, 2707, 511, 925, 1352, 1290, 725, 1434, 2346],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

let pieChart = document.querySelector('#Categories')

let data = {
    datasets:[
        {
            barpercentage:0.5,
            barthickness:6,
            maxbarthickness:8,
            minbarLength:2,
            data:[10, 20, 30, 40, 50, 60, 70]
        }
    ]
}

new Chart(pieChart,{
    type: 'pie',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: ''
        }
      }
    },
  })