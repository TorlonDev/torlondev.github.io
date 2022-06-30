function home_control() {
    var pattern_pic_big = "../img/cover_pic_big";
    var pattern_pic_small = "../img/cover_pic_small";
    var arr_pic_big = ["1.jpg", "3.jpg", "4.jpg", "5.jpg", "2.jpg"];
    var color_shadow = ["green", "orangered", "violet", "blue", "orange"];
    var like_txt = ["TRAVEL", "EATING", "SWEET", "CODING", "READING"];
    var arr_pic_small = ["1.jpg", "3.jpg", "4.jpg", "5.jpg", "2.jpg"];

    for (var p = 0; p < arr_pic_big.length; p++) {
        arr_pic_big[p] = pattern_pic_big + arr_pic_big[p];
        arr_pic_small[p] = pattern_pic_small + arr_pic_small[p];
    }

    var pic_count = arr_pic_big.length;
    var i = 0;

    function recur() {
        if (window.screen.availWidth >= 700) {
            $(".ground_home").css('transition', 'background-image 4s').css("background-image", "url('" + arr_pic_big[i] + "')");
        } else {
            $(".ground_home").css('transition', 'background-image 4s').css("background-image", "url('" + arr_pic_small[i] + "')");
        }
        $(".space_logo").css("text-shadow", "-1px 0 " + color_shadow[i] + ", 0 1px " + color_shadow[i] + ", 1px 0 " + color_shadow[i] + ", 0 -1px " + color_shadow[i]);
        
        document.getElementById('like_txt').innerHTML = like_txt[i];

        // let like_text_str = like_txt[i];
        // let concat_str = ''

        // for(let i = 0; i < (like_text_str.length); i++){
        //     concat_str += like_text_str[i]

        //     setTimeout(() => {
        //         document.getElementById('like_txt').innerHTML = concat_str
        //     }, (i + 1) * 100 )
        // }

        if (i === pic_count - 1) {
            i = 0;
        } else {
            ++i;
        }
        //$(".ground_home").css('display', 'block');
        setTimeout(recur, 8000);
    }
    setTimeout(recur, 2000); //first_impression
}

function load_snow() {
    var canvas = document.getElementById("snowy");
    var ctx = canvas.getContext("2d");

    var W =  1000; //window.innerWidth;
    var H = 370; //window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    var mp = 25; //max particles
    var particles = [];
    for (var i = 0; i < mp; i++)
    {
        particles.push({
            x: Math.random() * W, //x-coordinate
            y: Math.random() * H, //y-coordinate
            r: Math.random() * 4 + 1, //radius
            d: Math.random() * mp //density
        });
    }

    function draw()
    {
        ctx.clearRect(0, 0, W, H);

        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        ctx.beginPath();
        for (var i = 0; i < mp; i++)
        {
            var p = particles[i];
            ctx.moveTo(p.x, p.y);
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
        }
        ctx.fill();
        update();
    }
    var angle = 0;
    function update()
    {
        angle += 0.01;
        for (var i = 0; i < mp; i++)
        {
            var p = particles[i];
            p.y += Math.cos(angle + p.d) + 1 + p.r / 2;
            p.x += Math.sin(angle) * 2;
            if (p.x > W + 5 || p.x < -5 || p.y > H)
            {
                if (i % 3 > 0) //66.67% of the flakes
                {
                    particles[i] = {x: Math.random() * W, y: -10, r: p.r, d: p.d};
                } else
                {
                    if (Math.sin(angle) > 0)
                    {
                        particles[i] = {x: -5, y: Math.random() * H, r: p.r, d: p.d};
                    } else
                    {
                        particles[i] = {x: W + 5, y: Math.random() * H, r: p.r, d: p.d};
                    }
                }
            }
        }
    }
    setInterval(draw, 33);
}

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function getAge(fromdate, todate) {
    if (todate) {
        todate = new Date(todate);
    } else {
        todate = new Date();
    }
    var age = [];
    var fromdate2 = new Date(fromdate),
            y = [todate.getFullYear(), fromdate2.getFullYear()],
            ydiff = y[0] - y[1],
            m = [todate.getMonth(), fromdate2.getMonth()],
            mdiff = m[0] - m[1],
            d = [todate.getDate(), fromdate2.getDate()],
            ddiff = d[0] - d[1];

    if (mdiff < 0 || (mdiff === 0 && ddiff < 0))
        --ydiff;
    if (mdiff < 0)
        mdiff += 12;
    if (ddiff < 0) {
        fromdate2.setMonth(m[1] + 1, 0);
        ddiff = fromdate2.getDate() - d[1] + d[0];
        --mdiff;
    }
    if (ydiff > 0)
        age.push(ydiff + ' Year' + (ydiff > 1 ? 's ' : ' '));
    if (mdiff > 0)
        age.push(mdiff + ' Month' + (mdiff > 1 ? 's' : ''));
    if (ddiff > 0)
        age.push(ddiff + ' Day' + (ddiff > 1 ? 's' : ''));
    if (age.length > 1)
        age.splice(age.length - 1, 0, ' And ');
    return age.join('');
}

