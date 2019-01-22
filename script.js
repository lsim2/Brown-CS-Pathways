const courses = [
    {'code': 'CSCI 0150', 'name': 'Introduction to Object-Oriented Programming', 'color': 'white', 'core1': 'Introductory'},
    {'code': 'CSCI 0160', 'name': 'Introduction to Algorithms and Data Structures', 'color': 'white', 'core1': 'Introductory'},
    {'code': 'CSCI 0170', 'name': 'An Integrated Introduction', 'color': 'white', 'core1': 'Introductory'},
    {'code': 'CSCI 0180', 'name': 'An Integrated Introduction', 'color': 'white', 'core1': 'Introductory'},
    {'code': 'CSCI 0190', 'name': 'Accelerated Introduction to Computer Science', 'color': 'white', 'core1': 'Introductory'},
    {'code': 'CSCI 0220', 'name': 'Introduction to Discrete Structures and Probability', 'color': 'grey', 'core1': 'Intermediate', 'pathways':['Systems','Software', 'Security', 'CBio']},
    {'code': 'CSCI 0330', 'name': 'Introduction to Computer Systems', 'color': 'grey', 'core1': 'Intermediate', 'pathways':['Systems','Software', 'Data', 'Security', 'Viz', 'Design', 'Architecture']},
    {'code': 'CSCI 0320', 'name': 'Introduction to Software Engineering', 'color': 'grey', 'core1': 'Intermediate', 'pathways':['Systems','Software', 'Data', 'Viz', 'Design']},
    {'code': 'CSCI 1010', 'name': 'Theory of Computation', 'color': 'grey', 'core1': 'Intermediate', 'pathways':['Theory','Security', 'CBio']},
    {'code': 'MATH 0520', 'name': 'Linear Algebra', 'color': 'grey', 'core1': 'Intermediate', 'pathways':['Data','AI', 'Theory', 'Viz']},
    {'code': 'APMA 1650', 'name': 'Statistical Inference 1', 'color': 'grey', 'core1': 'Intermediate', 'pathways':['AI', 'CBio', 'Design', 'Security', 'Theory']},
    {'code': 'MATH 0180', 'name': 'Multivariable Calculus', 'color': 'grey', 'core1': 'Intermediate', 'pathways':['Data','Viz']},
    {'code': 'CSCI 1380', 'name': 'Distributed Computer Systems', 'color': 'red', 'core1': 'Systems', 'sub1': 'Software', 'sub2': 'Security'},
    {'code': 'CSCI 1670', 'name': 'Operating Systems', 'color': 'red', 'core1': 'Systems', 'sub1': 'Security'},
    {'code': 'CSCI 1680', 'name': 'Computer Networks', 'color': 'red', 'core1': 'Systems'},
    {'code': 'CSCI 1570', 'name': 'Design and Analysis of Algorithms', 'color': 'orange', 'core1': 'Theory'},
    {'code': 'CSCI 1760', 'name': 'Multiprocessor Synchronization', 'color': 'orange', 'core1': 'Theory', 'sub1': 'Systems'},
    {'code': 'CSCI 1550', 'name': 'Probabilistic Methods', 'color': 'orange', 'core1': 'Theory','sub1': 'Data', 'sub2': 'AI'},
    {'code': 'CSCI 1950', 'name': 'Computational Complexity', 'color': 'orange', 'core1': "No core", 'sub1': 'Theory'},
    {'code': 'CSCI 1950H', 'name': 'Computational Topology', 'color': 'orange', 'core1': "No core", 'sub1': 'Theory'},
    {'code': 'CSCI 1951G', 'name': 'Optimization Methods in Finance', 'color': 'orange', 'core1': "No core", 'sub1': 'Theory'},
    {'code': 'CSCI 1951K', 'name': 'Algorithmic Game Theory ', 'color': 'orange', 'core1': "No core", 'sub1': 'Theory', 'sub2': 'AI'},
    {'code': 'CSCI 1510', 'name': 'Cryptography', 'color': 'orange-yellow', 'core1': 'Theory','core2': 'Security'},
    {'code': 'CSCI 1660', 'name': 'Computer Systems Security', 'color': 'yellow', 'core1': 'Security','sub1': 'Systems'},
    {'code': 'CSCI 1650', 'name': 'Software Security and Exploitation', 'color': 'yellow', 'core1': 'Security','sub1': 'Systems', 'sub2': 'Software'},
    {'code': 'CSCI 1800', 'name': 'Cybersecurity and International Relations', 'color': 'yellow', 'core1': "No core", 'sub1': 'Security'},
    {'code': 'CSCI 1951B', 'name': 'Virtual Citizens ', 'color': 'yellow', 'core1': "No core", 'sub1': 'Security'},
    {'code': 'CSCI 1951F', 'name': 'Computer Freedom and Privacy', 'color': 'yellow', 'core1': "No core", 'sub1': 'Security'},
    {'code': 'CSCI 1810', 'name': 'Computational Molecular Biology', 'color': 'green', 'core1': 'Comp Bio', 'sub1': 'Theory'},
    {'code': 'CSCI 1820', 'name': 'Algorithmic Foundations of Computational Biology ', 'color': 'green', 'core1': 'Comp Bio', 'sub1': 'Theory'},
    {'code': 'CSCI 1260', 'name': 'Compilers and Program Analysis', 'color': 'teal', 'core1': 'Software'},
    {'code': 'CSCI 1320', 'name': 'Web Development', 'color': 'teal', 'core1': 'Software', 'sub1': 'Systems', 'sub2': 'Security', 'sub3': 'Design'},
    {'code': 'CSCI 1600', 'name': 'Real-time and Embedded Software', 'color': 'teal', 'core1': 'Software', 'sub1': 'Systems', 'sub2': 'Architecture', 'sub3': 'Design'},
    {'code': 'CSCI 1730', 'name': 'Programming Languages', 'color': 'teal', 'core1': 'Software', 'sub1': 'Systems', 'sub2': 'Security'},
    {'code': 'CSCI 1950Y', 'name': 'Logic for Systems', 'color': 'teal', 'core1': 'Software', 'sub1': 'Systems', 'sub2': 'Security', 'sub3': 'Theory'},
    {'code': 'CSCI 1270', 'name': 'Database Management Systems', 'color': 'blue', 'core1': 'Data', 'sub1': 'Systems', 'sub2': 'Software'},
    {'code': 'CSCI 1951A', 'name': 'Data Science', 'color': 'blue', 'core1': 'Data', 'sub1': 'AI', 'sub2': 'Comp Bio', 'sub3': 'Design'},
    {'code': 'CSCI 1580', 'name': 'Information Retrieval', 'color': 'blue', 'core1': "No core", 'sub1': 'Data', 'sub2': 'AI'},
    {'code': 'ECON 1660', 'name': 'Big Data', 'color': 'blue', 'core1': "No core", 'sub1': 'Data'},
    {'code': 'CSCI 1420', 'name': 'Machine Learning', 'color': 'blue-navy', 'core1': 'Data', 'core2': 'AI', 'sub1': 'Comp Bio'},
    {'code': 'CSCI 1410', 'name': 'Artificial Intelligence', 'color': 'navy', 'core1': 'AI'},
    {'code': 'CSCI 1460', 'name': 'Computational Linguistics', 'color': 'navy', 'core1': 'AI'},
    {'code': 'CSCI 1470', 'name': 'Deep Learning', 'color': 'navy', 'core1': 'AI'},
    {'code': 'CSCI 1951R', 'name': 'Introduction to Robotics', 'color': 'navy', 'core1': 'AI'},
    {'code': 'ENGN 1610', 'name': 'Image Understanding', 'color': 'navy', 'core1': "No core", 'sub1': 'AI', 'sub2': 'Viz Comp'},
    {'code': 'CSCI 1430', 'name': 'Computational Vision', 'color': 'navy-purple', 'core1': 'AI', 'core2': 'Viz Comp'},
    {'code': 'CSCI 1230', 'name': 'Computer Graphics', 'color': 'purple', 'core1': 'Viz Comp', 'sub1': 'Design'},
    {'code': 'CSCI 1250', 'name': 'Introduction to Computer Animation', 'color': 'purple', 'core1': 'Viz Comp'},
    {'code': 'CSCI 1280', 'name': 'Intermediate to Computer Animation', 'color': 'purple', 'core1': 'Viz Comp'},
    {'code': 'CSCI 1950T', 'name': 'Advanced Animation', 'color': 'purple', 'core1': 'Viz Comp'},
    {'code': 'CSCI 1951S', 'name': 'Virtual Reality Software Review', 'color': 'purple', 'core1': 'Viz Comp'},
    {'code': 'CSCI 2240', 'name': 'Interactive Computer Graphics', 'color': 'purple', 'core1': 'Viz Comp'},
    {'code': 'CSCI 1950N', 'name': 'Game Engines', 'color': 'purple', 'core1': "No core", 'sub1': 'Viz Comp'},
    {'code': 'CLPS 1520', 'name': 'Computational Vision', 'color': 'purple', 'core1': "No core", 'sub1': 'Comp Bio', 'sub2': 'Viz Comp'},
    {'code': 'CSCI 1300', 'name': 'UI/UX', 'color': 'pink-purple', 'core1': 'Viz Comp', 'core2': 'Design'},
    {'code': 'CSCI 1370', 'name': 'Virtual Reality', 'color': 'pink-purple', 'core1': 'Viz Comp', 'core2': 'Design'},
    {'code': 'CSCI 1951C', 'name': 'Designing Humanity Centered Robots', 'color': 'pink', 'core1': 'Design', 'sub1': 'AI'},
    {'code': 'CSCI 1900', 'name': 'Startup', 'color': 'pink', 'core1': 'Design'},
    {'code': 'VISA 1720', 'name': 'Physical Computing', 'color': 'pink', 'core1': 'Design'},
    {'code': 'ENGN 1630', 'name': 'Digital Electronics System Design', 'color': 'brown', 'core1': 'Architecture'},
    {'code': 'ENGN 1640', 'name': 'Design of Computing Systems', 'color': 'brown', 'core1': 'Architecture', 'sub1': 'Systems'},
    {'code': 'ENGN 1650', 'name': 'Embedded Microprocessor Design', 'color': 'brown', 'core1': 'Architecture'},
    {'code': 'ENGN 1600', 'name': 'Design of VLSI Systems', 'color': 'brown', 'core1': 'Architecture'},
];

