document.addEventListener("DOMContentLoaded",function(){
    this.querySelector(".icon").addEventListener("click",function(){ // Создаём event onClick
      let waitClass = "waiting",
        runClass = "running",
        cl = this.classList;
  
      if (!cl.contains(waitClass) && !cl.contains(runClass)) {
        cl.add(waitClass);
        setTimeout(function(){
          cl.remove(waitClass);
          setTimeout(function(){
            cl.add(runClass);
            setTimeout(function(){
                // После загрузки сайд бара что будет происходить...
                alert("Function Start");
              cl.remove(runClass);
            }, 4000);
          }, 200);
        }, 1800);
      }
    });
  });