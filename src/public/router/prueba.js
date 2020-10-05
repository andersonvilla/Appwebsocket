var socket = io.connect('http://localhost:3000', {'forceNEw': true});
socket.on('messages', function(data){
    console.log(data);
    render(data);
})

window.addEventListener('hashchange', () => {
    
})
function render(data){
   
    var html = data.map(function(elem, index ){
        return(`<tr>
        <td><strong>${elem.titulo}</strong></td>
        <td><em>${elem.precio}</em></td> 
        <td><em>${elem.nombre}</em></td>
        <td><em>${elem.tiempo}</em></td>
        </tr>`);
    }).join(" ");    
    document.getElementById('prob').innerHTML = html;
 }