let emtpyImg = "https://d30y9cdsu7xlg0.cloudfront.net/png/38623-200.png";

var cart = new Set();
var displayed = false;
function moreInfo() {
//    if (displayed || checked) { return; }
//    else { displayed = true; }
//    var newDiv = "<div class='info-box'><img class='cross-image' src='Images/plus.png' onclick='closeThis()'><div class='circle core info'><img class='pathway-image' src='Images/Introductory.png'><p class='pathway-text' style='font-size: 7px; margin-top: -7px;'><b>Introductory</b></p></div><div class='box-text black info'><b>CSCI 0150</b></div><p class='box-name black info'><a href='http://cs.brown.edu/courses/csci0150/' target='_blank'>Introduction to Object-Oriented Programming</a></p><p class='box-name black prof'>Andy Van Dam</p><p class='box-name black time'>TTh 2.30-4pm</p><p class='box-name black prereqs'>Pre-reqs: None</p><p class='box-name black workload'><a href='http://www.thecriticalreview.org/CSCI/0150' target='_blank'>Workload: 11.8-23.4 hrs/week</a></p><p class='box-name black workload'>Pathways: All<p class='box-name black workload'>Offered in: Fall</p></div>"; 
//    document.getElementById("info-holder").innerHTML += newDiv;
}

