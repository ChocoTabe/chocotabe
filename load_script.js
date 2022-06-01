$(() => {
    pageLoading();
})

function pageLoading() {
    loading();
    setTimeout(closeLoading, 1000);
    function loading() {
        var mask = `<div id="mask" 
                                            style="position:absolute; 
                                            z-index:9000; 
                                            background-color:#0097B7;
                                            display:none;
                                            left:0;
                                            top:0;
                                            ">
                                    </div>`;
        var loadingImg = `<div id="loading-img" style="text-align:center;">
                                                    <img src="로딩.gif"
                                                    style="
                                                    position: absolute;
                                                    z-index:9000;
                                                    transform: translateX(-50%);
                                                    "
                                                    width="50px"
                                                    height="50px">
                                                </div>`;
        $('body').append(mask).append(loadingImg);
        $('#mask').css({
            'width': '1920'
            , 'height': $(document).height()
            , 'opacity': '0.3'
        });
        $('#loading-img>img').css('top', document.querySelector('html').clientHeight / 2);
        $('#mask').show();
        $('#loading-img').show();
    }
    function closeLoading() {
        $('#mask').remove();
        $('#loading-img').remove();
    }
}