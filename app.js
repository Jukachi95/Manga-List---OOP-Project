// Manga Constructor

function Manga(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}


function UserInt(){

}

UserInt.prototype.addMangaToList = function(manga){
    const list = document.getElementById("book-list");
    
    const row = document.createElement('tr');

    row.innerHTML = `
    <td>${manga.title}</td>
    <td>${manga.author}</td>
    <td>${manga.isbn}</td>
    <a href="#" class="delete">X</a>
    `;

    list.appendChild(row)
}


UserInt.prototype.deleteBook = function(target){
        
    if(target.className === "delete"){
        target.parentElement.parentElement.remove()
    }
}


UserInt.prototype.clearFields = function(){
    document.getElementById('m-title').value = '';
    document.getElementById('m-author').value = '';
    document.getElementById('m-isbn').value = '';
}





UserInt.prototype.setMessage = function(message, className){
    // Create Div
        const div = document.createElement('div');
        // Give div a class
        div.className = `alert ${className}`;
        // Set Message
        div.appendChild(document.createTextNode(message))
        // Get container
        const container = document.querySelector('.container');
        // Get form
        const form = document.getElementById('book-form');

        container.insertBefore(div, form)


        setTimeout(function(){
                document.querySelector('.alert').remove()
        },3000)
}




// Add event listener
document.getElementById("book-form").addEventListener('submit', function(e){

        // Declare variables
        const title = document.getElementById("m-title").value;
        const author = document.getElementById("m-author").value;
        const isbn = document.getElementById("m-isbn").value;

        // Instantiate new manga from Manga constructor
        const manga = new Manga(title, author, isbn);



        

        // Instantiate new UI constructor
        const ui = new UserInt();

        // Add manga to ui prototype
        


        if(title === '' || author === '' || isbn === ''){
                ui.setMessage('Please enter values in the provided fields', 'error')
        } else{
         ui.addMangaToList(manga)
        
        ui.setMessage('Book added', 'success')

          ui.clearFields()
        }



    e.preventDefault();
})


// Delete items from list

document.getElementById('book-list').addEventListener('click', function(e){

    const ui = new UserInt();

    ui.deleteBook(e.target)

    ui.setMessage('Book removed', 'success')
    
e.preventDefault()

})




// UserInt.prototype.setSuccessMessage = function(message, className){
    //     const div = document.createElement('div');
    
    //     div.className = `success ${className}`;
    
    //     div.appendChild(document.createTextNode(message));
    
    //     const container = document.querySelector('.container');
    
    //     const form = document.getElementById('book-form');
    
    //     container.insertBefore(div, form)
    
    
    //     setTimeout(function(){
    //             document.querySelector('.success').remove()
    //     },3000)
    // }