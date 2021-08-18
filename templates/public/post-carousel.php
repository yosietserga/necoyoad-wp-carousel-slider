<?php
// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

$_view_button_url       = get_post_meta( $id, '_view_button_url', true );
$_image_size       = get_post_meta( $id, '_image_size', true );
$_nav_color        = get_post_meta( $id, '_nav_color', true );
$_nav_active_color = get_post_meta( $id, '_nav_active_color', true );
$_lazy_load_image  = get_post_meta( $id, '_lazy_load_image', true );
$carousel_slider_post = get_post($id);
?>
<div class="necoyoad-carousel-slider-outer necoyoad-carousel-slider-outer-posts necoyoad-carousel-slider-outer-<?php echo $id; ?>">
	<?php if(!empty($carousel_slider_post->post_title)) { ?><h1><?php echo $carousel_slider_post->post_title; ?></h1><?php } ?>
	<?php carousel_slider_inline_style( $id ); ?>
	<div <?php echo join( " ", $this->carousel_options( $id ) ); ?>>
		<?php
		$posts = carousel_slider_posts( $id );
		foreach ( $posts as $_post ):
			global $post;
			$post = $_post;
			setup_postdata( $post );
			$category = get_the_category( $post->ID );

			$_price         = get_post_meta( $post->ID, '_price', true );
			$_price         = (float)$_price ? $_price : 0;
			$_image         = get_post_meta( $post->ID, '_image', true );
			$_permalink           = get_post_meta( $post->ID, '_url', true );

			do_action( 'carousel_slider_post_loop', $post, $category );

			$html = '<div class="necoyoad-carousel-slider__post">';
			$html .= '<div class="necoyoad-carousel-slider__post-content">';
			$html .= '<div class="necoyoad-carousel-slider__post-header">';
			// Post Thumbnail
			$_thumb_id  = get_post_thumbnail_id( $post->ID );

			$image_src = wp_get_attachment_image_src( $_thumb_id, $_image_size );
			$image_src = $_image ? $_image : $image_src[0];
			if ( $image_src ) {
				if ( $_lazy_load_image == 'on' ) {

					$html .= sprintf( '<a href="%s"><img class="necoyoad-carousel-slider__post-image owl-lazy" data-src="%s" alt="Image" width="%s" /></a>', $_permalink, $image_src, $_image_size );
				} else {

					$html .= sprintf( '<a href="%s" class="necoyoad-carousel-slider__post-image" style="background-image: url(%s)"></a>', $_permalink, $image_src );
				}

			} else {

				$html .= sprintf( '<a href="%s" class="necoyoad-carousel-slider__post-image"></a>', $_permalink );
			}

			// Post Title
			$html .= sprintf( '<a class="necoyoad-carousel-slider__post-title" href="%s"><h2>%s</h2></a>', $_permalink, $post->post_title );
			$html .= '</div>'; // End Post Header

			$html .= '<div class="necoyoad-carousel-slider__post-price"><span>'. $_price .'</span></div>';

			// Footer
			$html .= '<footer class="necoyoad-carousel-slider__post-meta">';
			$html .= '<div class="necoyoad-carousel-slider__post-details-info">';

			if(!empty($_permalink)) {
			$html .= sprintf( '<a'. (!empty($_nav_color) ? ' style="background:'. $_nav_color .'"':'') .' class="necoyoad-carousel-slider__post-link" href="%s">Ver Producto</a>', $_permalink );
			$html .= '</div>';
			}

			$html .= '</footer>';
			$html .= '</div>';

			$html .= '</div>';

			echo apply_filters( 'carousel_slider_post', $html, $post, $category );
		endforeach;
		wp_reset_postdata();
		?>
	</div>
	<?php if(!empty($_view_button_url)) { ?><a class="necoyoad-carousel-slider__post-more" href="<?php echo $_view_button_url; ?>">Ver Más</a><?php } ?>
</div>