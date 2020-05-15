import React from 'react';

const AudioPlay = ({ color, ...props }) => (
    <svg height="36" viewBox="0 0 36 36" width="36" {...props}>
        <linearGradient id="a">
            <stop offset="0" stop-color="#d34f94" />
            <stop offset="1" stop-color="#f7a76f" />
        </linearGradient>
        <radialGradient
            id="b"
            cx="16.47022%"
            cy="0%"
            r="149.930721%"
            xlinkHref="#a"
        />
        <radialGradient
            id="c"
            cx="16.47022%"
            cy="0%"
            gradientTransform="matrix(.55470786 .69143038 -.83204519 .46096278 .073341 -.11388)"
            r="169.137926%"
            xlinkHref="#a"
        />
        <g fill="none" fill-rule="evenodd">
            <path
                d="m18 0c-4.77432 0-9.3528 1.89702-12.7278 5.2722s-5.2722 7.95384-5.2722 12.7278 1.89702 9.3528 5.2722 12.7278 7.95384 5.2722 12.7278 5.2722 9.3528-1.89702 12.7278-5.2722 5.2722-7.95384 5.2722-12.7278-1.89702-9.3528-5.2722-12.7278-7.95384-5.2722-12.7278-5.2722zm0 34.0002c-4.24404 0-8.31384-1.686096-11.31336-4.6872-3.000924-2.99952-4.68720036-7.06932-4.68720036-11.31336s1.68609636-8.31384 4.68720036-11.31336c2.99952-3.000924 7.06932-4.6872 11.31336-4.6872s8.31384 1.686096 11.31336 4.6872c3.000924 2.99952 4.6872 7.06932 4.6872 11.31336-.0056232 4.2426-1.691712 8.30952-4.69116 11.30904-2.99952 2.99952-7.06644 4.6857593-11.30904 4.6911593z"
                fill={color || 'url(#b)'}
            />
            <path
                d="m15 9.83369973c-1.1045695 0-2 .89543047-2 1.99999997v12.3326006c0 .3841384.110626.7601501.3186533 1.083085.5981713.9285822 1.8358496 1.196433 2.7644317.5982617l9.5723683-6.1663003c.2398023-.1544751.4437865-.3584594.5982617-.5982617.5981713-.9285821.3303204-2.1662604-.5982617-2.7644317l-9.5723683-6.1663003c-.3229349-.20802727-.6989466-.31865327-1.083085-.31865327zm0 14.33260057v-12.3326006l9.5723682 6.1663003z"
                fill={color || 'url(#c)'}
                fill-rule="nonzero"
            />
        </g>
    </svg>
);

export default AudioPlay;