function closeThis() {
    displayed = false; 
    document.getElementById('info-holder').innerHTML = "";
}

//TODO: Remove Check??
var gStorage = {};
var checked = false;
function toggle(code, anImage, anAltSrcArr) {
    checked = true; 
    if (typeof(anImage) === "undefined" || typeof(anAltSrcArr) === "undefined" || anAltSrcArr.length === 0) {
        return;
    }

    var id = anImage.id;
    var oldSrc = anImage.src;

    if (typeof(gStorage[id]) === "undefined") {
        gStorage[id] = {
            'id': id,
            'origSrc': oldSrc,
            'i': 0
        };
    }

    gStorage[id].i += 1;
    if (gStorage[id].i > anAltSrcArr.length) {
        gStorage[id].i = 0;
    }

    if (gStorage[id].i === 0) {
        anImage.src = gStorage[id].origSrc;
        courseArray[code].in_cart = false;
        cart.delete(code);
    } else {
        anImage.src = anAltSrcArr[gStorage[id].i - 1];
        courseArray[code].in_cart = true;
        cart.add(code);
    }
    //    console.log(cart);
}

function adjust() {
    checked = false; 
}

/*----------colors-2--------------*/

let pathwayToColor = {"Introductory": "white", "Intermediate": "grey", "Systems": "red", "Theory": "orange", "Security": "yellow", "Comp Bio": "green", "Software": "real", "Data": "blue", "AI": "navy", "Viz Comp": "purple", "Design": "pink", "Architecture": "brown"}

