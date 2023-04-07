console.log("grouik");
window.onload=(e)=>{
     let article = new Map();
      article.set('1',{categorie:"smartphone",name:"Galaxy1",brand:"Samsung",price:154});
      article.set('2',{categorie:"smartphone",name:"Galaxy2",brand:"Samsung",price:262});
      article.set('3',{categorie:"smartphone",name:"Galaxy3",brand:"Samsung",price:343});
      article.set('4',{categorie:"smartphone",name:"Iphone 230",brand:"Apple",price:532});
      article.set('5',{categorie:"smartphone",name:"Iphone 360",brand:"Apple",price:632});
      article.set('6',{categorie:"Pc",name:"Desktop",brand:"HP",price:540});
      article.set('7',{categorie:"Pc",name:"Gaming",brand:"CyberTek",price:1580});
      article.set('8',{categorie:"Pc",name:"Customing",brand:"Intel",price:770});
      article.set('9',{categorie:"tablet",name:"Perrier",brand:"FrenchDrink",price:252});
      article.set('10',{categorie:"tablet",name:"R-Garros",brand:"FrenchDrink",price:360});
      article.set('11',{categorie:"tablet",name:"Nadal",brand:"Mayorque",price:450});

console.log(article)
const articleDiv = document.querySelector('.articleBoard') //find the table div in html
const articleBut =document.querySelector('.articleBoard')
      let headArticle=["ID","Name","brand","Price"]

function createArticleTable() {
   console.log("hello");
   const listOfArticle=document.getElementById('list-of-article')
   while (listOfArticle.firstChild) listOfArticle.removeChild(listOfArticle.firstChild)
   
   let articleboardTable = document.createElement('table')
   articleboardTable.className ='articleboardTable'

   let articleboardTableHead = document.createElement('thead')
   articleboardTableHead.className='articleboardTableHead'

   let articleboardTableHeaderRow = document.createElement('tr')
   articleboardTableHeaderRow.className='articleboardTableHeaderRow'

   //console.log(article)
   article.forEach(article => {
     let articleHeader = document.createElement('th')
     articleHeader.innerHTML += (`${article.categorie} ${article.name} ${article.brand} ${article.price} `)
     articleboardTableHeaderRow.append(articleHeader)
     console.log()
   })
   let articleboardTableBody = document.createElement('t-body')
   articleboardTableBody.className ="articleboardTable-Body"
   articleboardTable.append(articleboardTableBody)
   articleboardTableBody.append(articleboardTableHead)
   articleboardTableHead.append(articleboardTableHeaderRow)

   
   listOfArticle.append(articleboardTable)
   ;
}
function createArticleCat(categorie){
      const listOfArticle=document.getElementById('list-of-article')
       while (listOfArticle.firstChild) listOfArticle.removeChild(listOfArticle.firstChild)
   
   let articleboardTable = document.createElement('table')
   articleboardTable.className ='articleboardTable'

   let articleboardTableHead = document.createElement('thead')
   articleboardTableHead.className='articleboardTableHead'

   let articleboardTableHeaderRow = document.createElement('tr')
   articleboardTableHeaderRow.className='articleboardTableHeaderRow'

   article.forEach(value => {
      let articleHeader = document.createElement('th')
      if (value.categorie === categorie)
      articleHeader.innerHTML += `${value.name}  ${value.brand}  ${value.price}`
     
      articleboardTableHeaderRow.append(articleHeader)
      console.log()
    });
      let articleboardTableBody = document.createElement('t-body')
      articleboardTableBody.className ="articleboardTable-Body"
      articleboardTable.append(articleboardTableBody)
      articleboardTableBody.append(articleboardTableHead)
      articleboardTableHead.append(articleboardTableHeaderRow)
      listOfArticle.append(articleboardTable);
}
buttonAll.addEventListener("click",()=>createArticleTable());
buttonPc.addEventListener("click",()=>createArticleCat("Pc"));
buttonTab.addEventListener("click",()=>createArticleCat("tablet"));
buttonSmart.addEventListener("click",()=>createArticleCat("smartphone"));
}