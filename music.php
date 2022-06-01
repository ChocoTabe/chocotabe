<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
    <title>Music - ChocoTabe</title>
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
                });
            });
        });
    </script>
    <script src="fetch_func.js" defer="true" async="false"></script>
    <script defer="true" async="false">
        $(() => {
            getMusicText();
        });
        window.onpageshow = function(event) {
            if (event.persisted || (window.performance && window.performance.navigation.type == 2)) {
                getMusicText();
            }
        }
        function getMusicText() {
            setTimeout(function() {
                $('#music').text("MUSIC");
                $('#original>div').text("ORIGINAL MUSIC");
            }, 300);
        }
    </script>
    <script src="fetch_load_simentic.js" defer="true" async="false"></script>
    <script src="load_file.js" defer="true" async="false"></script>
    <style>
        #scrollY, #height, #dif {
            position: fixed;
            font-size: 30px;
        }
        #height {
            top: 60px;
        }
        #dif {
            top: 90px;
        }
    </style>
</head>

<body onresize="reloadMusicGrid()">
    <nav></nav>
    
    <div id="scrollY"></div>
    <div id="height"></div>
    <div id="dif"></div>

    <div id="nav-line"></div>

    <div id="music-page"></div>
    <div id="music-line-1"></div>
    <div id="music"></div>
    <div id="music-line-2"></div>

    <div id="music-category">
        <a id="original" href="music.php">
            <div></div>
        </a>
    </div>
    <div id="music-category-line"></div>
    <div id="white-box"></div>
    <div id="music-grid">

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
                loadPlayPageNav();
                function loadPlayPageNav() {
                    fetch('../play-page-nav.html').then(function (response) {
                        response.text().then(function (text) {
                            $('nav').append(text);
                        });
                    }); 
                }
            });
        </script>
        <script src=\"../load_music.js \" defer=\"true\" async=\"false\"></script>
        <script src=\"../play_animation.js \" defer=\"true\" async=\"false\"></script>
    </head>
    <body style=\"overflow:hidden;\">
        <div id=\"black-background\"></div>
        <nav></nav>
        <img id=\"bg\" src=\"\" alt=\"background\">
        <div id=\"black-opacity-play\"></div>
        <audio controls>
        </audio>
        <div id=\"music-title-play\"></div>
        <div id=\"music-artist-play\"></div>
        <div id=\"music-date-play\"></div>
        <a id=\"next\" href=\"#\"><img src=\"../image/next.webp\" alt=\"next\" width=\"15px\" height=\"31px\"></a>
        <a id=\"pre\" href=\"#\"><img src=\"../image/previous.webp\" alt=\"previous\" width=\"15px\" height=\"31px\"></a>
        <a id=\"next-music\" href=\"#\"></a>
        <a id=\"pre-music\" href=\"#\"></a>
        <div id=\"img-count\" style=\"display:none;\"></div>
        <div id=\"img-name\" style=\"display:none;\"></div>
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
            file_put_contents("play/$music_array[$i].html", $play_page);
        }
        if ($music_count <= 0) file_put_contents("./music_count.txt", 0);
        else file_put_contents("./music_count.txt", $music_count);
    }
    ?>

</body>

</html>