let PathwayNums = ["Introductory", "Intermediate", "Systems", "Theory", "Theory-Security", "Security", "Comp Bio", "Software", "Data", "Data-AI", "AI", "AI-Viz Comp", "Viz Comp", "Viz Comp-Design", "Design", "Architecture"]
function getPathwayNum(pathway) {
    var n = PathwayNums.indexOf(pathway);
    return String.fromCharCode(97 + n);
}

// Get a reference to the comments list in the main DOM.
var courseList = document.getElementById('courses');
var courseArray = {};
// Add courses to page
for (var i = 0; i < courses.length; i++) {
    var course = courses[i];
    var tmpl = document.getElementById('box-template').content.cloneNode(true);

    //add background color
    tmpl.querySelector('.box').classList.add(course.color);
    tmpl.querySelector('.box').setAttribute("data-color", course.color);

    tmpl.querySelector('.box').dataset.category = course.core1;
    if (!(typeof(course.core2) === "undefined")) {
        tmpl.querySelector('.box').dataset.category += "-" + course.core2;
    }
    var categ = tmpl.querySelector('.box').dataset.category;
    tmpl.querySelector('.box').dataset.category = getPathwayNum(categ);
    categ = tmpl.querySelector('.box').dataset.category;
    //adds image ID and name
    var img_id = tmpl.querySelector('.plus-image').id = course.code;
    tmpl.querySelector('.plus-image').name = course.code; 

    if (typeof(course.core2) === "undefined") {
        tmpl.querySelector('.circle.core1').remove();
        tmpl.querySelector('.circle.core2').remove();
        if (course.core1 == "No core") {
            tmpl.querySelector('.pathway-image').src = emtpyImg;
        } else {
            tmpl.querySelector('.pathway-image').src = "Images/" + course.core1 + ".png";
        }
        tmpl.querySelector('.pathway-text').innerText = course.core1;
        if (course.core1 == "Architecture") {
            tmpl.querySelector('.pathway-text').classList.add("small");
        }
    } else {
        tmpl.querySelector('.circle.core').remove();

        tmpl.querySelector('.circle.core1').querySelector('.pathway-image').src = "Images/" + course.core1 + ".png"; 
        tmpl.querySelector('.circle.core1').querySelector('.pathway-text').innerText = course.core1;

        tmpl.querySelector('.circle.core2').querySelector('.pathway-image').src = "Images/" + course.core2 + ".png"; 
        tmpl.querySelector('.circle.core2').querySelector('.pathway-text').innerText = course.core2;
        tmpl.querySelector('.circle.sub1').style.marginLeft = "157px";
    }
    
    var subs = []
    //update sub pathway(s) 
    if (typeof(course.sub1) === "undefined") {
        tmpl.querySelector('.circle.sub1').remove();
    } else {
        subs[0] = course.sub1;
        tmpl.querySelector('.circle.sub1').querySelector('.pathway-image.sub').src = "Images/" + course.sub1 + ".png"; 
        var subname = course.sub1; 
        if (subname === "Comp Bio") {subname = "C.Bio";}
        if (subname === "Architecture") {subname = "Arch";}
        if (subname === "Viz Comp") {subname = "Viz";}
        tmpl.querySelector('.circle.sub1').querySelector('.pathway-text.sub').innerText = subname;
    }
    //sub2
    if (typeof(course.sub2) === "undefined") {
        tmpl.querySelector('.circle.sub2').remove();
    } else {
        subs[1] = course.sub2;
        tmpl.querySelector('.circle.sub2').querySelector('.pathway-image.sub').src = "Images/" + course.sub2 + ".png"; 
        var subname = course.sub2; 
        if (subname === "Comp Bio") {subname = "C.Bio";}
        if (subname === "Architecture") {subname = "Arch";}
        if (subname === "Viz Comp") {subname = "Viz";}
        tmpl.querySelector('.circle.sub2').querySelector('.pathway-text.sub').innerText = subname;
    }

    //sub3
    if (typeof(course.sub3) === "undefined") {
        tmpl.querySelector('.circle.sub3').remove();
    } else {
        subs[2] = course.sub3;
        tmpl.querySelector('.circle.sub3').querySelector('.pathway-image.sub').src = "Images/" + course.sub3 + ".png"; 
        var subname = course.sub3; 
        if (subname === "Comp Bio") {subname = "C.Bio";}
        tmpl.querySelector('.circle.sub3').querySelector('.pathway-text.sub').innerText = subname;
    }

    tmpl.querySelector('.box-text').innerText = course.code;
    tmpl.querySelector('.box-name').innerText = course.name;
    if (course.core1 == "Introductory") {
        tmpl.querySelector('.box-text').classList.add("black");
        tmpl.querySelector('.box-name').classList.add("black");
    }
    if (course.core1 == "Introductory" || course.core1 == "Intermediate") {
        tmpl.querySelector('.circle.core').querySelector('.pathway-text').classList.add("small");
    }
    if (!(typeof(course.sub3) === "undefined")) {
        tmpl.querySelector('.box-text').style.marginTop = "37px";
    }

    for (j=0; j<subs.length; j++) {
        var sub_toadd = subs[j];
        if (sub_toadd === "Comp Bio") {sub_toadd = "CBio"}
        else if (sub_toadd === "Viz Comp") {sub_toadd = "Viz"}
        tmpl.querySelector('.box').classList.add(sub_toadd);
    }

    if (!(typeof(course.pathways) === "undefined")) {
        for (j=0; j<course.pathways.length; j++) {
            var sub_toadd = course.pathways[j];
            tmpl.querySelector('.box').classList.add(sub_toadd);
        } 
    }


    courseList.appendChild(tmpl);

    if (typeof(courseArray[course.code]) === "undefined") {
        courseArray[course.code] = {
            'name': course.name,
            'img_id': img_id,
            'core': course.core1,
            'in_cart': false,
            'subs': subs,
            category: categ,
        };
    } 
    //console.log(courseArray);
}

