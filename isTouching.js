function isTouching(rect){

    if(mrect.x-rect.x<mrect.width/2+rect.width/2&&rect.x-mrect.x<mrect.width/2+rect.width/2&&
        mrect.y-rect.y<mrect.height/2+rect.height/2&&rect.y-mrect.y<mrect.height/2+rect.height/2)
        {
    
       return true
      
      }
      else{
        return false
        mrect.shapeColor = ("red")
      }
    
    }

    function Bounceoff(rect,mrect){

        if(mrect.x-rect.x<mrect.width/2+rect.width/2&&rect.x-mrect.x<mrect.width/2+rect.width/2&&
            mrect.y-rect.y<mrect.height/2+rect.height/2&&rect.y-mrect.y<mrect.height/2+rect.height/2)
            {
          mrect.velocityY *= -1
          }
        }