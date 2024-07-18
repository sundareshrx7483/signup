document.addEventListener('DOMContentLoaded',function(){
    const audio=document.getElementById('myAudio');
    audio.play().catch(function(error){
        document.body.addEventListener('click',function(){
            audio.play();
        },{once:true});
    })
})