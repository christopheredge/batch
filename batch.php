<?php
/**
 * Plugin Name: Batch
 * Plugin URI: https://valveandmeter.com
 * Description: Batch is custom blocks built for the Gutenberg builder.
 * Author: Valve and Meter
 * Author URI: https://www.valveandmeter.com
 * Version: 1.0.0
 * Text Domain: batch
 * Domain Path: /languages
 * Tested up to: 5.2.2
 *
 * Batch is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * any later version.
 *
 * You should have received a copy of the GNU General Public License
 * along with Batch. If not, see <http://www.gnu.org/licenses/>.
 *
 * @package Batch
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function _get_plugin_directory() {
	return __DIR__;
}

function _get_plugin_url() {
	static $plugin_url;
	if ( empty( $plugin_url ) ) {
		$plugin_url = plugins_url( null, __FILE__ );
	}
	return $plugin_url;
}

add_action( 'enqueue_block_editor_assets', 'enqueue_block_editor_assets' );
function enqueue_block_editor_assets() {
	// Make paths variables so we don't write em twice ;)
	$block_path = '/dist/js/editor.blocks.js';
	$style_path = '/dist/css/blocks.editor.css';
	// Enqueue the bundled block JS file
	wp_enqueue_script(
		'batch-blocks',
		_get_plugin_url() . $block_path,
		[ 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-plugins', 'wp-components', 'wp-edit-post', 'wp-api' ],
		filemtime( _get_plugin_directory() . $block_path )
	);
	// Enqueue optional editor only styles
	wp_enqueue_style(
		'jsforwp-blocks-editor-css',
		_get_plugin_url() . $style_path,
		[ ],
		filemtime( _get_plugin_directory() . $style_path )
	);
}
