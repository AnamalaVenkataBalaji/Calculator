
   function digitalclock()
        {
            var date=new Date();
            var hh=date.getHours();
            var mm=date.getMinutes();
            var ss=date.getSeconds();
            var ms=date.getMilliseconds();
            var am_pm="AM"
            if(hh>=12)
            {
                if(hh>12)
                {
                    hh-=12;
                }
                am_pm="PM"
            }
            if(hh==0)
            {
                hh=12;
            }
            var time=hh+":"+mm+":"+ss+" "+am_pm
            document.getElementById("Time").innerHTML=time 
            var t=setTimeout(function(){digitalclock()},1000)

        }