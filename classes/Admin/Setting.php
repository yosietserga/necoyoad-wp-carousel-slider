<?php

namespace CarouselSlider\Admin;

use CarouselSlider\Supports\SettingAPI;
use Exception;

defined( 'ABSPATH' ) || exit;

class Setting {
	/**
	 * Instance of current class
	 *
	 * @var self
	 */
	private static $instance;

	/**
	 * @return self
	 */
	public static function init() {
		if ( is_null( self::$instance ) ) {
			self::$instance = new self();

			add_action( 'init', array( self::$instance, 'settings' ) );
		}

		return self::$instance;
	}

	/**
	 * Plugin setting fields
	 *
	 * @throws Exception
	 */
	public function settings() {
		$settings = new SettingAPI;
		$settings->add_menu( array(
			'page_title'  => __( 'Carousel Slider Settings', 'necoyoad-carousel-slider' ),
			'menu_title'  => __( 'Settings', 'necoyoad-carousel-slider' ),
			'about_text'  => __( 'Thank you for choosing Carousel Slider. We hope you enjoy it!', 'necoyoad-carousel-slider' ),
			'menu_slug'   => 'settings',
			'parent_slug' => 'edit.php?post_type=carousels',
			'option_name' => 'carousel_slider_settings',
		) );

		// Add settings page tab
		$settings->add_tab( array(
			'id'    => 'general',
			'title' => __( 'General', 'necoyoad-carousel-slider' ),
		) );

		$settings->add_field( array(
			'id'      => 'load_scripts',
			'type'    => 'radio',
			'std'     => 'optimized',
			'name'    => __( 'Style & Scrips', 'necoyoad-carousel-slider' ),
			'desc'    => __( 'If you choose Optimized, then scrips and styles will be loaded only on page where you are using shortcode. If Optimized is not working for you then choose Always.', 'necoyoad-carousel-slider' ),
			'options' => array(
				'always'    => __( 'Always', 'necoyoad-carousel-slider' ),
				'optimized' => __( 'Optimized (recommended)', 'necoyoad-carousel-slider' ),
			),
			'tab'     => 'general',
		) );
	}
}
