import { createStitches } from '../types/ts4.7'

const { css, toString } = createStitches({
	media: {
		bp1: '(min-width: 640px)',
	},
})

const xyz = css({
	color: 'red',
})

void xyz()
void toString()
