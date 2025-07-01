<div class="social-share-container">
    <div class="social-share-container__col">
        <p class="label">Share: </p>
    </div>
    <div class="social-share-container__col">
        <?php
        $title = get_the_title();
        $short_url = get_the_permalink();
        $url = get_the_permalink();

        $twitter_params =
            '?text=' . urlencode($title) . '+-' .
            '&amp;url=' . urlencode($short_url) .
            '&amp;counturl=' . urlencode($url) .
            '';

        $twitter_link = "https://twitter.com/share" . $twitter_params . "";
        $linkedIn_link = "https://www.linkedin.com/sharing/share-offsite/?url=" . urlencode($url);
        $facebook_link = "https://www.facebook.com/sharer/sharer.php?u=" . urlencode($url);

        ?>

        <ul class="socials socials--blue socials--left">
            <li class="socials__item">
                <a class="socials__item__link socials__item__link--linkedin" href="javascript:void(0)" onclick="window.open('<?php echo $linkedIn_link; ?>', 'sharer', 'toolbar=0, status=0, width=626, height=436');return false;" title="Linkedin" aria-label="LinkedIn"><span>LinkedIn</span></a>
            </li>
            <li class="socials__item"><a class="socials__item__link socials__item__link--x" href="javascript:void(0)" onclick="window.open('<?php echo $twitter_link; ?>', 'sharer', 'toolbar=0, status=0, width=626, height=436');return false;" title="Twitter" aria-label="Twitter"><span>Twitter</span></a>
            </li>
            <li class="socials__item"><a class="socials__item__link socials__item__link--facebook" href="javascript:void(0)" onclick="window.open('<?php echo $facebook_link; ?>', 'sharer', 'toolbar=0, status=0, width=626, height=436');return false;" title="Facebook" aria-label="Facebook"><span>Facebook</span></a>
            </li>
        </ul>
    </div>
</div>