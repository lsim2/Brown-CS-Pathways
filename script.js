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

let interList = {
	'All': ['CSCI 0220', 'CSCI 1010', 'MATH 0520', 'APMA 1650', 'MATH 0180', 'CSCI 0330', 'CSCI 0320'],
	'Foundations': ['CSCI 0220', 'CSCI 1010'],
	'Mathematics': ['MATH 0520', 'APMA 1650', 'MATH 0180'],
	'Systems': ['CSCI 0330', 'CSCI 0320']
};


let emtpyImg = "https://d30y9cdsu7xlg0.cloudfront.net/png/38623-200.png";

var cart = new Set();
var displayed = false;

function closeThis() {
    displayed = false; 
    document.getElementById('info-holder').innerHTML = "";
}

//TODO: Remove Check??
var gStorage = {};
let intermediates = {
	'Total': new Set(),
	'Number': 0,
	'Foundations': new Set(),
	'Mathematics': new Set(),
	'Systems': new Set(),
};
let advanced = {
    'Total': 0,
};
var checked = false;
let introComplete = false;
let interAB = false; 
let interScB = false; 
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
        anImage.parentNode.classList.remove("checked");
        anImage.src = gStorage[id].origSrc;
        courseArray[code].in_cart = false;
        cart.delete(code);

        // remove from intermediates
        if (interList['All'].includes(code)) {
    		for (var type in interList) {
    			if (type == 'All') continue;
    			if (intermediates[type].has(code)) {
    				intermediates[type].delete(code);
    				if (intermediates[type].size == 0) intermediates['Number'] -= 1;
    				intermediates['Total'].delete(code);
    			}
    		} // remove from advanced
    	} else if (courseArray[code].core != "Introductory") {
            let course = courseArray[code];
            removeCore(course, course.core);

            if (!(typeof(course.core2) === "undefined")) {
                removeCore(course, course.core2);
            }
            
            for (i = 0; i < course.subs.length; i++) {
                let sub = course.subs[i];
                if (sub in advanced) {
                    advanced[sub].set.delete(code);
                } 
            }
            advanced["Total"] -= 1;

        }
    } else {
        anImage.parentNode.classList.add("checked");
        anImage.src = anAltSrcArr[gStorage[id].i - 1];
        courseArray[code].in_cart = true;
        cart.add(code);
        if (interList['All'].includes(code)) {
    		for (var type in interList) {
    			if (type == 'All') continue;
    			if (interList[type].includes(code)) {
    				if (intermediates[type].size == 0) intermediates['Number'] += 1;
    				intermediates[type].add(code);
    				intermediates['Total'].add(code);
    			}
    		} // check advanced
    	} else if (courseArray[code].core != "Introductory") {
            let course = courseArray[code];
            addCore(course, course.core);

            if (!(typeof(course.core2) === "undefined")) {
                addCore(course, course.core2);
            }
            
            for (i = 0; i < course.subs.length; i++) {
                let sub = course.subs[i];
                if (!(sub in advanced)) {
                    advanced[sub] = {
                        'core': false,
                        'set': new Set(),
                        'done': false
                    };
                } 
                advanced[sub].set.add(code);
            }
            advanced["Total"] += 1;

        }
    }
    checkIntro(cart);
    checkInter();
    checkDegree(cart);
}

function intermediatesOfPathway(pathway) {
    let interSet = intermediates["Total"];
    let interSatisfied = false;
    switch(pathway) {
      case "Systems":
        interSatisfied = interSet.has("CSCI 0330") && (interSet.has("CSCI 0220") || interSet.has("CSCI 0320"));
        break;
      case "Software":
        interSatisfied = interSet.has("CSCI 0330") && interSet.has("CSCI 0220") && interSet.has("CSCI 0320");
        break;
      case "Data":
        interSatisfied = interSet.has("APMA 1650") && interSet.has("MATH 0520") && (interSet.has("CSCI 0320") || interSet.has("CSCI 0330"));
        break;
      case "AI":
        interSatisfied = interSet.has("APMA 1650") && interSet.has("MATH 0520");
        break;
      case "Theory":
        interSatisfied = interSet.has("APMA 1650") && interSet.has("MATH 0520") && interSet.has("CSCI 1010");
        break;
      case "Security":
        interSatisfied = (interSet.has("APMA 1650") || interSet.has("CSCI 0220")) && interSet.has("CSCI 0330") && interSet.has("CSCI 1010");
        break;
      case "Viz Comp":
        interSatisfied = (interSet.has("CSCI 0330") || interSet.has("CSCI 0320")) && interSet.has("MATH 0520");
        break;
      case "Architecture":
        interSatisfied = interSet.has("CSCI 0330");
        break;
      case "Comp Bio":
        interSatisfied = interSet.has("CSCI 0220") && interSet.has("APMA 1650") && interSet.has("CSCI 1010");
        break;
      case "Design":
        interSatisfied = (interSet.has("CSCI 0330") || interSet.has("CSCI 0320")) && interSet.has("APMA 1650");
        break;
      default:
        break;
    }
    return interSatisfied;
}

