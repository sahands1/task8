function getImg(){
 
    var apiBase ='https://jsonplaceholder.typicode.com/photos/';
    
    axios.get(apiBase).then(response => {
    response.data.slice(1, 5).forEach(pic => {
    //slice(1,5) method returns 5 elements in an array at a time
    $("#tasks").html($("#tasks").html() + `<div>
    
    <img src="${pic.url}" alt="${pic.title}" />
    
    <p>Title: ${pic.title}</p> 
    
    </div>`)
    
    });
    
    });
};


