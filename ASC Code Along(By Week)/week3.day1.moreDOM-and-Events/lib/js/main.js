
//For moving on the weapons box//
/*var dragItem = document.querySelector('#weapons');
var container = document.querySelector('.main_container');

var active = false;
    var currentXPosition;
    var currentYPosition;
    var initialXPosition;
    var initialYPosition;
    var xCoord = 0;
    var yCoord = 0;

    container.addEventListener("touchstart", dragStart, false);
    container.addEventListener("touchend", dragEnd, false);
    container.addEventListener("touchmove", drag, false);

    container.addEventListener("mousedown", dragStart, false);
    container.addEventListener("mouseup", dragEnd, false);
    container.addEventListener("mousemove", drag, false);

    function dragStart(e) {
      if (e.type === "touchstart") {
        initialX = e.touches[0].clientX - xCoord;
        initialY = e.touches[0].clientY - yCoord;
      } else {
        initialX = e.clientX - xCoord;
        initialY = e.clientY - yCoord;
      }

      if (e.target === dragItem) {
        active = true;
      }
    }

    function dragEnd(e) {
      initialX = currentXPosition;
      initialY = currentYPosition;

      active = false;
    }

    function drag(e) {
      if (active) {
        if (e.type === "touchmove") {
          e.preventDefault();
          
          currentXPosition = e.touches[0].clientX - initialX;
          currentYPosition = e.touches[0].clientY - initialY;
        } else {
          currentXPosition = e.clientX - initialX;
          currentYPosition = e.clientY - initialY;
        }

        xCoord = currentXPosition;
        yCoord = currentYPosition;

        setTranslate(currentXPosition, currentYPosition, dragItem);
      }
    }

    function setTranslate(xPos, yPos, el) {
      el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
    }
    */

    //to move all of the elements
   var container = document.querySelector(".images");
   var activeItem = null;

   var active = false;

   /*container.addEventListener("touchstart", dragStart, false);
   container.addEventListener("touchend", dragEnd, false);
   container.addEventListener("touchmove", drag, false);*/

   container.addEventListener("mousedown", dragStart, false);
   container.addEventListener("mouseup", dragEnd, false);
   container.addEventListener("mousemove", drag, false);

   function dragStart(e) {

     if (e.target !== e.currentTarget) {
       active = true;

       // this is the item we are interacting with
       activeItem = e.target;

       if (activeItem !== null) {
         if (!activeItem.xOffset) {
           console.log("hi");
           activeItem.xOffset = 0;
         }

         if (!activeItem.yOffset) {
           activeItem.yOffset = 0;
         }

         if (e.type === "touchstart") {
           activeItem.initialX = e.touches[0].clientX - activeItem.xOffset;
           activeItem.initialY = e.touches[0].clientY - activeItem.yOffset;
         } else {
           console.log("doing something!");
           activeItem.initialX = e.clientX - activeItem.xOffset;
           activeItem.initialY = e.clientY - activeItem.yOffset;
         }
       }
     }
   }

   function dragEnd(e) {
     if (activeItem !== null) {
       activeItem.initialX = activeItem.currentX;
       activeItem.initialY = activeItem.currentY;
     }

     active = false;
     activeItem = null;
   }

   function drag(e) {
     if (active) {
       if (e.type === "touchmove") {
         e.preventDefault();

         activeItem.currentX = e.touches[0].clientX - activeItem.initialX;
         activeItem.currentY = e.touches[0].clientY - activeItem.initialY;
       } else {
         activeItem.currentX = e.clientX - activeItem.initialX;
         activeItem.currentY = e.clientY - activeItem.initialY;
       }

       activeItem.xOffset = activeItem.currentX;
       activeItem.yOffset = activeItem.currentY;

       setTranslate(activeItem.currentX, activeItem.currentY, activeItem);
     }
   }

   function setTranslate(xPos, yPos, el) {
     el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
   }
