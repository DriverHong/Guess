//let myHeading =document.querySelector('h1');  /* querySelector 函数获取标题 */
//myHeading.textContent='Hello Word!';    /* 调用textContent 修改标题内容 */

window.onload=function() {
    let myImage = document.getElementById('t'); //获取标签id，
     myImage.onclick=function () {              //给标签绑定点击事件
        let mySrc = myImage.getAttribute('src');//获取图片路径
        if(mySrc === 'img/favorite-1_th.jpg') {    //用条件语句判断src是否等于原图路径
          myImage.setAttribute('src', 'img/favorite-2_th.jpg');
        } else {
          myImage.setAttribute('src', 'img/favorite-1_th.jpg');
        }
    }


    function setHeading(name) {
        let myHeading = document.querySelector('h1');
        myHeading.textContent = 'JS 酷毙了，' + name + '！';
      }
      
      //prompt()函数显示一个对话框，对话框中包含一条文字信息，用来提示用户输入文字。
      //localStorage API它可以将数据存储在浏览器中供后续获取
      //setItem() 函数创建一个'name' 数据项，并把 myName 变量复制给它。 
      //最后调用上述的 setHeading 函数来个性化欢迎信息。
      function setUserName() {              
        let myName = prompt('请输入你的名字');     
        localStorage.setItem('name', myName);     
        setHeading(myName);
      } 
      
      let storedName = localStorage.getItem('name');
      if(!storedName) {
         setUserName();
      } else {
         setHeading(storedName);
      }
      
      let myButton = document.querySelector('button'); 
      myButton.onclick = setUserName;

}