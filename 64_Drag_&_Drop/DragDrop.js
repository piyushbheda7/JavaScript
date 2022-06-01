console.log('hello')

let imgbox = document.querySelector('.imgbox')
let whiteboxs = document.getElementsByClassName('whitebox')

imgbox.addEventListener('dragstart' , (e)=>{
    console.log('start');
    e.target.className += ' hold';

    setTimeout(() => {
        e.target.className = ' block';
        
    }, 0);

})
imgbox.addEventListener('dragend' , (e)=>{
    console.log('end')
    e.target.className = 'imgbox' ;  // and it is already have block method when it draged
    // this is because when we drop the imgbox it should again contain imgbox property
})

for ( whitebox of whiteboxs )
{
    whitebox.addEventListener('dragover' ,function(e){
        console.log('dragover')
        e.preventDefault();
    });

    whitebox.addEventListener('dragenter' ,function(e){
        console.log('dragenter')
        e.target.className += ' dashed';
    });

    whitebox.addEventListener('dragleave' ,function(e){
        console.log('dragleave')
        e.target.className = 'whitebox';
    });

    whitebox.addEventListener('drop' ,function(e){
        console.log('dragdrop')
        e.target.append(imgbox)
    });
}