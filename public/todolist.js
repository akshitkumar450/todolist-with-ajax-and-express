$(function (){
    let input=$('#input')
    let btn=$('#btn')
    let ul=$('#ul')

    btn.click(()=>{
      let newtodo= input.val();

      //jquery post request
       $.post(
           '/todos/',
           {task:newtodo},
           function (data){
               ul.empty();
               for(let todo of data) {
                   ul.append('<li>' + todo.task + '</li>')
               }
           }
       )
    })
})