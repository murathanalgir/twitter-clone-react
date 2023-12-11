/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {createElement} from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

export default function Button({ as, size, variant, children, className, ...props  }) {
	return createElement('as', {
		className: classNames(" rounded-full flex items-center justify-center font-bold  transition-colors", {
			"px-4 h-8 text-sm": size === 'small',
			"px-4 h-9": size === 'normal',
			"px-4 text-[17px] h-[52px] w-full": size === 'large',
			"bg-[#1d9bf0] hover:bg-[#1a8cd8]": variant === 'primary',
			"bg-[#eff3f4] hover:bg-[#d7dbdc] text-black": variant === 'white',
			"border border-[#b3b3b3] hover:border-[#67070f] hover:bg-[#f4212e1a] hover:text-[#f4212e]  ": variant === 'white-outline',
			[className]: true
		}),
		...props
	}, children)
}

Button.propTypes = {
	as: PropTypes.any,
	size: PropTypes.oneOf(['normal', 'large', 'small']),
	variant: PropTypes.oneOf(['primary', 'white', 'white-outline']),
	props: PropTypes.object,
	className: PropTypes.string,
}

Button.defaultProps = {
	as: 'button',
	size: 'normal',
	variant: 'primary'
}