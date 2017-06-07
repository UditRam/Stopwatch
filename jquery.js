$(function(){
    var mode=0;
    var timecounter=0;
    var lapcounter=0;
    var action;
    var lapnumber=0;


    var tmin, tsec, tcentisec, lmin, lsec, lcentisec;

    hidebuttons("#start","#reset");

    //    On clicking Start button
    $("#start").click(function(){
        mode=1;
        hidebuttons("#stop", "#lap");
        startAction();
    });

    //    On clicking Stop button
    $("#stop").click(function(){
        hidebuttons("#resume", "#reset");
        clearInterval(action);
    });

    //    On clicking resume button
    $("#resume").click(function(){
        hidebuttons("#stop", "#lap");
        startAction();
    });

    //    On clicking reset button
    $("#reset").click(function(){
        location.reload();
    });

    //    On clicking Lap button
    $("#lap").click(function(){
        if(mode==1){
            clearInterval(action);
            lapcounter=0;
            addlap();
            startAction();

        }
    })







    //    Function to hide and show buttons
    function hidebuttons(x,y){
        $(".btn").hide();
        $(x).show();
        $(y).show();
    }

    function startAction(){
        action = setInterval(function(){
            timecounter++;
            lapcounter++;
            updatetime();
        },10)
    }

    //    Function to change time on screen
    function updatetime(){
        //1min = 60*100centisec
        tmin = Math.floor(timecounter/6000);
        tsec = Math.floor((timecounter%6000)/100);
        tcentisec = (timecounter%6000)%100;
        $("#tmin").text(format(tmin));
        $("#tsec").text(format(tsec));
        $("#tms").text(format(tcentisec));

        lmin = Math.floor(lapcounter/6000);
        lsec = Math.floor((lapcounter%6000)/100);
        lcentisec = (lapcounter%6000)%100;

        $("#min").text(format(lmin));
        $("#sec").text(format(lsec));
        $("#ms").text(format(lcentisec));
    }

    function format(number){
        if(number<10){
            return '0'+number;      
        }
        else{
            return number;
        }
    }

    //    Function to add lap
    function addlap(){
        lapnumber++;
        var mylap="<div class='laps'>"+
            "<div class='laptitle'>"+
            "Lap" + lapnumber +
            "</div>"+
            "<div class='laptime'>"+
            "<span>"+ format(lmin) +"</span>"+
            ":<span>"+ format(lsec) +"</span>"+
            ":<span>"+ format(lcentisec) +"</span>"+
            "</div>"+

            "</div>"
        $(mylap).appendTo('#laps');


    }

});