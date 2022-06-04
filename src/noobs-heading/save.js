/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import "./script";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({ attributes }) {
	return (
		<div {...useBlockProps.save()}>
			<div className={`noobs-heading ${`noobs-heading-${attributes.alignments}`}`}>
				<RichText.Content
					tagName={attributes.heading_html_tag}
					value={attributes.heading_title}
					style={{ color: attributes.color, backgroundColor: attributes.backgroundColor }}
				>
				</RichText.Content>
				{
					attributes.showSubtitle && (
						<h3 class="noobs-heading--subtitle">
							{attributes.subtitle}
						</h3>
					)
				}
			</div>
		</div>
	);
}
