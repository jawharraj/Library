var library=[];
function addBook(){
    let book={
        title:document.getElementById('Bname').value,
        author:document.getElementById('Aname').value,
        year:document.getElementById('Year').value,
        getSummary:function(){
            return `The ${this.title} written by ${this.author} published in ${this.year}`
        }
    }
    library.push(book);
    console.log(library);
}
function removeLastBook(){
    let arr=library.pop();
    console.log(arr);
    document.getElementById('view').innerHTML=JSON.stringify(arr);
}
function removeFirstBook(){
    let arr1=library.shift();
    console.log(arr1);
    document.getElementById('view').innerHTML=JSON.stringify(arr1);
}
function getTitles(){
    let arr1="Titles:"+ library.map(a=>a.title);
    console.log(arr1);
    document.getElementById('view').innerHTML=JSON.stringify(arr1);
}
function viewLibrary(){
    let arr=library.map(a=>a.getSummary());
    console.log(arr);
    document.getElementById('view').innerHTML=JSON.stringify(arr);
}
let author1;
function getAuthor(author1){
     author1=prompt("Enter the author to search");
        let arr1=library.filter(a=>a.author==author1);
        document.getElementById('view').innerHTML=JSON.stringify(arr1);
}
let year1;
  function getTotalBooksPublishedBefore(year1) {
    year1=Number(prompt("Enter the year to count"));
    let arr1=library.filter(book => book.yearPublished < year1).reduce((count) => count + 1, 0);
    document.getElementById('view').innerHTML=JSON.stringify("Book Published before the year "+arr1);
  }
let title1;
function removeBookByTitle(title1){
    title1=prompt("Enter the title to remove Book:");
    let arr1=library.splice(a=>a.title==title1,1);
    document.getElementById('view').innerHTML=JSON.stringify(arr1);
}

