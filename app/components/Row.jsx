import React from 'react';

export default ({row, ..props}) => (
	<div {...props}>{row.name}</div>
	)