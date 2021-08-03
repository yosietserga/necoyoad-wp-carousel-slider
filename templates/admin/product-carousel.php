<?php
// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}
?>
<div data-id="open" id="section_product_query" class="shapla-toggle shapla-toggle--stroke"
     style="display: <?php echo $slide_type != 'product-carousel' ? 'none' : 'block'; ?>">
	<span class="shapla-toggle-title">
		<?php esc_html_e( 'Product Query', 'necoyoad-carousel-slider' ); ?>
	</span>
    <div class="shapla-toggle-inner">
        <div class="shapla-toggle-content">
			<?php
			$this->form->select( array(
				'id'      => '_product_query_type',
				'name'    => esc_html__( 'Query Type', 'necoyoad-carousel-slider' ),
				'std'     => 'query_porduct',
				'options' => array(
					'query_porduct'      => esc_html__( 'Query Products', 'necoyoad-carousel-slider' ),
					'product_categories' => esc_html__( 'Product Categories', 'necoyoad-carousel-slider' ),
					'product_tags'       => esc_html__( 'Product Tags', 'necoyoad-carousel-slider' ),
					'specific_products'  => esc_html__( 'Specific Products', 'necoyoad-carousel-slider' ),
				),
			) );
			$this->form->select( array(
				'id'      => '_product_query',
				'name'    => esc_html__( 'Choose Query', 'necoyoad-carousel-slider' ),
				'std'     => 'featured',
				'options' => array(
					'featured'                => esc_html__( 'Featured Products', 'necoyoad-carousel-slider' ),
					'recent'                  => esc_html__( 'Recent Products', 'necoyoad-carousel-slider' ),
					'sale'                    => esc_html__( 'Sale Products', 'necoyoad-carousel-slider' ),
					'best_selling'            => esc_html__( 'Best-Selling Products', 'necoyoad-carousel-slider' ),
					'top_rated'               => esc_html__( 'Top Rated Products', 'necoyoad-carousel-slider' ),
					'product_categories_list' => esc_html__( 'Product Categories List', 'necoyoad-carousel-slider' ),
				),
			) );
			$this->form->post_terms( array(
				'id'       => '_product_categories',
				'taxonomy' => 'product_cat',
				'multiple' => true,
				'name'     => esc_html__( 'Product Categories', 'necoyoad-carousel-slider' ),
				'desc'     => esc_html__( 'Show products associated with selected categories.', 'necoyoad-carousel-slider' ),
			) );
			$this->form->post_terms( array(
				'id'       => '_product_tags',
				'taxonomy' => 'product_tag',
				'multiple' => true,
				'name'     => esc_html__( 'Product Tags', 'necoyoad-carousel-slider' ),
				'desc'     => esc_html__( 'Show products associated with selected tags.', 'necoyoad-carousel-slider' ),
			) );
			$this->form->posts_list( array(
				'id'        => '_product_in',
				'post_type' => 'product',
				'multiple'  => true,
				'name'      => esc_html__( 'Specific products', 'necoyoad-carousel-slider' ),
				'desc'      => esc_html__( 'Select products that you want to show as slider. Select at least 5 products', 'necoyoad-carousel-slider' ),
			) );
			$this->form->number( array(
				'id'   => '_products_per_page',
				'name' => esc_html__( 'Product per page', 'necoyoad-carousel-slider' ),
				'std'  => 12,
				'desc' => esc_html__( 'How many products you want to show on carousel slide.', 'necoyoad-carousel-slider' ),
			) );
			$this->form->checkbox( array(
				'id'    => '_product_title',
				'name'  => esc_html__( 'Show Title', 'necoyoad-carousel-slider' ),
				'label' => esc_html__( 'Show Title.', 'necoyoad-carousel-slider' ),
				'desc'  => esc_html__( 'Check to show product title.', 'necoyoad-carousel-slider' ),
				'std'   => 'on'
			) );
			$this->form->checkbox( array(
				'id'    => '_product_desc',
				'name'  => esc_html__( 'Show Content', 'necoyoad-carousel-slider' ),
				'label' => esc_html__( 'Show Content.', 'necoyoad-carousel-slider' ),
				'desc'  => esc_html__( 'Check to show product description.', 'necoyoad-carousel-slider' ),
				'std'   => 'on'
			) );
			$this->form->number( array(
				'id'    => '_product_desc_length',
				'name'  => esc_html__( 'Content length', 'necoyoad-carousel-slider' ),
				'desc'  => esc_html__( 'Set the lenght for the content.', 'necoyoad-carousel-slider' ),
				'std'   => 130
			) );
			$this->form->checkbox( array(
				'id'    => '_product_rating',
				'name'  => esc_html__( 'Show Rating', 'necoyoad-carousel-slider' ),
				'label' => esc_html__( 'Show Rating.', 'necoyoad-carousel-slider' ),
				'desc'  => esc_html__( 'Check to show product rating.', 'necoyoad-carousel-slider' ),
				'std'   => 'on'
			) );
			$this->form->checkbox( array(
				'id'    => '_product_price',
				'name'  => esc_html__( 'Show Price', 'necoyoad-carousel-slider' ),
				'label' => esc_html__( 'Show Price.', 'necoyoad-carousel-slider' ),
				'desc'  => esc_html__( 'Check to show product price.', 'necoyoad-carousel-slider' ),
				'std'   => 'on'
			) );
			$this->form->checkbox( array(
				'id'    => '_product_cart_button',
				'name'  => esc_html__( 'Show Cart Button', 'necoyoad-carousel-slider' ),
				'label' => esc_html__( 'Show Cart Button.', 'necoyoad-carousel-slider' ),
				'desc'  => esc_html__( 'Check to show product add to cart button.', 'necoyoad-carousel-slider' ),
				'std'   => 'on'
			) );
			$this->form->checkbox( array(
				'id'    => '_product_onsale',
				'name'  => esc_html__( 'Show Sale Tag', 'necoyoad-carousel-slider' ),
				'label' => esc_html__( 'Show Sale Tag', 'necoyoad-carousel-slider' ),
				'desc'  => esc_html__( 'Check to show product sale tag for onsale products.', 'necoyoad-carousel-slider' ),
				'std'   => 'on'
			) );
			$this->form->checkbox( array(
				'id'    => '_product_wishlist',
				'name'  => esc_html__( 'Show Wishlist Button', 'necoyoad-carousel-slider' ),
				'label' => esc_html__( 'Show Wishlist Button', 'necoyoad-carousel-slider' ),
				'std'   => 'off',
				'desc'  => sprintf( esc_html__( 'Check to show wishlist button. This feature needs %s plugin to be installed.', 'necoyoad-carousel-slider' ), sprintf( '<a href="https://wordpress.org/plugins/yith-woocommerce-wishlist/" target="_blank" >%s</a>', __( 'YITH WooCommerce Wishlist', 'necoyoad-carousel-slider' ) ) ),
			) );
			$this->form->checkbox( array(
				'id'    => '_product_quick_view',
				'name'  => esc_html__( 'Show Quick View', 'necoyoad-carousel-slider' ),
				'label' => esc_html__( 'Show Quick View', 'necoyoad-carousel-slider' ),
				'desc'  => esc_html__( 'Check to show quick view button.', 'necoyoad-carousel-slider' ),
				'std'   => 'on'
			) );
			$this->form->color( array(
				'id'   => '_product_title_color',
				'type' => 'color',
				'name' => esc_html__( 'Title Color', 'necoyoad-carousel-slider' ),
				'desc' => esc_html__( 'Pick a color for product title. This color will also apply to sale tag and price.', 'necoyoad-carousel-slider' ),
				'std'  => carousel_slider_default_settings()->product_title_color,
			) );
			$this->form->color( array(
				'id'   => '_product_button_bg_color',
				'type' => 'color',
				'name' => esc_html__( 'Button Background Color', 'necoyoad-carousel-slider' ),
				'desc' => esc_html__( 'Pick a color for button background color. This color will also apply to product rating.', 'necoyoad-carousel-slider' ),
				'std'  => carousel_slider_default_settings()->product_button_bg_color
			) );
			$this->form->color( array(
				'id'   => '_product_button_text_color',
				'type' => 'color',
				'name' => esc_html__( 'Button Text Color', 'necoyoad-carousel-slider' ),
				'desc' => esc_html__( 'Pick a color for button text color.', 'necoyoad-carousel-slider' ),
				'std'  => carousel_slider_default_settings()->product_button_text_color
			) );
			?>
        </div>
    </div>
</div>