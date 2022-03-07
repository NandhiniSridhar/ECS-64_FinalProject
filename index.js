"use strict"
//alert("Hello World");

function addRow(){
    console.log("entered add row function");
    //let courses_cc = (document.getElementsByClassName("cc_left"))

    //new form and new select
    let new_form = document.createElement("form");
    //new_form.setAttribute("name", "newForm");
    let new_select = document.createElement("select");

    //options for select
    let new_option = document.createElement("option");
    new_option.setAttribute("value", "default")
    new_option.innerHTML = "Select A Class";
    new_select.appendChild(new_option);

    for(let i = 1; i < 5; i++){
        let option_entry = document.createElement("option");
        option_entry.innerHTML = "Class " + i;
        new_select.appendChild(option_entry);
    }

    //add selections to form
    new_form.appendChild(new_select);
    document.getElementById("new_forms").appendChild(new_form); //add forms to left side

    let new_input = document.createElement("input");
    new_input.setAttribute("class", "units");
    new_input.setAttribute("type", "text");
    document.getElementById("new_units").appendChild(new_input);

    //adding equivalent classes to right side (4 year school)
    let new_equiv = document.createElement("p");
    new_equiv.innerHTML = "New Class";
    document.getElementById("uni_courses").appendChild(new_equiv);

    let new_units = document.createElement("p")
    new_units.innerHTML = Math.ceil(Math.random() * 5);
    document.getElementById("uni_units").appendChild(new_units);

}