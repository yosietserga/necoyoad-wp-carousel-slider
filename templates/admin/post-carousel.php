<?php
// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

echo '<h3>Versión 1.4.4</h3>';
?>
<div data-id="open" id="section_post_query" class="shapla-toggle shapla-toggle--stroke"
     style="display: <?php echo $slide_type != 'post-carousel' ? 'none' : 'block'; ?>">
	<span class="shapla-toggle-title">
		<?php esc_html_e( 'Post Query', 'necoyoad-carousel-slider' ); ?>
	</span>
    <div class="shapla-toggle-inner">
        <div class="shapla-toggle-content">
			<?php
			$this->form->select( array(
				'id'      => '_post_query_type',
				'name'    => esc_html__( 'Query Type', 'necoyoad-carousel-slider' ),
				'std'     => 'latest_posts',
				'options' => array(
					'latest_posts'    => esc_html__( 'Latest Posts', 'necoyoad-carousel-slider' ),
					'date_range'      => esc_html__( 'Date Range', 'necoyoad-carousel-slider' ),
					'post_categories' => esc_html__( 'Post Categories', 'necoyoad-carousel-slider' ),
					'post_tags'       => esc_html__( 'Post Tags', 'necoyoad-carousel-slider' ),
					'specific_posts'  => esc_html__( 'Specific posts', 'necoyoad-carousel-slider' ),
				),
			) );
			$this->form->date( array(
				'id'   => '_post_date_after',
				'name' => esc_html__( 'Date from', 'necoyoad-carousel-slider' ),
				'desc' => sprintf( esc_html__( 'Example: %s', 'necoyoad-carousel-slider' ), date( 'F d, Y', strtotime( '-3 months' ) ) ),
			) );
			$this->form->date( array(
				'id'   => '_post_date_before',
				'name' => esc_html__( 'Date to', 'necoyoad-carousel-slider' ),
				'desc' => sprintf( esc_html__( 'Example: %s', 'necoyoad-carousel-slider' ), date( 'F d, Y', strtotime( '-7 days' ) ) ),
			) );
			$this->form->post_terms( array(
				'id'       => '_post_categories',
				'taxonomy' => 'type',
				'multiple' => true,
				'name'     => esc_html__( 'Post Categories', 'necoyoad-carousel-slider' ),
				'desc'     => esc_html__( 'Show posts associated with selected categories.', 'necoyoad-carousel-slider' ),
			) );
			$this->form->post_terms( array(
				'id'       => '_post_tags',
				'taxonomy' => 'post_tag',
				'multiple' => true,
				'name'     => esc_html__( 'Post Tags', 'necoyoad-carousel-slider' ),
				'desc'     => esc_html__( 'Show posts associated with selected tags.', 'necoyoad-carousel-slider' ),
			) );
			$this->form->posts_list( array(
				'id'       => '_post_in',
				'multiple' => true,
				'name'     => esc_html__( 'Specific posts', 'necoyoad-carousel-slider' ),
				'desc'     => esc_html__( 'Select posts that you want to show as slider. Select at least 5 posts', 'necoyoad-carousel-slider' ),
			) );
			$this->form->number( array(
				'id'   => '_posts_per_page',
				'name' => esc_html__( 'Posts per page', 'necoyoad-carousel-slider' ),
				'std'  => 12,
				'desc' => esc_html__( 'How many post you want to show on carousel slide.', 'necoyoad-carousel-slider' ),
			) );
			$this->form->select( array(
				'id'      => '_post_order',
				'name'    => esc_html__( 'Order', 'necoyoad-carousel-slider' ),
				'std'     => 'DESC',
				'options' => array(
					'ASC'  => esc_html__( 'Ascending Order', 'necoyoad-carousel-slider' ),
					'DESC' => esc_html__( 'Descending Order', 'necoyoad-carousel-slider' ),
				),
			) );
			$this->form->select( array(
				'id'      => '_post_orderby',
				'name'    => esc_html__( 'Order by', 'necoyoad-carousel-slider' ),
				'std'     => 'ID',
				'options' => array(
					'none'          => esc_html__( 'No order', 'necoyoad-carousel-slider' ),
					'ID'            => esc_html__( 'Post id', 'necoyoad-carousel-slider' ),
					'author'        => esc_html__( 'Post author', 'necoyoad-carousel-slider' ),
					'title'         => esc_html__( 'Post title', 'necoyoad-carousel-slider' ),
					'modified'      => esc_html__( 'Last modified date', 'necoyoad-carousel-slider' ),
					'rand'          => esc_html__( 'Random order', 'necoyoad-carousel-slider' ),
					'comment_count' => esc_html__( 'Number of comments', 'necoyoad-carousel-slider' ),
				),
			) );
			?>
        </div>
    </div>
</div>