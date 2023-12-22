// SIDEBAR TOGGLE

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar() {
  if(!sidebarOpen) {
    sidebar.classList.add("sidebar-responsive");
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if(sidebarOpen) {
    sidebar.classList.remove("sidebar-responsive");
    sidebarOpen = false;
  }
}

//---------------show admin details------------------------
const adminName = localStorage.getItem("adminName");

function showAccount(){
	
	document.getElementById("acc-name").innerHTML = adminName;
	
}

showAccount();


//--------logOut------------------------



function logOut(){
	const auth = new Auth();
	auth.logOut();
}


//--------------main-cards---------------------------------
var products =[];
var resizeArr = [];

function getDatalist(){
	
	$.getJSON("../../getPro", function(getData) {
			console.log("jyhguy");
			document.getElementById('products-count').innerHTML = getData.length;
			
			for(var i=0;i<getData.length;i++){
				
				products.push(getData[i]);
				
			}
		
		var topProducts=products.filter(function(x) { return x.salles >= 20 });
		

		for(var i=0;i<5;i++){
			
			resizeArr.push(topProducts[i]);
			
		}

		console.log(resizeArr[0].salles);			
		barChart(resizeArr);
				
	});

};	
console.log(products);
getDatalist();


function getOrderlist(){
	
	$.getJSON("../../orders", function(getData) {
			
			document.getElementById('orders-count').innerHTML = getData.length;
						
		});
	
	
}
getOrderlist();




// ---------- CHARTS ----------


function barChart(data){
	
	// BAR CHART
var barChartOptions = {
  series: [{
    data: [data[0].salles, data[1].salles, data[2].salles, data[3].salles, data[3].salles]
  }],
  chart: {
    type: 'bar',
    height: 350,
    toolbar: {
      show: false
    },
  },
  colors: [
    "#246dec",
    "#cc3c43",
    "#367952",
    "#f5b74f",
    "#4f35a1"
  ],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: '40%',
    }
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    show: false
  },
  xaxis: {
    categories: [data[0].name, data[1].name, data[2].name, data[3].name, data[4].name],
  },
  yaxis: {
    title: {
      text: "Count"
    }
  }
};

var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
barChart.render();
	
	
	
	
}





// AREA CHART
var areaChartOptions = {
  series: [{
    name: 'Purchase Orders',
    data: [31, 40, 28, 51, 42, 109, 100]
  }, {
    name: 'Sales Orders',
    data: [11, 32, 45, 32, 34, 52, 41]
  }],
  chart: {
    height: 350,
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  colors: ["#4f35a1", "#246dec"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth'
  },
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  markers: {
    size: 0
  },
  yaxis: [
    {
      title: {
        text: 'Purchase Orders',
      },
    },
    {
      opposite: true,
      title: {
        text: 'Sales Orders',
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
  }
};

var areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
areaChart.render();