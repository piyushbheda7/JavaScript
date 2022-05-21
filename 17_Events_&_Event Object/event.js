
// document.getElementById('Heading').addEventListener('click' , function(e) {
//         console.log(e) // return all the functions/object of addEventListner object
        
//         window.alert('You clicked heading')

//         // location.href = '//codewithharry.com'
        
//         let variable = e.target
//         console.log(variable)

//         console.log(e.target.className)
//         console.log(e.target.classList[0])

//         variable = e.offsetX
//         console.log(variable)
//         variable = e.offsetY
//         console.log(variable)
//         variable = e.clientX
//         console.log(variable)
//         variable = e.clientY
//         console.log(variable)
//     }
// );

document.getElementById('Heading').addEventListener('mouseover' , function(e) {
        console.log(e) // return all the functions/object of addEventListner object
        
        // window.alert('You clicked heading')

        // location.href = '//codewithharry.com'
        
        let variable = e.target
        console.log(variable)

        console.log(e.target.className)
        console.log(e.target.classList[0])

        variable = e.offsetX
        console.log(variable)
        variable = e.offsetY
        console.log(variable)
        variable = e.clientX
        console.log(variable)
        variable = e.clientY
        console.log(variable)
    }
);