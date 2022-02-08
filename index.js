<!-- Full credits to https://cliphd.ga -->
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta http-equiv="content-type" content="text/html; charset=UTF-8">
        <meta charset="utf-8">
        <title>cliphd#9309</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta property="og:type" content="website">
        <meta property="og:title" content="cliphd#9309">
        <meta property="og:url" content="https://cliphd.ga/">
        <meta name="twitter:card" content="summary_large_image">
        <meta property="twitter:image" content="https://i.imgur.com/0bcCmOg.gif">
        <meta name="theme-color" content="#2f3136">
        <link rel="stylesheet" href="assets/css/main.css">
    </head>
    <body>
        <main>
            <script>
                function audioPlay() {
                    var audio = document.getElementById("audio");
                    audio.volume = 0.4;
                    audio.play()
                }
                function videoPlay() {
                    var video = document.getElementById("video");
                    video.play()
                }
            </script>
            <input type="checkbox" autocomplete="off" id="overlay-toggle">
            <div class="overlay fullscreen">
                <label for="overlay-toggle" onclick="audioPlay();videoPlay()">
                    <span class="no-hover" style="font-family: derk; font-size: 0.6em;">tap to enter</span>
                    <span class="hover" style="font-family: derk; font-size: 0.6em;">click to enter</span>
                </label>
            </div>
            <audio loop="" preload="auto" id="audio">
                <source src="assets/audio/audio.mp3" type="audio/mp3">
            </audio>
            <video muted="muted" loop="" playsinline="" preload="auto" class="fullscreen bg-video" id="video">
                <source src="assets/images/bg.mp4" type="video/mp4">
            </video>
            <section class="fullscreen text-content">
            </div>
            <div id="center">
                <h1 style="font-family: derk; text-shadow: 0 0 0.40em #bababa;">cliphd</h1>
                <div class="socials">
                    <span>
                        >
                <a href="https://tiktok.com/@cliphd1" style="text-decoration:none; font-family: derk; font-size: 1em;">tiktok</a>
                    </span>
                    <span>
                        >
                <a href="https://instagram.com/cliphd1" style="text-decoration:none; font-family: derk; font-size: 1em;">instagram</a>
                    </span>
                    <span>
                        >
                <a href="https://github.com/cliphd" style="text-decoration:none; font-family: derk; font-size: 1em;">github</a>
                   <span>
                        >
                <a href="https://ogusers.com/cliphd" style="text-decoration:none; font-family: derk; font-size: 1em;">ogusers</a>
                   <span>
            </div>
        </main>
    
</body>
</html>
