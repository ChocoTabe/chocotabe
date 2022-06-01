<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
    <title>Detail - ChocoTabe</title>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="ChocoTabe's Music Site">
    <meta name="keywords" content="음악, 자작곡, Music">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="theme-color" content="#0097b7" />
    <link rel="apple-touch-icon" href="image/chocotabe.webp" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script defer="true" async="false">
        $(() => {
            fetch('get_css.html').then(function(response) {
                response.text().then(function(text) {
                    $('head').append(text);
                })
            })
        })
    </script>
    <script src="fetch_func.js" defer="true" async="false"></script>
    <script defer="true" async="false">
        $(() => {
            getDetailText();
        });
        window.onpageshow = function(event) {
            if (event.persisted || (window.performance && window.performance.navigation.type == 2)) {
                getDetailText();
            }
        }
        function getDetailText() {
            setTimeout(function() {
                $('#detail').text("DETAIL");
                $('#original>div').text("ORIGINAL MUSIC");
            }, 300);
        }
    </script>
    <script src="fetch_load_simentic.js" defer="true" async="false"></script>
    <script src="load_file.js" defer="true" async="false"></script>
</head>

<body onresize="reloadDetailGrid()">
    <nav></nav>
    <div id="nav-line"></div>
    <div id="detail-page"></div>
    <div id="detail-line-1"></div>
    <div id="detail"></div>
    <div id="detail-line-2"></div>

    <div id="music-category">
        <a id="original" href="music.php">
            <div></div>
        </a>
    </div>
    <div id="music-category-line"></div>
    <div id="white-box"></div>
    <div id="detail-grid">

    </div>

    <div id="img-count" style="display:none;"></div>
    <div id="img-name" style="display:none;"></div>

    <?php
    loadThumbnail();
    loadMusic();

    function loadThumbnail()
    {
        $thumbnail_array = array();
        $scan_thumbnail = scandir("./thumbnail");
        $image_count = count($scan_thumbnail) - 2;
        for ($i = 2; $i < $image_count + 2; $i++) {
            $thumbnail_array[$i - 2] = substr($scan_thumbnail[$i], 0, -5);
        }
        file_put_contents("./thumbnail_name.txt", $thumbnail_array);
        if ($image_count <= 0) file_put_contents("./thumbnail_count.txt", 0);
        else file_put_contents("./thumbnail_count.txt", $image_count);
    }

    function loadMusic()
    {
        $play_page = "
<!DOCTYPE html>
<html lang=\"en\" dir=\"ltr\">

<head>
    <title>Music Name</title>
    <meta charset=\"UTF-8\">
    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">
    <meta name=\"description\" content=\"ChocoTabe's Music Site\">
    <meta name=\"keywords\" content=\"음악, 자작곡, Music\">
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
                <meta name=\"theme-color\" content=\"#0097b7\" />
    <link rel=\"apple-touch-icon\" href=\"image/chocotabe.webp\" />
    <link rel=\"preload\" href=\"../style.css\" as=\"style\" onload=\"this.onload=null;this.rel='stylesheet'\">
    <noscript>
        <link rel=\"stylesheet\" href=\"../styles.css\">
    </noscript>
    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js\"></script>
    <script defer=\"true\" async=\"false\">
        $(() => {
            fetch('../footer.html').then(function (response) {
                response.text().then(function (text) {
                    $('footer').append(text);
                });
            });
                loadDetailPageNav();
                function loadDetailPageNav() {
                    fetch('../detail-page-nav.html').then(function (response) {
                        response.text().then(function (text) {
                            $('nav').append(text);
                        });
                    }); 
                }
        });
    </script>
    <script src=\"../load_detail.js \" defer=\"true\" async=\"false\"></script>
    <script src=\"../load_detail_fetch.js \" defer=\"true\" async=\"false\"></script>
</head>

<body onresize=\"reloadDetailPage()\">
    <nav></nav>

    <div id=\"nav-line\"></div>
    <div id=\"detail-page\"></div>
    <div id=\"main-section-detail\">
        <p id=\"description-detail\"></p>
    </div>
    <div id=\"img-count\" style=\"display:none;\"></div>
    <div id=\"img-name\" style=\"display:none;\"></div>

    <footer></footer>
</body>

</html>
";
        $music_array = array();
        $scan_music = scandir("./music_list");
        $music_count = count($scan_music) - 2;
        for ($i = 0; $i < $music_count; $i++) {
            $music_array[$i] = substr($scan_music[$i + 2], 3, -4);
        }
        for ($i = 0; $i < $music_count; $i++) {
            $music_array[$i] = str_replace(" ", "", $music_array[$i]);
            file_put_contents("detail/$music_array[$i].html", $play_page);
        }
        if ($music_count <= 0) file_put_contents("./music_count.txt", 0);
        else file_put_contents("./music_count.txt", $music_count);
    }
    ?>

</body>

</html>