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
            $(".ground_home").css("background-image", "url('" + arr_pic_big[i] + "')");
        } else {
            $(".ground_home").css("background-image", "url('" + arr_pic_small[i] + "')");
        }
        $(".space_logo").css("text-shadow", "-1px 0 " + color_shadow[i] + ", 0 1px " + color_shadow[i] + ", 1px 0 " + color_shadow[i] + ", 0 -1px " + color_shadow[i]);
        document.getElementById('like_txt').innerHTML = like_txt[i];
        if (i === pic_count - 1) {
            i = 0;
        } else {
            ++i;
        }
        //$(".ground_home").css('display', 'block');
        setTimeout(recur, 25000);
    }
    setTimeout(recur, 30000); //first_impression
}

function load_snow() {
    var canvas = document.getElementById("snowy");
    var ctx = canvas.getContext("2d");

    var W = window.innerWidth;
    var H = window.innerHeight;
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

function graph_cv_load() {
    $(function () {
        $('#graph_backend').highcharts({
            chart: {
                backgroundColor: '#EDFCFF',
                type: 'column'
            },
            title: {
                text: '<b>Backend Skill</b>'
            },
            xAxis: {
                categories: [
                    'OOP',
                    'Data Structure<br/>',
                    'C#',
                    'Java',
                    'PHP',
                    'NodeJS',
                    'ASP',
                    'JSP'
                ],
                labels: {
                    rotation: -45
                },
                lineColor: 'black',
                lineWidth: 1

            },
            yAxis: {
                max: 5,
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
                        enabled: true
                    }
                },
                series: {
                    cursor: 'pointer',
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
                    data: [0.8, 0.6, 1.4, 1.8, 2.3, 1.2, 0.2, 0.7],
                    color: 'red'
                }],
            credits: {
                enabled: false
            }
        });

        $('#graph_frontend').highcharts({
            chart: {
                backgroundColor: '#EDFCFF',
                type: 'column'
            },
            title: {
                text: '<b>Frontend Skill</b>'
            },
            xAxis: {
                categories: [
                    'Javascript',
                    'ES6 Harmony',
                    'JQuery',
                    'Angular 1',
                    'Angular 2',
                    'React',
                    'HTML',
                    'CSS',
                    'Responsive',
                    'Bootstrap'
                ],
                labels: {
                    rotation: -45
                },
                lineColor: 'black',
                lineWidth: 1
            },
            yAxis: {
                max: 5,
                label: {
                    enable: false
                },
                title: {
                    text: ''
                },
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
                        enabled: true
                    }
                }
            },
            series: [{
                    showInLegend: false,
                    data: [2.2, 0.7, 1.8, 1.2, 0.1, 0.5, 2.2, 1.3, 1.5, 1],
                    color: 'blue'
                }],
            credits: {
                enabled: false
            }
        });

        $('#graph_db').highcharts({
            chart: {
                backgroundColor: '#EDFCFF',
                type: 'column'
            },
            title: {
                text: '<b>Database Skill</b>'
            },
            xAxis: {
                categories: [
                    'Database<br/>Design + ER',
                    'MySQL',
                    'PostgresSQL',
                    'MariaDB',
                    'MongoDB'
                ],
                labels: {
                    rotation: -45
                },
                lineColor: 'black',
                lineWidth: 1
            },
            yAxis: {
                max: 5,
                label: {
                    enable: false
                },
                title: {
                    text: ''
                },
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
                        enabled: true
                    }
                }
            },
            series: [{
                    showInLegend: false,
                    data: [1.6, 2.5, 1, 1.2, 1.6],
                    color: 'green'
                }],
            credits: {
                enabled: false
            }
        });
        $('#graph_other_skill').highcharts({
            chart: {
                backgroundColor: '#EDFCFF',
                type: 'bar'
            },
            title: {
                text: '<b>Other Programming Skill</b>'
            },
            xAxis: {
                categories: [
                    'Read<br/>Book',
                    'Search<br/>Google',
                    'Ask<br/>Stackoverflow',
                    'Git',
                    'GoogleMap<br/>API',
                    'Twitter<br/>API'
                ],
                labels: {
                    rotation: 0
                },
                lineColor: 'black',
                lineWidth: 1
            },
            yAxis: {
                label: {
                    enable: false
                },
                title: {
                    text: ''
                },
                gridLineColor: 'grey'
            },
            tooltip: {
                enabled: false,
                shared: false,
                useHTML: false
            },
            plotOptions: {
                bar: {
                    pointPadding: 0.2,
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            series: [{
                    showInLegend: false,
                    data: [1, 3.9, 3., 2.1, 1, 0.6],
                    color: 'orange'
                }],
            credits: {
                enabled: false
            }
        });


    });
}