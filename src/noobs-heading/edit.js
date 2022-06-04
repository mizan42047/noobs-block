
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import "./script";
import './editor.scss';
import Heading1 from './icons/Heading1Icon';
import Heading2 from './icons/Heading2Icon';
import Heading3 from './icons/Heading3Icon';
import Heading4 from './icons/Heading4Icon';
import Heading5 from './icons/Heading5Icon';
import Heading6 from './icons/Heading6Icon';

import {
	useBlockProps,
	RichText,
	AlignmentToolbar,
	BlockControls,
	ColorPalette,
	InspectorControls,
} from '@wordpress/block-editor';

import {
	Panel,
	PanelBody,
	Toolbar,
	ToolbarDropdownMenu,
	ToggleControl,
	TextControl
} from '@wordpress/components';


export default function Edit({ attributes, setAttributes }) {

	const [tag, setTag] = useState(attributes.heading_html_tag || 'h2');
	const colors = [
		{ name: 'Black', color: '#000' },
		{ name: 'white', color: '#fff' },
		{ name: 'Primary', color: 'rgb(26, 69, 72)' },
		{ name: 'Secondary', color: 'rgb(255, 226, 199)' },
		{ name: 'Tertiary', color: 'rgb(246, 246, 246)' },
	];

	const selecIcon = tag == 'h1' ? Heading1 : tag == 'h2' ? Heading2 : tag == 'h3' ? Heading3 : tag == 'h4' ? Heading4 : tag == 'h5' ? Heading5 : tag == 'h6' ? Heading6 : Heading2;
	if (tag) {
		setAttributes({ heading_html_tag: tag });
	}

	console.log(attributes.showSubtitle);

	return (

		<div {...useBlockProps()}>

			<BlockControls>
				<AlignmentToolbar
					value={attributes.alignments}
					onChange={(alignment) => setAttributes({ alignments: alignment })}
				/>
				<Toolbar label="Options">
					<ToolbarDropdownMenu
						icon={selecIcon}
						label="Heading Tag"
						controls={[
							{
								icon: Heading1,
								onClick: () => (setTag('h1')),
							},
							{
								icon: Heading2,
								onClick: () => (setTag('h2')),
							},
							{
								icon: Heading3,
								onClick: () => (setTag('h3')),
							},
							{
								icon: Heading4,
								onClick: () => (setTag('h4')),
							},
							{
								icon: Heading5,
								onClick: () => (setTag('h5')),
							},
							{
								icon: Heading6,
								onClick: () => (setTag('h6')),
							},
						]}

					/>
				</Toolbar>
			</BlockControls>
			<InspectorControls>
				<Panel>
					<PanelBody title="Subtitle">
						<ToggleControl
							label="Show Subtitle"
							checked={attributes.showSubtitle}
							onChange={(showSubtitle) => setAttributes({ showSubtitle: showSubtitle })}
						/>

						{
							attributes.showSubtitle && (
								<>
									<TextControl
										label="Subtitle"
										value={attributes.subtitle}
										onChange={(subtitle) => setAttributes({ subtitle: subtitle })}
									/>

									<ToggleControl
										label="Border Subtitle"
										checked={attributes.borderSubtitle}
										onChange={(borderSubtitle) => setAttributes({ borderSubtitle: borderSubtitle })}
									/>

								</>
							)
						}
					</PanelBody>
					<PanelBody title="Color Manager">
						<ColorPalette
							value={attributes.color}
							colors={colors}
							onChange={(color) => setAttributes({ color: color })}
						/>
						<ColorPalette
							colors={colors}
							value={attributes.backgroundColor}
							onChange={(color) => setAttributes({ backgroundColor: color })}
						/>
					</PanelBody>
				</Panel>
			</InspectorControls>
			<div className='noobs-heading' style={{textAlign: attributes.alignments}}>
				<RichText
					label="Noobs Heading"
					style={{ color: attributes.color, backgroundColor: attributes.backgroundColor, textTransform: 'none' }}
					tagName={attributes.heading_html_tag}
					value={attributes.heading_title}
					placeholder={__('Heading...')}
					onChange={(val) => setAttributes({ heading: val })}
				>
				</RichText>
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