/* Graph Constant */

var backendCategory = [
    'NodeJS', 'PHP', 'Java', 'JSP', 'C#', 'ASP'
]
var backendPoint = [6.5, 7.5, 3.5, 1.5, 1, 0.5]

var frontendCategory = [
    'Javascript', 'JQuery', 'Angular 1', 
    'React', 'Redux', 'HTML', 
    'CSS like design', 'Responsive', 'Bootstrap',
    'React Native', 'Android (Java)', 'iOS (Objective C)'
]
var frontendPoint = [7, 8, 0.5, 
6.5, 3.5, 7, 
8, 5, 4.5, 
7, 3, 0.5]

var dbCategory = [
    'DB Design<br/>& ER', 'MySQL',
    'Postgres', 'MariaDB', 'MongoDB', 'DB Tuning'
]
var dbPoint = [7, 7, 4, 3, 2.5, 4 ]

var otherCategory = [
    'Read Document', 'Search Google', 'Ask Stackoverflow', 
    'Save Server Cost', 'AWS / OVH', 'Cloudflare', 
    'Docker + Compose', 'CI / CD', 'Unit / Automate Test',
    'Laravel', 'NextJS'
]
var otherPoint = [5, 9, 9, 
    4, 3, 1.5, 
    4, 2, 2, 
    4, 1]


var settingHighChart = (
    type_column = 'column', // column, bar
    rotation = -45, // -45, 0
    backgroundColor = '#EDFCFF', 
    titleText = '<b>Backend & Language Exp.</b>',
    categories = backendCategory,
    lineColor = 'black',
    graphColor = 'red',
    dataPoint = backendPoint
) => {
    return {
            chart: {
                backgroundColor: backgroundColor,
                type: type_column,
            },
            title: {
                text: titleText,
                style: {
                    color: lineColor
                }
            },
            xAxis: {
                categories: categories,
                labels: {
                    rotation: rotation,
                    style: {
                        color: lineColor
                    }
                },
                lineColor: lineColor,
                lineWidth: 1

            },
            yAxis: {
                max: 10,
                label: {
                    enable: false
                },
                title: {
                    text: ''
                },
                /* lineColor: 'black',
                 lineWidth: 1,*/
                gridLineColor: 'grey'
            },
            tooltip: {
                enabled: false,
                shared: false,
                useHTML: false
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true,
                        color: lineColor
                    }
                },
                line: {
                    dataLabels: {
                        enabled: true,
                        color: lineColor
                    },
                },
                series: {
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        color: lineColor
                    },
                    point: {
                        events: {
                            click: function () {
                                //alert('Category: ' + this.category + ', value: ' + this.y);
//                                switch (this.category) {
//                                    case 'OOP':
//                                        call_modal("OOP", 
//                                        "OOP Concept<br/>"+
//                                        "- Encapsulation (Private Field) <br/>" +
//                                        "- Inheritance (Derive / Extend Class) <br/>" +
//                                        "- Polymorphism (Bird Fly and Airplane Fly)");
//                                        break;
//                                    case 'Data Structure<br/>' :
//                                        call_modal("Data Structure", "JSON Array Collection Set List Stack Queue (Interesting - Tree , Map , Hash)");
//                                        break;
//                                    case 'C#' :
//                                        alert("Basic Programming + Windows Form App.");
//                                        break;
//
//                                }
                            }
                        }
                    }
                }
            },
            series: [{
                    showInLegend: false,
                    name: " ",
                    data: dataPoint,
                    color: graphColor
                }],
            credits: {
                enabled: false
            }
        }
}

