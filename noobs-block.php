<?php

/**
 * Plugin Name:       Noobs Block
 * Description:       Example static block scaffolded with Create Block tool.
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       noobs-block
 *
 * @package           create-block
 */

/* Register Blocks  */
function create_block_noobs_block_block_init()
{
	$blocks = [
		'noobs-heading',
	];
	foreach ($blocks as $block) {
		register_block_type(__DIR__ . '/build/' . $block);
	}
}
add_action('init', 'create_block_noobs_block_block_init');

/* Enqueue Plugin Assets */
function blocks_assets()
{
	wp_enqueue_style(
		'noobs-normalize',
		plugins_url('assets/css/normalize.css', __FILE__),
		[],
		1.0,
		'all'
	);
}

add_action('enqueue_block_assets', 'blocks_assets');