function addCore(course, core) {
    if (core in advanced) {
        advanced[core].set.add(course.img_id);
        advanced[core].core = true;
    } else if (!(core in advanced) && core != "No core") {
        advanced[core] = {
            'core': true,
            'set': new Set(), 
            'done': false
        };
            advanced[core].set.add(course.img_id);
        } 
}

function removeCore(course, core) {
    if (core in advanced) {
        advanced[core].set.delete(course.img_id);
        for (let code of advanced[core].set) { 
            if (!(courseArray[code].core == core || courseArray[code].core2 == core)) {
                advanced[core].core = false;
                advanced[core].done = false;
            }
        }
        
    } 
}

function checkPathwayComplete(core) {
    advanced[core].done = false; 
    if (advanced[core].set.size >= 2 && advanced[core].core) {
            if (intermediatesOfPathway(core)) {
                advanced[core].done = true;  
            } 
    }
    return advanced[core].done;
}

function checkIntro(cart) {
	if ((cart.has("CSCI 0150") && cart.has("CSCI 0160")) 
    	|| (cart.has("CSCI 0170") && cart.has("CSCI 0180"))
    	|| cart.has("CSCI 0190"))  {
    	introComplete = true;
	} else {
		introComplete = false;
	}
}

function checkInter() {
	if (intermediates['Number'] >= 3 && intermediates['Total'].size >= 5) {
		interScB = true;
	} else if (intermediates['Number'] >= 2 && intermediates['Total'].size >= 3) {
		interScB = false;
		interAB = true;
	} else {
		interScB = false;
		interAB = false;
	}
}

function checkDegree(cart) {
    let numPaths = 0;
    let pathStrings = "";
    let nonPathStrings = "";
    let pathsTouched = 0;
    for (var p in advanced) {
            if (p != "Total") {
                if (checkPathwayComplete(p))  {
                    numPaths++; 
                    pathStrings += ", " + p;
                } else {
                    pathsTouched++;
                    nonPathStrings += ", " + p;
                }
            }
    }
    if (numPaths > 0) $("#progress").text("Selected " + cart.size + " courses and " + numPaths + " pathway(s): " + pathStrings.substring(1));
    else { $("#progress").text("Selected " + cart.size + " course(s). Select intermediate and advanced courses to see which pathways you can complete!"); }
   $("#complete").text("");
   if (cart.size >= 15) {
         if (introComplete && interScB && numPaths >= 2 && pathsTouched > 0) {
            $("#complete").text("ScB Completed!! Make sure you do a Capstone!");
        }
   } else if (cart.size >= 9) {
        if (introComplete && interAB && numPaths >= 1 && pathsTouched > 0) {
            $("#complete").text("AB Completed!! Complete 15 courses with a capstone to complete a ScB!");
            if (numPaths < 2) {
                $("#complete").text("AB Completed!! Complete 15 courses and one pathway out of: [" + nonPathStrings.substring(1) + "] to complete an ScB!");
            }
            
        }
    }
   
}

function adjust() {
    checked = false; 
}

function move(num) {
  var elem = document.getElementById("myBar");   
  var width = 1;
  if (elem.style.width == (num+'%')) return;
  if (num == 0) {
       elem.style.backgroundColor = '#ddd';
       elem.style.width = '0%'; 
       elem.innerHTML = '0%';
       return;     
  } 
  var id = setInterval(frame, 10);
  function frame() {
      if (width >= num) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.backgroundColor = '#4CAF50';
      elem.style.width = width + '%'; 
      elem.innerHTML = width * 1  + '%';
    }
    }
   
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
    let courseCode = course.code.toLowerCase().split(" ");
    if (courseCode[0] == "csci") {
    	let code = courseCode[1];
    	if (courseCode[1].length > 4) {
    		code = courseCode[1].substring(0,4) + "-" + courseCode[1].substring(4,5).toLowerCase();
    	}
    	const link = "https://cs.brown.edu/courses/info/csci" + code + "/";
    	tmpl.querySelector('.box-text').innerHTML = "<a class='" + course.color + "'href='" + link + "' target='_blank'>"+ course.code + "</a>";
    	tmpl.querySelector('.box-name').innerHTML = "<a class='" + course.color + "'href='" + link + "' target='_blank'>"+ course.name + "</a>";
    } 
    
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

        if (!(typeof(course.core2) === "undefined")) {
            courseArray[course.code].core2 = course.core2;
        }
    } 
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
