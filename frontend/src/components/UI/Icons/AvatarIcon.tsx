const AvatarIcon = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="88"
            height="88"
            viewBox="0 0 88 88"
            fill="none"
            {...props}
        >
            <script xmlns="" />
            <rect x="0.5" y="0.5" width="87" height="87" rx="43.5" fill="url(#paint0_linear_0_3557)" />
            <rect x="0.5" y="0.5" width="87" height="87" rx="43.5" stroke="url(#paint1_linear_0_3557)" />
            <g filter="url(#filter0_d_0_3557)">
                <rect x="16" y="16" width="56" height="56" rx="28" fill="white" />
                <rect x="16.5" y="16.5" width="55" height="55" rx="27.5" stroke="#E2E4E9" />
                <path d="M46.1 46.3646V54.5H35.6C35.5997 53.2178 35.8929 51.9526 36.4571 50.8013C37.0214 49.6499 37.8417 48.643 38.8552 47.8577C39.8688 47.0725 41.0486 46.5296 42.3044 46.2708C43.5602 46.012 44.8585 46.0441 46.1 46.3646ZM44 45.05C40.5193 45.05 37.7 42.2308 37.7 38.75C37.7 35.2693 40.5193 32.45 44 32.45C47.4808 32.45 50.3 35.2693 50.3 38.75C50.3 42.2308 47.4808 45.05 44 45.05ZM50.3 49.25V46.1H52.4V49.25H55.55V51.35H52.4V54.5H50.3V51.35H47.15V49.25H50.3Z" fill="#525866" />
            </g>
            <defs>
                <filter id="filter0_d_0_3557" x="12" y="14" width="64" height="64" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="2" />
                    <feGaussianBlur stdDeviation="2" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.105882 0 0 0 0 0.109804 0 0 0 0 0.113725 0 0 0 0.04 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_3557" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_3557" result="shape" />
                </filter>
                <linearGradient id="paint0_linear_0_3557" x1="44" y1="0" x2="44" y2="88" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#E4E5E7" stopOpacity="0.48" />
                    <stop offset="1" stopColor="#F7F8F8" stopOpacity="0" />
                    <stop offset="1" stopColor="#E4E5E7" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="paint1_linear_0_3557" x1="44" y1="0" x2="44" y2="88" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#E4E5E7" />
                    <stop offset="0.765625" stopColor="#E4E5E7" stopOpacity="0" />
                </linearGradient>
            </defs>
            <script xmlns="" />
        </svg>
    )
}

export default AvatarIcon