/*----Isotope stuff---*/
//function coreSort(order) {
//    var n = order.indexOf(pathway);
//    return String.fromCharCode(97 + n);
//}

var $grid = $('.grid').isotope({
    itemSelector: '.box',
    layoutMode: 'fitRows',
    getSortData: {
        code: '.box-text',
        name: '.box-name',
        core: '[data-core]',
        category: '[data-category]',
        color: '[data-color]',
    }
});


// filter functions
//var filterFns = {
//    // show if number is greater than 50
//    numberGreaterThan50: function() {
//        var number = $(this).find('.number').text();
//        return parseInt( number, 10 ) > 50;
//    },
//    // show if name ends with -ium
//    ium: function() {
//        var name = $(this).find('.name').text();
//        return name.match( /ium$/ );
//    }
//};

//var sortCore = {
//    
//}

var filters = {};
// bind filter button click
$('.filters').on( 'click', 'button', function() {
    //    var filterValue = $( this ).attr('data-filter');
    //    var order = []; 
    //    var filterVal = '';
    //    for (i = 0; filterVal!==undefined; i++) {
    //        order[i] = filterVal;
    //        filterVal = filterValue.split(',')[i];
    //    }
    //
    //    // use filterFn if matches value
    //    //filterValue = filterFns[filterValue] || filterValue;
    //
    //
    //    $grid.isotope({ filter: filterValue });
    //    var elems = $grid.isotope('getFilteredItemElements')
    //    var core_order = 0;
    //    for(j=0; j<order.length; j++) {
    //        var o = order[j].substring(1, order[j].length)
    //        for(i=0; i<elems.length; i++) {
    //            if (elems[i].classList.contains(o) && !(elems[i].classList.contains('grey'))) {
    //                elems[i].setAttribute('data-core', String.fromCharCode(97 + core_order));
    //                core_order++;
    //            }
    //        }
    //    }
    //    $grid.isotope('updateSortData').isotope();
    //    $grid.isotope({ sortBy: 'core' });
    //    for(i=0; i<elems.length; i++) {
    //        elems[i].setAttribute('data-core', 'z');
    //    }




    var $this = $(this);
    var $buttonGroup = $this.parents('.button-group');
    var filterGroup = $buttonGroup.attr('data-filter-group');
    // set filter for group

    filters[ filterGroup ] = $this.attr('data-filter');
    console.log(filters[ filterGroup ]);
    // combine filters

    filterValue = concatValues( filters );

    // set filter for Isotope
    $grid.isotope({ filter: filterValue });

    if(filterValue.includes('.grey') && !filterValue.includes(':not(.white, .grey)')) {
        var elems = $grid.isotope('getFilteredItemElements');
        for(i=0; i<elems.length; i++) {
            if (elems[i].classList.contains("grey")) {
                console.log(elems[i].classList);
                elems[i].classList = "box grey";
            }
            
        }
    }
    $grid.isotope({ sortBy : ['date-color'] });
    $grid.isotope({ filter: filterValue });
    $grid.isotope('updateSortData').isotope();


        var filterValue = $( this ).attr('data-filter');
        var order = []; 
        var filterVal = '';
        for (i = 0; filterVal!==undefined; i++) {
            order[i] = filterVal;
            filterVal = filterValue.split(',')[i];
        }

    // use filterFn if matches value
//    filterValue = filterFns[filterValue] || filterValue;


        $grid.isotope({ filter: filterValue });
        var elems = $grid.isotope('getFilteredItemElements')
        var core_order = 0;
        for(j=0; j<order.length; j++) {
            var o = order[j].substring(1, order[j].length)
            for(i=0; i<elems.length; i++) {
                if (elems[i].classList.contains(o) && !(elems[i].classList.contains('grey'))) {
                    elems[i].setAttribute('data-core', String.fromCharCode(97 + core_order));
                    core_order++;
                }
            }
        }
        $grid.isotope('updateSortData').isotope();
        $grid.isotope({ sortBy: 'core' });
        for(i=0; i<elems.length; i++) {
            elems[i].setAttribute('data-core', 'z');
        }
});

// bind sort button click
$('#sorts').on( 'click', 'button', function() {

    var sortByValue = $(this).attr('data-sort-by');
    $grid.isotope({ 
        sortBy: sortByValue,
    });

});

$('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $( this ).addClass('is-checked');
    });
});

// flatten object by concatting values
function concatValues( obj ) {
    var value = '';
    for ( var prop in obj ) {
        value += obj[ prop ];
    }
    return value; 
}