var graph_frontend_light = settingHighChart(
    'column', -45,
    '#EDFCFF', 
    '<b>Frontend & Mobile Exp.</b>',
    frontendCategory,
    'black',
    'blue',
    frontendPoint
)

var graph_backend_light = settingHighChart(
    'spline', -45,
    '#EDFCFF', 
    '<b>Backend Language Exp.</b>',
    backendCategory,
    'black',
    'red',
    backendPoint
)

var graph_db_light = settingHighChart(
    'areaspline', 0,
    '#EDFCFF', 
    '<b>Database Exp.</b>',
    dbCategory,
    'black',
    'green',
    dbPoint
)

var graph_other_skill_light = settingHighChart(
    'bar', 0,
    '#EDFCFF', 
    '<b>Other Exp.</b>',
    otherCategory,
    'black',
    'orange',
    otherPoint
)

var graph_frontend_dark = settingHighChart(
    'column', -45,
    'black', 
    '<b>Frontend & Mobile Exp.</b>',
    frontendCategory,
    'wheat',
    'blue',
    frontendPoint
)

var graph_backend_dark = settingHighChart(
    'spline', -45,
    'black', 
    '<b>Backend Language Exp.</b>',
    backendCategory,
    'wheat',
    'red',
    backendPoint
)

var graph_db_dark = settingHighChart(
    'areaspline', 0,
    'black', 
    '<b>Database Exp.</b>',
    dbCategory,
    'wheat',
    'green',
    dbPoint
)

var graph_other_skill_dark = settingHighChart(
    'bar', 0,
    'black', 
    '<b>Other Exp.</b>',
    otherCategory,
    'wheat',
    'orange',
    otherPoint
)

function CVWhiteMode(){
    $(".cv_pane").css("background-color", "white");
    $(".cv_pane").css("color", "black");
    $(".cv_pane .item").css("background-color", "white");
    $(".cv_pane a").css("color", "blue");
    $(".cv_pane h2").css("color", "black");
    $(".cv_pane h3").css("color", "black");
    $(".ban_skill").css("background-color", "white");

    $("#map_tol").css("opacity", "1");
    $("img").css("opacity", "1");
    $(".slider").css("opacity", "1");
    $("#pic_me_slide").css("opacity", "1");

    $('#graph_backend').highcharts(graph_backend_light);
    $('#graph_frontend').highcharts(graph_frontend_light);
    $('#graph_db').highcharts(graph_db_light);
    $('#graph_other_skill').highcharts(graph_other_skill_light);
}

function CVDarkMode(){
    $(".cv_pane").css("background-color", "black");
    $(".cv_pane").css("color", "wheat");
    $(".cv_pane .item").css("background-color", "black");
    $(".cv_pane a").css("color", "lightgreen");
    $(".cv_pane h2").css("color", "wheat");
    $(".cv_pane h3").css("color", "wheat");
    $(".ban_skill").css("background-color", "black");

    $("#map_tol").css("opacity", "0.94");
    $("img").css("opacity", "0.94");
    $(".slider").css("opacity", "0.94");
    $("#pic_me_slide").css("opacity", "0.98");

    $('#graph_backend').highcharts(graph_backend_dark);
    $('#graph_frontend').highcharts(graph_frontend_dark);
    $('#graph_db').highcharts(graph_db_dark);
    $('#graph_other_skill').highcharts(graph_other_skill_dark);
}

// mode - dark / light
function decisionToggleMode(){
    if (typeof(Storage) !== "undefined") {
        if(localStorage.getItem("defaultModeTheme")){
            let checkDefaultModeTheme = localStorage.getItem("defaultModeTheme")
            if(checkDefaultModeTheme === 'dark'){
                return true
            } else {
                localStorage.setItem("defaultModeTheme", "light");
                return false
            }
        }
        localStorage.setItem("defaultModeTheme", "light");
        return false
    }
    return false
}

function toggleColorMode(){
    let isDark = decisionToggleMode()
    let isSupportLocalStorage = (typeof(Storage) !== "undefined")

    if(isDark){
        CVWhiteMode()
    } else {
        CVDarkMode()
    }

    if(isSupportLocalStorage){
        localStorage.setItem("defaultModeTheme", isDark ? 'light': 'dark')
    }
}

function graph_cv_load() {
    $(function () {

        let isDark = decisionToggleMode()

        if(isDark){
            CVDarkMode()
        } else {
            CVWhiteMode()
        }
    });
}