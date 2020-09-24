<?php

$args=array(
  'post_type' => 'featuredAlbum',
  'post_status' => 'publish',
//        'meta_key' => 'featured',
  'orderby' => 'meta_value date',
  'order' => 'DESC',
  'posts_per_page' => 1
);
$my_query = null;
$my_query = new WP_Query($args);

if( $my_query->have_posts() ) {
  while ($my_query->have_posts()) : $my_query->the_post(); ?>

    <?php the_post_thumbnail(); ?>

  <?php

  endwhile;
}
wp_reset_query();  // Restore global post data stomped by the_post().
?>