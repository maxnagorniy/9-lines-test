$(document).ready(function() {

    // Если в проекте используются встроенные js-плагины от Foundation, разкомментировать
    // $(document).foundation();

    function countnumber(start,end,idtarget,duration){
        var cc=setInterval(function(){
            if(start==end)
            {
                $("#"+idtarget).html(start);
                clearInterval(cc);
            }
            else
            {
                $("#"+idtarget).html(start);
                start++;
            }
        },duration);
    }

    function animateArrow(){
        var skill_value = 876,
            skill_max = 2000,
            angl = skill_value  * 180 / skill_max;
        $('.speed-arrow').css('transform','rotate('+angl+'deg)');
        countnumber(1,skill_value,"skill",1);
    }

    setTimeout(animateArrow, 1000);

});