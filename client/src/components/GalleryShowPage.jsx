import React, { Component } from 'react';
import GalleryPage from './GalleryPage';

export default class GalleryShowPage extends Component {
	state = {
		galleryId: this.props.match.params.galleryId
	};

	render() {
		return (
			<div>
				<GalleryPage galleryId={this.state.galleryId} />
			</div>
		);
	}
}
